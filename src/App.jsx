import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { supabase } from "./lib/supabase";

/* =========================================================
   SNEH TRAVEL - CONTACT DETAILS
========================================================= */

const phone = "+91 84488 68866";
const email = "snehtravel@gmail.com";
const whatsappUrl = "https://wa.me/918448868866";

/* =========================================================
   SUPABASE
========================================================= */

/* =========================================================
   DESTINATIONS
========================================================= */

const destinations = [
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "Snow mountains, valleys and unforgettable Himalayan experiences.",
  },
  {
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description: "Beaches, sunsets, nightlife and relaxing holidays.",
  },
  {
    name: "Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    description: "Backwaters, greenery, beaches and beautiful hill stations.",
  },
  {
    name: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    description: "Royal palaces, forts, culture and desert experiences.",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d0d9d9d0?auto=format&fit=crop&w=1200&q=80",
    description: "Paradise in the mountains with lakes, valleys and snow.",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    description: "Luxury, shopping, desert safari and modern attractions.",
  },
];

/* =========================================================
   PACKAGES
========================================================= */

const packages = [
  {
    title: "Family Holidays",
    image:
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=80",
    description:
      "Comfortable and memorable holidays planned specially for families.",
  },
  {
    title: "Honeymoon Trips",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Romantic destinations and carefully planned honeymoon experiences.",
  },
  {
    title: "Adventure Trips",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Exciting mountain, trekking and adventure holidays.",
  },
];

/* =========================================================
   INTERNATIONAL DESTINATIONS
========================================================= */

const internationalDestinations = [
  "Thailand",
  "Dubai",
  "Singapore",
  "Malaysia",
  "Bali",
  "Sri Lanka",
  "Vietnam",
];

/* =========================================================
   DOMESTIC DESTINATIONS
========================================================= */

const domesticDestinations = [
  "Golden Triangle Packages",
  "Himachal Package",
  "Uttarakhand Packages",
  "Kashmir Packages",
  "Leh Ladakh Packages",
  "Rajasthan Packages",
  "Gujarat Packages",
  "Madhya Pradesh Packages",
  "Maharashtra Packages",
  "Goa Packages",
  "Kerala Packages",
  "Tamil Nadu Packages",
  "Karnataka Packages",
  "North East Packages",
  "Nepal Packages",
  "Bhutan Packages",
];

/* =========================================================
   DOMESTIC PACKAGE DATA
========================================================= */

const domesticPackageData = {
  "Golden Triangle Packages": {
    title: "Golden Triangle Packages",
    subtitle: "Delhi • Agra • Jaipur",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
    description:
      "Explore India's famous Golden Triangle covering Delhi, Agra and Jaipur. Discover historical monuments, royal palaces, colourful markets and rich Indian culture.",
  },

  "Himachal Package": {
    title: "Himachal Package",
    subtitle: "Shimla • Manali • Dharamshala",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    description:
      "Enjoy the beauty of Himachal Pradesh with mountain landscapes, pleasant weather, snow points, valleys and scenic hill stations.",
  },

  "Uttarakhand Packages": {
    title: "Uttarakhand Packages",
    subtitle: "Rishikesh • Mussoorie • Nainital",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    description:
      "Discover Uttarakhand's beautiful mountains, temples, rivers, adventure activities and peaceful hill stations.",
  },

  "Kashmir Packages": {
    title: "Kashmir Packages",
    subtitle: "Srinagar • Gulmarg • Pahalgam",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d0d9d9d0?auto=format&fit=crop&w=1600&q=80",
    description:
      "Experience Kashmir's beautiful valleys, Dal Lake, houseboats, snow-covered mountains and scenic landscapes.",
  },

  "Leh Ladakh Packages": {
    title: "Leh Ladakh Packages",
    subtitle: "Leh • Nubra • Pangong",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80",
    description:
      "A spectacular Himalayan adventure through high mountain passes, monasteries, Nubra Valley and Pangong Lake.",
  },

  "Rajasthan Packages": {
    title: "Rajasthan Packages",
    subtitle: "Jaipur • Jodhpur • Udaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",
    description:
      "Discover royal Rajasthan with magnificent forts, palaces, colourful markets and traditional culture.",
  },

  "Gujarat Packages": {
    title: "Gujarat Packages",
    subtitle: "Ahmedabad • Kutch • Somnath",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1600&q=80",
    description:
      "Explore Gujarat's heritage, temples, wildlife, handicrafts and the spectacular Rann of Kutch.",
  },

  "Madhya Pradesh Packages": {
    title: "Madhya Pradesh Packages",
    subtitle: "Khajuraho • Ujjain • Indore",
    image:
      "https://images.unsplash.com/photo-1600100397608-f0107f8b7f1f?auto=format&fit=crop&w=1600&q=80",
    description:
      "Explore historic temples, wildlife, heritage cities and spiritual destinations across Madhya Pradesh.",
  },

  "Maharashtra Packages": {
    title: "Maharashtra Packages",
    subtitle: "Mumbai • Pune • Lonavala",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80",
    description:
      "Enjoy Maharashtra's cities, beaches, hill stations, caves and cultural attractions.",
  },

  "Goa Packages": {
    title: "Goa Packages",
    subtitle: "Beaches • Churches • Leisure",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
    description:
      "Relax on beautiful beaches, explore Portuguese heritage and enjoy Goa's vibrant atmosphere.",
  },

  "Kerala Packages": {
    title: "Kerala Packages",
    subtitle: "Kochi • Munnar • Alleppey",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    description:
      "Experience Kerala's backwaters, tea gardens, beaches, wildlife and beautiful landscapes.",
  },

  "Tamil Nadu Packages": {
    title: "Tamil Nadu Packages",
    subtitle: "Chennai • Madurai • Rameswaram",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    description:
      "Explore magnificent temples, spiritual destinations, heritage and coastal attractions.",
  },

  "Karnataka Packages": {
    title: "Karnataka Packages",
    subtitle: "Bangalore • Mysore • Coorg",
    image:
      "https://images.unsplash.com/photo-1600100397608-f0107f8b7f1f?auto=format&fit=crop&w=1600&q=80",
    description:
      "Discover Karnataka's palaces, temples, waterfalls, coffee plantations and beautiful hill stations.",
  },

  "North East Packages": {
    title: "North East Packages",
    subtitle: "Assam • Meghalaya • Sikkim",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
    description:
      "Discover India's spectacular North East with mountains, waterfalls, forests and unique cultures.",
  },

  "Nepal Packages": {
    title: "Nepal Packages",
    subtitle: "Kathmandu • Pokhara • Chitwan",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
    description:
      "Explore Nepal's temples, Himalayan scenery, cultural heritage and adventure destinations.",
  },

  "Bhutan Packages": {
    title: "Bhutan Packages",
    subtitle: "Thimphu • Paro • Punakha",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    description:
      "Experience Bhutan's monasteries, mountain scenery, peaceful valleys and unique culture.",
  },
};

/* =========================================================
   HELPER
========================================================= */
/* =========================================================
   HELPER
========================================================= */

function makeSlug(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* =========================================================
   TRAVEL PACKAGE DATABASE FUNCTIONS
   Uses the current Supabase schema:
   packages
   package_itineraries
   package_hotels
   package_transport
   package_meal_plans
========================================================= */

async function loadTravelPackages(publishedOnly = false) {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  let query = supabase
    .from("packages")
    .select("*")
    .order("created_at", { ascending: false });

  if (publishedOnly) {
    query = query.eq("published", true);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data || [];
}

async function loadCompleteTravelPackage(packageId) {
  if (!supabase) throw new Error("Supabase is not configured.");

  const [pkgRes, itineraryRes, hotelRes, transportRes] = await Promise.all([
    supabase.from("packages").select("*").eq("id", packageId).single(),
    supabase.from("package_itineraries").select("*").eq("package_id", packageId).order("sort_order", { ascending: true }).order("day_number", { ascending: true }),
    supabase.from("package_hotels").select("*").eq("package_id", packageId).order("sort_order", { ascending: true }),
    supabase.from("transport_itineraries").select("*").eq("package_id", packageId).order("sort_order", { ascending: true }).order("day_number", { ascending: true })
  ]);

  if (pkgRes.error) throw pkgRes.error;
  if (itineraryRes.error) throw itineraryRes.error;
  if (hotelRes.error) throw hotelRes.error;
  if (transportRes.error) throw transportRes.error;

  const hotels = (hotelRes.data || []).map((row) => {
    return {
      id: row.id,
      city: row.city || "",
      hotel_name: row.hotel_name || "",
      category: row.category || "3 Star",
      room_type: row.room_type || "Standard",
      meal_plan: row.meal_plan || "CP",
      description: row.description || "",
      price: row.price ?? "",
      image_url: row.image_url || ""
    };
  });

  const transportOptions = (transportRes.data || []).map((row) => ({
    id: row.id,
    pickup: row.pickup_point || "",
    drop: row.drop_point || "",
    vehicle_type: row.vehicle_name || "Sedan",
    capacity: 4,
    trip_type: "Round Trip",
    price: row.rate ?? "",
    driver_included: true,
    description: row.description || (row.night_city ? `Night stay: ${row.night_city}` : "")
  }));

  return {
    ...pkgRes.data,
    itineraries: (itineraryRes.data || []).map((item) => ({
      id: item.id,
      day_number: item.day_number || 1,
      day_label: item.day_label || `Day ${String(item.day_number || 1).padStart(2, "0")}`,
      title: item.day_title || item.title || "",
      description: item.day_detail || item.description || "",
      activities: item.activities || "",
      location: item.location || "",
      night_stay: Boolean(item.night_stay),
      night_city: item.night_city || ""
    })),
    hotels,
    transportOptions,
    activities: []
  };
}

async function findOrCreateHotel(hotel) {
  const name = String(hotel.hotel_name || "").trim();
  const city = String(hotel.city || "").trim();
  if (!name) return null;

  let { data, error } = await supabase.from("hotels").select("*").ilike("name", name).ilike("city", city).limit(1).maybeSingle();
  if (error) throw error;
  if (data) return data;

  const result = await supabase.from("hotels").insert({
    destination_type: hotel.destination_type || "Domestic",
    city,
    name,
    category: hotel.category || "3 Star",
    active: true
  }).select().single();
  if (result.error) throw result.error;
  return result.data;
}

async function findOrCreateVehicle(option) {
  const vehicle = String(option.vehicle_type || "Sedan").trim();
  const capacity = Number(option.capacity) || 4;
  let { data, error } = await supabase.from("vehicles").select("*").ilike("vehicle", vehicle).limit(1).maybeSingle();
  if (error) throw error;
  if (data) return data;
  const result = await supabase.from("vehicles").insert({
    vehicle,
    vehicle_type: vehicle,
    seating_capacity: capacity,
    active: true
  }).select().single();
  if (result.error) throw result.error;
  return result.data;
}

async function saveCompleteTravelPackage(formData, editingId = null) {
  if (!supabase) throw new Error("Supabase is not configured.");

  const packagePayload = {
    title: formData.title?.trim() || "Untitled Package",
    package_type: formData.package_type || "Domestic",
    destination: formData.destination?.trim() || "",
    state: formData.state?.trim() || "",
    duration: formData.duration?.trim() || "",
    base_price: Number(formData.price) || 0,
    description: formData.description || "",
    image_url: formData.image_url?.trim() || "",
    inclusions: formData.inclusions || "",
    exclusions: formData.exclusions || "",
    published: Boolean(formData.published),
    margin_type: formData.margin_type || "percentage",
    margin_value: Number(formData.margin_value) || 0
  };

  let packageId = editingId;
  if (editingId) {
    const { error } = await supabase.from("packages").update(packagePayload).eq("id", editingId);
    if (error) throw error;
    packageId = editingId;
    for (const table of ["package_itineraries", "package_hotels", "transport_itineraries"]) {
      const { error: delError } = await supabase.from(table).delete().eq("package_id", packageId);
      if (delError) throw delError;
    }
  } else {
    const { data, error } = await supabase.from("packages").insert(packagePayload).select().single();
    if (error) throw error;
    packageId = data.id;
  }

  const itineraries = (formData.itineraries || []).map((item, index) => ({
    package_id: packageId,
    day_number: Number(item.day_number) || index + 1,
    day_label: item.day_label?.trim() || `Day ${String(Number(item.day_number) || index + 1).padStart(2, "0")}`,
    day_title: item.title?.trim() || `Day ${String(Number(item.day_number) || index + 1).padStart(2, "0")}`,
    day_detail: item.description || "",
    location: item.location || "",
    title: item.title?.trim() || `Day ${String(Number(item.day_number) || index + 1).padStart(2, "0")}`,
    description: item.description || "",
    activities: item.activities || "",
    night_stay: Boolean(item.night_stay),
    night_city: item.night_city?.trim() || "",
    sort_order: index
  })).filter(x => x.day_detail.trim() || x.day_title.trim() || x.location.trim() || x.activities.trim());
  if (itineraries.length) {
    const { error } = await supabase.from("package_itineraries").insert(itineraries);
    if (error) throw error;
  }

  const hotelRows = [];
  for (const [index, item] of (formData.hotels || []).entries()) {
    if (!(item.city?.trim() || item.hotel_name?.trim() || item.price)) continue;
    const hotel = await findOrCreateHotel(item);
    if (!hotel) continue;
    let rate = null;
    if (item.room_type?.trim() || item.meal_plan?.trim() || item.price) {
      const rateResult = await supabase.from("hotel_rates").insert({
        hotel_id: hotel.id,
        room_type: item.room_type?.trim() || "Standard",
        meal_plan: item.meal_plan?.trim() || "CP",
        room_rate_per_night: Number(item.price) || 0,
        extra_bed_rate: Number(item.extra_bed_rate) || 0,
        child_with_bed_rate: Number(item.child_with_bed_rate) || 0,
        child_without_bed_rate: Number(item.child_without_bed_rate) || 0,
        lunch_price_per_person: Number(item.lunch_price) || 0,
        dinner_price_per_person: Number(item.dinner_price) || 0,
        active: true
      }).select().single();
      if (rateResult.error) throw rateResult.error;
      rate = rateResult.data;
    }
    hotelRows.push({
      package_id: packageId,
      hotel_id: hotel.id,
      city: hotel.city || item.city || "",
      hotel_name: hotel.name || item.hotel_name || "",
      category: item.category || hotel.category || "",
      room_type: item.room_type || hotel.room_type || "Standard",
      meal_plan: item.meal_plan || "CP",
      description: item.description || "",
      price: Number(item.price) || 0,
      image_url: item.image_url || hotel.image_url || "",
      valid_from: null,
      valid_to: null,
      day_from: null,
      day_to: null,
      nights: Number(item.number_of_nights) || 1,
      sort_order: index,
      active: true
    });
  }
  if (hotelRows.length) {
    const { error } = await supabase.from("package_hotels").insert(hotelRows);
    if (error) throw error;
  }

  const transportRows = [];
  for (const [index, item] of (formData.transportOptions || []).entries()) {
    if (!(item.pickup?.trim() || item.drop?.trim() || item.vehicle_type?.trim() || item.price)) continue;
    const vehicle = await findOrCreateVehicle(item);
    transportRows.push({
      package_id: packageId,
      day_number: index + 1,
      pickup_point: item.pickup?.trim() || "",
      drop_point: item.drop?.trim() || "",
      vehicle_id: vehicle?.id || null,
      vehicle_name: item.vehicle_type?.trim() || "",
      number_of_days: Number(item.number_of_days) || 1,
      night_stay: Boolean(item.night_stay),
      night_city: item.night_stay_city?.trim() || "",
      rate: item.price === "" ? 0 : Number(item.price),
      description: item.description || "",
      active: true,
      sort_order: index
    });
  }
  if (transportRows.length) {
    const { error } = await supabase.from("transport_itineraries").insert(transportRows);
    if (error) throw error;
  }

  return packageId;
}

async function deleteTravelPackage(packageId) {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { error } = await supabase
    .from("packages")
    .delete()
    .eq("id", packageId);

  if (error) throw error;
}

async function toggleTravelPackagePublished(packageId, published) {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { error } = await supabase
    .from("packages")
    .update({ published: Boolean(published) })
    .eq("id", packageId);

  if (error) throw error;
}
/* =========================================================
   HEADER
========================================================= */

function Header({ activePage, setActivePage }) {
  const [internationalOpen, setInternationalOpen] = useState(false);
  const [domesticOpen, setDomesticOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const goTo = (page) => {
    setActivePage(page);
    setMobileOpen(false);
    setInternationalOpen(false);
    setDomesticOpen(false);
  };

  return (
    <>
      <style>{HOTEL_BUILDER_STYLES}
</style>
      <style>{`
        .st-header-wrap{position:sticky;top:0;z-index:1000;padding:10px 16px 0;background:rgba(248,251,255,.92);backdrop-filter:blur(14px)}
        .st-header{max-width:1280px;margin:0 auto;border:1px solid rgba(15,23,42,.08);border-radius:20px;background:rgba(255,255,255,.97);box-shadow:0 12px 35px rgba(15,23,42,.10);overflow:visible}
        .st-topline{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:7px 22px;min-height:32px;color:#64748b;font-size:12px;font-weight:700;border-bottom:1px solid rgba(15,23,42,.06)}
        .st-topline span{display:inline-flex;align-items:center;gap:7px}.st-topline strong{color:#0f766e}
        .st-header-inner{min-height:78px;display:flex;align-items:center;gap:20px;padding:12px 18px 12px 22px}
        .st-brand{flex:0 0 auto;display:flex;align-items:center;gap:11px;border:0;background:transparent;padding:0;cursor:pointer;text-align:left}
        .st-brand-mark{width:49px;height:49px;border-radius:15px;display:grid;place-items:center;color:#fff;font-size:22px;font-weight:950;background:linear-gradient(135deg,#0b7fab,#075985 55%,#0f766e);box-shadow:0 8px 18px rgba(7,89,133,.24);position:relative;overflow:hidden}
        .st-brand-mark:after{content:"";position:absolute;width:28px;height:8px;border-radius:50%;background:rgba(255,255,255,.22);transform:rotate(-25deg);top:8px;left:12px}
        .st-brand-copy{display:flex;flex-direction:column;line-height:1}.st-brand-name{font-size:23px;font-weight:950;letter-spacing:1.3px;color:#0f172a}.st-brand-name span{color:#0871c9}.st-brand-tag{margin-top:6px;font-size:9px;letter-spacing:2.6px;font-weight:900;color:#64748b}
        .st-nav{flex:1;display:flex;align-items:center;justify-content:center;gap:3px}.st-nav button,.st-nav-dropdown>button{border:0;background:transparent;color:#334155;cursor:pointer;font:inherit;font-size:13px;font-weight:850;padding:11px 12px;border-radius:12px;white-space:nowrap;transition:all .2s ease}
        .st-nav button:hover,.st-nav-dropdown>button:hover,.st-nav .st-active{color:#075985;background:#eff8ff}.st-nav .st-active{box-shadow:inset 0 -2px 0 #0871c9}
        .st-nav-dropdown{position:relative}.st-chevron{font-size:10px;margin-left:4px;opacity:.7}
        .st-dropdown{position:absolute;top:calc(100% + 9px);left:50%;transform:translateX(-50%);width:220px;max-height:380px;overflow:auto;padding:8px;background:#fff;border:1px solid rgba(15,23,42,.08);border-radius:15px;box-shadow:0 18px 45px rgba(15,23,42,.16)}
        .st-dropdown:before{content:"";position:absolute;top:-6px;left:50%;width:12px;height:12px;background:#fff;border-left:1px solid rgba(15,23,42,.08);border-top:1px solid rgba(15,23,42,.08);transform:translateX(-50%) rotate(45deg)}
        .st-dropdown button{width:100%;text-align:left;font-size:12px!important;font-weight:750!important;padding:10px 11px!important;border-radius:9px!important}.st-dropdown button:hover{background:#f1f8fc!important;color:#075985!important}
        .st-actions{display:flex;align-items:center;gap:9px;flex:0 0 auto}.st-call{display:flex;align-items:center;gap:9px;text-decoration:none;color:#0f172a;padding:8px 10px;border-radius:13px;background:#f8fafc;border:1px solid #e2e8f0}.st-call-icon{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:#e8f7ef;font-size:16px}.st-call small{display:block;color:#64748b;font-size:9px;font-weight:800;line-height:1.1}.st-call strong{display:block;color:#0f172a;font-size:12px;line-height:1.25}
        .st-enquire{border:0;cursor:pointer;color:#fff;background:linear-gradient(135deg,#0871c9,#075985);font-size:12px;font-weight:900;padding:13px 16px;border-radius:12px;box-shadow:0 8px 18px rgba(8,113,201,.22);transition:transform .2s ease,box-shadow .2s ease}.st-enquire:hover{transform:translateY(-1px);box-shadow:0 11px 23px rgba(8,113,201,.28)}
        .st-menu-btn{display:none;border:1px solid #e2e8f0;background:#f8fafc;border-radius:11px;width:42px;height:42px;font-size:20px;cursor:pointer}
        @media(max-width:1120px){.st-nav button,.st-nav-dropdown>button{padding:10px 8px;font-size:12px}.st-call{display:none}.st-header-inner{gap:12px}}
        @media(max-width:820px){.st-topline{display:none}.st-header-wrap{padding:7px 9px 0}.st-header-inner{min-height:67px;padding:10px 12px}.st-brand-mark{width:43px;height:43px;border-radius:13px;font-size:19px}.st-brand-name{font-size:20px}.st-brand-tag{font-size:8px;letter-spacing:2px}.st-menu-btn{display:block;margin-left:auto}.st-actions{display:none}.st-nav{display:none;position:absolute;left:10px;right:10px;top:78px;flex-direction:column;align-items:stretch;padding:10px;background:#fff;border:1px solid #e2e8f0;border-radius:16px;box-shadow:0 18px 45px rgba(15,23,42,.16);z-index:1001}.st-nav.st-mobile-open{display:flex}.st-nav button,.st-nav-dropdown>button{width:100%;text-align:left;padding:12px 13px}.st-nav-dropdown{width:100%}.st-dropdown{position:static;transform:none;width:100%;max-height:220px;box-shadow:none;border:0;background:#f8fafc;margin:3px 0 5px;padding:5px}.st-dropdown:before{display:none}}
      `}</style>

      <header className="st-header-wrap">
        <div className="st-header">
          <div className="st-topline">
            <span>✈️ <strong>Curated journeys</strong> • Domestic & International Holidays</span>
            <span>🌐 Hotels • Transport • Experiences • Custom Holidays</span>
          </div>

          <div className="st-header-inner">
            <button className="st-brand" onClick={() => goTo("home")} aria-label="Go to Sneh Travel home">
              <span className="st-brand-mark">S</span>
              <span className="st-brand-copy">
                <span className="st-brand-name">SNEH <span>TRAVEL</span></span>
                <span className="st-brand-tag">TRAVEL • EXPLORE • EXPERIENCE</span>
              </span>
            </button>

            <nav className={`st-nav ${mobileOpen ? "st-mobile-open" : ""}`}>
              <button className={activePage === "home" ? "st-active" : ""} onClick={() => goTo("home")}>Home</button>
              <button className={activePage === "about" ? "st-active" : ""} onClick={() => goTo("about")}>About Us</button>

              <div className="st-nav-dropdown" onMouseEnter={() => setInternationalOpen(true)} onMouseLeave={() => setInternationalOpen(false)}>
                <button onClick={() => setInternationalOpen((v) => !v)}>International <span className="st-chevron">▼</span></button>
                {internationalOpen && <div className="st-dropdown">{internationalDestinations.map((item) => <button key={item} onClick={() => goTo(`international-${makeSlug(item)}`)}>{item}</button>)}</div>}
              </div>

              <div className="st-nav-dropdown" onMouseEnter={() => setDomesticOpen(true)} onMouseLeave={() => setDomesticOpen(false)}>
                <button onClick={() => setDomesticOpen((v) => !v)}>Domestic <span className="st-chevron">▼</span></button>
                {domesticOpen && <div className="st-dropdown">{domesticDestinations.map((item) => <button key={item} onClick={() => goTo(`domestic-${makeSlug(item)}`)}>{item}</button>)}</div>}
              </div>

              <button className={activePage === "contact" ? "st-active" : ""} onClick={() => goTo("contact")}>Contact</button>
              <button className={activePage === "agent-login" || activePage === "agent-register" || activePage === "agent-dashboard" ? "st-active" : ""} onClick={() => goTo("agent-login")}>Agent Login</button>
                            <button className={activePage === "admin" ? "st-active" : ""} onClick={() => goTo("admin")}>Admin</button>
            </nav>

            <div className="st-actions">
              <a className="st-call" href={`tel:${phone}`}><span className="st-call-icon">📞</span><span><small>CALL US</small><strong>{phone}</strong></span></a>
              <button className="st-enquire" onClick={() => goTo("quotation")}>Plan My Trip →</button>
            </div>

            <button className="st-menu-btn" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">{mobileOpen ? "✕" : "☰"}</button>
          </div>
        </div>
      </header>
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ setActivePage }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-small">WELCOME TO SNEH TRAVEL</div>

          <h1>
            Explore the World.
            <br />
            Create Beautiful Memories.
          </h1>

          <p>
            Your trusted travel partner for memorable domestic and international
            holidays.
          </p>

          <div className="hero-buttons">
            <button onClick={() => setActivePage("quotation")}>
              Plan Your Trip
            </button>

            <button
              className="hero-outline"
              onClick={() => setActivePage("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DESTINATIONS
========================================================= */

function Destinations({ setActivePage }) {
  return (
    <section className="section">
      <div className="section-heading">
        <span>DISCOVER</span>
        <h2>Popular Destinations</h2>
        <p>Explore some of our most popular holiday destinations.</p>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <article className="destination-card" key={destination.name}>
            <img src={destination.image} alt={destination.name} />

            <div className="destination-content">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>

              <button onClick={() => setActivePage("quotation")}>
                Plan This Trip →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PACKAGES
========================================================= */

function Packages({ setActivePage }) {
  const [websitePackages, setWebsitePackages] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function loadWebsitePackages() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase
          .from("packages")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (!error && mounted) {
          setWebsitePackages(data || []);
        }
      } catch (error) {
        console.warn("Published packages could not be loaded:", error);
      }
    }

    loadWebsitePackages();
    return () => { mounted = false; };
  }, []);

  const publishedPackages = websitePackages.length
    ? websitePackages
    : packages;

  return (
    <section className="section light-section">
      <div className="section-heading">
        <span>OUR SERVICES</span>
        <h2>Holiday Packages</h2>
        <p>Travel experiences designed around your requirements.</p>
      </div>

      <div className="package-grid">
        {publishedPackages.map((item, index) => {
          const title = item.title || item.destination || "Holiday Package";
          const description = item.description || item.subtitle || "Customised travel package by Sneh Travel.";
          const image = item.image_url || item.image;

          return (
            <article className="package-card" key={item.id || item.title || index}>
              {image && <img src={image} alt={title} />}
              <div className="package-content">
                <h3>{title}</h3>
                {item.destination && <p className="package-destination">📍 {item.destination}</p>}
                {item.duration && <p className="package-duration">🗓 {item.duration}</p>}
                <p>{description}</p>
                <button onClick={() => setActivePage("quotation")}>
                  Get a Quote →
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}


const CONFIRMATION_PREVIEW_STYLES = `
.confirmation-preview-modal{width:min(980px,96vw)!important;padding:0!important;background:#e9e5dc!important;overflow:hidden!important;border-radius:16px!important}.confirmation-preview-modal .admin-modal-head{padding:15px 24px;background:#fffdf8;border-bottom:1px solid #d8d0c1}.confirmation-preview-document{padding:22px;background:#e9e5dc}.confirmation-preview-document .bk-page{width:100%!important;margin:0!important;box-shadow:0 14px 38px rgba(31,41,55,.16)!important;border:1px solid #d8d0c1!important}.confirmation-preview-modal .admin-modal-actions{padding:13px 20px!important;background:#fffdf8;border-top:1px solid #d8d0c1}
`;

const ADMIN_PUBLIC_STYLES = `
.admin-connected-packages{background:#f8fafc}.admin-connected-package-card{overflow:hidden;display:flex;flex-direction:column}.admin-connected-package-card .package-image-wrap{position:relative;height:230px;overflow:hidden}.admin-connected-package-card .package-image-wrap img{width:100%;height:100%;object-fit:cover;display:block}.admin-live-badge{position:absolute;top:14px;right:14px;background:#16803c;color:#fff;border-radius:999px;padding:6px 11px;font-size:12px;font-weight:800}.admin-package-meta{display:flex;flex-wrap:wrap;gap:7px;margin:14px 0;font-size:12px;color:#475569}.admin-package-meta span{background:#f1f5f9;border-radius:999px;padding:6px 9px}.admin-package-view{border:0;border-radius:10px;padding:11px 15px;font-weight:800;cursor:pointer;background:#111827;color:#fff}.admin-public-empty{max-width:900px;margin:0 auto;padding:28px;text-align:center;background:#fff;border:1px solid #e2e8f0;border-radius:16px;color:#64748b}.admin-public-modal-backdrop{position:fixed;inset:0;z-index:3000;background:rgba(15,23,42,.62);display:flex;align-items:center;justify-content:center;padding:20px;overflow:auto}.admin-public-modal{width:min(1050px,100%);max-height:92vh;overflow:auto;background:#fff;border-radius:20px;padding:24px;box-shadow:0 25px 70px rgba(15,23,42,.25)}.admin-public-modal-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;border-bottom:1px solid #e2e8f0;padding-bottom:15px}.admin-public-modal-head span{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#64748b}.admin-public-modal-head h2{margin:4px 0 0;font-size:30px}.admin-public-modal-head button{width:38px;height:38px;border:0;border-radius:50%;font-size:26px;cursor:pointer;background:#f1f5f9}.admin-public-description{color:#475569;line-height:1.7}.admin-public-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:18px 0}.admin-public-summary>div{padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc}.admin-public-summary small,.public-itinerary-row small,.public-hotel-row small{display:block;color:#64748b;font-size:12px;margin-bottom:4px}.admin-public-columns{display:grid;grid-template-columns:1fr 1fr;gap:24px}.admin-public-columns h3,.admin-public-vehicles h3{margin:18px 0 12px}.public-itinerary-row,.public-hotel-row{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid #e2e8f0}.public-itinerary-row>span{min-width:58px;font-weight:800}.public-hotel-row b{white-space:nowrap}.admin-public-vehicles{margin-top:8px}.admin-public-vehicles>div{display:flex;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid #e2e8f0}.admin-public-vehicles span{color:#64748b}.admin-public-vehicles b{margin-left:auto}.muted{color:#94a3b8}.admin-public-actions{display:flex;justify-content:flex-end;margin-top:20px}@media(max-width:800px){.admin-public-columns,.admin-public-summary{grid-template-columns:1fr}.admin-public-modal{padding:18px}.admin-connected-package-card .package-image-wrap{height:200px}}
`;

function AdminPublishedPackages({ setActivePage }) {
  const [items, setItems] = useState([]); const [loading, setLoading] = useState(true); const [selected, setSelected] = useState(null);
  async function loadPublishedPackages(){
    if(!supabase){setItems([]);setLoading(false);return;}
    try{
      setLoading(true);
      const {data,error}=await supabase.from("packages").select("*").eq("published",true).order("created_at",{ascending:false});
      if(error) throw error;
      const packages=data||[]; const ids=packages.map(p=>p.id);
      if(!ids.length){setItems([]);return;}
      const [iRes,hRes,tRes,dRes]=await Promise.all([
        supabase.from("package_itineraries").select("*").in("package_id",ids).order("sort_order"),
        supabase.from("package_hotels").select("*").in("package_id",ids).order("sort_order"),
        supabase.from("transport_itineraries").select("*").in("package_id",ids).order("sort_order"),
        supabase.from("destinations").select("id,name,destination,package_type,state,inclusions,exclusions,activities,supplement_costs").order("name")
      ]);
      if(iRes.error) throw iRes.error; if(hRes.error) throw hRes.error; if(tRes.error) throw tRes.error;
      const destinationRows=dRes.error?[]:(dRes.data||[]);
      setItems(packages.map(p=>{
        const destination=destinationRows.find(d=>String(d.id)===String(p.destination_id)) || destinationRows.find(d=>String(d.name||d.destination||"").toLowerCase()===String(p.destination||"").toLowerCase());
        return {...p,destinationContent:destination||null,itineraries:(iRes.data||[]).filter(x=>x.package_id===p.id),hotels:(hRes.data||[]).filter(x=>x.package_id===p.id),vehicles:(tRes.data||[]).filter(x=>x.package_id===p.id)};
      }));
    }catch(error){console.error(error);setItems([]);}finally{setLoading(false);}
  }
  useEffect(()=>{loadPublishedPackages();},[]);
  const money=v=>v===null||v===undefined||v===""?"":`₹${Number(v).toLocaleString("en-IN")}`;
  return <section className="section admin-connected-packages"><div className="section-heading"><span>LIVE FROM ADMIN</span><h2>Published Itineraries</h2><p>Published day-wise itineraries from your SNEH TRAVEL admin panel.</p></div>{loading?<div className="admin-public-empty">Loading published itineraries...</div>:!items.length?<div className="admin-public-empty">No published itineraries yet.</div>:<div className="package-grid">{items.map(pkg=><article className="package-card admin-connected-package-card" key={pkg.id}><div className="package-image-wrap"><img src={pkg.image_url||"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"} alt={pkg.destination||"Travel package"}/><span className="admin-live-badge">Published</span></div><div className="package-content"><span className="package-kicker">{pkg.package_type||"Travel Package"}</span><h3>{pkg.title||pkg.destination||"Holiday Package"}</h3><h4>{pkg.duration||"Custom Itinerary"}</h4><p>{pkg.description||"A customised Sneh Travel holiday package."}</p><div className="admin-package-meta"><span>🗓 {pkg.itineraries.length} days</span><span>🏨 {pkg.hotels.length} hotel options</span><span>🚗 {pkg.vehicles.length} vehicles</span></div><button className="admin-package-view" onClick={()=>setSelected(pkg)}>View Itinerary →</button></div></article>)}</div>}{selected&&<div className="admin-public-modal-backdrop" onClick={()=>setSelected(null)}><div className="admin-public-modal" onClick={e=>e.stopPropagation()}><div className="admin-public-modal-head"><div><span>{selected.package_type}</span><h2>{selected.title||selected.destination}</h2></div><button onClick={()=>setSelected(null)}>×</button></div><p className="admin-public-description">{selected.description}</p><div className="admin-public-summary"><div><small>Destination</small><strong>{selected.destination||"—"}</strong></div><div><small>Duration</small><strong>{selected.duration||"Custom"}</strong></div><div><small>Pricing</small><strong>Final amount after customization</strong></div></div><div className="admin-public-columns"><div><h3>Day-wise Itinerary</h3>{selected.itineraries.length?selected.itineraries.map((d,i)=><div className="public-itinerary-row" key={d.id||i}><span>Day {d.day_number}</span><div><strong>{d.title||"Travel"}</strong><small>{d.night_city||d.location||""}</small><p>{d.description}</p></div></div>):<p className="muted">Itinerary will be updated shortly.</p>}</div><div><h3>Hotel Options</h3>{selected.hotels.length?selected.hotels.map((row,i)=><div className="public-hotel-row" key={row.id||i}><div><strong>{row.hotel_name||"Hotel"}</strong><small>{row.city} · {row.category||""} · {row.room_type||"Room"} · {row.meal_plan||"CP"}</small></div></div>):<p className="muted">No hotel linked.</p>}</div></div>{selected.destinationContent&&<div className="admin-public-columns" style={{marginTop:20}}><div><h3>Activities & Sightseeing</h3>{Array.isArray(selected.destinationContent.activities)&&selected.destinationContent.activities.length?selected.destinationContent.activities.map((a,i)=><div className="public-itinerary-row" key={i}><span>•</span><div><strong>{a.title||"Activity"}</strong><small>{a.location||""}</small><p>{a.description||""}</p></div></div>):<p className="muted">Activities will be updated shortly.</p>}</div><div><h3>Inclusions</h3><p style={{whiteSpace:"pre-line",lineHeight:1.7}}>{selected.destinationContent.inclusions||selected.inclusions||"—"}</p><h3>Exclusions</h3><p style={{whiteSpace:"pre-line",lineHeight:1.7}}>{selected.destinationContent.exclusions||selected.exclusions||"—"}</p></div><div><h3>Supplement Costs</h3>{Array.isArray(selected.destinationContent.supplement_costs)&&selected.destinationContent.supplement_costs.length?selected.destinationContent.supplement_costs.filter(x=>x&&x.active!==false).map((a,i)=><div className="public-itinerary-row" key={`supp-${i}`}><div><strong>{a.title||"Supplement"}</strong><small>{a.description||""}</small></div><b>{money(a.cost||0)} / {a.unit||"per person"}</b></div>):<p className="muted">No supplement cost configured.</p>}</div></div>}<div className="admin-public-vehicles"><h3>Vehicle Options</h3>{selected.vehicles.map((v,i)=><div key={v.id||i}><strong>{v.vehicle_name||"Vehicle"}</strong><span>{v.city||""}</span></div>)}</div></div></div>}</section>;
}


/* =========================================================
   ABOUT
========================================================= */

function About({ setActivePage }) {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80"
          alt="Travel"
        />
      </div>

      <div className="about-content">
        <span>ABOUT SNEH TRAVEL</span>

        <h2>Your Journey, Our Responsibility</h2>

        <p>
          Sneh Travel is your trusted travel partner for domestic and
          international holidays. We believe every journey should be
          comfortable, memorable and carefully planned.
        </p>

        <p>
          From family holidays and honeymoon trips to adventure tours and
          customised travel plans, our team helps you plan your trip according
          to your destination, budget and requirements.
        </p>

        <div className="about-points">
          <div>
            <strong>✓</strong>
            <span>Customised Travel Plans</span>
          </div>

          <div>
            <strong>✓</strong>
            <span>Domestic & International Tours</span>
          </div>

          <div>
            <strong>✓</strong>
            <span>Personalised Customer Support</span>
          </div>

          <div>
            <strong>✓</strong>
            <span>Comfortable Travel Experiences</span>
          </div>
        </div>

        <button onClick={() => setActivePage("quotation")}>
          Plan Your Holiday
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT DETAILS
========================================================= */

function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="contact-detail-card">
        <div className="contact-icon">📞</div>
        <div>
          <span>Call Us</span>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>

      <div className="contact-detail-card">
        <div className="contact-icon">✉️</div>
        <div>
          <span>Email</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>

      <div className="contact-detail-card">
        <div className="contact-icon">📍</div>
        <div>
          <span>Office</span>
          <p>
            122, First Floor, Parmanand Colony,
            <br />
            Mukherjee Nagar, Delhi - 110009, India
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Contact Sneh Travel</h2>
        <p>We are here to help you plan your next journey.</p>
      </div>

      <ContactDetails />

      <div className="contact-action-box">
        <h3>Ready to plan your holiday?</h3>

        <p>
          Call us, send us an email or submit an enquiry with your travel
          requirements.
        </p>

        <div className="action-buttons">
          <a href={`tel:${phone}`}>📞 Call Now</a>
          <a href={`mailto:${email}`}>✉️ Email Us</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ENQUIRY FORM
========================================================= */

function Contact({ addWebsiteQuotation }) {
  const emptyDestination = (city = "", nights = 0, index = 0, startDate = "") => ({
    city, nights: Number(nights) || 0, checkIn: startDate || "", checkOut: "",
    singleRooms: index === 0 ? 0 : 0, doubleRooms: index === 0 ? 1 : 0,
    extraBed: 0, childWithBed: 0, childWithoutBed: 0,
    hotelCategory: "3 Star", hotelName: "", mealPlan: "CP",
    singleRate: 0, doubleRate: 0, extraBedRate: 0, childWithBedRate: 0, childWithoutBedRate: 0
  });
  const [form, setForm] = useState({
    name: "", phone: "", email: "", travel_date: "", adults: 2, children: 0,
    child_ages: "", rooms: 1, destination: "", itineraryKey: "", vehicleRateId: "",
    vehicle: "", pickup: "", drop: "", hotelCategory: "3 Star", mealPlan: "CP",
    destinations: [], notes: "", dateMode: "automatic"
  });
  const [inventory, setInventory] = useState({ destinations: [], itineraries: [], vehicleRates: [], vehicles: [], hotels: [], hotelRates: [] });
  const [pricingSetting, setPricingSetting] = useState({ margin_type: "percentage", margin_value: 8, currency: "INR" });
  const [loadingInventory, setLoadingInventory] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [createdQuotation, setCreatedQuotation] = useState(null);

  const money = value => `₹${Math.round(Number(value) || 0).toLocaleString("en-IN")}`;
  const normalize = value => String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
  const cityMatch = (a, b) => {
    const clean = value => normalize(value).split(",")[0].replace(/\([^)]*\)/g, "").replace(/\s[-–—].*$/, "").trim();
    const aliases = { alappuzha: "alleppey", aleppey: "alleppey", allepey: "alleppey", kochi: "cochin", ernakulam: "cochin" };
    const x = aliases[clean(a)] || clean(a), y = aliases[clean(b)] || clean(b);
    return x && y && x === y;
  };

  function parseNightStays(value) {
    const raw = String(value || "").split("||DAYWISE::")[0].trim();
    if (!raw) return [];
    return raw.split(/\s*\|\s*|\s*;\s*|\s*,\s*(?=[A-Za-z])/).map(part => {
      const m = part.match(/^(.+?)\s*:\s*(\d+)$/);
      return m ? { city: m[1].trim(), nights: Number(m[2]) || 0 } : null;
    }).filter(Boolean);
  }

  function parseDetailedItinerary(value) {
    const raw = String(value || "");
    const marker = "||DAYWISE::";
    const pos = raw.indexOf(marker);
    if (pos < 0) return [];
    try {
      const days = JSON.parse(raw.slice(pos + marker.length));
      return Array.isArray(days) ? days : [];
    } catch (e) { return []; }
  }

  function getDetailedDays(itinerary) {
    if (!itinerary) return [];
    const direct = Array.isArray(itinerary.daywise) ? itinerary.daywise : [];
    if (direct.length) return direct;
    const directString = String(itinerary.daywise || itinerary.day_wise || "").trim();
    if (directString) {
      try { const parsed = JSON.parse(directString); if (Array.isArray(parsed) && parsed.length) return parsed; } catch (e) {}
    }
    const encoded = parseDetailedItinerary(itinerary.night_stays);
    if (encoded.length) return encoded;
    return parseDetailedItinerary(itinerary.detailed_itinerary || itinerary.detail_itinerary || itinerary.day_wise_itinerary || "");
  }

  function formatDetailedDays(days) {
    return (Array.isArray(days) ? days : []).map((d, i) => {
      const dayNo = Number(d?.day) || i + 1;
      const title = String(d?.title || "").trim();
      const details = String(d?.details || d?.description || d?.itinerary || "").trim();
      const night = String(d?.nightStay || d?.night_stay || "").trim();
      return `Day ${String(dayNo).padStart(2,"0")}${title ? ` — ${title}` : ""}${details ? `\n${details}` : ""}${night ? `\nNight Stay: ${night}` : ""}`;
    }).filter(Boolean).join("\n\n");
  }

  function addDays(dateString, days) {
    if (!dateString) return "";
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.getTime())) return "";
    date.setDate(date.getDate() + (Number(days) || 0));
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function formatDateDisplay(dateString) {
    if (!dateString) return "—";
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }

  function buildDatedDestinations(cities, startDate, previous = []) {
    let cursor = startDate || "";
    return (cities.length ? cities : [{ city: "", nights: 0 }]).map((row, index) => {
      const old = previous[index] || {};
      const nights = Number(row.nights ?? old.nights) || 0;
      const checkIn = cursor || old.checkIn || "";
      const checkOut = checkIn ? addDays(checkIn, nights) : (old.checkOut || "");
      cursor = checkOut || cursor;
      return {
        ...emptyDestination(row.city || old.city || "", nights, index, checkIn),
        ...old,
        city: row.city || old.city || "",
        nights,
        checkIn,
        checkOut,
        singleRooms: Number(old.singleRooms) || 0,
        doubleRooms: Number(old.doubleRooms) || Math.max(1, Number(form.rooms) || 1),
        extraBed: Number(old.extraBed) || 0,
        childWithBed: Number(old.childWithBed) || 0,
        childWithoutBed: Number(old.childWithoutBed) || 0,
        hotelCategory: old.hotelCategory || form.hotelCategory || "3 Star",
        mealPlan: old.mealPlan || form.mealPlan || "CP"
      };
    });
  }

  useEffect(() => {
    let alive = true;
    async function loadInventory() {
      if (!supabase) return;
      setLoadingInventory(true);
      try {
        const [dRes, iRes, vrRes, vRes, hRes, hrRes, pRes] = await Promise.all([
          supabase.from("destinations").select("*").order("name"),
          supabase.from("itineraries").select("*").eq("active", true).order("destination").order("days").order("itinerary_name"),
          supabase.from("vehicle_rates").select("*").eq("active", true).order("destination").order("days").order("itinerary_name"),
          supabase.from("vehicles").select("id,name,vehicle,vehicle_type,seating_capacity,active"),
          supabase.from("hotels").select("id,name,city,category,active,destination_type"),
          supabase.from("hotel_rates").select("*"),
          supabase.from("pricing_settings").select("margin_type,margin_value,currency,active,created_at").eq("active", true).order("created_at", {ascending:false}).limit(1).maybeSingle()
        ]);
        if (!alive) return;
        const hotels = hRes.data || [];
        const hotelMap = new Map(hotels.map(h => [String(h.id), h]));
        const rates = (hrRes.data || []).filter(r => r.active !== false)
          .map(r => ({ ...r, hotel: hotelMap.get(String(r.hotel_id)) || null }))
          .filter(r => r.hotel && r.hotel.active !== false);
        const itineraries = (iRes.data || []).filter(r => r.active !== false).map(r => ({
          ...r,
          itinerary_key: r.itinerary_key || r.id,
          package_type: r.destination_type || r.package_type || "Domestic",
          nights: Number(r.nights) || 0,
          days: Number(r.days) || ((Number(r.nights) || 0) + 1),
        }));
        const vehicleRates = (vrRes.data || []).filter(r => r.active !== false).map(r => ({
          ...r,
          id: r.id,
          itinerary_key: r.itinerary_key || r.itinerary_id || "",
          rate: Number(r.selling_rate ?? r.rate ?? 0),
          vehicle_type: r.vehicle_type || "",
        }));
        setInventory({
          destinations: dRes.data || [], itineraries, vehicleRates,
          vehicles: vRes.data || [], hotels, hotelRates: rates
        });
        if (pRes?.data) {
          setPricingSetting({
            margin_type: String(pRes.data.margin_type || "percentage").toLowerCase(),
            margin_value: Math.max(0, Number(pRes.data.margin_value ?? 8) || 0),
            currency: pRes.data.currency || "INR"
          });
        } else {
          setPricingSetting({ margin_type: "percentage", margin_value: 8, currency: "INR" });
        }
      } catch (error) {
        console.error("Unable to load enquiry inventory:", error);
      } finally {
        if (alive) setLoadingInventory(false);
      }
    }
    loadInventory();
    return () => { alive = false; };
  }, []);

  const selectedDestinationProfile = inventory.destinations.find(d => cityMatch(d.name || d.destination, form.destination)) || null;
  const destinationSupplementCosts = (selectedDestinationProfile?.supplement_costs || []).filter(x => x && x.active !== false);
  const selectedSupplementCosts = Array.isArray(form.supplement_costs) ? form.supplement_costs : [];
  const selectedSupplementAmount = selectedSupplementCosts.reduce((sum, x) => {
    const cost = Number(x.cost) || 0;
    const unit = String(x.unit || "per person").toLowerCase();
    const qty = unit === "per person" ? Math.max(0, (Number(form.adults)||0) + (Number(form.children)||0)) : unit === "per room" ? Math.max(1, Number(form.rooms)||1) : 1;
    return sum + cost * qty;
  }, 0);

  const selectedItinerary = inventory.itineraries.find(x => String(x.itinerary_key || x.id) === String(form.itineraryKey)) || null;
  const matchingItineraries = inventory.itineraries.filter(i => !form.destination || cityMatch(i.destination, form.destination));
  const itineraryVehicleRates = inventory.vehicleRates.filter(r => {
    if (!selectedItinerary) return false;
    const keyMatch = String(r.itinerary_key || "") === String(selectedItinerary.itinerary_key || selectedItinerary.id || "");
    const nameMatch = normalize(r.itinerary_name) === normalize(selectedItinerary.itinerary_name) &&
      cityMatch(r.destination, selectedItinerary.destination) && Number(r.days) === Number(selectedItinerary.days);
    return keyMatch || nameMatch;
  });
  const selectedVehicleRate = itineraryVehicleRates.find(r => String(r.id) === String(form.vehicleRateId)) || null;
  const itineraryCities = selectedItinerary ? parseNightStays(selectedItinerary.night_stays) : [];
  const selectedDetailedDays = getDetailedDays(selectedItinerary);
  const selectedDetailedItineraryText = formatDetailedDays(selectedDetailedDays);
  const pickupOptions = [...new Set([
    selectedItinerary?.pickup_point,
    ...itineraryVehicleRates.map(r => r.pickup_point),
    ...matchingItineraries.map(i => i.pickup_point)
  ].filter(Boolean))];
  const dropOptions = [...new Set([
    selectedItinerary?.drop_point,
    ...itineraryVehicleRates.map(r => r.drop_point),
    ...matchingItineraries.map(i => i.drop_point)
  ].filter(Boolean))];
  const vehicleNameFor = rate => {
    const vehicle = inventory.vehicles.find(v => String(v.id) === String(rate?.vehicle_id));
    return vehicle?.name || vehicle?.vehicle || vehicle?.vehicle_type || rate?.vehicle_type || "Vehicle";
  };

  useEffect(() => {
    if (!selectedItinerary) return;
    const cities = itineraryCities.length ? itineraryCities : [{ city: selectedItinerary.destination || "", nights: Number(selectedItinerary.nights) || 0 }];
    const firstRate = itineraryVehicleRates[0] || null;
    setForm(prev => {
      const nextDestinations = buildDatedDestinations(cities, prev.travel_date || "", prev.destinations || []);
      return {
        ...prev,
        pickup: selectedItinerary.pickup_point || firstRate?.pickup_point || "",
        drop: selectedItinerary.drop_point || firstRate?.drop_point || "",
        destinations: nextDestinations,
        vehicleRateId: prev.vehicleRateId && itineraryVehicleRates.some(r => String(r.id) === String(prev.vehicleRateId)) ? prev.vehicleRateId : ""
      };
    });
  }, [form.itineraryKey, inventory.itineraries.length]);

  // When the user clicks “Create Quotation” from a published package/itinerary,
  // carry that exact destination + saved itinerary into the quotation page.
  useEffect(() => {
    if (!inventory.itineraries.length) return;
    try {
      const raw = localStorage.getItem("sneh_quote_prefill");
      if (!raw) return;
      const pref = JSON.parse(raw);
      localStorage.removeItem("sneh_quote_prefill");
      const destination = String(pref?.destination || "").trim();
      const key = String(pref?.itineraryKey || "");
      const match = inventory.itineraries.find(i => key && String(i.itinerary_key || i.id) === key) ||
        inventory.itineraries.find(i => destination && cityMatch(i.destination, destination));
      if (match) {
        setForm(prev => ({ ...prev, destination: match.destination || destination, itineraryKey: String(match.itinerary_key || match.id) }));
      }
    } catch (e) {}
  }, [inventory.itineraries.length]);

  useEffect(() => {
    if (form.dateMode !== "automatic" || !form.travel_date || !form.destinations.length) return;
    const cities = form.destinations.map(d => ({ city: d.city, nights: Number(d.nights) || 0 }));
    const calculated = buildDatedDestinations(cities, form.travel_date, form.destinations);
    const changed = calculated.some((d, i) =>
      d.checkIn !== form.destinations[i]?.checkIn ||
      d.checkOut !== form.destinations[i]?.checkOut ||
      Number(d.nights) !== Number(form.destinations[i]?.nights)
    );
    if (changed) setForm(prev => ({ ...prev, destinations: calculated }));
  }, [form.travel_date, form.itineraryKey, form.dateMode, form.destinations.length]);

  function handleTravelDateChange(value) {
    setForm(prev => {
      if (!value) return { ...prev, travel_date: "", destinations: prev.destinations.map(d => ({ ...d, checkIn: "", checkOut: "" })) };
      const cities = prev.destinations.length
        ? prev.destinations.map(d => ({ city: d.city, nights: Number(d.nights) || 0 }))
        : [];
      return {
        ...prev,
        travel_date: value,
        dateMode: "automatic",
        destinations: cities.length ? buildDatedDestinations(cities, value, prev.destinations) : prev.destinations
      };
    });
  }

  function rateIsValidForDates(rate, checkIn, checkOut) {
    const from = rate?.valid_from || rate?.rate_valid_from || null;
    const to = rate?.valid_to || rate?.rate_valid_to || null;
    if (!checkIn && !checkOut) return true;
    if (from && checkIn && String(checkIn) < String(from)) return false;
    if (to && checkOut && String(checkOut) > String(to)) return false;
    return true;
  }

  function rateFor(city, category, hotelName, mealPlan, checkIn = "", checkOut = "") {
    return inventory.hotelRates.find(r => cityMatch(r.hotel?.city, city) &&
      (!category || normalize(r.hotel?.category) === normalize(category)) &&
      (!hotelName || normalize(r.hotel?.name) === normalize(hotelName)) &&
      (!mealPlan || normalize(r.meal_plan) === normalize(mealPlan)) &&
      rateIsValidForDates(r, checkIn, checkOut)) || null;
  }

  function hotelOptions(city, category, checkIn = "", checkOut = "") {
    return inventory.hotelRates.filter(r => cityMatch(r.hotel?.city, city) &&
      (!category || normalize(r.hotel?.category) === normalize(category)) &&
      rateIsValidForDates(r, checkIn, checkOut))
      .map(r => r.hotel).filter((h, i, arr) => h && arr.findIndex(x => String(x.id) === String(h.id)) === i);
  }

  function selectedRateForDestination(d) {
    return rateFor(d.city, d.hotelCategory, d.hotelName, d.mealPlan, d.checkIn, d.checkOut);
  }

  function cityValidation(d) {
    const expectedCheckOut = d.checkIn ? addDays(d.checkIn, Number(d.nights) || 0) : "";
    const rate = selectedRateForDestination(d);
    const errors = [];
    if (!d.checkIn || !d.checkOut) errors.push("Check-in / check-out date is missing.");
    if (d.checkIn && d.checkOut && expectedCheckOut !== d.checkOut) errors.push(`Dates must be ${d.nights} night(s) as per itinerary.`);
    if (!d.hotelName) errors.push("Select a hotel for this city.");
    if (d.hotelName && !rate) errors.push("Selected hotel / meal rate is not valid for these dates.");
    if (d.hotelName && rate && !(Number(rate.room_rate_per_night ?? rate.room_rate ?? 0) > 0)) errors.push("Hotel room rate is missing.");
    return { valid: errors.length === 0, errors, rate, expectedCheckOut };
  }

  function occupancyTotals() {
    const first = form.destinations[0] || {};
    return {
      singleRooms: Number(first.singleRooms) || 0,
      doubleRooms: Number(first.doubleRooms) || 0,
      rooms: (Number(first.singleRooms) || 0) + (Number(first.doubleRooms) || 0),
      extraBed: Number(first.extraBed) || 0,
      childWithBed: Number(first.childWithBed) || 0,
      childWithoutBed: Number(first.childWithoutBed) || 0
    };
  }

  function occupancyValidation() {
    const o = occupancyTotals();
    const requestedRooms = Math.max(0, Number(form.rooms) || 0);
    const children = Math.max(0, Number(form.children) || 0);
    const childAllocated = o.childWithBed + o.childWithoutBed;
    const errors = [];
    if (!requestedRooms) errors.push("Select at least 1 room.");
    if (o.rooms !== requestedRooms) errors.push(`Room allocation is ${o.rooms}, but ${requestedRooms} room(s) are requested.`);
    if (childAllocated !== children) errors.push(`Child allocation is ${childAllocated}, but ${children} child(ren) are entered.`);
    return { valid: errors.length === 0, errors, ...o };
  }

  function syncOccupancyAcrossCities(patch = {}) {
    setForm(prev => {
      const first = prev.destinations[0] || {};
      const next = {
        singleRooms: patch.singleRooms !== undefined ? Math.max(0, Number(patch.singleRooms) || 0) : Number(first.singleRooms) || 0,
        doubleRooms: patch.doubleRooms !== undefined ? Math.max(0, Number(patch.doubleRooms) || 0) : Number(first.doubleRooms) || 0,
        extraBed: patch.extraBed !== undefined ? Math.max(0, Number(patch.extraBed) || 0) : Number(first.extraBed) || 0,
        childWithBed: patch.childWithBed !== undefined ? Math.max(0, Number(patch.childWithBed) || 0) : Number(first.childWithBed) || 0,
        childWithoutBed: patch.childWithoutBed !== undefined ? Math.max(0, Number(patch.childWithoutBed) || 0) : Number(first.childWithoutBed) || 0
      };
      const rooms = next.singleRooms + next.doubleRooms;
      return {
        ...prev, rooms,
        destinations: prev.destinations.map(d => ({ ...d, ...next }))
      };
    });
  }

  function updateDestination(index, patch) {
    setForm(prev => {
      const destinations = prev.destinations.map((d, i) => {
        if (i !== index) return d;
        const next = { ...d, ...patch };
        const rate = rateFor(next.city, next.hotelCategory, next.hotelName, next.mealPlan, next.checkIn, next.checkOut);
        const room = Number(rate?.room_rate_per_night ?? rate?.room_rate ?? 0) || 0;
        next.singleRate = room; next.doubleRate = room;
        next.extraBedRate = Number(rate?.extra_bed_rate ?? rate?.extra_bed ?? 0) || 0;
        next.childWithBedRate = Number(rate?.child_with_bed_rate ?? rate?.child_with_bed ?? 0) || 0;
        next.childWithoutBedRate = Number(rate?.child_without_bed_rate ?? rate?.child_without_bed ?? 0) || 0;

        // Dates are controlled by the selected travel date + saved itinerary nights.
        // Never allow a hotel selection to change the dates.
        if (next.checkIn) {
          next.checkOut = addDays(next.checkIn, Number(next.nights) || 0);
        }
        return next;
      });

      return { ...prev, destinations };
    });
  }

  function adjustRoom(index, type, delta) {
    updateDestination(index, { [type]: Math.max(0, (Number(form.destinations[index]?.[type]) || 0) + delta) });
  }

  function roomAllocationText(d) {
    const parts = [];
    if (Number(d.singleRooms) > 0) parts.push(`${String(Number(d.singleRooms)).padStart(2, "0")} Single`);
    if (Number(d.doubleRooms) > 0) parts.push(`${String(Number(d.doubleRooms)).padStart(2, "0")} Double`);
    if (Number(d.extraBed) > 0) parts.push(`${String(Number(d.extraBed)).padStart(2, "0")} Extra Bed`);
    if (Number(d.childWithBed) > 0) parts.push(`${String(Number(d.childWithBed)).padStart(2, "0")} Child With Bed`);
    if (Number(d.childWithoutBed) > 0) parts.push(`${String(Number(d.childWithoutBed)).padStart(2, "0")} Child Without Bed`);
    return parts.join(" + ") || "No room allocation selected";
  }

  function addDestination() {
    setForm(prev => ({ ...prev, destinations: [...prev.destinations, emptyDestination("", 1, prev.destinations.length, prev.destinations.at(-1)?.checkOut || prev.travel_date || "")] }));
  }

  function calculateAmounts() {
    let hotel = 0, extra = 0, childWith = 0, childWithout = 0;
    form.destinations.forEach(d => {
      const nights = Number(d.nights) || 0;
      const rate = selectedRateForDestination(d);
      const roomRate = Number(rate?.room_rate_per_night ?? rate?.room_rate ?? d.doubleRate ?? 0) || 0;
      const extraRate = Number(rate?.extra_bed_rate ?? rate?.extra_bed ?? d.extraBedRate ?? 0) || 0;
      const childWithRate = Number(rate?.child_with_bed_rate ?? rate?.child_with_bed ?? d.childWithBedRate ?? 0) || 0;
      const childWithoutRate = Number(rate?.child_without_bed_rate ?? rate?.child_without_bed ?? d.childWithoutBedRate ?? 0) || 0;
      hotel += (Number(d.singleRooms) || 0) * roomRate * nights;
      hotel += (Number(d.doubleRooms) || 0) * roomRate * nights;
      extra += (Number(d.extraBed) || 0) * extraRate * nights;
      childWith += (Number(d.childWithBed) || 0) * childWithRate * nights;
      childWithout += (Number(d.childWithoutBed) || 0) * childWithoutRate * nights;
    });
    const transport = Number(selectedVehicleRate?.selling_rate ?? selectedVehicleRate?.rate ?? selectedVehicleRate?.sedan_rate ?? selectedVehicleRate?.ertiga_rate ?? selectedVehicleRate?.innova_rate ?? selectedVehicleRate?.tempo_rate ?? 0) || 0;
    const supplement = selectedSupplementAmount;
    const net = hotel + extra + childWith + childWithout + transport + supplement;
    const marginValue = Math.max(0, Number(pricingSetting?.margin_value ?? 8) || 0);
    const marginType = String(pricingSetting?.margin_type || "percentage").toLowerCase();
    const margin = marginType === "fixed" ? marginValue : (net * marginValue) / 100;
    const total = net + margin;
    return { hotel, extra, childWith, childWithout, transport, supplement, net, margin, total };
  }

  const amounts = calculateAmounts();
  const cityValidations = form.destinations.map(cityValidation);
  const allCitiesValid = cityValidations.length > 0 && cityValidations.every(v => v.valid);
  const occupancyState = occupancyValidation();
  const vehicleValid = Boolean(selectedVehicleRate);

  function quotationCustomerHotelLines(q) {
    return (q?.destinations || []).map((d, i) => {
      const city = d.hotelCity || d.city || d.stayCity || d.destinationCity || "-";
      return `Hotel ${String(i + 1).padStart(2, "0")} — ${d.hotelName || "Hotel to be selected"}\nCity: ${city}\nCheck-in: ${d.checkIn || "-"} | Check-out: ${d.checkOut || "-"}\nNights: ${d.nights || 0}\nRoom: ${roomAllocationText(d)}\nMeal Plan: ${d.mealPlan || "-"}`;
    }).join("\n\n");
  }

  function quotationCustomerMessage(q) {
    const hotels = quotationCustomerHotelLines(q);
    const itinerary = q?.dayWiseItinerary || q?.city_itinerary || q?.itinerary_name || q?.itineraryName || "-";
    return [
      "SNEH TRAVEL",
      `Quotation No: ${q?.serial_no || "-"}`,
      "",
      "CUSTOMER DETAILS",
      `Guest Name: ${q?.customer_name || "-"}`,
      `Mobile: ${q?.phone || "-"}`,
      `Email: ${q?.email || "-"}`,
      `Travel Date: ${q?.travelDate || "-"}`,
      `Adults: ${q?.adults || 0} | Children: ${q?.children || 0} | Rooms: ${q?.rooms || 0}`,
      q?.childAges?.length ? `Child Ages: ${q.childAges.join(", ")}` : "",
      "",
      "TRIP DETAILS",
      `Destination: ${q?.destination || q?.selectedDestination || "-"}`,
      `Itinerary: ${q?.itineraryName || q?.itinerary_name || "-"}`,
      `Vehicle: ${q?.vehicleType || "-"}`,
      `Pickup: ${q?.pickupPoint || "-"}`,
      `Drop: ${q?.dropPoint || "-"}`,
      "",
      "HOTEL & STAY DETAILS",
      hotels || "No hotel details",
      "",
      "DAY-WISE ITINERARY",
      itinerary,
      "",
      `SUPPLEMENT COST: ${money(q?.supplementAmount || 0)}`,
      q?.supplementCosts?.length ? `SELECTED SUPPLEMENTS\n${q.supplementCosts.map(x=>`${x.title || "Supplement"}: ${money(x.amount || x.cost || 0)} / ${x.unit || "per person"}`).join("\n")}` : "",
      `TOTAL PAYABLE AMOUNT: ${money(q?.totalAmount || q?.price || 0)}`,
      "",
      q?.inclusions ? `INCLUSIONS\n${q.inclusions}` : "",
      q?.exclusions ? `EXCLUSIONS\n${q.exclusions}` : "",
      q?.notes ? `NOTES\n${q.notes}` : "",
      "",
      "Thank you for choosing Sneh Travel.",
      "+91 84488 68866 | travelsneh@gmail.com"
    ].filter(Boolean).join("\n");
  }

  function quotationEmailBody(q) {
    return [
      "Dear Customer,",
      "",
      `Please find your Sneh Travel quotation ${q?.serial_no || ""}.`,
      "",
      quotationCustomerMessage(q),
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].join("\n");
  }

  function sendQuotationMail(q) {
    if (!q) return;
    const recipient = String(q.email || "").trim();
    if (!recipient) {
      alert("Customer email address is not available in this quotation.");
      return;
    }
    const subject = `Sneh Travel Quotation ${q.serial_no || ""}`.trim();
    const body = quotationEmailBody(q);
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function sendQuotationWhatsApp(q) {
    if (!q) return;
    const message = quotationCustomerMessage(q);
    const customerPhone = String(q.phone || "").replace(/\D/g, "");
    const phone = customerPhone.length >= 10 ? `91${customerPhone.slice(-10)}` : "918448868866";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  function quotationDocumentHtml(q) {
    const esc = value => String(value ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
    const hotels = (q?.destinations || []).map((d, i) => {
      const city = d.hotelCity || d.city || d.stayCity || d.destinationCity || "-";
      return `<tr><td>${String(i + 1).padStart(2,"0")}</td><td><strong>${esc(city)}</strong><br>${esc(d.hotelName || "Hotel to be selected")}</td><td>${esc(d.checkIn || "-")}</td><td>${esc(d.checkOut || "-")}</td><td>${esc(d.nights || 0)}</td><td>${esc(roomAllocationText(d))}</td><td>${esc(d.mealPlan || "-")}</td></tr>`;
    }).join("");
    const daywise = String(q?.dayWiseItinerary || q?.city_itinerary || q?.itinerary_name || q?.itineraryName || "-")
      .split(/\n+/).filter(Boolean).map((line, i) => `<div class="day-line">${esc(line)}</div>`).join("");
    const inclusions = String(q?.inclusions || "").split(/\n|,/).map(x=>x.trim()).filter(Boolean).map(x=>`<li>${esc(x)}</li>`).join("");
    const exclusions = String(q?.exclusions || "").split(/\n|,/).map(x=>x.trim()).filter(Boolean).map(x=>`<li>${esc(x)}</li>`).join("");
    return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Sneh Travel Quotation ${esc(q?.serial_no || "")}</title><style>
      *{box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;color:#172033;margin:0;background:#fff;font-size:13px;line-height:1.5}.page{max-width:900px;margin:0 auto;padding:32px}.header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #172033;padding-bottom:18px}.brand{font-size:25px;font-weight:800;letter-spacing:2px}.tag{color:#64748b;margin-top:3px}.meta{text-align:right;font-size:12px;color:#475569}.title{text-align:center;margin:25px 0 18px}.title h1{margin:0;font-size:23px;letter-spacing:1px}.section{margin-top:22px}.section h2{font-size:14px;margin:0 0 10px;padding-bottom:7px;border-bottom:1px solid #dbe2ea;text-transform:uppercase;letter-spacing:.7px}.info{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px}.info div{padding:7px 0}.label{color:#64748b;font-size:11px;text-transform:uppercase}.value{font-weight:700}.tripbox{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.tripbox div{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px}.tripbox strong{display:block;margin-top:3px}.table{width:100%;border-collapse:collapse;margin-top:8px}.table th,.table td{border:1px solid #dbe2ea;padding:8px;vertical-align:top;text-align:left;font-size:11px}.table th{background:#f8fafc;font-size:10px;text-transform:uppercase}.day-line{padding:8px 0;border-bottom:1px solid #edf1f5;white-space:pre-wrap}.total{margin-top:25px;border:2px solid #172033;border-radius:10px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center}.total span{font-size:14px;font-weight:800;text-transform:uppercase}.total strong{font-size:23px}.lists{display:grid;grid-template-columns:1fr 1fr;gap:25px}.lists ul{margin:7px 0 0;padding-left:20px}.notes{white-space:pre-wrap}.footer{margin-top:28px;padding-top:15px;border-top:1px solid #dbe2ea;text-align:center;color:#64748b;font-size:11px}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}.page{padding:15px}.no-print{display:none!important}}@media(max-width:650px){.page{padding:18px}.info,.tripbox,.lists{grid-template-columns:1fr}.header{display:block}.meta{text-align:left;margin-top:10px}}
    </style></head><body><div class="page">
      <div class="header"><div><div class="brand">SNEH TRAVEL</div><div class="tag">Your journey, our responsibility.</div></div><div class="meta"><strong>QUOTATION</strong><br>No: ${esc(q?.serial_no || "-")}<br>Date: ${esc(q?.quotationDate || q?.created_at ? new Date(q?.created_at || Date.now()).toLocaleDateString("en-IN") : "-")}</div></div>
      <div class="title"><h1>TRAVEL QUOTATION</h1></div>
      <div class="section"><h2>Guest Details</h2><div class="info"><div><span class="label">Guest Name</span><div class="value">${esc(q?.customer_name || "-")}</div></div><div><span class="label">Travel Date</span><div class="value">${esc(q?.travelDate || "-")}</div></div><div><span class="label">Mobile</span><div class="value">${esc(q?.phone || "-")}</div></div><div><span class="label">Email</span><div class="value">${esc(q?.email || "-")}</div></div><div><span class="label">Guests</span><div class="value">${esc(q?.adults || 0)} Adults · ${esc(q?.children || 0)} Children</div></div><div><span class="label">Rooms</span><div class="value">${esc(q?.rooms || 0)}</div></div></div></div>
      <div class="section"><h2>Trip Details</h2><div class="tripbox"><div><span class="label">Destination</span><strong>${esc(q?.destination || q?.selectedDestination || "-")}</strong></div><div><span class="label">Itinerary</span><strong>${esc(q?.itineraryName || q?.itinerary_name || "-")}</strong></div><div><span class="label">Vehicle</span><strong>${esc(q?.vehicleType || "-")}</strong></div><div><span class="label">Pickup</span><strong>${esc(q?.pickupPoint || "-")}</strong></div><div><span class="label">Drop</span><strong>${esc(q?.dropPoint || "-")}</strong></div><div><span class="label">Vehicle Days</span><strong>${esc(q?.vehicleDays || 0)}</strong></div></div></div>
      <div class="section"><h2>Hotel & Stay Details</h2><table class="table"><thead><tr><th>#</th><th>City / Hotel</th><th>Check-in</th><th>Check-out</th><th>Nights</th><th>Room / Child Allocation</th><th>Meal Plan</th></tr></thead><tbody>${hotels || `<tr><td colspan="7">No hotel details</td></tr>`}</tbody></table></div>
      <div class="section"><h2>Day-wise Itinerary</h2><div>${daywise || "Not available"}</div></div>
      <div class="section lists"><div><h2>Inclusions</h2><ul>${inclusions || "<li>As per itinerary</li>"}</ul></div><div><h2>Exclusions</h2><ul>${exclusions || "<li>As per itinerary</li>"}</ul></div></div>
      ${q?.notes ? `<div class="section"><h2>Notes</h2><div class="notes">${esc(q.notes)}</div></div>` : ""}
      ${q?.supplementCosts?.length ? `<div class="section"><h2>Destination Supplement Costs</h2><ul>${q.supplementCosts.map(x=>`<li>${esc(x.title || "Supplement")} — ${money(x.amount || x.cost || 0)} / ${esc(x.unit || "per person")}</li>`).join("")}</ul></div>` : ""}
      <div class="total"><span>Total Payable Amount</span><strong>${money(q?.totalAmount || q?.price || 0)}</strong></div>
      <div class="footer">Thank you for choosing Sneh Travel.<br>+91 84488 68866 · travelsneh@gmail.com</div>
    </div></body></html>`;
  }

  function safeQuotationDocumentHtml(q) {
    try {
      return quotationDocumentHtml(q);
    } catch (error) {
      console.error("Quotation preview error:", error, q);
      const customer = String(q?.customer_name || "Customer").replace(/[<>&"]/g, "");
      const quotationNo = String(q?.serial_no || "Quotation").replace(/[<>&"]/g, "");
      const amount = money(q?.totalAmount || q?.price || 0);
      return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;padding:30px;color:#172033"><h2>SNEH TRAVEL</h2><h3>Quotation ${quotationNo}</h3><p><strong>Customer:</strong> ${customer}</p><p><strong>Destination:</strong> ${String(q?.destination || "-")}</p><p><strong>Travel Date:</strong> ${String(q?.travelDate || "-")}</p><hr/><p><strong>Total Payable Amount:</strong> ${amount}</p><p style="color:#64748b">Some detailed quotation fields could not be rendered. The saved quotation is still available for Edit/Modify.</p></body></html>`;
    }
  }

  function downloadQuotationPDF(q) {
    if (!q) return;
    const printWindow = window.open("", "_blank", "width=1000,height=800");
    if (!printWindow) { alert("Please allow pop-ups to download the quotation PDF."); return; }
    printWindow.document.open();
    printWindow.document.write(quotationDocumentHtml(q));
    printWindow.document.close();
    setTimeout(() => { printWindow.focus(); printWindow.print(); }, 500);
  }

  function downloadQuotationWord(q) {
    if (!q) return;
    const html = quotationDocumentHtml(q).replace(/<title>[\s\S]*?<\/title>/i, "<title>Sneh Travel Quotation</title>");
    const blob = new Blob(["\ufeff", html], {type:"application/msword"});
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href=url; a.download=`Sneh-Travel-Quotation-${String(q.serial_no || "quotation").replace(/[^a-z0-9_-]+/gi,"-")}.doc`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  async function submitForm(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.destination.trim()) { alert("Please enter customer name, phone and destination."); return; }
    if (!form.travel_date) { alert("Please select Travel Date."); return; }
    if (!form.itineraryKey) { alert("Please select the saved Night / Day Vehicle Itinerary."); return; }
    if (!form.vehicleRateId) { alert("Please select a vehicle rate from the saved itinerary matrix."); return; }
    if (!form.destinations.length) { alert("Please select an itinerary so hotel city rows can be created."); return; }
    if (!occupancyState.valid) { alert(occupancyState.errors.join("\n")); return; }
    if (!allCitiesValid) { alert("Please correct the red hotel/rate fields before creating the quotation."); return; }
    try {
      setSubmitting(true);
      const quotation = {
        customer_name: form.name.trim(), phone: form.phone.trim(), email: form.email.trim(),
        destination: form.destination.trim(), travelDate: form.travel_date,
        adults: Number(form.adults) || 0, children: Number(form.children) || 0,
        childAges: String(form.child_ages || "").split(",").map(x => x.trim()).filter(Boolean),
        rooms: Math.max(1, Number(form.rooms) || 1), selectedDestination: form.destination.trim(),
        selectedItineraryKey: form.itineraryKey, selectedVehicleRateId: form.vehicleRateId,
        vehicleType: selectedVehicleRate ? vehicleNameFor(selectedVehicleRate) : form.vehicle,
        pickupPoint: form.pickup || selectedItinerary?.pickup_point || "",
        dropPoint: form.drop || selectedItinerary?.drop_point || "",
        vehicleDays: Number(selectedItinerary?.days || selectedVehicleRate?.days || 0) || 0,
        destinations: form.destinations.map((d, index) => {
          const rate = cityValidations[index]?.rate || {};
          const roomRate = Number(rate.room_rate_per_night ?? rate.room_rate ?? d.doubleRate ?? 0) || 0;
          const extraRate = Number(rate.extra_bed_rate ?? rate.extra_bed ?? d.extraBedRate ?? 0) || 0;
          const childWithRate = Number(rate.child_with_bed_rate ?? rate.child_with_bed ?? d.childWithBedRate ?? 0) || 0;
          const childWithoutRate = Number(rate.child_without_bed_rate ?? rate.child_without_bed ?? d.childWithoutBedRate ?? 0) || 0;
          return {
            destination: form.destination.trim(), city: d.city || "", hotelCity: d.city || "", stayCity: d.city || "",
            nights: Number(d.nights) || 0, checkIn: d.checkIn || "", checkOut: d.checkOut || "",
            singleRooms: Number(d.singleRooms) || 0, doubleRooms: Number(d.doubleRooms) || 0,
            extraBed: Number(d.extraBed) || 0, childWithBed: Number(d.childWithBed) || 0,
            childWithoutBed: Number(d.childWithoutBed) || 0, rooms: Math.max(1, Number(form.rooms) || 1),
            hotelCategory: d.hotelCategory || form.hotelCategory || "3 Star", hotelName: d.hotelName || "",
            mealPlan: d.mealPlan || form.mealPlan || "CP", singleRate: roomRate,
            doubleRate: roomRate, extraBedRate: extraRate, childWithBedRate: childWithRate, childWithoutBedRate: childWithoutRate,
            roomAllocation: roomAllocationText(d),
            purchaseSingleRatePerNight: roomRate, purchaseDoubleRatePerNight: roomRate,
            purchaseExtraBedRate: extraRate, purchaseChildWithBedRate: childWithRate,
            purchaseChildWithoutBedRate: childWithoutRate
          };
        }),
        supplementCosts: selectedSupplementCosts, supplementAmount: Math.round(amounts.supplement || 0),
        destinationInclusions: selectedDestinationProfile?.inclusions || "", destinationExclusions: selectedDestinationProfile?.exclusions || "",
        destinationActivities: Array.isArray(selectedDestinationProfile?.activities) ? selectedDestinationProfile.activities : [],
        hotelAmount: String(Math.round(amounts.hotel || 0)), extraBedAmount: String(Math.round(amounts.extra || 0)),
        childWithBedAmount: String(Math.round(amounts.childWith || 0)), childWithoutBedAmount: String(Math.round(amounts.childWithout || 0)),
        vehicleAmount: String(Math.round(amounts.transport || 0)), netCost: Math.round(amounts.net || 0),
        markupType: String(pricingSetting?.margin_type || "percentage").toLowerCase() === "fixed" ? "fixed" : "percent",
        markupValue: Math.max(0, Number(pricingSetting?.margin_value ?? 8) || 0),
        marginAmount: Math.round(amounts.margin || 0),
        totalAmount: Math.round(amounts.total || 0), price: Math.round(amounts.total || 0),
        inclusions: selectedDestinationProfile?.inclusions || "Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation as mentioned\nSightseeing as mentioned",
        exclusions: selectedDestinationProfile?.exclusions || "Airfare/train tickets\nPersonal expenses\nEntry tickets\nBoating/activity charges\nAnything not mentioned under inclusions\nGST, if applicable",
        city_itinerary: selectedItinerary?.city_itinerary || "",
        itineraryName: selectedItinerary?.itinerary_name || "",
        dayWiseItinerary: selectedDetailedItineraryText || "",
        notes: form.notes || "", source: "website", created_at: new Date().toISOString()
      };
      const savedQuotation = await addWebsiteQuotation(quotation);
      const whatsappMessage = `Hello Sneh Travel,\n\nI have created a quotation on your website.\n\nQuotation No: ${savedQuotation.serial_no}\nName: ${form.name}\nPhone: ${form.phone}\nDestination: ${form.destination}\nTravel Date: ${form.travel_date}\nAdults: ${form.adults}\nChildren: ${form.children}\nRooms: ${form.rooms}\nRoom Allocation: ${form.destinations.map(roomAllocationText).join(" · ")}\nItinerary: ${selectedItinerary?.itinerary_name || "Not selected"}\nPickup: ${form.pickup || "Not selected"}\nDrop: ${form.drop || "Not selected"}\nTotal Payable Amount: ${money(amounts.total)}\n\n${form.notes || ""}`;
      const whatsappLink = `https://wa.me/918448868866?text=${encodeURIComponent(whatsappMessage)}`;
      setCreatedQuotation({...savedQuotation, _whatsappLink: whatsappLink});
      setForm({ name:"", phone:"", email:"", travel_date:"", adults:2, children:0, child_ages:"", rooms:1, destination:"", itineraryKey:"", vehicleRateId:"", vehicle:"", pickup:"", drop:"", hotelCategory:"3 Star", mealPlan:"CP", destinations:[], notes:"", dateMode:"automatic" });
    } catch (error) {
      console.error("Website quotation submission error:", error);
      alert(error.message || "Unable to create quotation.");
    } finally { setSubmitting(false); }
  }

  return (
    <section className="page-section enquiry-page">
      <div className="section-heading"><span>CREATE YOUR TRIP</span><h2>Create Your Quotation</h2><p>Enter your travel requirements, select the saved itinerary, hotels and vehicle, and create your quotation instantly.</p></div>
      <form className="enquiry-form quotation-card" onSubmit={submitForm} style={{maxWidth:1180,margin:"0 auto",padding:20}}>
        <div className="form-section-title quotation-section-title"><span className="quotation-step">01</span><div><h3>Customer Details</h3><p>Basic guest and contact information</p></div></div>
        <div className="form-grid">
          <div className="form-group"><label>Customer Name *</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Enter customer name"/></div>
          <div className="form-group"><label>Mobile Number *</label><input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required placeholder="+91"/></div>
          <div className="form-group"><label>Email Address</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="customer@email.com"/></div>
          <div className="form-group"><label>Travel Date / First Check-in *</label><input type="date" value={form.travel_date} onChange={e=>handleTravelDateChange(e.target.value)} required/><small style={{color:"#64748b"}}>Only the first check-in date is selected here. All city check-in/check-out dates are automatic.</small></div>
        </div>

        <div className="form-section-title quotation-section-title" style={{marginTop:25}}><span className="quotation-step">02</span><div><h3>Destination & Vehicle Itinerary</h3><p>Select the saved itinerary and vehicle rate matrix</p></div></div>
        <div className="form-grid">
          <div className="form-group"><label>Destination *</label><select value={form.destination} onChange={e=>setForm({...form,destination:e.target.value,itineraryKey:"",vehicleRateId:"",destinations:[],pickup:"",drop:"",supplement_costs:[]})}><option value="">Select destination</option>{inventory.destinations.map(d=><option key={d.id||d.name} value={d.name}>{d.name}</option>)}{!inventory.destinations.length && <option value="Kerala">Kerala</option>}</select></div>
          <div className="form-group"><label>Night / Day Vehicle Itinerary *</label><select value={form.itineraryKey} onChange={e=>setForm({...form,itineraryKey:e.target.value,vehicleRateId:""})} disabled={!form.destination}><option value="">{loadingInventory?"Loading saved itineraries...":"Select saved itinerary"}</option>{matchingItineraries.map(i=><option key={i.itinerary_key||i.id} value={i.itinerary_key||i.id}>{i.itinerary_name || `${i.destination} ${i.nights} Night / ${i.days} Days`}</option>)}</select></div>
          <div className="form-group"><label>Vehicle *</label><select style={form.itineraryKey && !selectedVehicleRate?{borderColor:"#dc2626",boxShadow:"0 0 0 2px rgba(220,38,38,.08)"}:{}} value={form.vehicleRateId} onChange={e=>setForm({...form,vehicleRateId:e.target.value})} disabled={!form.itineraryKey}><option value="">Select vehicle</option>{itineraryVehicleRates.map(r=><option key={r.id} value={r.id}>{vehicleNameFor(r)}</option>)}</select></div>
          <div className="form-group"><label>Pickup Point</label><select value={form.pickup} onChange={e=>setForm({...form,pickup:e.target.value})} disabled={!form.itineraryKey}><option value="">Select pickup point</option>{pickupOptions.map(v=><option key={v} value={v}>{v}</option>)}</select></div>
          <div className="form-group"><label>Drop Point</label><select value={form.drop} onChange={e=>setForm({...form,drop:e.target.value})} disabled={!form.itineraryKey}><option value="">Select drop point</option>{dropOptions.map(v=><option key={v} value={v}>{v}</option>)}</select></div>
          {selectedItinerary?.state && <div className="form-group"><label>State / Region</label><input value={selectedItinerary.state} readOnly/></div>}{selectedItinerary?.city_itinerary && <div className="form-group" style={{gridColumn:"1 / -1"}}><label>City / Route Itinerary</label><input value={selectedItinerary.city_itinerary} readOnly/></div>}
        </div>

        <div className="quotation-summary-card" style={{marginTop:20,position:"relative",top:"auto",padding:"16px 20px"}}>
          <span className="quotation-eyebrow">ITINERARY DATE CONTROL</span>
          <h4 style={{margin:"5px 0 3px"}}>Hotel dates are locked to the selected itinerary</h4>
          <span style={{color:"#64748b",fontSize:13}}>Select the first Travel Date only. Every city check-in, check-out and number of nights is calculated automatically from the selected itinerary. The next city always starts from the previous city check-out, so the dates stay continuous and cannot be changed independently.</span>
        </div>

        {selectedDestinationProfile && <div className="quotation-summary-card" style={{marginTop:25,position:"relative",top:"auto",border:"1px solid #ccfbf1",background:"linear-gradient(135deg,#f0fdfa,#ffffff)"}}>
          <div className="quotation-eyebrow">DESTINATION INFORMATION</div>
          <h4 style={{margin:"6px 0 14px",fontSize:20}}>{selectedDestinationProfile.name || selectedDestinationProfile.destination} — Included Services & Optional Supplements</h4>
          <div className="admin-public-columns">
            <div>
              <h4 style={{color:"#0f766e"}}>✓ Destination Inclusions</h4>
              {selectedDestinationProfile.inclusions ? <ul style={{marginTop:8,paddingLeft:20}}>{String(selectedDestinationProfile.inclusions).split(/\n|,/).map(x=>x.trim()).filter(Boolean).map((x,i)=><li key={`dest-inc-${i}`} style={{marginBottom:5}}>{x}</li>)}</ul> : <p className="muted">No destination inclusions added by admin.</p>}
              <h4 style={{color:"#b91c1c",marginTop:18}}>✕ Destination Exclusions</h4>
              {selectedDestinationProfile.exclusions ? <ul style={{marginTop:8,paddingLeft:20}}>{String(selectedDestinationProfile.exclusions).split(/\n|,/).map(x=>x.trim()).filter(Boolean).map((x,i)=><li key={`dest-exc-${i}`} style={{marginBottom:5}}>{x}</li>)}</ul> : <p className="muted">No destination exclusions added by admin.</p>}
            </div>
            <div>
              <h4 style={{color:"#0f766e"}}>⭐ Additional Activities</h4>
              {Array.isArray(selectedDestinationProfile.activities) && selectedDestinationProfile.activities.length ? selectedDestinationProfile.activities.filter(a=>a && a.included!==false).map((a,i)=><div key={`dest-act-${i}`} style={{padding:"10px 12px",marginBottom:8,border:"1px solid #ccfbf1",borderRadius:10,background:"#fff"}}><strong>{a.title || "Activity"}</strong>{a.location ? <small style={{display:"block",color:"#64748b",marginTop:2}}>{a.location}</small> : null}{a.description ? <div style={{fontSize:12,color:"#475569",marginTop:4}}>{a.description}</div> : null}</div>) : <p className="muted">No additional activities added by admin.</p>}
              <h4 style={{color:"#92400e",marginTop:18}}>＋ Destination Supplement Cost</h4>
              {destinationSupplementCosts.length ? destinationSupplementCosts.map((a,i)=>{ const key=String(a.title||`supplement-${i}`); const checked=selectedSupplementCosts.some(x=>String(x.key)===key); return <label key={`supp-${i}`} style={{display:"block",padding:"10px 12px",marginBottom:8,border:"1px solid #fde68a",borderRadius:10,background:checked?"#fffbeb":"#fff",cursor:"pointer"}}><span style={{display:"flex",gap:10,alignItems:"flex-start"}}><input type="checkbox" checked={checked} onChange={e=>{const next=e.target.checked ? [...selectedSupplementCosts,{key,title:a.title||`Supplement ${i+1}`,unit:a.unit||"per person",cost:Number(a.cost)||0,description:a.description||""}] : selectedSupplementCosts.filter(x=>String(x.key)!==key);setForm(prev=>({...prev,supplement_costs:next}));}}/><span><strong>{a.title || "Supplement"}</strong><small style={{display:"block",color:"#64748b"}}>{a.description || "Destination-specific supplement"}</small><b style={{display:"block",marginTop:3,color:"#92400e"}}>₹{(Number(a.cost)||0).toLocaleString("en-IN")} / {a.unit || "per person"}</b></span></span></label>}) : <p className="muted">No supplement cost configured for this destination.</p>}
              {selectedSupplementAmount>0 && <div style={{marginTop:10,padding:"10px 12px",borderRadius:10,background:"#fef3c7",fontWeight:800,color:"#92400e"}}>Selected Supplement Total: ₹{selectedSupplementAmount.toLocaleString("en-IN")}</div>}
            </div>
          </div>
        </div>}

        <div className="form-section-title quotation-section-title" style={{marginTop:25}}><span className="quotation-step">03</span><div><h3>Hotel, Meal Plan & Room Allocation</h3><p>Hotel is selected city-wise; room/child allocation is shared across every city in this itinerary.</p></div></div>
        <div className="quotation-summary-card" style={{marginTop:14,position:"relative",top:"auto",border:occupancyState.valid?"1px solid #e2e8f0":"2px solid #dc2626",background:occupancyState.valid?"#fff":"#fff7f7"}}>
          <div className="quotation-eyebrow">ONE OCCUPANCY FOR THE WHOLE ITINERARY</div><p style={{margin:"6px 0 0",color:"#64748b",fontSize:13}}>Extra Bed, Child With Bed and Child Without Bed are selected here once and automatically applied to every city.</p>
          <div className="form-grid" style={{marginTop:12}}>
            <div className="form-group"><label>Total Rooms *</label><input type="number" min="1" value={form.rooms} onChange={e=>{const rooms=Math.max(1,Number(e.target.value)||1);syncOccupancyAcrossCities({singleRooms:0,doubleRooms:rooms});}}/></div>
            <div className="form-group"><label>Single Rooms</label><input type="number" min="0" value={occupancyState.singleRooms} onChange={e=>syncOccupancyAcrossCities({singleRooms:e.target.value})}/></div>
            <div className="form-group"><label>Double Rooms</label><input type="number" min="0" value={occupancyState.doubleRooms} onChange={e=>syncOccupancyAcrossCities({doubleRooms:e.target.value})}/></div>
            <div className="form-group"><label>Extra Beds</label><input type="number" min="0" value={occupancyState.extraBed} onChange={e=>syncOccupancyAcrossCities({extraBed:e.target.value})}/></div>
            <div className="form-group"><label>Children With Bed</label><input type="number" min="0" value={occupancyState.childWithBed} onChange={e=>syncOccupancyAcrossCities({childWithBed:e.target.value})}/></div>
            <div className="form-group"><label>Children Without Bed</label><input type="number" min="0" value={occupancyState.childWithoutBed} onChange={e=>syncOccupancyAcrossCities({childWithoutBed:e.target.value})}/></div>
          </div>
          {!occupancyState.valid && <div style={{marginTop:12,color:"#b91c1c",fontWeight:700,fontSize:13}}>{occupancyState.errors.map((x,i)=><div key={i}>⚠ {x}</div>)}</div>}
        </div>
        {form.destinations.length ? form.destinations.map((d,index)=>{
          const validation = cityValidations[index] || {valid:false,errors:["City validation unavailable."],rate:null,expectedCheckOut:""};
          const cityBorder = validation.valid ? "1px solid #e2e8f0" : "2px solid #dc2626";
          return <div key={`${d.city}-${index}`} className="quotation-destination-card" style={{border:cityBorder,background:validation.valid?"#fff":"#fff7f7"}}>
          <div className="quotation-inline-heading"><div><span className="quotation-destination-label">CITY / NIGHT STAY</span><strong>{d.city || "City"} — {formatDateDisplay(d.checkIn)} → {formatDateDisplay(d.checkOut)} · {Number(d.nights)||0} Night(s)</strong></div><div style={{fontWeight:800,color:validation.valid?"#15803d":"#b91c1c"}}>{validation.valid ? "✓ Rate Ready" : "⚠ Action Required"}</div></div>
          <div className="form-grid">
            <div className="form-group"><label>Check-in Date</label><input type="date" value={d.checkIn||""} readOnly style={{background:"#f1f5f9"}}/><small style={{color:"#64748b"}}>Automatic</small></div>
            <div className="form-group"><label>Check-out Date</label><input type="date" value={d.checkOut||""} readOnly style={{background:"#f1f5f9"}}/><small style={{color:"#64748b"}}>Automatic — {Number(d.nights)||0} Night(s)</small></div>
            <div className="form-group"><label>Hotel Category</label><select value={d.hotelCategory} onChange={e=>updateDestination(index,{hotelCategory:e.target.value,hotelName:""})}><option>Budget</option><option>3 Star</option><option>4 Star</option><option>5 Star</option><option>Luxury</option></select></div>
            <div className="form-group"><label>Hotel Name</label><select style={!d.hotelName?{borderColor:"#dc2626",boxShadow:"0 0 0 2px rgba(220,38,38,.08)"}:{}} value={d.hotelName} onChange={e=>updateDestination(index,{hotelName:e.target.value})}><option value="">Select valid hotel</option>{hotelOptions(d.city,d.hotelCategory,d.checkIn,d.checkOut).map(h=><option key={h.id} value={h.name}>{h.name}</option>)}</select></div>
            <div className="form-group"><label>Meal Plan</label><select value={d.mealPlan} onChange={e=>updateDestination(index,{mealPlan:e.target.value})}><option value="EP">EP — Room Only</option><option value="CP">CP — Breakfast Included</option><option value="MAP">MAP — Breakfast + Dinner</option><option value="AP">AP — Breakfast + Lunch + Dinner</option></select></div>
            <div className="form-group"><label>Stay Duration</label><input value={`${Number(d.nights)||0} Night(s) · ${formatDateDisplay(d.checkIn)} → ${formatDateDisplay(d.checkOut)}`} readOnly style={{background:"#f1f5f9",fontWeight:800}}/></div>
            <div className="form-group" style={{gridColumn:"1 / -1"}}><label>Room / Child Allocation for {d.city}</label><input value={roomAllocationText(d)} readOnly style={{background:"#f1f5f9"}}/></div>
          </div>
          {!validation.valid && <div style={{marginTop:12,padding:"10px 12px",borderRadius:10,background:"#fee2e2",color:"#991b1b",fontSize:13,fontWeight:700}}>{validation.errors.map((x,i)=><div key={i}>⚠ {x}</div>)}</div>}
          {validation.valid && validation.rate && <div style={{marginTop:10,fontSize:12,color:"#475569",fontWeight:700}}>✓ {formatDateDisplay(d.checkIn)} to {formatDateDisplay(d.checkOut)} · {Number(d.nights)||0} Night(s) confirmed · Next city check-in: {index < form.destinations.length - 1 ? formatDateDisplay(form.destinations[index + 1]?.checkIn) : "Trip end"}.</div>}
        </div>}) : <div className="empty-box">Select a saved itinerary to automatically create the exact city-wise hotel dates.</div>}
        {form.destinations.length ? (
          <div className="quotation-summary-card enquiry-room-summary" style={{marginTop:16,position:"relative",top:"auto"}}>
            <span className="quotation-eyebrow">SAME OCCUPANCY APPLIED TO EVERY CITY</span>
            <div className="enquiry-room-summary-grid">
              {form.destinations.map((d,index)=>(
                <div key={`${d.city}-allocation-${index}`} className="enquiry-room-summary-row">
                  <strong>{d.city || "City"}</strong>
                  <span>{roomAllocationText(d)} · {d.checkIn} → {d.checkOut}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {selectedDetailedItineraryText ? <div className="quotation-summary-card" style={{marginTop:25,position:"relative",top:"auto"}}>
          <span className="quotation-eyebrow">ITINERARY DETAILS</span>
          <h4 style={{margin:"5px 0 12px"}}>Detailed Day-wise Itinerary</h4>
          <div style={{display:"grid",gap:10}}>{selectedDetailedDays.map((d,i)=><div key={`public-day-${i}`} style={{padding:"13px 15px",border:"1px solid #e2e8f0",borderRadius:12,background:"#f8fafc"}}><div style={{fontWeight:800,color:"#172033",marginBottom:5}}>Day {String(Number(d?.day)||i+1).padStart(2,"0")}{d?.title ? ` — ${d.title}` : ""}</div><div style={{color:"#475569",fontSize:13,lineHeight:1.6,whiteSpace:"pre-wrap"}}>{d?.details || d?.description || d?.itinerary || "Itinerary details not added."}</div>{(d?.nightStay || d?.night_stay) ? <div style={{marginTop:7,fontSize:12,fontWeight:700,color:"#0f766e"}}>Night Stay: {d.nightStay || d.night_stay}</div> : null}</div>)}</div>
        </div> : null}

        {(selectedItinerary?.inclusions || selectedItinerary?.exclusions) ? <div className="quotation-summary-card" style={{marginTop:25,position:"relative",top:"auto"}}><div className="admin-public-columns"><div><h4>Inclusions</h4><ul>{String(selectedItinerary?.inclusions||"").split(/\n|,/).filter(Boolean).map((x,i)=><li key={`pub-inc-${i}`}>{x.trim()}</li>)}</ul></div><div><h4>Exclusions</h4><ul>{String(selectedItinerary?.exclusions||"").split(/\n|,/).filter(Boolean).map((x,i)=><li key={`pub-exc-${i}`}>{x.trim()}</li>)}</ul></div></div></div> : null}

        <div className="form-section-title quotation-section-title" style={{marginTop:25}}><span className="quotation-step">04</span><div><h3>Travel Details & Notes</h3><p>Add any special requirement</p></div></div>
        <div className="form-grid"><div className="form-group" style={{gridColumn:"1 / -1"}}><label>Additional Notes</label><textarea rows="4" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Tell us anything else about your trip..."/></div></div>

        {(!allCitiesValid || !occupancyState.valid || !vehicleValid) && <div style={{marginTop:20,padding:"14px 16px",borderRadius:12,border:"2px solid #dc2626",background:"#fff7f7",color:"#991b1b",fontWeight:700}}>⚠ Please complete the red-marked fields before the total quotation can be finalized. The system will not allow a quotation with a missing/invalid hotel rate, incorrect itinerary dates, room mismatch, child allocation mismatch, or missing vehicle rate.</div>}
        {allCitiesValid && occupancyState.valid && vehicleValid && <div style={{marginTop:20,padding:"12px 15px",borderRadius:12,border:"1px solid #bbf7d0",background:"#f0fdf4",color:"#166534",fontWeight:700,textAlign:"center"}}>✓ All selections are valid. Final payable amount is updated automatically.</div>}
        <div className="quotation-summary-card" style={{marginTop:20,position:"relative",top:"auto",textAlign:"center",padding:"22px"}}>
          <span className="quotation-eyebrow">FINAL PAYABLE AMOUNT</span>
          <h4 style={{margin:"7px 0 4px",fontSize:15}}>Your Total Payable Amount</h4>
          <div className="quotation-total-highlight" style={{marginTop:12}}>
            <small>AMOUNT PAYABLE</small>
            <strong>{money(amounts.total)}</strong>
            <span>Hotel + selected meal plan + extra bed/children + vehicle are included.</span>
          </div>
        </div>
        <button type="submit" className="submit-button" disabled={submitting || !allCitiesValid || !occupancyState.valid || !vehicleValid}>{submitting ? "Creating Quotation..." : (!allCitiesValid || !occupancyState.valid || !vehicleValid ? "Complete Red Fields to Continue" : "Create Quotation")}</button>
      </form>
      {createdQuotation && <div style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(15,23,42,.62)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
        <div style={{width:"min(560px,100%)",background:"#fff",borderRadius:22,padding:28,boxShadow:"0 25px 80px rgba(0,0,0,.25)"}}>
          <div style={{textAlign:"center"}}><div style={{fontSize:42}}>✓</div><h3 style={{margin:"8px 0 4px"}}>Quotation Created Successfully</h3><p style={{color:"#64748b",margin:"0 0 18px"}}>{createdQuotation.serial_no} · Total Amount Payable: <strong>{money(createdQuotation.totalAmount)}</strong></p></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <button type="button" className="admin-add-button" onClick={()=>sendQuotationMail(createdQuotation)}>📧 Email Quotation</button>
            <button type="button" className="admin-button" onClick={()=>downloadQuotationPDF(createdQuotation)}>📄 Download PDF</button>
            <button type="button" className="admin-add-button" onClick={()=>sendQuotationWhatsApp(createdQuotation)}>💬 WhatsApp Quotation</button>
            <button type="button" className="admin-button" onClick={()=>downloadQuotationWord(createdQuotation)}>⬇️ MS Word</button>
            <button type="button" className="admin-button" onClick={()=>setCreatedQuotation(null)}>Close</button>
          </div>
        </div>
      </div>}
    </section>
  );
}

/* =========================================================
   INTERNATIONAL PAGE
========================================================= */

function PublicDestinationItineraries({ destination, packageType, setActivePage }) {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function publicCityMatch(a, b) {
    const clean = value => {
      const aliases = { alappuzha: "alleppey", aleppey: "alleppey", allepey: "alleppey", kochi: "cochin", ernakulam: "cochin", trivandrum: "thiruvananthapuram" };
      let raw = String(value || "").trim().toLowerCase().split(",")[0].replace(/\([^)]*\)/g, "").replace(/\s[-–—].*$/, "").trim();
      // The website destination labels are e.g. "Kerala Packages", while
      // the admin itinerary master normally stores the destination as "Kerala".
      raw = raw.replace(/\s+(holiday\s+)?packages?$/i, "").trim();
      return aliases[raw] || raw;
    };
    const left = clean(a);
    const right = clean(b);
    return Boolean(left && right && (left === right || left.includes(right) || right.includes(left)));
  }

  function parseNightStays(value) {
    const raw = String(value || "").split("||DAYWISE::")[0].trim();
    if (!raw) return [];
    return raw.split(/\s*\|\s*|\s*;\s*|\s*,\s*(?=[A-Za-z])/).map(part => {
      const m = part.match(/^(.+?)\s*:\s*(\d+)$/);
      return m ? { city: m[1].trim(), nights: Number(m[2]) || 0 } : null;
    }).filter(Boolean);
  }

  function parseDays(item) {
    if (Array.isArray(item?.daywise)) return item.daywise;
    const raw = String(item?.daywise || item?.detailed_itinerary || item?.detail_itinerary || item?.day_wise_itinerary || "");
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
    return [];
  }

  useEffect(() => {
    let alive = true;
    async function load() {
      if (!supabase) { setError("Supabase is not configured."); setLoading(false); return; }
      setLoading(true);
      try {
        const { data, error: queryError } = await supabase
          .from("itineraries")
          .select("*")
          .eq("active", true)
          .order("created_at", { ascending: false });
        if (queryError) throw queryError;
        if (!alive) return;
        const rows = (data || []).filter(row => publicCityMatch(row.destination, destination));
        setItineraries(rows);
      } catch (e) {
        if (alive) { setError(e.message || "Unable to load published itineraries."); setItineraries([]); }
      } finally { if (alive) setLoading(false); }
    }
    load();
    return () => { alive = false; };
  }, [destination]);

  function openItinerary(item) {
    try {
      localStorage.setItem("sneh_quote_prefill", JSON.stringify({
        destination: item.destination || destination || "",
        packageType: item.package_type || packageType || "",
        itineraryKey: String(item.itinerary_key || item.id || "")
      }));
    } catch (e) {}
    setActivePage("quotation");
  }

  return (
    <section className="package-detail-page">
      <div className="detail-hero">
        <img src={destination === "Kerala" ? "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=80" : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"} alt={destination || "Destination"}/>
        <div className="detail-hero-overlay">
          <span>{packageType === "International" ? "INTERNATIONAL" : "DOMESTIC"} · PUBLISHED ITINERARIES</span>
          <h1>{destination || "Destination"}</h1>
          <p>Select a saved itinerary and create your quotation directly from it.</p>
        </div>
      </div>

      <div className="detail-content" style={{maxWidth:1180}}>
        <div style={{marginBottom:24}}><span className="quotation-eyebrow" style={{color:"#0b74b8"}}>PUBLISHED ITINERARY</span><h2 style={{margin:"6px 0"}}>{destination} Itineraries</h2><p>Hotel cities, stay nights, transport rate and quotation calculation will follow the selected itinerary.</p></div>
        {loading && <div className="admin-public-empty">Loading published itineraries...</div>}
        {error && <div className="admin-public-empty" style={{color:"#b91c1c"}}>{error}</div>}
        {!loading && !error && !itineraries.length && <div className="admin-public-empty">No published itinerary is available for {destination} yet.</div>}
        <div style={{display:"grid",gap:18}}>
          {itineraries.map((item,index) => {
            const cities = parseNightStays(item.night_stays);
            const days = parseDays(item);
            return <article key={item.id || index} className="quotation-summary-card" style={{position:"relative",top:"auto",padding:22}}>
              <div style={{display:"flex",justifyContent:"space-between",gap:20,alignItems:"flex-start",flexWrap:"wrap"}}>
                <div><span className="quotation-eyebrow">{item.package_type || packageType || "TRAVEL"}</span><h3 style={{margin:"6px 0"}}>{item.itinerary_name || item.itineraryName || `${item.nights || 0} Night / ${item.days || 0} Days`}</h3><p style={{margin:0,color:"#64748b"}}>{item.nights || 0} Nights / {item.days || 0} Days · {item.city_itinerary || item.destination || destination}</p></div>
                <button className="admin-package-view" onClick={() => openItinerary(item)}>Customize & Create Quotation →</button>
              </div>
              <div className="admin-public-summary" style={{margin:"18px 0 8px"}}>
                <div><small>Night / Day</small><strong>{item.nights || 0}N / {item.days || 0}D</strong></div>
                <div><small>Night Stay Cities</small><strong>{cities.length ? cities.map(c => `${c.city} ${c.nights}N`).join(" → ") : "As saved in itinerary"}</strong></div>
                <div><small>Vehicle</small><strong>Saved itinerary vehicle rate</strong></div>
              </div>
              {days.length > 0 && <div style={{display:"grid",gap:8,marginTop:14}}>{days.map((d,i)=><div key={i} style={{padding:12,border:"1px solid #e2e8f0",borderRadius:10,background:"#f8fafc"}}><strong>Day {String(Number(d?.day)||i+1).padStart(2,"0")}{d?.title ? ` — ${d.title}` : ""}</strong><div style={{marginTop:4,color:"#475569",whiteSpace:"pre-wrap",lineHeight:1.6}}>{d?.details || d?.description || d?.itinerary || ""}</div>{(d?.nightStay || d?.night_stay) && <small style={{display:"block",marginTop:5,color:"#0f766e",fontWeight:700}}>Night Stay: {d.nightStay || d.night_stay}</small>}</div>)}</div>}
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}

function InternationalPage({ destination, setActivePage }) {
  return <PublicDestinationItineraries destination={destination} packageType="International" setActivePage={setActivePage} />;
}

function DomesticPackagePage({ packageName, setActivePage }) {
  return <PublicDestinationItineraries destination={packageName} packageType="Domestic" setActivePage={setActivePage} />;
}

/* =========================================================
   ADMIN LOGIN
   Uses Supabase Authentication. No password is stored in React.
========================================================= */

function AdminLogin({ onLogin, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!supabase) {
      setError("Supabase is not configured. Check your .env file.");
      return;
    }

    if (!email.trim() || !password) {
      setError("Please enter your admin email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      if (!data?.session || !data?.user) {
        throw new Error("Login failed. No session was created.");
      }

      const emailLower = String(data.user.email || "").trim().toLowerCase();
      const role = data.user.app_metadata?.role;
      const knownAdminEmail = emailLower === "admin@snehtravel.com" || emailLower === "travelsneh@gmail.com";

      let databaseAdmin = false;
      try {
        const { data: rpcResult } = await supabase.rpc("is_sneh_admin");
        databaseAdmin = rpcResult === true;
      } catch (rpcError) {
        console.warn("Admin RPC check skipped during login:", rpcError?.message || rpcError);
      }

      if (role !== "admin" && !databaseAdmin && !knownAdminEmail) {
        await supabase.auth.signOut();
        throw new Error("This account is not authorized for the Sneh Travel Admin panel.");
      }

      onLogin(data.session);
    } catch (err) {
      console.error("Admin login error:", err);
      setError(err?.message || "Unable to login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-lock">🔐</div>

        <span>ADMINISTRATION</span>
        <h2>Sneh Travel Admin</h2>

        <p>
          Sign in to view customer enquiries and manage travel packages.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@example.com"
            autoComplete="email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter admin password"
            autoComplete="current-password"
            required
          />

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Login to Admin"}
          </button>

          <button
            type="button"
            className="admin-back-button"
            onClick={onBack}
            disabled={loading}
          >
            ← Back to Website
          </button>
        </form>
      </div>
    </section>
  );
}

/* =========================================================
   AGENT REGISTRATION / LOGIN / DASHBOARD
   Agents use Supabase Auth + public.agents profile table.
========================================================= */

const AGENT_STYLES = `
.agent-page{min-height:calc(100vh - 90px);padding:55px 20px;background:linear-gradient(135deg,#f5f9fc,#eef7f6)}
.agent-auth-shell{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:stretch}
.agent-auth-card,.agent-info-card{background:#fff;border:1px solid #e2e8f0;border-radius:24px;box-shadow:0 20px 55px rgba(15,23,42,.08);padding:30px}
.agent-info-card{background:linear-gradient(145deg,#0b74b8,#075985 58%,#0f766e);color:#fff;display:flex;flex-direction:column;justify-content:center}
.agent-info-card h2{font-size:32px;line-height:1.1;margin:10px 0 12px}.agent-info-card p{color:rgba(255,255,255,.82);line-height:1.7}.agent-feature{display:flex;gap:12px;margin-top:17px}.agent-feature b{display:block}.agent-feature span{font-size:12px;color:rgba(255,255,255,.75);display:block;margin-top:3px}
.agent-eyebrow{font-size:10px;font-weight:900;letter-spacing:.14em;color:#0871c9}.agent-auth-card h2{margin:7px 0 6px;font-size:27px}.agent-auth-card>p{color:#64748b;font-size:13px;line-height:1.6;margin-bottom:20px}.agent-form{display:grid;grid-template-columns:1fr 1fr;gap:14px}.agent-form label{font-size:12px;font-weight:800;color:#334155;display:flex;flex-direction:column;gap:7px}.agent-form label.full{grid-column:1 / -1}.agent-form input,.agent-form select,.agent-form textarea{border:1px solid #dbe3ec;border-radius:11px;padding:12px 13px;font:inherit;outline:none;background:#fff}.agent-form input:focus,.agent-form select:focus,.agent-form textarea:focus{border-color:#0871c9;box-shadow:0 0 0 3px rgba(8,113,201,.1)}.agent-primary{border:0;border-radius:11px;padding:13px 16px;color:#fff;background:linear-gradient(135deg,#0871c9,#075985);font-weight:900;cursor:pointer}.agent-secondary{border:1px solid #dbe3ec;border-radius:11px;padding:12px 15px;background:#fff;color:#334155;font-weight:800;cursor:pointer}.agent-actions{grid-column:1 / -1;display:flex;gap:9px;align-items:center;margin-top:4px}.agent-error{grid-column:1 / -1;padding:11px 13px;border-radius:10px;background:#fff1f2;color:#be123c;font-size:12px;font-weight:700}.agent-success{grid-column:1 / -1;padding:11px 13px;border-radius:10px;background:#ecfdf5;color:#166534;font-size:12px;font-weight:700}.agent-link{border:0;background:transparent;color:#0871c9;font-weight:800;cursor:pointer;padding:5px}.agent-dashboard{min-height:calc(100vh - 90px);background:#f4f7fb;padding:28px}.agent-dashboard-inner{max-width:1450px;margin:auto}.agent-dashboard-head{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:24px;background:#fff;border:1px solid #e2e8f0;border-radius:18px;margin-bottom:18px}.agent-dashboard-head h2{margin:5px 0}.agent-dashboard-head p{margin:0;color:#64748b}.agent-dashboard-actions{display:flex;gap:8px}.agent-dash-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-bottom:18px}.agent-stat{background:#fff;border:1px solid #e2e8f0;border-radius:15px;padding:18px}.agent-stat span{font-size:11px;color:#64748b}.agent-stat strong{display:block;font-size:27px;margin-top:5px}.agent-dash-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:18px}.agent-menu,.agent-content{background:#fff;border:1px solid #e2e8f0;border-radius:16px}.agent-menu{padding:10px;height:max-content}.agent-menu button{width:100%;text-align:left;border:0;background:transparent;border-radius:10px;padding:12px;font-weight:800;color:#475569;cursor:pointer}.agent-menu button.active,.agent-menu button:hover{background:#eff8ff;color:#075985}.agent-content{padding:20px}.agent-content h3{margin:0 0 6px}.agent-muted{color:#64748b;font-size:13px}.agent-table-wrap{overflow:auto;border:1px solid #e2e8f0;border-radius:12px;margin-top:15px}.agent-table{width:100%;border-collapse:collapse;min-width:760px}.agent-table th,.agent-table td{padding:11px 12px;border-bottom:1px solid #edf2f7;text-align:left;font-size:12px}.agent-table th{background:#f8fafc;font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#64748b}.agent-empty{padding:35px;text-align:center;color:#64748b;background:#f8fafc;border-radius:12px;margin-top:15px}
@media(max-width:850px){.agent-auth-shell,.agent-dash-layout{grid-template-columns:1fr}.agent-info-card{display:none}.agent-dash-grid{grid-template-columns:1fr 1fr}.agent-dashboard{padding:16px}.agent-dashboard-head{align-items:flex-start;flex-direction:column}}@media(max-width:560px){.agent-form{grid-template-columns:1fr}.agent-form label.full{grid-column:auto}.agent-actions{grid-column:auto;flex-wrap:wrap}.agent-dash-grid{grid-template-columns:1fr}.agent-dashboard-head{padding:18px}}
`;

const AGENT_MANAGEMENT_STYLES = `
.agent-management-view{padding:24px}.agent-management-toolbar{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:20px}.agent-management-toolbar h2{margin:4px 0 5px;font-size:25px;color:#123b5d}.agent-management-toolbar p{margin:0;color:#64748b;font-size:13px}.agent-management-stats{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-bottom:16px}.agent-management-stats button{border:1px solid #e2e8f0;background:#fff;border-radius:14px;padding:14px;text-align:left;cursor:pointer}.agent-management-stats button.active{border-color:#0871c9;box-shadow:0 0 0 2px rgba(8,113,201,.08);background:#f5fbff}.agent-management-stats span{display:block;color:#64748b;font-size:11px;font-weight:800}.agent-management-stats strong{display:block;color:#123b5d;font-size:25px;margin-top:5px}.agent-management-filters{display:flex;align-items:center;gap:12px;margin-bottom:14px}.agent-management-filters input{flex:1;border:1px solid #dbe3ec;border-radius:11px;padding:12px 14px;font:inherit;outline:none}.agent-management-filters span{font-size:12px;color:#64748b}.agent-management-table-wrap{overflow:auto;border:1px solid #e2e8f0;border-radius:14px;background:#fff}.agent-management-table{width:100%;min-width:1050px;border-collapse:collapse}.agent-management-table th,.agent-management-table td{padding:13px 14px;border-bottom:1px solid #edf2f7;text-align:left;font-size:12px;vertical-align:top}.agent-management-table th{background:#f8fafc;color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:.06em}.agent-management-table td strong,.agent-management-table td small{display:block}.agent-management-table td small{margin-top:4px;color:#64748b}.agent-status-pill{display:inline-block;padding:5px 9px;border-radius:999px;text-transform:capitalize;font-size:10px;font-weight:900;background:#f1f5f9;color:#475569}.agent-status-pill.approved{background:#dcfce7;color:#166534}.agent-status-pill.pending{background:#fef3c7;color:#92400e}.agent-status-pill.rejected{background:#fee2e2;color:#991b1b}.agent-status-pill.suspended{background:#e2e8f0;color:#334155}.agent-management-actions{display:flex;flex-wrap:wrap;gap:6px}.agent-management-actions button{border:1px solid #cbd5e1;background:#fff;border-radius:8px;padding:7px 9px;font-size:10px;font-weight:800;cursor:pointer;color:#075985}.agent-management-actions button.danger{color:#b91c1c}.admin-primary-btn{border:0;border-radius:10px;padding:11px 14px;background:#075985;color:#fff;font-weight:800;cursor:pointer}.admin-error-box{padding:12px 14px;border-radius:10px;background:#fff1f2;color:#be123c;font-size:12px;font-weight:700;margin-bottom:12px}@media(max-width:800px){.agent-management-view{padding:16px}.agent-management-toolbar{align-items:flex-start;flex-direction:column}.agent-management-stats{grid-template-columns:repeat(2,1fr)}.agent-management-filters{align-items:stretch;flex-direction:column}}
`;

function AgentLogin({ onLogin, onRegister, onBack }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault(); setError("");
    if (!supabase) return setError("Supabase is not configured. Check your .env file.");
    if (!identifier.trim() || !password) return setError("Please enter your email and password.");
    try {
      setLoading(true);
      const email = identifier.trim().toLowerCase();
      if (!email.includes("@")) throw new Error("Please enter the registered agent email address.");
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        const message = String(error.message || "");
        const lower = message.toLowerCase();

        if (error.code === "email_not_confirmed" || lower.includes("email not confirmed")) {
          setError("Email not confirmed. Please confirm this user in Supabase Authentication → Users. After confirmation, login will continue to the Agent Approval check.");
        } else if (lower.includes("invalid login credentials")) {
          setError("Invalid email or password. If you have registered recently, please make sure your email is confirmed and your account has been approved by Sneh Travel Admin.");
        } else {
          setError(message || "Unable to login.");
        }
        return;
      }

      if (!data?.session || !data?.user?.id) {
        setError("Login failed. No session was created.");
        return;
      }

      const { data: agent, error: profileError } = await supabase
        .from("agents")
        .select("*")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (profileError) {
        await supabase.auth.signOut();
        throw profileError;
      }

      if (!agent) {
        await supabase.auth.signOut();
        throw new Error("Agent profile not found. Please contact Sneh Travel Admin.");
      }

      const status = String(agent.status || "pending").trim().toLowerCase();

      if (status !== "approved") {
        await supabase.auth.signOut();

        if (status === "pending") {
          setError("Pending Admin Approval — your Sneh Travel agent registration has been received and is waiting for Admin approval. You cannot access the Agent Dashboard until your account is approved.");
        } else if (status === "rejected") {
          setError("Your agent registration has been rejected by Sneh Travel Admin. Please contact Sneh Travel for more information.");
        } else if (status === "suspended") {
          setError("Your agent account is currently suspended. Please contact Sneh Travel Admin.");
        } else {
          setError(`Your agent account is currently ${status}. Please wait for Sneh Travel Admin approval.`);
        }
        return;
      }

      // Only an approved agent can reach the Agent Dashboard.
      onLogin(data.session, agent);
    } catch (err) {
      console.error("Agent login error:", err);
      setError(err?.message || "Unable to login.");
    }
    finally { setLoading(false); }
  }

  return <section className="agent-page"><style>{AGENT_STYLES}</style><div className="agent-auth-shell">
    <div className="agent-info-card"><span className="agent-eyebrow" style={{color:"#bfdbfe"}}>SNEH TRAVEL PARTNER NETWORK</span><h2>Grow your business with Sneh Travel.</h2><p>Registered travel agents can access their own enquiries, quotations, bookings and payment history from one secure dashboard.</p><div className="agent-feature"><b>✓ Private workspace</b><span>Your customer records remain separate from other agents.</span></div><div className="agent-feature"><b>✓ Approval based access</b><span>New registrations stay pending until approved by Sneh Travel.</span></div><div className="agent-feature"><b>✓ No supplier access</b><span>Supplier payments and admin settings remain restricted.</span></div></div>
    <div className="agent-auth-card"><span className="agent-eyebrow">AGENT PORTAL</span><h2>Agent Login</h2><p>Sign in using your registered email address.</p><form className="agent-form" onSubmit={submit}>
      <label className="full">Email<input value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder="agent@example.com" autoComplete="username"/></label>
      <label className="full">Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" autoComplete="current-password"/></label>
      {error && <div className="agent-error" role="alert" aria-live="polite">{error}</div>}
      <div className="agent-actions"><button className="agent-primary" type="submit" disabled={loading}>{loading ? "Checking account..." : "Login"}</button><button className="agent-secondary" type="button" onClick={onRegister}>Register as Agent</button><button className="agent-link" type="button" onClick={async()=>{const email=identifier.trim().toLowerCase();if(!email||!email.includes("@")){setError("Enter your registered email first.");return;}try{const {error}=await supabase.auth.resend({type:"signup",email});if(error)throw error;setError("Confirmation email sent. Please open the email, confirm the account, then login again.");}catch(err){setError(err?.message||"Unable to resend confirmation email.");}}}>Resend Confirmation</button><button className="agent-link" type="button" onClick={()=>alert("For password reset, use Supabase Auth password recovery. Agent login also requires the agent profile to be Approved by Admin.")}>Forgot Password?</button><button className="agent-link" type="button" onClick={onBack}>← Website</button></div>
    </form></div>
  </div></section>;
}

function AgentRegistration({ onBack, onLogin }) {
  const [form,setForm]=useState({agencyName:"",agentName:"",mobile:"",email:"",city:"",state:"",officeAddress:"",gstNumber:"",panNumber:"",password:"",confirmPassword:"",terms:false});
  const [loading,setLoading]=useState(false), [error,setError]=useState(""), [success,setSuccess]=useState("");
  const set=(k,v)=>setForm(x=>({...x,[k]:v}));

  async function submit(e){
    e.preventDefault(); setError(""); setSuccess("");
    if(!supabase) return setError("Supabase is not configured. Check your .env file.");

    const agencyName=form.agencyName.trim();
    const agentName=form.agentName.trim();
    const mobile=form.mobile.trim();
    const email=form.email.trim().toLowerCase();
    const city=form.city.trim();
    const state=form.state.trim();
    const officeAddress=form.officeAddress.trim();
    const gstNumber=form.gstNumber.trim()||null;
    const panNumber=form.panNumber.trim()||null;

    if(!agencyName||!agentName||!mobile||!email||!city||!state||!officeAddress){
      return setError("Please complete all required registration fields.");
    }
    if(form.password.length<6) return setError("Password must contain at least 6 characters.");
    if(form.password!==form.confirmPassword) return setError("Password and confirm password do not match.");
    if(!form.terms) return setError("Please accept the Terms & Conditions.");

    try{
      setLoading(true);

      /*
       * IMPORTANT: The Auth metadata below is intentionally complete because
       * the Supabase auth.users trigger creates public.agents from this data.
       * That trigger is the reliable path even when email confirmation is on
       * and signUp() does not return a session.
       */
      const {data,error}=await supabase.auth.signUp({
        email,
        password:form.password,
        options:{
          data:{
            role:"agent",
            company_name:agencyName,
            full_name:agentName,
            phone:mobile,
            city,
            state,
            address:officeAddress,
            gst_number:gstNumber,
            pan_number:panNumber
          }
        }
      });

      if(error) throw error;
      if(!data?.user) throw new Error("Unable to create the account.");

      /*
       * Fallback for projects where email confirmation is disabled and a
       * session is returned immediately. The database trigger remains the
       * primary/secure creation mechanism. If the fallback is blocked by RLS,
       * registration is still successful because the trigger can create the
       * profile server-side.
       */
      if(data?.session?.user?.id){
        const profile={
          user_id:data.session.user.id,
          company_name:agencyName,
          full_name:agentName,
          phone:mobile,
          email,
          city,
          state,
          address:officeAddress,
          gst_number:gstNumber,
          pan_number:panNumber,
          status:"pending"
        };
        const {error:profileError}=await supabase.from("agents").upsert(profile,{onConflict:"user_id"});
        if(profileError) console.warn("Agent profile fallback insert was not needed/allowed:",profileError.message);
      }

      /* Never leave a newly registered agent logged in. */
      if(data?.session) await supabase.auth.signOut();

      setSuccess("Registration submitted successfully. Your request is now pending Sneh Travel approval. You can log in only after Admin approves your agent account.");
      setForm(x=>({...x,password:"",confirmPassword:"",terms:false}));
      setTimeout(()=>onLogin(),1400);
    }catch(err){
      console.error("Agent registration error:",err);
      const message=String(err?.message||"");
      if(message.toLowerCase().includes("already registered")||message.toLowerCase().includes("already been registered")){
        setError("This email is already registered. Please use Agent Login or contact Sneh Travel.");
      }else if(message.toLowerCase().includes("agents")&&message.toLowerCase().includes("does not exist")){
        setError("Agent registration is not configured yet. Please create the public.agents table and complete the Supabase agent registration setup first.");
      }else{
        setError(message||"Unable to register agent.");
      }
    }finally{setLoading(false);}
  }
  return <section className="agent-page"><style>{AGENT_STYLES}</style><div className="agent-auth-shell"><div className="agent-info-card"><span className="agent-eyebrow" style={{color:"#bfdbfe"}}>BECOME A SNEH TRAVEL PARTNER</span><h2>Register your agency.</h2><p>Complete the registration form. Your profile will remain pending until Sneh Travel approves it.</p><div className="agent-feature"><b>1. Register</b><span>Submit agency and contact details.</span></div><div className="agent-feature"><b>2. Verification</b><span>Sneh Travel reviews your application.</span></div><div className="agent-feature"><b>3. Start selling</b><span>After approval, access your private agent dashboard.</span></div></div><div className="agent-auth-card"><span className="agent-eyebrow">AGENT REGISTRATION</span><h2>Create Agent Account</h2><p>Fields marked with * are required.</p><form className="agent-form" onSubmit={submit}>
    <label>Agency / Company Name *<input required value={form.agencyName} onChange={e=>set("agencyName",e.target.value)} placeholder="ABC Travels"/></label><label>Agent Name *<input required value={form.agentName} onChange={e=>set("agentName",e.target.value)} placeholder="Full name"/></label>
    <label>Mobile Number *<input required value={form.mobile} onChange={e=>set("mobile",e.target.value)} placeholder="10 digit mobile"/></label><label>Email *<input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="agency@example.com"/></label>
    <label>City *<input required value={form.city} onChange={e=>set("city",e.target.value)} placeholder="Delhi"/></label><label>State *<input required value={form.state} onChange={e=>set("state",e.target.value)} placeholder="Delhi"/></label>
    <label className="full">Office Address *<textarea required rows="2" value={form.officeAddress} onChange={e=>set("officeAddress",e.target.value)} placeholder="Complete office address"/></label>
    <label>GST Number<input value={form.gstNumber} onChange={e=>set("gstNumber",e.target.value)} placeholder="Optional"/></label><label>PAN Number<input value={form.panNumber} onChange={e=>set("panNumber",e.target.value)} placeholder="Optional"/></label>
    <label>Password *<input required type="password" value={form.password} onChange={e=>set("password",e.target.value)} placeholder="Minimum 6 characters"/></label><label>Confirm Password *<input required type="password" value={form.confirmPassword} onChange={e=>set("confirmPassword",e.target.value)} placeholder="Repeat password"/></label>
    <label className="full" style={{flexDirection:"row",alignItems:"center",gap:9}}><input type="checkbox" checked={form.terms} onChange={e=>set("terms",e.target.checked)} style={{width:16}}/> I agree to the Sneh Travel Agent Terms & Conditions.</label>
    {error && <div className="agent-error">{error}</div>}{success && <div className="agent-success">{success}</div>}
    <div className="agent-actions"><button className="agent-primary" disabled={loading}>{loading?"Creating Account...":"Create Agent Account"}</button><button className="agent-secondary" type="button" onClick={onBack}>Back to Login</button></div>
  </form></div></div></section>;
}

function AgentDashboard({ session, agent, onLogout, setActivePage }) {
  const [tab,setTab]=useState("dashboard");
  const [enquiries,setEnquiries]=useState([]),[quotations,setQuotations]=useState([]),[bookings,setBookings]=useState([]),[loading,setLoading]=useState(true);
  useEffect(()=>{(async()=>{try{setLoading(true);const uid=session?.user?.id;if(!supabase||!uid)return;const {data:e,error:eError}=await supabase.from("enquiries").select("*").eq("agent_id",uid).order("created_at",{ascending:false});if(eError)console.warn(eError);setEnquiries(e||[]);let q=[];let b=[];try{q=JSON.parse(localStorage.getItem("sneh_travel_quotations")||"[]")}catch{}try{b=JSON.parse(localStorage.getItem("sneh_travel_bookings")||"[]")}catch{}let remote=[];try{const {data:rb,error:rbError}=await supabase.from("booking_records").select("*").eq("agent_id",uid).order("created_at",{ascending:false});if(rbError)console.warn(rbError);remote=(rb||[]).map(r=>r.booking_data||{id:r.id,serial_no:r.booking_no,customer_name:r.customer_name,destination:r.destination,travelDate:r.travel_date,checkIn:r.check_in,checkOut:r.check_out,bookingStatus:r.booking_status,paymentStatus:r.payment_status,finalSaleAmount:r.sale_amount,netCost:r.purchase_amount});}catch{}const local=((Array.isArray(b)?b:[]).filter(x=>String(x.agent_id||x.agentId||"")===String(uid)));const map=new Map(local.concat(remote).map(x=>[String(x.id||x.serial_no),x]));setQuotations((Array.isArray(q)?q:[]).filter(x=>String(x.agent_id||"")===String(uid)));setBookings([...map.values()]);}finally{setLoading(false)}})()},[session?.user?.id]);
  return <section className="agent-dashboard"><style>{AGENT_STYLES}</style><div className="agent-dashboard-inner"><div className="agent-dashboard-head"><div><span className="agent-eyebrow">AGENT DASHBOARD</span><h2>Welcome, {agent?.full_name || agent?.company_name || "Agent"}</h2><p>{agent?.company_name || "Sneh Travel Partner"} · {agent?.status || "approved"}</p></div><div className="agent-dashboard-actions"><button className="agent-secondary" onClick={()=>setActivePage("home")}>View Website</button><button className="agent-primary" onClick={onLogout}>Logout</button></div></div>
  <div className="agent-dash-grid"><div className="agent-stat"><span>My Enquiries</span><strong>{enquiries.length}</strong></div><div className="agent-stat"><span>My Quotations</span><strong>{quotations.length}</strong></div><div className="agent-stat"><span>My Bookings</span><strong>{bookings.length}</strong></div><div className="agent-stat"><span>Account Status</span><strong style={{fontSize:18,textTransform:"capitalize"}}>{agent?.status||"Approved"}</strong></div></div>
  <div className="agent-dash-layout"><aside className="agent-menu">{[["dashboard","Dashboard"],["profile","My Profile"],["packages","Browse Packages"],["enquiries","Create Enquiry"],["my-enquiries","My Enquiries"],["quotations","My Quotations"],["bookings","My Bookings"],["payments","Payment History"]].map(([key,label])=><button key={key} className={tab===key?"active":""} onClick={()=>setTab(key)}>{label}</button>)}<button onClick={onLogout}>Logout</button></aside><div className="agent-content">{loading?<div className="agent-empty">Loading your agent workspace...</div>:<>
    {tab==="dashboard"&&<><h3>Partner Overview</h3><p className="agent-muted">Only records assigned to your agent account are shown here.</p><div className="agent-empty">Use the menu to manage your Sneh Travel agent activities.</div></>}
    {tab==="profile"&&<><h3>My Profile</h3><div className="agent-table-wrap"><table className="agent-table"><tbody><tr><th>Agency</th><td>{agent?.company_name||"-"}</td></tr><tr><th>Agent</th><td>{agent?.full_name||"-"}</td></tr><tr><th>Mobile</th><td>{agent?.phone||"-"}</td></tr><tr><th>Email</th><td>{agent?.email||"-"}</td></tr><tr><th>City</th><td>{agent?.city||"-"}</td></tr><tr><th>State</th><td>{agent?.state||"-"}</td></tr><tr><th>GST</th><td>{agent?.gst_number||"-"}</td></tr></tbody></table></div></>}
    {tab==="packages"&&<><h3>Browse Packages</h3><p className="agent-muted">Published Sneh Travel packages can be displayed here. Itinerary visibility remains controlled by Admin.</p><div className="agent-empty">Browse package integration is ready for the existing package catalogue.</div></>}
    {tab==="enquiries"&&<><h3>Create Enquiry</h3><p className="agent-muted">Use the website Enquiry form. Your agent ID can be attached to the enquiry when submitted from this workspace.</p><button className="agent-primary" onClick={()=>setActivePage("quotation")}>Open Enquiry Form</button></>}
    {tab==="my-enquiries"&&<AgentRows title="My Enquiries" rows={enquiries} columns={[["Customer","name"],["Destination","destination"],["Travel Date","travel_date"],["Status","status"]]} />}
    {tab==="quotations"&&<AgentRows title="My Quotations" rows={quotations} columns={[["Quotation","serial_no"],["Customer","customer_name"],["Destination","destination"],["Amount","price"]]} />}
    {tab==="bookings"&&<div><h3>My Bookings</h3>{bookings.length?<div className="agent-table-wrap"><table className="agent-table"><thead><tr><th>Booking / Status</th><th>Guest</th><th>Travel</th><th>Hotel & Stay</th><th>Car</th><th>Sale / Payment</th></tr></thead><tbody>{bookings.map((b,i)=>{const hotels=b.hotelServices||[];const vehicles=b.vehicleServices||[];return <tr key={b.id||i}><td><strong>{b.serial_no||"—"}</strong><small>{b.bookingStatus||"Pending"} · {b.paymentStatus||"Pending"}</small></td><td><strong>{b.customer_name||"—"}</strong><small>{b.phone||""}</small></td><td><strong>{b.destination||"—"}</strong><small>Travel: {b.travelDate||"—"}<br/>Check-in: {b.checkIn||hotels[0]?.checkIn||"—"}<br/>Check-out: {b.checkOut||hotels[hotels.length-1]?.checkOut||"—"}</small></td><td>{hotels.length?hotels.map((h,j)=><div key={j}><strong>{h.hotelName||h.name||"Hotel"}</strong><small>{h.city||""} · {h.checkIn||"—"} → {h.checkOut||"—"}</small></div>):"—"}</td><td>{vehicles.length?vehicles.map((v,j)=><div key={j}><strong>{v.vehicleType||v.vehicle||"Car"}</strong><small>{v.pickup||""} → {v.drop||""}</small></div>):"—"}</td><td><strong>₹{Number(b.finalSaleAmount||b.totalAmount||b.amount||0).toLocaleString("en-IN")}</strong><small>Advance: ₹{Number(b.advancePaid||0).toLocaleString("en-IN")}<br/>Balance: ₹{Number(b.balanceAmount||0).toLocaleString("en-IN")}</small></td></tr>})}</tbody></table></div>:<div className="agent-empty">No booking records found.</div>}</div>}
    {tab==="payments"&&<div><h3>Payment History</h3><p className="agent-muted">Customer payment history assigned to this agent can be connected here.</p><div className="agent-empty">No payment records found.</div></div>}
  </>}</div></div></div></section>;
}
function AgentRows({title,rows,columns}){return <div><h3>{title}</h3>{rows.length?<div className="agent-table-wrap"><table className="agent-table"><thead><tr>{columns.map(c=><th key={c[1]}>{c[0]}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={r.id||i}>{columns.map(c=><td key={c[1]}>{String(r?.[c[1]]??"-")}</td>)}</tr>)}</tbody></table></div>:<div className="agent-empty">No records found.</div>}</div>}

/* =========================================================
   FOOTER
========================================================= */

function Footer({ setActivePage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">SNEH TRAVEL</div>

          <p>
            Your trusted travel partner for memorable domestic and
            international holidays.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <button onClick={() => setActivePage("home")}>Home</button>
          <button onClick={() => setActivePage("about")}>About Us</button>
          <button onClick={() => setActivePage("contact")}>Contact</button>
                  </div>

        <div>
          <h3>Contact</h3>

          <a href={`tel:${phone}`}>📞 {phone}</a>
          <a href={`mailto:${email}`}>✉️ {email}</a>

          <p>
            122, First Floor,
            <br />
            Parmanand Colony,
            <br />
            Mukherjee Nagar,
            <br />
            Delhi - 110009, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sneh Travel. All Rights Reserved.
      </div>
    </footer>
  );
}

/* =========================================================
   WHATSAPP BUTTON
========================================================= */

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Sneh Travel on WhatsApp"
    >
      💬
    </a>
  );
}

/* =========================================================
   GLOBAL PRICING / MARGIN SETTINGS
========================================================= */
function PricingSettingsMaster() {
  const empty = { id: null, name: "Default Pricing", margin_type: "percentage", margin_value: 8, currency: "INR", active: true };
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function loadPricing() {
    if (!supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.from("pricing_settings").select("*").order("created_at", { ascending: false }).limit(1).maybeSingle();
      if (error) throw error;
      if (data) setForm({ ...empty, ...data, margin_value: data.margin_value ?? 8 });
      else setForm(empty);
    } catch (e) {
      alert(`Unable to load pricing settings: ${e.message || e}`);
    } finally { setLoading(false); }
  }

  useEffect(() => { loadPricing(); }, []);

  async function savePricing() {
    setSaving(true);
    try {
      const payload = {
        name: String(form.name || "Default Pricing").trim(),
        margin_type: form.margin_type || "percentage",
        margin_value: Number(form.margin_value) || 0,
        currency: form.currency || "INR",
        active: form.active !== false
      };
      if (form.id) {
        const { data, error } = await supabase.from("pricing_settings").update(payload).eq("id", form.id).select().single();
        if (error) throw error;
        setForm({ ...empty, ...data });
      } else {
        const { data, error } = await supabase.from("pricing_settings").insert(payload).select().single();
        if (error) throw error;
        setForm({ ...empty, ...data });
      }
      alert("Margin settings saved successfully.");
    } catch (e) {
      alert(`Unable to save margin settings: ${e.message || e}`);
    } finally { setSaving(false); }
  }

  const value = Number(form.margin_value) || 0;
  return (
    <div className="premium-inventory-page">
      <div className="inventory-toolbar">
        <div><span className="eyebrow">PRICING / MARGIN CONTROL</span><h2>Margin Settings</h2><p>Change the default margin used for your travel pricing. Destination or itinerary-specific margin can override this default.</p></div>
        <div className="toolbar-actions"><button className="premium-btn primary" onClick={savePricing} disabled={saving}>{saving ? "Saving…" : "Save Margin"}</button></div>
      </div>
      <section className="hotel-editor-card">
        {loading ? <p className="muted">Loading pricing settings…</p> : <>
          <div style={{padding:18,borderRadius:16,background:"#eff6ff",border:"1px solid #bfdbfe",marginBottom:18}}>
            <span className="eyebrow">CURRENT DEFAULT</span>
            <div style={{fontSize:34,fontWeight:950,color:"#075985",marginTop:5}}>{form.margin_type === "fixed" ? `₹${value.toLocaleString("en-IN")}` : `${value}%`}</div>
            <div className="muted" style={{marginTop:4}}>This is the default margin. You can change it below.</div>
          </div>
          <div className="premium-form-grid">
            <label>Pricing Setting Name<input value={form.name||""} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Default Pricing"/></label>
            <label>Margin Type<select value={form.margin_type||"percentage"} onChange={e=>setForm({...form,margin_type:e.target.value})}><option value="percentage">Percentage (%)</option><option value="fixed">Fixed Amount (₹)</option></select></label>
            <label>Margin Value<input type="number" min="0" step="0.01" value={form.margin_value??8} onChange={e=>setForm({...form,margin_value:e.target.value})}/></label>
            <label>Currency<select value={form.currency||"INR"} onChange={e=>setForm({...form,currency:e.target.value})}><option value="INR">INR (₹)</option><option value="USD">USD ($)</option><option value="AED">AED</option></select></label>
          </div>
          <div className="quotation-view-destination" style={{marginTop:20}}><strong>Example</strong><p>Purchase Cost ₹26,500 with {form.margin_type === "fixed" ? `₹${value}` : `${value}%`} margin will calculate the selling amount automatically.</p></div>
        </>}
      </section>
    </div>
  );
}

/* =========================================================
   DESTINATION MASTER

   Save destinations first. Quotations and vehicle itineraries use
   these saved destinations as their source of truth.
========================================================= */
function DestinationItineraryMaster() {
  const emptyDestination = {
    id: null,
    destination_type: "Domestic",
    name: "",
    state: "",
    country: "India",
    cities: "",
    inclusions: "",
    exclusions: "",
    activities: [],
    supplement_costs: [],
    margin_type: "percentage",
    margin_value: 8,
    active: true
  };
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyDestination);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  async function loadDestinations() {
    if (!supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.from("destinations").select("*").order("name");
      if (error) throw error;
      setItems(data || []);
    } catch (e) {
      console.error("Unable to load destinations:", e);
      alert(`Unable to load destinations: ${e.message || e}`);
    } finally { setLoading(false); }
  }

  useEffect(() => { loadDestinations(); }, []);

  function newDestination() { setForm({ ...emptyDestination }); }
  function editDestination(item) {
    setForm({
      ...emptyDestination,
      ...item,
      name: item.name || item.destination || "",
      cities: Array.isArray(item.cities) ? item.cities.join(", ") : (item.cities || ""),
      inclusions: item.inclusions || "",
      exclusions: item.exclusions || "",
      activities: Array.isArray(item.activities) ? item.activities : [],
      supplement_costs: Array.isArray(item.supplement_costs) ? item.supplement_costs : [],
      margin_type: item.margin_type || "percentage",
      margin_value: item.margin_value ?? 8
    });
  }

  async function saveDestination() {
    const name = String(form.name || "").trim();
    if (!name) { alert("Please enter destination name."); return; }
    setSaving(true);
    try {
      const cityList = String(form.cities || "").split(",").map(v => v.trim()).filter(Boolean);
      const common = {
        destination_type: form.destination_type || "Domestic",
        state: String(form.state || "").trim(),
        active: form.active !== false,
        cities: cityList,
        inclusions: String(form.inclusions || "").trim(),
        exclusions: String(form.exclusions || "").trim(),
        activities: Array.isArray(form.activities) ? form.activities : [],
        supplement_costs: Array.isArray(form.supplement_costs) ? form.supplement_costs : [],
        margin_type: form.margin_type || "percentage",
        margin_value: Number(form.margin_value) || 0
      };
      const attempts = [
        { ...common, name, country: String(form.country || (form.destination_type === "Domestic" ? "India" : "")).trim() },
        { ...common, name },
        { ...common, destination: name }
      ];
      let result = null;
      for (const payload of attempts) {
        result = form.id
          ? await supabase.from("destinations").update(payload).eq("id", form.id).select().single()
          : await supabase.from("destinations").insert(payload).select().single();
        if (!result.error) break;
      }
      if (!result || result.error) throw (result?.error || new Error("Unable to save destination."));
      setForm({ ...emptyDestination });
      await loadDestinations();
      alert("Destination saved successfully. You can now create its vehicle itinerary and hotel inventory.");
    } catch (e) {
      alert(`Unable to save destination: ${e.message || e}`);
    } finally { setSaving(false); }
  }

  function updateDestinationActivity(index, field, value) {
    setForm(prev => ({
      ...prev,
      activities: (prev.activities || []).map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  }

  function addDestinationActivity() {
    setForm(prev => ({
      ...prev,
      activities: [...(prev.activities || []), { title: "", location: "", description: "", included: true }]
    }));
  }

  function removeDestinationActivity(index) {
    setForm(prev => ({ ...prev, activities: (prev.activities || []).filter((_, i) => i !== index) }));
  }
  function updateSupplementCost(index, field, value) {
    setForm(prev => ({ ...prev, supplement_costs: (prev.supplement_costs || []).map((item, i) => i === index ? { ...item, [field]: value } : item) }));
  }

  function addSupplementCost() {
    setForm(prev => ({ ...prev, supplement_costs: [...(prev.supplement_costs || []), { title: "", description: "", unit: "per person", cost: 0, active: true }] }));
  }

  function removeSupplementCost(index) {
    setForm(prev => ({ ...prev, supplement_costs: (prev.supplement_costs || []).filter((_, i) => i !== index) }));
  }

  async function deleteDestination(item) {
    if (!item?.id || !window.confirm(`Delete destination ${item.name || item.destination || ""}?`)) return;
    try {
      const { error } = await supabase.from("destinations").delete().eq("id", item.id);
      if (error) throw error;
      if (String(form.id) === String(item.id)) newDestination();
      await loadDestinations();
    } catch (e) { alert(`Unable to delete destination: ${e.message || e}`); }
  }

  return (
    <div className="premium-inventory-page">
      <div className="inventory-toolbar">
        <div><span className="eyebrow">TRAVEL INVENTORY / DESTINATIONS</span><h2>Destination Master</h2><p>Save the destination first. Vehicle itineraries, hotels and quotations use this saved destination.</p></div>
        <div className="toolbar-actions"><button className="premium-btn ghost" onClick={newDestination}>+ New Destination</button><button className="premium-btn primary" onClick={saveDestination} disabled={saving}>{saving ? "Saving…" : "Save Destination"}</button></div>
      </div>
      <div className="hotel-master-layout">
        <aside className="hotel-list-card">
          <div className="list-head"><strong>Saved Destinations</strong><span>{items.length}</span></div>
          {loading ? <p className="muted">Loading…</p> : items.map(item => (
            <div key={item.id} className={`hotel-list-item ${String(form.id)===String(item.id)?"selected":""}`}>
              <span className="hotel-avatar">📍</span>
              <span className="hotel-list-details"><strong>{item.name || item.destination}</strong><small>{item.state || item.country || "—"}</small><em>{item.destination_type || "Domestic"}</em></span>
              <button type="button" className="premium-btn ghost mini" onClick={() => editDestination(item)}>Edit</button>
              <button type="button" className="icon-danger" onClick={() => deleteDestination(item)}>×</button>
            </div>
          ))}
          {!items.length && !loading && <div className="empty-box">No destinations saved yet.<br/>Create Kerala first.</div>}
        </aside>
        <section className="hotel-editor-card">
          <div className="editor-title"><div><span className="eyebrow">DESTINATION PROFILE</span><h3>{form.id ? "Edit Destination" : "Add Destination"}</h3></div>{form.id && <button className="danger-link" onClick={() => deleteDestination(form)}>Delete</button>}</div>
          <div className="premium-form-grid">
            <label>Domestic / International<select value={form.destination_type} onChange={e=>setForm({...form,destination_type:e.target.value,country:e.target.value==="Domestic"?"India":form.country})}><option>Domestic</option><option>International</option></select></label>
            <label>Destination Name *<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Example: Kerala"/></label>
            <label>State / Region<input value={form.state||""} onChange={e=>setForm({...form,state:e.target.value})} placeholder="Example: Kerala"/></label>
            <label>Country<input value={form.country||""} onChange={e=>setForm({...form,country:e.target.value})} placeholder="India"/></label>
            <label style={{gridColumn:"1 / -1"}}>Cities in this destination<input value={form.cities||""} onChange={e=>setForm({...form,cities:e.target.value})} placeholder="Cochin, Munnar, Thekkady, Alleppey"/><small className="muted">Separate cities with commas. These cities will be used when selecting hotels for quotations.</small></label>
            <div style={{gridColumn:"1 / -1",marginTop:8,padding:18,border:"1px solid #e2e8f0",borderRadius:14,background:"#f8fafc"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:12}}>
                <div><strong>Destination Activities</strong><div className="muted" style={{fontSize:12,marginTop:4}}>Add activities/sightseeing points separately for this destination.</div></div>
                <button type="button" className="premium-btn primary mini" onClick={addDestinationActivity}>+ Add Activity</button>
              </div>
              {(form.activities || []).map((activity,index)=>(
                <div key={index} style={{padding:14,background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,marginBottom:10}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><strong>Activity {index+1}</strong><button type="button" className="icon-danger" onClick={()=>removeDestinationActivity(index)}>×</button></div>
                  <div className="premium-form-grid">
                    <label>Activity / Sightseeing<input value={activity.title||""} onChange={e=>updateDestinationActivity(index,"title",e.target.value)} placeholder="Example: Dal Lake Shikara Ride"/></label>
                    <label>Location / City<input value={activity.location||""} onChange={e=>updateDestinationActivity(index,"location",e.target.value)} placeholder="Example: Srinagar"/></label>
                    <label style={{gridColumn:"1 / -1"}}>Activity Details<textarea rows="3" value={activity.description||""} onChange={e=>updateDestinationActivity(index,"description",e.target.value)} placeholder="Describe the activity or sightseeing point..."/></label>
                    <label className="checkbox-field"><input type="checkbox" checked={activity.included!==false} onChange={e=>updateDestinationActivity(index,"included",e.target.checked)}/> Show as included activity</label>
                  </div>
                </div>
              ))}
              {!(form.activities||[]).length && <div className="empty-box">No destination activities added yet.</div>}
            </div>

            <div style={{gridColumn:"1 / -1",marginTop:8,padding:18,border:"1px solid #fde68a",borderRadius:14,background:"#fffbeb"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:12}}>
                <div><strong>Supplement Cost</strong><div className="muted" style={{fontSize:12,marginTop:4}}>Add destination-specific compulsory/optional charges such as Kashmir Union Cab (Aru Valley, Betaab Valley) or Kerala Athirapally/Jatayu supplement.</div></div>
                <button type="button" className="premium-btn primary mini" onClick={addSupplementCost}>+ Add Supplement</button>
              </div>
              {(form.supplement_costs || []).map((item,index)=>(
                <div key={index} style={{padding:14,background:"#fff",border:"1px solid #fde68a",borderRadius:12,marginBottom:10}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><strong>Supplement {index+1}</strong><button type="button" className="icon-danger" onClick={()=>removeSupplementCost(index)}>×</button></div>
                  <div className="premium-form-grid">
                    <label>Supplement / Activity Name<input value={item.title||""} onChange={e=>updateSupplementCost(index,"title",e.target.value)} placeholder="Example: Aru Valley Union Cab"/></label>
                    <label>Charge Unit<select value={item.unit||"per person"} onChange={e=>updateSupplementCost(index,"unit",e.target.value)}><option value="per person">Per Person</option><option value="per vehicle">Per Vehicle</option><option value="per room">Per Room</option><option value="per booking">Per Booking</option></select></label>
                    <label>Supplement Cost (₹)<input type="number" min="0" step="0.01" value={item.cost??0} onChange={e=>updateSupplementCost(index,"cost",e.target.value)}/></label>
                    <label>Status<select value={item.active!==false?"Active":"Inactive"} onChange={e=>updateSupplementCost(index,"active",e.target.value==="Active")}><option>Active</option><option>Inactive</option></select></label>
                    <label style={{gridColumn:"1 / -1"}}>Description<textarea rows="2" value={item.description||""} onChange={e=>updateSupplementCost(index,"description",e.target.value)} placeholder="Example: Union cab supplement for Aru Valley and Betaab Valley sightseeing."/></label>
                  </div>
                </div>
              ))}
              {!(form.supplement_costs||[]).length && <div className="empty-box">No destination supplement costs added yet.</div>}
            </div>

            <label style={{gridColumn:"1 / -1"}}>Destination Inclusions<textarea rows="6" value={form.inclusions||""} onChange={e=>setForm({...form,inclusions:e.target.value})} placeholder={"Accommodation as per selected category\nPrivate vehicle\nAirport pickup & drop\nSightseeing as per itinerary"}/></label>
            <label style={{gridColumn:"1 / -1"}}>Destination Exclusions<textarea rows="6" value={form.exclusions||""} onChange={e=>setForm({...form,exclusions:e.target.value})} placeholder={"Airfare\nPersonal expenses\nEntry tickets\nAnything not mentioned in inclusions"}/></label>

            <div style={{gridColumn:"1 / -1",padding:18,border:"1px solid #dbeafe",borderRadius:14,background:"#eff6ff"}}>
              <strong style={{display:"block",marginBottom:6}}>Destination Margin</strong>
              <span className="muted" style={{fontSize:12}}>This is the default margin for this destination. An itinerary-specific margin can still override it.</span>
              <div className="premium-form-grid" style={{marginTop:12}}>
                <label>Margin Type<select value={form.margin_type||"percentage"} onChange={e=>setForm({...form,margin_type:e.target.value})}><option value="percentage">Percentage (%)</option><option value="fixed">Fixed Amount (₹)</option></select></label>
                <label>Margin Value<input type="number" min="0" step="0.01" value={form.margin_value??8} onChange={e=>setForm({...form,margin_value:e.target.value})}/></label>
              </div>
            </div>

            <label>Status<select value={form.active!==false?"Active":"Inactive"} onChange={e=>setForm({...form,active:e.target.value==="Active"})}><option>Active</option><option>Inactive</option></select></label>
          </div>
          <div className="quotation-view-destination" style={{marginTop:20}}><strong>Next step</strong><p>After saving <b>{form.name || "the destination"}</b>, go to <b>Vehicle Builder & Rates</b> and select this destination before saving the Night / Day Vehicle Rate Matrix.</p></div>
        </section>
      </div>
    </div>
  );
}

/* =========================================================
   HOTEL BUILDER
   Uses the existing package_hotels table/schema.
========================================================= */

function HotelBuilder() {
  const emptyHotel = { id: null, destination_type: "Domestic", destination: "", state: "", city: "", name: "", category: "3 Star", active: true };
  const emptyRate = { id: null, hotel_id: null, room_category: "Standard", room_type: "Double", meal_plan: "CP", room_rate_per_night: "", extra_bed_rate: "", child_with_bed_rate: "", child_without_bed_rate: "", lunch_price_per_person: "", dinner_price_per_person: "", valid_from: "", valid_to: "", active: true };
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [hotelForm, setHotelForm] = useState(emptyHotel);
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingRateId, setEditingRateId] = useState(null);

  async function loadHotels() {
    if (!supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.from("hotels").select("*").order("city").order("name");
      if (error) throw error;
      setHotels(data || []);
      if (!selectedDestination && data?.[0]?.destination) setSelectedDestination(data[0].destination);
      if (!selectedHotelId && data?.[0]) await openHotel(data[0]);
    } catch (e) { alert(`Unable to load hotels: ${e.message || e}`); }
    finally { setLoading(false); }
  }

  async function openHotel(hotel) {
    setSelectedHotelId(hotel.id);
    setHotelForm({ ...emptyHotel, ...hotel });
    const { data, error } = await supabase.from("hotel_rates").select("*").eq("hotel_id", hotel.id).order("room_type").order("meal_plan");
    if (error) { alert(`Unable to load rates: ${error.message || error}`); return; }
    setRates(data || []);
  }

  useEffect(() => { loadHotels(); }, []);

  function newHotel() { setSelectedHotelId(null); setHotelForm({ ...emptyHotel, destination: selectedDestination || "", city: selectedCity !== "ALL" ? selectedCity : "" }); setRates([]); }

  const hotelDestinations = [...new Set(hotels.map(h => String(h.destination || "").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  const destinationHotels = hotels.filter(h => String(h.destination || "").trim() === String(selectedDestination || "").trim());
  const hotelCities = [...new Set(destinationHotels.map(h => String(h.city || "").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  const visibleHotels = destinationHotels.filter(h => selectedCity === "ALL" || String(h.city || "").trim() === selectedCity);

  function chooseHotelDestination(destination) {
    setSelectedDestination(destination);
    setSelectedCity("ALL");
  }
  function chooseHotelCity(city) { setSelectedCity(city); }
  function addRate() {
    if (!selectedHotelId) { alert("Please save the hotel first, then add hotel rates."); return; }
    const tempId = `new-${Date.now()}`;
    setRates(prev => [...prev, { ...emptyRate, id: tempId, hotel_id: selectedHotelId }]);
    setEditingRateId(tempId);
  }
  function updateRate(i, field, value) { setRates(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: value } : r)); }
  function removeRate(i) { setRates(prev => prev.filter((_, idx) => idx !== i)); }

  function cancelRateEdit(i) {
    const rate = rates[i];
    if (rate?.id && String(rate.id).startsWith("new-")) {
      setRates(prev => prev.filter((_, idx) => idx !== i));
    } else {
      setRates(prev => prev.map((r, idx) => idx === i ? { ...r, __cancelEdit: Date.now() } : r));
      if (selectedHotelId) openHotel({ ...hotelForm, id: selectedHotelId });
    }
    setEditingRateId(null);
  }

  async function saveSingleRate(i) {
    const rate = rates[i];
    if (!selectedHotelId) { alert("Please save the hotel first."); return; }
    try {
      const rp = {
        hotel_id: selectedHotelId,
        room_category: rate.room_category || "Standard",
        room_type: rate.room_type || "Double",
        meal_plan: rate.meal_plan || "CP",
        room_rate_per_night: Number(rate.room_rate_per_night) || 0,
        extra_bed_rate: Number(rate.extra_bed_rate) || 0,
        child_with_bed_rate: Number(rate.child_with_bed_rate) || 0,
        child_without_bed_rate: Number(rate.child_without_bed_rate) || 0,
        lunch_price_per_person: Number(rate.lunch_price_per_person) || 0,
        dinner_price_per_person: Number(rate.dinner_price_per_person) || 0,
        valid_from: rate.valid_from || null,
        valid_to: rate.valid_to || null,
        active: rate.active !== false
      };
      let saved;
      if (rate.id && !String(rate.id).startsWith("new-")) {
        const { data, error } = await supabase.from("hotel_rates").update(rp).eq("id", rate.id).select().single();
        if (error) throw error;
        saved = data;
      } else {
        const { data, error } = await supabase.from("hotel_rates").insert(rp).select().single();
        if (error) throw error;
        saved = data;
      }
      setRates(prev => prev.map((r, idx) => idx === i ? saved : r));
      setEditingRateId(null);
      alert("Hotel rate saved successfully.");
    } catch (e) {
      alert(`Unable to save hotel rate: ${e.message || e}`);
    }
  }

  async function saveHotel() {
    if (!hotelForm.name.trim() || !hotelForm.city.trim()) { alert("Please enter hotel name and city."); return; }
    setSaving(true);
    try {
      let hotelId = selectedHotelId;
      const payload = { destination_type: hotelForm.destination_type || "Domestic", destination: hotelForm.destination || "", state: hotelForm.state || "", city: hotelForm.city.trim(), name: hotelForm.name.trim(), category: hotelForm.category || "3 Star", description: hotelForm.description || "", image_url: hotelForm.image_url || "", active: hotelForm.active !== false };
      if (hotelId) {
        const { error } = await supabase.from("hotels").update(payload).eq("id", hotelId); if (error) throw error;
      } else {
        const { data, error } = await supabase.from("hotels").insert(payload).select().single(); if (error) throw error; hotelId = data.id;
      }
      for (const rate of rates) {
        const rp = { hotel_id: hotelId, room_category: rate.room_category || "Standard", room_type: rate.room_type || "Double", meal_plan: rate.meal_plan || "CP", room_rate_per_night: Number(rate.room_rate_per_night) || 0, extra_bed_rate: Number(rate.extra_bed_rate) || 0, child_with_bed_rate: Number(rate.child_with_bed_rate) || 0, child_without_bed_rate: Number(rate.child_without_bed_rate) || 0, lunch_price_per_person: Number(rate.lunch_price_per_person) || 0, dinner_price_per_person: Number(rate.dinner_price_per_person) || 0, valid_from: rate.valid_from || null, valid_to: rate.valid_to || null, active: rate.active !== false };
        if (rate.id && !String(rate.id).startsWith("new-")) { const { error } = await supabase.from("hotel_rates").update(rp).eq("id", rate.id); if (error) throw error; }
        else { const { error } = await supabase.from("hotel_rates").insert(rp); if (error) throw error; }
      }
      setSelectedHotelId(hotelId); await loadHotels();
      const { data } = await supabase.from("hotels").select("*").eq("id", hotelId).single(); if (data) await openHotel(data);
      alert("Hotel saved successfully.");
    } catch (e) { alert(`Unable to save hotel: ${e.message || e}`); }
    finally { setSaving(false); }
  }

  async function deleteHotel() {
    if (!selectedHotelId || !window.confirm("Delete this hotel and all its rates?")) return;
    const { error } = await supabase.from("hotels").delete().eq("id", selectedHotelId);
    if (error) { alert(error.message); return; }
    newHotel(); await loadHotels();
  }

  return <div className="premium-inventory-page">
    <div className="inventory-toolbar"><div><span className="eyebrow">INVENTORY / HOTELS</span><h2>Hotel Master</h2><p>Create hotels once, then maintain multiple room and meal-plan rates.</p></div><div className="toolbar-actions"><button className="premium-btn ghost" onClick={newHotel}>+ New Hotel</button><button className="premium-btn primary" onClick={saveHotel} disabled={saving}>{saving ? "Saving…" : "Save Hotel"}</button></div></div>
    <div className="hotel-master-layout">
      <aside className="hotel-list-card"><div className="list-head"><strong>Hotels by Destination</strong><span>{visibleHotels.length}/{hotels.length}</span></div><div style={{display:"flex",gap:8,flexWrap:"wrap",padding:"12px",borderBottom:"1px solid #e5e7eb"}}><select value={selectedDestination} onChange={e=>chooseHotelDestination(e.target.value)} style={{flex:1,minWidth:170,padding:"9px 10px",border:"1px solid #d8e0e8",borderRadius:8}}><option value="">Select Destination</option>{hotelDestinations.map(d=><option key={d} value={d}>{d}</option>)}</select><select value={selectedCity} onChange={e=>chooseHotelCity(e.target.value)} disabled={!selectedDestination} style={{flex:1,minWidth:150,padding:"9px 10px",border:"1px solid #d8e0e8",borderRadius:8}}><option value="ALL">All Cities</option>{hotelCities.map(c=><option key={c} value={c}>{c}</option>)}</select></div><div className="hotel-destination-tree" style={{padding:"10px 12px",borderBottom:"1px solid #e5e7eb"}}>{hotelDestinations.map(d=><div key={d} style={{marginBottom:8}}><button type="button" onClick={()=>chooseHotelDestination(d)} style={{width:"100%",textAlign:"left",border:0,background:selectedDestination===d?"#eef7f7":"transparent",padding:"8px 9px",borderRadius:7,fontWeight:800,cursor:"pointer"}}>📍 {d} <span style={{float:"right",fontWeight:700}}>{hotels.filter(h=>String(h.destination||"").trim()===d).length}</span></button>{selectedDestination===d && <div style={{padding:"5px 0 0 18px"}}><button type="button" onClick={()=>chooseHotelCity("ALL")} style={{display:"block",width:"100%",textAlign:"left",border:0,background:selectedCity==="ALL"?"#f4f8fb":"transparent",padding:"6px 8px",borderRadius:6,cursor:"pointer",fontWeight:selectedCity==="ALL"?800:500}}>All Cities</button>{hotelCities.map(c=><button key={c} type="button" onClick={()=>chooseHotelCity(c)} style={{display:"block",width:"100%",textAlign:"left",border:0,background:selectedCity===c?"#f4f8fb":"transparent",padding:"6px 8px",borderRadius:6,cursor:"pointer",fontWeight:selectedCity===c?800:500}}>↳ {c} <span style={{float:"right"}}>{destinationHotels.filter(h=>String(h.city||"").trim()===c).length}</span></button>)}</div>}</div>)}</div><div className="hotel-list-columns"><span>Hotel / Destination</span><span>City</span><span>Action</span></div>{loading ? <p className="muted">Loading…</p> : !selectedDestination ? <div className="empty-box">Select a destination above.<br/>Example: <b>Kerala → All Cities</b>.</div> : visibleHotels.map(h => <div key={h.id} className={`hotel-list-item ${selectedHotelId===h.id?"selected":""}`} onClick={()=>openHotel(h)}><span className="hotel-avatar">🏨</span><span className="hotel-list-details"><strong>{h.name}</strong><small>{h.destination || "—"}</small><em>{h.state || "—"} · {h.category || "—"}</em></span><span className="hotel-list-city">{h.city || "—"}</span><button type="button" className="premium-btn ghost mini hotel-edit-btn" onClick={(e)=>{e.stopPropagation();openHotel(h);}}>Edit</button></div>)}{selectedDestination && !visibleHotels.length && <div className="empty-box">No hotels saved for <b>{selectedDestination}</b>{selectedCity!=="ALL"?` → ${selectedCity}`:""}.<br/>Click <b>New Hotel</b> to add one.</div>}</aside>
      <section className="hotel-editor-card"><div className="editor-title"><div><span className="eyebrow">HOTEL PROFILE</span><h3>{selectedHotelId ? "Edit Hotel" : "Add Hotel"}</h3></div>{selectedHotelId && <button className="danger-link" onClick={deleteHotel}>Delete</button>}</div>
        <div className="premium-form-grid"><label>Domestic / International<select value={hotelForm.destination_type} onChange={e=>setHotelForm({...hotelForm,destination_type:e.target.value})}><option>Domestic</option><option>International</option></select></label><label>Destination *<input value={hotelForm.destination||""} onChange={e=>setHotelForm({...hotelForm,destination:e.target.value})} placeholder="Example: Kashmir / Kerala / Bali"/></label><label>State / Region<input value={hotelForm.state||""} onChange={e=>setHotelForm({...hotelForm,state:e.target.value})}/></label><label>City *<input value={hotelForm.city} onChange={e=>setHotelForm({...hotelForm,city:e.target.value})}/></label><label>Hotel Name *<input value={hotelForm.name} onChange={e=>setHotelForm({...hotelForm,name:e.target.value})}/></label><label>Category<select value={hotelForm.category} onChange={e=>setHotelForm({...hotelForm,category:e.target.value})}><option>Budget</option><option>3 Star</option><option>4 Star</option><option>5 Star</option><option>Luxury</option></select></label><label>Status<select value={hotelForm.active?"Active":"Inactive"} onChange={e=>setHotelForm({...hotelForm,active:e.target.value==="Active"})}><option>Active</option><option>Inactive</option></select></label></div>
        <div className="rate-section-head"><div><span className="eyebrow">ROOM CATEGORY</span><h3>Room Categories</h3><p style={{margin:0,color:"#64748b",fontSize:12}}>Choose a category for every hotel rate.</p></div><div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"}}>{["Standard","Deluxe","Super Deluxe","Premium","Executive","Suite","Family Room","Villa"].map(c=><span key={c} style={{padding:"6px 9px",border:"1px solid #dbe5ef",borderRadius:8,background:"#f8fbff",fontSize:11,fontWeight:700}}>{c}</span>)}</div></div><div className="rate-section-head"><div><span className="eyebrow">ROOM RATES</span><h3>Rate Matrix</h3></div><button className="premium-btn ghost" onClick={addRate}>+ Add Rate</button></div>
        <div className="rate-matrix-scroll">
          <div className="rate-grid-header"><span>Room Category</span><span>Room Type</span><span>Meal</span><span>Purchase / Night</span><span>Extra Bed</span><span>Child + Bed</span><span>Child No Bed</span><span>Valid From</span><span>Valid To</span><span>Actions</span></div>
          {rates.map((r,i)=>{ const isEditing = editingRateId === r.id || String(r.id||"").startsWith("new-"); return <div className={`rate-grid-row ${isEditing ? "rate-row-editing" : ""}`} key={r.id||i}>{isEditing ? <><select value={r.room_category||"Standard"} onChange={e=>updateRate(i,"room_category",e.target.value)}><option>Standard</option><option>Deluxe</option><option>Super Deluxe</option><option>Premium</option><option>Executive</option><option>Suite</option><option>Family Room</option><option>Villa</option></select><select value={r.room_type||"Double"} onChange={e=>updateRate(i,"room_type",e.target.value)}><option>Single</option><option>Double</option><option>Twin</option><option>Triple</option><option>Quad</option><option>Family</option></select><select value={r.meal_plan||"CP"} onChange={e=>updateRate(i,"meal_plan",e.target.value)}><option>EP</option><option>CP</option><option>MAP</option><option>AP</option></select><input type="number" value={r.room_rate_per_night??""} onChange={e=>updateRate(i,"room_rate_per_night",e.target.value)}/><input type="number" value={r.extra_bed_rate??""} onChange={e=>updateRate(i,"extra_bed_rate",e.target.value)}/><input type="number" value={r.child_with_bed_rate??""} onChange={e=>updateRate(i,"child_with_bed_rate",e.target.value)}/><input type="number" value={r.child_without_bed_rate??""} onChange={e=>updateRate(i,"child_without_bed_rate",e.target.value)}/><input type="date" value={r.valid_from||""} onChange={e=>updateRate(i,"valid_from",e.target.value)}/><input type="date" value={r.valid_to||""} onChange={e=>updateRate(i,"valid_to",e.target.value)}/><span className="rate-actions"><button className="premium-btn primary mini" onClick={()=>saveSingleRate(i)}>Save</button><button className="premium-btn ghost mini" onClick={()=>cancelRateEdit(i)}>Cancel</button></span></> : <><span>{r.room_category||"Standard"}</span><span>{r.room_type||"Double"}</span><span>{r.meal_plan||"CP"}</span><span className="rate-money">₹{Number(r.room_rate_per_night||0).toLocaleString("en-IN")}</span><span className="rate-money">₹{Number(r.extra_bed_rate||0).toLocaleString("en-IN")}</span><span className="rate-money">₹{Number(r.child_with_bed_rate||0).toLocaleString("en-IN")}</span><span className="rate-money">₹{Number(r.child_without_bed_rate||0).toLocaleString("en-IN")}</span><span>{r.valid_from||"—"}</span><span>{r.valid_to||"—"}</span><span className="rate-actions"><button className="premium-btn ghost mini" onClick={()=>setEditingRateId(r.id)}>Edit</button><button className="icon-danger" onClick={()=>removeRate(i)}>×</button></span></>}</div>})}
          {!rates.length && <div className="empty-box">No rates added yet. Add Room Category + Room Type with EP, CP, MAP or AP.</div>}
        </div>
      </section>
    </div>
  </div>;
}


/* =========================================================
   VEHICLE MASTER
========================================================= */
function DetailedItineraryManager() {
  const storageKey = "sneh_travel_detailed_itineraries";
  const empty = { destination: "", itineraryName: "", days: [{ day: 1, title: "", city: "", details: "", nightStay: "" }] };
  const [form, setForm] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || "null") || empty; } catch { return empty; }
  });
  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey + "_list") || "[]"); } catch { return []; }
  });
  const [destinationFilter, setDestinationFilter] = useState("all");

  useEffect(() => {
    let alive = true;
    async function loadDatabaseItineraries() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase.from("itineraries").select("*").order("destination").order("days").order("itinerary_name");
        if (error) { console.warn("Detailed itinerary database load:", error.message); return; }
        if (!alive || !Array.isArray(data)) return;
        const decode = value => {
          const raw = String(value || ""); const marker = "||DAYWISE::"; const pos = raw.indexOf(marker);
          if (pos < 0) return [];
          try { return JSON.parse(raw.slice(pos + marker.length)) || []; } catch { return []; }
        };
        const dbItems = data.map(row => ({
          id: row.id,
          destination: String(row.destination || "").trim(),
          itineraryName: row.itinerary_name || "",
          days: decode(row.night_stays).length ? decode(row.night_stays).map((d,i) => ({
            day: Number(d.day) || i + 1,
            title: d.title || "",
            city: d.city || "",
            details: d.details || "",
            nightStay: d.nightStay || ""
          })) : [{ day: 1, title: row.itinerary_name || "Itinerary", city: row.city_itinerary || "", details: "", nightStay: row.night_stays || "" }]
        })).filter(x => x.destination);
        const localItems = JSON.parse(localStorage.getItem(storageKey + "_list") || "[]");
        const merged = [...(Array.isArray(localItems) ? localItems : [])];
        dbItems.forEach(db => {
          const idx = merged.findIndex(x => String(x.destination || "").toLowerCase() === db.destination.toLowerCase() && String(x.itineraryName || "").toLowerCase() === String(db.itineraryName || "").toLowerCase());
          if (idx >= 0) merged[idx] = { ...merged[idx], ...db, days: db.days?.length ? db.days : merged[idx].days };
          else merged.push(db);
        });
        setSaved(merged);
        localStorage.setItem(storageKey + "_list", JSON.stringify(merged));
      } catch (e) { console.warn("Unable to load saved database itineraries:", e); }
    }
    loadDatabaseItineraries();
    return () => { alive = false; };
  }, []);

  const update = (index, field, value) => setForm(prev => ({...prev, days: prev.days.map((item,i)=>i===index?{...item,[field]:value}:item)}));
  const addDay = () => setForm(prev => ({...prev, days:[...prev.days,{day:prev.days.length+1,title:"",city:"",details:"",nightStay:""}]}));
  const removeDay = (index) => setForm(prev => ({...prev, days:prev.days.filter((_,i)=>i!==index).map((item,i)=>({...item,day:i+1}))}));
  const save = () => {
    const cleaned = {...form, destination:String(form.destination||"").trim(), itineraryName:String(form.itineraryName||"").trim(), days:(form.days||[]).map((d,i)=>({...d,day:Number(d.day)||i+1})).filter(d=>d.title||d.city||d.details||d.nightStay)};
    if (!cleaned.destination) { alert("Please select or enter a destination."); return; }
    if (!cleaned.days.length) { alert("Please add at least one itinerary day."); return; }
    const list = [...saved.filter(x => !(String(x.destination).toLowerCase()===cleaned.destination.toLowerCase() && String(x.itineraryName).toLowerCase()===cleaned.itineraryName.toLowerCase())), cleaned];
    setSaved(list); setForm(cleaned); localStorage.setItem(storageKey, JSON.stringify(cleaned)); localStorage.setItem(storageKey+"_list", JSON.stringify(list)); setDestinationFilter(cleaned.destination); alert("Detailed itinerary saved successfully.");
  };
  const editSaved = item => { setForm({...item, days:Array.isArray(item.days)&&item.days.length?item.days:empty.days}); setDestinationFilter(item.destination || "all"); window.scrollTo({top:0,behavior:"smooth"}); };
  const deleteSaved = item => { const list=saved.filter(x=>x!==item); setSaved(list); localStorage.setItem(storageKey+"_list",JSON.stringify(list)); };
  const destinations = Array.from(new Set(saved.map(x=>String(x.destination||"").trim()).filter(Boolean))).sort((a,b)=>a.localeCompare(b));
  const filteredSaved = destinationFilter === "all" ? saved : saved.filter(x=>String(x.destination||"").trim().toLowerCase()===String(destinationFilter).trim().toLowerCase());
  const grouped = destinations.reduce((acc,d)=>{ acc[d]=filteredSaved.filter(x=>String(x.destination||"").trim().toLowerCase()===d.toLowerCase()); return acc; },{});

  return <div className="premium-inventory-page">
    <style>{`.detail-itinerary-day-card{border:1px solid #dfe7ef;border-radius:16px;background:#fff;padding:18px;margin-bottom:14px;box-shadow:0 4px 14px rgba(15,23,42,.04)}.detail-itinerary-day-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}.detail-itinerary-day-badge{min-width:76px;text-align:center;padding:8px 11px;border-radius:10px;background:#eff6ff;color:#075985;font-size:12px;font-weight:900}.detail-itinerary-fields{display:grid;grid-template-columns:90px minmax(180px,1.15fr) minmax(220px,1.5fr) minmax(180px,1fr);gap:12px;align-items:end}.detail-itinerary-fields label{min-width:0}.detail-itinerary-fields input{width:100%;box-sizing:border-box}.detail-itinerary-details{margin-top:12px}.detail-itinerary-details textarea{width:100%;min-height:120px;box-sizing:border-box}.detail-itinerary-saved-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px}.detail-itinerary-filter{min-width:220px;border:1px solid #dbe3ec;border-radius:10px;padding:10px 12px;background:#fff;font:inherit}.detail-itinerary-destination-buttons{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.detail-itinerary-destination-buttons button{border:1px solid #cbd8e5;background:#fff;color:#123b5d;border-radius:10px;padding:9px 13px;font-size:12px;font-weight:800;cursor:pointer}.detail-itinerary-destination-buttons button.active{background:#075985;color:#fff;border-color:#075985}.detail-itinerary-destination{border:1px solid #dbe5ef;border-radius:16px;background:#f8fbff;margin-top:14px;overflow:hidden}.detail-itinerary-destination-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;background:#f1f7fc;border-bottom:1px solid #dbe5ef}.detail-itinerary-destination-head h3{margin:0;color:#123b5d}.detail-itinerary-list-row{display:grid;grid-template-columns:minmax(180px,1.3fr) 110px auto;gap:14px;align-items:center;padding:13px 16px;background:#fff;border-bottom:1px solid #edf2f7}.detail-itinerary-list-row:last-child{border-bottom:0}.detail-itinerary-list-row small{display:block;color:#64748b;margin-top:3px}.detail-itinerary-actions{display:flex;gap:7px;justify-content:flex-end}@media(max-width:900px){.detail-itinerary-fields{grid-template-columns:1fr 1fr}.detail-itinerary-fields .detail-day-field{grid-column:span 1}.detail-itinerary-list-row{grid-template-columns:1fr auto}}@media(max-width:620px){.detail-itinerary-destination-buttons{justify-content:flex-start}.detail-itinerary-fields{grid-template-columns:1fr}.detail-itinerary-list-row{grid-template-columns:1fr}.detail-itinerary-actions{justify-content:flex-start}.detail-itinerary-destination-head{align-items:flex-start;flex-direction:column}}`}</style>
    <div className="inventory-toolbar"><div><span className="eyebrow">TRAVEL INVENTORY / ITINERARY</span><h2>Detailed Day-wise Itinerary</h2><p>Create destination-wise itineraries with a clean Day, Route, and Night Stay structure.</p></div><div className="toolbar-actions"><button className="premium-btn ghost" onClick={()=>setForm({...empty,days:[{...empty.days[0]}]})}>New Itinerary</button><button className="premium-btn primary" onClick={save}>Save Itinerary</button></div></div>
    <div className="admin-card" style={{marginBottom:18}}><div className="premium-form-grid"><label>Destination<input value={form.destination} onChange={e=>setForm(prev=>({...prev,destination:e.target.value}))} placeholder="Kerala"/></label><label>Itinerary Name<input value={form.itineraryName} onChange={e=>setForm(prev=>({...prev,itineraryName:e.target.value}))} placeholder="Kerala 04 Night / 05 Days"/></label></div></div>
    <div className="admin-card"><div style={{marginBottom:14}}><span className="eyebrow">DAY-WISE PLAN</span><h3 style={{margin:"5px 0 4px"}}>Route & Night Stay Details</h3><p style={{margin:0,color:"#64748b",fontSize:12}}>Day number, day title, route/city and night stay are now arranged in separate, readable columns.</p></div>
      {(form.days||[]).map((item,index)=><div className="detail-itinerary-day-card" key={index}>
        <div className="detail-itinerary-day-head"><span className="detail-itinerary-day-badge">DAY {String(Number(item.day)||index+1).padStart(2,"0")}</span>{form.days.length>1&&<button className="premium-btn" type="button" onClick={()=>removeDay(index)}>Remove Day</button>}</div>
        <div className="detail-itinerary-fields">
          <label className="detail-day-field">Day<input type="number" min="1" value={item.day} onChange={e=>update(index,"day",e.target.value)}/></label>
          <label>Day Title<input value={item.title} onChange={e=>update(index,"title",e.target.value)} placeholder="Arrival / Sightseeing"/></label>
          <label>Route / City<input value={item.city} onChange={e=>update(index,"city",e.target.value)} placeholder="Cochin → Munnar"/></label>
          <label>Night Stay<input value={item.nightStay} onChange={e=>update(index,"nightStay",e.target.value)} placeholder="Munnar"/></label>
        </div>
        <div className="detail-itinerary-details"><label>Detailed Itinerary<textarea value={item.details} onChange={e=>update(index,"details",e.target.value)} placeholder="Write complete sightseeing, transfers, meals, check-in/check-out and activities for this day..."/></label></div>
      </div>)}
      <button className="premium-btn primary" type="button" onClick={addDay}>+ Add Day</button>
    </div>
    {!!saved.length && <div className="admin-card" style={{marginTop:18}}><div className="detail-itinerary-saved-toolbar"><div><span className="eyebrow">SAVED ITINERARIES</span><h3 style={{margin:"5px 0 0"}}>Destination-wise Detailed Itinerary</h3></div><div className="detail-itinerary-destination-buttons"><button type="button" className={destinationFilter === "all" ? "active" : ""} onClick={()=>setDestinationFilter("all")}>All Destinations</button>{destinations.map(d=><button type="button" key={d} className={String(destinationFilter).toLowerCase() === String(d).toLowerCase() ? "active" : ""} onClick={()=>setDestinationFilter(d)}>{d}</button>)}</div></div>
      {destinationFilter === "all" ? (
        Object.keys(grouped).length ? (
          Object.entries(grouped).map(([destination, items]) => (
            <div className="detail-itinerary-destination" key={destination}>
              <div className="detail-itinerary-destination-head">
                <h3>{destination}</h3>
                <span className="muted">Click the destination button to see its saved itineraries</span>
              </div>
              {items.map((item, i) => (
                <div className="detail-itinerary-list-row" key={i}>
                  <div>
                    <strong>{item.itineraryName || `${item.days?.length || 0} Day Itinerary`}</strong>
                    <small>{item.days?.length || 0} day(s) · {item.days?.filter(d => d.nightStay).length || 0} night-stay entries</small>
                  </div>
                  <span className="muted">{item.days?.length || 0} Days</span>
                  <div className="detail-itinerary-actions">
                    <button type="button" className="premium-btn" onClick={() => editSaved(item)}>Edit</button>
                    <button type="button" className="admin-delete" onClick={() => deleteSaved(item)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="empty-admin"><p>No detailed itineraries saved yet.</p></div>
        )
      ) : (
        filteredSaved.length ? (
          <div className="detail-itinerary-destination">
            <div className="detail-itinerary-destination-head">
              <h3>{destinationFilter}</h3>
              <span className="muted">{filteredSaved.length} saved itinerary{filteredSaved.length === 1 ? "" : "ies"}</span>
            </div>
            {filteredSaved.map((item, i) => (
              <div className="detail-itinerary-list-row" key={i}>
                <div>
                  <strong>{item.itineraryName || `${item.days?.length || 0} Day Itinerary`}</strong>
                  <small>{item.days?.length || 0} day(s) · {item.days?.filter(d => d.nightStay).length || 0} night-stay entries</small>
                </div>
                <span className="muted">{item.days?.length || 0} Days</span>
                <div className="detail-itinerary-actions">
                  <button type="button" className="premium-btn" onClick={() => editSaved(item)}>Edit</button>
                  <button type="button" className="admin-delete" onClick={() => deleteSaved(item)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-admin"><p>No detailed itineraries saved for {destinationFilter}.</p></div>
        )
      )}
    </div>}
  </div>;
}

function getSavedDetailedItineraryText(destination = "", itineraryName = "") {
  try {
    const list = JSON.parse(localStorage.getItem("sneh_travel_detailed_itineraries_list") || "[]");
    const targetD = String(destination||"").trim().toLowerCase(); const targetI=String(itineraryName||"").trim().toLowerCase();
    const match = list.find(x => targetI && String(x.itineraryName||"").trim().toLowerCase()===targetI) || list.find(x => targetD && String(x.destination||"").trim().toLowerCase()===targetD);
    if (!match) return "";
    return (match.days||[]).map((d,i)=>`Day ${String(Number(d.day)||i+1).padStart(2,"0")} — ${d.title||"Travel"}${d.city?`
City / Route: ${d.city}`:""}${d.details?`
${d.details}`:""}${d.nightStay?`
Night Stay: ${d.nightStay}`:""}`).join("\n\n");
  } catch { return ""; }
}

function VehicleMaster({ matrixOnly = false }) {
  const emptyVehicle = { id:null, vehicle:"", vehicle_type:"Cab", seating_capacity:4, active:true };
  const emptyRatePlan = {
    id:null, itinerary_key:"", itinerary_name:"", destination:"", nights:4, days:5,
    pickup_point:"Cochin", drop_point:"Cochin",
    state:"",
    city_itinerary:"Cochin → Munnar (2N) → Thekkady (1N) → Alleppey (1N) → Cochin",
    night_stays:"Munnar: 2 | Thekkady: 1 | Alleppey: 1",
    inclusions:"",
    exclusions:"",
    margin_type:"percentage",
    margin_value:8,
    sedan_rate:"", ertiga_rate:"", innova_rate:"", tempo_rate:"",
    daywise:[
      {day:1,title:"",details:"",nightStay:"Munnar"},
      {day:2,title:"",details:"",nightStay:"Munnar"},
      {day:3,title:"",details:"",nightStay:"Thekkady"},
      {day:4,title:"",details:"",nightStay:"Alleppey"},
      {day:5,title:"",details:"",nightStay:""}
    ]
  };
  const [vehicles,setVehicles]=useState([]); const [form,setForm]=useState(emptyVehicle);
  const [ratePlans,setRatePlans]=useState([]); const [rateForm,setRateForm]=useState(emptyRatePlan); const [rateDestinationFilter,setRateDestinationFilter]=useState("all");
  const [loading,setLoading]=useState(false); const [rateLoading,setRateLoading]=useState(false);
  const [savedDestinations,setSavedDestinations]=useState([]); const [hotels,setHotels]=useState([]); const [saving,setSaving]=useState(false); const [savingRate,setSavingRate]=useState(false);
  const presets=[{vehicle:"Sedan cab",capacity:4},{vehicle:"Ertiga cab",capacity:6},{vehicle:"Innova Crysta",capacity:6},{vehicle:"Tempo Traveller",capacity:12}];
  const itineraryPresets=[
    {itinerary_name:"Kerala 04 Night / 05 Days",destination:"Kerala",nights:4,days:5,pickup_point:"Cochin",drop_point:"Cochin"},
    {itinerary_name:"Kerala 05 Night / 06 Days",destination:"Kerala",nights:5,days:6,pickup_point:"Cochin",drop_point:"Cochin"}
  ];
  const blankDay=n=>({day:n,title:"",city:"",details:"",nightStay:"",hotelId:"",hotelName:"",hotelCategory:"",hotelRoomType:""});
  const normalizeCity=value=>String(value||"").trim().toLowerCase().split(",")[0].replace(/\([^)]*\)/g,"").replace(/\s[-–—].*$/,"").trim();
  const cityMatch=(a,b)=>normalizeCity(a)===normalizeCity(b);

  function decodePlanDays(value){
    const raw=String(value||""); const marker="||DAYWISE::"; const pos=raw.indexOf(marker);
    if(pos<0) return [];
    try { return JSON.parse(raw.slice(pos+marker.length)) || []; } catch(e){ return []; }
  }
  function cleanNightStays(value){
    const raw=String(value||""); return raw.split("||DAYWISE::")[0].trim();
  }
  function encodedNightStays(stays,days){
    const clean=String(stays||"").split("||DAYWISE::")[0].trim();
    return `${clean}${clean?"":""}||DAYWISE::${JSON.stringify(days||[])}`;
  }
  function resizeDays(count,current){
    const n=Math.max(1,Number(count)||1); const old=current||[];
    return Array.from({length:n},(_,i)=>({...blankDay(i+1),...(old[i]||{}),day:i+1}));
  }
  function updateDay(index,field,value){setRateForm(prev=>({...prev,daywise:prev.daywise.map((d,i)=>i===index?{...d,[field]:value}:d)}));}
  function addDay(){setRateForm(prev=>({...prev,days:Number(prev.days||0)+1,daywise:[...(prev.daywise||[]),blankDay((prev.daywise||[]).length+1)]}));}
  function removeDay(index){setRateForm(prev=>{if((prev.daywise||[]).length<=1)return prev;const days=prev.daywise.filter((_,i)=>i!==index).map((d,i)=>({...d,day:i+1}));return {...prev,days:days.length,daywise:days};});}

  async function loadVehicles(){if(!supabase)return;setLoading(true);try{const {data,error}=await supabase.from("vehicles").select("*").order("vehicle");if(error)throw error;setVehicles(data||[]);}catch(e){alert(`Unable to load vehicles: ${e.message||e}`)}finally{setLoading(false)}}
  async function loadSavedDestinations(){if(!supabase)return;try{const {data,error}=await supabase.from("destinations").select("*").eq("active",true).order("name");if(error)throw error;setSavedDestinations(data||[]);}catch(e){console.error(e);setSavedDestinations([])}}
  async function loadRatePlans(){if(!supabase)return;setRateLoading(true);try{
    const [vr,its]=await Promise.all([
      supabase.from("vehicle_rates").select("*").order("destination").order("days").order("itinerary_name").order("vehicle_id"),
      supabase.from("itineraries").select("*").order("destination").order("days").order("itinerary_name")
    ]);
    if(vr.error)throw vr.error; if(its.error)throw its.error;
    const grouped={};
    (its.data||[]).forEach(row=>{const key=row.itinerary_key||[row.itinerary_name,row.destination,row.nights,row.days,row.pickup_point,row.drop_point].join("|");grouped[key]={id:key,itinerary_key:key,itinerary_id:row.id,itinerary_name:row.itinerary_name||"",destination:row.destination||"",state:row.state||"",nights:Number(row.nights)||0,days:Number(row.days)||0,pickup_point:row.pickup_point||"",drop_point:row.drop_point||"",city_itinerary:row.city_itinerary||"",night_stays:cleanNightStays(row.night_stays||""),daywise:decodePlanDays(row.night_stays),inclusions:row.inclusions||"",exclusions:row.exclusions||"",margin_type:row.margin_type||"percentage",margin_value:Number(row.margin_value)||8,rates:{}};});
    (vr.data||[]).forEach(row=>{const key=row.itinerary_key||[row.itinerary_name,row.destination,row.nights,row.days,row.pickup_point,row.drop_point].join("|");if(!grouped[key])grouped[key]={id:key,itinerary_key:key,itinerary_id:null,itinerary_name:row.itinerary_name||"",destination:row.destination||"",state:row.state||"",nights:Number(row.nights)||0,days:Number(row.days)||0,pickup_point:row.pickup_point||"",drop_point:row.drop_point||"",city_itinerary:row.city_itinerary||"",night_stays:"",daywise:[],inclusions:"",exclusions:"",margin_type:row.margin_type||"percentage",margin_value:Number(row.margin_value)||8,rates:{}};grouped[key].rates[row.vehicle_id]={id:row.id,rate:row.rate,purchase_rate:row.purchase_rate,selling_rate:row.selling_rate,margin_type:row.margin_type,margin_value:row.margin_value,margin_amount:row.margin_amount};if(!grouped[key].city_itinerary&&row.city_itinerary)grouped[key].city_itinerary=row.city_itinerary;});
    setRatePlans(Object.values(grouped));
  }catch(e){alert(`Unable to load vehicle rates: ${e.message||e}`)}finally{setRateLoading(false)}}
  useEffect(()=>{loadVehicles();loadRatePlans();loadSavedDestinations()},[]);

  function newVehicle(){setForm({...emptyVehicle})}
  function usePreset(p){setForm(prev=>({...prev,vehicle:p.vehicle,vehicle_type:p.vehicle.toLowerCase().includes("tempo")?"Tempo Traveller":"Cab",seating_capacity:p.capacity}))}
  function newRatePlan(){setRateForm({...emptyRatePlan,daywise:resizeDays(5,emptyRatePlan.daywise)})}
  function useItineraryPreset(p){const destinationRow=savedDestinations.find(d=>String(d.name||d.destination||"").toLowerCase()===String(p.destination||"").toLowerCase());if(!destinationRow){alert(`Please save ${p.destination} in Destination Master first.`);return;}setRateForm(prev=>({...prev,...p,state:destinationRow.state||prev.state||"",margin_type:destinationRow.margin_type||prev.margin_type||"percentage",margin_value:destinationRow.margin_value ?? prev.margin_value ?? 8,daywise:resizeDays(p.days,prev.daywise)}))}

  async function saveVehicle(){if(!String(form.vehicle||"").trim()){alert("Please enter vehicle name.");return}setSaving(true);try{const payload={vehicle:String(form.vehicle).trim(),vehicle_type:String(form.vehicle_type||"Cab").trim(),seating_capacity:Number(form.seating_capacity)||4,active:form.active!==false};let saved;if(form.id){const {data,error}=await supabase.from("vehicles").update(payload).eq("id",form.id).select().single();if(error)throw error;saved=data}else{const {data,error}=await supabase.from("vehicles").insert(payload).select().single();if(error)throw error;saved=data}setForm({...emptyVehicle,...saved});await loadVehicles();alert("Vehicle saved successfully.")}catch(e){alert(`Unable to save vehicle: ${e.message||e}`)}finally{setSaving(false)}}
  async function deleteVehicle(v){if(!v?.id||!window.confirm(`Delete ${v.vehicle}? This cannot be undone.`))return;try{const {error}=await supabase.from("vehicles").delete().eq("id",v.id);if(error)throw error;if(form.id===v.id)newVehicle();await loadVehicles();await loadRatePlans()}catch(e){alert(`Unable to delete vehicle: ${e.message||e}`)}}

  async function saveRatePlan(){
    if(!String(rateForm.itinerary_name||"").trim()){alert("Please enter an itinerary name.");return}
    if(!String(rateForm.destination||"").trim()){alert("Please select destination.");return}
    if(!rateForm.pickup_point||!rateForm.drop_point){alert("Please enter pickup and drop points.");return}
    const activeVehicles=vehicles.filter(v=>v.active!==false); if(!activeVehicles.length){alert("Please add vehicles first.");return}
    const daywise=resizeDays(Number(rateForm.days)||1,rateForm.daywise).map((d,i)=>({...d,day:i+1}));
    setSavingRate(true);try{
      const itineraryKey=rateForm.itinerary_key||`${String(rateForm.itinerary_name).trim()}|${String(rateForm.destination).trim()}|${Number(rateForm.nights)||0}|${Number(rateForm.days)||0}|${String(rateForm.pickup_point).trim()}|${String(rateForm.drop_point).trim()}`;
      const payload={itinerary_key:itineraryKey,itinerary_name:String(rateForm.itinerary_name).trim(),destination:String(rateForm.destination).trim(),destination_type:"Domestic",state:String(rateForm.state||"").trim(),nights:Number(rateForm.nights)||0,days:Number(rateForm.days)||0,pickup_point:String(rateForm.pickup_point).trim(),drop_point:String(rateForm.drop_point).trim(),city_itinerary:String(rateForm.city_itinerary||"").trim(),night_stays:encodedNightStays(rateForm.night_stays,daywise),inclusions:String(rateForm.inclusions||"").trim(),exclusions:String(rateForm.exclusions||"").trim(),active:true};
      const {data:existing,error:findErr}=await supabase.from("itineraries").select("id").eq("itinerary_key",itineraryKey).limit(1);if(findErr)throw findErr;
      let itineraryId=existing?.[0]?.id||null;
      if(itineraryId){const {error}=await supabase.from("itineraries").update(payload).eq("id",itineraryId);if(error)throw error}else{const {data,error}=await supabase.from("itineraries").insert(payload).select("id").single();if(error)throw error;itineraryId=data.id}
      await supabase.from("vehicle_rates").delete().eq("itinerary_key",itineraryKey);
      const map=[{keys:["sedan"],value:rateForm.sedan_rate},{keys:["ertiga"],value:rateForm.ertiga_rate},{keys:["innova"],value:rateForm.innova_rate},{keys:["tempo"],value:rateForm.tempo_rate}];
      const rows=activeVehicles.map(v=>{const name=String(v.vehicle||"").toLowerCase();const match=map.find(x=>x.keys.some(k=>name.includes(k)));const purchase=match&&match.value!==""?Number(match.value)||0:0; const margin=Number(rateForm.margin_value)||8; const selling=rateForm.margin_type==="fixed"?purchase+margin:purchase+(purchase*margin/100); return{vehicle_id:v.id,itinerary_key:itineraryKey,itinerary_name:String(rateForm.itinerary_name).trim(),destination:String(rateForm.destination).trim(),nights:Number(rateForm.nights)||0,days:Number(rateForm.days)||0,pickup_point:String(rateForm.pickup_point).trim(),drop_point:String(rateForm.drop_point).trim(),city_itinerary:String(rateForm.city_itinerary||"").trim(),night_stays:String(rateForm.night_stays||"").trim(),rate:purchase,purchase_rate:purchase,selling_rate:Math.round(selling*100)/100,margin_type:rateForm.margin_type||"percentage",margin_value:margin,margin_amount:Math.round((selling-purchase)*100)/100,active:true}});
      const {error:rateErr}=await supabase.from("vehicle_rates").insert(rows);if(rateErr)throw rateErr;
      setRateForm({...emptyRatePlan,daywise:resizeDays(5,emptyRatePlan.daywise)});await loadRatePlans();alert("Vehicle itinerary, rates and detailed day-wise itinerary saved successfully.");
    }catch(e){alert(`Unable to save vehicle rates: ${e.message||e}`)}finally{setSavingRate(false)}
  }
  function editRatePlan(plan){const findRate=keys=>{const v=vehicles.find(x=>keys.some(k=>String(x.vehicle||"").toLowerCase().includes(k)));return v?plan.rates[v.id]?.rate??"":""};setRateForm({...emptyRatePlan,id:plan.id,itinerary_key:plan.itinerary_key,itinerary_name:plan.itinerary_name,destination:plan.destination,state:plan.state||"",nights:plan.nights,days:plan.days,pickup_point:plan.pickup_point,drop_point:plan.drop_point,city_itinerary:plan.city_itinerary||"",night_stays:plan.night_stays||"",inclusions:plan.inclusions||"",exclusions:plan.exclusions||"",margin_type:plan.margin_type||"percentage",margin_value:plan.margin_value??8,sedan_rate:findRate(["sedan"]),ertiga_rate:findRate(["ertiga"]),innova_rate:findRate(["innova"]),tempo_rate:findRate(["tempo"]),daywise:resizeDays(plan.days||1,plan.daywise)});window.scrollTo({top:0,behavior:"smooth"})}
  async function deleteRatePlan(plan){if(!window.confirm(`Delete rates and itinerary ${plan.itinerary_name}?`))return;try{const {error}=await supabase.from("vehicle_rates").delete().eq("itinerary_key",plan.itinerary_key);if(error)throw error;await supabase.from("itineraries").delete().eq("itinerary_key",plan.itinerary_key);if(rateForm.itinerary_key===plan.itinerary_key)newRatePlan();await loadRatePlans()}catch(e){alert(`Unable to delete vehicle itinerary: ${e.message||e}`)}}
  const vehicleFor=keys=>vehicles.find(v=>keys.some(k=>String(v.vehicle||"").toLowerCase().includes(k)));
  const rateFor=(plan,keys)=>{const v=vehicleFor(keys);return v?plan.rates[v.id]?.rate:null};

  if (matrixOnly) {
    return <div className="premium-inventory-page">
      <div className="inventory-toolbar"><div><span className="eyebrow">TRAVEL INVENTORY / VEHICLE ITINERARY</span><h2>Itinerary Rate Matrix</h2><p>Destination-wise saved vehicle rates. Selling and Margin columns are removed; only the purchase rate is shown.</p></div><div className="toolbar-actions"><button className="premium-btn primary" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"});}}>Manage Itineraries</button></div></div>
      <section className="hotel-editor-card"><div className="rate-section-head"><div><span className="eyebrow">DESTINATION-WISE VEHICLE RATES</span><h3>Saved Itinerary Rate Matrix</h3><p style={{margin:"5px 0 0",color:"#64748b",fontSize:12}}>Click Kerala to see only Kerala saved itineraries. Click Kashmir to see only Kashmir itineraries.</p></div><strong>{(rateDestinationFilter === "all" ? ratePlans : ratePlans.filter(p=>String(p.destination||"").trim().toLowerCase()===String(rateDestinationFilter).trim().toLowerCase())).length} itinerary{((rateDestinationFilter === "all" ? ratePlans : ratePlans.filter(p=>String(p.destination||"").trim().toLowerCase()===String(rateDestinationFilter).trim().toLowerCase())).length===1?"":"ies")}</strong></div>
        <div className="detail-itinerary-destination-buttons" style={{justifyContent:"flex-start",margin:"14px 0 16px"}}><button type="button" className={rateDestinationFilter === "all" ? "active" : ""} onClick={()=>setRateDestinationFilter("all")}>All Destinations</button>{Array.from(new Set(ratePlans.map(p=>String(p.destination||"").trim()).filter(Boolean))).sort((a,b)=>a.localeCompare(b)).map(d=><button type="button" key={d} className={String(rateDestinationFilter).toLowerCase()===String(d).toLowerCase()?"active":""} onClick={()=>setRateDestinationFilter(d)}>{d}</button>)}</div>
        <div className="admin-table-wrapper"><table className="admin-table" style={{minWidth:1050}}><thead><tr><th style={{width:220}}>Destination / Itinerary</th><th style={{minWidth:300}}>Route</th><th style={{width:90,textAlign:"center"}}>Days</th><th style={{width:90,textAlign:"center"}}>Nights</th><th style={{minWidth:260}}>Purchase Rate</th><th style={{width:150}}>Actions</th></tr></thead><tbody>{rateLoading?<tr><td colSpan="6">Loading…</td></tr>:!ratePlans.length?<tr><td colSpan="6">No itinerary vehicle rates saved yet.</td></tr>:(rateDestinationFilter === "all" ? ratePlans : ratePlans.filter(p=>String(p.destination||"").trim().toLowerCase()===String(rateDestinationFilter).trim().toLowerCase())).length ? (rateDestinationFilter === "all" ? ratePlans : ratePlans.filter(p=>String(p.destination||"").trim().toLowerCase()===String(rateDestinationFilter).trim().toLowerCase())).map(plan=><tr key={plan.itinerary_key}><td><strong>{plan.destination||"—"}</strong><small style={{display:"block",marginTop:4,color:"#64748b"}}>{plan.itinerary_name||"—"}</small></td><td style={{lineHeight:1.5,whiteSpace:"normal"}}>{plan.city_itinerary || `${plan.pickup_point||"—"} → ${plan.drop_point||"—"}`}</td><td style={{textAlign:"center",fontWeight:800}}>{plan.days}</td><td style={{textAlign:"center",fontWeight:800}}>{plan.nights}</td><td><div style={{fontSize:12,lineHeight:1.8}}>{["sedan","ertiga","innova","tempo"].map(k=>{const v=vehicleFor([k]);const r=v?plan.rates[v.id]:null;const purchase=Number(r?.purchase_rate ?? r?.rate ?? 0);return <div key={k}><strong>{k.charAt(0).toUpperCase()+k.slice(1)}</strong> — ₹{purchase.toLocaleString("en-IN")}</div>})}</div></td><td><button className="premium-btn ghost mini" onClick={()=>editRatePlan(plan)}>Edit</button> <button className="icon-danger" onClick={()=>deleteRatePlan(plan)}>Delete</button></td></tr>) : <tr><td colSpan="6">No saved itinerary for {rateDestinationFilter}.</td></tr>}</tbody></table></div>
      </section>
    </div>;
  }

  return <div className="premium-inventory-page">
    <div className="inventory-toolbar"><div><span className="eyebrow">INVENTORY / TRANSPORT</span><h2>Vehicle Itinerary & Rates</h2><p>Vehicle rate matrix and detailed day-wise itinerary are saved together as one itinerary.</p></div><div className="toolbar-actions"><button className="premium-btn ghost" onClick={newVehicle}>+ New Vehicle</button><button className="premium-btn primary" onClick={saveVehicle} disabled={saving}>{saving?"Saving…":"Save Vehicle"}</button></div></div>
    <section className="admin-card" style={{marginBottom:18}}><div className="admin-card-head"><div><span>STANDARD VEHICLES</span><h3>Quick Vehicle Options</h3></div></div><div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:12}}>{presets.map(p=><button key={p.vehicle} type="button" className="admin-quick-action" onClick={()=>usePreset(p)} style={{margin:0,textAlign:"left"}}><span>🚗</span><div><strong>{p.vehicle}</strong><small>{String(p.capacity).padStart(2,"0")} Pax</small></div><b>+</b></button>)}</div></section>
    <div className="hotel-editor-card" style={{marginBottom:18}}><div className="editor-title"><div><span className="eyebrow">VEHICLE PROFILE</span><h3>{form.id?"Edit Vehicle":"Add Vehicle"}</h3></div></div><div className="premium-form-grid"><label>Vehicle Name *<input value={form.vehicle||""} onChange={e=>setForm({...form,vehicle:e.target.value})} placeholder="Sedan cab"/></label><label>Vehicle Type<input value={form.vehicle_type||""} onChange={e=>setForm({...form,vehicle_type:e.target.value})}/></label><label>Passenger Capacity *<input type="number" min="1" value={form.seating_capacity??""} onChange={e=>setForm({...form,seating_capacity:e.target.value})}/></label><label>Status<select value={form.active?"Active":"Inactive"} onChange={e=>setForm({...form,active:e.target.value==="Active"})}><option>Active</option><option>Inactive</option></select></label></div></div>
    <section className="hotel-editor-card" style={{marginBottom:18}}><div className="rate-section-head"><div><span className="eyebrow">ONE SAVED ITINERARY</span><h3>{rateForm.id?"Edit Itinerary, Rates & Detailed Itinerary":"Create Itinerary, Rates & Detailed Itinerary"}</h3></div><button className="premium-btn ghost mini" onClick={newRatePlan}>+ New Rate Plan</button></div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16}}>{itineraryPresets.map(p=><button key={p.itinerary_name} type="button" className="admin-quick-action" onClick={()=>useItineraryPreset(p)} style={{margin:0,textAlign:"left",minWidth:260}}><span>📍</span><div><strong>{p.itinerary_name}</strong><small>{p.pickup_point} → {p.drop_point}</small></div><b>+</b></button>)}</div>
      <div className="premium-form-grid">
        <label>Destination *<select value={rateForm.destination||""} onChange={e=>setRateForm({...rateForm,destination:e.target.value})}><option value="">Select saved destination</option>{savedDestinations.filter(d=>d.active!==false).map(d=>{const n=d.name||d.destination||"";return <option key={d.id||n} value={n}>{n}</option>})}</select></label>
        <label>State / Region<input value={rateForm.state||""} onChange={e=>setRateForm({...rateForm,state:e.target.value})} placeholder="Jammu & Kashmir"/></label>
        <label>Itinerary Name *<input value={rateForm.itinerary_name||""} onChange={e=>setRateForm({...rateForm,itinerary_name:e.target.value})} placeholder="Kerala 04 Night / 05 Days"/></label>
        <label>Nights<input type="number" min="0" value={rateForm.nights??""} onChange={e=>setRateForm({...rateForm,nights:e.target.value,daywise:resizeDays(Number(rateForm.days)||1,rateForm.daywise)})}/></label>
        <label>Days<input type="number" min="1" value={rateForm.days??""} onChange={e=>setRateForm(prev=>({...prev,days:e.target.value,daywise:resizeDays(Number(e.target.value)||1,prev.daywise)}))}/></label>
        <label>Pickup Point<input value={rateForm.pickup_point||""} onChange={e=>setRateForm({...rateForm,pickup_point:e.target.value})}/></label>
        <label>Drop Point<input value={rateForm.drop_point||""} onChange={e=>setRateForm({...rateForm,drop_point:e.target.value})}/></label>
        <label style={{gridColumn:"1 / -1"}}>City / Route Itinerary *<input value={rateForm.city_itinerary||""} onChange={e=>setRateForm({...rateForm,city_itinerary:e.target.value})} placeholder="Cochin → Munnar (2N) → Thekkady (1N) → Alleppey (1N) → Cochin"/></label>
        <label style={{gridColumn:"1 / -1"}}>Night Stay (City / Nights) *<input value={rateForm.night_stays||""} onChange={e=>setRateForm({...rateForm,night_stays:e.target.value})} placeholder="Munnar: 2 | Thekkady: 1 | Alleppey: 1"/><small style={{display:"block",marginTop:5,color:"#64748b"}}>These cities automatically become hotel-selection cities in Create Quotation.</small></label>
      </div>
      <div className="rate-section-head" style={{marginTop:22}}><div><span className="eyebrow">MERGED WITH THIS VEHICLE ITINERARY</span><h3>Detailed Day-wise Itinerary</h3><p style={{margin:0,color:"#64748b"}}>Every day below is saved with this same Night / Day Rate Matrix.</p></div><button type="button" className="premium-btn primary mini" onClick={addDay}>+ Add Day</button></div>
      <div className="admin-card" style={{marginTop:12,padding:"6px 18px"}}>{(rateForm.daywise||[]).map((d,i)=><div key={i} style={{borderBottom:i<rateForm.daywise.length-1?"1px solid #e2e8f0":"none",padding:"20px 0 22px"}}><div style={{display:"grid",gridTemplateColumns:"150px minmax(0,1fr) 220px",gap:14,alignItems:"end"}}><label style={{margin:0}}>Day Number<input value={d.day} readOnly style={{background:"#f8fafc",fontWeight:800,textAlign:"center"}}/></label><label style={{margin:0}}>Day Title<input value={d.title} onChange={e=>updateDay(i,"title",e.target.value)} placeholder="Munnar Sightseeing"/></label><label style={{margin:0}}>Night Stay<input value={d.nightStay} onChange={e=>updateDay(i,"nightStay",e.target.value)} placeholder="Munnar"/></label></div>{d.nightStay ? <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:14,marginTop:14}}><label style={{margin:0}}>Night Stay Hotel<select value={d.hotelId||""} onChange={e=>{const h=hotels.find(x=>String(x.id)===String(e.target.value));setRateForm(prev=>({...prev,daywise:prev.daywise.map((day,idx)=>idx===i?{...day,hotelId:h?.id||"",hotelName:h?.name||"",hotelCategory:h?.category||"",hotelRoomType:h?.room_type||""}:day)}));}}><option value="">Select hotel</option>{hotels.filter(h=>cityMatch(h.city,d.nightStay)).map(h=><option key={h.id} value={h.id}>{h.name} — {h.category||""}</option>)}</select></label><label style={{margin:0}}>Hotel Category<input value={d.hotelCategory||""} readOnly placeholder="Auto from hotel"/></label><label style={{margin:0}}>Room Type<input value={d.hotelRoomType||""} readOnly placeholder="Auto from hotel"/></label></div> : null}<label style={{display:"block",marginTop:14,fontWeight:800,fontSize:12,color:"#475569"}}>Detailed Itinerary<textarea value={d.details} onChange={e=>updateDay(i,"details",e.target.value)} placeholder="Write sightseeing, transfers, meals, activities and other day-wise details..." style={{display:"block",width:"100%",minHeight:135,marginTop:8,border:"1px solid #dce3ea",borderRadius:10,padding:12,boxSizing:"border-box",resize:"vertical",lineHeight:1.55}}/></label><div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}><button type="button" className="premium-btn ghost mini" onClick={()=>removeDay(i)} disabled={rateForm.daywise.length<=1}>Remove Day</button></div></div>)}</div>
      <div className="rate-section-head" style={{marginTop:22}}><div><span className="eyebrow">PRICING CONTROL</span><h3>Purchase / Selling / Margin</h3><p style={{margin:0,color:"#64748b"}}>Customer ko purchase price nahi dikhega. Public side par only final payable amount use hoga.</p></div></div><div className="premium-form-grid"><label>Margin Type<select value={rateForm.margin_type||"percentage"} onChange={e=>setRateForm({...rateForm,margin_type:e.target.value})}><option value="percentage">Percentage (%)</option><option value="fixed">Fixed Amount (₹)</option></select></label><label>Margin Value<input type="number" min="0" value={rateForm.margin_value??8} onChange={e=>setRateForm({...rateForm,margin_value:e.target.value})}/></label></div><div className="premium-form-grid" style={{marginTop:12}}><label>Purchase / Cost — Sedan (₹)<input type="number" min="0" value={rateForm.sedan_rate??""} onChange={e=>setRateForm({...rateForm,sedan_rate:e.target.value})}/></label><label>Purchase / Cost — Ertiga (₹)<input type="number" min="0" value={rateForm.ertiga_rate??""} onChange={e=>setRateForm({...rateForm,ertiga_rate:e.target.value})}/></label><label>Purchase / Cost — Innova (₹)<input type="number" min="0" value={rateForm.innova_rate??""} onChange={e=>setRateForm({...rateForm,innova_rate:e.target.value})}/></label><label>Purchase / Cost — Tempo (₹)<input type="number" min="0" value={rateForm.tempo_rate??""} onChange={e=>setRateForm({...rateForm,tempo_rate:e.target.value})}/></label></div><div className="premium-form-grid" style={{marginTop:12}}><label style={{gridColumn:"1 / -1"}}>Inclusions<textarea rows="6" value={rateForm.inclusions||""} onChange={e=>setRateForm({...rateForm,inclusions:e.target.value})} placeholder={"Accommodation\nPrivate vehicle\nAirport pickup/drop\nSightseeing as mentioned"}/></label><label style={{gridColumn:"1 / -1"}}>Exclusions<textarea rows="6" value={rateForm.exclusions||""} onChange={e=>setRateForm({...rateForm,exclusions:e.target.value})} placeholder={"Airfare\nPersonal expenses\nEntry tickets\nAnything not mentioned"}/></label></div>
      <div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:18}}><button className="premium-btn ghost" onClick={newRatePlan}>Clear</button><button className="premium-btn primary" onClick={saveRatePlan} disabled={savingRate}>{savingRate?"Saving…":"Save Itinerary + Rates + Detailed Itinerary"}</button></div>
    </section>
    <section className="hotel-editor-card" style={{marginBottom:18}}><div className="rate-section-head"><div><span className="eyebrow">SAVED VEHICLE ITINERARIES</span><h3>Itinerary Rate Matrix</h3></div><strong>{ratePlans.length} itinerary{ratePlans.length===1?"":"ies"}</strong></div><div className="admin-table-wrapper"><table className="admin-table" style={{minWidth:1050}}><thead><tr><th style={{width:220}}>Destination / Itinerary</th><th style={{minWidth:300}}>Route</th><th style={{width:90,textAlign:"center"}}>Days</th><th style={{width:90,textAlign:"center"}}>Nights</th><th style={{minWidth:260}}>Purchase Rate</th><th style={{width:150}}>Actions</th></tr></thead><tbody>{rateLoading?<tr><td colSpan="6">Loading…</td></tr>:!ratePlans.length?<tr><td colSpan="6">No itinerary vehicle rates saved yet.</td></tr>:ratePlans.map(plan=><tr key={plan.itinerary_key}><td><strong>{plan.destination||"—"}</strong><small style={{display:"block",marginTop:4,opacity:.7}}>{plan.itinerary_name||"—"}</small></td><td style={{lineHeight:1.5,whiteSpace:"normal"}}>{plan.city_itinerary || `${plan.pickup_point||"—"} → ${plan.drop_point||"—"}`}</td><td style={{textAlign:"center",fontWeight:800}}>{plan.days}</td><td style={{textAlign:"center",fontWeight:800}}>{plan.nights}</td><td><div style={{fontSize:12,lineHeight:1.8}}>{["sedan","ertiga","innova","tempo"].map(k=>{const v=vehicleFor([k]);const r=v?plan.rates[v.id]:null;const purchase=Number(r?.purchase_rate ?? r?.rate ?? 0);return <div key={k}><strong>{k.charAt(0).toUpperCase()+k.slice(1)}</strong> — ₹{purchase.toLocaleString("en-IN")}</div>})}</div></td><td><button className="premium-btn ghost mini" onClick={()=>editRatePlan(plan)}>Edit</button> <button className="icon-danger" onClick={()=>deleteRatePlan(plan)}>Delete</button></td></tr>)}</tbody></table></div></section>
    <section className="hotel-editor-card"><div className="rate-section-head"><div><span className="eyebrow">SAVED VEHICLES</span><h3>Vehicle List</h3></div><strong>{vehicles.length} vehicle{vehicles.length===1?"":"s"}</strong></div><div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Vehicle</th><th>Type</th><th>Pax</th><th>Status</th><th>Actions</th></tr></thead><tbody>{loading?<tr><td colSpan="5">Loading…</td></tr>:!vehicles.length?<tr><td colSpan="5">No vehicles saved yet.</td></tr>:vehicles.map(v=><tr key={v.id}><td><strong>{v.vehicle}</strong></td><td>{v.vehicle_type||"Cab"}</td><td>{v.seating_capacity||0} Pax</td><td>{v.active===false?"Inactive":"Active"}</td><td><button className="premium-btn ghost mini" onClick={()=>setForm({...emptyVehicle,...v})}>Edit</button> <button className="icon-danger" onClick={()=>deleteVehicle(v)}>Delete</button></td></tr>)}</tbody></table></div></section>
  </div>;
}


const SUPPLIER_WORKFLOW_STYLES = `.supplier-workflow-bar{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin:0 0 18px;padding:12px 14px;border:1px solid #dbe5ef;border-radius:12px;background:linear-gradient(135deg,#f8fbff,#fff);font-size:11px;font-weight:800;color:#17344e}.supplier-workflow-bar span{padding:6px 9px;border-radius:7px;background:#eef5fb}.supplier-workflow-bar b{color:#b99a5a;font-size:14px}@media(max-width:700px){.supplier-workflow-bar{gap:6px}.supplier-workflow-bar b{display:none}}`;

const SUPPLIER_PAYMENT_STYLES = `.supplier-payment-detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:14px 0}.supplier-payment-detail-grid>div{padding:10px 12px;border:1px solid #e5e7eb;border-radius:10px;background:#f8fafc}.supplier-payment-detail-grid span{display:block;font-size:11px;color:#64748b;margin-bottom:4px}.supplier-payment-detail-grid strong{font-size:13px;color:#0f172a}.supplier-clear{color:#15803d!important}.supplier-not-clear{color:#dc2626!important}@media(max-width:640px){.supplier-payment-detail-grid{grid-template-columns:1fr}}.supplier-summary-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 0 18px}.supplier-summary-grid>div{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px}.supplier-summary-grid span{display:block;color:#64748b;font-size:12px}.supplier-summary-grid strong{display:block;margin-top:5px;font-size:22px;color:#123b5d}.supplier-status{display:inline-block;padding:5px 9px;border-radius:999px;font-size:11px;font-weight:800;background:#fee2e2;color:#991b1b}.supplier-status.partially-paid{background:#fef3c7;color:#92400e}.supplier-status.paid{background:#dcfce7;color:#166534}.supplier-payment-history{margin-top:20px;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px}.supplier-payment-history h3{margin:0 0 12px}.supplier-history-row{display:grid;grid-template-columns:1fr auto auto;gap:14px;align-items:center;padding:11px 0;border-bottom:1px solid #edf2f7}.supplier-history-row:last-child{border-bottom:0}.supplier-history-row small,.supplier-inline-card small{display:block;color:#64748b;margin-top:4px}.supplier-inline-card{display:grid;grid-template-columns:2fr repeat(3,1fr) auto;gap:12px;align-items:center;padding:13px;margin:10px 0;border:1px solid #dbe5ef;border-radius:12px;background:#f8fbff}.supplier-inline-card span{display:block;font-size:11px;color:#64748b}.supplier-payment-balance{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:13px;margin-bottom:16px}.supplier-payment-balance span{color:#64748b;font-size:12px}.supplier-payment-balance strong{color:#123b5d}.admin-table input{max-width:150px}.supplier-detail-table{min-width:1450px}.supplier-detail-table th,.supplier-detail-table td{vertical-align:top}.supplier-name-link{display:block;border:0;background:none;color:#2563eb;font-size:13px;font-weight:800;cursor:pointer;padding:0 0 5px;text-align:left}.supplier-name-link:disabled{color:#64748b;cursor:not-allowed}.supplier-bank-hint{display:block;color:#64748b;font-size:10px;margin-top:4px}.supplier-clear-status{display:inline-block;padding:5px 9px;border-radius:999px;font-size:11px;font-weight:800;white-space:nowrap}.supplier-clear-status.clear{background:#dcfce7;color:#166534}.supplier-clear-status.not-clear{background:#fee2e2;color:#991b1b}.supplier-bank-modal{max-width:760px;width:96%}@media(max-width:900px){.supplier-summary-grid{grid-template-columns:1fr}.supplier-inline-card{grid-template-columns:1fr 1fr}.supplier-payment-balance{grid-template-columns:1fr 1fr}.supplier-history-row{grid-template-columns:1fr auto}}.supplier-ledger-page{max-width:100%}.supplier-ledger-header{align-items:flex-end}.supplier-ledger-header h2{margin:8px 0 4px}.supplier-ledger-header p{margin:0;color:#64748b}.supplier-ledger-eyebrow{display:block;margin-top:12px;font-size:11px;font-weight:800;letter-spacing:.12em;color:#2563eb}.supplier-ledger-summary{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin:0 0 18px}.supplier-ledger-summary>div{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:15px;box-shadow:0 4px 14px rgba(15,23,42,.04)}.supplier-ledger-summary span{display:block;font-size:11px;color:#64748b}.supplier-ledger-summary strong{display:block;margin-top:5px;font-size:19px;color:#123b5d}.supplier-ledger-summary .profit-card{background:#f0fdf4;border-color:#bbf7d0}.supplier-ledger-summary .profit-card strong{color:#15803d}.supplier-ledger-summary .loss-card{background:#fff7ed;border-color:#fed7aa}.supplier-ledger-summary .loss-card strong{color:#c2410c}.supplier-ledger-card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:18px;margin-bottom:18px;box-shadow:0 5px 18px rgba(15,23,42,.04)}.supplier-ledger-card-head{display:flex;justify-content:space-between;gap:15px;align-items:flex-start;margin-bottom:14px}.supplier-ledger-card-head span{font-size:10px;font-weight:800;letter-spacing:.1em;color:#2563eb}.supplier-ledger-card-head h3{margin:4px 0 0;color:#123b5d}.supplier-ledger-card-head small{color:#64748b}.supplier-ledger-table{min-width:1250px}.supplier-ledger-table tfoot td{background:#f8fafc;padding-top:14px;padding-bottom:14px}.supplier-deadline-input{min-width:140px}.supplier-payment-subrow td{background:#f8fafc!important}.supplier-payment-subledger{padding:10px 6px}.supplier-payment-subledger>strong{display:block;margin-bottom:8px;color:#123b5d}.supplier-payment-subledger>div{display:grid;grid-template-columns:140px 150px 1fr 120px auto;gap:10px;align-items:center;padding:8px 0;border-top:1px solid #e2e8f0;font-size:12px}.supplier-bottom-grid,.supplier-ledger-bottom-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:18px}.supplier-money-list>div{display:grid;grid-template-columns:1fr auto;gap:15px;align-items:center;padding:11px 0;border-bottom:1px solid #edf2f7}.supplier-money-list>div:last-child{border-bottom:0}.supplier-money-list small{display:block;color:#64748b;margin-top:3px}.profit-breakup>div{display:flex;justify-content:space-between;gap:15px;padding:11px 0;border-bottom:1px solid #edf2f7}.profit-breakup>div:last-child{border-bottom:0}.profit-total span,.profit-total strong{color:#15803d}.loss-total span,.loss-total strong{color:#c2410c}@media(max-width:1100px){.supplier-ledger-summary{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.supplier-ledger-summary{grid-template-columns:1fr 1fr}.supplier-ledger-bottom-grid{grid-template-columns:1fr}.supplier-ledger-card-head{flex-direction:column}.supplier-payment-subledger>div{grid-template-columns:1fr 1fr}.supplier-ledger-header{align-items:flex-start}}`;

function AgentManagement() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [adminEmail, setAdminEmail] = useState("");

  async function loadAgents() {
    if (!supabase) {
      setLoading(false);
      setError("Supabase is not configured. Check your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;
      const user = sessionData?.session?.user;
      if (!user) throw new Error("Admin session not found. Please sign in again.");
      setAdminEmail(user.email || "");

      const knownAdminEmail = String(user.email || "").trim().toLowerCase() === "admin@snehtravel.com" ||
        String(user.email || "").trim().toLowerCase() === "travelsneh@gmail.com";
      let isAdmin = false;
      try {
        const { data: rpcResult, error: adminError } = await supabase.rpc("is_sneh_admin");
        if (!adminError) isAdmin = rpcResult === true;
      } catch (rpcError) {
        console.warn("Admin RPC check skipped:", rpcError?.message || rpcError);
      }
      if (!isAdmin && !knownAdminEmail) throw new Error("This account is not registered in Sneh Travel Admin Users.");

      const { data, error: agentsError } = await supabase
        .from("agents")
        .select("*")
        .order("created_at", { ascending: false });
      if (agentsError) throw agentsError;
      setAgents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Agent management load error:", err);
      setAgents([]);
      setError(err?.message || "Unable to load agent registrations.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadAgents(); }, []);

  async function requireAdmin() {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session?.user) throw new Error("Admin session expired. Please sign in again.");
    const user = sessionData.session.user;
    const emailLower = String(user.email || "").trim().toLowerCase();
    const knownAdminEmail = emailLower === "admin@snehtravel.com" || emailLower === "travelsneh@gmail.com";
    let isAdmin = false;
    try {
      const { data, error } = await supabase.rpc("is_sneh_admin");
      if (!error) isAdmin = data === true;
    } catch (rpcError) {
      console.warn("Admin RPC check skipped:", rpcError?.message || rpcError);
    }
    if (!isAdmin && !knownAdminEmail) throw new Error("This account is not authorized to manage agents.");
    return user;
  }

  async function updateStatus(agent, status) {
    if (!supabase || !agent?.user_id) return;
    try {
      const admin = await requireAdmin();
      const payload = {
        status,
        updated_at: new Date().toISOString(),
        ...(status === "approved" ? { approved_at: new Date().toISOString(), approved_by: admin.id, rejection_reason: null } : {}),
        ...(status === "rejected" ? { approved_at: null, approved_by: null } : {})
      };
      const { data, error: updateError } = await supabase
        .from("agents")
        .update(payload)
        .eq("user_id", agent.user_id)
        .select("*")
        .single();
      if (updateError) throw updateError;
      setAgents((rows) => rows.map((row) => row.user_id === agent.user_id ? (data || { ...row, ...payload }) : row));
    } catch (err) {
      console.error("Agent status update error:", err);
      alert(err?.message || "Unable to update agent status.");
    }
  }

  async function deleteProfile(agent) {
    if (!supabase || !agent?.user_id) return;
    if (!window.confirm(`Remove the agent profile for ${agent.full_name || agent.company_name || agent.email || "this agent"}? This does not delete the Supabase Auth user.`)) return;
    try {
      await requireAdmin();
      const { error: deleteError } = await supabase.from("agents").delete().eq("user_id", agent.user_id);
      if (deleteError) throw deleteError;
      setAgents((rows) => rows.filter((row) => row.user_id !== agent.user_id));
    } catch (err) {
      console.error("Agent profile delete error:", err);
      alert(err?.message || "Unable to remove agent profile.");
    }
  }

  const filtered = agents.filter((agent) => {
    const haystack = [agent.company_name, agent.full_name, agent.email, agent.phone, agent.city, agent.state, agent.gst_number, agent.pan_number]
      .filter(Boolean).join(" ").toLowerCase();
    return (!search.trim() || haystack.includes(search.trim().toLowerCase())) &&
      (statusFilter === "all" || String(agent.status || "pending").toLowerCase() === statusFilter);
  });

  const counts = {
    all: agents.length,
    pending: agents.filter((a) => String(a.status || "pending").toLowerCase() === "pending").length,
    approved: agents.filter((a) => String(a.status || "").toLowerCase() === "approved").length,
    rejected: agents.filter((a) => String(a.status || "").toLowerCase() === "rejected").length,
    suspended: agents.filter((a) => String(a.status || "").toLowerCase() === "suspended").length,
  };

  return (
    <div className="agent-management-view">
      <div className="agent-management-toolbar">
        <div><span className="admin-topbar-eyebrow">PARTNER NETWORK</span><h2>Agent Management</h2><p>Approve agents, manage account status and review partner details.</p>{adminEmail && <small style={{display:"block",marginTop:6,color:"#64748b"}}>Admin: {adminEmail}</small>}</div>
        <button className="admin-primary-btn" onClick={loadAgents} disabled={loading}>{loading ? "Loading…" : "↻ Refresh"}</button>
      </div>
      <div className="agent-management-stats">
        {[["all","All Agents"],["pending","Pending"],["approved","Approved"],["rejected","Rejected"],["suspended","Suspended"]].map(([key,label]) => <button key={key} className={statusFilter===key?"active":""} onClick={()=>setStatusFilter(key)}><span>{label}</span><strong>{counts[key]}</strong></button>)}
      </div>
      <div className="agent-management-filters"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search agency, agent, email, mobile, city, GST or PAN..."/><span>{filtered.length} record{filtered.length===1?"":"s"}</span></div>
      {error && <div className="admin-error-box" style={{marginBottom:16}}><strong>Agent Management Error</strong><div style={{marginTop:5}}>{error}</div></div>}
      {loading ? <div className="admin-empty">Loading agent accounts...</div> : !filtered.length ? <div className="admin-empty"><h3>{agents.length?"No matching agents":"No agents found"}</h3><p>{agents.length?"Change the search or status filter.":"Agent registrations will appear here after they are created."}</p></div> : (
        <div className="agent-management-table-wrap"><table className="agent-management-table"><thead><tr><th>Agency / Agent</th><th>Contact</th><th>Location</th><th>GST / PAN</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody>
          {filtered.map(agent => { const status=String(agent.status||"pending").toLowerCase(); return <tr key={agent.user_id}><td><strong>{agent.company_name||"-"}</strong><small>{agent.full_name||"-"}</small></td><td><span>{agent.email||"-"}</span><small>{agent.phone||"-"}</small></td><td>{[agent.city,agent.state].filter(Boolean).join(", ")||"-"}</td><td><span>{agent.gst_number||"-"}</span><small>{agent.pan_number||"-"}</small></td><td><span className={`agent-status-pill ${status}`}>{status}</span></td><td>{agent.created_at?new Date(agent.created_at).toLocaleDateString("en-IN"):"-"}</td><td><div className="agent-management-actions">
            {status!=="approved" && <button onClick={()=>updateStatus(agent,"approved")}>Approve</button>}
            {status!=="rejected" && <button onClick={()=>updateStatus(agent,"rejected")}>Reject</button>}
            {status==="approved" && <button onClick={()=>updateStatus(agent,"suspended")}>Suspend</button>}
            {status==="suspended" && <button onClick={()=>updateStatus(agent,"approved")}>Reactivate</button>}
            <button className="danger" onClick={()=>deleteProfile(agent)}>Remove</button>
          </div></td></tr>; })}
        </tbody></table></div>
      )}
    </div>
  );
}

function AdminPanel({
  enquiries,
  onDelete,
  onClear,
  onRefresh,
  onLogout,
  onViewWebsite
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    try { return localStorage.getItem("sneh_admin_sidebar_collapsed") === "true"; } catch { return false; }
  });
  useEffect(() => {
    try { localStorage.setItem("sneh_admin_sidebar_collapsed", String(sidebarCollapsed)); } catch {}
  }, [sidebarCollapsed]);
  // Add a minimize / maximize control to every major admin section/card.
  // This is intentionally DOM-level so existing admin sections and their logic stay unchanged.
  useEffect(() => {
    const root = document.querySelector(".admin-shell");
    if (!root) return;

    const sectionSelectors = [
      ".admin-card",
      ".hotel-list-card",
      ".hotel-editor-card",
      ".admin-section",
      ".premium-inventory-page",
      ".supplier-ledger-card",
      ".package-form-section",
      ".nested-form-card"
    ];

    const getHeader = (section) =>
      section.querySelector(":scope > .admin-card-head, :scope > .rate-section-head, :scope > .editor-title, :scope > .package-section-title-row, :scope > .nested-form-header, :scope > .detail-itinerary-saved-toolbar, :scope > .supplier-ledger-card-head") || section.firstElementChild;

    const enhance = () => {
      root.querySelectorAll(sectionSelectors.join(",")).forEach((section, index) => {
        if (section.dataset.snehMinmaxReady === "1") return;
        if (section.closest(".sneh-collapsible-section") && section.closest(".sneh-collapsible-section") !== section) return;

        const header = getHeader(section);
        if (!header) return;

        section.classList.add("sneh-collapsible-section");
        header.classList.add("sneh-collapse-header");

        const content = document.createElement("div");
        content.className = "sneh-collapse-content";
        while (header.nextSibling) content.appendChild(header.nextSibling);
        section.appendChild(content);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "sneh-section-collapse-btn";
        button.title = "Minimize section";
        button.setAttribute("aria-label", "Minimize section");
        button.textContent = "−";
        header.appendChild(button);

        const storageKey = "sneh_admin_section_collapsed_" + String(activeTab || "page") + "_" + String(index) + "_" + String((header.textContent || "section").replace(/−|\+/g, "").trim().slice(0,60));
        let collapsed = false;
        try { collapsed = localStorage.getItem(storageKey) === "1"; } catch {}

        const update = () => {
          section.classList.toggle("sneh-section-collapsed", collapsed);
          button.textContent = collapsed ? "+" : "−";
          button.title = collapsed ? "Maximize section" : "Minimize section";
          button.setAttribute("aria-label", collapsed ? "Maximize section" : "Minimize section");
        };

        button.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          collapsed = !collapsed;
          try { localStorage.setItem(storageKey, collapsed ? "1" : "0"); } catch {}
          update();
        });
        section.dataset.snehMinmaxReady = "1";
        update();
      });
    };

    enhance();
    const observer = new MutationObserver(enhance);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [activeTab]);
  const [adminDashboard, setAdminDashboard] = useState({ enquiries: 0, hotels: 0 });
  const [dashboardLoading, setDashboardLoading] = useState(false);
  async function loadAdminDashboard() {
    setDashboardLoading(true);
    try {
      if (!supabase) { setAdminDashboard((v) => ({ ...v, enquiries: enquiries.length })); return; }
      const { count: hotelCount, error: hotelError } = await supabase.from("hotel_rates").select("id", { count: "exact", head: true });
      if (hotelError) throw hotelError;
      setAdminDashboard({ enquiries: enquiries.length, hotels: hotelCount || 0 });
    } catch (error) { console.error("Unable to load admin dashboard:", error); setAdminDashboard((v) => ({ ...v, enquiries: enquiries.length })); }
    finally { setDashboardLoading(false); }
  }
  useEffect(() => { loadAdminDashboard(); }, []);
  useEffect(() => { setAdminDashboard((v) => ({ ...v, enquiries: enquiries.length })); }, [enquiries.length]);

  /* =======================================================
     CUSTOMER / QUOTATION / BOOKING MANAGEMENT
  ======================================================= */
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedEnquiryMessage, setSelectedEnquiryMessage] = useState(null);
  const [supplierPaymentHistoryTarget, setSupplierPaymentHistoryTarget] = useState(null);
  const [quotations, setQuotations] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [quotationCustomer, setQuotationCustomer] = useState(null);
  const [bookingCustomer, setBookingCustomer] = useState(null);
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [viewQuotation, setViewQuotation] = useState(null);
  const [viewBooking, setViewBooking] = useState(null);
  const [confirmationPreview, setConfirmationPreview] = useState(null);
  const [invoicePreview, setInvoicePreview] = useState(null);
  const [standaloneHotelView, setStandaloneHotelView] = useState(null);
  const [standaloneHotelInvoicePreview, setStandaloneHotelInvoicePreview] = useState(null);
  const [editingQuotationId, setEditingQuotationId] = useState(null);
  const [supplierPayables, setSupplierPayables] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("sneh_travel_supplier_payables") || "[]");
      // Remove legacy/corrupt "Other" hotel rows that were created from old
      // hotel-builder/daywise data. Real Hotel and Cab records are retained.
      const blockedNames = [
        "hotel jan alleppey",
        "hotel mid season - thekkay",
        "hotel king munnar"
      ];
      const cleaned = (Array.isArray(saved) ? saved : []).filter(item => {
        const type = String(item?.serviceType || "").trim().toLowerCase();
        const name = String(item?.serviceName || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
        const legacy = blockedNames.some(blocked => name.includes(blocked));
        return !legacy;
      });
      if (cleaned.length !== (Array.isArray(saved) ? saved.length : 0)) {
        localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(cleaned));
      }
      return cleaned;
    } catch { return []; }
  });
  const [supplierPaymentTarget, setSupplierPaymentTarget] = useState(null);
  const [supplierLedgerBooking, setSupplierLedgerBooking] = useState(null);
  const [supplierBankTarget, setSupplierBankTarget] = useState(null);
  const [supplierBankForm, setSupplierBankForm] = useState({ supplierName: "", accountName: "", bankName: "", accountNumber: "", ifsc: "", branch: "", upi: "", phone: "", notes: "" });
  const [supplierBanks, setSupplierBanks] = useState(() => { try { return JSON.parse(localStorage.getItem("sneh_travel_supplier_banks") || "[]"); } catch { return []; } });
  const [supplierBankView, setSupplierBankView] = useState(null);
  const [supplierPaymentForm, setSupplierPaymentForm] = useState({ amount: "", paymentDate: new Date().toISOString().slice(0,10), paymentMode: "Bank Transfer", reference: "", notes: "" });
  const [customerPaymentModal, setCustomerPaymentModal] = useState(false);
  const [customerPaymentForm, setCustomerPaymentForm] = useState({ amount: "", paymentDate: new Date().toISOString().slice(0,10), paymentMode: "Bank Transfer", reference: "", notes: "" });
  const [customerPaymentHistory, setCustomerPaymentHistory] = useState(() => { try { return JSON.parse(localStorage.getItem("sneh_travel_customer_payments") || "[]"); } catch { return []; } });
  const STAFF_PERMISSION_LIST = [
    ["dashboard","Dashboard"],["enquiries","Customer Enquiries"],["customers","Customers"],["quotations","Quotations"],["bookings","Bookings"],["invoices","Invoices"],["payments","Customer Payments"],["supplier-ledger","Supplier Payment Ledger"],["supplier-payments","Supplier Payments"],["hotels","Hotel Management"],["vehicles","Vehicles / Transport"],["destinations","Destination Master"],["pricing","Margin / Pricing"],["reports","Reports"],["agent-management","Agent Management"],["content","Website Content"],["staff","Staff & Permissions"],["settings","Settings"]
  ];
  const [staffList, setStaffList] = useState(() => { try { return JSON.parse(localStorage.getItem("sneh_travel_staff") || "[]"); } catch { return []; } });
  const [staffForm, setStaffForm] = useState({id:null,name:"",email:"",phone:"",role:"Sales Executive",active:true,permissions:{}});
  const [staffEditingId, setStaffEditingId] = useState(null);
  const [staffReportFilter, setStaffReportFilter] = useState("All");

  function defaultStaffPermissions() { return Object.fromEntries(STAFF_PERMISSION_LIST.map(([key]) => [key, true])); }
  function newStaffForm() { return {id:null,name:"",email:"",phone:"",role:"Sales Executive",active:true,permissions:defaultStaffPermissions()}; }
  function saveStaffRecord() {
    const name=String(staffForm.name||"").trim();
    if(!name) { alert("Please enter staff name."); return; }
    const record={...staffForm,id:staffEditingId||`STAFF-${Date.now()}`,permissions:{...defaultStaffPermissions(),...(staffForm.permissions||{})},updatedAt:new Date().toISOString()};
    const next=staffEditingId?staffList.map(x=>String(x.id)===String(staffEditingId)?record:x):[record,...staffList];
    setStaffList(next); localStorage.setItem("sneh_travel_staff",JSON.stringify(next)); setStaffForm(newStaffForm()); setStaffEditingId(null); alert("Staff record saved successfully.");
  }
  function editStaffRecord(row) { setStaffEditingId(row.id); setStaffForm({...newStaffForm(),...row,permissions:{...defaultStaffPermissions(),...(row.permissions||{})}}); }
  function deleteStaffRecord(row) { if(!window.confirm(`Delete staff ${row.name||""}?`)) return; const next=staffList.filter(x=>String(x.id)!==String(row.id)); setStaffList(next); localStorage.setItem("sneh_travel_staff",JSON.stringify(next)); }
  function toggleStaffPermission(permission) { setStaffForm(prev=>({...prev,permissions:{...prev.permissions,[permission]:!prev.permissions?.[permission]}})); }
  function staffNameForBooking(booking) { return booking?.staff_name || booking?.staffName || (booking?.staff_id ? staffList.find(x=>String(x.id)===String(booking.staff_id))?.name : "") || "Unassigned"; }
  function staffReports() {
    return staffList.map(st=>{ const rows=bookings.filter(b=>String(b.staff_id||"")===String(st.id) || String(b.staff_name||b.staffName||"").trim().toLowerCase()===String(st.name||"").trim().toLowerCase()); const sale=rows.reduce((n,b)=>n+(Number(b.finalSaleAmount||b.totalAmount||b.amount)||0),0); const purchase=rows.reduce((n,b)=>n+(Number(b.netCost)||0),0); return {...st,bookingCount:rows.length,sale,purchase,profit:sale-purchase,rows}; });
  }

  async function loadStandaloneHotelInventory() {
    if (!supabase) return;
    setStandaloneHotelLoading(true);
    try {
      const [hRes, rRes] = await Promise.all([
        supabase.from("hotels").select("id,name,city,category,active,destination_type").order("city").order("name"),
        supabase.from("hotel_rates").select("*").order("hotel_id")
      ]);
      if (hRes.error) throw hRes.error;
      if (rRes.error) throw rRes.error;
      const hotels = (hRes.data || []).filter(h => h.active !== false);
      const hotelMap = new Map(hotels.map(h => [String(h.id), h]));
      const rates = (rRes.data || []).map(r => ({ ...r, hotel: hotelMap.get(String(r.hotel_id)) || null })).filter(r => r.hotel);
      setStandaloneHotelInventory({ hotels, rates });
    } catch (e) {
      console.error("Unable to load standalone hotel inventory:", e);
    } finally { setStandaloneHotelLoading(false); }
  }
  function standaloneHotelNights(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(`${checkIn}T00:00:00`), b = new Date(`${checkOut}T00:00:00`);
    return Math.max(0, Math.round((b - a) / 86400000));
  }
  function standaloneHotelRecalculate(patch = {}) {
    const next = { ...standaloneHotelForm, ...patch };
    const nights = standaloneHotelNights(next.checkIn, next.checkOut) || Number(next.nights) || 0;
    const roomRate = Number(next.roomRate) || 0;
    const rooms = Number(next.rooms) || 0;
    const extraBedRate = Number(next.extraBed) || 0;
    const childWithBedRate = Number(next.childWithBed) || 0;
    const childWithoutBedRate = Number(next.childWithoutBed) || 0;
    const purchaseAmount = (Number(next.purchaseRoomRate) || 0) * rooms * nights
      + (Number(next.purchaseExtraBedRate) || 0) * (Number(next.purchaseExtraBeds) || 0) * nights
      + (Number(next.purchaseChildWithBedRate) || 0) * (Number(next.purchaseChildrenWithBed) || 0) * nights
      + (Number(next.purchaseChildWithoutBedRate) || 0) * (Number(next.purchaseChildrenWithoutBed) || 0) * nights;
    const saleAmount = roomRate * rooms * nights + extraBedRate * (Number(next.extraBedRooms) || 0) * nights
      + childWithBedRate * (Number(next.childWithBedRooms) || 0) * nights
      + childWithoutBedRate * (Number(next.childWithoutBedRooms) || 0) * nights;
    const advance = Number(next.advanceReceived) || 0;
    // Always calculate both sides from their respective rates. Never reuse a
    // previous total, because that caused Sale/Purchase totals to drift apart.
    return { ...next, nights, purchaseAmount, saleAmount, balance: Math.max(0, saleAmount - advance) };
  }
  function selectStandaloneHotel(hotelName) {
    const hotel = standaloneHotelInventory.hotels.find(h => String(h.name) === String(hotelName));
    setStandaloneHotelForm(prev => ({ ...prev, hotelName, city: hotel?.city || prev.city, destination: hotel?.destination_type || prev.destination }));
  }
  function applyStandaloneHotelRate(rateId) {
    const rate = standaloneHotelInventory.rates.find(r => String(r.id) === String(rateId));
    if (!rate) return;
    setStandaloneHotelForm(prev => standaloneHotelRecalculate({ ...prev,
      roomRate: Number(rate.room_rate_per_night ?? rate.room_rate ?? 0) || 0,
      extraBed: Number(rate.extra_bed_rate ?? rate.extra_bed ?? 0) || 0,
      childWithBed: Number(rate.child_with_bed_rate ?? rate.child_with_bed ?? 0) || 0,
      childWithoutBed: Number(rate.child_without_bed_rate ?? rate.child_without_bed ?? 0) || 0,
      purchaseRoomRate: Number(rate.purchase_room_rate_per_night ?? rate.purchase_room_rate ?? rate.room_purchase_rate_per_night ?? 0) || 0,
      purchaseExtraBedRate: Number(rate.purchase_extra_bed_rate ?? rate.extra_bed_purchase_rate ?? 0) || 0,
      purchaseChildWithBedRate: Number(rate.purchase_child_with_bed_rate ?? rate.child_with_bed_purchase_rate ?? 0) || 0,
      purchaseChildWithoutBedRate: Number(rate.purchase_child_without_bed_rate ?? rate.child_without_bed_purchase_rate ?? 0) || 0,
      mealPlan: rate.meal_plan || prev.mealPlan }));
  }
  function saveStandaloneHotelBooking() {
    const calculated = standaloneHotelRecalculate();
    if (!calculated.customerName || !calculated.hotelName || !calculated.checkIn || !calculated.checkOut) { alert("Please fill Customer, Hotel, Check-in and Check-out."); return; }
    const id = standaloneHotelEditingId || `HOTEL-${Date.now()}`;
    const bookingNo = calculated.bookingNo || (standaloneHotelBookings.find(x => x.id === id)?.bookingNo) || `HB-${new Date().getFullYear()}-${String(standaloneHotelBookings.length + 1).padStart(4,"0")}`;
    const row = { ...calculated, id, bookingNo, createdAt: standaloneHotelBookings.find(x => x.id === id)?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    const next = standaloneHotelEditingId ? standaloneHotelBookings.map(x => x.id === id ? row : x) : [row, ...standaloneHotelBookings];
    setStandaloneHotelBookings(next);
    localStorage.setItem("sneh_travel_standalone_hotel_bookings", JSON.stringify(next));
    // Keep standalone hotel bookings visible in Purchase Report / Supplier Ledger.
    const payable = {
      id: `SP-HOTEL-${id}`, bookingId: id, bookingNo, quotationNo: "Standalone Hotel",
      supplierName: row.supplierName || row.hotelName, serviceType: "Hotel", serviceName: row.hotelName,
      customerName: row.customerName, city: row.city, amountPayable: Number(row.purchaseAmount)||0,
      purchaseAmount: Number(row.purchaseAmount)||0, salesAmount: Number(row.saleAmount)||0,
      paidAmountOverride: 0, payments: [], createdAt: row.createdAt, paymentDeadline: row.checkIn || ""
    };
    const currentPayables = (() => { try { return JSON.parse(localStorage.getItem("sneh_travel_supplier_payables") || "[]"); } catch { return []; } })();
    const payNext = currentPayables.some(x => x.id === payable.id) ? currentPayables.map(x => x.id === payable.id ? { ...x, ...payable } : x) : [payable, ...currentPayables];
    localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(payNext));
    setSupplierPayables(payNext);
    setStandaloneHotelEditingId(null); setStandaloneHotelForm(emptyStandaloneHotelBooking());
    alert(`${standaloneHotelEditingId ? "Hotel booking updated" : "Hotel booking saved"} successfully.`);
  }
  function editStandaloneHotelBooking(row) { setStandaloneHotelEditingId(row.id); setStandaloneHotelForm({ ...emptyStandaloneHotelBooking(), ...row }); }
  function deleteStandaloneHotelBooking(row) {
    if (!window.confirm(`Delete hotel booking ${row.bookingNo}?`)) return;
    const next = standaloneHotelBookings.filter(x => x.id !== row.id);
    setStandaloneHotelBookings(next); localStorage.setItem("sneh_travel_standalone_hotel_bookings", JSON.stringify(next));
    const payables = supplierPayables.filter(x => String(x.id) !== `SP-HOTEL-${row.id}`);
    setSupplierPayables(payables); localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(payables));
  }
  function newStandaloneHotelBooking() { setStandaloneHotelEditingId(null); setStandaloneHotelForm(emptyStandaloneHotelBooking()); }

  function normalizeQuotationCity(value) {
    let raw = String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase()
      .replace(/[.]/g, '')
      .replace(/\s+/g, ' ');

    // Hotel Master sometimes stores a city together with its state/country,
    // for example "Munnar, Kerala". The itinerary stores only "Munnar".
    raw = raw.split(',')[0].trim();

    // Remove common labels that can accidentally be saved with the city.
    raw = raw.replace(/\b(city|district)\b$/i, '').trim();

    const aliases = {
      'alappuzha': 'alleppey',
      'aleppey': 'alleppey',
      'allepey': 'alleppey',
      'kochi': 'cochin',
      'cochin': 'cochin',
      'ernakulam': 'cochin',
      'trivandrum': 'thiruvananthapuram',
      'thiruvananthapuram': 'thiruvananthapuram',
      'bangalore': 'bengaluru',
      'bengaluru': 'bengaluru',
      'calcutta': 'kolkata',
      'kolkata': 'kolkata',
      'bombay': 'mumbai',
      'mumbai': 'mumbai',
      'pondicherry': 'puducherry',
      'puducherry': 'puducherry'
    };
    return aliases[raw] || raw;
  }

  function cityNamesMatch(a, b) {
    const left = normalizeQuotationCity(a);
    const right = normalizeQuotationCity(b);
    if (!left || !right) return false;
    if (left === right) return true;

    // Handle values such as "Munnar (Kerala)" or "Munnar - Kerala"
    // without making unrelated cities match.
    const compact = value => String(value || '')
      .replace(/\([^)]*\)/g, '')
      .replace(/\s[-–—]\s.*$/g, '')
      .trim();
    return normalizeQuotationCity(compact(a)) === normalizeQuotationCity(compact(b));
  }

  function normalizeQuotationText(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');
  }

  function quotationHotelRateMatches(rate, city, category, hotelName, mealPlan) {
    if (!rate?.hotel) return false;
    if (city && !cityNamesMatch(rate.hotel.city, city)) return false;
    if (category && normalizeQuotationText(rate.hotel.category) !== normalizeQuotationText(category)) return false;
    if (hotelName && normalizeQuotationText(rate.hotel.name) !== normalizeQuotationText(hotelName)) return false;
    if (mealPlan && normalizeQuotationText(rate.meal_plan) !== normalizeQuotationText(mealPlan)) return false;
    return true;
  }

  function parseNightStayAllocations(plan) {
    const raw = String(plan?.night_stays || '').split("||DAYWISE::")[0].trim();
    const route = String(plan?.city_itinerary || '').trim();
    const source = raw || route;
    if (!source) return [];
    const results = [];
    const add = (city, nights) => {
      const cleanCity = String(city || '').replace(/^[-–—→>\s]+|[-–—→>\s]+$/g, '').replace(/^stay\s*[:=-]?\s*/i, '').trim();
      const n = Number(nights);
      if (cleanCity && Number.isFinite(n) && n > 0 && !results.some(x => cityNamesMatch(x.city, cleanCity))) {
        results.push({ city: cleanCity, nights: n });
      }
    };
    if (raw) {
      raw.split(/\s*[|,;]+\s*/).forEach(part => {
        const trimmed = part.trim();
        let m = trimmed.match(/^(.+?)\s*[:=-]\s*(\d+(?:\.\d+)?)\s*(?:N|Night|Nights)?$/i);
        if (m) add(m[1], m[2]);

        // Also accept "Munnar (2N)" / "Munnar (2 Nights)" directly
        // in the Night Stay field.
        if (!m) {
          m = trimmed.match(/^(.+?)\s*\(\s*(\d+(?:\.\d+)?)\s*N(?:ights?)?\s*\)$/i);
          if (m) add(m[1], m[2]);
        }
      });
    }
    if (!results.length) {
      const re = /([^→>]+?)\s*\(\s*(\d+(?:\.\d+)?)\s*N(?:ights?)?\s*\)/gi;
      let m;
      while ((m = re.exec(route)) !== null) add(m[1], m[2]);
    }
    return results;
  }

  function buildQuotationDestinationRows(plan, previousDestination, startDate) {
    const allocations = parseNightStayAllocations(plan);
    const start = startDate || new Date().toISOString().slice(0,10);
    const makeDate = value => new Date(`${value}T00:00:00`);
    const formatDate = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
    let cursor = makeDate(start);
    const source = previousDestination || emptyQuotationDestination();
    if (!allocations.length) {
      const nights = Number(plan?.nights) || 0;
      const end = makeDate(start);
      end.setDate(end.getDate() + nights);
      return [{ ...source, destination: plan?.destination || source.destination || "", city: source.city || "", hotelCity: source.hotelCity || source.city || "", nights: String(nights), checkIn: start, checkOut: formatDate(end), itineraryName: plan?.itinerary_name || "", itineraryKey: plan?.itinerary_key || plan?.id || "" }];
    }
    return allocations.map((stay, index) => {
      const checkIn = formatDate(cursor);
      const end = new Date(cursor.getTime());
      end.setDate(end.getDate() + stay.nights);
      const checkOut = formatDate(end);
      cursor = end;
      return {
        ...emptyQuotationDestination(),
        ...source,
        destination: plan?.destination || source.destination || "",
        city: stay.city,
        hotelCity: stay.city,
        nights: String(stay.nights),
        checkIn,
        checkOut,
        singleRooms: source.singleRooms ?? 0,
        doubleRooms: source.doubleRooms ?? 1,
        rooms: source.rooms ?? 1,
        hotelCategory: "",
        hotelName: "",
        mealPlan: "",
        singlePricePerRoomPerNight: "",
        doublePricePerRoomPerNight: "",
        pricePerRoomPerNight: "",
        extraBedPrice: "",
        childWithBedPrice: "",
        childWithoutBedPrice: "",
        itineraryName: plan?.itinerary_name || "",
        itineraryKey: plan?.itinerary_key || plan?.id || "",
        stayIndex: index
      };
    });
  }

  const emptyQuotationDestination = () => ({ destination: "", checkIn: "", checkOut: "", nights: "", singleRooms: 0, doubleRooms: 1, singlePricePerRoomPerNight: "", doublePricePerRoomPerNight: "", rooms: 1, roomType: "Double", pricePerRoomPerNight: "", childWithBed: 0, childWithBedPrice: "", childWithoutBed: 0, childWithoutBedPrice: "", extraBed: 0, extraBedPrice: "", childAge: "", hotelCategory: "3 Star", hotelName: "", mealPlan: "CP" });
  const [quotationForm, setQuotationForm] = useState({
    customerName: "", phone: "", email: "", travelDate: new Date().toISOString().slice(0,10), adults: 2, children: 0, rooms: 1, childAges: [],
    destinations: [emptyQuotationDestination()], selectedDestination: "", selectedItineraryKey: "", selectedVehicleRateId: "",
    vehicleType: "Sedan", pickupPoint: "", dropPoint: "", vehicleDays: "",
    hotelAmount: "", extraBedAmount: "", childWithBedAmount: "", childWithoutBedAmount: "", vehicleAmount: "", netCost: "", markupType: "percent", markupValue: "", totalAmount: "", totalAmountManual: false,
    quotationDate: new Date().toISOString().slice(0,10), inclusions: 'Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation as mentioned\nSightseeing as mentioned', exclusions: 'Airfare/train tickets\nPersonal expenses\nLunch & dinner except houseboat\nEntry tickets\nBoating/activity charges\nCamera charges\nAnything not mentioned under inclusions\nGST, if applicable', notes: ""
  });
  const emptyBookingForm = () => ({
    quotationNo: "", packageName: "", travelDate: "", adults: 2, children: 0, rooms: 1, roomAllocation: "", dayWiseItinerary: "", staff_id: "", staff_name: "",
    destination: "", itineraryName: "", nights: "", days: "", pickupPoint: "", dropPoint: "",
    hotelServices: [], vehicleServices: [],
    hotelAmount: 0, extraBedAmount: 0, childWithBedAmount: 0, childWithoutBedAmount: 0, transportAmount: 0,
    netCost: 0, markupType: "percent", markupValue: 0, finalSaleAmount: 0,
    advancePaid: "", balanceAmount: 0, invoiceNo: "", invoiceDate: "", bookingStatus: "Pending", paymentStatus: "Pending", confirmationNo: "", confirmedBy: "", landSupplierEmail: "", invoiceBillTo: "guest", billingCompanyName: "", billingCompanyAddress: "", billingCompanyGst: "", billingInstruction: "", notes: ""
  });
  const [bookingForm, setBookingForm] = useState(emptyBookingForm());
  const emptyStandaloneHotelBooking = () => ({
    customerName: "", phone: "", email: "", destination: "", city: "", hotelName: "",
    supplierName: "", checkIn: "", checkOut: "", nights: 1, adults: 2, children: 0,
    rooms: 1, roomType: "Double", mealPlan: "CP",
    roomRate: 0, extraBed: 0, extraBedRooms: 0, childWithBed: 0, childWithBedRooms: 0, childWithoutBed: 0, childWithoutBedRooms: 0,
    purchaseRoomRate: 0, purchaseExtraBedRate: 0, purchaseExtraBeds: 0, purchaseChildWithBedRate: 0, purchaseChildrenWithBed: 0, purchaseChildWithoutBedRate: 0, purchaseChildrenWithoutBed: 0,
    purchaseAmount: 0, saleAmount: 0,
    advanceReceived: 0, balance: 0, bookingStatus: "Pending", paymentStatus: "Pending",
    confirmationNo: "", notes: ""
  });
  const [standaloneHotelBookings, setStandaloneHotelBookings] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sneh_travel_standalone_hotel_bookings") || "[]"); } catch { return []; }
  });
  const [standaloneHotelForm, setStandaloneHotelForm] = useState(emptyStandaloneHotelBooking());
  const [standaloneHotelEditingId, setStandaloneHotelEditingId] = useState(null);
  const [standaloneHotelInventory, setStandaloneHotelInventory] = useState({ hotels: [], rates: [] });
  const [standaloneHotelLoading, setStandaloneHotelLoading] = useState(false);
  const [quotationItineraries, setQuotationItineraries] = useState([]);
  const [quotationDestinations, setQuotationDestinations] = useState([]);
  const [quotationHotelRates, setQuotationHotelRates] = useState([]);
  const [quotationVehicles, setQuotationVehicles] = useState([]);
  const [quotationItineraryLoading, setQuotationItineraryLoading] = useState(false);
  function decodeSavedDaywise(value) {
    const raw = String(value || "");
    const marker = "||DAYWISE::";
    const pos = raw.indexOf(marker);
    if (pos < 0) return [];
    try { return JSON.parse(raw.slice(pos + marker.length)) || []; } catch { return []; }
  }
  function cleanSavedNightStays(value) {
    return String(value || "").split("||DAYWISE::")[0].trim();
  }
  function formatSavedDaywise(days) {
    return (Array.isArray(days) ? days : []).map((d,i) => `Day ${String(Number(d.day)||i+1).padStart(2,"0")} — ${d.title || "Travel"}${d.details ? `\n${d.details}` : ""}${d.nightStay ? `\nNight Stay: ${d.nightStay}` : ""}`).join("\n\n");
  }
  async function loadQuotationItineraries() {
    if (!supabase) return;
    setQuotationItineraryLoading(true);
    try {
      const [destinationResult, itineraryResult, vrResult, vehicleResult, hotelResult, hotelRateResult] = await Promise.all([
        supabase.from("destinations").select("*").eq("active", true).order("name"),
        supabase.from("itineraries").select("*"),
        supabase.from("vehicle_rates").select("*").order("destination").order("days").order("itinerary_name"),
        supabase.from("vehicles").select("id,name,vehicle,vehicle_type,seating_capacity,active"),
        supabase.from("hotels").select("id,name,city,category,active,destination_type"),
        supabase.from("hotel_rates").select("*")
      ]);

      if (destinationResult.error) throw destinationResult.error;
      if (itineraryResult.error) throw itineraryResult.error;
      if (vrResult.error) throw vrResult.error;

      setQuotationDestinations(destinationResult.data || []);
      setQuotationVehicles(vehicleResult.data || []);

      const vehicleMap = new Map((vehicleResult.data || []).map(v => [String(v.id), v]));
      const grouped = {};

      // IMPORTANT: itineraries is the source of truth for the quotation flow.
      // It contains the Night Stay / City allocation used by Hotel & Meal Plan.
      (itineraryResult.data || []).forEach((plan) => {
        const key = String(plan.itinerary_key || plan.id || [
          plan.itinerary_name, plan.destination, plan.nights, plan.days,
          plan.pickup_point, plan.drop_point
        ].join("|"));
        grouped[key] = {
          id: key,
          itinerary_key: plan.itinerary_key || key,
          itinerary_id: plan.id || null,
          itinerary_name: plan.itinerary_name || "",
          destination: plan.destination || plan.name || "",
          nights: Number(plan.nights) || 0,
          days: Number(plan.days) || 0,
          pickup_point: plan.pickup_point || "",
          drop_point: plan.drop_point || "",
          city_itinerary: plan.city_itinerary || "",
          night_stays: cleanSavedNightStays(plan.night_stays || ""),
          daywise: decodeSavedDaywise(plan.night_stays),
          vehicleRates: []
        };
      });

      // Merge the saved vehicle-rate rows into the canonical itinerary rows.
      // This guarantees that selecting a vehicle rate does not lose the
      // itinerary's Night Stay allocation.
      (vrResult.data || []).forEach((row) => {
        const key = String(row.itinerary_key || [
          row.itinerary_name, row.destination, row.nights, row.days,
          row.pickup_point, row.drop_point
        ].join("|"));

        if (!grouped[key]) {
          // Fallback for older records where the itineraries row is missing.
          grouped[key] = {
            id: key,
            itinerary_key: row.itinerary_key || key,
            itinerary_id: null,
            itinerary_name: row.itinerary_name || "",
            destination: row.destination || "",
            nights: Number(row.nights) || 0,
            days: Number(row.days) || 0,
            pickup_point: row.pickup_point || "",
            drop_point: row.drop_point || "",
            city_itinerary: row.city_itinerary || "",
            night_stays: cleanSavedNightStays(row.night_stays || ""),
            daywise: decodeSavedDaywise(row.night_stays),
            vehicleRates: []
          };
        }

        const item = grouped[key];
        if (!item.night_stays && row.night_stays) item.night_stays = cleanSavedNightStays(row.night_stays);
        if ((!item.daywise || !item.daywise.length) && row.night_stays) item.daywise = decodeSavedDaywise(row.night_stays);
        if (!item.city_itinerary && row.city_itinerary) item.city_itinerary = row.city_itinerary;

        const vehicle = vehicleMap.get(String(row.vehicle_id));
        const vehicleName = vehicle?.name || vehicle?.vehicle || vehicle?.vehicle_type || row.vehicle_type || "Vehicle";
        const normalizedRate = row.rate ?? row.sedan_rate ?? row.ertiga_rate ?? row.innova_rate ?? row.tempo_rate ?? 0;
        const existing = item.vehicleRates.find(v =>
          String(v.vehicle_id) === String(row.vehicle_id) ||
          normalizeQuotationText(v.vehicle_name) === normalizeQuotationText(vehicleName)
        );

        if (existing) {
          existing.rate = Number(normalizedRate) || existing.rate || 0;
          existing.rate_id = existing.rate_id || row.id;
        } else {
          item.vehicleRates.push({
            rate_id: row.id,
            vehicle_id: row.vehicle_id,
            vehicle_name: vehicleName,
            rate: Number(normalizedRate) || 0
          });
        }
      });

      // Final safety pass: match old itinerary keys/names and recover Night Stay
      // data even when the vehicle_rates.itinerary_key was stored differently.
      Object.values(grouped).forEach(item => {
        if (item.night_stays && item.city_itinerary) return;
        const match = (itineraryResult.data || []).find(plan =>
          (plan.itinerary_key && item.itinerary_key && String(plan.itinerary_key) === String(item.itinerary_key)) ||
          (normalizeQuotationText(plan.itinerary_name) === normalizeQuotationText(item.itinerary_name) &&
           cityNamesMatch(plan.destination, item.destination) &&
           Number(plan.nights) === Number(item.nights) &&
           Number(plan.days) === Number(item.days))
        );
        if (match) {
          item.night_stays = cleanSavedNightStays(match.night_stays || item.night_stays || "");
          item.daywise = decodeSavedDaywise(match.night_stays || "") || item.daywise || [];
          item.city_itinerary = match.city_itinerary || item.city_itinerary || "";
        }
      });

      setQuotationItineraries(Object.values(grouped).filter(item => item.destination || item.itinerary_name));

      if (!hotelResult.error && !hotelRateResult.error) {
        const hotels = new Map((hotelResult.data || []).map(h => [String(h.id), h]));
        const rates = (hotelRateResult.data || [])
          .filter(r => r.active !== false)
          .map(r => ({ ...r, hotel: hotels.get(String(r.hotel_id)) || null }))
          .filter(r => r.hotel && r.hotel.active !== false);
        setQuotationHotelRates(rates);
      } else {
        setQuotationHotelRates([]);
      }
    } catch (error) {
      console.error("Unable to load saved itinerary/hotel data:", error);
      alert(`Unable to load saved itinerary/hotel data: ${error.message || error}`);
    } finally {
      setQuotationItineraryLoading(false);
    }
  }

  useEffect(() => { if (quotationCustomer) loadQuotationItineraries(); }, [quotationCustomer]);

  useEffect(() => {
    try {
      setQuotations(JSON.parse(localStorage.getItem("sneh_travel_quotations") || "[]"));
      const savedBookings = JSON.parse(localStorage.getItem("sneh_travel_bookings") || "[]");
      const migratedBookings = (Array.isArray(savedBookings) ? savedBookings : []).map((booking, index) => ({
        ...booking,
        invoiceNo: booking.invoiceNo || `INV-${new Date(booking.created_at || Date.now()).getFullYear()}-${String(index + 1).padStart(4, "0")}`,
        invoiceDate: booking.invoiceDate || String(booking.created_at || new Date().toISOString()).slice(0,10)
      }));
      setBookings(migratedBookings);
      localStorage.setItem("sneh_travel_bookings", JSON.stringify(migratedBookings));
      const savedCustomerPayments = JSON.parse(localStorage.getItem("sneh_travel_customer_payments") || "[]");
      const paymentRows = Array.isArray(savedCustomerPayments) ? savedCustomerPayments : [];
      const migratedPayments = [...paymentRows];
      migratedBookings.forEach((booking) => {
        const hasHistory = migratedPayments.some(p => String(p.bookingId) === String(booking.id));
        const existingAdvance = Number(booking.advancePaid) || 0;
        if (!hasHistory && existingAdvance > 0) {
          migratedPayments.push({
            id: `CPAY-MIG-${booking.id}`,
            bookingId: booking.id,
            bookingNo: booking.serial_no || "",
            quotationNo: booking.quotationNo || "",
            customerName: booking.customer_name || "Customer",
            amount: existingAdvance,
            paymentDate: booking.invoiceDate || String(booking.created_at || new Date().toISOString()).slice(0,10),
            paymentMode: "Previously Recorded",
            reference: "",
            notes: "Existing advance migrated to payment history",
            createdAt: booking.created_at || new Date().toISOString()
          });
        }
      });
      setCustomerPaymentHistory(migratedPayments);
      localStorage.setItem("sneh_travel_customer_payments", JSON.stringify(migratedPayments));
    } catch (e) {
      console.error("Unable to load quotations/bookings:", e);
    }
  }, []);

  function makeAdminSerial(prefix, list) {
    const year = new Date().getFullYear();
    const max = list.reduce((n, item) => {
      const match = String(item.serial_no || "").match(/(\d+)$/);
      return Math.max(n, match ? Number(match[1]) : 0);
    }, 0);
    return `${prefix}-${year}-${String(max + 1).padStart(4, "0")}`;
  }

  function enquirySerial(enquiry, index) {
    if (enquiry?.serial_no) return enquiry.serial_no;
    const year = enquiry?.created_at ? new Date(enquiry.created_at).getFullYear() : new Date().getFullYear();
    return `ENQ-${year}-${String(index + 1).padStart(4, "0")}`;
  }

  function calculateHotelAmount(form) {
    return (form.destinations || []).reduce((sum, destination) => {
      const nights = Number(destination.nights) || 0;
      const singleRooms = Number(destination.singleRooms) || 0;
      const doubleRooms = Number(destination.doubleRooms) || 0;
      const singlePrice = Number(destination.singlePricePerRoomPerNight) || 0;
      const doublePrice = Number(destination.doublePricePerRoomPerNight) || 0;
      return sum + (singleRooms * singlePrice * nights) + (doubleRooms * doublePrice * nights);
    }, 0);
  }

  function calculateChildBedAmounts(form) {
    return (form.destinations || []).reduce((totals, destination) => {
      totals.extraBed += (Number(destination.extraBed) || 0) * (Number(destination.extraBedPrice) || 0);
      totals.childWithBed += (Number(destination.childWithBed) || 0) * (Number(destination.childWithBedPrice) || 0);
      totals.childWithoutBed += (Number(destination.childWithoutBed) || 0) * (Number(destination.childWithoutBedPrice) || 0);
      return totals;
    }, { extraBed: 0, childWithBed: 0, childWithoutBed: 0 });
  }

  function calculateQuotationNetCost(form) {
    const hotelAmount = calculateHotelAmount(form);
    const childAmounts = calculateChildBedAmounts(form);
    const values = [hotelAmount, childAmounts.extraBed, childAmounts.childWithBed, childAmounts.childWithoutBed, form.vehicleAmount];
    return values.reduce((sum, value) => sum + (Number(value) || 0), 0);
  }

  function calculateQuotationMarkup(form) {
    const netCost = calculateQuotationNetCost(form);
    const configuredType = String(form?.markupType || pricingSetting?.margin_type || "percentage").toLowerCase();
    const markupType = configuredType === "fixed" ? "fixed" : "percent";
    const configuredValue = form?.markupValue === "" || form?.markupValue == null
      ? Number(pricingSetting?.margin_value ?? 8)
      : Number(form.markupValue);
    const markupValue = Math.max(0, Number(configuredValue) || 0);
    if (markupType === "fixed") return markupValue;
    return netCost * markupValue / 100;
  }

  function calculateQuotationTotal(form) {
    return calculateQuotationNetCost(form) + calculateQuotationMarkup(form);
  }

  function applySelectedHotelRate(index, hotelName, mealPlan, hotelCity, hotelCategory) {
    const match = (quotationHotelRates || []).find(r =>
      quotationHotelRateMatches(r, hotelCity, hotelCategory, hotelName, mealPlan)
    );
    if (!match) return;
    setQuotationForm(prev => {
      const destinations = prev.destinations.map((d,i) => i===index ? {
        ...d,
        hotelName, mealPlan, hotelCity, hotelCategory,
        singlePricePerRoomPerNight: Number(match.room_rate_per_night ?? match.room_rate ?? 0) || 0,
        doublePricePerRoomPerNight: Number(match.room_rate_per_night ?? match.room_rate ?? 0) || 0,
        pricePerRoomPerNight: Number(match.room_rate_per_night ?? match.room_rate ?? 0) || 0,
        purchaseSingleRatePerNight: Number(match.purchase_room_rate_per_night ?? match.purchase_room_rate ?? match.room_rate_per_night ?? match.room_rate ?? 0) || 0,
        purchaseDoubleRatePerNight: Number(match.purchase_room_rate_per_night ?? match.purchase_room_rate ?? match.room_rate_per_night ?? match.room_rate ?? 0) || 0,
        purchaseExtraBedRate: Number(match.purchase_extra_bed_rate ?? match.extra_bed_rate ?? match.extra_bed ?? 0) || 0,
        purchaseChildWithBedRate: Number(match.purchase_child_with_bed_rate ?? match.child_with_bed_rate ?? match.child_with_bed ?? 0) || 0,
        purchaseChildWithoutBedRate: Number(match.purchase_child_without_bed_rate ?? match.child_without_bed_rate ?? match.child_without_bed ?? 0) || 0,
        extraBedPrice: Number(match.extra_bed_rate ?? match.extra_bed ?? 0) || 0,
        childWithBedPrice: Number(match.child_with_bed_rate ?? match.child_with_bed ?? 0) || 0,
        childWithoutBedPrice: Number(match.child_without_bed_rate ?? match.child_without_bed ?? 0) || 0
      } : d);
      const next={...prev,destinations};
      return {...next,hotelAmount:String(calculateHotelAmount(next)||""),...(() => {const c=calculateChildBedAmounts(next);return {extraBedAmount:String(c.extraBed||""),childWithBedAmount:String(c.childWithBed||""),childWithoutBedAmount:String(c.childWithoutBed||"")}})(),netCost:calculateQuotationNetCost(next),totalAmount:calculateQuotationTotal(next)};
    });
  }

  function updateQuotationDestination(index, field, value) {
    setQuotationForm((prev) => {
      const destinations = prev.destinations.map((item, i) => i === index ? { ...item, [field]: value } : item);
      if ((field === "checkIn" || field === "checkOut") && destinations[index].checkIn && destinations[index].checkOut) {
        const start = new Date(destinations[index].checkIn);
        const end = new Date(destinations[index].checkOut);
        const nights = Math.max(0, Math.round((end - start) / 86400000));
        destinations[index].nights = String(nights);
      }
      const customerRooms = Math.max(1, Number(destinations[0]?.rooms) || Number(prev.rooms) || 1);
      const next = { ...prev, rooms: customerRooms, destinations };
      const hotelAmount = calculateHotelAmount(next);
      const childAmounts = calculateChildBedAmounts(next);
      return {
        ...next,
        hotelAmount: hotelAmount ? String(hotelAmount) : "",
        extraBedAmount: childAmounts.extraBed ? String(childAmounts.extraBed) : "",
        childWithBedAmount: childAmounts.childWithBed ? String(childAmounts.childWithBed) : "",
        childWithoutBedAmount: childAmounts.childWithoutBed ? String(childAmounts.childWithoutBed) : "",
        netCost: calculateQuotationNetCost(next),
        totalAmount: calculateQuotationTotal(next)
      };
    });
  }

  function adjustQuotationRooms(index, type, delta) {
    setQuotationForm((prev) => {
      const destinations = prev.destinations.map((item, i) => {
        if (i !== index) return item;
        const key = type === "single" ? "singleRooms" : type === "double" ? "doubleRooms" : type === "extra" ? "extraBed" : type === "childWith" ? "childWithBed" : "childWithoutBed";
        const nextCount = Math.max(0, (Number(item[key]) || 0) + delta);
        const singleRooms = type === "single" ? nextCount : (Number(item.singleRooms) || 0);
        const doubleRooms = type === "double" ? nextCount : (Number(item.doubleRooms) || 0);
        const extraBed = type === "extra" ? nextCount : (Number(item.extraBed) || 0);
        const childWithBed = type === "childWith" ? nextCount : (Number(item.childWithBed) || 0);
        const childWithoutBed = type === "childWithout" ? nextCount : (Number(item.childWithoutBed) || 0);
        const allocationParts = [];
        if (singleRooms > 0) allocationParts.push(`${String(singleRooms).padStart(2,"0")} Single`);
        if (doubleRooms > 0) allocationParts.push(`${String(doubleRooms).padStart(2,"0")} Double`);
        if (extraBed > 0) allocationParts.push(`${String(extraBed).padStart(2,"0")} Extra Bed`);
        if (childWithBed > 0) allocationParts.push(`${String(childWithBed).padStart(2,"0")} Child With Bed`);
        if (childWithoutBed > 0) allocationParts.push(`${String(childWithoutBed).padStart(2,"0")} Child Without Bed`);
        return { ...item, singleRooms, doubleRooms, extraBed, childWithBed, childWithoutBed, rooms: singleRooms + doubleRooms, roomAllocation: allocationParts.join(" + ") };
      });
      const next = { ...prev, destinations };
      const hotelAmount = calculateHotelAmount(next);
      const childAmounts = calculateChildBedAmounts(next);
      return { ...next, hotelAmount: hotelAmount ? String(hotelAmount) : "", extraBedAmount: childAmounts.extraBed ? String(childAmounts.extraBed) : "", childWithBedAmount: childAmounts.childWithBed ? String(childAmounts.childWithBed) : "", childWithoutBedAmount: childAmounts.childWithoutBed ? String(childAmounts.childWithoutBed) : "", netCost: calculateQuotationNetCost(next), totalAmount: calculateQuotationTotal(next) };
    });
  }

  function addQuotationDestination() {
    setQuotationForm((prev) => ({ ...prev, destinations: [...prev.destinations, emptyQuotationDestination()] }));
  }

  function removeQuotationDestination(index) {
    setQuotationForm((prev) => ({ ...prev, destinations: prev.destinations.length <= 1 ? prev.destinations : prev.destinations.filter((_, i) => i !== index) }));
  }

  function openQuotation(enquiry, existingQuote = null) {
    if (existingQuote) {
      setEditingQuotationId(existingQuote.id);
      setQuotationCustomer({
        id: existingQuote.enquiry_id,
        name: existingQuote.customer_name,
        phone: existingQuote.phone,
        email: existingQuote.email,
        destination: existingQuote.destination,
        travel_date: existingQuote.travelDate || existingQuote.travel_date || "",
        adults: existingQuote.adults,
        children: existingQuote.children,
        rooms: existingQuote.rooms,
        message: existingQuote.notes || ""
      });
      setQuotationForm({
        ...existingQuote,
        travelDate: existingQuote.travelDate || existingQuote.travel_date || "",
        destinations: Array.isArray(existingQuote.destinations) && existingQuote.destinations.length ? existingQuote.destinations : [emptyQuotationDestination()],
        rooms: Math.max(1, Number(existingQuote.rooms) || Number(existingQuote.destinations?.[0]?.rooms) || 1),
        childAges: Array.isArray(existingQuote.childAges) ? existingQuote.childAges : [],
        quotationDate: existingQuote.quotationDate || new Date().toISOString().slice(0,10),
        inclusions: existingQuote.inclusions || 'Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation as mentioned\nSightseeing as mentioned',
        exclusions: existingQuote.exclusions || 'Airfare/train tickets\nPersonal expenses\nLunch & dinner except houseboat\nEntry tickets\nBoating/activity charges\nCamera charges\nAnything not mentioned under inclusions\nGST, if applicable',
        notes: existingQuote.notes || "",
        totalAmountManual: Boolean(existingQuote.totalAmountManual)
      });
      return;
    }
    setEditingQuotationId(null);
    setQuotationCustomer(enquiry);
    const initial = emptyQuotationDestination();
    initial.destination = enquiry?.destination || "";
    initial.checkIn = enquiry?.travel_date || "";
    initial.doubleRooms = enquiry?.rooms ?? 1;
    initial.rooms = enquiry?.rooms ?? 1;
    initial.hotelCategory = enquiry?.hotel_category || "3 Star";
    initial.mealPlan = enquiry?.meal_plan || "CP";
    const childCount = Number(enquiry?.children ?? 0) || 0;
    setQuotationForm({
      customerName: enquiry?.name || "", phone: enquiry?.phone || "", email: enquiry?.email || "", travelDate: enquiry?.travel_date || new Date().toISOString().slice(0,10),
      adults: enquiry?.adults ?? 2, children: childCount, rooms: Math.max(1, Number(enquiry?.rooms) || 1), childAges: Array.from({ length: childCount }, () => ""),
      destinations: [initial], selectedDestination: enquiry?.destination || "", selectedItineraryKey: "", selectedVehicleRateId: "", vehicleType: "Sedan", pickupPoint: "", dropPoint: "", vehicleDays: "",
      hotelAmount: "", extraBedAmount: "", childWithBedAmount: "", childWithoutBedAmount: "", vehicleAmount: "", netCost: "", markupType: "percent", markupValue: "", totalAmount: "", totalAmountManual: false,
      quotationDate: enquiry?.travel_date || new Date().toISOString().slice(0,10), inclusions: 'Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation as mentioned\nSightseeing as mentioned', exclusions: 'Airfare/train tickets\nPersonal expenses\nLunch & dinner except houseboat\nEntry tickets\nBoating/activity charges\nCamera charges\nAnything not mentioned under inclusions\nGST, if applicable', notes: enquiry?.message || ""
    });
  }

  function modifyQuotation(quote) {
    openQuotation(null, quote);
  }

  function deleteQuotation(quote) {
    if (!quote?.id) return;
    if (!window.confirm(`Delete quotation ${quote.serial_no || ""}? This cannot be undone.`)) return;
    const next = quotations.filter(item => String(item.id) !== String(quote.id));
    setQuotations(next);
    localStorage.setItem("sneh_travel_quotations", JSON.stringify(next));
    if (viewQuotation?.id === quote.id) setViewQuotation(null);
    if (editingQuotationId === quote.id) { setEditingQuotationId(null); setQuotationCustomer(null); }
    alert("Quotation deleted successfully.");
  }

  function emailQuotation(quote) {
    sendQuotationMail(quote);
  }

  function saveQuotation() {
    if (!quotationCustomer) return;
    if (!quotationForm.travelDate) { alert("Please select the Travel Date before saving the quotation."); return; }
    if (!quotationForm.selectedDestination) { alert("Please select a destination first."); return; }
    if (!quotationForm.selectedItineraryKey) { alert("Please select the saved Night / Day Vehicle Itinerary Rate Matrix."); return; }
    if (!quotationForm.selectedVehicleRateId) { alert("Please select a vehicle rate from the saved itinerary matrix."); return; }
    const hotelAmount = calculateHotelAmount(quotationForm);
    const childAmounts = calculateChildBedAmounts(quotationForm);
    const calculatedTotal = calculateQuotationTotal(quotationForm);
    const finalQuotationTotal = quotationForm.totalAmountManual && String(quotationForm.totalAmount ?? "").trim() !== "" ? Number(quotationForm.totalAmount) || 0 : calculatedTotal;
    const form = {
      ...quotationForm,
      travelDate: quotationForm.travelDate || "",
      hotelAmount: String(hotelAmount || ""),
      extraBedAmount: String(childAmounts.extraBed || ""),
      childWithBedAmount: String(childAmounts.childWithBed || ""),
      childWithoutBedAmount: String(childAmounts.childWithoutBed || ""),
      netCost: calculateQuotationNetCost(quotationForm),
      totalAmount: finalQuotationTotal
    };
    if (editingQuotationId) {
      const existing = quotations.find(q => String(q.id) === String(editingQuotationId));
      if (!existing) { alert("Quotation could not be found."); return; }
      const updated = {
        ...existing,
        ...form,
        id: existing.id,
        serial_no: existing.serial_no,
        enquiry_id: existing.enquiry_id ?? quotationCustomer.id,
        customer_name: form.customerName || existing.customer_name || "Customer",
        phone: form.phone || "",
        email: form.email || "",
        destination: form.selectedDestination || (form.destinations || []).find(d => String(d.destination || "").trim())?.destination || "",
        price: form.totalAmount,
        updated_at: new Date().toISOString()
      };
      const next = quotations.map(q => String(q.id) === String(existing.id) ? updated : q);
      setQuotations(next);
      localStorage.setItem("sneh_travel_quotations", JSON.stringify(next));
      setEditingQuotationId(null);
      setQuotationCustomer(null);
      setActiveTab("quotations");
      setViewQuotation(updated);
      alert(`Quotation ${updated.serial_no} updated successfully.`);
      return;
    }
    const quotation = {
      id: Date.now(), serial_no: makeAdminSerial("QUO", quotations), enquiry_id: quotationCustomer.id,
      customer_name: form.customerName || "Customer", phone: form.phone || "", email: form.email || "",
      destination: form.selectedDestination || (form.destinations || []).find(d => String(d.destination || "").trim())?.destination || "",
      ...form, price: form.totalAmount, created_at: new Date().toISOString()
    };
    const next = [quotation, ...quotations];
    setQuotations(next); localStorage.setItem("sneh_travel_quotations", JSON.stringify(next));
    setEditingQuotationId(null);
    setQuotationCustomer(null); setActiveTab("quotations");
    alert(`Quotation ${quotation.serial_no} saved successfully.`);
  }


  function isLegacySupplierRow(item) {
    const name = String(item?.serviceName || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
    return ["hotel jan alleppey", "hotel mid season thekkay", "hotel king munnar"].some(blocked => name.includes(blocked));
  }
  function supplierPaidAmount(item) {
    if (item?.paidAmountOverride !== undefined && item?.paidAmountOverride !== null && item?.paidAmountOverride !== "") return Math.max(0, Number(item.paidAmountOverride) || 0);
    return (item?.payments || []).reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0);
  }
  function supplierLastPaymentDate(item) {
    if (item?.lastPaymentDateOverride) return item.lastPaymentDateOverride;
    return (item?.payments || []).slice().sort((a,b) => String(b.paymentDate || "").localeCompare(String(a.paymentDate || "")))[0]?.paymentDate || "";
  }
  function supplierBalance(item) { return Math.max(0, (Number(item?.amountPayable) || 0) - supplierPaidAmount(item)); }
  function supplierPayableStatus(item) { const payable=Number(item?.amountPayable)||0; const paid=supplierPaidAmount(item); return paid>=payable && payable>0 ? "Paid" : paid>0 ? "Partially Paid" : "Pending"; }
  function updateSupplierPaidDetails(id, field, value) {
    setSupplierPayables(prev => {
      const next = prev.map(item => {
        if (String(item.id) !== String(id)) return item;
        if (field === "paidAmount") return { ...item, paidAmountOverride: Math.max(0, Number(value) || 0), updatedAt: new Date().toISOString() };
        return { ...item, lastPaymentDateOverride: value || "", updatedAt: new Date().toISOString() };
      });
      localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(next));
      return next;
    });
  }
  function buildSupplierPayableRows(booking) {
    if (!booking?.id) return [];
    const existing = supplierPayables.filter(item => String(item.bookingId) === String(booking.id));
    const byService = new Map(existing.map(item => [String(item.serviceId), item]));
    const hotels = (booking.hotelServices || []).filter(h => h && (h.city || h.hotelName || Number(h.amount) || Number(h.purchaseAmount)));
    const vehicles = (booking.vehicleServices || []).filter(v => v && (v.vehicleType || v.pickup || Number(v.amount) || Number(v.purchaseAmount)));
    const services = [...hotels, ...vehicles];
    return services.map((service, index) => {
      const isHotel = index < hotels.length;
      const serviceId = String(service.id || `${isHotel ? "hotel" : "vehicle"}-${index}`);
      const oldItem = byService.get(serviceId);
      const roomPurchase = isHotel ? (Number(service.roomPurchaseAmount ?? service.purchaseAmount) || 0) : 0;
      const extraBedPurchase = isHotel ? (Number(service.extraBedPurchaseAmount ?? service.extraBedAmount) || 0) : 0;
      const childWithBedPurchase = isHotel ? (Number(service.childWithBedPurchaseAmount ?? service.childWithBedAmount) || 0) : 0;
      const childWithoutBedPurchase = isHotel ? (Number(service.childWithoutBedPurchaseAmount ?? service.childWithoutBedAmount) || 0) : 0;
      const purchaseAmount = isHotel ? (Number(service.purchaseAmount) || (Number(service.amount)||0) + extraBedPurchase + childWithBedPurchase + childWithoutBedPurchase) : (Number(service.purchaseAmount) || Number(service.amount) || 0);
      const serviceCity = String(service.city || "").trim();
      const serviceLabel = isHotel ? `${serviceCity || service.hotelName || "Hotel"} Hotel` : `${service.vehicleType || "Cab"} Cab`;
      return {
        id: oldItem?.id || `SUP-${booking.id}-${index}-${Date.now()}`, bookingId: booking.id, bookingNo: booking.serial_no || "", quotationNo: booking.quotationNo || "",
        customerName: booking.customer_name || "Customer", destination: booking.destination || "", travelDate: booking.travelDate || "",
        serviceId, serviceType: isHotel ? "Hotel" : "Cab", supplierName: oldItem?.supplierName || (isHotel ? (service.hotelName || "Hotel Supplier") : "Cab Supplier"),
        serviceName: oldItem?.serviceName || serviceLabel, city: oldItem?.city || serviceCity, nights: oldItem?.nights !== undefined ? oldItem.nights : (service.nights || 0),
        checkIn: oldItem?.checkIn || service.checkIn || service.check_in || booking.checkIn || "", checkOut: oldItem?.checkOut || service.checkOut || service.check_out || booking.checkOut || "",
        roomPurchaseAmount: roomPurchase, extraBedPurchaseAmount: extraBedPurchase, childWithBedPurchaseAmount: childWithBedPurchase, childWithoutBedPurchaseAmount: childWithoutBedPurchase,
        roomCount: Number(service.rooms || service.roomCount || booking.rooms || 0) || 0, extraBedCount: Number(service.extraBed || service.extraBedCount || 0) || 0, childWithBedCount: Number(service.childWithBed || service.childWithBedCount || 0) || 0, childWithoutBedCount: Number(service.childWithoutBed || service.childWithoutBedCount || 0) || 0,
        amountPayable: purchaseAmount, salesAmount: oldItem?.salesAmount ?? (Number(service.amount || service.saleAmount || 0) || 0),
        customerAdvance: Number(booking.advancePaid) || 0, customerBalance: Math.max(0, (Number(booking.finalSaleAmount || booking.totalAmount || booking.amount) || 0) - (Number(booking.advancePaid) || 0)),
        paymentDeadline: oldItem?.paymentDeadline || service.checkIn || service.check_in || booking.travelDate || "", paidAmountOverride: oldItem?.paidAmountOverride, lastPaymentDateOverride: oldItem?.lastPaymentDateOverride || "",
        payments: Array.isArray(oldItem?.payments) ? oldItem.payments : [], notes: oldItem?.notes || "", updatedAt: new Date().toISOString()
      };
    });
  }
  function syncSupplierPayablesForBooking(booking) {
    if (!booking?.id) return [];
    const nextForBooking = buildSupplierPayableRows(booking);
    const currentIds = new Set(nextForBooking.map(item => String(item.serviceId)));
    const preservedExtras = supplierPayables.filter(item => {
      if (String(item.bookingId) !== String(booking.id) || currentIds.has(String(item.serviceId))) return false;
      return !isLegacySupplierRow(item);
    });
    const next = [...nextForBooking, ...preservedExtras, ...supplierPayables.filter(item => String(item.bookingId) !== String(booking.id))];
    setSupplierPayables(next);
    localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(next));
    persistSupplierLedgerRows(nextForBooking);
    return nextForBooking;
  }
  async function persistSupplierLedgerRows(rows) {
    if (!supabase || !Array.isArray(rows) || !rows.length) return;
    try {
      for (const row of rows) {
        const payload = { booking_id: row.bookingId, booking_no: row.bookingNo || null, quotation_no: row.quotationNo || null, customer_name: row.customerName || null, destination: row.destination || null, supplier_name: row.supplierName || null, service_type: row.serviceType || null, service_name: row.serviceName || null, city: row.city || null, check_in: row.checkIn || null, check_out: row.checkOut || null, rooms: Number(row.roomCount)||0, room_purchase: Number(row.roomPurchaseAmount)||0, extra_bed_count: Number(row.extraBedCount)||0, extra_bed_purchase: Number(row.extraBedPurchaseAmount)||0, child_with_bed_count: Number(row.childWithBedCount)||0, child_with_bed_purchase: Number(row.childWithBedPurchaseAmount)||0, child_without_bed_count: Number(row.childWithoutBedCount)||0, child_without_bed_purchase: Number(row.childWithoutBedPurchaseAmount)||0, purchase_amount: Number(row.amountPayable)||0, sale_amount: Number(row.salesAmount)||0, travel_date: row.travelDate || null, payment_deadline: row.paymentDeadline || null, notes: row.notes || null, payments: row.payments || [], updated_at: new Date().toISOString() };
        const existingId = String(row.id||"").startsWith("SUP-") ? null : row.id;
        if (existingId) { const { error } = await supabase.from("supplier_ledger_entries").upsert({...payload,id:existingId}); if (error) throw error; }
        else { const { error } = await supabase.from("supplier_ledger_entries").upsert(payload,{onConflict:"booking_id,service_name"}); if (error) throw error; }
      }
    } catch(e) { console.warn("Supplier ledger Supabase sync skipped:",e?.message||e); }
  }

  function updateSupplierPayable(id, field, value) { setSupplierPayables(prev => { const next=prev.map(item=>String(item.id)===String(id)?{...item,[field]:value,updatedAt:new Date().toISOString()}:item); localStorage.setItem("sneh_travel_supplier_payables",JSON.stringify(next)); return next; }); }
  function getSupplierBank(supplierName) {
    const key = String(supplierName || "").trim().toLowerCase();
    return supplierBanks.find(b => String(b.supplierName || "").trim().toLowerCase() === key) || null;
  }
  function openSupplierBank(supplierName) {
    const existing = getSupplierBank(supplierName);
    setSupplierBankTarget(supplierName || "");
    setSupplierBankForm(existing || { supplierName: supplierName || "", accountName: "", bankName: "", accountNumber: "", ifsc: "", branch: "", upi: "", phone: "", notes: "" });
  }
  function saveSupplierBank() {
    const name = String(supplierBankForm.supplierName || supplierBankTarget || "").trim();
    if (!name) { alert("Please enter supplier name."); return; }
    const record = { ...supplierBankForm, supplierName: name, updatedAt: new Date().toISOString() };
    const key = name.toLowerCase();
    const exists = supplierBanks.some(b => String(b.supplierName || "").trim().toLowerCase() === key);
    const next = exists ? supplierBanks.map(b => String(b.supplierName || "").trim().toLowerCase() === key ? { ...b, ...record } : b) : [record, ...supplierBanks];
    setSupplierBanks(next);
    localStorage.setItem("sneh_travel_supplier_banks", JSON.stringify(next));
    setSupplierBankTarget(null);
    alert("Supplier bank details saved successfully.");
  }
  function addSupplierPayable() {
    const booking = bookings[0];
    const item = {
      id: `SUP-${Date.now()}`,
      bookingId: booking?.id || "manual",
      bookingNo: booking?.serial_no || "Manual",
      quotationNo: booking?.quotationNo || "",
      customerName: booking?.customer_name || "",
      destination: booking?.destination || "",
      travelDate: booking?.travelDate || "",
      serviceId: `manual-${Date.now()}`,
      serviceType: "Other",
      supplierName: "",
      serviceName: "",
      city: "",
      amountPayable: 0,
      salesAmount: 0,
      payments: [],
      notes: "",
      updatedAt: new Date().toISOString()
    };
    const next = [item, ...supplierPayables];
    setSupplierPayables(next);
    localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(next));
  }
  function deleteSupplierPayable(id) {
    const item = supplierPayables.find(x => String(x.id) === String(id));
    if (!item || !window.confirm(`Delete supplier payable ${item.serviceName || item.supplierName || "record"}?`)) return;
    setSupplierPayables(prev => { const next=prev.filter(x=>String(x.id)!==String(id)); localStorage.setItem("sneh_travel_supplier_payables",JSON.stringify(next)); return next; });
  }
  function openSupplierPayment(item) { setSupplierPaymentTarget(item); setSupplierPaymentForm({amount:"",paymentDate:new Date().toISOString().slice(0,10),paymentMode:"Bank Transfer",reference:"",notes:""}); }
  function openCustomerPaymentForBooking(booking) {
    editBooking(booking);
    const form = {...emptyBookingForm(), ...booking, hotelServices: booking.hotelServices || [], vehicleServices: booking.vehicleServices || [], finalSaleAmount: booking.finalSaleAmount ?? booking.totalAmount ?? booking.amount ?? 0, balanceAmount: booking.balanceAmount ?? 0};
    const b = calculateBookingBreakup(form);
    const total = Number(form.finalSaleAmount || b.finalAmount) || 0;
    const alreadyPaid = Number(form.advancePaid) || 0;
    setCustomerPaymentForm({ amount: alreadyPaid > 0 ? "" : String(total > 0 ? total : ""), paymentDate: new Date().toISOString().slice(0,10), paymentMode: "Bank Transfer", reference: "", notes: "" });
    setCustomerPaymentModal(true);
  }
  function openCustomerPayment() {
    const b = calculateBookingBreakup(bookingForm);
    const total = Number(bookingForm.finalSaleAmount || b.finalAmount) || 0;
    const alreadyPaid = Number(bookingForm.advancePaid) || 0;
    setCustomerPaymentForm({ amount: alreadyPaid > 0 ? "" : String(total > 0 ? total : ""), paymentDate: new Date().toISOString().slice(0,10), paymentMode: "Bank Transfer", reference: "", notes: "" });
    setCustomerPaymentModal(true);
  }
  function saveCustomerPayment() {
    const b = calculateBookingBreakup(bookingForm);
    const total = Number(bookingForm.finalSaleAmount || b.finalAmount) || 0;
    const amount = Number(customerPaymentForm.amount) || 0;
    const previous = Number(bookingForm.advancePaid) || 0;
    const remaining = Math.max(0, total - previous);
    if (amount <= 0) { alert("Please enter a payment amount."); return; }
    if (amount > remaining) { alert(`Payment cannot exceed the outstanding balance of ₹${remaining.toLocaleString("en-IN")}.`); return; }
    const newPaid = previous + amount;
    const newBalance = Math.max(0, total - newPaid);
    const payment = {
      id: `CPAY-${Date.now()}`,
      bookingId: editingBookingId || bookingForm.id || "",
      bookingNo: bookingForm.serial_no || "",
      quotationNo: bookingForm.quotationNo || "",
      customerName: bookingForm.customer_name || bookingCustomer?.name || "Customer",
      amount,
      paymentDate: customerPaymentForm.paymentDate || new Date().toISOString().slice(0,10),
      paymentMode: customerPaymentForm.paymentMode || "Bank Transfer",
      reference: customerPaymentForm.reference || "",
      notes: customerPaymentForm.notes || "",
      createdAt: new Date().toISOString()
    };
    setCustomerPaymentHistory(prev => {
      const next = [payment, ...prev];
      localStorage.setItem("sneh_travel_customer_payments", JSON.stringify(next));
      return next;
    });
    const updatedForm = {...bookingForm, advancePaid: newPaid, balanceAmount: newBalance, paymentStatus: newBalance <= 0 && total > 0 ? "Fully Paid" : newPaid > 0 ? "Partial Paid" : "Pending"};
    setBookingForm(updatedForm);
    if (editingBookingId) {
      const savedBooking = {...bookingForm, ...updatedForm, advancePaid: newPaid, balanceAmount: newBalance, paymentStatus: updatedForm.paymentStatus, updated_at: new Date().toISOString()};
      setBookings(prev => {
        const next = prev.map(item => String(item.id) === String(editingBookingId) ? {...item, ...savedBooking} : item);
        localStorage.setItem("sneh_travel_bookings", JSON.stringify(next));
        return next;
      });
      setSupplierPayables(prev => {
        const next = prev.map(item => String(item.bookingId) === String(editingBookingId) ? {...item, customerAdvance:newPaid, customerBalance:newBalance, updatedAt:new Date().toISOString()} : item);
        localStorage.setItem("sneh_travel_supplier_payables", JSON.stringify(next));
        return next;
      });
    }
    setCustomerPaymentModal(false);
    alert(`Payment of ₹${amount.toLocaleString("en-IN")} recorded successfully.`);
  }
  function saveSupplierPayment() {
    if (!supplierPaymentTarget) return;
    const amount=Number(supplierPaymentForm.amount)||0, remaining=supplierBalance(supplierPaymentTarget);
    if(amount<=0){alert("Please enter a payment amount.");return;} if(amount>remaining){alert(`Payment cannot exceed the outstanding balance of ₹${remaining.toLocaleString("en-IN")}.`);return;}
    const payment={id:`SPAY-${Date.now()}`,amount,paymentDate:supplierPaymentForm.paymentDate||new Date().toISOString().slice(0,10),paymentMode:supplierPaymentForm.paymentMode||"Bank Transfer",reference:supplierPaymentForm.reference||"",notes:supplierPaymentForm.notes||"",bookingNo:supplierPaymentTarget.bookingNo||supplierLedgerBooking?.serial_no||"",quotationNo:supplierPaymentTarget.quotationNo||supplierLedgerBooking?.quotationNo||"",supplierName:supplierPaymentTarget.supplierName||"Supplier",serviceName:supplierPaymentTarget.serviceName||supplierPaymentTarget.serviceType||"Service",customerName:supplierPaymentTarget.customerName||supplierLedgerBooking?.customer_name||"Customer",createdAt:new Date().toISOString()};
    setSupplierPayables(prev=>{const next=prev.map(item=>{
      if(String(item.id)!==String(supplierPaymentTarget.id)) return item;
      const currentPaid = supplierPaidAmount(item);
      return {...item,paidAmountOverride:currentPaid + amount,lastPaymentDateOverride:payment.paymentDate,payments:[...(item.payments||[]),payment],updatedAt:new Date().toISOString()};
    });localStorage.setItem("sneh_travel_supplier_payables",JSON.stringify(next));const changed=next.find(x=>String(x.id)===String(supplierPaymentTarget.id));if(changed)persistSupplierLedgerRows([changed]);return next;});
    setSupplierPaymentTarget(null); alert("Supplier payment recorded successfully.");
  }
  function deleteSupplierPayment(itemId,paymentId){
    if(!window.confirm("Delete this supplier payment record?"))return;
    setSupplierPayables(prev=>{
      const next=prev.map(item=>{
        if(String(item.id)!==String(itemId)) return item;
        const payments=(item.payments||[]).filter(p=>String(p.id)!==String(paymentId));
        const paid=payments.reduce((sum,p)=>sum+(Number(p.amount)||0),0);
        const last=payments.slice().sort((a,b)=>String(b.paymentDate||"").localeCompare(String(a.paymentDate||"")))[0]?.paymentDate || "";
        return {...item,paidAmountOverride:paid,lastPaymentDateOverride:last,payments,updatedAt:new Date().toISOString()};
      });
      localStorage.setItem("sneh_travel_supplier_payables",JSON.stringify(next));
      return next;
    });
  }
  function supplierTotalsForBooking(bookingId){return supplierPayables.filter(item=>String(item.bookingId)===String(bookingId)).reduce((a,item)=>({payable:a.payable+(Number(item.amountPayable)||0),paid:a.paid+supplierPaidAmount(item),balance:a.balance+supplierBalance(item)}),{payable:0,paid:0,balance:0});}
  function openSupplierLedger(booking){
    if(!booking) return;
    const rows=syncSupplierPayablesForBooking(booking);
    setSupplierPaymentTarget(null);
    setSupplierLedgerBooking(booking);
    setActiveTab("supplier-ledger");
  }
  function closeSupplierLedger(){ setSupplierLedgerBooking(null); setActiveTab("bookings"); }
  function updateSupplierDeadline(id,value){ updateSupplierPayable(id,"paymentDeadline",value); }
  function supplierLedgerTotals(booking){
    let rows=supplierPayables.filter(item=>String(item.bookingId)===String(booking?.id) && !isLegacySupplierRow(item));
    if(!rows.length && booking) rows=buildSupplierPayableRows(booking);
    const purchase=rows.reduce((sum,item)=>sum+(Number(item.amountPayable)||0),0);
    const paid=rows.reduce((sum,item)=>sum+supplierPaidAmount(item),0);
    const outstanding=Math.max(0,purchase-paid);
    const sale=Number(booking?.finalSaleAmount||booking?.totalAmount||booking?.amount||0)||0;
    const profit=sale-purchase;
    const margin=sale>0 ? (profit/sale)*100 : 0;
    return {rows,purchase,paid,outstanding,sale,profit,margin};
  }
  function supplierServiceSales(item, booking, totalPurchase) {
    const purchase=Number(item?.amountPayable)||0;
    if (!purchase || !totalPurchase) return 0;
    const sale=Number(booking?.finalSaleAmount||booking?.totalAmount||booking?.amount||0)||0;
    return sale * purchase / totalPurchase;
  }


  async function refreshAdminData() {
    try {
      const savedSupplierPayables = JSON.parse(localStorage.getItem("sneh_travel_supplier_payables") || "[]");
      const cleanedSupplierPayables = Array.isArray(savedSupplierPayables) ? savedSupplierPayables : [];
      setSupplierPayables(cleanedSupplierPayables);
      if (supabase) { try { const { data: ledgerRows } = await supabase.from("supplier_ledger_entries").select("*").order("created_at", { ascending:false }); if (Array.isArray(ledgerRows) && ledgerRows.length) { const mapped=ledgerRows.map(r=>({id:r.id,bookingId:r.booking_id,bookingNo:r.booking_no,quotationNo:r.quotation_no,customerName:r.customer_name,destination:r.destination,supplierName:r.supplier_name,serviceType:r.service_type,serviceName:r.service_name,city:r.city,checkIn:r.check_in,checkOut:r.check_out,roomCount:r.rooms,roomPurchaseAmount:r.room_purchase,extraBedCount:r.extra_bed_count,extraBedPurchaseAmount:r.extra_bed_purchase,childWithBedCount:r.child_with_bed_count,childWithBedPurchaseAmount:r.child_with_bed_purchase,childWithoutBedCount:r.child_without_bed_count,childWithoutBedPurchaseAmount:r.child_without_bed_purchase,amountPayable:r.purchase_amount,salesAmount:r.sale_amount,travelDate:r.travel_date,paymentDeadline:r.payment_deadline,notes:r.notes,payments:r.payments||[],updatedAt:r.updated_at})); setSupplierPayables(prev=>{const map=new Map(prev.map(x=>[String(x.id),x])); mapped.forEach(x=>map.set(String(x.id),x)); const merged=[...map.values()]; localStorage.setItem("sneh_travel_supplier_payables",JSON.stringify(merged)); return merged;}); } } catch(e) { console.warn("Supplier ledger load skipped:",e?.message||e); } }

      // Re-bind the open ledger to the latest booking object so the ledger
      // recalculates from the freshly loaded supplier payment records.
      if (supplierLedgerBooking) {
        const latestBooking = bookings.find(b => String(b.id) === String(supplierLedgerBooking.id)) || supplierLedgerBooking;
        setSupplierLedgerBooking({...latestBooking});
      }

      // Close a stale payment-details popup; the next click reads live data.
      setSupplierPaymentHistoryTarget(null);

      if (typeof onRefresh === "function") await onRefresh();
      await loadAdminDashboard();
    } catch (error) {
      console.error("Unable to refresh supplier payment ledger:", error);
      alert("Unable to refresh the Supplier Payment Ledger. Please try again.");
    }
  }

  function formatMailDate(value) {
    if (!value) return "-";
    const d = new Date(`${value}T00:00:00`);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }

  function mailtoWithDetails(recipient, subject, body) {
    const to = String(recipient || "").trim() || "snehtravel@gmail.com";
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function buildHotelConfirmationText(booking, hotel) {
    return [
      "HOTEL CONFIRMATION",
      "01 | BOOKING DETAILS",
      `Confirmation No.: ${hotel?.confirmationNo || booking?.confirmationNo || "To be confirmed"}`,
      `Confirmed By: ${hotel?.confirmedBy || booking?.confirmedBy || "Sneh Travel"}`,
      `Booking No.: ${booking?.serial_no || "-"}`,
      `Quotation No.: ${booking?.quotationNo || "-"}`,
      "",
      "02 | HOTEL & STAY DETAILS",
      `Hotel Name: ${hotel?.hotelName || "-"}`,
      `City: ${hotel?.city || booking?.destination || "-"}`,
      `Check-in: ${formatMailDate(hotel?.checkIn)}`,
      `Check-out: ${formatMailDate(hotel?.checkOut)}`,
      `No. of Nights: ${hotel?.nights || 0}`,
      `No. of Rooms: ${booking?.rooms || "-"}`,
      `Room Allocation: ${hotel?.roomAllocation || "-"}`,
      `Room Category: ${hotel?.category || "-"}`,
      `Meal Plan: ${hotel?.mealPlan || "-"}`,
      "",
      "03 | GUEST DETAILS",
      `Guest Name: ${booking?.customer_name || "-"}`,
      `Mobile: ${booking?.phone || "-"}`,
      `Email: ${booking?.email || "-"}`,
      `Adults: ${booking?.adults || 0}`,
      `Children: ${booking?.children || 0}`,
      `Child Ages: ${booking?.childAges || "-"}`,
      hotel?.note ? `Special Remarks: ${hotel.note}` : "",
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].filter(Boolean).join("\n");
  }

  function buildLandConfirmationText(booking) {
    const hotelLines = (booking?.hotelServices || []).map((h, i) => [
      `HOTEL ${String(i + 1).padStart(2, "0")}`,
      `Hotel Name: ${h.hotelName || "-"}`,
      `City: ${h.city || "-"}`,
      `Check-in: ${formatMailDate(h.checkIn)}`,
      `Check-out: ${formatMailDate(h.checkOut)}`,
      `No. of Nights: ${h.nights || 0}`,
      `No. of Rooms: ${booking.rooms || "-"}`,
      `Room Allocation: ${h.roomAllocation || "-"}`,
      `Room Category: ${h.category || "-"}`,
      `Meal Plan: ${h.mealPlan || "-"}`,
      `Hotel Confirmation No.: ${h.confirmationNo || "-"}`,
      `Confirmed By: ${h.confirmedBy || booking.confirmedBy || "-"}`
    ].join("\n")).join("\n\n");
    const vehicleLines = (booking?.vehicleServices || []).map((v, i) => [
      `VEHICLE ${String(i + 1).padStart(2, "0")}`,
      `Vehicle: ${v.vehicleType || "-"}`,
      `Pickup: ${v.pickup || "-"}`,
      `Drop: ${v.drop || "-"}`,
      `Days: ${v.days || 0}`,
      `Vehicle / Vendor Confirmation No.: ${v.reference || "-"}`,
      `Confirmed By: ${v.confirmedBy || booking.confirmedBy || "-"}`,
      v.note ? `Remarks: ${v.note}` : ""
    ].filter(Boolean).join("\n")).join("\n\n");
    return [
      "LAND BOOKING CONFIRMATION",
      "01 | BOOKING & GUEST DETAILS",
      `Booking Confirmation No.: ${booking?.confirmationNo || booking?.serial_no || "-"}`,
      `Booking No.: ${booking?.serial_no || "-"}`,
      `Quotation No.: ${booking?.quotationNo || "-"}`,
      `Confirmed By: ${booking?.confirmedBy || "Sneh Travel"}`,
      `Guest Name: ${booking?.customer_name || "-"}`,
      `Mobile: ${booking?.phone || "-"}`,
      `Email: ${booking?.email || "-"}`,
      `Package: ${booking?.packageName || booking?.destination || "-"}`,
      `Travel Date: ${formatMailDate(booking?.travelDate)}`,
      `Adults: ${booking?.adults || 0}`,
      `Children: ${booking?.children || 0}`,
      `Child Ages: ${booking?.childAges || "-"}`,
      `Total Rooms: ${booking?.rooms || 0}`,
      `Room Allocation: ${booking?.roomAllocation || "-"}`,
      "",
      "02 | HOTEL ARRANGEMENTS",
      hotelLines || "No hotel services linked.",
      "",
      "03 | VEHICLE / LAND ARRANGEMENTS",
      vehicleLines || "No vehicle service linked.",
      "",
      "04 | PICKUP & DROP",
      `Pickup Point: ${booking?.pickupPoint || "-"}`,
      `Drop Point: ${booking?.dropPoint || "-"}`,
      "",
      "05 | DETAILED DAY-WISE ITINERARY",
      booking?.dayWiseItinerary || "-",
      booking?.notes ? `\nBooking Remarks:\n${booking.notes}` : "",
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].filter(Boolean).join("\n");
  }

  function buildUnifiedConfirmationText(booking) {
    const hotels = (booking?.hotelServices || []).map((h, i) => [
      `HOTEL ${String(i + 1).padStart(2, "0")}`,
      `Hotel Name: ${h.hotelName || "-"}`,
      `City: ${h.city || "-"}`,
      `Check-in: ${formatMailDate(h.checkIn)}`,
      `Check-out: ${formatMailDate(h.checkOut)}`,
      `No. of Nights: ${h.nights || 0}`,
      `No. of Rooms: ${booking?.rooms || "-"}`,
      `Room Allocation: ${h.roomAllocation || booking?.roomAllocation || "-"}`,
      `Room Category: ${h.category || "-"}`,
      `Meal Plan: ${h.mealPlan || "-"}`,
      `Hotel Confirmation No.: ${h.confirmationNo || "-"}`,
      `Confirmed By: ${h.confirmedBy || booking?.confirmedBy || "Sneh Travel"}`
    ].join("\n")).join("\n\n");

    const vehicles = (booking?.vehicleServices || []).map((v, i) => [
      `VEHICLE ${String(i + 1).padStart(2, "0")}`,
      `Vehicle: ${v.vehicleType || "-"}`,
      `Pickup: ${v.pickup || "-"}`,
      `Drop: ${v.drop || "-"}`,
      `Days: ${v.days || 0}`,
      `Vehicle / Vendor Confirmation No.: ${v.reference || "-"}`,
      `Confirmed By: ${v.confirmedBy || booking?.confirmedBy || "Sneh Travel"}`,
      v.note ? `Remarks: ${v.note}` : ""
    ].filter(Boolean).join("\n")).join("\n\n");

    return [
      "TRAVEL BOOKING CONFIRMATION",
      "01 | BOOKING & GUEST DETAILS",
      `Confirmation No.: ${booking?.confirmationNo || booking?.serial_no || "-"}`,
      `Booking No.: ${booking?.serial_no || "-"}`,
      `Quotation No.: ${booking?.quotationNo || "-"}`,
      `Confirmed By: ${booking?.confirmedBy || "Sneh Travel"}`,
      `Guest Name: ${booking?.customer_name || "-"}`,
      `Mobile: ${booking?.phone || "-"}`,
      `Email: ${booking?.email || "-"}`,
      `Package: ${booking?.packageName || booking?.destination || "-"}`,
      `Destination: ${booking?.destination || "-"}`,
      `Travel Date: ${formatMailDate(booking?.travelDate)}`,
      `Adults: ${booking?.adults || 0}`,
      `Children: ${booking?.children || 0}`,
      `Child Ages: ${booking?.childAges || "-"}`,
      `No. of Rooms: ${booking?.rooms || 0}`,
      `Room Allocation: ${booking?.roomAllocation || "-"}`,
      "",
      "02 | HOTEL CONFIRMATIONS",
      hotels || "No hotel services linked.",
      "",
      "03 | VEHICLE / LAND CONFIRMATION",
      vehicles || "No vehicle services linked.",
      "",
      "04 | PICKUP & DROP",
      `Pickup Point: ${booking?.pickupPoint || "-"}`,
      `Drop Point: ${booking?.dropPoint || "-"}`,
      "",
      "05 | DETAILED DAY-WISE ITINERARY",
      booking?.dayWiseItinerary || "-",
      "",
      "06 | INCLUSIONS",
      booking?.inclusions || "Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation as mentioned\nSightseeing as mentioned",
      "",
      "07 | EXCLUSIONS",
      booking?.exclusions || "-",
      booking?.notes ? `\nSpecial Notes: ${booking.notes}` : "",
      "",
      `Total Package Amount: Rs. ${Number(booking?.finalSaleAmount || booking?.totalAmount || 0).toLocaleString("en-IN")}`,
      `Advance Received: Rs. ${Number(booking?.advancePaid || 0).toLocaleString("en-IN")}`,
      `Balance Amount: Rs. ${Number(booking?.balanceAmount || 0).toLocaleString("en-IN")}`,
      `Booking Status: ${booking?.bookingStatus || "Pending"}`,
      `Payment Status: ${booking?.paymentStatus || "Pending"}`,
      "",
      "Thank you for choosing Sneh Travel.",
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].filter(Boolean).join("\n");
  }

  function buildPackageConfirmationText(booking) {
    const hotels = (booking?.hotelServices || []).map((h, i) => [
      `HOTEL ${String(i + 1).padStart(2, "0")}`,
      `Hotel Name: ${h.hotelName || "-"}`,
      `City: ${h.city || "-"}`,
      `Check-in: ${formatMailDate(h.checkIn)}`,
      `Check-out: ${formatMailDate(h.checkOut)}`,
      `No. of Nights: ${h.nights || 0}`,
      `No. of Rooms: ${booking.rooms || "-"}`,
      `Room Allocation: ${h.roomAllocation || "-"}`,
      `Room Category: ${h.category || "-"}`,
      `Meal Plan: ${h.mealPlan || "-"}`,
      `Confirmation No.: ${h.confirmationNo || "-"}`,
      `Confirmed By: ${h.confirmedBy || booking.confirmedBy || "-"}`
    ].join("\n")).join("\n\n");
    const vehicles = (booking?.vehicleServices || []).map((v, i) => [
      `VEHICLE ${String(i + 1).padStart(2, "0")}`,
      `Vehicle: ${v.vehicleType || "-"}`,
      `Pickup: ${v.pickup || "-"}`,
      `Drop: ${v.drop || "-"}`,
      `Days: ${v.days || 0}`,
      `Confirmation No.: ${v.reference || "-"}`,
      `Confirmed By: ${v.confirmedBy || booking.confirmedBy || "-"}`
    ].join("\n")).join("\n\n");
    return [
      "PACKAGE CONFIRMATION",
      "01 | BOOKING & GUEST DETAILS",
      `Package Confirmation No.: ${booking?.confirmationNo || booking?.serial_no || "-"}`,
      `Booking No.: ${booking?.serial_no || "-"}`,
      `Quotation No.: ${booking?.quotationNo || "-"}`,
      `Confirmed By: ${booking?.confirmedBy || "Sneh Travel"}`,
      `Guest Name: ${booking?.customer_name || "-"}`,
      `Mobile: ${booking?.phone || "-"}`,
      `Email: ${booking?.email || "-"}`,
      `Package: ${booking?.packageName || booking?.destination || "-"}`,
      `Destination: ${booking?.destination || "-"}`,
      `Travel Date: ${formatMailDate(booking?.travelDate)}`,
      `Adults: ${booking?.adults || 0}`,
      `Children: ${booking?.children || 0}`,
      `Child Ages: ${booking?.childAges || "-"}`,
      `No. of Rooms: ${booking?.rooms || 0}`,
      `Room Allocation: ${booking?.roomAllocation || "-"}`,
      "",
      "02 | HOTEL CONFIRMATIONS",
      hotels || "No hotel services linked.",
      "",
      "03 | VEHICLE / TRANSPORT CONFIRMATION",
      vehicles || "No vehicle services linked.",
      "",
      "04 | PICKUP & DROP",
      `Pickup: ${booking?.pickupPoint || "-"}`,
      `Drop: ${booking?.dropPoint || "-"}`,
      "",
      "05 | DETAILED DAY-WISE ITINERARY",
      booking?.dayWiseItinerary || "-",
      "",
      "06 | INCLUSIONS",
      booking?.inclusions || "Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation as mentioned\nSightseeing as mentioned",
      "",
      "07 | EXCLUSIONS",
      booking?.exclusions || "-",
      "",
      `Total Package Amount: Rs. ${Number(booking?.finalSaleAmount || booking?.totalAmount || 0).toLocaleString("en-IN")}`,
      `Advance Received: Rs. ${Number(booking?.advancePaid || 0).toLocaleString("en-IN")}`,
      `Balance Amount: Rs. ${Number(booking?.balanceAmount || 0).toLocaleString("en-IN")}`,
      `Booking Status: ${booking?.bookingStatus || "Pending"}`,
      `Payment Status: ${booking?.paymentStatus || "Pending"}`,
      booking?.notes ? `\nSpecial Notes:\n${booking.notes}` : "",
      "",
      "Thank you for choosing Sneh Travel.",
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].filter(Boolean).join("\n");
  }

  function confirmationDocumentHtml(doc) {
    const escapeHtml = value => String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

    const lines = String(doc?.text || "").split("\n");
    const title = escapeHtml(doc?.title || "Travel Booking Confirmation");
    const sectionPattern = /^(\d{2})\s*\|\s*(.+)$/;
    const subHeadingPattern = /^(HOTEL \d{2}|VEHICLE \d{2})$/i;
    const topTitlePattern = /^(TRAVEL BOOKING CONFIRMATION|HOTEL CONFIRMATION|LAND BOOKING CONFIRMATION|PACKAGE CONFIRMATION)$/i;

    const body = lines.map(raw => {
      const line = String(raw || "").trim();
      if (!line) return `<div class="bk-space"></div>`;

      const section = line.match(sectionPattern);
      if (section) {
        return `<div class="bk-section"><span class="bk-section-no">${escapeHtml(section[1])}</span><span class="bk-section-title">${escapeHtml(section[2])}</span></div>`;
      }

      if (subHeadingPattern.test(line)) {
        return `<div class="bk-subheading"><span>${escapeHtml(line)}</span></div>`;
      }

      if (topTitlePattern.test(line)) return "";

      if (/^(Regards,|Thank you for choosing Sneh Travel\.)$/i.test(line)) {
        return `<p class="bk-closing">${escapeHtml(line)}</p>`;
      }

      const colon = line.indexOf(":");
      if (colon > 0 && colon < 90) {
        const label = line.slice(0, colon).trim();
        const value = line.slice(colon + 1).trim() || "-";
        return `<div class="bk-field"><span class="bk-label">${escapeHtml(label)}</span><span class="bk-colon">:</span><span class="bk-value">${escapeHtml(value)}</span></div>`;
      }

      const day = line.match(/^DAY\s*(\d+)\s*[—-]\s*(.+)$/i);
      if (day) {
        return `<div class="bk-day"><span class="bk-day-no">DAY ${escapeHtml(day[1])}</span><span class="bk-day-title">${escapeHtml(day[2])}</span></div>`;
      }

      return `<p class="bk-paragraph">${escapeHtml(line)}</p>`;
    }).join("");

    return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title><style>
      *{box-sizing:border-box}
      body{margin:0;background:#e9e5dc;color:#202733;font-family:Georgia,"Times New Roman",serif}
      .bk-page{width:min(820px,94vw);margin:28px auto;background:#fffdf8;box-shadow:0 14px 38px rgba(31,41,55,.16);border:1px solid #d8d0c1;position:relative;overflow:hidden}
      .bk-page:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(circle at 18px 18px,rgba(185,154,90,.12) 1px,transparent 1.5px);background-size:36px 36px;opacity:.28}
      .bk-page>*{position:relative}
      .bk-header{padding:30px 48px 25px;border-bottom:1px solid #d9c9a7;background:linear-gradient(135deg,#fffdf8 0%,#faf6ed 100%);position:relative;overflow:hidden}
      .bk-header:after{content:"✦  SNEH TRAVEL  ✦";position:absolute;right:-18px;top:18px;font:800 10px Arial,sans-serif;letter-spacing:2px;color:rgba(185,154,90,.16);transform:rotate(90deg)}
      .bk-brand{font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:900;letter-spacing:3px;color:#12304a}
      .bk-brand-line{width:54px;height:3px;background:#b99a5a;margin-top:9px;border-radius:2px}
      .bk-title-row{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-top:18px}
      .bk-title{margin:0;font-family:Arial,Helvetica,sans-serif;font-size:25px;line-height:1.2;color:#172b3f;font-weight:800;letter-spacing:.2px}
      .bk-confirmation-tag{font-family:Arial,Helvetica,sans-serif;font-size:9px;letter-spacing:1.7px;font-weight:800;color:#8a6e38;white-space:nowrap;border:1px solid #d9c9a7;padding:6px 9px;border-radius:999px;background:#fffaf0}
      .bk-body{padding:26px 48px 34px}
      .bk-section{display:flex;align-items:center;gap:11px;margin:25px 0 11px;padding:0 0 9px;border-bottom:1px solid #d9c9a7;break-after:avoid;position:relative}
      .bk-section:first-child{margin-top:0}
      .bk-section:after{content:"";position:absolute;left:0;bottom:-2px;width:46px;height:3px;background:#b99a5a;border-radius:2px}
      .bk-section-no{font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:900;color:#fff;background:#17344e;border-radius:50%;width:25px;height:25px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 25px}
      .bk-section-title{font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:900;letter-spacing:1.25px;color:#17344e;text-transform:uppercase}
      .bk-subheading{font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:900;letter-spacing:.8px;color:#8a6e38;text-transform:uppercase;margin:16px 0 7px;padding:7px 10px;border-left:3px solid #b99a5a;background:#faf6ed;break-after:avoid}
      .bk-field{display:grid;grid-template-columns:190px 14px minmax(0,1fr);align-items:baseline;gap:0;padding:4px 0;font-size:11.5px;line-height:1.5;break-inside:avoid}
      .bk-label{font-weight:700;color:#66717d}
      .bk-colon{color:#b99a5a;font-weight:700;text-align:center}
      .bk-value{font-weight:600;color:#202733;overflow-wrap:anywhere}
      .bk-paragraph{font-size:11.5px;line-height:1.75;margin:6px 0;color:#303944;white-space:pre-wrap}
      .bk-day{display:flex;align-items:baseline;gap:10px;margin:16px 0 5px;padding-top:8px;border-top:1px dashed #d9c9a7;break-after:avoid}
      .bk-day-no{font:900 9px Arial,sans-serif;letter-spacing:1px;color:#fff;background:#17344e;padding:5px 7px;border-radius:3px}
      .bk-day-title{font:800 12px Arial,sans-serif;color:#17344e}
      .bk-closing{font-size:12px;line-height:1.6;margin:9px 0;color:#17344e;font-weight:700}
      .bk-space{height:5px}
      .bk-footer{padding:18px 48px 20px;border-top:1px solid #ddd5c7;background:#f7f3eb;font-family:Arial,Helvetica,sans-serif;color:#68727c;font-size:10px;line-height:1.6}
      .bk-footer strong{color:#17344e;font-size:12px;letter-spacing:.5px}
      @media(max-width:650px){
        .bk-page{width:100%;margin:0;border:0;box-shadow:none}.bk-header{padding:24px}.bk-body{padding:22px 24px 28px}.bk-footer{padding:18px 24px}.bk-title-row{display:block}.bk-confirmation-tag{display:inline-block;margin-top:9px}.bk-title{font-size:22px}.bk-field{grid-template-columns:145px 12px minmax(0,1fr);font-size:11px}
      }
      @media print{body{background:#fff}.bk-page{width:100%;margin:0;border:0;box-shadow:none}.bk-header{break-inside:avoid}.bk-section{break-after:avoid}.bk-field{break-inside:avoid}}
    </style></head><body><div class="bk-page"><header class="bk-header"><div class="bk-brand">SNEH TRAVEL</div><div class="bk-brand-line"></div><div class="bk-title-row"><h1 class="bk-title">${title}</h1><div class="bk-confirmation-tag">OFFICIAL TRAVEL CONFIRMATION</div></div></header><main class="bk-body">${body}</main><footer class="bk-footer"><strong>Sneh Travel</strong><br/>+91 84488 68866 &nbsp; | &nbsp; travelsneh@gmail.com<br/>122, First Floor, Parmanand Colony, Mukherjee Nagar, Delhi - 110009</footer></div></body></html>`;
  }

  function getConfirmationDocument(type, booking, hotel) {
    return { title: "Travel Booking Confirmation", text: buildUnifiedConfirmationText(booking), recipient: booking?.email || "" };
  }

  function invoiceNumberForBooking(booking, fallbackIndex = 0) {
    if (booking?.invoiceNo) return booking.invoiceNo;
    const serial = String(booking?.serial_no || "").match(/(\d+)$/)?.[1];
    const number = serial || String(fallbackIndex + 1).padStart(4, "0");
    return `INV-${new Date(booking?.created_at || Date.now()).getFullYear()}-${String(number).padStart(4, "0")}`;
  }

  function buildInvoiceText(booking) {
    if (!booking) return "";
    const total = Number(booking.finalSaleAmount || booking.totalAmount || booking.amount || 0) || 0;
    const advance = Number(booking.advancePaid || 0) || 0;
    const balance = Math.max(0, total - advance);
    const lines = [];
    lines.push(`INVOICE — ${invoiceNumberForBooking(booking)}`);
    lines.push(`Invoice Date: ${booking.invoiceDate || new Date().toISOString().slice(0,10)}`);
    lines.push(`Booking No.: ${booking.serial_no || "-"}`);
    lines.push("");
    lines.push(`${booking.invoiceBillTo === "company" ? "Bill To Company" : "Guest"}: ${booking.invoiceBillTo === "company" ? (booking.billingCompanyName || booking.customer_name || "-") : (booking.customer_name || "-")}`);
    if (booking.invoiceBillTo === "company") { lines.push(`Company Address: ${booking.billingCompanyAddress || "-"}`); lines.push(`Company GST No.: ${booking.billingCompanyGst || "-"}`); }
    lines.push(`Mobile: ${booking.phone || "-"}`);
    lines.push(`Email: ${booking.email || "-"}`);
    lines.push(`Destination: ${booking.destination || "-"}`);
    lines.push(`Travel Date: ${booking.travelDate || "-"}`);
    lines.push("");
    lines.push("HOTEL & STAY DETAILS");
    (booking.hotelServices || []).forEach((h, i) => {
      lines.push(`Hotel ${String(i+1).padStart(2,"0")}: ${h.hotelName || "-"} · ${h.city || "-"} · Check-in: ${h.checkIn || "-"} · Check-out: ${h.checkOut || "-"} · ${h.nights || 0} Night(s) · Rooms: ${booking.rooms || "-"} · Meal Plan: ${h.mealPlan || "-"}`);
    });
    if (!(booking.hotelServices || []).length) lines.push("No hotel service details.");
    lines.push("");
    lines.push("VEHICLE / CAR DETAILS");
    (booking.vehicleServices || []).forEach((v, i) => {
      lines.push(`Vehicle ${String(i+1).padStart(2,"0")}: ${v.vehicleType || "-"} · Pickup: ${v.pickup || "-"} · Drop: ${v.drop || "-"} · ${v.days || 0} Day(s)`);
    });
    if (!(booking.vehicleServices || []).length) lines.push("No vehicle service details.");
    lines.push("");
    lines.push("CONSOLIDATED BILLING");
    lines.push(`Total Amount Payable: ₹${total.toLocaleString("en-IN")}`);
    lines.push(`Advance Received: ₹${advance.toLocaleString("en-IN")}`);
    lines.push(`Balance Due: ₹${balance.toLocaleString("en-IN")}`);
    lines.push(`Payment Status: ${booking.paymentStatus || "Pending"}`);
    lines.push("");
    lines.push("This invoice contains the consolidated booking amount. Service-wise amount breakup is not included.");
    lines.push("Thank you for choosing Sneh Travel.");
    lines.push("GST, if applicable, is as per the applicable tax invoice / billing terms.");
    return lines.join("\n");
  }

  function invoiceDocumentHtml(booking) {
    if (!booking) return "";
    const total = Number(booking.finalSaleAmount || booking.totalAmount || booking.amount || 0) || 0;
    const advance = Number(booking.advancePaid || 0) || 0;
    const balance = Math.max(0, total - advance);
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Sneh Travel Invoice</title><style>body{font-family:Arial,sans-serif;background:#f3f6fa;color:#172033;margin:0}.page{max-width:850px;margin:24px auto;background:#fff;padding:42px;box-shadow:0 8px 30px rgba(15,23,42,.08)}.head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #0f5f78;padding-bottom:20px}.brand{font-size:25px;font-weight:900;letter-spacing:2px;color:#0f3d56}.sub{color:#64748b;font-size:11px;margin-top:5px}.invoice-title{text-align:right}.invoice-title h1{margin:0;color:#0f5f78;font-size:28px}.invoice-no{display:inline-block;margin-top:8px;padding:7px 12px;border-radius:8px;background:#eaf6fa;color:#0f5f78;font-weight:800}.meta{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:25px 0}.card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:15px}.label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#64748b}.value{font-weight:700;margin-top:5px}.section{margin-top:25px}.section h2{font-size:14px;color:#0f5f78;border-bottom:1px solid #dbe5ec;padding-bottom:8px}.consolidated{margin-top:18px;border:1px solid #dbe5ec;border-radius:14px;padding:24px;background:#fbfdff}.consolidated-title{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;font-weight:800;margin-bottom:10px}.consolidated-amount{font-size:32px;font-weight:900;color:#0f5f78}.hint{margin-top:8px;color:#64748b;font-size:11px}.totals{margin:25px 0 0 auto;width:330px}.total-row{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #e5e7eb}.grand{font-size:18px;font-weight:900;color:#0f5f78;border-bottom:0;padding-top:14px}.balance{background:#fff8e8;border-radius:9px;padding:12px;font-weight:800;color:#8a5a00;margin-top:8px}.footer{margin-top:35px;padding-top:18px;border-top:1px solid #e2e8f0;color:#64748b;font-size:11px;line-height:1.6}@media(max-width:700px){.page{margin:0;padding:22px}.head,.meta{grid-template-columns:1fr;display:grid}.invoice-title{text-align:left;margin-top:15px}.totals{width:100%}.consolidated-amount{font-size:26px}}</style></head><body><div class="page"><div class="head"><div><div class="brand">SNEH TRAVEL</div><div class="sub">Explore the World. Create Beautiful Memories.</div></div><div class="invoice-title"><h1>INVOICE</h1><div class="invoice-no">${invoiceNumberForBooking(booking)}</div></div></div><div class="meta"><div class="card"><div class="label">Bill To</div><div class="value">${booking.invoiceBillTo === "company" ? (booking.billingCompanyName || booking.customer_name || "-") : (booking.customer_name || "-")}</div><div class="sub">${booking.invoiceBillTo === "company" ? `${booking.billingCompanyAddress || ""}${booking.billingCompanyGst ? ` · GST: ${booking.billingCompanyGst}` : ""}` : `${booking.phone || ""}${booking.email ? ` · ${booking.email}` : ""}`}</div></div><div class="card"><div class="label">Booking Details</div><div class="value">${booking.serial_no || "-"}</div><div class="sub">Invoice Date: ${booking.invoiceDate || new Date().toISOString().slice(0,10)}<br>Travel Date: ${booking.travelDate || "-"}<br>Destination: ${booking.destination || "-"}</div></div></div><div class="section"><h2>Hotel &amp; Stay Details</h2><div class="service-details">${(booking.hotelServices||[]).map((h,i)=>`<div class="service-line"><strong>Hotel ${String(i+1).padStart(2,"0")}: ${h.hotelName||"-"}</strong><span>${h.city||"-"} · Check-in: ${h.checkIn||"-"} · Check-out: ${h.checkOut||"-"} · ${h.nights||0} Night(s) · Rooms: ${booking.rooms||"-"} · Meal Plan: ${h.mealPlan||"-"}</span></div>`).join("") || `<div class="service-line"><span>No hotel service details.</span></div>`}</div></div><div class="section"><h2>Vehicle / Car Details</h2><div class="service-details">${(booking.vehicleServices||[]).map((v,i)=>`<div class="service-line"><strong>Vehicle ${String(i+1).padStart(2,"0")}: ${v.vehicleType||"-"}</strong><span>Pickup: ${v.pickup||"-"} · Drop: ${v.drop||"-"} · ${v.days||0} Day(s)</span></div>`).join("") || `<div class="service-line"><span>No vehicle service details.</span></div>`}</div></div><div class="section"><h2>Consolidated Booking Amount</h2><div class="consolidated"><div class="consolidated-title">Total Amount Payable</div><div class="consolidated-amount">₹${total.toLocaleString("en-IN")}</div><div class="hint">This invoice shows one consolidated booking amount. Hotel, vehicle and other service-wise amount breakup is not displayed.</div></div></div><div class="totals"><div class="total-row"><span>Total Amount</span><strong>₹${total.toLocaleString("en-IN")}</strong></div><div class="total-row"><span>Advance Received</span><strong>₹${advance.toLocaleString("en-IN")}</strong></div><div class="total-row grand"><span>Total Amount Payable</span><strong>₹${total.toLocaleString("en-IN")}</strong></div><div class="balance">Balance Due: ₹${balance.toLocaleString("en-IN")}</div><div style="margin-top:10px;font-size:12px;color:#64748b;text-align:right">Payment Status: <strong style="color:#172033">${booking.paymentStatus || "Pending"}</strong></div></div><div class="footer"><strong>Sneh Travel</strong><br>+91 84488 68866 &nbsp; | &nbsp; travelsneh@gmail.com<br>122, First Floor, Parmanand Colony, Mukherjee Nagar, Delhi - 110009, India<br><br>This invoice is generated from the confirmed booking record. GST, if applicable, is as per applicable billing terms.</div></div></body></html>`;
  }

  function ensureStandaloneHotelInvoice(booking) {
    if (!booking) return booking;
    if (booking.invoiceNo && booking.invoiceDate) return booking;
    const existing = standaloneHotelBookings.find(x => String(x.id) === String(booking.id));
    const invoiceNo = booking.invoiceNo || existing?.invoiceNo || `SHI-${new Date().getFullYear()}-${String(standaloneHotelBookings.length + 1).padStart(4,"0")}`;
    const updated = { ...booking, invoiceNo, invoiceDate: booking.invoiceDate || new Date().toISOString().slice(0,10) };
    setStandaloneHotelBookings(prev => {
      const next = prev.map(item => String(item.id) === String(booking.id) ? updated : item);
      localStorage.setItem("sneh_travel_standalone_hotel_bookings", JSON.stringify(next));
      return next;
    });
    return updated;
  }

  function standaloneHotelInvoiceHtml(booking) {
    if (!booking) return "";
    const total = Number(booking.saleAmount || 0) || 0;
    const advance = Number(booking.advanceReceived || 0) || 0;
    const balance = Math.max(0, total - advance);
    const money = n => `₹${Number(n || 0).toLocaleString("en-IN")}`;
    const esc = v => String(v ?? "-").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Sneh Travel Hotel Invoice</title><style>body{font-family:Arial,sans-serif;background:#f3f6fa;color:#172033;margin:0}.page{max-width:850px;margin:24px auto;background:#fff;padding:42px;box-shadow:0 8px 30px rgba(15,23,42,.08)}.head{display:flex;justify-content:space-between;border-bottom:3px solid #0f5f78;padding-bottom:20px}.brand{font-size:25px;font-weight:900;letter-spacing:2px;color:#0f3d56}.sub{color:#64748b;font-size:11px;margin-top:5px}.title{text-align:right}.title h1{margin:0;color:#0f5f78;font-size:28px}.badge{display:inline-block;margin-top:8px;padding:7px 12px;border-radius:8px;background:#eaf6fa;color:#0f5f78;font-weight:800}.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}.card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:15px}.label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#64748b}.value{font-weight:700;margin-top:5px}.section{margin-top:25px}.section h2{font-size:14px;color:#0f5f78;border-bottom:1px solid #dbe5ec;padding-bottom:8px}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{padding:12px;border-bottom:1px solid #e2e8f0;text-align:left}th{font-size:11px;color:#64748b;text-transform:uppercase}td{font-size:13px}.totals{margin:25px 0 0 auto;max-width:330px}.row{display:flex;justify-content:space-between;padding:8px 0}.grand{font-size:20px;font-weight:900;color:#0f5f78;border-top:2px solid #0f5f78;margin-top:8px;padding-top:12px}.footer{margin-top:35px;border-top:1px solid #e2e8f0;padding-top:15px;color:#64748b;font-size:11px}@media print{body{background:#fff}.page{margin:0;box-shadow:none;max-width:none}}</style></head><body><div class="page"><div class="head"><div><div class="brand">SNEH TRAVEL</div><div class="sub">Travel • Hotel • Holiday Services</div></div><div class="title"><h1>HOTEL INVOICE</h1><span class="badge">${esc(booking.invoiceNo || "Invoice")}</span></div></div><div class="grid"><div class="card"><div class="label">Bill To</div><div class="value">${esc(booking.customerName)}</div><div>${esc(booking.phone)}</div><div>${esc(booking.email)}</div></div><div class="card"><div class="label">Invoice Details</div><div class="value">Invoice Date: ${esc(booking.invoiceDate || new Date().toISOString().slice(0,10))}</div><div>Booking No.: ${esc(booking.bookingNo)}</div><div>Confirmation No.: ${esc(booking.confirmationNo || "-")}</div></div></div><div class="section"><h2>Hotel Stay</h2><table><thead><tr><th>Hotel</th><th>City</th><th>Check-in</th><th>Check-out</th><th>Nights</th></tr></thead><tbody><tr><td>${esc(booking.hotelName)}</td><td>${esc(booking.city)}</td><td>${esc(booking.checkIn)}</td><td>${esc(booking.checkOut)}</td><td>${esc(booking.nights)}</td></tr></tbody></table></div><div class="section"><h2>Room & Meal Details</h2><table><thead><tr><th>Room Type</th><th>Rooms</th><th>Meal Plan</th><th>Adults</th><th>Children</th></tr></thead><tbody><tr><td>${esc(booking.roomType)}</td><td>${esc(booking.rooms)}</td><td>${esc(booking.mealPlan)}</td><td>${esc(booking.adults)}</td><td>${esc(booking.children)}</td></tr></tbody></table></div><div class="totals"><div class="row"><span>Hotel Accommodation</span><strong>${money(total)}</strong></div><div class="row"><span>Advance Received</span><strong>${money(advance)}</strong></div><div class="row grand"><span>Balance Payable</span><strong>${money(balance)}</strong></div></div><div class="footer"><strong>Sneh Travel</strong><br>+91 84488 68866 • travelsneh@gmail.com<br>122, First Floor, Parmanand Colony, Mukherjee Nagar, Delhi - 110009, India<br><br>This invoice is generated from the Sneh Travel standalone hotel booking record.</div></div></body></html>`;
  }

  function openStandaloneHotelBookingView(row) {
    if (!row) return;
    setStandaloneHotelView(row);
  }

  function openStandaloneHotelInvoice(row) {
    if (!row) return;
    const updated = ensureStandaloneHotelInvoice(row);
    setStandaloneHotelInvoicePreview(updated);
  }

  function printStandaloneHotelInvoice(row) {
    if (!row) return;
    const updated = ensureStandaloneHotelInvoice(row);
    const win = window.open("", "_blank", "width=950,height=800");
    if (!win) { alert("Please allow pop-ups to print the invoice."); return; }
    win.document.write(standaloneHotelInvoiceHtml(updated));
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 400);
  }

  function emailStandaloneHotelInvoice(row) {
    if (!row) return;
    const updated = ensureStandaloneHotelInvoice(row);
    const recipient = String(updated.email || "").trim();
    if (!recipient) { alert("Customer email is not available. Please edit the booking and add the customer email first."); return; }
    const subject = `Sneh Travel Hotel Invoice - ${updated.invoiceNo || updated.bookingNo || "Booking"}`;
    const total = Number(updated.saleAmount || 0) || 0;
    const advance = Number(updated.advanceReceived || 0) || 0;
    const balance = Math.max(0, total - advance);
    const body = [
      `Dear ${updated.customerName || "Customer"},`, "",
      `Please find your Sneh Travel hotel invoice ${updated.invoiceNo || ""}.`, "",
      `Booking No.: ${updated.bookingNo || "-"}`,
      `Hotel: ${updated.hotelName || "-"}`,
      `City: ${updated.city || "-"}`,
      `Check-in: ${updated.checkIn || "-"}`,
      `Check-out: ${updated.checkOut || "-"}`,
      `Nights: ${updated.nights || 0}`,
      `Room: ${updated.roomType || "-"} | Rooms: ${updated.rooms || 0}`,
      `Meal Plan: ${updated.mealPlan || "-"}`, "",
      `Total Amount: ₹${total.toLocaleString("en-IN")}`,
      `Advance Received: ₹${advance.toLocaleString("en-IN")}`,
      `Balance Payable: ₹${balance.toLocaleString("en-IN")}`, "",
      "Regards,", "Sneh Travel", "+91 84488 68866", "travelsneh@gmail.com"
    ].join("\n");
    mailtoWithDetails(recipient, subject, body);
  }

  function ensureBookingInvoice(booking) {
    if (!booking) return booking;
    if (booking.invoiceNo && booking.invoiceDate) return booking;
    const updated = {...booking, invoiceNo: invoiceNumberForBooking(booking), invoiceDate: booking.invoiceDate || String(booking.created_at || new Date().toISOString()).slice(0,10)};
    setBookings(prev => { const next=prev.map(item=>String(item.id)===String(booking.id)?updated:item); localStorage.setItem("sneh_travel_bookings",JSON.stringify(next)); return next; });
    return updated;
  }

  function openInvoicePreview(booking) {
    if (!booking) return;
    const updated = ensureBookingInvoice(booking);
    setInvoicePreview(updated);
  }

  function downloadInvoiceWord(booking) {
    if (!booking) return;
    const updated = ensureBookingInvoice(booking);
    const blob = new Blob(["\ufeff", invoiceDocumentHtml(updated)], {type:"application/msword"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url;
    a.download=`Sneh-Travel-Invoice-${String(updated.invoiceNo || updated.serial_no || "invoice").replace(/[^a-z0-9_-]+/gi,"-")}.doc`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  function printInvoice(booking) {
    if (!booking) return;
    const updated = ensureBookingInvoice(booking);
    const win = window.open("", "_blank", "width=950,height=800");
    if (!win) { alert("Please allow pop-ups to print the invoice."); return; }
    win.document.write(invoiceDocumentHtml(updated));
    win.document.close();
    win.focus();
    setTimeout(()=>win.print(),400);
  }

  function emailUnifiedConfirmation(booking) {
    if (!booking) return;
    const recipient = booking?.email || "";
    const subject = `Sneh Travel Booking Confirmation - ${booking?.serial_no || booking?.customer_name || "Booking"}`;
    const body = buildUnifiedConfirmationText(booking);
    mailtoWithDetails(recipient, subject, body);
  }

  function openConfirmationPreview(type, booking, hotel = null) {
    if (!booking) return;
    setConfirmationPreview({ type, booking, hotel, ...getConfirmationDocument(type, booking, hotel) });
  }

  function downloadConfirmationWord(type, booking, hotel = null) {
    if (!booking) return;
    const doc = getConfirmationDocument(type, booking, hotel);
    const html = confirmationDocumentHtml(doc);
    const blob = new Blob(["\ufeff", html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const ref = booking.confirmationNo || booking.serial_no || "confirmation";
    a.href = url;
    a.download = `Sneh-Travel-Booking-Confirmation-${String(ref).replace(/[^a-z0-9_-]+/gi, "-")}.doc`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function emailHotelConfirmation(booking, hotel, index = 0) {
    if (!booking || !hotel) return;
    const subject = `Hotel Confirmation - ${booking.customer_name || "Guest"} - ${hotel.hotelName || hotel.city || "Hotel"}`;
    const body = [
      `Dear ${hotel.hotelName || "Hotel Team"},`,
      "",
      "Greetings from Sneh Travel.",
      "",
      buildHotelConfirmationText(booking, hotel),
      "",
      "Kindly confirm the above reservation and share the hotel confirmation voucher / confirmation number.",
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].join("\n");
    mailtoWithDetails(hotel.supplierEmail || "snehtravel@gmail.com", subject, body);
  }

  function emailLandConfirmation(booking) {
    if (!booking) return;
    const body = [
      "Dear Supplier / Operations Team,",
      "",
      "Greetings from Sneh Travel.",
      "",
      buildLandConfirmationText(booking),
      "",
      "Kindly confirm all land arrangements and share the applicable confirmation vouchers / references.",
      "",
      "Regards,",
      "Sneh Travel",
      "+91 84488 68866",
      "travelsneh@gmail.com"
    ].join("\n");
    mailtoWithDetails(booking.landSupplierEmail || "snehtravel@gmail.com", `Land Booking Confirmation - ${booking.serial_no || booking.customer_name || "Booking"}`, body);
  }

  function emailPackageConfirmation(booking) {
    if (!booking) return;
    const body = [
      `Dear ${booking.customer_name || "Guest"},`,
      "",
      "Greetings from Sneh Travel!",
      "",
      "We are pleased to confirm your travel package. Please find the complete booking confirmation below.",
      "",
      buildPackageConfirmationText(booking)
    ].join("\n");
    mailtoWithDetails(booking.email || "snehtravel@gmail.com", `Package Confirmation - ${booking.serial_no || booking.customer_name || "Booking"}`, body);
  }

  function isDaywiseArtifact(value) {
    const text = String(value ?? "").trim();
    if (!text) return false;
    return /DAYWISE::/i.test(text) || /^\{\s*["']?day["']?\s*:/i.test(text) || /^\[\s*\{\s*["']?day["']?\s*:/i.test(text) || /["']details["']\s*:/.test(text) && /["']day["']\s*:/.test(text);
  }

  function isInvalidHotelServiceRow(item) {
    if (!item) return true;
    return [item.city, item.hotelName, item.category, item.roomAllocation, item.roomType, item.mealPlan]
      .some(isDaywiseArtifact);
  }

  function roomAllocationFromDestination(d = {}) {
    const parts = [];
    const single = Number(d.singleRooms) || 0, double = Number(d.doubleRooms) || 0, extra = Number(d.extraBed) || 0;
    const childWith = Number(d.childWithBed) || 0, childWithout = Number(d.childWithoutBed) || 0;
    if (single > 0) parts.push(`${String(single).padStart(2,"0")} Single`);
    if (double > 0) parts.push(`${String(double).padStart(2,"0")} Double`);
    if (extra > 0) parts.push(`${String(extra).padStart(2,"0")} Extra Bed`);
    if (childWith > 0) parts.push(`${String(childWith).padStart(2,"0")} Child With Bed`);
    if (childWithout > 0) parts.push(`${String(childWithout).padStart(2,"0")} Child Without Bed`);
    return parts.join(" + ");
  }

  function buildBookingServices(quote = {}, customer = {}) {
    const destinations = Array.isArray(quote.destinations) ? quote.destinations : [];
    const hotelServices = destinations.map((d, index) => ({
      id: d.id || `hotel-${index}-${Date.now()}`,
      city: isDaywiseArtifact(d.hotelCity) || isDaywiseArtifact(d.city) ? "" : (d.hotelCity || d.city || d.destination || ""),
      hotelName: d.hotelName || "",
      category: d.hotelCategory || "",
      checkIn: d.checkIn || "",
      checkOut: d.checkOut || "",
      nights: Number(d.nights) || 0,
      mealPlan: d.mealPlan || d.meal_plan || "",
      roomAllocation: d.roomAllocation || roomAllocationFromDestination(d),
      amount: Number(d.hotelAmount || ((Number(d.singleRooms)||0)*(Number(d.singlePricePerRoomPerNight ?? d.singleRate)||0)*(Number(d.nights)||0) + (Number(d.doubleRooms)||0)*(Number(d.doublePricePerRoomPerNight ?? d.doubleRate)||0)*(Number(d.nights)||0))) || 0,
      purchaseAmount: Number(d.purchaseAmount || ((Number(d.singleRooms)||0)*(Number(d.purchaseSingleRatePerNight ?? d.singlePricePerRoomPerNight ?? d.singleRate)||0)*(Number(d.nights)||0) + (Number(d.doubleRooms)||0)*(Number(d.purchaseDoubleRatePerNight ?? d.doublePricePerRoomPerNight ?? d.doubleRate)||0)*(Number(d.nights)||0) + (Number(d.extraBed)||0)*(Number(d.purchaseExtraBedRate ?? d.extraBedPrice ?? d.extraBedRate)||0)*(Number(d.nights)||0) + (Number(d.childWithBed)||0)*(Number(d.purchaseChildWithBedRate ?? d.childWithBedPrice ?? d.childWithBedRate)||0)*(Number(d.nights)||0) + (Number(d.childWithoutBed)||0)*(Number(d.purchaseChildWithoutBedRate ?? d.childWithoutBedPrice ?? d.childWithoutBedRate)||0)*(Number(d.nights)||0))) || 0,
      extraBedAmount: Number(d.extraBedAmount || ((Number(d.extraBed)||0)*(Number(d.extraBedPrice)||0)*(Number(d.nights)||0))) || 0,
      childWithBedAmount: Number(d.childWithBedAmount || 0) || 0,
      childWithoutBedAmount: Number(d.childWithoutBedAmount || 0) || 0,
      status: d.confirmationStatus || "Pending",
      confirmationNo: d.confirmationNo || "",
      confirmedBy: d.confirmedBy || "",
      supplierEmail: d.supplierEmail || "",
      note: d.confirmationNote || ""
    })).filter(x => (x.city || x.hotelName) && !isInvalidHotelServiceRow(x));
    const itinerary = quote.city_itinerary || quote.itineraryName || quote.itinerary_name || "";
    const vehicleServices = [{
      id: `vehicle-${Date.now()}`,
      vehicleType: quote.vehicleType || "",
      pickup: quote.pickupPoint || "",
      drop: quote.dropPoint || "",
      days: Number(quote.vehicleDays || quote.days || 0) || 0,
      amount: Number(quote.vehicleAmount || quote.transportAmount || 0) || 0,
      purchaseAmount: Number(quote.vehiclePurchaseAmount ?? quote.vehicleAmount ?? quote.transportAmount ?? 0) || 0,
      status: quote.vehicleConfirmationStatus || "Pending",
      reference: quote.vehicleConfirmationNo || "",
      confirmedBy: quote.vehicleConfirmedBy || "",
      supplierEmail: quote.vehicleSupplierEmail || "",
      note: quote.vehicleConfirmationNote || ""
    }].filter(x => x.vehicleType || x.pickup || x.drop || x.amount);
    return { hotelServices, vehicleServices, itinerary };
  }
  function calculateBookingBreakup(form) {
    const hotels = (form.hotelServices || []).reduce((a,h) => ({
      hotel: a.hotel + (Number(h.amount)||0), extra: a.extra + (Number(h.extraBedAmount)||0),
      childWith: a.childWith + (Number(h.childWithBedAmount)||0), childWithout: a.childWithout + (Number(h.childWithoutBedAmount)||0),
      purchase: a.purchase + (Number(h.purchaseAmount)||0)
    }), {hotel:0,extra:0,childWith:0,childWithout:0,purchase:0});
    const transport = (form.vehicleServices || []).reduce((sum,v)=>sum+(Number(v.amount)||0),0);
    const transportPurchase = (form.vehicleServices || []).reduce((sum,v)=>sum+(Number(v.purchaseAmount ?? v.amount)||0),0);
    const net = hotels.hotel + hotels.extra + hotels.childWith + hotels.childWithout + transport;
    const internalCost = hotels.purchase + transportPurchase;
    const markup = form.markupType === "fixed" ? Number(form.markupValue)||0 : net * (Number(form.markupValue)||0) / 100;
    const finalAmount = net + markup;
    const advance = Number(form.advancePaid)||0;
    return {...hotels, transport, transportPurchase, internalCost, net, markup, finalAmount, balance: Math.max(0, finalAmount-advance)};
  }
  function updateBookingService(type, index, field, value) {
    setBookingForm(prev => ({...prev, [type]: (prev[type]||[]).map((item,i)=>i===index?{...item,[field]:value}:item)}));
  }
  function openBooking(customer, quote = null) {
    setEditingBookingId(null); setBookingCustomer(customer);
    const source = quote || customer || {};
    const services = buildBookingServices(quote || {}, customer || {});
    const amount = quote?.totalAmount || quote?.price || customer?.budget || 0;
    const form = {
      ...emptyBookingForm(),
      quotationNo: quote?.serial_no || customer?.quotationNo || "",
      agent_id: quote?.agent_id || customer?.agent_id || null,
      packageName: quote?.packageName || (source.destination ? `${source.destination} Tour` : ""),
      travelDate: quote?.travelDate || quote?.travel_date || customer?.travel_date || "",
      adults: quote?.adults ?? customer?.adults ?? 2,
      children: quote?.children ?? customer?.children ?? 0,
      rooms: quote?.rooms ?? 1,
      roomAllocation: quote?.destinations?.map(d=>d.roomAllocation).filter(Boolean).join(" · ") || quote?.roomAllocation || "",
      dayWiseItinerary: quote?.dayWiseItinerary || getSavedDetailedItineraryText(quote?.destination, quote?.itineraryName || quote?.itinerary_name) || "",
      destination: quote?.destination || customer?.destination || "",
      itineraryName: services.itinerary,
      nights: quote?.nights || quote?.totalNights || "",
      days: quote?.days || quote?.totalDays || "",
      pickupPoint: quote?.pickupPoint || "",
      dropPoint: quote?.dropPoint || "",
      hotelServices: services.hotelServices,
      vehicleServices: services.vehicleServices,
      hotelAmount: quote?.hotelAmount || 0,
      extraBedAmount: quote?.extraBedAmount || 0,
      childWithBedAmount: quote?.childWithBedAmount || 0,
      childWithoutBedAmount: quote?.childWithoutBedAmount || 0,
      transportAmount: quote?.vehicleAmount || 0,
      markupType: quote?.markupType || "percent",
      markupValue: quote?.markupValue || 0,
      finalSaleAmount: amount,
      advancePaid: quote?.advancePaid || "",
      balanceAmount: Math.max(0, Number(amount||0)-Number(quote?.advancePaid||0)),
      bookingStatus: quote?.bookingStatus || "Pending",
      paymentStatus: quote?.paymentStatus || "Pending",
      notes: quote?.notes || customer?.message || ""
    };
    const b = calculateBookingBreakup(form);
    setBookingForm({...form, hotelAmount:b.hotel, extraBedAmount:b.extra, childWithBedAmount:b.childWith, childWithoutBedAmount:b.childWithout, transportAmount:b.transport, netCost:b.net, finalSaleAmount: amount || b.finalAmount, balanceAmount:Math.max(0,Number(amount||b.finalAmount)-Number(form.advancePaid||0))});
  }
  function editBooking(booking) {
    setBookingCustomer({id:booking.enquiry_id,name:booking.customer_name,phone:booking.phone,email:booking.email,destination:booking.destination}); setEditingBookingId(booking.id);
    setBookingForm({...emptyBookingForm(), ...booking, hotelServices:booking.hotelServices||[], vehicleServices:booking.vehicleServices||[], finalSaleAmount:booking.finalSaleAmount??booking.totalAmount??booking.amount??0, balanceAmount:booking.balanceAmount??0});
  }
  function deleteBooking(booking) { if(!window.confirm(`Delete booking ${booking.serial_no || ""}?`)) return; const next=bookings.filter(item=>String(item.id)!==String(booking.id)); setBookings(next); localStorage.setItem("sneh_travel_bookings",JSON.stringify(next)); setSupplierPayables(prev=>{const filtered=prev.filter(item=>String(item.bookingId)!==String(booking.id));localStorage.setItem("sneh_travel_supplier_payables",JSON.stringify(filtered));return filtered;}); }
  async function persistBookingRecord(booking) {
    if (!supabase || !booking?.id) return;
    try {
      const payload={id:String(booking.id),booking_no:booking.serial_no||null,agent_id:booking.agent_id||null,staff_id:booking.staff_id||null,staff_name:booking.staff_name||null,customer_name:booking.customer_name||null,destination:booking.destination||null,travel_date:booking.travelDate||null,check_in:booking.checkIn||booking.hotelServices?.[0]?.checkIn||null,check_out:booking.checkOut||booking.hotelServices?.[booking.hotelServices?.length-1]?.checkOut||null,booking_status:booking.bookingStatus||"Pending",payment_status:booking.paymentStatus||"Pending",sale_amount:Number(booking.finalSaleAmount||booking.totalAmount||booking.amount)||0,purchase_amount:Number(booking.netCost)||0,booking_data:booking,updated_at:new Date().toISOString()};
      const {error}=await supabase.from("booking_records").upsert(payload); if(error) throw error;
    } catch(e) { console.warn("Booking mirror sync skipped:",e?.message||e); }
  }

  function saveBooking() {
    if (!bookingCustomer) return;
    const b = calculateBookingBreakup(bookingForm);
    const finalAmount = Number(bookingForm.finalSaleAmount) || b.finalAmount;
    const advance = Number(bookingForm.advancePaid)||0;
    const base={enquiry_id:bookingCustomer.id,customer_name:bookingCustomer.name||"Customer",phone:bookingCustomer.phone||"",email:bookingCustomer.email||"",destination:bookingForm.destination||bookingCustomer.destination||"",...bookingForm,staff_id:bookingForm.staff_id||bookingCustomer.staff_id||null,staff_name:bookingForm.staff_name||bookingCustomer.staff_name||"",hotelAmount:b.hotel,extraBedAmount:b.extra,childWithBedAmount:b.childWith,childWithoutBedAmount:b.childWithout,transportAmount:b.transport,netCost:b.net,finalSaleAmount:finalAmount,totalAmount:finalAmount,amount:finalAmount,balanceAmount:Math.max(0,finalAmount-advance),updated_at:new Date().toISOString()};
    if(editingBookingId){const existing=bookings.find(b=>String(b.id)===String(editingBookingId));if(!existing)return;const updated={...existing,...base,id:existing.id,serial_no:existing.serial_no,invoiceNo:existing.invoiceNo || invoiceNumberForBooking(existing),invoiceDate:existing.invoiceDate || String(existing.created_at || new Date().toISOString()).slice(0,10),created_at:existing.created_at};const next=bookings.map(b=>String(b.id)===String(existing.id)?updated:b);setBookings(next);localStorage.setItem("sneh_travel_bookings",JSON.stringify(next));syncSupplierPayablesForBooking(updated);persistBookingRecord(updated);setEditingBookingId(null);setBookingCustomer(null);setActiveTab("bookings");alert(`Booking ${updated.serial_no} updated successfully.`);return;}
    const createdAt = new Date().toISOString();
    const bookingSerial = makeAdminSerial("BK",bookings);
    const booking={id:Date.now(),serial_no:bookingSerial,...base,invoiceNo:`INV-${new Date(createdAt).getFullYear()}-${String(bookingSerial.match(/(\d+)$/)?.[1] || bookings.length + 1).padStart(4,"0")}`,invoiceDate:createdAt.slice(0,10),created_at:createdAt};const next=[booking,...bookings];setBookings(next);localStorage.setItem("sneh_travel_bookings",JSON.stringify(next));syncSupplierPayablesForBooking(booking);persistBookingRecord(booking);setBookingCustomer(null);setActiveTab("bookings");alert(`Booking ${booking.serial_no} saved successfully.`);
  }

  const [packages, setPackages] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(false);

  const [showPackageForm, setShowPackageForm] = useState(false);
  const [editingPackageId, setEditingPackageId] = useState(null);

  const emptyItinerary = {
    day_number: 1,
    day_label: "Day 01",
    title: "",
    description: "",
    activities: "",
    location: "",
    night_stay: true,
    night_city: ""
  };

  const emptyHotel = {
    city: "",
    hotel_name: "",
    category: "",
    room_type: "",
    meal_plan: "",
    description: "",
    price: "",
    image_url: ""
  };

  const emptyActivity = {
    activity_name: "",
    location: "",
    description: "",
    price: "",
    included: true
  };

  const emptyPackage = {
    title: "",
    package_type: "Domestic",
    destination: "",
    state: "",
    duration: "",
    subtitle: "",
    description: "",
    image_url: "",
    price: "",
    transport: "",
    meal_plan: "",
    transportOptions: [
      {
        pickup: "",
        drop: "",
        vehicle_type: "Sedan",
        capacity: 4,
        trip_type: "Round Trip",
        price: "",
        driver_included: true,
        description: ""
      }
    ],
    inclusions: "",
    exclusions: "",
    published: false,

    itineraries: [
      { ...emptyItinerary }
    ],

    hotels: [
      { ...emptyHotel }
    ],

    activities: [
      { ...emptyActivity }
    ]
  };

  const [packageForm, setPackageForm] = useState(emptyPackage);


  // =======================================================
  // LOAD PACKAGES
  // =======================================================

  async function refreshPackages() {
    setLoadingPackages(true);

    try {
      const data = await loadTravelPackages(false);
      setPackages(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load packages.");
    } finally {
      setLoadingPackages(false);
    }
  }


  useEffect(() => {
    refreshPackages();
  }, []);


  // =======================================================
  // MULTIPLE ITINERARY HELPERS
  // =======================================================

  function getDurationDays(value) {
    const text = String(value || "");
    const dayMatch = text.match(/(\d+)\s*D/i);
    if (dayMatch) return Number(dayMatch[1]);
    const numbers = text.match(/\d+/g);
    if (numbers && numbers.length >= 2) return Number(numbers[numbers.length - 1]);
    return 0;
  }

  function createItineraryDay(dayNumber, existing = {}) {
    const n = Number(dayNumber) || 1;
    return {
      id: existing.id || undefined,
      day_number: n,
      day_label: existing.day_label || `Day ${String(n).padStart(2, "0")}`,
      title: existing.title || "",
      description: existing.description || "",
      activities: existing.activities || "",
      location: existing.location || "",
      night_stay: existing.night_stay !== undefined ? Boolean(existing.night_stay) : n < getDurationDays(packageForm.duration),
      night_city: existing.night_city || existing.location || ""
    };
  }

  function generateItineraryFromDuration() {
    const days = getDurationDays(packageForm.duration);
    if (!days) {
      alert("Please enter/select a duration first, for example 05 Nights / 06 Days.");
      return;
    }

    const current = Array.isArray(packageForm.itineraries) ? packageForm.itineraries : [];
    const generated = Array.from({ length: days }, (_, index) => {
      const dayNumber = index + 1;
      const existing = current.find(x => Number(x.day_number) === dayNumber) || {};
      return createItineraryDay(dayNumber, existing);
    });

    setPackageForm(prev => ({ ...prev, itineraries: generated }));
  }

  // =======================================================
  // OPEN ADD FORM
  // =======================================================

  function openAddPackage() {
    setEditingPackageId(null);

    setPackageForm({
      ...emptyPackage,
      itineraries: [{ ...emptyItinerary }],
      hotels: [{ ...emptyHotel }],
      activities: [{ ...emptyActivity }]
    });

    setShowPackageForm(true);
  }


  // =======================================================
  // OPEN EDIT FORM
  // =======================================================

  async function openEditPackage(id) {
    try {
      const data = await loadCompleteTravelPackage(id);

      setEditingPackageId(id);

      setPackageForm({
        title: data.title || "",
        package_type: data.package_type || "Domestic",
        destination: data.destination || "",
        state: data.state || "",
        duration: data.duration || "",
        subtitle: data.subtitle || "",
        description: data.description || "",
        image_url: data.image_url || "",
        price: data.base_price ?? "",
        transport: data.transport || "",
        meal_plan: data.meal_plan || "",
        inclusions: data.inclusions || "",
        exclusions: data.exclusions || "",
        published: Boolean(data.published),

        itineraries:
          data.itineraries?.length > 0
            ? data.itineraries.map(item => ({
                day_number: item.day_number || 1,
                day_label: item.day_label || `Day ${String(item.day_number || 1).padStart(2, "0")}`,
                title: item.title || "",
                description: item.description || "",
                activities: item.activities || "",
                location: item.location || "",
                night_stay: item.night_stay !== undefined ? Boolean(item.night_stay) : true,
                night_city: item.night_city || ""
              }))
            : [{ ...emptyItinerary }],

        hotels:
          data.hotels?.length > 0
            ? data.hotels.map(item => ({
                city: item.city || "",
                hotel_name: item.hotel_name || "",
                category: item.category || "",
                room_type: item.room_type || "",
                meal_plan: "",
                description: item.description || "",
                price: item.price ?? "",
                image_url: item.image_url || ""
              }))
            : [{ ...emptyHotel }],

        activities:
          data.activities?.length > 0
            ? data.activities.map(item => ({
                activity_name: item.title || "",
                location: item.location || "",
                description: item.description || "",
                price: item.price ?? "",
                included: Boolean(item.included)
              }))
            : [{ ...emptyActivity }],

        transportOptions:
          data.transportOptions?.length > 0
            ? data.transportOptions.map(item => ({
                pickup: item.pickup || "",
                drop: item.drop || "",
                vehicle_type: item.vehicle_type || "Sedan",
                capacity: item.capacity ?? 4,
                trip_type: item.trip_type || "Round Trip",
                price: item.price ?? "",
                driver_included: Boolean(item.driver_included),
                description: item.description || ""
              }))
            : [{
                pickup: "", drop: "", vehicle_type: "Sedan", capacity: 4,
                trip_type: "Round Trip", price: "", driver_included: true, description: ""
              }]
      });

      setShowPackageForm(true);

    } catch (error) {
      console.error(error);
      alert("Unable to load package.");
    }
  }


  // =======================================================
  // SAVE PACKAGE
  // =======================================================

  async function handlePackageSave(event) {
    event.preventDefault();

    if (!packageForm.title.trim()) {
      alert("Please enter package title.");
      return;
    }

    try {
      setLoadingPackages(true);

      await saveCompleteTravelPackage(
        packageForm,
        editingPackageId
      );

      alert(
        editingPackageId
          ? "Package updated successfully."
          : "Package added successfully."
      );

      setShowPackageForm(false);
      setEditingPackageId(null);

      await refreshPackages();

    } catch (error) {
      console.error(error);
      alert(
        "Unable to save package.\n\n" +
        (error?.message || "Unknown error")
      );
    } finally {
      setLoadingPackages(false);
    }
  }


  // =======================================================
  // DELETE PACKAGE
  // =======================================================

  async function handlePackageDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this package?\n\n" +
      "This will also delete its itinerary, hotels and activities."
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteTravelPackage(id);

      alert("Package deleted successfully.");

      await refreshPackages();

    } catch (error) {
      console.error(error);
      alert("Unable to delete package.");
    }
  }


  // =======================================================
  // PUBLISH / UNPUBLISH
  // =======================================================

  async function handlePublishToggle(packageItem) {
    try {
      await toggleTravelPackagePublished(
        packageItem.id,
        !packageItem.published
      );

      await refreshPackages();

    } catch (error) {
      console.error(error);
      alert("Unable to change package status.");
    }
  }


  // =======================================================
  // FORM FIELD
  // =======================================================

  function updatePackageField(field, value) {
    setPackageForm(prev => ({
      ...prev,
      [field]: value
    }));
  }


  // =======================================================
  // MULTIPLE ITINERARY EDITING
  // =======================================================

  function updateItinerary(index, field, value) {
    setPackageForm(prev => {
      const updated = [...prev.itineraries];
      const item = { ...updated[index], [field]: value };
      if (field === "day_number") {
        const n = Number(value) || 1;
        item.day_number = n;
        item.day_label = `Day ${String(n).padStart(2, "0")}`;
      }
      updated[index] = item;
      return { ...prev, itineraries: updated };
    });
  }

  function addItinerary() {
    setPackageForm(prev => {
      const list = Array.isArray(prev.itineraries) ? prev.itineraries : [];
      const nextDay = list.length ? Math.max(...list.map(x => Number(x.day_number) || 0)) + 1 : 1;
      return { ...prev, itineraries: [...list, createItineraryDay(nextDay)] };
    });
  }

  function removeItinerary(index) {
    setPackageForm(prev => {
      const list = (prev.itineraries || []).filter((_, i) => i !== index);
      return {
        ...prev,
        itineraries: list.map((item, i) => ({ ...item, day_number: i + 1, day_label: `Day ${String(i + 1).padStart(2, "0")}` }))
      };
    });
  }


  // =======================================================
  // HOTELS
  // =======================================================

  function updateHotel(index, field, value) {
    setPackageForm(prev => {
      const updated = [...prev.hotels];

      updated[index] = {
        ...updated[index],
        [field]: value
      };

      return {
        ...prev,
        hotels: updated
      };
    });
  }


  function addHotel() {
    setPackageForm(prev => ({
      ...prev,
      hotels: [
        ...prev.hotels,
        { ...emptyHotel }
      ]
    }));
  }


  function removeHotel(index) {
    setPackageForm(prev => ({
      ...prev,
      hotels: prev.hotels.filter(
        (_, i) => i !== index
      )
    }));
  }


  // =======================================================
  // ACTIVITIES
  // =======================================================

  function updateActivity(index, field, value) {
    setPackageForm(prev => {
      const updated = [...prev.activities];

      updated[index] = {
        ...updated[index],
        [field]: value
      };

      return {
        ...prev,
        activities: updated
      };
    });
  }


  function addActivity() {
    setPackageForm(prev => ({
      ...prev,
      activities: [
        ...prev.activities,
        { ...emptyActivity }
      ]
    }));
  }


  function removeActivity(index) {
    setPackageForm(prev => ({
      ...prev,
      activities: prev.activities.filter(
        (_, i) => i !== index
      )
    }));
  }


  // =======================================================
  // TRANSPORT OPTIONS
  // =======================================================

  function updateTransport(index, field, value) {
    setPackageForm(prev => {
      const updated = [...(prev.transportOptions || [])];
      updated[index] = {
        ...updated[index],
        [field]: value
      };
      return {
        ...prev,
        transportOptions: updated
      };
    });
  }

  function addTransport() {
    setPackageForm(prev => ({
      ...prev,
      transportOptions: [
        ...(prev.transportOptions || []),
        {
          pickup: "",
          drop: "",
          vehicle_type: "Sedan",
          capacity: 4,
          trip_type: "Round Trip",
          price: "",
          driver_included: true,
          description: ""
        }
      ]
    }));
  }

  function removeTransport(index) {
    setPackageForm(prev => ({
      ...prev,
      transportOptions: (prev.transportOptions || []).filter((_, i) => i !== index)
    }));
  }

  // =======================================================
  // NOT LOGGED-IN SCREEN
  // =======================================================

  return (
    <div className={`admin-shell ${sidebarCollapsed ? "admin-sidebar-collapsed" : ""}`}>
      <style>{ADMIN_SIDEBAR_TOGGLE_STYLES + ADMIN_SECTION_MINMAX_STYLES + STAFF_PERMISSION_STYLES + ADMIN_RESTRUCTURE_STYLES + BOOKING_FORM_STYLES + ADMIN_MODAL_STYLES + SUPPLIER_WORKFLOW_STYLES + SUPPLIER_PAYMENT_STYLES}</style>
      <aside className="admin-sidebar">
        <div className="admin-brand"><div className="admin-brand-mark">S</div><div className="admin-brand-text"><strong>SNEH TRAVEL</strong><span>ADMINISTRATION</span></div><button type="button" className="admin-sidebar-toggle" onClick={() => setSidebarCollapsed(v => !v)} title={sidebarCollapsed ? "Maximize sidebar" : "Minimize sidebar"} aria-label={sidebarCollapsed ? "Maximize sidebar" : "Minimize sidebar"}>{sidebarCollapsed ? "»" : "«"}</button></div>
        <nav className="admin-sidebar-nav">
          <button className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>📊 <span>Dashboard</span></button>
          <div className="admin-nav-label">SALES</div>
          <button className={activeTab === "enquiries" ? "active" : ""} onClick={() => setActiveTab("enquiries")}>📩 <span>Enquiries</span><b>{enquiries.length}</b></button>
          <button className={activeTab === "customers" ? "active" : ""} onClick={() => setActiveTab("customers")}>👥 <span>Customers</span></button>
          <button className={activeTab === "quotations" ? "active" : ""} onClick={() => setActiveTab("quotations")}>📄 <span>Quotations</span></button>
          <button className={activeTab === "agent-management" ? "active" : ""} onClick={() => setActiveTab("agent-management")}>🤝 <span>Agent Management</span></button>
          <button className={activeTab === "bookings" ? "active" : ""} onClick={() => setActiveTab("bookings")}>📝 <span>Bookings</span></button>
          <button className={activeTab === "standalone-hotel" ? "active" : ""} onClick={() => { setActiveTab("standalone-hotel"); loadStandaloneHotelInventory(); }}>🏨 <span>Standalone Hotel Booking</span></button>
          <button className={activeTab === "invoices" ? "active" : ""} onClick={() => setActiveTab("invoices")}>🧾 <span>Invoices</span></button>
          <button className={activeTab === "supplier-ledger" ? "active" : ""} onClick={() => setActiveTab("supplier-ledger")}>💳 <span>Supplier Payment Ledger</span></button>
          <button className={activeTab === "payments" ? "active" : ""} onClick={() => setActiveTab("payments")}>💰 <span>Payments</span></button>
          <div className="admin-nav-label">TRAVEL INVENTORY</div>
          <button className={activeTab === "hotels" ? "active" : ""} onClick={() => setActiveTab("hotels")}>🏨 <span>Hotels</span></button>
          <button className={activeTab === "vehicles" ? "active" : ""} onClick={() => setActiveTab("vehicles")}>🚗 <span>Vehicles</span></button>
          <button className={activeTab === "itinerary-rates" ? "active" : ""} onClick={() => setActiveTab("itinerary-rates")}>🧭 <span>Itinerary Rate Matrix</span></button>
          <button className={activeTab === "daywise-itinerary" ? "active" : ""} onClick={() => setActiveTab("daywise-itinerary")}>🗓️ <span>Detailed Itinerary</span></button>
          <button className={activeTab === "destinations" ? "active" : ""} onClick={() => setActiveTab("destinations")}>📍 <span>Destinations</span></button>
          <button className={activeTab === "pricing" ? "active" : ""} onClick={() => setActiveTab("pricing")}>💹 <span>Margin / Pricing</span></button>
          <div className="admin-nav-label">WEBSITE</div>
          <button className={activeTab === "content" ? "active" : ""} onClick={() => setActiveTab("content")}>🌐 <span>Website Content</span></button>
          <button className={activeTab === "reports" ? "active" : ""} onClick={() => setActiveTab("reports")}>📈 <span>Reports</span></button>
          <button className={activeTab === "staff" ? "active" : ""} onClick={() => setActiveTab("staff")}>👤 <span>Staff & Permissions</span></button>
          <button className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>⚙️ <span>Settings</span></button>
        </nav>
        <div className="admin-sidebar-bottom"><button className="admin-view-site" onClick={onViewWebsite}>↗ View Website</button><button className="admin-sidebar-logout" onClick={onLogout}>↪ Logout</button></div>
      </aside>
      <section className="admin-main">
        <header className="admin-topbar"><div><span className="admin-topbar-eyebrow">SNEH TRAVEL / ADMIN</span><h1>{activeTab === "dashboard" ? "Dashboard" : activeTab === "hotels" ? "Hotel Management" : activeTab === "enquiries" ? "Customer Enquiries" : activeTab === "supplier-ledger" ? "Supplier Payment Ledger" : activeTab === "invoices" ? "Invoices" : activeTab === "standalone-hotel" ? "Standalone Hotel Booking" : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1></div><div className="admin-topbar-actions"><button type="button" onClick={refreshAdminData}>↻ Refresh</button><div className="admin-user-chip"><span>ST</span><div><strong>Admin</strong><small>Super Admin</small></div></div></div></header>
        {activeTab === "dashboard" && (<div className="admin-dashboard-view">
          <div className="admin-welcome-card"><div><span>OVERVIEW</span><h2>Welcome to your travel business dashboard</h2><p>Manage customer enquiries, quotations, bookings and hotels from one place.</p></div><div className="admin-date-card"><strong>{new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</strong><small>Today</small></div></div>
          <div className="admin-stat-grid"><button onClick={() => setActiveTab("enquiries")}><span>📩</span><div><small>Total Enquiries</small><strong>{adminDashboard.enquiries}</strong><em>View enquiries →</em></div></button><button onClick={() => setActiveTab("hotels")}><span>🏨</span><div><small>Hotel Rates</small><strong>{dashboardLoading ? "…" : adminDashboard.hotels}</strong><em>Manage hotels →</em></div></button><button onClick={() => setActiveTab("customers")}><span>👥</span><div><small>Customers</small><strong>{enquiries.length}</strong><em>View customers →</em></div></button><button onClick={() => setActiveTab("quotations")}><span>📄</span><div><small>Quotations</small><strong>{quotations.length}</strong><em>View quotations →</em></div></button></div>
          <div className="admin-dashboard-grid"><section className="admin-card"><div className="admin-card-head"><div><span>LEADS</span><h3>Recent Customer Enquiries</h3></div><button onClick={() => setActiveTab("enquiries")}>View all →</button></div>{enquiries.length === 0 ? <div className="admin-empty">📭<strong>No enquiries yet</strong><p>New website enquiries will appear here.</p></div> : <div className="admin-recent-list">{enquiries.slice(0,6).map((item) => <button key={item.id} onClick={() => setActiveTab("enquiries")}><span>{String(item.name || "C").trim().charAt(0).toUpperCase()}</span><div><strong>{item.name || "Customer"}</strong><small>{item.destination || "Destination not specified"}</small></div><div className="recent-meta"><strong>{item.phone || "—"}</strong><small>{item.travel_date || "Date not specified"}</small></div></button>)}</div>}</section><section className="admin-card"><div className="admin-card-head"><div><span>QUICK ACTIONS</span><h3>Manage Your Website</h3></div></div><button className="admin-quick-action" onClick={() => setActiveTab("hotels")}>🏨 <div><strong>Hotel Builder</strong><small>Manage rates and validity dates</small></div>→</button><button className="admin-quick-action" onClick={() => setActiveTab("enquiries")}>📩 <div><strong>Customer Enquiries</strong><small>Review incoming leads</small></div>→</button></section></div>
          
        </div>)}

      {/* ===================================================
          ENQUIRIES TAB
      =================================================== */}

      {activeTab === "enquiries" && (
        <div className="admin-section">

          <div className="admin-section-header">
            <div>
              <h2>Customer Enquiries</h2>
              <p>
                Total enquiries: {enquiries.length}
              </p>
            </div>

            <div className="admin-actions">

              <button
                onClick={onRefresh}
                className="admin-button"
              >
                Refresh
              </button>

              <button
                onClick={onClear}
                className="admin-delete-all"
              >
                Delete All
              </button>

            </div>
          </div>


          {enquiries.length === 0 ? (
            <div className="empty-admin">
              <h3>No enquiries yet</h3>
              <p>
                Customer enquiries will appear here.
              </p>
            </div>
          ) : (
            <div className="admin-table-wrapper">

              <table className="admin-table">

                <thead>
                  <tr>
                    <th>Enquiry No.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Destination</th>
                    <th>Travel Date</th>
                    <th>Adults</th>
                    <th>Children</th>
                    <th>Rooms</th>
                    <th>Hotel</th>
                    <th>Meal</th>
                    <th>Transport</th>
                    <th>Budget</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {enquiries.map((enquiry, index) => (
                    <tr key={enquiry.id}>

                      <td><strong>{enquirySerial(enquiry, index)}</strong></td>

                      <td>{enquiry.name || "-"}</td>

                      <td>{enquiry.phone || "-"}</td>

                      <td>{enquiry.email || "-"}</td>

                      <td>
                        {enquiry.destination || "-"}
                      </td>

                      <td>
                        {enquiry.travel_date || "-"}
                      </td>

                      <td>
                        {enquiry.adults ?? "-"}
                      </td>

                      <td>
                        {enquiry.children ?? "-"}
                      </td>

                      <td>
                        {enquiry.rooms ?? "-"}
                      </td>

                      <td>
                        {enquiry.hotel_category || "-"}
                      </td>

                      <td>
                        {enquiry.meal_plan || "-"}
                      </td>

                      <td>
                        {enquiry.transport || "-"}
                      </td>

                      <td>
                        {enquiry.budget || "-"}
                      </td>

                      <td><button className="admin-button" onClick={() => setSelectedEnquiryMessage(enquiry)}>💬 View Message</button></td>

                      <td>

                        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                          <button className="admin-button" onClick={() => setSelectedCustomer(enquiry)}>Customer</button>
                          <button className="admin-button" onClick={() => openQuotation(enquiry)}>Quotation</button>
                          <button className="admin-button" onClick={() => openBooking(enquiry)}>Booking</button>
                          <button className="delete-button" onClick={() => onDelete(enquiry.id)}>Delete</button>
                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>
      )}


      {/* ===================================================
          PACKAGES TAB
      =================================================== */}

      {activeTab === "customers" && (
        <div className="admin-section">
          <div className="admin-section-header"><div><h2>Customer Details</h2><p>Customers collected from website enquiries.</p></div></div>
          {enquiries.length === 0 ? <div className="empty-admin"><h3>No customers yet</h3></div> : <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Customer No.</th><th>Name</th><th>Phone</th><th>Email</th><th>Destination</th><th>Travel Date</th><th>Action</th></tr></thead><tbody>{enquiries.map((e,i)=><tr key={e.id}><td><strong>CUS-{new Date(e.created_at || Date.now()).getFullYear()}-{String(i+1).padStart(4,"0")}</strong></td><td>{e.name || "-"}</td><td>{e.phone || "-"}</td><td>{e.email || "-"}</td><td>{e.destination || "-"}</td><td>{e.travel_date || "-"}</td><td><button className="admin-button" onClick={()=>setSelectedCustomer(e)}>View Details</button></td></tr>)}</tbody></table></div>}
        </div>
      )}

      {activeTab === "supplier-ledger" && (() => {
        if (!supplierLedgerBooking) {
          return (
            <div className="admin-section supplier-ledger-page">
              <div className="admin-section-header supplier-ledger-header">
                <div>
                  <span className="supplier-ledger-eyebrow">SUPPLIER PAYMENT CONTROL</span>
                  <h2>Supplier Payment Ledger</h2>
                  <p>View hotel and supplier purchase, payment and outstanding balance for every booking.</p>
                </div>
                <button type="button" className="admin-button" onClick={refreshAdminData}>↻ Refresh Ledger</button>
              </div>

              {bookings.length === 0 ? (
                <div className="empty-admin">
                  <h3>No bookings available</h3>
                  <p>Create a booking first. Supplier payment records will appear here automatically.</p>
                  <button type="button" className="admin-add-button" onClick={() => setActiveTab("bookings")}>Go to Bookings →</button>
                </div>
              ) : (
                <div className="supplier-ledger-card">
                  <div className="supplier-ledger-card-head">
                    <div><span>ALL BOOKINGS</span><h3>Supplier Ledger Summary</h3></div>
                    <small>Click “Open Ledger” to manage supplier payments for a booking.</small>
                  </div>
                  <div className="admin-table-wrapper">
                    <table className="admin-table supplier-ledger-table">
                      <thead><tr><th>Sr.</th><th>Booking No.</th><th>Guest</th><th>Destination</th><th>Travel Date</th><th>Supplier Purchase</th><th>Supplier Paid</th><th>Outstanding</th><th>Sale</th><th>Action</th></tr></thead>
                      <tbody>
                        {bookings.map((booking,index)=>{
                          const t=supplierLedgerTotals(booking);
                          return <tr key={booking.id}>
                            <td><strong>{index+1}</strong></td>
                            <td><strong>{booking.serial_no || "-"}</strong>{booking.quotationNo?<small style={{display:"block",marginTop:4}}>Quote: {booking.quotationNo}</small>:null}</td>
                            <td><strong>{booking.customer_name || "-"}</strong><small style={{display:"block",marginTop:4}}>{booking.phone || "-"}</small></td>
                            <td>{booking.destination || "-"}</td>
                            <td>{booking.travelDate || "-"}</td>
                            <td>₹{t.purchase.toLocaleString("en-IN")}</td>
                            <td>₹{t.paid.toLocaleString("en-IN")}</td>
                            <td><strong>₹{t.outstanding.toLocaleString("en-IN")}</strong></td>
                            <td>₹{t.sale.toLocaleString("en-IN")}</td>
                            <td><button type="button" className="admin-add-button" onClick={()=>openSupplierLedger(booking)}>🏦 Open Ledger</button></td>
                          </tr>;
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        }

        const t=supplierLedgerTotals(supplierLedgerBooking);
        const sale=t.sale;
        return (
          <div className="admin-section supplier-ledger-page">
            <div className="admin-section-header supplier-ledger-header">
              <div>
                <button className="admin-button" onClick={closeSupplierLedger}>← Back to Bookings</button>
                <span className="supplier-ledger-eyebrow">BOOKING PAYMENT CONTROL</span>
                <h2>Supplier Payment Ledger — {supplierLedgerBooking.serial_no}</h2>
                <p>{supplierLedgerBooking.customer_name || "Customer"} · {supplierLedgerBooking.destination || "Destination"} · Travel Date: {supplierLedgerBooking.travelDate || "-"}</p>
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"}}><button type="button" className="admin-button" onClick={refreshAdminData}>↻ Refresh Ledger</button><button className="admin-add-button" onClick={()=>openCustomerPaymentForBooking(supplierLedgerBooking)}>💳 Customer Payment</button></div>
            </div>

            <div className="supplier-ledger-summary">
              <div><span>Customer Sale</span><strong>₹{sale.toLocaleString("en-IN")}</strong></div>
              <div><span>Total Supplier Purchase</span><strong>₹{t.purchase.toLocaleString("en-IN")}</strong></div>
              <div><span>Supplier Paid</span><strong>₹{t.paid.toLocaleString("en-IN")}</strong></div>
              <div><span>Outstanding Balance</span><strong>₹{t.outstanding.toLocaleString("en-IN")}</strong></div>
              <div className={t.profit>=0?"profit-card":"loss-card"}><span>Booking Profit</span><strong>₹{t.profit.toLocaleString("en-IN")}</strong></div>
              <div><span>Profit Margin</span><strong>{t.margin.toFixed(2)}%</strong></div>
            </div>

            <div className="supplier-ledger-card">
              <div className="supplier-ledger-card-head"><div><span>SUPPLIER LEDGER</span><h3>Supplier Payables &amp; Outstanding</h3></div><small>Each hotel and cab is maintained separately.</small></div>
              <div className="admin-table-wrapper"><table className="admin-table supplier-ledger-table">
                <thead><tr><th>Sr.</th><th>Service / Hotel</th><th>Supplier</th><th>Purchase Amt.</th><th>Paid Amt.</th><th>Balance</th><th>Payment Deadline</th><th>Last Paid Date</th><th>Profit / Margin</th><th>Action</th></tr></thead>
                <tbody>
                  {t.rows.map((item,index)=>{
                    const paid=supplierPaidAmount(item);
                    const balance=supplierBalance(item);
                    const serviceSale=supplierServiceSales(item, supplierLedgerBooking, t.purchase);
                    const serviceProfit=serviceSale-(Number(item.amountPayable)||0);
                    const serviceMargin=serviceSale>0?(serviceProfit/serviceSale)*100:0;
                    return <React.Fragment key={item.id}>
                      <tr>
                        <td><strong>{index+1}</strong></td>
                        <td><strong>{item.serviceName || item.serviceType || "Service"}</strong><small style={{display:"block",marginTop:4}}>{item.serviceType||""}{item.city?` · ${item.city}`:""}{item.nights?` · ${item.nights}N`:""}</small></td>
                        <td><strong>{item.supplierName || "Supplier not assigned"}</strong></td>
                        <td>₹{Number(item.amountPayable||0).toLocaleString("en-IN")}</td>
                        <td><input type="number" min="0" max={Number(item.amountPayable||0)} value={paid} onChange={e=>updateSupplierPaidDetails(item.id,"paidAmount",e.target.value)} style={{width:110}} /></td>
                        <td><strong className={balance>0?"supplier-not-clear":"supplier-clear"}>₹{balance.toLocaleString("en-IN")}</strong></td>
                        <td><input className="supplier-deadline-input" type="date" value={item.paymentDeadline||""} onChange={e=>updateSupplierDeadline(item.id,e.target.value)} /></td>
                        <td><input className="supplier-deadline-input" type="date" value={supplierLastPaymentDate(item)} onChange={e=>updateSupplierPaidDetails(item.id,"lastPaymentDate",e.target.value)} /></td>
                        <td><strong>{serviceSale ? `₹${serviceProfit.toLocaleString("en-IN")}` : "—"}</strong><small style={{display:"block",marginTop:3}}>{serviceSale ? `${serviceMargin.toFixed(2)}%` : "Sales not allocated"}</small></td>
                        <td><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><button className="admin-add-button" onClick={()=>openSupplierPayment(item)} disabled={balance<=0}>💳 Add Payment</button><button type="button" className="admin-button" onClick={()=>{const live=supplierPayables.find(x=>String(x.id)===String(item.id))||item;setSupplierPaymentHistoryTarget({...live,payments:Array.isArray(live.payments)?live.payments:[]});}}>👁 Payment Details</button><button className="admin-button" onClick={()=>openConfirmationPreview("unified",supplierLedgerBooking)}>👁 View Confirmation</button><button className="admin-button" onClick={()=>downloadConfirmationWord("unified",supplierLedgerBooking)}>⬇ Word</button></div></td>
                      </tr>
                      {(item.payments||[]).length>0 && <tr className="supplier-payment-subrow"><td colSpan="10"><div className="supplier-payment-subledger"><strong>Payment History — {item.supplierName || item.serviceName}</strong>{item.payments.map(payment=><div key={payment.id}><span>{payment.paymentDate || "—"}</span><span>{payment.bookingNo || item.bookingNo || "—"}</span><span>Quote: {payment.quotationNo || item.quotationNo || "—"}</span><span>{payment.paymentMode || "—"}</span><span>{payment.reference || "No reference"}</span><strong>₹{Number(payment.amount||0).toLocaleString("en-IN")}</strong><button className="admin-delete" onClick={()=>deleteSupplierPayment(item.id,payment.id)}>Delete</button></div>)}</div></td></tr>}
                    </React.Fragment>;
                  })}
                </tbody>
                <tfoot><tr><td colSpan="2"><strong>TOTAL SUPPLIER COST</strong></td><td><strong>₹{t.purchase.toLocaleString("en-IN")}</strong></td><td><strong>₹{t.paid.toLocaleString("en-IN")}</strong></td><td><strong>₹{t.outstanding.toLocaleString("en-IN")}</strong></td><td colSpan="4"><strong>Total payments made: {t.rows.reduce((n,x)=>n+(x.payments||[]).length,0)}</strong></td></tr></tfoot>
              </table></div>
            </div>

            <div className="supplier-ledger-bottom-grid">
              <div className="supplier-ledger-card"><div className="supplier-ledger-card-head"><div><span>PAYMENT HISTORY</span><h3>Payments Made to Suppliers</h3></div></div><div className="supplier-money-list">{t.rows.flatMap(item=>(item.payments||[]).map(payment=><div key={payment.id}><div><strong>{item.supplierName || item.serviceName}</strong><small>{item.bookingNo || payment.bookingNo || "—"} · Quote: {item.quotationNo || payment.quotationNo || "—"} · {payment.paymentDate || "—"} · {payment.paymentMode || "—"}</small></div><strong>₹{Number(payment.amount||0).toLocaleString("en-IN")}</strong></div>)).length ? t.rows.flatMap(item=>(item.payments||[]).map(payment=><div key={`${item.id}-${payment.id}`}><div><strong>{item.supplierName || item.serviceName}</strong><small>{item.bookingNo || payment.bookingNo || "—"} · Quote: {item.quotationNo || payment.quotationNo || "—"} · {payment.paymentDate || "—"} · {payment.paymentMode || "—"}</small></div><strong>₹{Number(payment.amount||0).toLocaleString("en-IN")}</strong></div>)) : <p className="muted">No supplier payment made yet.</p>}</div></div>
              <div className="supplier-ledger-card"><div className="supplier-ledger-card-head"><div><span>BOOKING PROFIT</span><h3>Sale vs Supplier Purchase</h3></div></div><div className="profit-breakup"><div><span>Customer Sale</span><strong>₹{sale.toLocaleString("en-IN")}</strong></div><div><span>Supplier Purchase</span><strong>− ₹{t.purchase.toLocaleString("en-IN")}</strong></div><div className={t.profit>=0?"profit-total":"loss-total"}><span>{t.profit>=0?"Gross Profit":"Gross Loss"}</span><strong>₹{t.profit.toLocaleString("en-IN")}</strong></div><div><span>Profit Margin</span><strong>{t.margin.toFixed(2)}%</strong></div></div></div>
            </div>
          </div>
        );
      })()}

      {activeTab === "supplier-payments" && (
        <div className="admin-section">
          <div className="admin-section-header"><div><span className="supplier-ledger-eyebrow">BOOKINGS → SUPPLIER PAYMENTS → SUPPLIER LEDGER</span><h2>Supplier Payments</h2><p>Manage supplier payable, add payments, payment history and outstanding balance booking-wise.</p></div><button className="admin-add-button" onClick={addSupplierPayable}>+ Add Supplier Payable</button></div>
          <div className="supplier-workflow-bar"><span>1. Bookings</span><b>→</b><span>2. Supplier Payments</span><b>→</b><span>3. Supplier Ledger</span><b>→</b><span>4. Add Payment</span><b>→</b><span>5. Payment History</span><b>→</b><span>6. Outstanding Balance</span></div>
          {supplierPayables.length===0 ? <div className="empty-admin"><h3>No supplier payables yet</h3><p>Supplier payable records will be created automatically when you save a booking.</p></div> : <>
            <div className="supplier-summary-grid">{(()=>{const t=supplierPayables.filter(x=>!isLegacySupplierRow(x)).reduce((a,x)=>{a.payable+=Number(x.amountPayable)||0;a.paid+=supplierPaidAmount(x);a.balance+=supplierBalance(x);return a},{payable:0,paid:0,balance:0});return <><div><span>Total Supplier Purchase Cost</span><strong>₹{t.payable.toLocaleString("en-IN")}</strong></div><div><span>Total Supplier Paid</span><strong>₹{t.paid.toLocaleString("en-IN")}</strong></div><div><span>Outstanding Balance</span><strong>₹{t.balance.toLocaleString("en-IN")}</strong></div></>;})()}</div>
            <div className="admin-table-wrapper"><table className="admin-table supplier-detail-table"><thead><tr><th>Sr.</th><th>Booking / Guest</th><th>Supplier</th><th>Service</th><th>Purchase Amt.</th><th>Sales Amt.</th><th>Customer Advance</th><th>Customer Balance</th><th>Supplier Paid</th><th>Supplier Balance</th><th>Payment Clear?</th><th>Action</th></tr></thead><tbody>{supplierPayables.filter(item=>!isLegacySupplierRow(item)).map((item,index)=>{
              const booking=bookings.find(x=>String(x.id)===String(item.bookingId));
              const salesAmount=item.salesAmount !== undefined ? Number(item.salesAmount)||0 : (Number(item.customerSalesAmount)||0);
              const customerAdvance=Number(booking?.advancePaid)||0;
              const customerBalance=Number(booking?.balanceAmount);
              const derivedBalance=Number.isFinite(customerBalance) ? customerBalance : Math.max(0,(Number(booking?.finalSaleAmount||booking?.totalAmount||booking?.amount)||0)-customerAdvance);
              const status=supplierPayableStatus(item);
              return <tr key={item.id}>
                <td><strong>{index+1}</strong></td>
                <td><strong>{item.bookingNo||"-"}</strong><small style={{display:"block",marginTop:4}}>{item.customerName||booking?.customer_name||"Guest"}</small>{item.travelDate||booking?.travelDate?<small style={{display:"block",marginTop:4}}>Travel: {item.travelDate||booking?.travelDate}</small>:null}</td>
                <td><div style={{minWidth:150}}><button className="supplier-name-link" onClick={()=>openSupplierBank(item.supplierName||"")} disabled={!String(item.supplierName||"").trim()}>{item.supplierName||"Supplier"}</button><input value={item.supplierName||""} onChange={e=>updateSupplierPayable(item.id,"supplierName",e.target.value)} placeholder="Supplier name"/><small className="supplier-bank-hint">Click supplier name to view / add bank details</small></div></td>
                <td><strong>{item.serviceType||"Other Activity"}</strong><small style={{display:"block",marginTop:4}}>{item.serviceName||"Other Activity"}</small>{item.serviceType==="Hotel"&&<small style={{display:"block",marginTop:6,lineHeight:1.55}}>Hotel: {item.serviceName||"—"}<br/>Check-in: {item.checkIn||"—"} · Check-out: {item.checkOut||"—"}<br/>Rooms: {item.roomCount||0} · Room ₹{Number(item.roomPurchaseAmount||0).toLocaleString("en-IN")}<br/>Extra Bed: {item.extraBedCount||0} · ₹{Number(item.extraBedPurchaseAmount||0).toLocaleString("en-IN")}<br/>Child + Bed: {item.childWithBedCount||0} · ₹{Number(item.childWithBedPurchaseAmount||0).toLocaleString("en-IN")}<br/>Child No Bed: {item.childWithoutBedCount||0} · ₹{Number(item.childWithoutBedPurchaseAmount||0).toLocaleString("en-IN")}</small>}</td>
                <td><input type="number" min="0" value={item.amountPayable??0} onChange={e=>updateSupplierPayable(item.id,"amountPayable",Number(e.target.value)||0)}/></td>
                <td><input type="number" min="0" value={salesAmount} onChange={e=>updateSupplierPayable(item.id,"salesAmount",Number(e.target.value)||0)}/></td>
                <td>₹{customerAdvance.toLocaleString("en-IN")}</td>
                <td>₹{Math.max(0,derivedBalance).toLocaleString("en-IN")}</td>
                <td>₹{supplierPaidAmount(item).toLocaleString("en-IN")}</td>
                <td>₹{supplierBalance(item).toLocaleString("en-IN")}</td>
                <td><span className={`supplier-clear-status ${status==='Paid'?'clear':'not-clear'}`}>{status==='Paid'?'✓ Clear':'✕ Not Clear'}</span></td>
                <td><div style={{display:"flex",gap:6,flexWrap:"wrap",minWidth:300}}>
                  <button className="admin-button" onClick={()=>openSupplierPayment(item)} disabled={supplierBalance(item)<=0}>💳 Add Payment</button>
                  <button className="admin-button" onClick={()=>{const b=bookings.find(x=>String(x.id)===String(item.bookingId));if(b)openConfirmationPreview("unified",b);}} disabled={!booking}>👁 View Confirmation</button>
                  <button className="admin-button" onClick={()=>{const b=bookings.find(x=>String(x.id)===String(item.bookingId));if(b)downloadConfirmationWord("unified",b);}} disabled={!booking}>⬇ Word</button>
                  <button className="admin-button" onClick={()=>{const b=bookings.find(x=>String(x.id)===String(item.bookingId));if(b)openSupplierLedger(b);}} disabled={!booking}>📒 Supplier Ledger</button>
                  <button className="admin-button" onClick={()=>{const b=bookings.find(x=>String(x.id)===String(item.bookingId));if(b)setViewBooking(b);}} disabled={!booking}>View Booking</button>
                  <button className="admin-delete" onClick={()=>deleteSupplierPayable(item.id)}>Delete</button>
                </div></td>
              </tr>;
            })}</tbody></table></div>
            <div className="supplier-payment-history"><h3>Payment History</h3>{supplierPayables.every(x=>!(x.payments||[]).length)?<p className="muted">No supplier payments recorded yet.</p>:supplierPayables.flatMap(item=>(item.payments||[]).map(payment=><div className="supplier-history-row" key={payment.id}><div><strong>{item.supplierName||item.serviceName}</strong><small>Service: {item.serviceName||item.serviceType||"Service"} · Booking: {item.bookingNo||payment.bookingNo||"—"} · Quotation: {item.quotationNo||payment.quotationNo||"—"} · Guest: {item.customerName||"Guest"} · Date: {payment.paymentDate||"—"} · Mode: {payment.paymentMode||"—"}{payment.reference?` · Ref: ${payment.reference}`:""}</small></div><strong>₹{Number(payment.amount||0).toLocaleString("en-IN")}</strong><button className="admin-button" onClick={()=>setSupplierPaymentHistoryTarget({...item,selectedPayment:payment})}>View</button><button className="admin-delete" onClick={()=>deleteSupplierPayment(item.id,payment.id)}>Delete</button></div>))}</div>
          </>}
        </div>
      )}

      {activeTab === "invoices" && (() => {
        const regularInvoices = bookings.map((b,index) => ({
          ...b,
          invoiceType: "Package Booking",
          invoiceNo: b.invoiceNo || invoiceNumberForBooking(b),
          invoiceDate: b.invoiceDate || String(b.created_at || new Date().toISOString()).slice(0,10),
          displayBookingNo: b.serial_no || "-",
          displayCustomer: b.customer_name || "-",
          displayDestination: b.destination || "-",
          displayTotal: Number(b.finalSaleAmount || b.totalAmount || b.amount || 0),
          displayPaymentStatus: b.paymentStatus || "Pending"
        }));
        const standaloneInvoices = standaloneHotelBookings
          .filter(b => b && b.invoiceNo)
          .map(b => ({
            ...b,
            invoiceType: "Standalone Hotel",
            displayBookingNo: b.bookingNo || "-",
            displayCustomer: b.customerName || "-",
            displayDestination: b.destination || b.city || "-",
            displayTotal: Number(b.saleAmount || 0),
            displayPaymentStatus: b.paymentStatus || (Number(b.advanceReceived || 0) >= Number(b.saleAmount || 0) && Number(b.saleAmount || 0) > 0 ? "Paid" : "Pending")
          }));
        const allInvoices = [...regularInvoices, ...standaloneInvoices].sort((a,b) => String(b.invoiceDate || "").localeCompare(String(a.invoiceDate || "")));
        return <div className="admin-section">
          <div className="admin-section-header">
            <div><span className="eyebrow">SALES DOCUMENTS</span><h2>Invoice List</h2><p>All saved package and standalone hotel invoices are maintained here.</p></div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}><span className="admin-user-chip" style={{padding:"8px 12px"}}><strong>{allInvoices.length}</strong>&nbsp; Invoice(s)</span></div>
          </div>
          {allInvoices.length===0 ? <div className="empty-admin"><h3>No invoices yet</h3><p>Create an invoice from a confirmed booking or Standalone Hotel Sales. It will be saved here automatically.</p></div> : <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Type</th><th>Invoice No.</th><th>Booking No.</th><th>Customer</th><th>Hotel / Destination</th><th>Invoice Date</th><th>Total Amount</th><th>Payment Status</th><th>Action</th></tr></thead><tbody>{allInvoices.map((inv,index)=> <tr key={`${inv.invoiceType}-${inv.id}`}>
            <td><strong>{index+1}</strong></td>
            <td><span className="status-pill">{inv.invoiceType}</span></td>
            <td><strong>{inv.invoiceNo}</strong></td>
            <td>{inv.displayBookingNo}</td>
            <td>{inv.displayCustomer}</td>
            <td>{inv.displayDestination}</td>
            <td>{inv.invoiceDate || "-"}</td>
            <td><strong>₹{inv.displayTotal.toLocaleString("en-IN")}</strong></td>
            <td>{inv.displayPaymentStatus}</td>
            <td><div style={{display:"flex",gap:6,flexWrap:"wrap",minWidth:230}}>
              {inv.invoiceType === "Standalone Hotel" ? <><button className="admin-button" onClick={()=>openStandaloneHotelInvoice(inv)}>View Invoice</button><button className="admin-button" onClick={()=>printStandaloneHotelInvoice(inv)}>Print</button><button className="admin-add-button" onClick={()=>emailStandaloneHotelInvoice(inv)}>✉️ Send Mail</button></> : <><button className="admin-button" onClick={()=>openInvoicePreview(inv)}>View Invoice</button><button className="admin-button" onClick={()=>downloadInvoiceWord(inv)}>Download Word</button><button className="admin-button" onClick={()=>printInvoice(inv)}>Print</button></>}
            </div></td>
          </tr>)}</tbody></table></div>}
        </div>;
      })()}

      {activeTab === "quotations" && (
        <div className="admin-section">
          <div className="admin-section-header"><div><h2>Quotations</h2><p>Create and view quotations with automatic serial numbers.</p></div><button className="admin-add-button" onClick={()=>enquiries[0] ? openQuotation(enquiries[0]) : alert("Please add an enquiry first.")}>+ Create Quotation</button></div>
          {quotations.length === 0 ? <div className="empty-admin"><h3>No quotations yet</h3><p>Create a quotation from any enquiry.</p></div> : <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Quotation No.</th><th>Customer</th><th>Destination</th><th>Travel Date</th><th>Amount</th><th>Created</th><th>Action</th></tr></thead><tbody>{quotations.map((q,index)=><tr key={q.id}><td><strong>{index+1}</strong></td><td><strong>{q.serial_no}</strong></td><td>{q.customer_name}</td><td><strong>{q.destination || "-"}</strong>{q.destinations?.length ? <small style={{display:"block",marginTop:4}}>{q.destinations.map(d => d.hotelCity || d.city || d.stayCity).filter(Boolean).join(" · ")}</small> : null}</td><td>{q.travelDate || "-"}</td><td>{q.price || "-"}</td><td>{q.created_at ? new Date(q.created_at).toLocaleDateString() : "-"}</td><td><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><button type="button" className="admin-button" onClick={(e)=>{e.preventDefault();e.stopPropagation();setViewQuotation(q);}}>View</button><button className="admin-button" onClick={()=>openQuotation(null,q)}>Edit</button><button className="admin-button" onClick={()=>modifyQuotation(q)}>Modify</button><button className="admin-delete" onClick={()=>deleteQuotation(q)}>Delete</button><button className="admin-button" onClick={()=>openBooking({id:q.enquiry_id,name:q.customer_name,phone:q.phone,email:q.email,destination:q.destination},q)}>Create Booking</button></div></td></tr>)}</tbody></table></div>}
        </div>
      )}

      {activeTab === "agent-management" && <AgentManagement />}

      {activeTab === "standalone-hotel" && (() => {
        const f = standaloneHotelForm;
        const hotels = standaloneHotelInventory.hotels || [];
        const rates = standaloneHotelInventory.rates.filter(r => !f.hotelName || String(r.hotel?.name) === String(f.hotelName));
        const setF = (patch) => setStandaloneHotelForm(prev => standaloneHotelRecalculate(patch));
        const sale = Number(f.saleAmount) || 0, purchase = Number(f.purchaseAmount) || 0, balance = Math.max(0, sale - (Number(f.advanceReceived)||0));
        return <div className="admin-section">
          <div className="admin-section-header">
            <div><span className="eyebrow">HOTEL SALES</span><h2>Standalone Hotel Booking</h2><p>Create a hotel-only booking without creating a package quotation or transport booking.</p></div>
            <button className="admin-add-button" onClick={newStandaloneHotelBooking}>+ New Hotel Booking</button>
          </div>
          <div className="admin-card" style={{marginBottom:20}}>
            <div className="booking-form-section"><h4>1. Guest Details</h4><div className="admin-form-grid">
              <label>Customer Name *<input value={f.customerName} onChange={e=>setF({customerName:e.target.value})}/></label>
              <label>Phone<input value={f.phone} onChange={e=>setF({phone:e.target.value})}/></label>
              <label>Email<input type="email" value={f.email} onChange={e=>setF({email:e.target.value})}/></label>
              <label>Destination<input value={f.destination} onChange={e=>setF({destination:e.target.value})}/></label>
              <label>Adults<input type="number" min="1" value={f.adults} onChange={e=>setF({adults:e.target.value})}/></label>
              <label>Children<input type="number" min="0" value={f.children} onChange={e=>setF({children:e.target.value})}/></label>
            </div></div>
            <div className="booking-form-section"><h4>2. Hotel & Stay</h4><div className="admin-form-grid">
              <label>Hotel Name *<input value={f.hotelName} onChange={e=>setF({hotelName:e.target.value})} placeholder="Enter hotel name"/><small style={{display:"block",marginTop:5,color:"#64748b"}}>Hotel name can be entered or edited manually.</small></label>
              <label>Select from Hotel Master<select value="" onChange={e=>selectStandaloneHotel(e.target.value)}><option value="">Select saved hotel (optional)</option>{hotels.map(h=><option key={h.id} value={h.name}>{h.name} — {h.city}</option>)}</select></label>
              <label>City<input value={f.city} onChange={e=>setF({city:e.target.value})}/></label>
              <label>Check-in *<input type="date" value={f.checkIn} onChange={e=>setF({checkIn:e.target.value})}/></label>
              <label>Check-out *<input type="date" value={f.checkOut} onChange={e=>setF({checkOut:e.target.value})}/></label>
              <label>Nights<input type="number" min="0" value={f.nights} readOnly/></label>
              <label>Rooms<input type="number" min="1" value={f.rooms} onChange={e=>setF({rooms:e.target.value})}/></label>
              <label>Room Type<select value={f.roomType} onChange={e=>setF({roomType:e.target.value})}><option>Single</option><option>Double</option><option>Twin</option><option>Triple</option><option>Suite</option></select></label>
              <label>Meal Plan<select value={f.mealPlan} onChange={e=>setF({mealPlan:e.target.value})}><option value="EP">EP — Room Only</option><option value="CP">CP — Breakfast Included</option><option value="MAP">MAP — Breakfast + Dinner</option><option value="AP">AP — Breakfast + Lunch + Dinner</option></select></label>
              <label style={{gridColumn:"1 / -1"}}>Saved Hotel Rate<select value="" onChange={e=>applyStandaloneHotelRate(e.target.value)}><option value="">Select saved rate (optional)</option>{rates.map(r=><option key={r.id} value={r.id}>{r.room_type || "Room"} · {r.meal_plan || "-"} · ₹{Number(r.room_rate_per_night ?? r.room_rate ?? 0).toLocaleString("en-IN")}/night</option>)}</select>{standaloneHotelLoading && <small>Loading hotel rates…</small>}</label>
            </div></div>
            <div className="booking-form-section"><h4>3. Sale & Purchase Calculation</h4><div className="admin-form-grid">
              <label>Customer Sale Room Rate / Night<input type="number" min="0" value={f.roomRate} onChange={e=>setF({roomRate:e.target.value})}/></label>
              <label>Extra Bed Sale Rate / Night<input type="number" min="0" value={f.extraBed} onChange={e=>setF({extraBed:e.target.value})}/></label>
              <label>Extra Beds<input type="number" min="0" value={f.extraBedRooms || 0} onChange={e=>setF({extraBedRooms:e.target.value})}/></label>
              <label>Child With Bed Rate<input type="number" min="0" value={f.childWithBed} onChange={e=>setF({childWithBed:e.target.value})}/></label>
              <label>Child With Bed Qty<input type="number" min="0" value={f.childWithBedRooms || 0} onChange={e=>setF({childWithBedRooms:e.target.value})}/></label>
              <label>Child Without Bed Rate<input type="number" min="0" value={f.childWithoutBed} onChange={e=>setF({childWithoutBed:e.target.value})}/></label>
              <label>Child Without Bed Qty<input type="number" min="0" value={f.childWithoutBedRooms || 0} onChange={e=>setF({childWithoutBedRooms:e.target.value})}/></label>
              <label>Hotel Purchase Room Rate / Night<input type="number" min="0" value={f.purchaseRoomRate ?? 0} onChange={e=>setF({purchaseRoomRate:e.target.value})}/></label>
              <label>Purchase Extra Bed Rate / Night<input type="number" min="0" value={f.purchaseExtraBedRate ?? 0} onChange={e=>setF({purchaseExtraBedRate:e.target.value})}/></label>
              <label>Purchase Extra Beds<input type="number" min="0" value={f.purchaseExtraBeds ?? 0} onChange={e=>setF({purchaseExtraBeds:e.target.value})}/></label>
              <label>Purchase Child With Bed Rate<input type="number" min="0" value={f.purchaseChildWithBedRate ?? 0} onChange={e=>setF({purchaseChildWithBedRate:e.target.value})}/></label>
              <label>Purchase Child With Bed Qty<input type="number" min="0" value={f.purchaseChildrenWithBed ?? 0} onChange={e=>setF({purchaseChildrenWithBed:e.target.value})}/></label>
              <label>Purchase Child Without Bed Rate<input type="number" min="0" value={f.purchaseChildWithoutBedRate ?? 0} onChange={e=>setF({purchaseChildWithoutBedRate:e.target.value})}/></label>
              <label>Purchase Child Without Bed Qty<input type="number" min="0" value={f.purchaseChildrenWithoutBed ?? 0} onChange={e=>setF({purchaseChildrenWithoutBed:e.target.value})}/></label>
              <label>Hotel Purchase Cost (Calculated)<input type="number" min="0" value={f.purchaseAmount ?? 0} readOnly/></label>
              <label>Supplier Name<input value={f.supplierName} onChange={e=>setF({supplierName:e.target.value})}/></label>
            </div>
            <div className="booking-amount-breakup" style={{marginTop:16}}><div><span>Sale Amount</span><strong>₹{sale.toLocaleString("en-IN")}</strong></div><div><span>Purchase Cost</span><strong>₹{purchase.toLocaleString("en-IN")}</strong></div><div><span>Gross Margin</span><strong>₹{(sale-purchase).toLocaleString("en-IN")}</strong></div></div></div>
            <div className="booking-form-section"><h4>4. Booking & Payment</h4><div className="admin-form-grid">
              <label>Advance Received<input type="number" min="0" value={f.advanceReceived} onChange={e=>setF({advanceReceived:e.target.value})}/></label>
              <label>Balance<input value={`₹${balance.toLocaleString("en-IN")}`} readOnly/></label>
              <label>Booking Status<select value={f.bookingStatus} onChange={e=>setF({bookingStatus:e.target.value})}><option>Pending</option><option>Confirmed</option><option>Payment Pending</option><option>Fully Paid</option><option>Completed</option><option>Cancelled</option></select></label>
              <label>Payment Status<select value={f.paymentStatus} onChange={e=>setF({paymentStatus:e.target.value})}><option>Pending</option><option>Partial Paid</option><option>Fully Paid</option></select></label>
              <label>Hotel Confirmation No.<input value={f.confirmationNo} onChange={e=>setF({confirmationNo:e.target.value})}/></label>
              <label style={{gridColumn:"1 / -1"}}>Notes<textarea rows="3" value={f.notes} onChange={e=>setF({notes:e.target.value})}/></label>
            </div></div>
            <div className="admin-modal-actions"><button className="admin-button" onClick={newStandaloneHotelBooking}>Clear</button><button className="admin-add-button" onClick={saveStandaloneHotelBooking}>{standaloneHotelEditingId ? "Update Hotel Booking" : "Save Hotel Booking"}</button></div>
          </div>
          <div className="admin-card"><div className="admin-card-head"><div><span>HOTEL BOOKINGS</span><h3>Standalone Hotel Sales</h3></div><strong>{standaloneHotelBookings.length} booking(s)</strong></div>
            <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Booking No.</th><th>Guest</th><th>Hotel</th><th>Check-in</th><th>Check-out</th><th>Nights</th><th>Sale</th><th>Purchase</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead><tbody>
              {standaloneHotelBookings.length ? standaloneHotelBookings.map((r,i)=><tr key={r.id}><td>{i+1}</td><td><strong>{r.bookingNo}</strong></td><td>{r.customerName}</td><td>{r.hotelName}<small style={{display:"block",color:"#64748b"}}>{r.city || "-"}</small></td><td>{r.checkIn}</td><td>{r.checkOut}</td><td>{r.nights}</td><td><strong>₹{Number(r.saleAmount||0).toLocaleString("en-IN")}</strong></td><td>₹{Number(r.purchaseAmount||0).toLocaleString("en-IN")}</td><td>₹{Math.max(0,Number(r.saleAmount||0)-Number(r.advanceReceived||0)).toLocaleString("en-IN")}</td><td>{r.bookingStatus}</td><td><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><button className="admin-button" onClick={()=>openStandaloneHotelBookingView(r)}>View Booking</button><button className="admin-add-button" onClick={()=>openStandaloneHotelInvoice(r)}>Create Invoice</button><button className="admin-button" onClick={()=>emailStandaloneHotelInvoice(r)}>✉️ Send on Mail</button><button className="admin-button" onClick={()=>editStandaloneHotelBooking(r)}>Edit</button><button className="admin-delete" onClick={()=>deleteStandaloneHotelBooking(r)}>Delete</button></div></td></tr>) : <tr><td colSpan="12" style={{textAlign:"center",padding:30}}>No standalone hotel bookings yet.</td></tr>}
            </tbody></table></div>
          </div>
        </div>;
      })()}

      {activeTab === "bookings" && (
        <div className="admin-section"><div className="admin-section-header"><div><h2>Bookings</h2><p>Manage customer bookings, booking status and payment balance.</p></div><button className="admin-add-button" onClick={()=>enquiries[0]?openBooking(enquiries[0]):alert("Please add an enquiry first.")}>+ Create Booking</button></div>
          {bookings.length===0?<div className="empty-admin"><h3>No bookings yet</h3><p>Create a booking from an enquiry or quotation.</p></div>:<div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Booking No.</th><th>Invoice No.</th><th>Customer</th><th>Destination</th><th>Travel Date</th><th>Total</th><th>Advance</th><th>Balance</th><th>Booking Status</th><th>Payment</th><th>Action</th></tr></thead><tbody>{bookings.map((b,index)=><tr key={b.id}><td><strong>{index+1}</strong></td><td><strong>{b.serial_no}</strong>{b.quotationNo?<small style={{display:"block",marginTop:4}}>Quote: {b.quotationNo}</small>:null}</td><td><strong>{b.invoiceNo || invoiceNumberForBooking(b)}</strong></td><td><strong>{b.customer_name}</strong><small style={{display:"block",marginTop:4}}>{b.phone||"-"}</small></td><td>{b.destination||"-"}</td><td>{b.travelDate||"-"}</td><td>₹{Number(b.totalAmount||b.amount||0).toLocaleString("en-IN")}</td><td>₹{Number(b.advancePaid||0).toLocaleString("en-IN")}</td><td>₹{Number(b.balanceAmount||0).toLocaleString("en-IN")}</td><td>{b.bookingStatus||b.status||"Pending"}</td><td>{b.paymentStatus||"Pending"}</td><td><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><button className="admin-button" onClick={()=>setViewBooking(b)}>View</button><button className="admin-button" onClick={()=>openConfirmationPreview("unified",b)}>👁 View Confirmation</button><button className="admin-add-button" onClick={()=>emailUnifiedConfirmation(b)}>✉️ Send Mail</button><button className="admin-button" onClick={()=>downloadConfirmationWord("unified",b)}>⬇ Download Word</button><button className="admin-add-button" onClick={()=>openInvoicePreview(b)}>🧾 Invoice</button><button className="admin-button" onClick={()=>downloadInvoiceWord(b)}>⬇ Invoice Word</button><button className="admin-button" onClick={()=>editBooking(b)}>Edit</button><button className="admin-add-button" onClick={()=>openCustomerPaymentForBooking(b)}>💳 Customer Payment</button><button className="admin-button" onClick={()=>openSupplierLedger(b)}>🏦 Process Payment</button><button className="admin-delete" onClick={()=>deleteBooking(b)}>Delete</button></div></td></tr>)}</tbody></table></div>}
        </div>)}

      {quotationCustomer && (
        <div className="admin-modal-backdrop quotation-backdrop" onClick={()=>setQuotationCustomer(null)}>
          <div className="admin-modal quotation-editor quotation-redesigned" onClick={e=>e.stopPropagation()}>
            <div className="quotation-editor-topbar">
              <div>
                <span className="quotation-eyebrow">SNEH TRAVEL / SALES</span>
                <h3>Create New Quotation</h3>
                <p>Prepare a professional, customized travel quotation for your customer.</p>
              </div>
              <button className="quotation-close-button" onClick={()=>setQuotationCustomer(null)} aria-label="Close quotation">×</button>
            </div>

            <div className="quotation-layout">
              <div className="quotation-main-column">
                <div className="quotation-form-section quotation-card">
                  <div className="quotation-section-title"><span className="quotation-step">01</span><div><h4>Customer Details</h4><p>Basic guest and contact information</p></div></div>
                  <div className="admin-form-grid">
                    <label>Customer Name<input value={quotationForm.customerName} onChange={e=>setQuotationForm({...quotationForm,customerName:e.target.value})} placeholder="Enter customer name"/></label>
                    <label>Mobile Number<input value={quotationForm.phone} onChange={e=>setQuotationForm({...quotationForm,phone:e.target.value})} placeholder="+91"/></label>
                    <label>Email Address<input type="email" value={quotationForm.email} onChange={e=>setQuotationForm({...quotationForm,email:e.target.value})} placeholder="customer@email.com"/></label>
                    <label>Travel Date<input type="date" value={quotationForm.travelDate || ""} onChange={e=>{const travelDate=e.target.value;setQuotationForm(prev=>({...prev,travelDate,destinations:(prev.destinations||[]).map(d=>d.checkIn===prev.travelDate || !d.checkIn ? {...d,checkIn:travelDate} : d)}))}}/></label>
                    <label>Number of Adults<input type="number" min="1" value={quotationForm.adults} onChange={e=>setQuotationForm({...quotationForm,adults:e.target.value})}/></label>
                    <label>Number of Children<input type="number" min="0" value={quotationForm.children} onChange={e=>{const count=Math.max(0,Number(e.target.value)||0);setQuotationForm(prev=>({...prev,children:count,childAges:Array.from({length:count},(_,i)=>prev.childAges?.[i]||"")}))}}/></label>
                    <label>Number of Rooms<input type="number" min="1" value={quotationForm.rooms ?? 1} onChange={e=>{const rooms=Math.max(1,Number(e.target.value)||1);setQuotationForm(prev=>({...prev,rooms}))}} placeholder="Enter number of rooms"/></label>
                    {quotationForm.childAges.map((age,index)=><label key={`child-age-${index}`}>Child {index+1} Age<input type="number" min="0" max="17" value={age} onChange={e=>{const ages=[...(quotationForm.childAges||[])];ages[index]=e.target.value;setQuotationForm({...quotationForm,childAges:ages})}} placeholder="Age"/></label>)}
                  </div>
                  <div className="quotation-room-summary">
                    <div className="quotation-inline-heading"><strong>Room Allocation</strong><small>Manage rooms per destination below</small></div>
                    {quotationForm.destinations.map((d,index)=><div className="quotation-room-summary-row" key={`room-summary-${index}`}><strong>Destination {index+1}</strong><div className="quotation-room-summary-type"><span>Single</span><button type="button" disabled={(Number(d.singleRooms)||0)<=0} onClick={()=>adjustQuotationRooms(index,"single",-1)}>−</button><b>{Number(d.singleRooms)||0}</b><button type="button" onClick={()=>adjustQuotationRooms(index,"single",1)}>+</button></div><div className="quotation-room-summary-type"><span>Double</span><button type="button" disabled={(Number(d.doubleRooms)||0)<=0} onClick={()=>adjustQuotationRooms(index,"double",-1)}>−</button><b>{Number(d.doubleRooms)||0}</b><button type="button" onClick={()=>adjustQuotationRooms(index,"double",1)}>+</button></div><div className="quotation-room-summary-type"><span>Extra Bed</span><button type="button" disabled={(Number(d.extraBed)||0)<=0} onClick={()=>adjustQuotationRooms(index,"extra",-1)}>−</button><b>{Number(d.extraBed)||0}</b><button type="button" onClick={()=>adjustQuotationRooms(index,"extra",1)}>+</button></div><div className="quotation-room-summary-type"><span>Child With Bed</span><button type="button" disabled={(Number(d.childWithBed)||0)<=0} onClick={()=>adjustQuotationRooms(index,"childWith",-1)}>−</button><b>{Number(d.childWithBed)||0}</b><button type="button" onClick={()=>adjustQuotationRooms(index,"childWith",1)}>+</button></div><div className="quotation-room-summary-type"><span>Child Without Bed</span><button type="button" disabled={(Number(d.childWithoutBed)||0)<=0} onClick={()=>adjustQuotationRooms(index,"childWithout",-1)}>−</button><b>{Number(d.childWithoutBed)||0}</b><button type="button" onClick={()=>adjustQuotationRooms(index,"childWithout",1)}>+</button></div><b>Total Rooms: {(Number(d.singleRooms)||0)+(Number(d.doubleRooms)||0)}</b></div>)}
                  </div>
                </div>

                <div className="quotation-form-section quotation-card">
                  <div className="quotation-section-title"><span className="quotation-step">02</span><div><h4>Destination & Vehicle Itinerary</h4><p>Select destination first, then choose the saved night/day vehicle rate matrix</p></div></div>
                  <div className="quotation-card" style={{marginBottom:16}}>
                    <div className="quotation-inline-heading"><strong>Step 1 — Destination</strong><small>{quotationItineraryLoading ? "Loading saved data…" : `${quotationDestinations.length} saved destinations available`}</small></div>
                    <div className="admin-form-grid">
                      <label>Destination *<select value={quotationForm.selectedDestination || ""} onChange={e=>setQuotationForm(prev=>({...prev,selectedDestination:e.target.value,selectedItineraryKey:"",selectedVehicleRateId:"",vehicleType:"",vehicleAmount:"",vehicleDays:"",pickupPoint:"",dropPoint:""}))}><option value="">Select destination</option>{quotationDestinations.filter(d=>d.active!==false).map(item=>{const name=item.name||item.destination||"";return <option key={item.id||name} value={name}>{name}</option>})}</select></label>
                      <label>Night / Day Itinerary *<select disabled={!quotationForm.selectedDestination} value={quotationForm.selectedItineraryKey || ""} onChange={e=>{const plan=quotationItineraries.find(item=>item.id===e.target.value);if(!plan)return;setQuotationForm(prev=>({...prev,selectedDestination:plan.destination,selectedItineraryKey:plan.id,selectedVehicleRateId:"",vehicleType:"",vehicleAmount:"",vehicleDays:plan.days||"",pickupPoint:plan.pickup_point||"",dropPoint:plan.drop_point||"",destinations:buildQuotationDestinationRows(plan, prev.destinations?.[0], prev.travelDate || new Date().toISOString().slice(0,10)),dayWiseItinerary:formatSavedDaywise(plan.daywise) || getSavedDetailedItineraryText(plan.destination, plan.itinerary_name || plan.itineraryName) || prev.dayWiseItinerary || ""}));}}><option value="">{quotationForm.selectedDestination ? "Select saved itinerary" : "Select destination first"}</option>{quotationItineraries.filter(item=>cityNamesMatch(item.destination, quotationForm.selectedDestination)).map(item=><option key={item.id} value={item.id}>{item.itinerary_name || `${item.nights} Night / ${item.days} Days`}</option>)}</select></label>
                    </div>
                    {quotationForm.selectedItineraryKey && <div className="quotation-view-destination"><strong>Saved Vehicle Rate Matrix</strong><small style={{display:"block",marginTop:5}}>{(quotationItineraries.find(item=>item.id===quotationForm.selectedItineraryKey)?.pickup_point||"-")} → {(quotationItineraries.find(item=>item.id===quotationForm.selectedItineraryKey)?.drop_point||"-")} • {(quotationItineraries.find(item=>item.id===quotationForm.selectedItineraryKey)?.nights||0)} Night / {(quotationItineraries.find(item=>item.id===quotationForm.selectedItineraryKey)?.days||0)} Days</small><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:10,marginTop:12}}>{(quotationItineraries.find(item=>item.id===quotationForm.selectedItineraryKey)?.vehicleRates||[]).map((rate,index)=><button type="button" key={`${rate.rate_id||rate.vehicle_id||index}`} className={String(quotationForm.selectedVehicleRateId)===String(rate.rate_id || rate.vehicle_id) ? "admin-quick-action active" : "admin-quick-action"} onClick={()=>{const plan=quotationItineraries.find(item=>item.id===quotationForm.selectedItineraryKey);setQuotationForm(prev=>({...prev,selectedVehicleRateId:rate.rate_id || rate.vehicle_id || `${index}`,vehicleType:rate.vehicle_name||"Vehicle",vehicleAmount:Number(rate.rate||0),vehicleDays:plan?.days||prev.vehicleDays,pickupPoint:plan?.pickup_point||prev.pickupPoint,dropPoint:plan?.drop_point||prev.dropPoint}));}}><span>🚗</span><div><strong>{rate.vehicle_name || "Vehicle"}</strong><small>Saved itinerary rate</small></div><b>₹{Number(rate.rate||0).toLocaleString("en-IN")}</b></button>)}</div></div>}
                  </div>
                </div>

                <div className="quotation-form-section quotation-card">
                  <div className="quotation-section-title"><span className="quotation-step">03</span><div><h4>Hotel & Meal Plan</h4><p>Hotels are shown city-by-city from the selected itinerary night-stay plan</p></div></div>
                  {!quotationForm.selectedItineraryKey ? <div className="quotation-view-destination"><strong>Select Destination and Night / Day Itinerary first.</strong><small style={{display:"block",marginTop:6}}>After selecting an itinerary, every saved night-stay city will appear below with automatic check-in and check-out dates.</small></div> : <div>
                    {quotationForm.destinations.map((d,index)=>{
                      const city = d.hotelCity || d.city || "";
                      const cityRates = (quotationHotelRates || []).filter(r => quotationHotelRateMatches(r, city));
                      const categories = [...new Set(cityRates.map(r => r.hotel?.category).filter(Boolean))];
                      const hotels = [...new Map(cityRates.filter(r => !d.hotelCategory || quotationHotelRateMatches(r, city, d.hotelCategory)).map(r => [String(r.hotel?.id), r.hotel]).filter(([,h]) => h)).values()];
                      const mealPlans = [...new Set(cityRates.filter(r => quotationHotelRateMatches(r, city, d.hotelCategory, d.hotelName)).map(r => r.meal_plan).filter(Boolean))];
                      return <div className="quotation-destination-card" key={`hotel-${index}`} style={{marginBottom:14}}>
                        <div className="quotation-destination-head"><div><span className="quotation-destination-label">HOTEL STAY {String(index+1).padStart(2,"0")}</span><strong>{city || "City"} · {d.nights || 0} Night{Number(d.nights) === 1 ? "" : "s"}</strong></div></div>
                        <div className="quotation-selection-summary"><strong>{d.destination || quotationForm.selectedDestination || "Destination"}</strong><span>→</span><strong>{city || "City"}</strong><span>→</span><strong>{d.nights || 0} Night{Number(d.nights) === 1 ? "" : "s"}</strong></div>
                        <div className="admin-form-grid">
                          <label>Check-in Date<input type="date" value={d.checkIn || ""} onChange={e=>updateQuotationDestination(index,"checkIn",e.target.value)} /></label>
                          <label>Check-out Date<input type="date" value={d.checkOut || ""} onChange={e=>updateQuotationDestination(index,"checkOut",e.target.value)} /></label>
                          <label>Nights<input type="number" value={d.nights || 0} readOnly /></label>
                          <label>Hotel Category<select value={d.hotelCategory || ""} onChange={e=>{const value=e.target.value;updateQuotationDestination(index,"hotelCategory",value);updateQuotationDestination(index,"hotelName","");updateQuotationDestination(index,"mealPlan","");updateQuotationDestination(index,"doublePricePerRoomPerNight","");updateQuotationDestination(index,"singlePricePerRoomPerNight","");}}><option value="">Select category</option>{categories.map(cat=><option key={cat} value={cat}>{cat}</option>)}</select></label>
                          <label>Hotel Name<select value={d.hotelName || ""} disabled={!city} onChange={e=>{const value=e.target.value;updateQuotationDestination(index,"hotelName",value);updateQuotationDestination(index,"mealPlan","");updateQuotationDestination(index,"doublePricePerRoomPerNight","");updateQuotationDestination(index,"singlePricePerRoomPerNight","");}}><option value="">Select hotel</option>{hotels.map(h=><option key={h.id} value={h.name}>{h.name}</option>)}</select></label>
                          <label>Meal Plan<select value={d.mealPlan || ""} disabled={!d.hotelName} onChange={e=>applySelectedHotelRate(index,d.hotelName,e.target.value,city,d.hotelCategory)}><option value="">Select meal plan</option>{mealPlans.map(mp=><option key={mp} value={mp}>{mp}</option>)}</select></label>
                        </div>
                        {!cityRates.length && <div className="quotation-view-destination" style={{marginTop:10}}><strong>No saved hotel rates found for {city || "this city"}.</strong><small style={{display:"block",marginTop:5}}>Add this city and its hotel/meal-plan rates in Hotel Master.</small></div>}
                      </div>;
                    })}
                  </div>}
                </div>

                <div className="quotation-form-section quotation-card">
                  <div className="quotation-section-title"><span className="quotation-step">04</span><div><h4>Travel Details</h4><p>Dates, rooms and child/bed details</p></div><button className="admin-add-button" type="button" onClick={addQuotationDestination} disabled={!quotationForm.selectedItineraryKey}>+ Add Destination</button></div>
{quotationForm.destinations.map((d,index)=><div className="quotation-destination-card" key={index}>
                    <div className="quotation-destination-head"><div><span className="quotation-destination-label">DESTINATION {String(index+1).padStart(2,"0")}</span><strong>{d.destination || "New Destination"}</strong></div>{quotationForm.destinations.length>1 && <button className="admin-button" type="button" onClick={()=>removeQuotationDestination(index)}>Remove</button>}</div>
                    <div className="admin-form-grid">
                      <div className="quotation-view-destination"><strong>Destination</strong><span>{d.destination || quotationForm.selectedDestination || "-"}</span></div>
                      <div className="quotation-view-destination"><strong>City / Hotel Stay</strong><span>{d.hotelCity || d.city || d.stayCity || "-"}</span></div>
                      <label>Check-in Date<input type="date" value={d.checkIn} onChange={e=>updateQuotationDestination(index,"checkIn",e.target.value)}/></label>
                      <label>Check-out Date<input type="date" value={d.checkOut} onChange={e=>updateQuotationDestination(index,"checkOut",e.target.value)}/></label>
                      <label>Nights<input type="number" value={d.nights} readOnly placeholder="Auto calculated"/></label>
                      <div className="quotation-room-control"><span>Single Rooms</span><div><button type="button" onClick={()=>adjustQuotationRooms(index,"single",-1)}>−</button><strong>{Number(d.singleRooms)||0}</strong><button type="button" onClick={()=>adjustQuotationRooms(index,"single",1)}>+</button></div></div>
                      <label>Single Rate / Room / Night (₹)<input type="number" min="0" value={d.singlePricePerRoomPerNight} onChange={e=>updateQuotationDestination(index,"singlePricePerRoomPerNight",e.target.value)} placeholder="Enter rate"/></label>
                      <div className="quotation-room-control"><span>Double Rooms</span><div><button type="button" onClick={()=>adjustQuotationRooms(index,"double",-1)}>−</button><strong>{Number(d.doubleRooms)||0}</strong><button type="button" onClick={()=>adjustQuotationRooms(index,"double",1)}>+</button></div></div>
                      <label>Double Rate / Room / Night (₹)<input type="number" min="0" value={d.doublePricePerRoomPerNight} onChange={e=>updateQuotationDestination(index,"doublePricePerRoomPerNight",e.target.value)} placeholder="Enter rate"/></label>
                      <div className="quotation-room-control"><span>Extra Bed</span><div><button type="button" onClick={()=>adjustQuotationRooms(index,"extra",-1)}>−</button><strong>{Number(d.extraBed)||0}</strong><button type="button" onClick={()=>adjustQuotationRooms(index,"extra",1)}>+</button></div></div>
                      <label>Room Allocation<input value={d.roomAllocation||""} readOnly placeholder="02 Double + 01 Extra Bed"/></label>
                    </div>
                    <div className="quotation-subsection"><div className="quotation-inline-heading"><strong>Child & Bed Details</strong><small>Enter quantity and applicable price</small></div><div className="admin-form-grid">
                      <label>Child With Bed<input type="number" min="0" value={d.childWithBed} onChange={e=>updateQuotationDestination(index,"childWithBed",e.target.value)}/></label>
                      <label>Child With Bed Price (₹)<input type="number" min="0" value={d.childWithBedPrice} onChange={e=>updateQuotationDestination(index,"childWithBedPrice",e.target.value)} placeholder="Per child"/></label>
                      <label>Child Without Bed<input type="number" min="0" value={d.childWithoutBed} onChange={e=>updateQuotationDestination(index,"childWithoutBed",e.target.value)}/></label>
                      <label>Child Without Bed Price (₹)<input type="number" min="0" value={d.childWithoutBedPrice} onChange={e=>updateQuotationDestination(index,"childWithoutBedPrice",e.target.value)} placeholder="Per child"/></label>
                      <label>Extra Bed<input type="number" min="0" value={d.extraBed} onChange={e=>updateQuotationDestination(index,"extraBed",e.target.value)}/></label>
                      <label>Extra Bed Price (₹)<input type="number" min="0" value={d.extraBedPrice} onChange={e=>updateQuotationDestination(index,"extraBedPrice",e.target.value)} placeholder="Per bed"/></label>
                      <label>Child Age(s)<input placeholder="e.g. 5, 8" value={d.childAge} onChange={e=>updateQuotationDestination(index,"childAge",e.target.value)}/></label>
                    </div></div>
                  </div>)}
                </div>

                <div className="quotation-form-section quotation-card">
                  <div className="quotation-section-title"><span className="quotation-step">05</span><div><h4>Quotation Notes</h4><p>Customize the customer-facing document</p></div></div>
                  <div className="admin-form-grid">
                    <label>Quotation Date<input type="date" value={quotationForm.quotationDate} onChange={e=>setQuotationForm({...quotationForm,quotationDate:e.target.value})}/></label>
                    <label className="quotation-wide-field">Inclusions (one item per line)<textarea value={quotationForm.inclusions} onChange={e=>setQuotationForm({...quotationForm,inclusions:e.target.value})} placeholder={"Hotel accommodation\nMeals included as per the meal plan specified in the itinerary.\nTransportation\nSightseeing as mentioned"}/></label>
                    <label className="quotation-wide-field">Exclusions (one item per line)<textarea value={quotationForm.exclusions} onChange={e=>setQuotationForm({...quotationForm,exclusions:e.target.value})}/></label>
                    <label className="quotation-wide-field">Additional Notes<textarea value={quotationForm.notes} onChange={e=>setQuotationForm({...quotationForm,notes:e.target.value})}/></label>
                    <label className="quotation-wide-field">Day-wise Detailed Itinerary (editable)<textarea value={quotationForm.dayWiseItinerary || ""} onChange={e=>setQuotationForm({...quotationForm,dayWiseItinerary:e.target.value})} placeholder={"Day 01: Arrival at Cochin → Munnar\nDay 02: Munnar sightseeing\nDay 03: Munnar → Thekkady\nDay 04: Thekkady → Alleppey\nDay 05: Alleppey → Cochin departure"}/></label>
                  </div>
                </div>
              </div>

              <aside className="quotation-summary-column">
                <div className="quotation-summary-card">
                  <span className="quotation-eyebrow">LIVE SUMMARY</span>
                  <h4>Quotation Amount</h4>
                  <div className="quotation-total-highlight"><small>Total Payable Amount</small><strong>₹{Number(quotationForm.totalAmountManual ? quotationForm.totalAmount : calculateQuotationTotal(quotationForm)||0).toLocaleString("en-IN")}</strong><span>Editable final customer amount</span></div>
                  <div className="quotation-cost-row"><span>Hotel & Room Cost</span><strong>₹{Number(calculateHotelAmount(quotationForm)||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row"><span>Extra Bed</span><strong>₹{Number(calculateChildBedAmounts(quotationForm).extraBed||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row"><span>Child With Bed</span><strong>₹{Number(calculateChildBedAmounts(quotationForm).childWithBed||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row"><span>Child Without Bed</span><strong>₹{Number(calculateChildBedAmounts(quotationForm).childWithoutBed||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row"><span>Transport</span><strong>₹{Number(quotationForm.vehicleAmount||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row quotation-cost-total"><span>Net Amount / Cost</span><strong>₹{Number(calculateQuotationNetCost(quotationForm)||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row"><span>Margin / Markup</span><strong>₹{Number(calculateQuotationMarkup(quotationForm)||0).toLocaleString("en-IN")}</strong></div>
                  <div className="quotation-cost-row quotation-cost-total"><span>Calculated Gross Amount</span><strong>₹{Number(calculateQuotationTotal(quotationForm)||0).toLocaleString("en-IN")}</strong></div>
                  <label>Total Payable Amount<input type="number" min="0" step="0.01" value={quotationForm.totalAmount ?? ""} onChange={e=>setQuotationForm(prev=>({...prev,totalAmount:e.target.value,totalAmountManual:true}))} placeholder="Enter final payable amount"/></label>
                  <label>Markup Type<select value={quotationForm.markupType} onChange={e=>{const next={...quotationForm,markupType:e.target.value};setQuotationForm({...next,netCost:calculateQuotationNetCost(next),totalAmount:calculateQuotationTotal(next),totalAmountManual:false})}}><option value="percent">Percentage (%)</option><option value="fixed">Fixed Amount (₹)</option></select></label>
                  <label>Markup {quotationForm.markupType === "percent" ? "(%)" : "(₹)"}<input type="number" min="0" step="0.01" value={quotationForm.markupValue} onChange={e=>{const next={...quotationForm,markupValue:e.target.value};setQuotationForm({...next,netCost:calculateQuotationNetCost(next),totalAmount:calculateQuotationTotal(next),totalAmountManual:false})}} placeholder="Enter markup"/></label>
                  <div className="quotation-view-destination"><strong>Vehicle Amount from Saved Rate Matrix</strong><span>₹{Number(quotationForm.vehicleAmount||0).toLocaleString("en-IN")}</span></div>
                </div>
                <div className="quotation-summary-card quotation-help-card"><strong>Before saving</strong><p>Check dates, room quantities, costing and markup. Your quotation serial number will be generated automatically when you save.</p></div>
              </aside>
            </div>

            <div className="quotation-footer-actions"><button className="admin-button" onClick={()=>{setEditingQuotationId(null);setQuotationCustomer(null)}}>Cancel</button><button className="admin-add-button" onClick={saveQuotation}>{editingQuotationId ? "Update Quotation →" : "Save Quotation →"}</button></div>
          </div>
        </div>
      )}

      {bookingCustomer && (
        <div className="admin-modal-backdrop" onClick={()=>{setBookingCustomer(null);setEditingBookingId(null)}}>
          <div className="admin-modal" style={{width:"min(1180px,100%)",maxHeight:"92vh"}} onClick={e=>e.stopPropagation()}>
            <div className="admin-modal-head">
              <div><h3>{editingBookingId?"Edit Booking":"Create Booking"}</h3><small>Complete booking, service confirmation and payment details</small></div>
              <button onClick={()=>{setBookingCustomer(null);setEditingBookingId(null)}}>×</button>
            </div>

            <div className="booking-form-section"><h4>1. Customer Details</h4><div className="admin-form-grid">
              <label>Customer Name<input value={bookingCustomer.name||""} readOnly/></label>
              <label>Mobile<input value={bookingCustomer.phone||""} readOnly/></label>
              <label>Email<input value={bookingCustomer.email||""} readOnly/></label>
              <label>Quotation No.<input value={bookingForm.quotationNo} onChange={e=>setBookingForm({...bookingForm,quotationNo:e.target.value})}/></label>
              <label>Booking No.<input value={editingBookingId ? (bookings.find(b=>String(b.id)===String(editingBookingId))?.serial_no||"") : "Auto after Save"} readOnly/></label>
              <label>Travel Date<input type="date" value={bookingForm.travelDate || ""} readOnly={Boolean(bookingForm.quotationNo)} onChange={e=>{if(!bookingForm.quotationNo)setBookingForm({...bookingForm,travelDate:e.target.value})}}/>{bookingForm.quotationNo && <small style={{display:"block",marginTop:4,color:"#64748b"}}>Same Travel Date as quotation {bookingForm.quotationNo}</small>}</label>
              <label>Adults<input type="number" min="1" value={bookingForm.adults} onChange={e=>setBookingForm({...bookingForm,adults:e.target.value})}/></label>
              <label>Children<input type="number" min="0" value={bookingForm.children} onChange={e=>setBookingForm({...bookingForm,children:e.target.value})}/></label>
              <label>Rooms<input type="number" min="1" value={bookingForm.rooms} onChange={e=>setBookingForm({...bookingForm,rooms:e.target.value})}/></label>
              <label style={{gridColumn:"1 / -1"}}>Room Allocation<input value={bookingForm.roomAllocation} onChange={e=>setBookingForm({...bookingForm,roomAllocation:e.target.value})} placeholder="03 Double + 03 Extra Bed"/></label>
            </div></div>

            <div className="booking-form-section"><h4>2. Trip / Itinerary Details</h4><div className="admin-form-grid">
              <label>Package / Tour<input value={bookingForm.packageName} onChange={e=>setBookingForm({...bookingForm,packageName:e.target.value})}/></label>
              <label>Destination<input value={bookingForm.destination} onChange={e=>setBookingForm({...bookingForm,destination:e.target.value})}/></label>
              <label>Itinerary<input value={bookingForm.itineraryName} onChange={e=>setBookingForm({...bookingForm,itineraryName:e.target.value})} placeholder="Kerala 04 Night / 05 Days"/></label>
              <label>Nights<input type="number" min="0" value={bookingForm.nights} onChange={e=>setBookingForm({...bookingForm,nights:e.target.value})}/></label>
              <label>Days<input type="number" min="0" value={bookingForm.days} onChange={e=>setBookingForm({...bookingForm,days:e.target.value})}/></label>
              <label>Pickup<input value={bookingForm.pickupPoint} onChange={e=>setBookingForm({...bookingForm,pickupPoint:e.target.value})}/></label>
              <label>Drop<input value={bookingForm.dropPoint} onChange={e=>setBookingForm({...bookingForm,dropPoint:e.target.value})}/></label>
              <label style={{gridColumn:"1 / -1"}}>Detailed Day-wise Itinerary<textarea rows="6" value={bookingForm.dayWiseItinerary||""} onChange={e=>setBookingForm({...bookingForm,dayWiseItinerary:e.target.value})} placeholder="Saved detailed itinerary will appear here..."/></label>
            </div></div>

            <div className="booking-form-section"><div className="booking-section-title"><h4>3. Hotel Booking & Confirmation</h4><small>Each hotel has an independent confirmation status.</small></div>
              {bookingForm.hotelServices.length===0 ? <div className="booking-empty">No hotel services linked to this booking. Create booking from a quotation to load saved hotels.</div> : bookingForm.hotelServices.map((h,i)=><div className="booking-service-card" key={h.id||i}>
                <div className="booking-service-head"><strong>{h.city||"Hotel"}</strong><span className={`booking-status ${String(h.status||"").toLowerCase().replace(/\s+/g,"-")}`}>{h.status}</span></div>
                <div className="admin-form-grid">
                  <label>City<input value={h.city} onChange={e=>updateBookingService("hotelServices",i,"city",e.target.value)}/></label>
                  <label>Hotel Name<input value={h.hotelName} onChange={e=>updateBookingService("hotelServices",i,"hotelName",e.target.value)}/></label>
                  <label>Category<input value={h.category} onChange={e=>updateBookingService("hotelServices",i,"category",e.target.value)}/></label>
                  <label>Check-in<input type="date" value={h.checkIn||""} onChange={e=>updateBookingService("hotelServices",i,"checkIn",e.target.value)}/></label>
                  <label>Check-out<input type="date" value={h.checkOut||""} onChange={e=>updateBookingService("hotelServices",i,"checkOut",e.target.value)}/></label>
                  <label>Nights<input type="number" value={h.nights||0} onChange={e=>updateBookingService("hotelServices",i,"nights",e.target.value)}/></label>
                  <label>Meal Plan<select value={h.mealPlan||""} onChange={e=>updateBookingService("hotelServices",i,"mealPlan",e.target.value)}><option value="">Select</option><option>EP</option><option>CP</option><option>MAP</option><option>AP</option></select></label>
                  <label>Room Allocation<input value={h.roomAllocation||""} onChange={e=>updateBookingService("hotelServices",i,"roomAllocation",e.target.value)}/></label>
                  <label>Hotel Sale Amount<input type="number" value={h.amount||0} onChange={e=>updateBookingService("hotelServices",i,"amount",e.target.value)}/></label><label>Hotel Purchase Amount<input type="number" value={h.purchaseAmount||0} onChange={e=>updateBookingService("hotelServices",i,"purchaseAmount",e.target.value)}/></label>
                  <label>Extra Bed<input type="number" value={h.extraBedAmount||0} onChange={e=>updateBookingService("hotelServices",i,"extraBedAmount",e.target.value)}/></label>
                  <label>Child With Bed<input type="number" value={h.childWithBedAmount||0} onChange={e=>updateBookingService("hotelServices",i,"childWithBedAmount",e.target.value)}/></label>
                  <label>Child Without Bed<input type="number" value={h.childWithoutBedAmount||0} onChange={e=>updateBookingService("hotelServices",i,"childWithoutBedAmount",e.target.value)}/></label>
                  <label>Confirmation Status<select value={h.status||"Pending"} onChange={e=>updateBookingService("hotelServices",i,"status",e.target.value)}><option>Confirmed</option><option>Pending</option><option>On Hold</option><option>Cancelled</option></select></label>
                  <label>Confirmation No. / Reference<input value={h.confirmationNo||""} onChange={e=>updateBookingService("hotelServices",i,"confirmationNo",e.target.value)}/></label>
                  <label>Confirmed By<input value={h.confirmedBy||""} onChange={e=>updateBookingService("hotelServices",i,"confirmedBy",e.target.value)} placeholder="Hotel / Sneh Travel"/></label>
                  <label>Supplier Email<input type="email" value={h.supplierEmail||""} onChange={e=>updateBookingService("hotelServices",i,"supplierEmail",e.target.value)} placeholder="hotel@example.com"/></label>
                  <label style={{gridColumn:"1 / -1"}}>Confirmation Note<textarea rows="2" value={h.note||""} onChange={e=>updateBookingService("hotelServices",i,"note",e.target.value)} placeholder="Hotel confirmation remarks..."/></label>
                  <div style={{gridColumn:"1 / -1",fontSize:12,color:"#64748b",paddingTop:4}}>Included in the single Travel Booking Confirmation.</div>
                </div>
              </div>)}
            </div>

            <div className="booking-form-section"><div className="booking-section-title"><h4>4. Vehicle Booking & Confirmation</h4><small>Vehicle confirmation is independent from hotel confirmation.</small></div>
              {bookingForm.vehicleServices.length===0 ? <div className="booking-empty">No vehicle service linked to this booking.</div> : bookingForm.vehicleServices.map((v,i)=><div className="booking-service-card" key={v.id||i}>
                <div className="admin-form-grid">
                  <label>Vehicle Type<input value={v.vehicleType||""} onChange={e=>updateBookingService("vehicleServices",i,"vehicleType",e.target.value)}/></label>
                  <label>Pickup<input value={v.pickup||""} onChange={e=>updateBookingService("vehicleServices",i,"pickup",e.target.value)}/></label>
                  <label>Drop<input value={v.drop||""} onChange={e=>updateBookingService("vehicleServices",i,"drop",e.target.value)}/></label>
                  <label>Days<input type="number" value={v.days||0} onChange={e=>updateBookingService("vehicleServices",i,"days",e.target.value)}/></label>
                  <label>Transport Amount<input type="number" value={v.amount||0} onChange={e=>updateBookingService("vehicleServices",i,"amount",e.target.value)}/></label>
                  <label>Confirmation Status<select value={v.status||"Pending"} onChange={e=>updateBookingService("vehicleServices",i,"status",e.target.value)}><option>Confirmed</option><option>Pending</option><option>On Hold</option><option>Cancelled</option></select></label>
                  <label>Vehicle / Vendor Ref.<input value={v.reference||""} onChange={e=>updateBookingService("vehicleServices",i,"reference",e.target.value)}/></label>
                  <label>Confirmed By<input value={v.confirmedBy||""} onChange={e=>updateBookingService("vehicleServices",i,"confirmedBy",e.target.value)} placeholder="Vendor / Sneh Travel"/></label>
                  <label>Supplier Email<input type="email" value={v.supplierEmail||""} onChange={e=>updateBookingService("vehicleServices",i,"supplierEmail",e.target.value)} placeholder="vendor@example.com"/></label>
                  <label>Confirmation Note<textarea rows="2" value={v.note||""} onChange={e=>updateBookingService("vehicleServices",i,"note",e.target.value)} placeholder="Driver/vendor confirmation remarks..."/></label>
                  <div style={{gridColumn:"1 / -1",display:"flex",gap:8,flexWrap:"wrap"}}><button type="button" className="admin-add-button" onClick={()=>emailLandConfirmation({...bookingForm,hotelServices:[],vehicleServices:[v]})}>✉️ Vehicle / Land Confirmation Mail</button></div>
                </div>
              </div>)}
            </div>

            <div className="booking-form-section"><div className="booking-section-title"><h4>5. Supplier Payment Details</h4><small>Supplier costs are separate from customer payments.</small></div>{supplierPayables.filter(item=>String(item.bookingId)===String(bookingForm.id||editingBookingId) && !isLegacySupplierRow(item)).length===0?<div className="booking-empty">Supplier payable records are created after the booking is saved. Hotels and transport will appear automatically here.</div>:supplierPayables.filter(item=>String(item.bookingId)===String(bookingForm.id||editingBookingId) && !isLegacySupplierRow(item)).map(item=><div className="supplier-inline-card" key={item.id}><div><strong>{item.serviceName||item.serviceType}</strong><small>{item.supplierName||"Supplier not assigned"} · {item.serviceType}{item.city?` · ${item.city}`:""}</small></div><div><span>Payable</span><strong>₹{Number(item.amountPayable||0).toLocaleString("en-IN")}</strong></div><div><span>Paid</span><strong>₹{supplierPaidAmount(item).toLocaleString("en-IN")}</strong></div><div><span>Balance</span><strong>₹{supplierBalance(item).toLocaleString("en-IN")}</strong></div><button className="admin-button" onClick={()=>openSupplierPayment(item)}>Add Payment</button></div>)}</div>
            <div className="booking-form-section"><h4>5. Amount Breakup</h4><div className="booking-amount-grid">
              {(()=>{const b=calculateBookingBreakup(bookingForm); return <>
                <div><span>Hotel Amount</span><strong>₹{b.hotel.toLocaleString("en-IN")}</strong></div><div><span>Extra Bed Amount</span><strong>₹{b.extra.toLocaleString("en-IN")}</strong></div><div><span>Child With Bed</span><strong>₹{b.childWith.toLocaleString("en-IN")}</strong></div><div><span>Child Without Bed</span><strong>₹{b.childWithout.toLocaleString("en-IN")}</strong></div><div><span>Transport Amount</span><strong>₹{b.transport.toLocaleString("en-IN")}</strong></div><div className="booking-amount-total"><span>Customer Net Cost</span><strong>₹{b.net.toLocaleString("en-IN")}</strong></div><div><span>Total Hotel Purchase Cost</span><strong>₹{b.purchase.toLocaleString("en-IN")}</strong></div><div><span>Transport Purchase Cost</span><strong>₹{b.transportPurchase.toLocaleString("en-IN")}</strong></div><div className="booking-amount-total"><span>Total Internal / Supplier Cost</span><strong>₹{b.internalCost.toLocaleString("en-IN")}</strong></div><div style={{gridColumn:"1 / -1",padding:"12px 14px",background:"#f8fafc",border:"1px solid #e5e7eb",borderRadius:10,fontSize:13,lineHeight:1.6}}><strong>How the amount is calculated:</strong> Hotel sale amounts + extra bed/child amounts + transport = Customer Net Cost. Supplier/Internal Cost = hotel purchase cost + transport purchase cost. Markup is added to the Customer Net Cost to reach Final Sale Amount.</div>
                <label>Markup Type<select value={bookingForm.markupType} onChange={e=>setBookingForm({...bookingForm,markupType:e.target.value})}><option value="percent">Percentage (%)</option><option value="fixed">Fixed Amount (₹)</option></select></label>
                <label>Markup {bookingForm.markupType==="percent"?"(%)":"(₹)"}<input type="number" min="0" value={bookingForm.markupValue} onChange={e=>setBookingForm({...bookingForm,markupValue:e.target.value})}/></label>
                <label>Final Sale Amount<input type="number" min="0" value={bookingForm.finalSaleAmount||b.finalAmount} onChange={e=>setBookingForm({...bookingForm,finalSaleAmount:e.target.value})}/></label>
                <label>Advance Received<input type="number" min="0" value={bookingForm.advancePaid} onChange={e=>setBookingForm({...bookingForm,advancePaid:e.target.value})}/></label>
                <div className="booking-amount-total"><span>Balance</span><strong>₹{Math.max(0,(Number(bookingForm.finalSaleAmount||b.finalAmount)-Number(bookingForm.advancePaid||0))).toLocaleString("en-IN")}</strong></div>
                <div style={{display:"flex",alignItems:"flex-end"}}>
                  <button type="button" className="admin-add-button" onClick={openCustomerPayment} style={{width:"100%",minHeight:42}}>💳 Process Payment</button>
                </div>
              </>})()}
            </div></div>

            <div className="booking-form-section"><h4>6. Booking Status & Payment</h4><div className="admin-form-grid">
              <label>Overall Booking Status<select value={bookingForm.bookingStatus} onChange={e=>setBookingForm({...bookingForm,bookingStatus:e.target.value})}><option>Pending</option><option>Confirmed</option><option>On Hold</option><option>Cancelled</option><option>Completed</option></select></label>
              <label>Payment Status<select value={bookingForm.paymentStatus} onChange={e=>setBookingForm({...bookingForm,paymentStatus:e.target.value})}><option>Pending</option><option>Partial Paid</option><option>Fully Paid</option></select></label>
              <label>Invoice No.<input value={bookingForm.invoiceNo||"Auto generated on save"} readOnly /></label>
              <label>Package Confirmation No.<input value={bookingForm.confirmationNo||""} onChange={e=>setBookingForm({...bookingForm,confirmationNo:e.target.value})} placeholder="e.g. ST-PKG-2026-001"/></label>
              <label>Confirmed By<input value={bookingForm.confirmedBy||""} onChange={e=>setBookingForm({...bookingForm,confirmedBy:e.target.value})} placeholder="Staff / Manager name"/></label>
              <label>Land Supplier Email<input type="email" value={bookingForm.landSupplierEmail||""} onChange={e=>setBookingForm({...bookingForm,landSupplierEmail:e.target.value})} placeholder="land@example.com"/></label>
              <div style={{gridColumn:"1 / -1",padding:"14px 16px",border:"1px solid #e5e7eb",borderRadius:12,background:"#f8fafc"}}><strong style={{display:"block",marginBottom:10}}>Billing / Invoice Instructions</strong><div className="admin-form-grid"><label>Invoice Create On<select value={bookingForm.invoiceBillTo||"guest"} onChange={e=>setBookingForm({...bookingForm,invoiceBillTo:e.target.value})}><option value="guest">Guest Name</option><option value="company">Company Name</option></select></label><label>Company Name<input value={bookingForm.billingCompanyName||""} onChange={e=>setBookingForm({...bookingForm,billingCompanyName:e.target.value})} placeholder="Travel Agent / Company name" disabled={(bookingForm.invoiceBillTo||"guest")!=="company"}/></label><label>Company Address<input value={bookingForm.billingCompanyAddress||""} onChange={e=>setBookingForm({...bookingForm,billingCompanyAddress:e.target.value})} placeholder="Billing address" disabled={(bookingForm.invoiceBillTo||"guest")!=="company"}/></label><label>Company GST No.<input value={bookingForm.billingCompanyGst||""} onChange={e=>setBookingForm({...bookingForm,billingCompanyGst:e.target.value})} placeholder="GSTIN, if applicable" disabled={(bookingForm.invoiceBillTo||"guest")!=="company"}/></label><label style={{gridColumn:"1 / -1"}}>Billing Instruction<textarea rows="2" value={bookingForm.billingInstruction||""} onChange={e=>setBookingForm({...bookingForm,billingInstruction:e.target.value})} placeholder="Example: Bill required in company name instead of guest name."/></label></div></div><label>Booking Done By<select value={bookingForm.staff_id||""} onChange={e=>{const st=staffList.find(x=>String(x.id)===String(e.target.value));setBookingForm({...bookingForm,staff_id:e.target.value,staff_name:st?.name||""})}}><option value="">Unassigned / Admin</option>{staffList.filter(x=>x.active!==false).map(st=><option key={st.id} value={st.id}>{st.name} — {st.role||"Staff"}</option>)}</select></label>
              <label style={{gridColumn:"1 / -1"}}>Booking Notes<textarea rows="4" value={bookingForm.notes} onChange={e=>setBookingForm({...bookingForm,notes:e.target.value})} placeholder="Add booking notes..."/></label>
            </div></div>

            <div className="admin-modal-actions"><button className="admin-button" onClick={()=>{setBookingCustomer(null);setEditingBookingId(null)}}>Cancel</button><button className="admin-add-button" onClick={saveBooking}>{editingBookingId?"Update Booking":"Save Booking"}</button></div>
          </div>
        </div>)}


      {standaloneHotelView && (
        <div className="admin-modal-backdrop" onClick={()=>setStandaloneHotelView(null)}>
          <div className="admin-modal quotation-preview" onClick={e=>e.stopPropagation()}>
            <div className="admin-modal-head"><div><h3>Standalone Hotel Booking</h3><small>{standaloneHotelView.bookingNo || "Hotel Booking"}</small></div><button onClick={()=>setStandaloneHotelView(null)}>×</button></div>
            <div className="quotation-saved-section"><h4>Customer Details</h4><div className="admin-form-grid"><div><strong>Customer</strong><p>{standaloneHotelView.customerName || "-"}</p></div><div><strong>Phone</strong><p>{standaloneHotelView.phone || "-"}</p></div><div><strong>Email</strong><p>{standaloneHotelView.email || "-"}</p></div><div><strong>Adults / Children</strong><p>{standaloneHotelView.adults || 0} / {standaloneHotelView.children || 0}</p></div></div></div>
            <div className="quotation-saved-section"><h4>Hotel Stay</h4><div className="admin-form-grid"><div><strong>Hotel</strong><p>{standaloneHotelView.hotelName || "-"}</p></div><div><strong>City</strong><p>{standaloneHotelView.city || "-"}</p></div><div><strong>Check-in</strong><p>{standaloneHotelView.checkIn || "-"}</p></div><div><strong>Check-out</strong><p>{standaloneHotelView.checkOut || "-"}</p></div><div><strong>Nights</strong><p>{standaloneHotelView.nights || 0}</p></div><div><strong>Rooms</strong><p>{standaloneHotelView.rooms || 0}</p></div><div><strong>Room Type</strong><p>{standaloneHotelView.roomType || "-"}</p></div><div><strong>Meal Plan</strong><p>{standaloneHotelView.mealPlan || "-"}</p></div><div><strong>Confirmation No.</strong><p>{standaloneHotelView.confirmationNo || "-"}</p></div></div></div>
            <div className="quotation-saved-section"><h4>Amount & Payment</h4><div className="supplier-payment-balance"><span>Sale Amount</span><strong>₹{Number(standaloneHotelView.saleAmount||0).toLocaleString("en-IN")}</strong><span>Advance</span><strong>₹{Number(standaloneHotelView.advanceReceived||0).toLocaleString("en-IN")}</strong><span>Balance</span><strong>₹{Math.max(0,Number(standaloneHotelView.saleAmount||0)-Number(standaloneHotelView.advanceReceived||0)).toLocaleString("en-IN")}</strong></div><p>Booking Status: <strong>{standaloneHotelView.bookingStatus || "Pending"}</strong> &nbsp; | &nbsp; Payment Status: <strong>{standaloneHotelView.paymentStatus || "Pending"}</strong></p></div>
            {standaloneHotelView.notes ? <div className="quotation-saved-section"><h4>Notes</h4><p>{standaloneHotelView.notes}</p></div> : null}
            <div className="admin-modal-actions"><button className="admin-button" onClick={()=>{setStandaloneHotelView(null);editStandaloneHotelBooking(standaloneHotelView)}}>Edit Booking</button><button className="admin-add-button" onClick={()=>openStandaloneHotelInvoice(standaloneHotelView)}>🧾 Create Invoice</button><button className="admin-button" onClick={()=>emailStandaloneHotelInvoice(standaloneHotelView)}>✉️ Send on Mail</button></div>
          </div>
        </div>
      )}

      {standaloneHotelInvoicePreview && (
        <div className="admin-modal-backdrop" onClick={()=>setStandaloneHotelInvoicePreview(null)}>
          <div className="admin-modal quotation-preview" style={{maxWidth:1000}} onClick={e=>e.stopPropagation()}>
            <div className="admin-modal-head"><div><h3>Hotel Invoice</h3><small>{standaloneHotelInvoicePreview.invoiceNo || "Invoice"}</small></div><button onClick={()=>setStandaloneHotelInvoicePreview(null)}>×</button></div>
            <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,padding:28}}>
              <div style={{display:"flex",justifyContent:"space-between",gap:20,borderBottom:"3px solid #0f5f78",paddingBottom:18}}><div><strong style={{fontSize:25,letterSpacing:2,color:"#0f3d56"}}>SNEH TRAVEL</strong><div style={{color:"#64748b",fontSize:12}}>Travel • Hotel • Holiday Services</div></div><div style={{textAlign:"right"}}><strong style={{fontSize:28,color:"#0f5f78"}}>HOTEL INVOICE</strong><div style={{marginTop:6,fontWeight:800}}>{standaloneHotelInvoicePreview.invoiceNo}</div></div></div>
              <div className="admin-form-grid" style={{marginTop:22}}><div><strong>Bill To</strong><p>{standaloneHotelInvoicePreview.customerName || "-"}<br/>{standaloneHotelInvoicePreview.phone || "-"}<br/>{standaloneHotelInvoicePreview.email || "-"}</p></div><div><strong>Invoice Details</strong><p>Invoice Date: {standaloneHotelInvoicePreview.invoiceDate || "-"}<br/>Booking No.: {standaloneHotelInvoicePreview.bookingNo || "-"}<br/>Confirmation No.: {standaloneHotelInvoicePreview.confirmationNo || "-"}</p></div></div>
              <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Hotel</th><th>City</th><th>Check-in</th><th>Check-out</th><th>Nights</th><th>Rooms</th><th>Meal</th></tr></thead><tbody><tr><td>{standaloneHotelInvoicePreview.hotelName || "-"}</td><td>{standaloneHotelInvoicePreview.city || "-"}</td><td>{standaloneHotelInvoicePreview.checkIn || "-"}</td><td>{standaloneHotelInvoicePreview.checkOut || "-"}</td><td>{standaloneHotelInvoicePreview.nights || 0}</td><td>{standaloneHotelInvoicePreview.rooms || 0}</td><td>{standaloneHotelInvoicePreview.mealPlan || "-"}</td></tr></tbody></table></div>
              <div style={{marginLeft:"auto",maxWidth:360,marginTop:20}}><div style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}><span>Total Amount</span><strong>₹{Number(standaloneHotelInvoicePreview.saleAmount||0).toLocaleString("en-IN")}</strong></div><div style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}><span>Advance Received</span><strong>₹{Number(standaloneHotelInvoicePreview.advanceReceived||0).toLocaleString("en-IN")}</strong></div><div style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderTop:"2px solid #0f5f78",fontSize:20,color:"#0f5f78"}}><span>Balance Payable</span><strong>₹{Math.max(0,Number(standaloneHotelInvoicePreview.saleAmount||0)-Number(standaloneHotelInvoicePreview.advanceReceived||0)).toLocaleString("en-IN")}</strong></div></div>
              <p style={{marginTop:25,color:"#64748b",fontSize:12}}>Sneh Travel • +91 84488 68866 • travelsneh@gmail.com • 122, First Floor, Parmanand Colony, Mukherjee Nagar, Delhi - 110009, India</p>
            </div>
            <div className="admin-modal-actions"><button className="admin-button" onClick={()=>printStandaloneHotelInvoice(standaloneHotelInvoicePreview)}>🖨 Print / Save PDF</button><button className="admin-add-button" onClick={()=>emailStandaloneHotelInvoice(standaloneHotelInvoicePreview)}>✉️ Send on Mail</button><button className="admin-button" onClick={()=>setStandaloneHotelInvoicePreview(null)}>Close</button></div>
          </div>
        </div>
      )}

      {viewBooking && (
        <div className="admin-modal-backdrop" onClick={()=>setViewBooking(null)}>
          <div className="admin-modal quotation-preview" onClick={e=>e.stopPropagation()}>
            <div className="admin-modal-head">
              <div><h3>Sneh Travel Booking</h3><small>{viewBooking.serial_no || "Booking"}</small></div>
              <button onClick={()=>setViewBooking(null)}>×</button>
            </div>
            <div className="quotation-saved-section">
              <h4>Customer & Travel Details</h4>
              <div className="admin-form-grid">
                <div><strong>Customer</strong><p>{viewBooking.customer_name || "-"}</p></div>
                <div><strong>Mobile</strong><p>{viewBooking.phone || "-"}</p></div>
                <div><strong>Email</strong><p>{viewBooking.email || "-"}</p></div>
                <div><strong>Travel Date</strong><p>{viewBooking.travelDate || "-"}</p></div>
                <div><strong>Destination</strong><p>{viewBooking.destination || "-"}</p></div>
                <div><strong>Rooms</strong><p>{viewBooking.rooms || 0}</p></div>
                <div style={{gridColumn:"1 / -1"}}><strong>Room Allocation</strong><p>{viewBooking.roomAllocation || "-"}</p></div>
              </div>
            </div>
            <div className="quotation-saved-section">
              <h4>Hotel Booking</h4>
              {(viewBooking.hotelServices || []).length ? <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>City</th><th>Hotel</th><th>Category</th><th>Dates</th><th>Meal</th><th>Rooms</th><th>Status</th></tr></thead><tbody>{viewBooking.hotelServices.map((h,i)=><tr key={h.id||i}><td>{h.city||"-"}</td><td>{h.hotelName||"-"}</td><td>{h.category||"-"}</td><td>{h.checkIn||"-"} → {h.checkOut||"-"}</td><td>{h.mealPlan||"-"}</td><td>{h.roomAllocation||"-"}</td><td>{h.status||"Pending"}</td></tr>)}</tbody></table></div> : <p>No hotel services.</p>}
            </div>
            <div className="quotation-saved-section">
              <h4>Vehicle Booking</h4>
              {(viewBooking.vehicleServices || []).length ? <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Vehicle</th><th>Pickup</th><th>Drop</th><th>Days</th><th>Amount</th><th>Status</th></tr></thead><tbody>{viewBooking.vehicleServices.map((v,i)=><tr key={v.id||i}><td>{v.vehicleType||"-"}</td><td>{v.pickup||"-"}</td><td>{v.drop||"-"}</td><td>{v.days||0}</td><td>₹{Number(v.amount||0).toLocaleString("en-IN")}</td><td>{v.status||"Pending"}</td></tr>)}</tbody></table></div> : <p>No vehicle services.</p>}
            </div>
            <div className="quotation-saved-section"><h4>Customer Payment History</h4>{(() => { const rows=customerPaymentHistory.filter(p=>String(p.bookingId)===String(viewBooking.id)); const total=Number(viewBooking.finalSaleAmount||viewBooking.totalAmount||viewBooking.amount||0)||0; const paid=rows.reduce((sum,p)=>sum+(Number(p.amount)||0),0); const balance=Math.max(0,total-paid); return <><div className="supplier-payment-balance"><span>Booking Amount</span><strong>₹{total.toLocaleString("en-IN")}</strong><span>Total Received</span><strong>₹{paid.toLocaleString("en-IN")}</strong><span>Outstanding Balance</span><strong>₹{balance.toLocaleString("en-IN")}</strong></div>{rows.length?<div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Payment Amount</th><th>Payment Date</th><th>Quotation</th><th>Booking</th><th>Payment Mode</th><th>Reference</th></tr></thead><tbody>{rows.map((p,i)=><tr key={p.id}><td>{i+1}</td><td><strong>₹{Number(p.amount||0).toLocaleString("en-IN")}</strong></td><td>{p.paymentDate||"-"}</td><td>{p.quotationNo||"-"}</td><td>{p.bookingNo||viewBooking.serial_no||"-"}</td><td>{p.paymentMode||"-"}</td><td>{p.reference||"-"}</td></tr>)}</tbody></table></div>:<p>No customer payment received yet.</p>}</>; })()}</div>
            <div className="quotation-saved-section"><h4>Supplier Payments / Payables</h4>{supplierPayables.filter(item=>String(item.bookingId)===String(viewBooking.id) && !isLegacySupplierRow(item)).length?<div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Supplier</th><th>Type</th><th>Service</th><th>Payable</th><th>Paid</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead><tbody>{supplierPayables.filter(item=>String(item.bookingId)===String(viewBooking.id) && !isLegacySupplierRow(item)).map((item,i)=><tr key={item.id}><td>{i+1}</td><td>{item.supplierName||"-"}</td><td>{item.serviceType||"-"}</td><td>{item.serviceName||"-"}</td><td>₹{Number(item.amountPayable||0).toLocaleString("en-IN")}</td><td>₹{supplierPaidAmount(item).toLocaleString("en-IN")}</td><td>₹{supplierBalance(item).toLocaleString("en-IN")}</td><td><span className={`supplier-status ${supplierPayableStatus(item).toLowerCase().replace(/\s+/g,"-")}`}>{supplierPayableStatus(item)}</span></td><td><button className="admin-button" onClick={()=>openSupplierPayment(item)} disabled={supplierBalance(item)<=0}>Add Payment</button></td></tr>)}</tbody></table></div>:<p>No supplier payable records.</p>}{(()=>{const t=supplierTotalsForBooking(viewBooking.id);return <p><strong>Total Supplier Cost:</strong> ₹{t.payable.toLocaleString("en-IN")} &nbsp; | &nbsp; <strong>Paid:</strong> ₹{t.paid.toLocaleString("en-IN")} &nbsp; | &nbsp; <strong>Outstanding:</strong> ₹{t.balance.toLocaleString("en-IN")}</p>;})()}</div>
            <div className="quotation-saved-section">
              <h4>Amount & Payment</h4>
              <div className="quotation-total"><span>Final Sale Amount</span><strong>₹{Number(viewBooking.finalSaleAmount || viewBooking.totalAmount || 0).toLocaleString("en-IN")}</strong></div>
              <p>Advance: ₹{Number(viewBooking.advancePaid||0).toLocaleString("en-IN")} &nbsp; | &nbsp; Balance: ₹{Number(viewBooking.balanceAmount||0).toLocaleString("en-IN")}</p>
              <p>Booking Status: <strong>{viewBooking.bookingStatus || "Pending"}</strong> &nbsp; Payment: <strong>{viewBooking.paymentStatus || "Pending"}</strong></p>
            </div>
            {viewBooking.dayWiseItinerary && <div className="quotation-list-block"><strong>Detailed Day-wise Itinerary</strong><p style={{whiteSpace:"pre-wrap"}}>{viewBooking.dayWiseItinerary}</p></div>}
            {viewBooking.notes && <div className="quotation-list-block"><strong>Notes</strong><p style={{whiteSpace:"pre-wrap"}}>{viewBooking.notes}</p></div>}
            <div className="admin-modal-actions">
              <button className="admin-button" onClick={()=>openConfirmationPreview("unified",viewBooking)}>👁 View Confirmation</button>
              <button className="admin-add-button" onClick={()=>openInvoicePreview(viewBooking)}>🧾 Generate Invoice</button>
              <button className="admin-button" onClick={()=>downloadInvoiceWord(viewBooking)}>⬇ Invoice Word</button>
              <button className="admin-add-button" onClick={()=>emailUnifiedConfirmation(viewBooking)}>✉️ Send Mail</button>
              <button className="admin-button" onClick={()=>downloadConfirmationWord("unified",viewBooking)}>⬇ Download Word</button>
              <button className="admin-button" onClick={()=>{setViewBooking(null);editBooking(viewBooking)}}>Edit Booking</button>
              <button className="admin-add-button" onClick={()=>window.print()}>Print Booking</button>
            </div>
          </div>
        </div>
      )}

      {supplierBankTarget !== null && (<div className="admin-modal-backdrop" onClick={()=>setSupplierBankTarget(null)}><div className="admin-modal supplier-bank-modal" onClick={e=>e.stopPropagation()}><div className="admin-modal-head"><div><h3>Supplier Bank Details</h3><small>{supplierBankForm.supplierName || "Supplier"}</small></div><button onClick={()=>setSupplierBankTarget(null)}>×</button></div><div className="admin-form-grid"><label>Supplier Name<input value={supplierBankForm.supplierName} onChange={e=>setSupplierBankForm({...supplierBankForm,supplierName:e.target.value})}/></label><label>Account Holder Name<input value={supplierBankForm.accountName} onChange={e=>setSupplierBankForm({...supplierBankForm,accountName:e.target.value})}/></label><label>Bank Name<input value={supplierBankForm.bankName} onChange={e=>setSupplierBankForm({...supplierBankForm,bankName:e.target.value})}/></label><label>Account Number<input value={supplierBankForm.accountNumber} onChange={e=>setSupplierBankForm({...supplierBankForm,accountNumber:e.target.value})}/></label><label>IFSC Code<input value={supplierBankForm.ifsc} onChange={e=>setSupplierBankForm({...supplierBankForm,ifsc:e.target.value})}/></label><label>Branch<input value={supplierBankForm.branch} onChange={e=>setSupplierBankForm({...supplierBankForm,branch:e.target.value})}/></label><label>UPI ID<input value={supplierBankForm.upi} onChange={e=>setSupplierBankForm({...supplierBankForm,upi:e.target.value})}/></label><label>Supplier Phone<input value={supplierBankForm.phone} onChange={e=>setSupplierBankForm({...supplierBankForm,phone:e.target.value})}/></label><label style={{gridColumn:"1 / -1"}}>Notes<textarea rows="3" value={supplierBankForm.notes} onChange={e=>setSupplierBankForm({...supplierBankForm,notes:e.target.value})}/></label></div><div className="admin-modal-actions"><button className="admin-button" onClick={()=>setSupplierBankTarget(null)}>Close</button><button className="admin-add-button" onClick={saveSupplierBank}>Save Bank Details</button></div></div></div>)}

      {customerPaymentModal && (<div className="admin-modal-backdrop" onClick={()=>setCustomerPaymentModal(false)}><div className="admin-modal supplier-payment-modal" onClick={e=>e.stopPropagation()}><div className="admin-modal-head"><div><h3>Process Customer Payment</h3><small>{bookingForm.quotationNo || bookingForm.destination || "Booking"}</small></div><button onClick={()=>setCustomerPaymentModal(false)}>×</button></div><div className="supplier-payment-balance"><span>Total Sale</span><strong>₹{Number(bookingForm.finalSaleAmount || calculateBookingBreakup(bookingForm).finalAmount || 0).toLocaleString("en-IN")}</strong><span>Current Advance</span><strong>₹{Number(bookingForm.advancePaid || 0).toLocaleString("en-IN")}</strong><span>Balance</span><strong>₹{Math.max(0,Number(bookingForm.finalSaleAmount || calculateBookingBreakup(bookingForm).finalAmount || 0)-Number(bookingForm.advancePaid || 0)).toLocaleString("en-IN")}</strong></div><div className="admin-form-grid"><label>Payment Amount<input type="number" min="0" value={customerPaymentForm.amount} onChange={e=>setCustomerPaymentForm({...customerPaymentForm,amount:e.target.value})} placeholder="Enter received amount"/></label><label>Payment Date<input type="date" value={customerPaymentForm.paymentDate} onChange={e=>setCustomerPaymentForm({...customerPaymentForm,paymentDate:e.target.value})}/></label><label>Payment Mode<select value={customerPaymentForm.paymentMode} onChange={e=>setCustomerPaymentForm({...customerPaymentForm,paymentMode:e.target.value})}><option>Cash</option><option>Bank Transfer</option><option>UPI</option><option>Card</option><option>Cheque</option></select></label><label>Transaction / Reference No.<input value={customerPaymentForm.reference} onChange={e=>setCustomerPaymentForm({...customerPaymentForm,reference:e.target.value})} placeholder="UTR / transaction no."/></label><label style={{gridColumn:"1 / -1"}}>Notes<textarea rows="3" value={customerPaymentForm.notes} onChange={e=>setCustomerPaymentForm({...customerPaymentForm,notes:e.target.value})} placeholder="Payment notes..."/></label></div><div className="admin-modal-actions"><button className="admin-button" onClick={()=>setCustomerPaymentModal(false)}>Cancel</button><button className="admin-add-button" onClick={saveCustomerPayment}>Save Payment</button></div></div></div>)}

      {invoicePreview && (
        <div className="admin-modal-backdrop" onClick={()=>setInvoicePreview(null)}>
          <div className="admin-modal quotation-preview" onClick={e=>e.stopPropagation()} style={{maxWidth:920,maxHeight:"92vh",overflow:"auto",padding:0}}>
            <div className="admin-modal-head" style={{padding:"16px 20px"}}>
              <div><div style={{fontSize:12,fontWeight:800,letterSpacing:2,color:"#075985"}}>SNEH TRAVEL</div><h3 style={{margin:"5px 0 0"}}>Booking Invoice</h3><small>{invoicePreview.invoiceNo || invoiceNumberForBooking(invoicePreview)} · {invoicePreview.serial_no || "Booking"}</small></div>
              <button onClick={()=>setInvoicePreview(null)}>×</button>
            </div>
            <div dangerouslySetInnerHTML={{__html: invoiceDocumentHtml(invoicePreview).replace(/^<!DOCTYPE html>[\s\S]*?<body>/i, "").replace(/<\/body>[\s\S]*?<\/html>$/i, "")}} />
            <div className="admin-modal-actions" style={{display:"flex",gap:8,flexWrap:"wrap",padding:"0 20px 20px"}}>
              <button className="admin-add-button" onClick={()=>downloadInvoiceWord(invoicePreview)}>⬇ Download Invoice in MS Word</button>
              <button className="admin-button" onClick={()=>printInvoice(invoicePreview)}>🖨 Print Invoice</button>
              <button className="admin-button" onClick={()=>setInvoicePreview(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {confirmationPreview && (
        <div className="admin-modal-backdrop" onClick={()=>setConfirmationPreview(null)}>
          <div className="admin-modal quotation-preview confirmation-preview-modal" onClick={e=>e.stopPropagation()} style={{maxWidth:900,maxHeight:"90vh",overflow:"auto"}}>
            <div className="admin-modal-head">
              <div><div style={{fontSize:12,fontWeight:800,letterSpacing:2,color:"#075985"}}>SNEH TRAVEL</div><h3 style={{margin:"5px 0 0"}}>{confirmationPreview.title}</h3></div>
              <button onClick={()=>setConfirmationPreview(null)}>×</button>
            </div>
            <style>{CONFIRMATION_PREVIEW_STYLES}</style>
            <div className="confirmation-preview-document" dangerouslySetInnerHTML={{__html: confirmationDocumentHtml(confirmationPreview).replace(/^<!DOCTYPE html>[\s\S]*?<body>/i, "").replace(/<\/body>[\s\S]*?<\/html>$/i, "")}} />
            <div className="admin-modal-actions" style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <button className="admin-button" onClick={()=>downloadConfirmationWord(confirmationPreview.type,confirmationPreview.booking,confirmationPreview.hotel)}>⬇ Download in MS Word</button>
              <button className="admin-add-button" onClick={()=>emailUnifiedConfirmation(confirmationPreview.booking)}>✉️ Send Mail</button>
              <button className="admin-button" onClick={()=>window.print()}>🖨 Print</button>
              <button className="admin-button" onClick={()=>setConfirmationPreview(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {supplierPaymentTarget?.selector && (<div className="admin-modal-backdrop" onClick={()=>setSupplierPaymentTarget(null)}><div className="admin-modal supplier-payment-modal" onClick={e=>e.stopPropagation()}><div className="admin-modal-head"><div><h3>Supplier Payments</h3><small>{supplierPaymentTarget.bookingNo || "Booking"} · {supplierPaymentTarget.customerName || "Guest"}</small></div><button onClick={()=>setSupplierPaymentTarget(null)}>×</button></div><div className="supplier-payment-detail-grid">{(supplierPaymentTarget.rows||[]).map(item=><div key={item.id} style={{gridColumn:"1 / -1",display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr auto",gap:12,alignItems:"center",padding:"12px 0",borderBottom:"1px solid #e5e7eb"}}><div><strong>{item.supplierName || "Supplier not assigned"}</strong><small style={{display:"block"}}>{item.serviceType || "Other"} · {item.serviceName || "Service"}{item.city ? ` · ${item.city}` : ""}</small></div><div><span>Payable</span><strong>₹{Number(item.amountPayable||0).toLocaleString("en-IN")}</strong></div><div><span>Paid</span><strong>₹{supplierPaidAmount(item).toLocaleString("en-IN")}</strong></div><div><span>Balance</span><strong>₹{supplierBalance(item).toLocaleString("en-IN")}</strong></div><button className="admin-add-button" onClick={()=>openSupplierPayment(item)} disabled={supplierBalance(item)<=0}>Process Payment</button></div>)}</div><div className="admin-modal-actions"><button className="admin-button" onClick={()=>setSupplierPaymentTarget(null)}>Close</button></div></div></div>)}

      {supplierPaymentTarget && (<div className="admin-modal-backdrop" onClick={()=>setSupplierPaymentTarget(null)}><div className="admin-modal supplier-payment-modal" onClick={e=>e.stopPropagation()}><div className="admin-modal-head"><div><h3>Add Payment</h3><small>{supplierPaymentTarget.bookingNo || "Booking"} · {supplierPaymentTarget.serviceName || supplierPaymentTarget.serviceType || "Service"}</small></div><button onClick={()=>setSupplierPaymentTarget(null)}>×</button></div><div className="supplier-payment-detail-grid"><div><span>Booking No.</span><strong>{supplierPaymentTarget.bookingNo || "-"}</strong></div><div><span>Quotation No.</span><strong>{supplierPaymentTarget.quotationNo || supplierLedgerBooking?.quotationNo || "-"}</strong></div><div><span>Guest Name</span><strong>{supplierPaymentTarget.customerName || "-"}</strong></div><div><span>Supplier Name</span><strong>{supplierPaymentTarget.supplierName || "Supplier not assigned"}</strong></div><div><span>Service</span><strong>{supplierPaymentTarget.serviceType || "Other"}{supplierPaymentTarget.serviceName ? ` — ${supplierPaymentTarget.serviceName}` : ""}</strong></div><div><span>Purchase Amount</span><strong>₹{Number(supplierPaymentTarget.amountPayable||0).toLocaleString("en-IN")}</strong></div><div><span>Sales Amount</span><strong>₹{supplierServiceSales(supplierPaymentTarget, supplierLedgerBooking, supplierLedgerTotals(supplierLedgerBooking).purchase).toLocaleString("en-IN")}</strong></div><div><span>Customer Advance</span><strong>₹{Number(supplierPaymentTarget.customerAdvance||0).toLocaleString("en-IN")}</strong></div><div><span>Customer Balance</span><strong>₹{Number(supplierPaymentTarget.customerBalance||0).toLocaleString("en-IN")}</strong></div></div><div className="supplier-payment-balance"><span>Supplier Payable</span><strong>₹{Number(supplierPaymentTarget.amountPayable||0).toLocaleString("en-IN")}</strong><span>Outstanding</span><strong>₹{supplierBalance(supplierPaymentTarget).toLocaleString("en-IN")}</strong><span>Status</span><strong className={supplierBalance(supplierPaymentTarget)<=0?"supplier-clear":"supplier-not-clear"}>{supplierBalance(supplierPaymentTarget)<=0?"Clear":"Not Clear"}</strong></div><div className="admin-form-grid"><label>Payment Amount<input type="number" min="0" max={supplierBalance(supplierPaymentTarget)} value={supplierPaymentForm.amount} onChange={e=>setSupplierPaymentForm({...supplierPaymentForm,amount:e.target.value})}/></label><label>Payment Date<input type="date" value={supplierPaymentForm.paymentDate} onChange={e=>setSupplierPaymentForm({...supplierPaymentForm,paymentDate:e.target.value})}/></label><label>Payment Mode<select value={supplierPaymentForm.paymentMode} onChange={e=>setSupplierPaymentForm({...supplierPaymentForm,paymentMode:e.target.value})}><option>Cash</option><option>Bank Transfer</option><option>UPI</option><option>Card</option><option>Cheque</option></select></label><label>Transaction / Reference No.<input value={supplierPaymentForm.reference} onChange={e=>setSupplierPaymentForm({...supplierPaymentForm,reference:e.target.value})} placeholder="UTR / transaction no."/></label><label style={{gridColumn:"1 / -1"}}>Notes<textarea rows="3" value={supplierPaymentForm.notes} onChange={e=>setSupplierPaymentForm({...supplierPaymentForm,notes:e.target.value})} placeholder="Payment notes..."/></label></div><div className="admin-modal-actions"><button className="admin-button" onClick={()=>setSupplierPaymentTarget(null)}>Cancel</button><button className="admin-add-button" onClick={saveSupplierPayment}>Save Payment</button></div></div></div>)}

      {viewQuotation && createPortal((
        <div className="admin-modal-backdrop" style={{zIndex:2147483647}} onClick={()=>setViewQuotation(null)}>
          <div className="admin-modal quotation-preview" onClick={e=>e.stopPropagation()} style={{width:"min(1000px,96vw)",maxHeight:"92vh",overflow:"auto",background:"#fff",position:"relative",zIndex:2147483647}}>
            <div className="admin-modal-head">
              <div>
                <h3>Sneh Travel Quotation</h3>
                <small>{viewQuotation.serial_no || "Quotation"}</small>
              </div>
              <button onClick={()=>setViewQuotation(null)}>×</button>
            </div>

            <div className="quotation-paper" dangerouslySetInnerHTML={{__html: safeQuotationDocumentHtml(viewQuotation).replace(/^<!DOCTYPE html>[\s\S]*?<body>/i, "").replace(/<\/body>[\s\S]*?<\/html>$/i, "")}} />
            <div className="admin-modal-actions" style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <button className="admin-add-button" onClick={()=>downloadQuotationPDF(viewQuotation)}>📄 Download PDF</button>
              <button className="admin-button" onClick={()=>sendQuotationMail(viewQuotation)}>📧 Email Quotation</button>
              <button className="admin-add-button" onClick={()=>sendQuotationWhatsApp(viewQuotation)}>💬 WhatsApp</button>
              <button className="admin-button" onClick={()=>window.print()}>🖨 Print</button>
              <button className="admin-button" onClick={()=>{setViewQuotation(null);openQuotation(null,viewQuotation)}}>Edit</button>
              <button className="admin-button" onClick={()=>{setViewQuotation(null);modifyQuotation(viewQuotation)}}>Modify</button>
              <button className="admin-delete" onClick={()=>deleteQuotation(viewQuotation)}>Delete</button>
              <button className="admin-add-button" onClick={()=>{setViewQuotation(null);openBooking({id:viewQuotation.enquiry_id,name:viewQuotation.customer_name,phone:viewQuotation.phone,email:viewQuotation.email,destination:viewQuotation.destination},viewQuotation)}}>Create Booking</button>
            </div>
          </div>
        </div>
      ), document.body)}

      {activeTab === "reports" && (() => {
        const today = new Date().toISOString().slice(0, 10);
        const reportRows = bookings.map((b) => {
          const sale = Number(b.finalSaleAmount ?? b.totalAmount ?? b.amount ?? 0) || 0;
          const purchaseFromServices = (b.hotelServices || []).reduce((sum, h) => sum + (Number(h.purchaseAmount) || 0), 0)
            + (b.vehicleServices || []).reduce((sum, v) => sum + (Number(v.purchaseAmount ?? v.amount) || 0), 0);
          const purchase = Number(b.purchaseAmount ?? b.supplierPurchaseAmount ?? b.netCost) || purchaseFromServices;
          const payments = customerPaymentHistory.filter((p) => String(p.bookingId) === String(b.id));
          const received = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0) || Number(b.advancePaid || 0) || 0;
          return {
            ...b,
            reportDate: String(b.travelDate || b.created_at || today).slice(0, 10),
            sale,
            purchase,
            received,
            balance: Math.max(0, sale - received),
            margin: sale - purchase
          };
        });
        const supplierRows = supplierPayables.map((p) => {
          const purchase = Number(p.purchaseAmount ?? p.amountPayable ?? p.purchase ?? 0) || 0;
          const paid = Number(p.paidAmountOverride ?? p.paidAmount ?? 0) || 0;
          return {
            ...p,
            reportDate: String(p.paymentDeadline || p.lastPaymentDateOverride || p.createdAt || today).slice(0, 10),
            purchase,
            paid,
            balance: Math.max(0, purchase - paid)
          };
        });
        const [reportFrom, reportTo] = [
          document.getElementById("sneh-report-from")?.value || "",
          document.getElementById("sneh-report-to")?.value || ""
        ];
        const inRange = (date) => (!reportFrom || date >= reportFrom) && (!reportTo || date <= reportTo);
        const sales = reportRows.filter((r) => inRange(r.reportDate));
        const purchases = supplierRows.filter((r) => inRange(r.reportDate));
        const saleTotal = sales.reduce((n, r) => n + r.sale, 0);
        const receivedTotal = sales.reduce((n, r) => n + r.received, 0);
        const balanceTotal = sales.reduce((n, r) => n + r.balance, 0);
        const purchaseTotal = purchases.reduce((n, r) => n + r.purchase, 0);
        const purchasePaid = purchases.reduce((n, r) => n + r.paid, 0);
        const purchaseBalance = purchases.reduce((n, r) => n + r.balance, 0);
        const profitTotal = sales.reduce((n, r) => n + r.margin, 0);
        const money = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;
        const exportCsv = (type) => {
          const rows = type === "sales" ? sales : purchases;
          const headers = type === "sales"
            ? ["Date","Booking No","Customer","Destination","Sale Amount","Received","Balance","Purchase Cost","Margin"]
            : ["Date","Supplier","Service","Booking No","Guest","Purchase Amount","Paid","Balance"];
          const data = rows.map(r => type === "sales"
            ? [r.reportDate,r.serial_no || "",r.customer_name || "",r.destination || "",r.sale,r.received,r.balance,r.purchase,r.margin]
            : [r.reportDate,r.supplierName || "",r.serviceName || "",r.bookingNo || "",r.customerName || "",r.purchase,r.paid,r.balance]);
          const csv = [headers, ...data].map(row => row.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\\n");
          const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${type}-report-${today}.csv`;
          a.click();
          URL.revokeObjectURL(url);
        };
        return <div className="admin-section">
          <div className="admin-section-header">
            <div><span className="eyebrow">REPORTS / ACCOUNTS</span><h2>Sales & Purchase Reports</h2><p>Track customer sales, supplier purchase costs, collections, outstanding amounts and booking margin.</p></div>
          </div>
          <div style={{display:"flex",gap:12,alignItems:"end",flexWrap:"wrap",padding:18,background:"#fff",border:"1px solid #e5e7eb",borderRadius:16,marginBottom:18}}>
            <label style={{display:"grid",gap:6,fontSize:13,fontWeight:700}}>From Date<input id="sneh-report-from" type="date" defaultValue="" style={{padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:9}} onChange={(e)=>{e.currentTarget.form?.dispatchEvent(new Event("change",{bubbles:true}));}} /></label>
            <label style={{display:"grid",gap:6,fontSize:13,fontWeight:700}}>To Date<input id="sneh-report-to" type="date" defaultValue="" style={{padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:9}} /></label>
            <button className="admin-button" onClick={()=>window.location.reload()}>Apply Date Filter</button>
            <button className="admin-button" onClick={()=>{const a=document.getElementById("sneh-report-from"),b=document.getElementById("sneh-report-to");if(a)a.value="";if(b)b.value="";window.location.reload();}}>Reset</button>
          </div>
          <div className="admin-stat-grid" style={{gridTemplateColumns:"repeat(5,minmax(0,1fr))"}}>
            <div className="admin-card"><small>Total Sales</small><h3>{money(saleTotal)}</h3><p>{sales.length} booking(s)</p></div>
            <div className="admin-card"><small>Customer Received</small><h3>{money(receivedTotal)}</h3><p>Collected against sales</p></div>
            <div className="admin-card"><small>Total Purchase</small><h3>{money(purchaseTotal)}</h3><p>{purchases.length} supplier item(s)</p></div>
            <div className="admin-card"><small>Purchase Paid</small><h3>{money(purchasePaid)}</h3><p>Paid to suppliers</p></div>
            <div className="admin-card"><small>Booking Margin</small><h3>{money(profitTotal)}</h3><p>Sale − purchase cost</p></div>
          </div>

          <div className="admin-card" style={{marginTop:18}}>
            <div className="admin-card-head"><div><span>SALES REPORT</span><h3>Customer Sales</h3></div><button className="admin-button" onClick={()=>exportCsv("sales")}>Download CSV</button></div>
            <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Date</th><th>Booking No.</th><th>Customer</th><th>Destination</th><th>Sale Amount</th><th>Received</th><th>Balance</th><th>Purchase Cost</th><th>Margin</th></tr></thead><tbody>
              {sales.length ? sales.map((r,i)=><tr key={r.id || i}><td>{i+1}</td><td>{r.reportDate}</td><td><strong>{r.serial_no || "-"}</strong></td><td>{r.customer_name || "-"}</td><td>{r.destination || "-"}</td><td><strong>{money(r.sale)}</strong></td><td>{money(r.received)}</td><td>{money(r.balance)}</td><td>{money(r.purchase)}</td><td><strong>{money(r.margin)}</strong></td></tr>) : <tr><td colSpan="10" style={{textAlign:"center",padding:30}}>No sales found for the selected period.</td></tr>}
            </tbody></table></div>
            <div style={{display:"flex",justifyContent:"flex-end",gap:24,padding:"14px 4px 0",fontWeight:800}}><span>Sales: {money(saleTotal)}</span><span>Purchase: {money(purchaseTotal)}</span><span>Margin: {money(profitTotal)}</span></div>
          </div>

          <div className="admin-card" style={{marginTop:18}}>
            <div className="admin-card-head"><div><span>PURCHASE REPORT</span><h3>Supplier Purchases</h3></div><button className="admin-button" onClick={()=>exportCsv("purchases")}>Download CSV</button></div>
            <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Date</th><th>Supplier</th><th>Service</th><th>Booking No.</th><th>Guest</th><th>Purchase Amount</th><th>Paid</th><th>Balance</th></tr></thead><tbody>
              {purchases.length ? purchases.map((r,i)=><tr key={r.id || i}><td>{i+1}</td><td>{r.reportDate}</td><td>{r.supplierName || "-"}</td><td>{r.serviceName || r.serviceType || "-"}</td><td>{r.bookingNo || "-"}</td><td>{r.customerName || "-"}</td><td><strong>{money(r.purchase)}</strong></td><td>{money(r.paid)}</td><td>{money(r.balance)}</td></tr>) : <tr><td colSpan="9" style={{textAlign:"center",padding:30}}>No supplier purchases found for the selected period.</td></tr>}
            </tbody></table></div>
            <div style={{display:"flex",justifyContent:"flex-end",gap:24,padding:"14px 4px 0",fontWeight:800}}><span>Purchase: {money(purchaseTotal)}</span><span>Paid: {money(purchasePaid)}</span><span>Balance: {money(purchaseBalance)}</span></div>
          </div>

          <div style={{marginTop:18,padding:18,borderRadius:16,background:"#f8fafc",border:"1px solid #e2e8f0"}}>
            <strong>How the reports calculate:</strong> Sales = final customer payable amount. Purchase = hotel + vehicle supplier purchase cost saved in the booking/supplier ledger. Margin = Sales − Purchase. Customer received and supplier paid are shown separately from the outstanding balances.
          </div>
        </div>;
      })()}

      {activeTab === "destinations" && <DestinationItineraryMaster />}

      {activeTab === "pricing" && <PricingSettingsMaster />}

      {activeTab === "packages" && (
        <div className="admin-section package-master-page">
          <div className="admin-section-header">
            <div><span className="eyebrow">TRAVEL INVENTORY / PACKAGES</span><h2>Package Master</h2><p>Create, edit and publish your domestic and international packages.</p></div>
            <div className="admin-actions"><button className="admin-button" onClick={refreshPackages}>↻ Refresh</button><button className="admin-add-button" onClick={openAddPackage}>+ New Package</button></div>
          </div>
          {loadingPackages ? <div className="empty-admin">Loading packages…</div> : packages.length === 0 ? <div className="empty-admin"><h3>No packages yet</h3><p>Create your first package using the New Package button.</p></div> : <div className="package-master-grid">{packages.map(pkg => <article className="package-master-card" key={pkg.id}><div className="package-master-image"><img src={pkg.image_url || "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"} alt={pkg.title || pkg.destination}/><span className={pkg.published ? "published-pill" : "draft-pill"}>{pkg.published ? "Published" : "Draft"}</span></div><div className="package-master-body"><span>{pkg.package_type || "Domestic"}</span><h3>{pkg.title || "Untitled Package"}</h3><p>{pkg.destination || "Destination not set"} · {pkg.duration || "Custom duration"}</p><strong>{pkg.base_price ? `₹${Number(pkg.base_price).toLocaleString("en-IN")}` : "Price on request"}</strong><div className="package-master-actions"><button className="admin-button" onClick={() => openEditPackage(pkg.id)}>Edit</button><button className="admin-button" onClick={async()=>{await toggleTravelPackagePublished(pkg.id,!pkg.published);await refreshPackages();}}>{pkg.published ? "Unpublish" : "Publish"}</button><button className="admin-delete" onClick={() => handlePackageDelete(pkg.id)}>Delete</button></div></div></article>)}</div>}
        </div>
      )}

      {activeTab === "hotels" && (
        <HotelBuilder />
      )}

      {activeTab === "daywise-itinerary" && (
        <VehicleMaster />
      )}

      {activeTab === "vehicles" && (
        <VehicleMaster />
      )}
      {activeTab === "itinerary-rates" && (
        <VehicleMaster matrixOnly />
      )}

      {activeTab === "staff" && (
        <div className="admin-section staff-permissions-page">
          <div className="admin-section-header"><div><span className="supplier-ledger-eyebrow">TEAM CONTROL</span><h2>Staff & Permissions</h2><p>Turn every permission ON/OFF and track which staff member created each booking.</p></div><button className="admin-add-button" onClick={()=>{setStaffEditingId(null);setStaffForm(newStaffForm());}}>+ New Staff</button></div>
          <div className="staff-editor-card">
            <div className="admin-form-grid"><label>Staff Name *<input value={staffForm.name||""} onChange={e=>setStaffForm({...staffForm,name:e.target.value})} placeholder="Staff member name"/></label><label>Email<input type="email" value={staffForm.email||""} onChange={e=>setStaffForm({...staffForm,email:e.target.value})}/></label><label>Phone<input value={staffForm.phone||""} onChange={e=>setStaffForm({...staffForm,phone:e.target.value})}/></label><label>Role<select value={staffForm.role||"Sales Executive"} onChange={e=>setStaffForm({...staffForm,role:e.target.value})}><option>Sales Executive</option><option>Operations</option><option>Accounts</option><option>Manager</option><option>Admin Staff</option></select></label><label>Status<select value={staffForm.active===false?"Inactive":"Active"} onChange={e=>setStaffForm({...staffForm,active:e.target.value==="Active"})}><option>Active</option><option>Inactive</option></select></label></div>
            <div className="staff-permission-head"><div><h3>Permissions</h3><p>Green = Allowed. Switch any permission OFF whenever required.</p></div><div><button className="premium-btn ghost mini" type="button" onClick={()=>setStaffForm(prev=>({...prev,permissions:Object.fromEntries(STAFF_PERMISSION_LIST.map(([k])=>[k,true]))}))}>Allow All</button> <button className="premium-btn ghost mini" type="button" onClick={()=>setStaffForm(prev=>({...prev,permissions:Object.fromEntries(STAFF_PERMISSION_LIST.map(([k])=>[k,false]))}))}>Deny All</button></div></div>
            <div className="staff-permission-grid">{STAFF_PERMISSION_LIST.map(([key,label])=><button type="button" key={key} className={`permission-toggle ${staffForm.permissions?.[key]!==false?"allowed":"denied"}`} onClick={()=>toggleStaffPermission(key)}><span>{staffForm.permissions?.[key]!==false?"ON":"OFF"}</span><strong>{label}</strong><em>{staffForm.permissions?.[key]!==false?"Allowed":"Blocked"}</em></button>)}</div>
            <div className="admin-modal-actions"><button className="admin-button" type="button" onClick={()=>{setStaffEditingId(null);setStaffForm(newStaffForm());}}>Clear</button><button className="admin-add-button" type="button" onClick={saveStaffRecord}>{staffEditingId?"Update Staff":"Save Staff"}</button></div>
          </div>
          <div className="staff-report-card"><div className="rate-section-head"><div><span className="eyebrow">STAFF SALES REPORT</span><h3>Booking-wise Staff Performance</h3></div><select value={staffReportFilter} onChange={e=>setStaffReportFilter(e.target.value)}><option>All</option>{staffList.map(st=><option key={st.id}>{st.name}</option>)}</select></div>
            <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Staff</th><th>Bookings</th><th>Sale Amount</th><th>Purchase Amount</th><th>Profit Amount</th><th>Action</th></tr></thead><tbody>{staffReports().filter(st=>staffReportFilter==="All"||st.name===staffReportFilter).map(st=><tr key={st.id}><td><strong>{st.name}</strong><small>{st.role||"Staff"}</small></td><td>{st.bookingCount}</td><td>₹{st.sale.toLocaleString("en-IN")}</td><td>₹{st.purchase.toLocaleString("en-IN")}</td><td style={{fontWeight:800,color:st.profit>=0?"#15803d":"#c2410c"}}>₹{st.profit.toLocaleString("en-IN")}</td><td><button className="premium-btn ghost mini" onClick={()=>editStaffRecord(st)}>Edit</button> <button className="icon-danger" onClick={()=>deleteStaffRecord(st)}>Delete</button></td></tr>)}{!staffReports().length&&<tr><td colSpan="6">No staff records yet. Create a staff member above.</td></tr>}</tbody></table></div>
          </div>
          <div className="staff-report-card"><div className="rate-section-head"><div><span className="eyebrow">BOOKING STAFF DETAILS</span><h3>Recent Bookings & Profit</h3></div></div><div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Booking</th><th>Staff</th><th>Guest</th><th>Travel Date</th><th>Sale</th><th>Purchase</th><th>Profit</th></tr></thead><tbody>{bookings.slice(0,100).map(b=>{const sale=Number(b.finalSaleAmount||b.totalAmount||b.amount)||0;const purchase=Number(b.netCost)||0;return <tr key={b.id}><td>{b.serial_no||"—"}</td><td>{staffNameForBooking(b)}</td><td>{b.customer_name||"—"}</td><td>{b.travelDate||"—"}</td><td>₹{sale.toLocaleString("en-IN")}</td><td>₹{purchase.toLocaleString("en-IN")}</td><td style={{fontWeight:800}}>₹{(sale-purchase).toLocaleString("en-IN")}</td></tr>})}</tbody></table></div></div>
        </div>
      )}

      {/* ===================================================
          PACKAGE FORM MODAL
      =================================================== */}

      {showPackageForm && (

        <div className="package-modal-overlay">

          <div className="package-modal">

            <div className="package-modal-header">

              <div>
                <h2>
                  {editingPackageId
                    ? "Edit Travel Package"
                    : "Add New Travel Package"}
                </h2>

                <p>
                  Complete all package information below.
                </p>
              </div>

              <button
                className="package-close-button"
                onClick={() => setShowPackageForm(false)}
              >
                ×
              </button>

            </div>


            <form onSubmit={handlePackageSave}>

              {/* =========================================
                  BASIC PACKAGE INFORMATION
              ========================================= */}

              <div className="package-form-section">

                <h3>1. Basic Package Information</h3>

                <div className="package-form-grid">

                  <div className="package-form-field">

                    <label>
                      Package Title *
                    </label>

                    <input
                      type="text"
                      value={packageForm.title}
                      onChange={e =>
                        updatePackageField(
                          "title",
                          e.target.value
                        )
                      }
                      placeholder="Example: Kerala Honeymoon Package"
                      required
                    />

                  </div>


                  <div className="package-form-field">

                    <label>
                      Package Type
                    </label>

                    <select
                      value={packageForm.package_type}
                      onChange={e =>
                        updatePackageField(
                          "package_type",
                          e.target.value
                        )
                      }
                    >

                      <option value="Domestic">
                        Domestic
                      </option>

                      <option value="International">
                        International
                      </option>

                    </select>

                  </div>


                  <div className="package-form-field">

                    <label>
                      Destination
                    </label>

                    <input
                      type="text"
                      value={packageForm.destination}
                      onChange={e =>
                        updatePackageField(
                          "destination",
                          e.target.value
                        )
                      }
                      placeholder="Example: Kerala"
                    />

                  </div>

                <div className="package-form-field"><label>State / Region</label><input value={packageForm.state || ""} onChange={e => updatePackageField("state", e.target.value)} placeholder="Example: Jammu & Kashmir" /></div>


                  <div className="package-form-field">

                    <label>
                      Duration
                    </label>

                    <input
                      type="text"
                      value={packageForm.duration}
                      onChange={e =>
                        updatePackageField(
                          "duration",
                          e.target.value
                        )
                      }
                      placeholder="Example: 5 Nights / 6 Days"
                    />

                  </div>


                  <div className="package-form-field">

                    <label>
                      Starting Price <span style={{fontWeight:400,color:"#64748b"}}>(Optional)</span>
                    </label>

                    <input
                      type="number"
                      value={packageForm.price}
                      onChange={e =>
                        updatePackageField(
                          "price",
                          e.target.value
                        )
                      }
                      placeholder="Leave blank if no price"
                    />

                  </div>


                  <div className="package-form-field">

                    <label>
                      Image URL
                    </label>

                    <input
                      type="text"
                      value={packageForm.image_url}
                      onChange={e =>
                        updatePackageField(
                          "image_url",
                          e.target.value
                        )
                      }
                      placeholder="https://..."
                    />

                  </div>

                </div>


                <div className="package-form-field">

                  <label>
                    Short Subtitle
                  </label>

                  <input
                    type="text"
                    value={packageForm.subtitle}
                    onChange={e =>
                      updatePackageField(
                        "subtitle",
                        e.target.value
                      )
                    }
                    placeholder="Example: Romantic Kerala escape for couples"
                  />

                </div>


                <div className="package-form-field">

                  <label>
                    Package Description
                  </label>

                  <textarea
                    rows="5"
                    value={packageForm.description}
                    onChange={e =>
                      updatePackageField(
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Write complete package description..."
                  />

                </div>

              </div>


              {/* =========================================
                  TRAVEL & TRANSPORT
              ========================================= */}

              <div className="package-form-section">
                <div className="package-section-title-row">
                  <h3>2. Travel & Transport Options</h3>
                  <button type="button" className="admin-add-small" onClick={addTransport}>
                    + Add Transport Rate
                  </button>
                </div>

                <p className="package-help-text">
                  Add different pickup/drop routes and vehicle rates. Example: Chandigarh → Shimla → Manali or Delhi → Shimla → Manali.
                </p>

                {(packageForm.transportOptions || []).map((item, index) => (
                  <div className="transport-rate-card" key={index}>
                    <div className="nested-form-header">
                      <h4>Transport Rate {index + 1}</h4>
                      {(packageForm.transportOptions || []).length > 1 && (
                        <button type="button" className="remove-small" onClick={() => removeTransport(index)}>
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="package-form-grid transport-form-grid">
                      <div className="package-form-field">
                        <label>Pickup Point *</label>
                        <input
                          value={item.pickup}
                          onChange={e => updateTransport(index, "pickup", e.target.value)}
                          placeholder="Example: Chandigarh"
                        />
                      </div>

                      <div className="package-form-field">
                        <label>Drop Point *</label>
                        <input
                          value={item.drop}
                          onChange={e => updateTransport(index, "drop", e.target.value)}
                          placeholder="Example: Manali"
                        />
                      </div>

                      <div className="package-form-field">
                        <label>Vehicle Type</label>
                        <select
                          value={item.vehicle_type}
                          onChange={e => updateTransport(index, "vehicle_type", e.target.value)}
                        >
                          <option>Sedan</option>
                          <option>Ertiga</option>
                          <option>Innova</option>
                          <option>Innova Crysta</option>
                          <option>Tempo Traveller 9 Seater</option>
                          <option>Tempo Traveller 12 Seater</option>
                          <option>Tempo Traveller 16 Seater</option>
                          <option>Coach / Bus</option>
                        </select>
                      </div>

                      <div className="package-form-field">
                        <label>Capacity</label>
                        <input
                          type="number"
                          min="1"
                          value={item.capacity}
                          onChange={e => updateTransport(index, "capacity", e.target.value)}
                        />
                      </div>

                      <div className="package-form-field">
                        <label>Trip Type</label>
                        <select
                          value={item.trip_type}
                          onChange={e => updateTransport(index, "trip_type", e.target.value)}
                        >
                          <option>One Way</option>
                          <option>Round Trip</option>
                          <option>Full Package</option>
                          <option>Per Day</option>
                        </select>
                      </div>

                      <div className="package-form-field">
                        <label>Transport Cost (₹)</label>
                        <input
                          type="number"
                          min="0"
                          value={item.price}
                          onChange={e => updateTransport(index, "price", e.target.value)}
                          placeholder="Example: 18000"
                        />
                      </div>
                    </div>

                    <div className="package-form-field">
                      <label>Transport Notes</label>
                      <textarea
                        rows="2"
                        value={item.description}
                        onChange={e => updateTransport(index, "description", e.target.value)}
                        placeholder="Example: Driver, fuel, toll and parking included."
                      />
                    </div>

                    <label className="inline-checkbox">
                      <input
                        type="checkbox"
                        checked={Boolean(item.driver_included)}
                        onChange={e => updateTransport(index, "driver_included", e.target.checked)}
                      />
                      Driver included
                    </label>
                  </div>
                ))}

                <div className="package-form-grid legacy-travel-fields">
                  <div className="package-form-field">
                    <label>General Transport Note</label>
                    <input
                      type="text"
                      value={packageForm.transport}
                      onChange={e => updatePackageField("transport", e.target.value)}
                      placeholder="Example: Private vehicle throughout"
                    />
                  </div>

                  <div className="package-form-field">
                    <label>General Meal Plan</label>
                    <input
                      type="text"
                      value={packageForm.meal_plan}
                      onChange={e => updatePackageField("meal_plan", e.target.value)}
                      placeholder="Example: Breakfast + Dinner"
                    />
                  </div>
                </div>
              </div>


              {/* =========================================
                  INCLUSIONS / EXCLUSIONS
              ========================================= */}

              <div className="package-form-section">

                <h3>3. Inclusions & Exclusions</h3>

                <div className="package-form-grid">

                  <div className="package-form-field">

                    <label>
                      Inclusions
                    </label>

                    <textarea
                      rows="7"
                      value={packageForm.inclusions}
                      onChange={e =>
                        updatePackageField(
                          "inclusions",
                          e.target.value
                        )
                      }
                      placeholder={
                        "Hotel accommodation\n" +
                        "Breakfast\n" +
                        "Airport transfer\n" +
                        "Sightseeing"
                      }
                    />

                  </div>


                  <div className="package-form-field">

                    <label>
                      Exclusions
                    </label>

                    <textarea
                      rows="7"
                      value={packageForm.exclusions}
                      onChange={e =>
                        updatePackageField(
                          "exclusions",
                          e.target.value
                        )
                      }
                      placeholder={
                        "Flight tickets\n" +
                        "Personal expenses\n" +
                        "Travel insurance"
                      }
                    />

                  </div>

                </div>

              </div>


              {/* =========================================
                  MULTIPLE DAY ITINERARY
              ========================================= */}

              <div className="package-form-section">
                <div className="package-section-title-row">
                  <div>
                    <h3>4. Multiple Day Itinerary</h3>
                    <p style={{margin:"4px 0 0", color:"#64748b"}}>Generate Day 01 → Day N automatically from the selected package duration, then edit every day.</p>
                  </div>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                    <button type="button" className="admin-add-small" onClick={generateItineraryFromDuration}>⚡ Generate Day 01 → Day N</button>
                    <button type="button" className="admin-add-small" onClick={addItinerary}>+ Add Day</button>
                  </div>
                </div>

                <div style={{display:"flex", gap:10, alignItems:"center", margin:"10px 0 16px", flexWrap:"wrap"}}>
                  <span style={{fontWeight:700}}>Current duration:</span>
                  <span className="published-pill">{packageForm.duration || "Not selected"}</span>
                  <span style={{color:"#64748b"}}>Days generated: {(packageForm.itineraries || []).length}</span>
                </div>

                {(packageForm.itineraries || []).map((item, index) => (
                  <div className="nested-form-card" key={item.id || `day-${index}`}>
                    <div className="nested-form-header">
                      <h4>{item.day_label || `Day ${String(index + 1).padStart(2, "0")}`} {item.title ? `— ${item.title}` : ""}</h4>
                      <div style={{display:"flex", gap:8, alignItems:"center"}}>
                        <span style={{fontSize:12, color:"#64748b"}}>Edit fields below</span>
                        <button type="button" className="remove-small" onClick={() => removeItinerary(index)}>Delete Day</button>
                      </div>
                    </div>

                    <div className="package-form-grid">
                      <div className="package-form-field">
                        <label>Day Number</label>
                        <input type="number" min="1" value={item.day_number} onChange={e => updateItinerary(index,"day_number",e.target.value)} />
                      </div>
                      <div className="package-form-field">
                        <label>Day Label</label>
                        <input type="text" value={item.day_label || ""} onChange={e => updateItinerary(index,"day_label",e.target.value)} placeholder="Day 01" />
                      </div>
                      <div className="package-form-field">
                        <label>Location / City</label>
                        <input type="text" value={item.location || ""} onChange={e => updateItinerary(index,"location",e.target.value)} placeholder="Example: Ubud, Bali" />
                      </div>
                      <div className="package-form-field">
                        <label>Day Title</label>
                        <input type="text" value={item.title || ""} onChange={e => updateItinerary(index,"title",e.target.value)} placeholder="Example: Arrival in Bali & Hotel Check-in" />
                      </div>
                    </div>

                    <div className="package-form-field">
                      <label>Detailed Day Itinerary *</label>
                      <textarea rows="6" value={item.description || ""} onChange={e => updateItinerary(index,"description",e.target.value)} placeholder="Write the complete day-wise itinerary: arrival, transfers, sightseeing, meals, check-in/check-out, free time, etc." />
                    </div>

                    <div className="package-form-field">
                      <label>Activities / Sightseeing</label>
                      <textarea rows="3" value={item.activities || ""} onChange={e => updateItinerary(index,"activities",e.target.value)} placeholder="Example: Airport pickup, Ubud Palace, Monkey Forest, Tegallalang Rice Terrace" />
                    </div>

                    <div className="package-form-grid">
                      <div className="package-form-field">
                        <label>Night Stay City</label>
                        <input type="text" value={item.night_city || ""} onChange={e => updateItinerary(index,"night_city",e.target.value)} placeholder="Example: Ubud" />
                      </div>
                      <div className="package-form-field" style={{display:"flex", alignItems:"end"}}>
                        <label className="checkbox-field" style={{marginBottom:8}}>
                          <input type="checkbox" checked={Boolean(item.night_stay)} onChange={e => updateItinerary(index,"night_stay",e.target.checked)} />
                          Night Stay Included
                        </label>
                      </div>
                    </div>
                  </div>
                ))}

                {(!packageForm.itineraries || packageForm.itineraries.length === 0) && (
                  <div className="empty-admin"><p>No itinerary days yet. Select duration and click <strong>Generate Day 01 → Day N</strong>.</p></div>
                )}
              </div>

              {/* =========================================
                  HOTEL OPTIONS
              ========================================= */}

              <div className="package-form-section">

                <div className="package-section-title-row">

                  <h3>
                    5. Multiple Hotel Options
                  </h3>

                  <button
                    type="button"
                    className="admin-add-small"
                    onClick={addHotel}
                  >
                    + Add Hotel
                  </button>

                </div>


                {packageForm.hotels.map(
                  (hotel, index) => (

                    <div
                      className="nested-form-card"
                      key={index}
                    >

                      <div className="nested-form-header">

                        <h4>
                          Hotel Option {index + 1}
                        </h4>

                        {packageForm.hotels.length > 1 && (
                          <button
                            type="button"
                            className="remove-small"
                            onClick={() =>
                              removeHotel(index)
                            }
                          >
                            Remove
                          </button>
                        )}

                      </div>


                      <div className="package-form-grid">

                        <div className="package-form-field">

                          <label>
                            City
                          </label>

                          <input
                            type="text"
                            value={hotel.city}
                            onChange={e =>
                              updateHotel(
                                index,
                                "city",
                                e.target.value
                              )
                            }
                            placeholder="Example: Jaipur"
                          />

                        </div>


                        <div className="package-form-field">

                          <label>
                            Hotel Name
                          </label>

                          <input
                            type="text"
                            value={hotel.hotel_name}
                            onChange={e =>
                              updateHotel(
                                index,
                                "hotel_name",
                                e.target.value
                              )
                            }
                            placeholder="Example: Hotel ABC"
                          />

                        </div>


                        <div className="package-form-field">

                          <label>
                            Hotel Category
                          </label>

                          <select
                            value={hotel.category}
                            onChange={e =>
                              updateHotel(
                                index,
                                "category",
                                e.target.value
                              )
                            }
                          >

                            <option value="">
                              Select Category
                            </option>

                            <option value="3 Star">
                              3 Star
                            </option>

                            <option value="4 Star">
                              4 Star
                            </option>

                            <option value="5 Star">
                              5 Star
                            </option>

                            <option value="Luxury">
                              Luxury
                            </option>

                          </select>

                        </div>


                        <div className="package-form-field">

                          <label>
                            Room Type
                          </label>

                          <input
                            type="text"
                            value={hotel.room_type}
                            onChange={e =>
                              updateHotel(
                                index,
                                "room_type",
                                e.target.value
                              )
                            }
                            placeholder="Example: Deluxe Room"
                          />

                        </div>


                        <div className="package-form-field">

                          <label>
                            Hotel Meal Plan
                          </label>

                          <input
                            type="text"
                            value={hotel.meal_plan}
                            onChange={e =>
                              updateHotel(
                                index,
                                "meal_plan",
                                e.target.value
                              )
                            }
                            placeholder="Example: CP / MAP / AP"
                          />

                        </div>


                        <div className="package-form-field">

                          <label>
                            Hotel Price
                          </label>

                          <input
                            type="number"
                            value={hotel.price}
                            onChange={e =>
                              updateHotel(
                                index,
                                "price",
                                e.target.value
                              )
                            }
                            placeholder="Optional"
                          />

                        </div>

                      </div>


                      <div className="package-form-field">

                        <label>
                          Hotel Description
                        </label>

                        <textarea
                          rows="3"
                          value={hotel.description}
                          onChange={e =>
                            updateHotel(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Hotel details..."
                        />

                      </div>


                      <div className="package-form-field">

                        <label>
                          Hotel Image URL
                        </label>

                        <input
                          type="text"
                          value={hotel.image_url}
                          onChange={e =>
                            updateHotel(
                              index,
                              "image_url",
                              e.target.value
                            )
                          }
                          placeholder="https://..."
                        />

                      </div>

                    </div>

                  )
                )}

              </div>


              {/* =========================================
                  ACTIVITIES
              ========================================= */}

              <div className="package-form-section">

                <div className="package-section-title-row">

                  <h3>
                    6. Additional Activities
                  </h3>

                  <button
                    type="button"
                    className="admin-add-small"
                    onClick={addActivity}
                  >
                    + Add Activity
                  </button>

                </div>


                {packageForm.activities.map(
                  (activity, index) => (

                    <div
                      className="nested-form-card"
                      key={index}
                    >

                      <div className="nested-form-header">

                        <h4>
                          Activity {index + 1}
                        </h4>

                        {packageForm.activities.length > 1 && (
                          <button
                            type="button"
                            className="remove-small"
                            onClick={() =>
                              removeActivity(index)
                            }
                          >
                            Remove
                          </button>
                        )}

                      </div>


                      <div className="package-form-grid">

                        <div className="package-form-field">

                          <label>
                            Activity Name
                          </label>

                          <input
                            type="text"
                            value={activity.activity_name}
                            onChange={e =>
                              updateActivity(
                                index,
                                "activity_name",
                                e.target.value
                              )
                            }
                            placeholder="Example: River Rafting"
                          />

                        </div>


                        <div className="package-form-field">

                          <label>
                            Location
                          </label>

                          <input
                            type="text"
                            value={activity.location}
                            onChange={e =>
                              updateActivity(
                                index,
                                "location",
                                e.target.value
                              )
                            }
                            placeholder="Example: Rishikesh"
                          />

                        </div>


                        <div className="package-form-field">

                          <label>
                            Activity Price
                          </label>

                          <input
                            type="number"
                            value={activity.price}
                            onChange={e =>
                              updateActivity(
                                index,
                                "price",
                                e.target.value
                              )
                            }
                            placeholder="Optional"
                          />

                        </div>

                      </div>


                      <div className="package-form-field">

                        <label>
                          Activity Description
                        </label>

                        <textarea
                          rows="3"
                          value={activity.description}
                          onChange={e =>
                            updateActivity(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Describe this activity..."
                        />

                      </div>


                      <label className="checkbox-field">

                        <input
                          type="checkbox"
                          checked={activity.included}
                          onChange={e =>
                            updateActivity(
                              index,
                              "included",
                              e.target.checked
                            )
                          }
                        />

                        Included in package

                      </label>

                    </div>

                  )
                )}

              </div>


              {/* =========================================
                  PUBLISH
              ========================================= */}

              <div className="package-form-section">

                <h3>
                  7. Publish Package
                </h3>

                <label className="checkbox-field">

                  <input
                    type="checkbox"
                    checked={packageForm.published}
                    onChange={e =>
                      updatePackageField(
                        "published",
                        e.target.checked
                      )
                    }
                  />

                  Publish this package on the website

                </label>

              </div>


              {/* =========================================
                  FORM BUTTONS
              ========================================= */}

              <div className="package-form-footer">

                <button
                  type="button"
                  className="package-cancel-button"
                  onClick={() =>
                    setShowPackageForm(false)
                  }
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="package-save-button"
                  disabled={loadingPackages}
                >
                  {loadingPackages
                    ? "Saving..."
                    : editingPackageId
                    ? "Update Package"
                    : "Save Package"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {selectedEnquiryMessage && (
        <div className="admin-modal-backdrop" onClick={()=>setSelectedEnquiryMessage(null)}>
          <div className="admin-modal" style={{maxWidth:520}} onClick={e=>e.stopPropagation()}>
            <div className="admin-modal-head"><div><h3>Customer Message</h3><small>{selectedEnquiryMessage.name || "Customer"} · {enquirySerial(selectedEnquiryMessage, enquiries.indexOf(selectedEnquiryMessage))}</small></div><button onClick={()=>setSelectedEnquiryMessage(null)}>×</button></div>
            <div style={{padding:22}}><div style={{fontSize:12,color:"#64748b",marginBottom:8}}>Message / Requirement</div><div style={{padding:16,border:"1px solid #e2e8f0",borderRadius:12,background:"#f8fafc",whiteSpace:"pre-wrap",lineHeight:1.7,fontSize:14}}>{selectedEnquiryMessage.message || "No message provided."}</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:15,fontSize:12}}><div><strong>Customer</strong><div>{selectedEnquiryMessage.name || "-"}</div></div><div><strong>Phone</strong><div>{selectedEnquiryMessage.phone || "-"}</div></div><div><strong>Destination</strong><div>{selectedEnquiryMessage.destination || "-"}</div></div><div><strong>Travel Date</strong><div>{selectedEnquiryMessage.travel_date || "-"}</div></div></div></div>
          </div>
        </div>
      )}

      {supplierPaymentHistoryTarget && (
        <div className="admin-modal-backdrop" onClick={()=>setSupplierPaymentHistoryTarget(null)}>
          <div className="admin-modal" style={{maxWidth:700}} onClick={e=>e.stopPropagation()}>{(() => { const liveItem = supplierPayables.find(x => String(x.id) === String(supplierPaymentHistoryTarget.id)) || supplierPaymentHistoryTarget; const livePayments = Array.isArray(liveItem.payments) ? liveItem.payments : []; return (<>
            <div className="admin-modal-head"><div><h3>Supplier Payment Details</h3><small>{supplierPaymentHistoryTarget.supplierName || "Supplier"} · {supplierPaymentHistoryTarget.serviceName || supplierPaymentHistoryTarget.serviceType || "Service"}</small></div><button onClick={()=>setSupplierPaymentHistoryTarget(null)}>×</button></div>
            <div style={{padding:22}}>
              {supplierPaymentHistoryTarget.selectedPayment ? (()=>{const p=supplierPaymentHistoryTarget.selectedPayment;return <div className="admin-form-grid"><div><strong>Payment Amount</strong><p>₹{Number(p.amount||0).toLocaleString("en-IN")}</p></div><div><strong>Payment Date</strong><p>{p.paymentDate || "-"}</p></div><div><strong>Quotation</strong><p>{p.quotationNo || supplierPaymentHistoryTarget.quotationNo || "-"}</p></div><div><strong>Booking</strong><p>{p.bookingNo || supplierPaymentHistoryTarget.bookingNo || "-"}</p></div><div><strong>Supplier</strong><p>{p.supplierName || supplierPaymentHistoryTarget.supplierName || "-"}</p></div><div><strong>Service</strong><p>{p.serviceName || supplierPaymentHistoryTarget.serviceName || "-"}</p></div><div><strong>Guest</strong><p>{p.customerName || supplierPaymentHistoryTarget.customerName || "-"}</p></div><div><strong>Payment Mode</strong><p>{p.paymentMode || "-"}</p></div><div><strong>Reference</strong><p>{p.reference || "-"}</p></div><div style={{gridColumn:"1 / -1"}}><strong>Notes</strong><p>{p.notes || "-"}</p></div></div>})() : <div>{livePayments.length ? <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Sr.</th><th>Payment Amount</th><th>Payment Date</th><th>Quotation</th><th>Booking</th><th>Supplier</th><th>Service</th></tr></thead><tbody>{livePayments.map((p,i)=><tr key={p.id}><td>{i+1}</td><td><strong>₹{Number(p.amount||0).toLocaleString("en-IN")}</strong></td><td>{p.paymentDate||"-"}</td><td>{p.quotationNo||supplierPaymentHistoryTarget.quotationNo||"-"}</td><td>{p.bookingNo||supplierPaymentHistoryTarget.bookingNo||"-"}</td><td>{p.supplierName||supplierPaymentHistoryTarget.supplierName||"-"}</td><td>{p.serviceName||supplierPaymentHistoryTarget.serviceName||"-"}</td></tr>)}</tbody></table></div> : <p>No payment has been made to this supplier yet.</p>}</div>}
            </div>
          </>); })()} 
          </div>
        </div>
      )}

      </section>
    </div>
  );
}

const BOOKING_FORM_STYLES = `
.booking-form-section{margin:0 0 18px;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#fff}.booking-form-section h4{margin:0 0 14px;color:#123b5d;font-size:15px}.booking-section-title{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:14px}.booking-section-title h4{margin:0}.booking-section-title small{color:#64748b}.booking-service-card{border:1px solid #dbe5ef;border-radius:12px;padding:14px;margin:12px 0;background:#f8fbff}.booking-service-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.booking-status{padding:5px 9px;border-radius:999px;font-size:11px;font-weight:800;background:#fef3c7;color:#92400e}.booking-status.confirmed{background:#dcfce7;color:#166534}.booking-status.cancelled{background:#fee2e2;color:#991b1b}.booking-status.on-hold{background:#e0e7ff;color:#3730a3}.booking-empty{padding:14px;border:1px dashed #cbd5e1;border-radius:10px;color:#64748b;background:#f8fafc}.booking-amount-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.booking-amount-grid>div{padding:12px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc}.booking-amount-grid>div span{display:block;font-size:11px;color:#64748b}.booking-amount-grid>div strong{display:block;margin-top:4px;color:#123b5d}.booking-amount-grid label{display:block}.booking-amount-total{background:#eef8ff!important;border-color:#b9dff4!important}@media(max-width:800px){.booking-amount-grid{grid-template-columns:1fr}.booking-section-title{align-items:flex-start;flex-direction:column}}
`;

const ADMIN_MODAL_STYLES = `
.admin-modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.58);display:flex;align-items:center;justify-content:center;padding:24px;z-index:9999}
.admin-modal{width:min(900px,100%);max-height:90vh;overflow:auto;background:#fff;border-radius:18px;box-shadow:0 24px 70px rgba(15,23,42,.28);padding:24px}
.admin-modal-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}.admin-modal-head h3{margin:0}.admin-modal-head button{border:0;background:#f1f5f9;border-radius:10px;width:34px;height:34px;font-size:24px;cursor:pointer}
.quotation-room-summary{grid-column:1/-1;border:1px solid #dbe4ee;border-radius:10px;padding:10px;background:#f8fafc}.quotation-room-summary>span{display:block;font-size:12px;font-weight:800;color:#334155;margin-bottom:8px}.quotation-room-summary-row{display:flex;align-items:center;gap:14px;padding:9px 0;border-top:1px solid #e2e8f0;font-size:12px}.quotation-room-summary-row>strong{min-width:110px}.quotation-room-summary-row>b:last-child{margin-left:auto}.quotation-room-summary-type{display:flex;align-items:center;gap:7px}.quotation-room-summary-type>span{font-weight:800;color:#475569;min-width:44px}.quotation-room-summary-type button,.quotation-room-control button{width:34px;height:34px;border:1px solid #cbd5e1;border-radius:8px;background:#fff;font-size:19px;line-height:1;cursor:pointer;display:inline-grid;place-items:center}.quotation-room-summary-type button:hover,.quotation-room-control button:hover{background:#eef6fc;border-color:#0871c9}.quotation-room-summary-type button:disabled,.quotation-room-control button:disabled{opacity:.45;cursor:not-allowed}.quotation-room-summary-type b{min-width:22px;text-align:center}.quotation-room-control{display:flex;flex-direction:column;justify-content:center;gap:6px;font-size:12px;font-weight:800;color:#334155}.quotation-room-control>div{display:flex;align-items:center;gap:10px}.quotation-room-control strong{min-width:20px;text-align:center}.quotation-wide-field{grid-column:span 2}.quotation-list-block{margin-top:14px}.quotation-list-block>strong{display:block;margin-bottom:6px}.quotation-list-block ul{margin:0;padding-left:20px}.quotation-list-block li{margin:4px 0}@media(max-width:760px){.quotation-wide-field{grid-column:1}.quotation-room-summary-row{flex-wrap:wrap}}.quotation-editor{max-width:1000px!important;max-height:90vh;overflow:auto}.quotation-form-section{margin-top:18px;padding:16px;border:1px solid #e2e8f0;border-radius:14px;background:#fff}.quotation-form-section h4{margin:0 0 14px;font-size:15px;color:#0f172a}.quotation-section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.quotation-destination-card{padding:15px;border:1px solid #dbe4ee;border-radius:12px;background:#f8fafc;margin-top:12px}.quotation-destination-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.quotation-subsection{margin-top:14px;padding-top:14px;border-top:1px dashed #cbd5e1}.quotation-subsection h5{margin:0 0 10px;font-size:13px;color:#475569}.quotation-view-destination{margin:14px 0;padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px}.quotation-view-destination p{margin:6px 0}.quotation-amount-list{display:grid;grid-template-columns:repeat(2,1fr);gap:4px 20px;margin-top:12px}.quotation-amount-list p{margin:2px 0}@media(max-width:700px){.quotation-section-head{align-items:flex-start;flex-direction:column}.quotation-amount-list{grid-template-columns:1fr}}
.admin-detail-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.admin-detail-grid>div{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px}.admin-detail-grid small,.admin-detail-message small{display:block;color:#64748b;font-size:11px;text-transform:uppercase;font-weight:800;margin-bottom:5px}.admin-detail-grid strong{display:block;color:#0f172a}.admin-detail-message{margin-top:14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px}.admin-detail-message p{margin:0;white-space:pre-wrap}.admin-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.quotation-editor .admin-form-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.quotation-editor .admin-form-grid label{font-size:12px;font-weight:800;color:#334155}.admin-form-grid input,.admin-form-grid select,.admin-form-grid textarea{display:block;width:100%;margin-top:6px;padding:10px 12px;border:1px solid #cbd5e1;border-radius:10px;font:inherit;box-sizing:border-box}.admin-form-grid textarea{min-height:80px;resize:vertical}.admin-modal-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:20px;flex-wrap:wrap}.quotation-paper{border:1px solid #e2e8f0;border-radius:14px;padding:24px;background:#fff}.quotation-brand{display:flex;justify-content:space-between;font-size:20px}.quotation-brand span{font-size:14px;color:#64748b}.quotation-no{display:flex;justify-content:space-between;margin-top:12px;color:#334155}.quotation-no small{color:#64748b}.quotation-total{display:flex;justify-content:space-between;margin-top:22px;padding:16px;background:#f8fafc;border-radius:12px;font-size:18px}
@media(max-width:760px){.admin-detail-grid,.admin-form-grid,.quotation-editor .admin-form-grid{grid-template-columns:1fr}.admin-modal-backdrop{padding:10px}.admin-modal{padding:16px}}
`;

const STAFF_PERMISSION_STYLES = `.staff-permissions-page{padding:26px;max-width:1500px;margin:auto}.staff-editor-card,.staff-report-card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:20px;margin-bottom:18px}.staff-permission-head{display:flex;justify-content:space-between;gap:15px;align-items:center;margin:20px 0 12px}.staff-permission-head h3{margin:0}.staff-permission-head p{margin:4px 0 0;color:#64748b;font-size:12px}.staff-permission-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.permission-toggle{border:1px solid #dbe3ec;border-radius:12px;background:#fff;padding:12px;text-align:left;cursor:pointer;display:grid;grid-template-columns:auto 1fr;gap:5px 10px;align-items:center}.permission-toggle span{grid-row:span 2;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900}.permission-toggle strong{font-size:12px}.permission-toggle em{font-style:normal;font-size:10px;color:#64748b}.permission-toggle.allowed{border-color:#bbf7d0;background:#f0fdf4}.permission-toggle.allowed span{background:#16a34a;color:#fff}.permission-toggle.denied{border-color:#fecaca;background:#fff7f7}.permission-toggle.denied span{background:#dc2626;color:#fff}.staff-report-card .rate-section-head{display:flex;justify-content:space-between;align-items:center;gap:15px;margin-bottom:14px}.staff-report-card .rate-section-head select{padding:9px 12px;border:1px solid #dbe3ec;border-radius:9px;background:#fff}@media(max-width:900px){.staff-permission-grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.staff-permission-grid{grid-template-columns:1fr}.staff-permission-head{align-items:flex-start;flex-direction:column}.staff-permissions-page{padding:15px}}`;

const ADMIN_SECTION_MINMAX_STYLES = `.sneh-section-collapse-btn{margin-left:auto;flex:0 0 auto;width:30px;height:30px;border:1px solid #dbe3eb;border-radius:8px;background:#f8fafc;color:#0b74b8;font-size:16px;font-weight:900;line-height:1;cursor:pointer;display:grid;place-items:center;box-shadow:0 2px 7px rgba(15,23,42,.05)}.sneh-section-collapse-btn:hover{background:#eef7fb;border-color:#b9d9ea}.sneh-collapsible-section{position:relative}.sneh-collapse-header{padding-right:42px!important}.sneh-collapsible-section.sneh-section-collapsed>.sneh-collapse-content{display:none!important}.sneh-collapsible-section.sneh-section-collapsed{min-height:0}.sneh-collapsible-section.sneh-section-collapsed>.sneh-section-collapse-btn{background:#eef7fb}@media(max-width:700px){.sneh-section-collapse-btn{width:28px;height:28px;font-size:15px}}`;

const ADMIN_SIDEBAR_TOGGLE_STYLES = `.admin-sidebar{transition:width .22s ease,flex-basis .22s ease}.admin-brand{position:relative}.admin-brand-text{min-width:0;overflow:hidden;transition:opacity .18s ease}.admin-sidebar-toggle{margin-left:auto;width:30px;height:30px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:rgba(255,255,255,.06);color:#dbe7f3;font-size:20px;line-height:1;cursor:pointer;display:grid;place-items:center;flex:0 0 30px}.admin-sidebar-toggle:hover{background:rgba(255,255,255,.13);color:#fff}.admin-shell.admin-sidebar-collapsed .admin-sidebar{width:78px;flex-basis:78px}.admin-shell.admin-sidebar-collapsed .admin-brand{justify-content:center;padding-left:10px;padding-right:10px}.admin-shell.admin-sidebar-collapsed .admin-brand-text,.admin-shell.admin-sidebar-collapsed .admin-sidebar-nav button span,.admin-shell.admin-sidebar-collapsed .admin-sidebar-nav button b,.admin-shell.admin-sidebar-collapsed .admin-nav-label,.admin-shell.admin-sidebar-collapsed .admin-sidebar-bottom button{display:none}.admin-shell.admin-sidebar-collapsed .admin-sidebar-nav button{justify-content:center;padding-left:8px;padding-right:8px}.admin-shell.admin-sidebar-collapsed .admin-sidebar-toggle{margin-left:0;position:absolute;right:6px;top:26px;width:24px;height:24px;font-size:17px}.admin-shell.admin-sidebar-collapsed .admin-brand-mark{margin-right:20px}@media(max-width:1050px){.admin-sidebar-toggle{display:grid}}@media(max-width:750px){.admin-sidebar-toggle{display:none}.admin-shell.admin-sidebar-collapsed .admin-sidebar{width:100%;flex-basis:auto}.admin-shell.admin-sidebar-collapsed .admin-brand-text,.admin-shell.admin-sidebar-collapsed .admin-sidebar-nav button span{display:block}.admin-shell.admin-sidebar-collapsed .admin-sidebar-nav button{justify-content:center}.admin-shell.admin-sidebar-collapsed .admin-nav-label,.admin-shell.admin-sidebar-collapsed .admin-sidebar-bottom{display:none}}`;

const ADMIN_RESTRUCTURE_STYLES = `.admin-shell{display:flex;min-height:calc(100vh - 70px);background:#f5f7fb;color:#0f172a}.admin-sidebar{width:255px;flex:0 0 255px;background:#0b1726;color:#dbe7f3;display:flex;flex-direction:column;position:sticky;top:0;height:calc(100vh - 70px);overflow:auto}.admin-brand{display:flex;align-items:center;gap:12px;padding:22px 18px;border-bottom:1px solid rgba(255,255,255,.08)}.admin-brand-mark{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:#0871c9;color:#fff;font-weight:900;font-size:20px}.admin-brand strong{display:block;color:#fff;font-size:15px;letter-spacing:.04em}.admin-brand span{display:block;color:#7f95aa;font-size:9px;font-weight:800;letter-spacing:.14em;margin-top:3px}.admin-sidebar-nav{padding:15px 10px;display:flex;flex-direction:column;gap:3px}.admin-sidebar-nav button{width:100%;border:0;background:transparent;color:#aebfd0;padding:10px 12px;border-radius:9px;display:flex;align-items:center;gap:11px;text-align:left;font:inherit;cursor:pointer}.admin-sidebar-nav button:hover{background:rgba(255,255,255,.06);color:#fff}.admin-sidebar-nav button.active{background:#0b6fbe;color:#fff}.admin-sidebar-nav button span{flex:1;font-size:13px;font-weight:700}.admin-sidebar-nav button b{font-size:10px;background:rgba(255,255,255,.14);padding:3px 7px;border-radius:20px}.admin-nav-label{padding:15px 12px 6px;color:#60778e;font-size:9px;font-weight:900;letter-spacing:.14em}.admin-sidebar-bottom{margin-top:auto;padding:12px;border-top:1px solid rgba(255,255,255,.08)}.admin-view-site,.admin-sidebar-logout{width:100%;padding:10px;border:0;background:transparent;color:#9eb2c6;text-align:left;cursor:pointer;border-radius:8px;font-weight:700}.admin-sidebar-logout{color:#fca5a5}.admin-main{flex:1;min-width:0}.admin-topbar{min-height:82px;background:#fff;border-bottom:1px solid #e5eaf0;display:flex;align-items:center;justify-content:space-between;padding:16px 28px;gap:20px}.admin-topbar-eyebrow{font-size:9px;font-weight:900;letter-spacing:.13em;color:#0871c9}.admin-topbar h1{font-size:24px;margin:4px 0 0}.admin-topbar-actions{display:flex;align-items:center;gap:12px}.admin-topbar-actions>button{border:1px solid #dbe3ec;background:#fff;padding:9px 14px;border-radius:8px;font-weight:800;cursor:pointer}.admin-user-chip{display:flex;align-items:center;gap:9px}.admin-user-chip>span{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#e8f3fb;color:#0871c9;font-weight:900;font-size:11px}.admin-user-chip strong,.admin-user-chip small{display:block}.admin-user-chip strong{font-size:12px}.admin-user-chip small{color:#718096;font-size:10px;margin-top:2px}.admin-dashboard-view{padding:26px;max-width:1500px;margin:auto}.admin-welcome-card{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:24px;border:1px solid #e3e8ef;background:linear-gradient(135deg,#fff,#f7fbff);border-radius:18px;margin-bottom:20px}.admin-welcome-card span,.admin-card-head span{font-size:9px;letter-spacing:.13em;font-weight:900;color:#0871c9}.admin-welcome-card h2{margin:6px 0 4px;font-size:22px}.admin-welcome-card p{margin:0;color:#64748b;font-size:13px}.admin-date-card{min-width:155px;padding:14px 16px;background:#fff;border:1px solid #e3e8ef;border-radius:12px;text-align:right}.admin-date-card strong,.admin-date-card small{display:block}.admin-date-card strong{font-size:13px}.admin-date-card small{color:#64748b;margin-top:3px}.admin-stat-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-bottom:20px}.admin-stat-grid button{border:1px solid #e3e8ef;background:#fff;border-radius:15px;padding:18px;display:flex;gap:13px;text-align:left;cursor:pointer}.admin-stat-grid button>span{width:40px;height:40px;border-radius:11px;display:grid;place-items:center;background:#edf6fc;font-size:20px}.admin-stat-grid small,.admin-stat-grid strong,.admin-stat-grid em{display:block}.admin-stat-grid small{color:#64748b;font-size:11px;font-weight:700}.admin-stat-grid strong{font-size:25px;margin:4px 0}.admin-stat-grid em{font-style:normal;color:#0871c9;font-size:10px;font-weight:800}.admin-dashboard-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(320px,1fr);gap:20px;margin-bottom:20px}.admin-card{background:#fff;border:1px solid #e3e8ef;border-radius:16px;padding:20px}.admin-card-head{display:flex;justify-content:space-between;align-items:flex-start;gap:15px;margin-bottom:15px}.admin-card-head h3{margin:5px 0 0;font-size:17px}.admin-card-head button{border:0;background:transparent;color:#0871c9;font-weight:800;font-size:11px;cursor:pointer}.admin-recent-list button{width:100%;border:0;border-top:1px solid #edf1f5;background:#fff;padding:11px 0;display:flex;align-items:center;gap:10px;text-align:left;cursor:pointer}.admin-recent-list button>span{width:32px;height:32px;border-radius:50%;background:#eaf4fb;color:#0871c9;display:grid;place-items:center;font-weight:900}.admin-recent-list button>div:nth-child(2){flex:1}.admin-recent-list strong,.admin-recent-list small{display:block}.admin-recent-list strong{font-size:12px}.admin-recent-list small{font-size:10px;color:#64748b;margin-top:3px}.recent-meta{text-align:right}.admin-quick-action{width:100%;border:1px solid #e6ebf1;background:#fbfcfe;border-radius:10px;padding:12px;display:flex;align-items:center;gap:10px;text-align:left;cursor:pointer;margin-top:9px}.admin-quick-action div{flex:1}.admin-quick-action strong,.admin-quick-action small{display:block}.admin-quick-action strong{font-size:12px}.admin-quick-action small{font-size:10px;color:#64748b;margin-top:2px}.admin-progress-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.admin-progress-row div{padding:16px;background:#f8fafc;border-radius:11px}.admin-progress-row strong,.admin-progress-row span{display:block}.admin-progress-row strong{font-size:24px}.admin-progress-row span{font-size:10px;color:#64748b;margin-top:3px}@media(max-width:1050px){.admin-sidebar{width:78px;flex-basis:78px}.admin-brand>div:last-child,.admin-sidebar-nav button span,.admin-sidebar-nav button b,.admin-nav-label,.admin-sidebar-bottom button{display:none}.admin-sidebar-nav button{justify-content:center}.admin-stat-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:750px){.admin-shell{display:block}.admin-sidebar{position:relative;width:100%;height:auto;display:block}.admin-brand{padding:12px 16px}.admin-sidebar-nav{display:grid;grid-template-columns:repeat(4,1fr);padding:8px}.admin-sidebar-nav button{justify-content:center}.admin-sidebar-nav button span{display:block;text-align:center;font-size:10px}.admin-nav-label{display:none}.admin-sidebar-bottom{display:none}.admin-topbar{padding:14px 16px}.admin-topbar h1{font-size:19px}.admin-topbar-actions>button{display:none}.admin-dashboard-view{padding:15px}.admin-welcome-card{align-items:flex-start;flex-direction:column}.admin-dashboard-grid{grid-template-columns:1fr}.admin-stat-grid{grid-template-columns:1fr 1fr}.admin-progress-row{grid-template-columns:1fr}}@media(max-width:480px){.admin-stat-grid{grid-template-columns:1fr}.admin-sidebar-nav{grid-template-columns:repeat(3,1fr)}}`;

const HOTEL_BUILDER_STYLES = `.hotel-builder-section{overflow:visible}
.hotel-builder-toolbar{display:grid;grid-template-columns:minmax(280px,1fr) minmax(240px,1fr);gap:18px;align-items:end;margin:0 0 18px;padding:18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px}
.hotel-builder-package-info{display:flex;flex-direction:column;justify-content:center;min-height:74px;padding:0 18px;border-radius:14px;background:#fff;border:1px solid #e2e8f0}
.hotel-builder-package-info strong{font-size:16px;color:#0f172a}.hotel-builder-package-info span{margin-top:5px;font-size:12px;color:#64748b}
.hotel-builder-table-wrap{width:100%;overflow-x:auto;border:1px solid #e2e8f0;border-radius:16px;background:#fff;box-shadow:0 8px 24px rgba(15,23,42,.06)}
.hotel-builder-table{width:max-content;min-width:1500px;border-collapse:separate;border-spacing:0;font-size:12px}
.hotel-builder-table th{position:sticky;top:0;background:#f1f5f9;color:#334155;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.04em;padding:12px 10px;border-bottom:1px solid #cbd5e1;white-space:nowrap;z-index:2}
.hotel-builder-table td{padding:9px 8px;border-bottom:1px solid #eef2f7;vertical-align:top;background:#fff}
.hotel-builder-table tbody tr:hover td{background:#fbfdff}
.hotel-builder-table input,.hotel-builder-table select,.hotel-builder-table textarea{width:100%;min-width:120px;box-sizing:border-box;border:1px solid #dbe3ec;border-radius:8px;background:#fff;padding:9px 10px;font:inherit;color:#0f172a;outline:none}
.hotel-builder-table input:focus,.hotel-builder-table select:focus,.hotel-builder-table textarea:focus{border-color:#0b7fab;box-shadow:0 0 0 3px rgba(11,127,171,.10)}
.hotel-builder-table textarea{min-width:210px;resize:vertical}.hotel-builder-table th:first-child,.hotel-builder-table td:first-child{position:sticky;left:0;z-index:3}.hotel-builder-table th:first-child{z-index:4;background:#f1f5f9}.hotel-builder-table td:first-child{background:#fff;box-shadow:8px 0 14px -14px rgba(15,23,42,.35)}
.hotel-builder-table th:last-child,.hotel-builder-table td:last-child{position:sticky;right:0;z-index:3}.hotel-builder-table th:last-child{z-index:4;background:#f1f5f9}.hotel-builder-table td:last-child{background:#fff;box-shadow:-8px 0 14px -14px rgba(15,23,42,.35)}
.hotel-builder-empty{text-align:center!important;padding:38px!important;color:#64748b}
.admin-primary{background:linear-gradient(135deg,#0871c9,#075985)!important;color:#fff!important;border-color:transparent!important}
@media(max-width:850px){.hotel-builder-toolbar{grid-template-columns:1fr}.hotel-builder-table{min-width:1350px}}`;


const PACKAGE_MASTER_STYLES = `
.package-master-page{padding:26px}.package-master-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.package-master-card{overflow:hidden;border:1px solid #e5e7eb;border-radius:18px;background:#fff;box-shadow:0 12px 35px rgba(15,23,42,.05)}.package-master-image{height:180px;position:relative;background:#e2e8f0}.package-master-image img{width:100%;height:100%;object-fit:cover}.published-pill,.draft-pill{position:absolute;top:12px;right:12px;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:900}.published-pill{background:#dcfce7;color:#166534}.draft-pill{background:#fff7ed;color:#9a3412}.package-master-body{padding:17px}.package-master-body>span{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#0b74b8;font-weight:900}.package-master-body h3{margin:5px 0;font-size:20px}.package-master-body p{margin:0 0 12px;color:#64748b;font-size:13px}.package-master-body>strong{font-size:18px}.package-master-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:15px}.package-master-actions button{font-size:12px}.package-master-actions .admin-delete{border:0;border-radius:9px;padding:9px 12px;background:#fff1f2;color:#be123c;font-weight:800;cursor:pointer}
@media(max-width:1050px){.package-master-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:700px){.package-master-grid{grid-template-columns:1fr}.package-master-page{padding:18px}}
`;

const PREMIUM_REDESIGN_STYLES = `
:root{--st-ink:#0f172a;--st-muted:#64748b;--st-brand:#0b74b8;--st-brand2:#0f766e;--st-line:#e5e7eb;--st-bg:#f5f8fb;--st-card:#fff;--st-shadow:0 18px 50px rgba(15,23,42,.08)}
body{background:var(--st-bg);color:var(--st-ink)}
.st-header-wrap{padding:8px 18px 0!important;background:rgba(245,248,251,.9)!important}
.st-header{max-width:1360px!important;border-radius:18px!important;box-shadow:0 12px 32px rgba(15,23,42,.08)!important}
.st-header-inner{min-height:72px!important}
.st-nav{gap:5px!important}.st-nav button,.st-nav-dropdown>button{font-size:13px!important;padding:10px 11px!important}.st-enquire{border-radius:11px!important;background:linear-gradient(135deg,#0b74b8,#0f766e)!important}
.hero{min-height:600px!important;border-radius:0 0 30px 30px;overflow:hidden}.hero-overlay{min-height:600px!important;background:linear-gradient(90deg,rgba(2,18,35,.74),rgba(2,18,35,.28),rgba(2,18,35,.08))!important}.hero-content{max-width:1280px!important;padding:110px 34px!important}.hero h1{font-size:clamp(42px,5.2vw,72px)!important;line-height:1.02!important;letter-spacing:-2px!important;max-width:800px}.hero p{max-width:620px!important;font-size:18px!important}.hero-buttons button{border-radius:12px!important;padding:14px 20px!important}
.section{max-width:1320px!important;padding:78px 28px!important}.section-heading{text-align:left!important;max-width:760px!important;margin-bottom:30px!important}.section-heading span,.eyebrow{letter-spacing:.13em!important;color:var(--st-brand)!important;font-weight:900!important;font-size:11px!important}.section-heading h2{font-size:clamp(30px,4vw,46px)!important;letter-spacing:-1px!important}.destination-card,.package-card{border:1px solid var(--st-line)!important;border-radius:20px!important;box-shadow:var(--st-shadow)!important;overflow:hidden!important;background:#fff!important}.destination-card img,.package-card img{transition:transform .35s ease}.destination-card:hover img,.package-card:hover img{transform:scale(1.045)}
.admin-shell{background:#f4f7fb!important}.admin-sidebar{width:250px!important;background:#0b1220!important;border-right:0!important;box-shadow:8px 0 30px rgba(15,23,42,.08)}.admin-brand{padding:25px 22px!important}.admin-brand-mark{background:linear-gradient(135deg,#0b74b8,#0f766e)!important;box-shadow:none!important}.admin-sidebar-nav button{margin:3px 12px!important;border-radius:11px!important;color:#94a3b8!important}.admin-sidebar-nav button:hover,.admin-sidebar-nav button.active{background:rgba(255,255,255,.09)!important;color:#fff!important}.admin-nav-label{color:#64748b!important;padding-left:22px!important}.admin-main{background:#f4f7fb!important}.admin-topbar{height:86px!important;padding:18px 30px!important;background:rgba(255,255,255,.88)!important;border-bottom:1px solid #e5e7eb!important;backdrop-filter:blur(12px)}.admin-topbar h1{font-size:26px!important;letter-spacing:-.5px!important}.admin-card,.admin-welcome-card,.admin-section,.premium-inventory-page{border:1px solid #e5e7eb!important;border-radius:18px!important;background:#fff!important;box-shadow:0 12px 35px rgba(15,23,42,.05)!important}.admin-stat-grid{gap:16px!important}.admin-stat-grid button{border:1px solid #e5e7eb!important;border-radius:17px!important;background:#fff!important;box-shadow:none!important}.admin-stat-grid button:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(15,23,42,.08)!important}.admin-table-wrapper{border:1px solid #e5e7eb!important;border-radius:14px!important;overflow:auto!important}.admin-table{min-width:1000px!important}.admin-table th{background:#f8fafc!important;color:#475569!important;font-size:11px!important;text-transform:uppercase!important;letter-spacing:.06em}.admin-table td{padding:13px 14px!important}.admin-button,.admin-add-button,.premium-btn{border-radius:10px!important;font-weight:800!important}.premium-btn{border:1px solid #dbe3eb;padding:10px 14px;background:#fff;cursor:pointer}.premium-btn.primary{border:0;color:#fff;background:linear-gradient(135deg,#0b74b8,#0f766e);box-shadow:0 8px 18px rgba(11,116,184,.2)}.premium-btn.ghost:hover{background:#f8fafc}.premium-inventory-page{padding:26px!important}.inventory-toolbar{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:22px}.inventory-toolbar h2{margin:4px 0 6px;font-size:30px}.toolbar-actions{display:flex;gap:9px}.hotel-master-layout{display:grid;grid-template-columns:minmax(360px,430px) minmax(0,1fr);gap:18px}.hotel-list-card,.hotel-editor-card{border:1px solid #e5e7eb;border-radius:16px;background:#fff;padding:16px}.list-head{display:flex;justify-content:space-between;padding:5px 4px 12px;border-bottom:1px solid #edf0f3}.list-head span{background:#eff6ff;color:#0b74b8;padding:3px 8px;border-radius:99px;font-size:12px}.hotel-list-columns{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(70px,.8fr) 58px;gap:8px;padding:9px 8px 5px;color:#94a3b8;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:.05em}.hotel-list-item{display:grid;grid-template-columns:34px minmax(0,1.35fr) minmax(65px,.8fr) 58px;align-items:center;gap:8px;width:100%;box-sizing:border-box;text-align:left;border:0;background:transparent;padding:12px 8px;border-radius:12px;cursor:pointer}.hotel-list-details{min-width:0}.hotel-list-city{font-size:11px;color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hotel-edit-btn{justify-self:end}.hotel-list-item:hover,.hotel-list-item.selected{background:#eff7fb} .hotel-list-item:hover,.hotel-list-item.selected{background:#eff7fb}.hotel-list-item small{display:block;color:#64748b;margin-top:3px}.hotel-list-item em{display:block;color:#0b74b8;font-size:10px;font-style:normal;font-weight:800;margin-top:2px}.hotel-avatar{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:#f1f5f9}.editor-title,.rate-section-head{display:flex;justify-content:space-between;align-items:center;gap:15px}.editor-title{padding-bottom:14px;border-bottom:1px solid #edf0f3}.editor-title h3,.rate-section-head h3{margin:3px 0 0}.premium-form-grid{display:grid;grid-template-columns:repeat(2,minmax(260px,1fr));gap:16px 18px;margin:20px 0}.premium-form-grid label{font-size:12px;font-weight:800;color:#475569}.premium-form-grid input,.premium-form-grid select,.rate-grid-row input,.rate-grid-row select{width:100%;margin-top:7px;border:1px solid #dce3ea;border-radius:10px;padding:13px 13px;min-height:46px;background:#fff;box-sizing:border-box;font-size:14px}.premium-form-grid label{display:flex;flex-direction:column;min-width:0}.premium-form-grid label>input,.premium-form-grid label>select{flex:0 0 auto}.rate-section-head{margin:22px 0 10px}.rate-matrix-scroll{width:100%;overflow-x:auto;overflow-y:hidden;border:1px solid #edf0f3;border-radius:10px;background:#fff}.rate-grid-header,.rate-grid-row{display:grid;grid-template-columns:1.15fr .85fr .65fr 1fr .95fr .95fr .95fr 1fr 1fr 125px;gap:8px;align-items:center;min-width:1040px}.rate-money{font-weight:800;color:#0f172a;white-space:nowrap}.rate-actions{display:flex;gap:5px;align-items:center;justify-content:flex-start}.premium-btn.mini{padding:7px 9px;font-size:11px;white-space:nowrap}.rate-row-editing{background:#f8fbfd;border-radius:10px;padding:8px}.rate-grid-header{font-size:10px;text-transform:uppercase;letter-spacing:.04em;color:#64748b;font-weight:900;padding:9px;background:#f8fafc;border:1px solid #edf0f3;border-radius:9px 9px 0 0}.rate-grid-row{padding:8px 0;border-bottom:1px solid #edf0f3}.rate-grid-row input,.rate-grid-row select{margin:0;padding:8px;font-size:12px}.icon-danger{width:30px;height:30px;border:0;border-radius:8px;background:#fff1f2;color:#be123c;cursor:pointer;font-size:18px}.danger-link{border:0;background:transparent;color:#be123c;font-weight:800;cursor:pointer}.empty-box{padding:28px;text-align:center;color:#64748b;background:#f8fafc;border:1px dashed #d7dee7;border-radius:12px;margin-top:12px}.muted{color:#94a3b8}
.admin-public-modal{border-radius:22px!important}.admin-public-modal-head h2{letter-spacing:-.7px}.admin-package-view{background:linear-gradient(135deg,#0b74b8,#0f766e)!important;border-radius:10px!important}
@media(max-width:1050px){.hotel-master-layout{grid-template-columns:1fr}.hotel-list-card{max-height:300px;overflow:auto}.premium-form-grid{grid-template-columns:repeat(2,minmax(220px,1fr))}.rate-grid-header{display:grid}.rate-grid-row{padding:8px 0;border-bottom:1px solid #edf0f3;margin:0}.rate-grid-row .icon-danger{grid-column:auto;justify-self:start}}
@media(max-width:700px){.premium-form-grid{grid-template-columns:1fr}.section{padding:55px 18px!important}.hero-content{padding:85px 22px!important}.hero h1{font-size:42px!important}.admin-sidebar{width:76px!important}.admin-sidebar .admin-brand-copy,.admin-sidebar-nav button span,.admin-nav-label,.admin-sidebar-bottom button:not(.admin-view-site){display:none!important}.admin-sidebar-nav button{justify-content:center!important;padding:12px!important}.admin-main{margin-left:76px!important}.admin-topbar{padding:15px 18px!important}.premium-form-grid{grid-template-columns:1fr}.inventory-toolbar{flex-direction:column}.toolbar-actions{width:100%}.toolbar-actions button{flex:1}.rate-grid-row{grid-template-columns:1.15fr .85fr .65fr 1fr 1fr .85fr .95fr .95fr .95fr 1fr 1fr 125px}.rate-grid-row .icon-danger{grid-column:auto;justify-self:start}}
`;


const PUBLIC_CUSTOMIZATION_THEME_STYLES = `
/* Premium travel customization theme — public customization only */
.enquiry-page{position:relative;padding:42px 18px 70px;background:linear-gradient(180deg,#f6fbff 0%,#eef6f7 48%,#ffffff 100%);overflow:hidden}
.enquiry-page:before{content:"";position:absolute;inset:0 0 auto;height:280px;background:radial-gradient(circle at 15% 20%,rgba(14,165,164,.20),transparent 34%),radial-gradient(circle at 88% 8%,rgba(14,116,144,.20),transparent 36%),linear-gradient(135deg,#073b4c,#0f766e);z-index:0}
.enquiry-page>*{position:relative;z-index:1}
.enquiry-page>.section-heading{text-align:center;max-width:820px;margin:0 auto 28px;color:#fff}
.enquiry-page>.section-heading span{display:inline-block;padding:7px 13px;border:1px solid rgba(255,255,255,.35);border-radius:999px;background:rgba(255,255,255,.10);font-size:11px;font-weight:800;letter-spacing:2px}
.enquiry-page>.section-heading h2{font-size:clamp(30px,4vw,46px);margin:12px 0 8px;letter-spacing:-1px}
.enquiry-page>.section-heading p{margin:0;color:#d9f5f2;font-size:15px}
.enquiry-page .quotation-card{border:1px solid rgba(15,118,110,.12)!important;border-radius:22px!important;box-shadow:0 18px 55px rgba(7,59,76,.10)!important;background:rgba(255,255,255,.96)!important;backdrop-filter:blur(8px)}
.enquiry-page .form-section-title{padding:13px 0 15px;border-bottom:1px solid #e5eef0}
.enquiry-page .quotation-step{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#0f766e,#0891b2);color:#fff;box-shadow:0 7px 18px rgba(15,118,110,.22)}
.enquiry-page .quotation-section-title h3{color:#123b45;font-size:20px}
.enquiry-page .quotation-section-title p{color:#6b7f85}
.enquiry-page .form-group label{color:#23434b;font-weight:750}
.enquiry-page .form-group input,.enquiry-page .form-group select,.enquiry-page .form-group textarea{border:1px solid #d8e5e8!important;border-radius:12px!important;background:#fbfefe!important;min-height:44px;transition:.2s ease;box-shadow:0 2px 8px rgba(7,59,76,.025)}
.enquiry-page .form-group input:focus,.enquiry-page .form-group select:focus,.enquiry-page .form-group textarea:focus{border-color:#0f9f98!important;box-shadow:0 0 0 4px rgba(15,159,152,.10)!important;outline:none}
.enquiry-page .quotation-summary-card{border-radius:18px!important;box-shadow:0 10px 28px rgba(7,59,76,.07)!important}
.enquiry-page .quotation-destination-card{border-radius:18px!important;background:linear-gradient(145deg,#ffffff,#f3fbfa)!important;border-color:#d6e9e8!important}
.enquiry-page .submit-button{border:0!important;border-radius:13px!important;background:linear-gradient(135deg,#0f766e,#0891b2)!important;box-shadow:0 12px 24px rgba(15,118,110,.22);font-weight:800;min-height:48px}
@media(max-width:700px){.enquiry-page{padding:28px 10px 50px}.enquiry-page>.section-heading h2{font-size:32px}.enquiry-page>.section-heading p{font-size:13px}}
`;

const QUOTATION_REDESIGN_STYLES = `{PACKAGE_MASTER_STYLES + PREMIUM_REDESIGN_STYLES}
.quotation-redesigned{width:min(1180px,96vw)!important;max-height:94vh!important;overflow:auto!important;padding:0!important;background:#f4f7fb!important}.quotation-editor-topbar{display:flex;justify-content:space-between;gap:20px;padding:26px 30px;background:linear-gradient(135deg,#0f2747,#174f78);color:#fff}.quotation-editor-topbar h3{margin:5px 0;font-size:26px}.quotation-editor-topbar p{margin:0;color:#d7e7f4;font-size:13px}.quotation-eyebrow{font-size:10px;letter-spacing:1.5px;font-weight:800;color:#79c8ff}.quotation-close-button{align-self:flex-start;background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:10px;font-size:25px;width:38px;height:38px}.quotation-layout{display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:18px;padding:20px}.quotation-main-column{min-width:0}.quotation-card,.quotation-summary-card{background:#fff!important;border:1px solid #e2e8f0!important;border-radius:16px!important;box-shadow:0 8px 24px rgba(15,39,71,.05);padding:20px!important;margin-top:0!important;margin-bottom:18px}.quotation-section-title{display:flex;align-items:center;gap:12px;margin-bottom:18px}.quotation-section-title h4{margin:0!important;font-size:17px!important}.quotation-section-title p{margin:3px 0 0;color:#64748b;font-size:12px}.quotation-step{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#e8f4ff;color:#12649a;font-size:12px;font-weight:800}.quotation-inline-heading{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:12px}.quotation-inline-heading small{color:#64748b;font-size:11px}.quotation-room-summary{margin-top:18px;padding:15px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc}.quotation-room-summary-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:10px 0;border-top:1px solid #e5e7eb}.quotation-room-summary-row:first-of-type{border-top:0}.quotation-room-summary-type{display:flex;align-items:center;gap:8px;margin-left:auto}.quotation-room-summary-type button,.quotation-room-control button{border:1px solid #cbd5e1;background:#fff;border-radius:7px;width:28px;height:28px;font-weight:800}.quotation-room-summary-type button:disabled{opacity:.4}.quotation-destination-card{background:#f8fbff!important;border:1px solid #dce7f2!important;border-radius:14px!important;padding:17px!important;margin:14px 0!important}.quotation-destination-head{align-items:center}.quotation-destination-head strong{display:block;font-size:16px;color:#123b5d;margin-top:4px}.quotation-destination-label{font-size:10px;letter-spacing:1px;color:#6b8aa3;font-weight:800}.quotation-summary-card{position:sticky;top:0}.quotation-summary-card h4{font-size:18px;margin:8px 0 16px}.quotation-total-highlight{background:linear-gradient(135deg,#0d385b,#1976a8);color:#fff;border-radius:14px;padding:18px;margin-bottom:15px}.quotation-total-highlight small,.quotation-total-highlight span{display:block;color:#c8e6f7;font-size:11px}.quotation-total-highlight strong{display:block;font-size:28px;margin:5px 0}.quotation-cost-row{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #edf2f7;font-size:12px}.quotation-cost-total{font-size:14px;color:#0f3d60;border-bottom:0;padding-top:15px}.quotation-summary-card label{display:block;margin-top:12px}.quotation-help-card{font-size:12px;color:#475569}.quotation-help-card p{line-height:1.6;margin-bottom:0}.quotation-footer-actions{display:flex;justify-content:flex-end;gap:10px;padding:18px 30px;background:#fff;border-top:1px solid #e2e8f0;position:sticky;bottom:0}.quotation-footer-actions button{min-width:140px}@media(max-width:900px){.quotation-layout{grid-template-columns:1fr}.quotation-summary-card{position:static}.quotation-editor-topbar{padding:20px}.quotation-layout{padding:12px}.quotation-footer-actions{padding:14px;position:static}}


.confirmation-preview-modal{width:min(980px,96vw)!important;max-width:980px!important;padding:0!important;background:#eef3f8!important;border-radius:18px!important;overflow:hidden!important}.confirmation-preview-modal .admin-modal-head{padding:18px 22px;background:#fff;border-bottom:1px solid #dfe7ef}.confirmation-preview-document{max-height:68vh;overflow:auto}.confirmation-preview-document .cf-page{width:100%!important;margin:0!important;border:0!important;border-radius:0!important;box-shadow:none!important}.confirmation-preview-document .cf-head{border-radius:0!important}.confirmation-preview-document .cf-footer{border-radius:0!important}.confirmation-preview-modal .admin-modal-actions{padding:14px 18px;background:#fff;border-top:1px solid #dfe7ef;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
`;

function App() {
  const [activePage, setActivePage] = useState("home");
  const [enquiries, setEnquiries] = useState([]);
  const [adminSession, setAdminSession] = useState(null);
  const [adminAuthLoading, setAdminAuthLoading] = useState(true);
  const [agentSession, setAgentSession] = useState(null);
  const [agentProfile, setAgentProfile] = useState(null);

  /* =======================================================
     SUPABASE AUTH SESSION
  ======================================================= */

  useEffect(() => {
    if (!supabase) {
      setAdminAuthLoading(false);
      return undefined;
    }

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;

      setAdminSession(data?.session || null);
      setAdminAuthLoading(false);
      // IMPORTANT: Do not classify the global Supabase session as an agent here.
      // Admin and Agent sessions use the same Supabase Auth session, and doing
      // this globally can make a valid Admin login immediately switch away from
      // the Admin panel. Agent profile loading is handled only by the Agent flow.

      if (data?.session) {
        loadEnquiries().catch((error) => {
          console.error("Unable to load enquiries:", error);
        });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // Keep the Supabase Auth session as the single source of truth.
      // Do not automatically turn every Auth session into an Agent session.
      // This prevents an Admin account with legacy agent metadata from being
      // redirected away from the Admin panel immediately after login.
      setAdminSession(session || null);

      if (!session) {
        setAgentSession(null);
        setAgentProfile(null);
      }

      if (session) {
        loadEnquiries().catch((error) => {
          console.error("Unable to load enquiries:", error);
        });
      } else {
        setEnquiries([]);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  /* =======================================================
     LOAD ENQUIRIES FROM SUPABASE
  ======================================================= */

  async function loadEnquiries() {
    if (!supabase) {
      throw new Error(
        "Supabase is not configured. Please check your .env file."
      );
    }

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase load error:", error);
      throw new Error(error.message);
    }

    setEnquiries(Array.isArray(data) ? data : []);

    return data;
  }

  /* =======================================================
     ADD ENQUIRY TO SUPABASE
  ======================================================= */

  async function addEnquiry(form) {
    if (!supabase) {
      throw new Error(
        "Supabase is not configured. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env."
      );
    }

    const enquiryData = {
      name: form.name?.trim() || "",
      phone: form.phone?.trim() || "",
      email: form.email?.trim() || "",
      destination: form.destination?.trim() || "",
      travel_date: form.travel_date || null,

      adults: Number(form.adults) || 0,
      children: Number(form.children) || 0,

      child_ages: form.child_ages?.trim() || "",

      rooms: Number(form.rooms) || 0,

      hotel_category: form.hotel_category || "",
      meal_plan: form.meal_plan || "",
      transport: form.transport || "",

      budget: form.budget?.trim() || "",
      message: form.message?.trim() || "",
      agent_id: agentSession?.user?.id || null,
    };

    console.log("Saving enquiry to Supabase:", enquiryData);

    // Insert only. Do not request the inserted row back here because
    // public visitors use the anon key and SELECT may be protected by RLS.
    const { error } = await supabase
      .from("enquiries")
      .insert([enquiryData]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw new Error(
        `Unable to save enquiry: ${error.message}`
      );
    }

    // Reload is intentionally attempted only after a successful insert.
    // If SELECT is protected by RLS, the enquiry is still safely saved.
    try {
      await loadEnquiries();
    } catch (loadError) {
      console.warn("Enquiry saved, but could not reload the enquiry list:", loadError);
    }

    return enquiryData;
  }

  /* =======================================================
     CREATE QUOTATION DIRECTLY FROM WEBSITE
  ======================================================= */
  async function addWebsiteQuotation(quotationData) {
    const saved = (() => {
      try { return JSON.parse(localStorage.getItem("sneh_travel_quotations") || "[]"); }
      catch { return []; }
    })();
    const list = Array.isArray(saved) ? saved : [];
    const year = new Date().getFullYear();
    const max = list.reduce((n, item) => {
      const m = String(item.serial_no || "").match(/(\d+)$/);
      return Math.max(n, m ? Number(m[1]) : 0);
    }, 0);
    const quotation = {
      ...quotationData,
      id: `WEB-QUO-${Date.now()}`,
      serial_no: `QUO-${year}-${String(max + 1).padStart(4, "0")}`,
      enquiry_id: null,
      agent_id: agentSession?.user?.id || null,
      created_at: quotationData.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    const next = [quotation, ...list];
    localStorage.setItem("sneh_travel_quotations", JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("sneh-travel-quotation-created", { detail: quotation }));
    return quotation;
  }

  /* =======================================================
     DELETE ONE ENQUIRY
  ======================================================= */

  async function deleteEnquiry(id) {
    if (!supabase) {
      throw new Error("Supabase is not configured.");
    }

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase delete error:", error);
      alert(`Unable to delete enquiry: ${error.message}`);
      return;
    }

    setEnquiries((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  /* =======================================================
     DELETE ALL ENQUIRIES
  ======================================================= */

  async function clearEnquiries() {
    if (!supabase) {
      throw new Error("Supabase is not configured.");
    }

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .not("id", "is", null);

    if (error) {
      console.error("Supabase clear error:", error);
      alert(`Unable to delete enquiries: ${error.message}`);
      return;
    }

    setEnquiries([]);
    alert("All enquiries have been deleted.");
  }

  /* =======================================================
     PAGE DISPLAY
  ======================================================= */

  function renderPage() {
    if (activePage === "home") {
      return (
        <>
          <Hero setActivePage={setActivePage} />
          <Destinations setActivePage={setActivePage} />
          <Packages setActivePage={setActivePage} />
          <AdminPublishedPackages setActivePage={setActivePage} />
          <About setActivePage={setActivePage} />
        </>
      );
    }

    if (activePage === "about") {
      return (
        <>
          <About setActivePage={setActivePage} />
          <Packages setActivePage={setActivePage} />
          <AdminPublishedPackages setActivePage={setActivePage} />
        </>
      );
    }

   if (activePage === "contact") {
  return <ContactPage />;
}


    if (activePage === "quotation") {
      return <Contact addWebsiteQuotation={addWebsiteQuotation} />;
    }

    if (activePage === "agent-login") {
      if (agentSession && agentProfile) return <AgentDashboard session={agentSession} agent={agentProfile} onLogout={async()=>{if(supabase) await supabase.auth.signOut();setAgentSession(null);setAgentProfile(null);setActivePage("home");}} setActivePage={setActivePage} />;
      return <AgentLogin onLogin={(session,profile)=>{setAgentSession(session);setAgentProfile(profile);setActivePage("agent-dashboard");}} onRegister={()=>setActivePage("agent-register")} onBack={()=>setActivePage("home")} />;
    }

    if (activePage === "agent-register") {
      return <AgentRegistration onBack={()=>setActivePage("agent-login")} onLogin={()=>setActivePage("agent-login")} />;
    }

    if (activePage === "agent-dashboard") {
      if (!agentSession || !agentProfile) return <AgentLogin onLogin={(session,profile)=>{setAgentSession(session);setAgentProfile(profile);setActivePage("agent-dashboard");}} onRegister={()=>setActivePage("agent-register")} onBack={()=>setActivePage("home")} />;
      return <AgentDashboard session={agentSession} agent={agentProfile} onLogout={async()=>{if(supabase) await supabase.auth.signOut();setAgentSession(null);setAgentProfile(null);setActivePage("home");}} setActivePage={setActivePage} />;
    }

    if (activePage === "admin") {
      // Admin always has priority on the Admin route. Never redirect an Admin
      // user to the Agent Dashboard just because an old Auth metadata value
      // happens to contain role=agent.
      if (adminAuthLoading) {
        return (
          <section className="admin-login-page">
            <div className="admin-login-card">
              <div className="admin-lock">🔐</div>
              <h2>Checking Admin Session...</h2>
              <p>Please wait.</p>
            </div>
          </section>
        );
      }

      if (!adminSession) {
        return (
          <AdminLogin
            onLogin={(session) => {
              setAdminSession(session);
              loadEnquiries().catch((error) => {
                console.error("Unable to load enquiries after login:", error);
              });
            }}
            onBack={() => setActivePage("home")}
          />
        );
      }

      return (
        <AdminPanel
          enquiries={enquiries}
          onDelete={deleteEnquiry}
          onClear={clearEnquiries}
          onRefresh={loadEnquiries}
          onLogout={async () => {
            if (supabase) {
              await supabase.auth.signOut();
            }
            setAdminSession(null);
            setEnquiries([]);
            setActivePage("home");
          }}
          onViewWebsite={() => setActivePage("home")}
        />
      );
    }

    if (activePage.startsWith("domestic-")) {
      const slug = activePage.replace("domestic-", "");

      const packageName = domesticDestinations.find(
        (item) => makeSlug(item) === slug
      );

      return (
        <DomesticPackagePage
          packageName={packageName}
          setActivePage={setActivePage}
        />
      );
    }

    if (activePage.startsWith("international-")) {
      const slug = activePage.replace("international-", "");

      const destination = internationalDestinations.find(
        (item) => makeSlug(item) === slug
      );

      return (
        <InternationalPage
          destination={destination || "International"}
          setActivePage={setActivePage}
        />
      );
    }

    return (
      <section className="page-section">
        <h2>Page Not Found</h2>
        <button onClick={() => setActivePage("home")}>
          Back to Home
        </button>
      </section>
    );
  }

  return (
    <>
      <style>{PACKAGE_MASTER_STYLES + PREMIUM_REDESIGN_STYLES + QUOTATION_REDESIGN_STYLES + PUBLIC_CUSTOMIZATION_THEME_STYLES + AGENT_STYLES + AGENT_MANAGEMENT_STYLES}</style>
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main>{renderPage()}</main>

      <Footer setActivePage={setActivePage} />

      <WhatsAppButton />
    </>
  );
}



export default App;
