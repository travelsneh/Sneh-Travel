import React, { useState } from "react";

const phone = "+91 84488 68866";
const email = "[travelsneh@gmail.com](mailto:travelsneh@gmail.com)";

const destinations = [
{
id: 1,
name: "Manali",
state: "Himachal Pradesh",
image:
"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
description:
"Beautiful mountains, valleys, adventure activities and peaceful stays.",
},
{
id: 2,
name: "Goa",
state: "Goa",
image:
"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
description:
"Relax on beautiful beaches, enjoy local food and experience Goa.",
},
{
id: 3,
name: "Kerala",
state: "Kerala",
image:
"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
description:
"Backwaters, greenery, beaches and unforgettable family holidays.",
},
{
id: 4,
name: "Rajasthan",
state: "Rajasthan",
image:
"https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
description:
"Royal palaces, forts, colourful markets and rich Indian culture.",
},
{
id: 5,
name: "Kashmir",
state: "Jammu & Kashmir",
image:
"https://images.unsplash.com/photo-1606210120700-6c9c8b7a2b5c?auto=format&fit=crop&w=900&q=80",
description:
"Snow-covered mountains, lakes and scenic valleys.",
},
{
id: 6,
name: "Dubai",
state: "UAE",
image:
"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
description:
"Luxury shopping, desert adventures and world-famous attractions.",
},
];

const packages = [
{
id: 1,
title: "Family Holidays",
price: "From ₹12,999",
icon: "👨‍👩‍👧‍👦",
text: "Comfortable and memorable holidays planned for families.",
},
{
id: 2,
title: "Honeymoon Trips",
price: "From ₹19,999",
icon: "💑",
text: "Romantic destinations and beautiful experiences for couples.",
},
{
id: 3,
title: "Adventure Trips",
price: "From ₹9,999",
icon: "🏔️",
text: "Exciting outdoor experiences for adventure lovers.",
},
];

function Header({ onAdminClick }) {
return ( <header className="header"> <div className="container nav-container"> <a href="#home" className="logo"> <span className="logo-icon">✈</span>


      <span>
        <strong>Sneh Travel</strong>
        <small>Travel With Happiness</small>
      </span>
    </a>

    <nav className="nav">
      <a href="#home">Home</a>
      <a href="#destinations">Destinations</a>
      <a href="#packages">Packages</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>

      <button className="admin-link" onClick={onAdminClick}>
        Admin
      </button>
    </nav>

    <a className="call-button" href={`tel:${phone}`}>
      Call Now
    </a>
  </div>
</header>


);
}

function Hero({ onEnquiry }) {
return ( <section className="hero" id="home"> <div className="hero-overlay"> <div className="container hero-content"> <span className="hero-badge">YOUR JOURNEY STARTS HERE</span>


      <h1>
        Explore India.
        <br />
        <span>Create Beautiful Memories.</span>
      </h1>

      <p>
        Discover amazing destinations, comfortable stays and personalised
        travel experiences with Sneh Travel.
      </p>

      <div className="hero-buttons">
        <a href="#destinations" className="primary-button">
          Explore Destinations
        </a>

        <button className="secondary-button" onClick={onEnquiry}>
          Plan My Trip
        </button>
      </div>
    </div>
  </div>
</section>


);
}

function Destinations() {
return ( <section className="section" id="destinations"> <div className="container"> <div className="section-heading"> <span>TRAVEL INSPIRATION</span> <h2>Popular Destinations</h2> <p>
Explore some of our most loved destinations for unforgettable
holidays. </p> </div>


    <div className="cards">
      {destinations.map((destination) => (
        <article className="card" key={destination.id}>
          <div className="card-image">
            <img src={destination.image} alt={destination.name} />
            <span>{destination.state}</span>
          </div>

          <div className="card-content">
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <a href="#contact">Plan this trip →</a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


);
}

function Packages({ onEnquiry }) {
return ( <section className="section light-section" id="packages"> <div className="container"> <div className="section-heading"> <span>OUR SERVICES</span> <h2>Travel Packages</h2> <p>Choose a package and let us plan the rest for you.</p> </div>


    <div className="package-grid">
      {packages.map((item) => (
        <div className="package-card" key={item.id}>
          <div className="package-icon">{item.icon}</div>

          <h3>{item.title}</h3>

          <p>{item.text}</p>

          <strong>{item.price}</strong>

          <button onClick={onEnquiry}>Enquire Now</button>
        </div>
      ))}
    </div>
  </div>
</section>


);
}

function About() {
return ( <section className="section" id="about"> <div className="container about-grid"> <div className="about-image"> <img
         src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80"
         alt="Travel"
       /> </div>


    <div className="about-content">
      <span>ABOUT SNEH TRAVEL</span>

      <h2>Making Travel Simple, Memorable & Personal</h2>

      <p>
        Sneh Travel helps travellers discover beautiful destinations
        through simple, reliable and personalised travel planning.
      </p>

      <p>
        From family holidays to romantic getaways and adventure trips, we
        work with you to create an itinerary that matches your needs and
        budget.
      </p>

      <div className="features">
        <div>
          <strong>10+</strong>
          <span>Destinations</span>
        </div>

        <div>
          <strong>500+</strong>
          <span>Happy Travellers</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Travel Support</span>
        </div>
      </div>
    </div>
  </div>
</section>


);
}

function Contact({ onSubmit }) {
const [form, setForm] = useState({
name: "",
phone: "",
destination: "",
message: "",
});

function handleChange(event) {
const { name, value } = event.target;


setForm((current) => ({
  ...current,
  [name]: value,
}));


}

function handleSubmit(event) {
event.preventDefault();


if (!form.name || !form.phone || !form.destination) {
  alert("Please fill in your name, phone number and destination.");
  return;
}

onSubmit(form);

setForm({
  name: "",
  phone: "",
  destination: "",
  message: "",
});


}

return ( <section className="section contact-section" id="contact"> <div className="container contact-grid"> <div className="contact-info"> <span>GET IN TOUCH</span>


      <h2>Let's Plan Your Next Journey</h2>

      <p>
        Tell us where you want to go and we will help you create a
        comfortable and memorable trip.
      </p>

      <div className="contact-item">
        <strong>📞 Phone</strong>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>

      <div className="contact-item">
        <strong>✉ Email</strong>
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <div className="contact-item">
        <strong>📍 Location</strong>
        <span>Delhi, India</span>
      </div>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send an Enquiry</h3>

      <label>
        Your Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>

      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </label>

      <label>
        Destination
        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
        >
          <option value="">Select destination</option>

          {destinations.map((destination) => (
            <option key={destination.id} value={destination.name}>
              {destination.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your trip"
          rows="4"
        />
      </label>

      <button type="submit" className="submit-button">
        Submit Enquiry
      </button>
    </form>
  </div>
</section>


);
}

function Footer({ onAdminClick }) {
return ( <footer className="footer"> <div className="container footer-grid"> <div> <h3>Sneh Travel</h3> <p>Making travel simple, memorable and personal.</p> </div>


    <div>
      <h4>Quick Links</h4>
      <a href="#home">Home</a>
      <a href="#destinations">Destinations</a>
      <a href="#packages">Packages</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
    </div>

    <div>
      <h4>Contact</h4>
      <a href={`tel:${phone}`}>{phone}</a>
      <a href={`mailto:${email}`}>{email}</a>
      <span>Delhi, India</span>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="container">
      <span>© 2026 Sneh Travel. All rights reserved.</span>

      <button onClick={onAdminClick}>Admin Login</button>
    </div>
  </div>
</footer>


);
}

function AdminPanel({ enquiries, onClose, onClear }) {
return ( <div className="admin-page"> <div className="admin-header"> <div> <span>ADMIN PANEL</span> <h1>Sneh Travel Dashboard</h1> <p>Manage customer enquiries from your website.</p> </div>


    <button className="close-admin" onClick={onClose}>
      ← Back to Website
    </button>
  </div>

  <div className="admin-stats">
    <div>
      <span>Total Enquiries</span>
      <strong>{enquiries.length}</strong>
    </div>

    <div>
      <span>Destinations</span>
      <strong>{destinations.length}</strong>
    </div>

    <div>
      <span>Website Status</span>
      <strong className="status">Active</strong>
    </div>
  </div>

  <div className="admin-content">
    <div className="admin-card">
      <div className="admin-card-header">
        <div>
          <span>ENQUIRIES</span>
          <h2>Customer Enquiries</h2>
        </div>

        {enquiries.length > 0 && (
          <button className="clear-button" onClick={onClear}>
            Clear All
          </button>
        )}
      </div>

      {enquiries.length === 0 ? (
        <div className="empty-state">
          <div>📋</div>
          <h3>No enquiries yet</h3>
          <p>
            Customer enquiries submitted from the website will appear
            here.
          </p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Destination</th>
                <th>Message</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.name}</td>
                  <td>
                    <a href={`tel:${enquiry.phone}`}>{enquiry.phone}</a>
                  </td>
                  <td>{enquiry.destination}</td>
                  <td>{enquiry.message || "No message"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
</div>


);
}

function App() {
const [showAdmin, setShowAdmin] = useState(false);

const [enquiries, setEnquiries] = useState(() => {
try {
const saved = localStorage.getItem("snehTravelEnquiries");
return saved ? JSON.parse(saved) : [];
} catch {
return [];
}
});

function saveEnquiries(data) {
setEnquiries(data);


try {
  localStorage.setItem("snehTravelEnquiries", JSON.stringify(data));
} catch {
  // Ignore localStorage errors.
}


}

function addEnquiry(formData) {
const newEnquiry = {
...formData,
id: Date.now(),
createdAt: new Date().toLocaleString(),
};


const updatedEnquiries = [...enquiries, newEnquiry];

saveEnquiries(updatedEnquiries);

alert(
  `Thank you ${formData.name}! Your enquiry for ${formData.destination} has been received. We will contact you at ${formData.phone}.`
);


}

function clearEnquiries() {
if (
window.confirm(
"Are you sure you want to delete all customer enquiries?"
)
) {
saveEnquiries([]);
}
}

function scrollToContact() {
document.getElementById("contact")?.scrollIntoView({
behavior: "smooth",
});
}

if (showAdmin) {
return (
<> <style>{styles}</style>


    <AdminPanel
      enquiries={enquiries}
      onClose={() => setShowAdmin(false)}
      onClear={clearEnquiries}
    />
  </>
);


}

return (
<> <style>{styles}</style>


  <Header onAdminClick={() => setShowAdmin(true)} />

  <main>
    <Hero onEnquiry={scrollToContact} />
    <Destinations />
    <Packages onEnquiry={scrollToContact} />
    <About />
    <Contact onSubmit={addEnquiry} />
  </main>

  <Footer onAdminClick={() => setShowAdmin(true)} />
</>


);
}

const styles = `

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

html {
scroll-behavior: smooth;
}

body {
font-family: Arial, Helvetica, sans-serif;
background: #f7fbff;
color: #172b4d;
line-height: 1.6;
}

button,
input,
select,
textarea {
font: inherit;
}

button {
cursor: pointer;
}

a {
text-decoration: none;
color: inherit;
}

.container {
width: min(1180px, 92%);
margin: 0 auto;
}

.header {
position: sticky;
top: 0;
z-index: 100;
background: #ffffff;
border-bottom: 1px solid #e7edf4;
box-shadow: 0 2px 12px rgba(16, 54, 86, 0.06);
}

.nav-container {
min-height: 78px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 25px;
}

.logo {
display: flex;
align-items: center;
gap: 10px;
color: #075985;
}

.logo-icon {
width: 42px;
height: 42px;
border-radius: 12px;
display: grid;
place-items: center;
background: #0ea5a4;
color: #ffffff;
font-size: 22px;
}

.logo strong {
display: block;
font-size: 21px;
}

.logo small {
display: block;
color: #6b7c93;
font-size: 10px;
letter-spacing: 1px;
text-transform: uppercase;
}

.nav {
display: flex;
align-items: center;
gap: 25px;
}

.nav a,
.admin-link {
color: #41556b;
font-size: 14px;
font-weight: 600;
transition: 0.2s;
}

.nav a:hover,
.admin-link:hover {
color: #0ea5a4;
}

.admin-link {
border: 0;
background: transparent;
}

.call-button {
background: #0ea5a4;
color: white;
padding: 11px 18px;
border-radius: 9px;
font-weight: 700;
font-size: 13px;
}

.hero {
min-height: 620px;
background-image:
linear-gradient(
90deg,
rgba(4, 32, 52, 0.82),
rgba(4, 32, 52, 0.48),
rgba(4, 32, 52, 0.15)
),
url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85");
background-size: cover;
background-position: center;
display: flex;
align-items: center;
}

.hero-content {
color: #ffffff;
padding: 80px 0;
}

.hero-badge {
display: inline-block;
padding: 8px 13px;
background: rgba(14, 165, 164, 0.92);
border-radius: 50px;
font-size: 11px;
font-weight: 800;
letter-spacing: 1.2px;
margin-bottom: 18px;
}

.hero h1 {
font-size: clamp(42px, 6vw, 76px);
line-height: 1.05;
max-width: 760px;
margin-bottom: 22px;
}

.hero h1 span {
color: #63e6e3;
}

.hero p {
max-width: 620px;
font-size: 18px;
color: #e8f4f6;
margin-bottom: 30px;
}

.hero-buttons {
display: flex;
gap: 13px;
flex-wrap: wrap;
}

.primary-button,
.secondary-button {
padding: 14px 21px;
border-radius: 9px;
font-weight: 700;
border: 0;
}

.primary-button {
background: #0ea5a4;
color: #ffffff;
}

.secondary-button {
background: #ffffff;
color: #075985;
}

.section {
padding: 85px 0;
}

.light-section {
background: #eef8fa;
}

.section-heading {
text-align: center;
max-width: 700px;
margin: 0 auto 45px;
}

.section-heading span,
.about-content > span,
.contact-info > span,
.admin-header > div > span,
.admin-card-header span {
color: #0ea5a4;
font-weight: 800;
font-size: 11px;
letter-spacing: 1.5px;
}

.section-heading h2 {
font-size: clamp(30px, 4vw, 46px);
color: #12324a;
margin: 7px 0 10px;
}

.section-heading p {
color: #6c7d8f;
}

.cards {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
}

.card {
background: #ffffff;
border-radius: 16px;
overflow: hidden;
box-shadow: 0 8px 28px rgba(26, 65, 90, 0.08);
transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
transform: translateY(-5px);
box-shadow: 0 15px 35px rgba(26, 65, 90, 0.14);
}

.card-image {
height: 230px;
position: relative;
overflow: hidden;
}

.card-image img {
width: 100%;
height: 100%;
object-fit: cover;
}

.card-image span {
position: absolute;
left: 14px;
bottom: 14px;
background: rgba(255, 255, 255, 0.92);
color: #075985;
padding: 6px 10px;
border-radius: 7px;
font-size: 11px;
font-weight: 800;
}

.card-content {
padding: 22px;
}

.card-content h3 {
color: #12324a;
font-size: 23px;
margin-bottom: 8px;
}

.card-content p {
color: #6b7c93;
min-height: 72px;
font-size: 14px;
}

.card-content a {
display: inline-block;
margin-top: 15px;
color: #0ea5a4;
font-weight: 800;
font-size: 14px;
}

.package-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
}

.package-card {
background: #ffffff;
padding: 30px;
border-radius: 16px;
text-align: center;
border: 1px solid #dceff2;
box-shadow: 0 8px 25px rgba(26, 65, 90, 0.05);
}

.package-icon {
width: 65px;
height: 65px;
display: grid;
place-items: center;
background: #e5f7f7;
border-radius: 50%;
font-size: 28px;
margin: 0 auto 15px;
}

.package-card h3 {
font-size: 22px;
margin-bottom: 10px;
}

.package-card p {
color: #6b7c93;
margin-bottom: 15px;
}

.package-card strong {
display: block;
color: #0ea5a4;
font-size: 18px;
margin-bottom: 18px;
}

.package-card button {
border: 0;
background: #075985;
color: white;
padding: 11px 18px;
border-radius: 8px;
font-weight: 700;
}

.about-grid {
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
gap: 65px;
}

.about-image img {
width: 100%;
height: 500px;
object-fit: cover;
border-radius: 20px;
}

.about-content h2,
.contact-info h2 {
color: #12324a;
font-size: clamp(32px, 4vw, 48px);
line-height: 1.15;
margin: 10px 0 20px;
}

.about-content p {
color: #687b8f;
margin-bottom: 15px;
}

.features {
display: flex;
gap: 15px;
margin-top: 25px;
}

.features div {
flex: 1;
background: #f0f9fa;
border-radius: 12px;
padding: 15px;
}

.features strong,
.features span {
display: block;
}

.features strong {
color: #075985;
font-size: 24px;
}

.features span {
color: #708196;
font-size: 12px;
}

.contact-section {
background: #eaf7f8;
}

.contact-grid {
display: grid;
grid-template-columns: 0.9fr 1.1fr;
gap: 60px;
align-items: start;
}

.contact-info p {
color: #687b8f;
margin-bottom: 28px;
max-width: 500px;
}

.contact-item {
display: flex;
flex-direction: column;
margin: 18px 0;
}

.contact-item strong {
color: #12324a;
margin-bottom: 3px;
}

.contact-item a,
.contact-item span {
color: #607387;
}

.contact-form {
background: #ffffff;
padding: 32px;
border-radius: 18px;
box-shadow: 0 10px 35px rgba(24, 66, 90, 0.08);
}

.contact-form h3 {
color: #12324a;
font-size: 25px;
margin-bottom: 20px;
}

.contact-form label {
display: block;
color: #3c5065;
font-size: 13px;
font-weight: 700;
margin-bottom: 15px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
width: 100%;
margin-top: 7px;
padding: 12px 13px;
border: 1px solid #d7e2eb;
border-radius: 8px;
outline: none;
background: #fbfdff;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
border-color: #0ea5a4;
}

.submit-button {
width: 100%;
border: 0;
background: #0ea5a4;
color: #ffffff;
padding: 13px;
border-radius: 8px;
font-weight: 800;
margin-top: 5px;
}

.footer {
background: #092b3e;
color: #d9e9ef;
padding-top: 55px;
}

.footer-grid {
display: grid;
grid-template-columns: 1.5fr 1fr 1fr;
gap: 40px;
padding-bottom: 45px;
}

.footer h3 {
color: #ffffff;
font-size: 25px;
margin-bottom: 10px;
}

.footer h4 {
color: #ffffff;
margin-bottom: 13px;
}

.footer p {
color: #9fb5c1;
max-width: 330px;
}

.footer-grid div:not(:first-child) a,
.footer-grid div:not(:first-child) span {
display: block;
color: #9fb5c1;
margin: 7px 0;
font-size: 14px;
}

.footer-grid a:hover {
color: #63e6e3 !important;
}

.footer-bottom {
border-top: 1px solid rgba(255,255,255,0.1);
padding: 18px 0;
}

.footer-bottom .container {
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;
color: #8fa7b5;
font-size: 13px;
}

.footer-bottom button {
background: transparent;
color: #8fa7b5;
border: 1px solid #476270;
border-radius: 6px;
padding: 6px 10px;
}

.admin-page {
min-height: 100vh;
background: #f4f8fb;
}

.admin-header {
background: #092b3e;
color: white;
padding: 35px 5%;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
}

.admin-header h1 {
margin-top: 4px;
}

.admin-header p {
color: #a8bdc8;
margin-top: 5px;
}

.close-admin {
border: 1px solid rgba(255,255,255,0.35);
background: transparent;
color: white;
padding: 11px 17px;
border-radius: 8px;
}

.admin-stats {
width: 90%;
max-width: 1180px;
margin: 30px auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
}

.admin-stats div {
background: white;
padding: 25px;
border-radius: 13px;
box-shadow: 0 6px 20px rgba(30,60,80,0.06);
}

.admin-stats span {
display: block;
color: #708196;
font-size: 13px;
}

.admin-stats strong {
display: block;
color: #12324a;
font-size: 32px;
margin-top: 5px;
}

.admin-stats .status {
color: #0ea5a4;
font-size: 22px;
margin-top: 13px;
}

.admin-content {
width: 90%;
max-width: 1180px;
margin: 0 auto 50px;
}

.admin-card {
background: white;
border-radius: 15px;
padding: 28px;
box-shadow: 0 6px 20px rgba(30,60,80,0.06);
}

.admin-card-header {
display: flex;
justify-content: space-between;
align-items: center;
gap: 15px;
}

.admin-card-header h2 {
color: #12324a;
margin-top: 3px;
}

.clear-button {
background: #dc3545;
border: 0;
color: white;
padding: 9px 14px;
border-radius: 7px;
font-weight: 700;
}

.empty-state {
text-align: center;
padding: 70px 20px;
color: #718397;
}

.empty-state div {
font-size: 45px;
margin-bottom: 10px;
}

.empty-state h3 {
color: #12324a;
margin-bottom: 5px;
}

.table-wrapper {
overflow-x: auto;
margin-top: 25px;
}

table {
width: 100%;
border-collapse: collapse;
min-width: 700px;
}

th,
td {
text-align: left;
padding: 14px;
border-bottom: 1px solid #e8eef3;
font-size: 13px;
}

th {
background: #f5fafb;
color: #355269;
}

td {
color: #607387;
}

td a {
color: #0ea5a4;
font-weight: 700;
}

@media (max-width: 900px) {
.nav {
display: none;
}

.cards,
.package-grid {
grid-template-columns: repeat(2, 1fr);
}

.about-grid,
.contact-grid {
grid-template-columns: 1fr;
}

.footer-grid {
grid-template-columns: 1fr 1fr;
}
}

@media (max-width: 600px) {
.call-button {
display: none;
}

.cards,
.package-grid,
.admin-stats,
.footer-grid {
grid-template-columns: 1fr;
}

.hero {
min-height: 560px;
}

.hero h1 {
font-size: 43px;
}

.section {
padding: 60px 0;
}

.about-image img {
height: 350px;
}

.features {
flex-direction: column;
}

.footer-bottom .container {
flex-direction: column;
text-align: center;
}

.admin-header {
flex-direction: column;
align-items: flex-start;
}

.admin-card-header {
align-items: flex-start;
flex-direction: column;
}
}
`;

export default App;
