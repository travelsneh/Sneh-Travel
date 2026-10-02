export const defaultData = {
site: {
name: "Sneh Travel",
tagline: "Making travel simple, memorable and personal.",
phone: "+91 98765 43210",
email: "[info@snehtravel.com](mailto:info@snehtravel.com)",
location: "Delhi, India",
},

destinations: [
{
id: 1,
name: "Goa",
description:
"Beautiful beaches, exciting activities, relaxing stays and unforgettable sunsets.",
price: "From ₹8,999",
image:
"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
featured: true,
},
{
id: 2,
name: "Manali",
description:
"Mountains, snow, adventure and peaceful Himalayan views for an amazing holiday.",
price: "From ₹10,999",
image:
"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
featured: true,
},
{
id: 3,
name: "Jaipur",
description:
"Royal palaces, colourful markets, rich culture and delicious local food.",
price: "From ₹7,999",
image:
"https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
featured: true,
},
{
id: 4,
name: "Kerala",
description:
"Backwaters, beaches, houseboats, nature and peaceful experiences.",
price: "From ₹11,999",
image:
"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
featured: false,
},
{
id: 5,
name: "Kashmir",
description:
"Beautiful valleys, lakes, mountains and memorable experiences.",
price: "From ₹14,999",
image:
"https://images.unsplash.com/photo-1595815771614-ade9d4e5e9c9?auto=format&fit=crop&w=900&q=80",
featured: false,
},
{
id: 6,
name: "Dubai",
description:
"Luxury shopping, desert adventures, city tours and world-class attractions.",
price: "From ₹29,999",
image:
"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
featured: false,
},
],

services: [
{
id: 1,
icon: "✈️",
title: "Flight Booking",
description:
"Convenient domestic and international flight booking assistance.",
},
{
id: 2,
icon: "🏨",
title: "Hotel Booking",
description:
"Comfortable hotels and stays selected according to your requirements.",
},
{
id: 3,
icon: "🚗",
title: "Cab & Transfers",
description:
"Reliable airport transfers and local transportation services.",
},
{
id: 4,
icon: "🗺️",
title: "Tour Packages",
description:
"Complete holiday packages designed around your budget and interests.",
},
],

enquiries: [],
};

export function loadData() {
try {
const savedData = localStorage.getItem("snehTravelData");

```
if (savedData) {
  return JSON.parse(savedData);
}
```

} catch (error) {
console.error("Unable to load saved data:", error);
}

return defaultData;
}

export function saveData(data) {
try {
localStorage.setItem("snehTravelData", JSON.stringify(data));
} catch (error) {
console.error("Unable to save data:", error);
}
}
