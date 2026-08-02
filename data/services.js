// Static service data — used across Home, Services, and Service detail sections.
const services = [
  {
    slug: "ac-installation",
    title: "AC Installation",
    icon: "bi-snow2",
    shortDescription:
      "Precision-sized central and ductless AC systems installed right the first time, backed by a workmanship guarantee.",
    description:
      "Our licensed technicians perform a full load calculation before recommending any unit, so you never pay for cooling capacity you don't need. We install central split systems, ductless mini-splits, and packaged units from top manufacturers, with clean line-set routing, proper refrigerant charging, and a complete startup inspection on every job.",
    image:
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=900&q=80",
    features: [
      "Free in-home load calculation",
      "Central, ductless & packaged systems",
      "Manufacturer-certified installers",
      "10-year parts warranty on new units",
    ],
  },
  {
    slug: "ac-repair",
    title: "AC Repair",
    icon: "bi-tools",
    shortDescription:
      "Fast, honest AC repair for every make and model — most repairs completed in a single visit.",
    description:
      "Warm air, strange noises, leaking water, or a system that won't turn on at all — our technicians carry the common parts needed to fix most air conditioning problems on the first visit. Every repair includes a full diagnostic report and upfront pricing before we start any work.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80",
    features: [
      "Same-day diagnostic appointments",
      "Upfront, flat-rate pricing",
      "Fully stocked service vehicles",
      "90-day repair guarantee",
    ],
  },
  {
    slug: "heating-repair",
    title: "Heating Repair",
    icon: "bi-fire",
    shortDescription:
      "Furnace and boiler repair to get your heat back on fast when temperatures drop.",
    description:
      "A heating breakdown never happens at a convenient time. Our team diagnoses gas, electric, and oil heating systems quickly and clearly explains what's wrong before any repair begins, so you can make an informed decision without pressure.",
    image:
      "https://images.unsplash.com/photo-1608498456818-4c1c4f10f6a0?w=900&q=80",
    features: [
      "Gas, electric & oil systems",
      "Carbon monoxide safety check included",
      "Transparent, itemized quotes",
      "Priority scheduling for no-heat calls",
    ],
  },
  {
    slug: "furnace-installation",
    title: "Furnace Installation",
    icon: "bi-thermometer-sun",
    shortDescription:
      "High-efficiency furnace installations designed around your home's real heating load.",
    description:
      "We size and install high-efficiency furnaces that match your home's actual heating demand, not a generic estimate. Every installation includes proper ductwork inspection, combustion testing, and a walkthrough of your new system's controls.",
    image:
      "https://images.unsplash.com/photo-1631545806609-42381b6b39a6?w=900&q=80",
    features: [
      "94%+ AFUE efficient models available",
      "Ductwork inspected & sealed",
      "Combustion & safety testing",
      "Financing options available",
    ],
  },
  {
    slug: "heat-pump-service",
    title: "Heat Pump Service",
    icon: "bi-arrow-repeat",
    shortDescription:
      "Installation, tune-ups, and repair for year-round heat pump performance.",
    description:
      "Heat pumps do double duty — heating and cooling your home through every season. We install and service both air-source and ductless heat pumps, keeping refrigerant levels, coils, and reversing valves in top condition so you get efficient comfort all year.",
    image:
      "https://images.unsplash.com/photo-1610171882577-8e69ea87c313?w=900&q=80",
    features: [
      "Air-source & ductless systems",
      "Seasonal performance tune-ups",
      "Refrigerant leak detection",
      "Energy-efficiency assessment",
    ],
  },
  {
    slug: "thermostat-installation",
    title: "Thermostat Installation",
    icon: "bi-display",
    shortDescription:
      "Smart and programmable thermostat installation, set up and synced to your schedule.",
    description:
      "We install and configure Wi-Fi smart thermostats and standard programmable models, matching them correctly to your system type — including multi-stage and heat pump configurations. We'll set up your app, schedules, and geofencing before we leave.",
    image:
      "https://images.unsplash.com/photo-1567925086126-3e558d0b3f36?w=900&q=80",
    features: [
      "Compatible with all major smart brands",
      "Correct wiring for multi-stage systems",
      "App setup & schedule programming",
      "Energy-saving settings walkthrough",
    ],
  },
  {
    slug: "duct-cleaning",
    title: "Duct Cleaning",
    icon: "bi-wind",
    shortDescription:
      "Full-system duct cleaning that removes dust, allergens, and buildup from your airflow.",
    description:
      "Over time, ductwork collects dust, pet dander, and debris that recirculate through your home every time your system runs. Our cleaning process reaches supply and return lines, registers, and the plenum, improving airflow and indoor air quality.",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=900&q=80",
    features: [
      "Whole-system vacuum cleaning",
      "Register & vent sanitizing",
      "Before & after airflow check",
      "Recommended every 3–5 years",
    ],
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    icon: "bi-droplet-half",
    shortDescription:
      "Air purifiers, humidifiers, and filtration upgrades that make the air you breathe cleaner.",
    description:
      "From whole-home air purifiers and UV lights to humidity control and advanced filtration, we design indoor air quality solutions around your household's specific needs — allergies, dryness, odors, or general air cleanliness.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80",
    features: [
      "Whole-home air purifiers",
      "Humidifiers & dehumidifiers",
      "UV germicidal lighting",
      "MERV-13 filtration upgrades",
    ],
  },
  {
    slug: "emergency-hvac",
    title: "Emergency HVAC",
    icon: "bi-lightning-charge",
    shortDescription:
      "24/7 emergency HVAC response for no-heat, no-cool, and system failure calls.",
    description:
      "HVAC emergencies don't wait for business hours, and neither do we. Our emergency dispatch team is available around the clock for total system failures, gas smells, and no-heat or no-cool emergencies, with technicians on the way fast.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80",
    features: [
      "24/7/365 live dispatch",
      "Rapid on-site response",
      "Fully equipped emergency vehicles",
      "No overtime surcharge for members",
    ],
  },
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    icon: "bi-building",
    shortDescription:
      "Installation, maintenance, and repair for offices, restaurants, and commercial buildings.",
    description:
      "We keep commercial spaces comfortable and compliant — from rooftop packaged units for retail and restaurants to multi-zone systems for office buildings. Our commercial team offers scheduled maintenance contracts to minimize downtime and extend equipment life.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    features: [
      "Rooftop & multi-zone systems",
      "Scheduled maintenance contracts",
      "Restaurant & retail experience",
      "Minimal-downtime scheduling",
    ],
  },
];

export default services;
