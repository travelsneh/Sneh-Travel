const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ===============================
// Enquiry storage
// ===============================

const dataDirectory = path.join(__dirname, "data");
const dataFile = path.join(dataDirectory, "enquiries.json");

if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory, { recursive: true });
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, "[]", "utf8");
}

function readEnquiries() {
  try {
    const data = fs.readFileSync(dataFile, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Could not read enquiries:", error);
    return [];
  }
}

function writeEnquiries(enquiries) {
  fs.writeFileSync(
    dataFile,
    JSON.stringify(enquiries, null, 2),
    "utf8"
  );
}

// ===============================
// Email
// ===============================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// ===============================
// API
// ===============================

app.get("/", (req, res) => {
  res.json({
    message: "Sneh Travel API is running",
  });
});

// Get all enquiries
app.get("/api/enquiries", (req, res) => {
  const enquiries = readEnquiries();

  res.json(enquiries);
});

// Add enquiry
app.post("/api/enquiries", async (req, res) => {
  try {
    const {
      name,
      phone,
      destination,
      message,
    } = req.body;

    if (!name || !phone || !destination) {
      return res.status(400).json({
        success: false,
        message:
          "Name, phone and destination are required.",
      });
    }

    const enquiries = readEnquiries();

    const newEnquiry = {
      id: Date.now().toString(),
      name,
      phone,
      destination,
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    enquiries.unshift(newEnquiry);

    writeEnquiries(enquiries);

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject:
          "New Sneh Travel Enquiry - " +
          destination,
        text: `
New customer enquiry

Name: ${name}
Phone: ${phone}
Destination: ${destination}
Message: ${message || "No message"}

Please contact the customer.
        `,
      });
    } catch (emailError) {
      console.error(
        "Email error:",
        emailError
      );

      // Enquiry is still saved even if email fails.
    }

    res.status(201).json({
      success: true,
      message: "Enquiry received successfully.",
      enquiry: newEnquiry,
    });
  } catch (error) {
    console.error(
      "Enquiry error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Could not save enquiry.",
    });
  }
});

// Delete one enquiry
app.delete("/api/enquiries/:id", (req, res) => {
  try {
    const { id } = req.params;

    const enquiries = readEnquiries();

    const filtered = enquiries.filter(
      (enquiry) =>
        String(enquiry.id) !== String(id)
    );

    if (filtered.length === enquiries.length) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    writeEnquiries(filtered);

    res.json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Could not delete enquiry.",
    });
  }
});

// Delete all enquiries
app.delete("/api/enquiries", (req, res) => {
  try {
    writeEnquiries([]);

    res.json({
      success: true,
      message:
        "All enquiries deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete all error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Could not delete enquiries.",
    });
  }
});

// ===============================
// Start server
// ===============================

app.listen(PORT, () => {
  console.log(
    `Sneh Travel API running on http://localhost:${PORT}`
  );
});