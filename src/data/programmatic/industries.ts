import type { IndustryEntry } from './types'

export const industryEntries: IndustryEntry[] = [
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-ecommerce',
		title: 'Schema Generator for E-commerce — Complete Guide | SEWWA',
		description:
			'Learn how to add schema markup to your e-commerce site. Product, Offer, Review, and BreadcrumbList patterns with examples and a free JSON-LD generator.',
		industryLabel: 'E-commerce',
		commonSchemas: ['Product', 'Offer', 'Review', 'AggregateRating', 'BreadcrumbList'],
		tips: [
			'Include pricing and availability for better CTR',
			'Add Review schema to show star ratings in search results',
			'Use GTIN/MPN for product identification',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Organic Cotton Hoodie",
      "image": ["https://example.com/images/hoodie-front.webp", "https://example.com/images/hoodie-back.webp"],
      "description": "Mid-weight unisex hoodie made from GOTS-certified organic cotton.",
      "sku": "HOOD-ORG-M-BLK",
      "gtin13": "00012345678905",
      "brand": { "@type": "Brand", "name": "Example Outfitters" },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/products/organic-cotton-hoodie",
        "priceCurrency": "USD",
        "price": "89.00",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
          "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" }
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "128"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
        { "@type": "ListItem", "position": 2, "name": "Apparel", "item": "https://example.com/apparel/" },
        { "@type": "ListItem", "position": 3, "name": "Organic Cotton Hoodie", "item": "https://example.com/products/organic-cotton-hoodie" }
      ]
    }
  ]
}`,
		bodyMarkdown: `Structured data helps search engines understand your catalog, eligibility for rich results, and how offers relate to products. Start with **Product** and **Offer** on every PDP, then layer **Review** and **AggregateRating** where you have first-party or compliant third-party reviews. **BreadcrumbList** improves how categories appear in SERPs.

Use SEWWA's schema tools to generate valid JSON-LD, paste into your theme or tag manager once per page type, and validate with Google's Rich Results Test before you scale to thousands of SKUs.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-restaurants',
		title: 'Schema Generator for Restaurants — Complete Guide | SEWWA',
		description:
			'Schema markup for restaurants: LocalBusiness, Menu, Review, and FAQ. Improve local SEO and rich results with examples and our free generator.',
		industryLabel: 'Restaurants',
		commonSchemas: ['LocalBusiness', 'Menu', 'Review', 'FAQPage'],
		tips: [
			'Add menu items with prices in Menu schema',
			'Include operating hours and cuisine type',
			'Add location and contact information in LocalBusiness',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Harbor Bistro",
  "image": "https://example.com/harbor-bistro-exterior.jpg",
  "url": "https://example.com/locations/harbor-bistro",
  "telephone": "+1-207-555-0100",
  "priceRange": "$$",
  "servesCuisine": ["Seafood", "American"],
  "acceptsReservations": "https://example.com/reserve",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "42 Pier Road",
    "addressLocality": "Portland",
    "addressRegion": "ME",
    "postalCode": "04101",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "43.6591", "longitude": "-70.2568" },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "15:00"
    }
  ],
  "hasMenu": "https://example.com/menu/harbor-bistro",
  "menu": {
    "@type": "Menu",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Mains",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Grilled Atlantic Salmon",
            "description": "Citrus beurre blanc, seasonal vegetables.",
            "offers": { "@type": "Offer", "price": "32.00", "priceCurrency": "USD" }
          }
        ]
      }
    ]
  }
}`,
		bodyMarkdown: `Restaurants live on **local intent** and **menu clarity**. **LocalBusiness** (or a food-specific subtype when accurate) should reflect your GBP-style NAP, hours, and reservation links. **Menu** markup maps to what diners actually see on the page—do not invent dishes or prices.

Pair with **Review** only when reviews are visible and policy-compliant, and **FAQPage** only for real FAQs on the page. SEWWA helps you ship consistent JSON-LD without duplicating plugins.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-real-estate',
		title: 'Schema Generator for Real Estate — Complete Guide | SEWWA',
		description:
			'Structured data for real estate: agents, listings, LocalBusiness, and reviews. Step-by-step patterns and a free schema generator.',
		industryLabel: 'Real Estate',
		commonSchemas: ['RealEstateAgent', 'LocalBusiness', 'Review', 'FAQPage'],
		tips: [
			'Include property listings with details where shown on-page',
			'Add agent contact information consistently',
			'Use Review for testimonials that appear verbatim on the site',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://example.com/agents/jordan-lee#agent",
      "name": "Jordan Lee",
      "image": "https://example.com/team/jordan-lee.jpg",
      "url": "https://example.com/agents/jordan-lee",
      "telephone": "+1-503-555-0142",
      "email": "jordan.lee@example.com",
      "jobTitle": "Principal Broker",
      "worksFor": { "@id": "https://example.com/#brokerage" },
      "areaServed": [
        { "@type": "City", "name": "Portland" },
        { "@type": "City", "name": "Beaverton" }
      ]
    },
    {
      "@type": "RealEstateBroker",
      "@id": "https://example.com/#brokerage",
      "name": "Cascade Realty Group",
      "url": "https://example.com/",
      "logo": "https://example.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "900 NW Everett St",
        "addressLocality": "Portland",
        "addressRegion": "OR",
        "postalCode": "97209",
        "addressCountry": "US"
      },
      "employee": { "@id": "https://example.com/agents/jordan-lee#agent" }
    }
  ]
}`,
		bodyMarkdown: `**Real estate** pages mix **agent**, **office**, and **listing** intents. Use **RealEstateAgent** or **RealEstateBroker** when the page is about a person or team; use **LocalBusiness** for office locations. Listing pages should mirror visible listing data—avoid marking up properties that are not on the page.

FAQ and Review markup are powerful but strictly policed: FAQs must match on-page Q&A; reviews must follow Google's review snippet policies.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-healthcare',
		title: 'Schema Generator for Healthcare — Complete Guide | SEWWA',
		description:
			'MedicalOrganization, Physician, and LocalBusiness schema for healthcare sites. YMYL-aware guidance and JSON-LD examples.',
		industryLabel: 'Healthcare',
		commonSchemas: ['MedicalOrganization', 'Physician', 'LocalBusiness'],
		tips: [
			'Include medical specialty information accurately',
			'Add insurance and telehealth details only when factual on-page',
			'Keep NAP and hours aligned with GBP',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://example.com/clinic#org",
      "name": "Willamette Family Medicine",
      "url": "https://example.com/",
      "logo": "https://example.com/logo.svg",
      "telephone": "+1-503-555-0199",
      "image": "https://example.com/clinic-building.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1200 Health Way",
        "addressLocality": "Portland",
        "addressRegion": "OR",
        "postalCode": "97205",
        "addressCountry": "US"
      },
      "medicalSpecialty": "https://schema.org/FamilyMedicine",
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Annual wellness exams" },
        { "@type": "MedicalProcedure", "name": "Chronic disease management" }
      ],
      "sameAs": ["https://www.facebook.com/exampleclinic", "https://www.linkedin.com/company/exampleclinic"]
    },
    {
      "@type": "Physician",
      "name": "Dr. Ana Morales, MD",
      "url": "https://example.com/providers/ana-morales",
      "image": "https://example.com/providers/ana-morales.jpg",
      "medicalSpecialty": "https://schema.org/FamilyMedicine",
      "worksFor": { "@id": "https://example.com/clinic#org" }
    }
  ]
}`,
		bodyMarkdown: `Healthcare is **YMYL**: schema must reflect **accurate, visible** information. **MedicalOrganization** and **Physician** types help clarify who provides care; avoid implying credentials or outcomes you do not state in plain text.

Use **LocalBusiness** where appropriate for location pages, and never treat schema as a substitute for regulatory or medical disclaimers your site already needs.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-dentists',
		title: 'Schema Generator for Dentists — Complete Guide | SEWWA',
		description:
			'Dentist and LocalBusiness structured data for dental practices. Improve local visibility with schema examples and SEWWA tools.',
		industryLabel: 'Dentists',
		commonSchemas: ['Dentist', 'LocalBusiness', 'Review'],
		tips: [
			'List dental services offered on the page you mark up',
			'Include insurance and payment information when shown',
			'Add office hours and multiple locations per URL if applicable',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "BrightLine Dental — Pearl District",
  "image": "https://example.com/locations/pearl.jpg",
  "url": "https://example.com/locations/pearl-district",
  "telephone": "+1-503-555-0177",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "412 NW 12th Ave",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97209",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "45.5245", "longitude": "-122.6842" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "paymentAccepted": "Cash, Credit Card, HSA/FSA",
  "medicalSpecialty": "https://schema.org/Dentistry",
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Preventive cleanings and exams" },
    { "@type": "MedicalTherapy", "name": "Invisalign consultations" }
  ]
}`,
		bodyMarkdown: `Dental practices benefit from **Dentist** (a LocalBusiness subtype) tied to a single canonical URL per location. Services, insurance, and hours should match what patients see—especially if you sync with Google Business Profile.

Reviews in markup must mirror visible reviews and follow Google's policies. Generate clean JSON-LD with SEWWA and validate before publishing.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-lawyers',
		title: 'Schema Generator for Lawyers — Complete Guide | SEWWA',
		description:
			'LegalService and LocalBusiness schema for law firms. Ethical, accurate structured data with examples.',
		industryLabel: 'Lawyers',
		commonSchemas: ['LegalService', 'LocalBusiness', 'Review'],
		tips: [
			'Specify practice areas that appear on the page',
			'Include bar association or registration details if published',
			'Add consultation booking links when offered',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Morrison & Hale LLP",
  "url": "https://example.com/",
  "logo": "https://example.com/logo.png",
  "image": "https://example.com/office.jpg",
  "telephone": "+1-415-555-0134",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 California St, Suite 800",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94111",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "State", "name": "California" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "knowsAbout": ["Employment law", "Business litigation", "Contract drafting"],
  "founder": {
    "@type": "Person",
    "name": "Elena Morrison",
    "jobTitle": "Managing Partner",
    "url": "https://example.com/attorneys/elena-morrison"
  }
}`,
		bodyMarkdown: `**LegalService** fits many firm and attorney pages. Keep **areaServed**, **priceRange**, and contact fields aligned with ethics rules in your jurisdiction—schema is not the place for guarantees or superlatives you avoid in copy.

Use **Review** only for compliant, visible testimonials. SEWWA helps you build minimal, valid graphs you can extend as content grows.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-plumbers',
		title: 'Schema Generator for Plumbers — Complete Guide | SEWWA',
		description:
			'LocalBusiness, Service, and Review schema for plumbing companies. Local SEO patterns and free generator.',
		industryLabel: 'Plumbers',
		commonSchemas: ['LocalBusiness', 'Service', 'Review'],
		tips: [
			'List services offered (drain, water heater, emergency)',
			'Include service area cities or regions you actually cover',
			'Add emergency contact info when you promote 24/7 service',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "NorthStar Plumbing & Drain",
  "image": "https://example.com/van-fleet.jpg",
  "url": "https://example.com/",
  "telephone": "+1-206-555-0165",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8800 Aurora Ave N",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98103",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "Shoreline" },
    { "@type": "City", "name": "Lynnwood" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59",
    "description": "24/7 emergency service"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water heater repair and install" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer line inspection" } }
    ]
  }
}`,
		bodyMarkdown: `Plumbing is hyper-local: **LocalBusiness** + **Service** should reflect trucks-on-the-road reality. **areaServed** and phone numbers must match how you answer leads.

Rich results are a bonus; the win is clarity for maps and local pack alignment. Build JSON-LD once per template (service city pages vs homepage) and reuse with SEWWA.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-electricians',
		title: 'Schema Generator for Electricians — Complete Guide | SEWWA',
		description:
			'Structured data for electricians: LocalBusiness, Service, licensing hints, and reviews. Examples + generator.',
		industryLabel: 'Electricians',
		commonSchemas: ['LocalBusiness', 'Service', 'Review'],
		tips: [
			'List electrical services (panel upgrade, EV charger, commercial)',
			'Include licensing or certification text shown on-site',
			'Add service area and scheduling links',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "VoltCraft Electric",
  "image": "https://example.com/electrician-team.jpg",
  "url": "https://example.com/",
  "telephone": "+1-503-555-0188",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "55 Industrial Way",
    "addressLocality": "Beaverton",
    "addressRegion": "OR",
    "postalCode": "97005",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "AdministrativeArea", "name": "Portland metropolitan area" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:30",
    "closes": "17:00"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "recognizedBy": { "@type": "Organization", "name": "Oregon Building Codes Division" }
  },
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "200A panel upgrades" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EV charger installation" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial tenant improvements" } }
  ]
}`,
		bodyMarkdown: `**Electricians** should emphasize **trust** and **coverage**: license numbers belong in schema only if they appear on the page. **Service** nodes help clarify commercial vs residential offers.

Keep one primary entity per URL to avoid conflicting graphs; use SEWWA to generate and iterate.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-gyms',
		title: 'Schema Generator for Gyms — Complete Guide | SEWWA',
		description:
			'ExerciseGym and LocalBusiness schema for fitness businesses. Amenities, hours, and membership CTAs.',
		industryLabel: 'Gyms',
		commonSchemas: ['ExerciseGym', 'LocalBusiness', 'Review'],
		tips: [
			'Include amenities and equipment mentioned on-page',
			'Add membership options and trial offers when visible',
			'Include class schedules or links to timetables',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "Iron & Flow Fitness",
  "image": "https://example.com/gym-floor.jpg",
  "url": "https://example.com/",
  "telephone": "+1-512-555-0120",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2100 Riverside Dr",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78741",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "30.2458", "longitude": "-97.7184" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "05:00",
    "closes": "23:00"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free weights and power racks", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sauna", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Childcare", "value": false }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Memberships",
    "itemListElement": [
      { "@type": "Offer", "name": "7-day trial", "url": "https://example.com/join" }
    ]
  }
}`,
		bodyMarkdown: `**ExerciseGym** (or **SportsActivityLocation** when more accurate) pairs with **LocalBusiness** fields for hours, geo, and photos. If you run classes, ensure the page content supports any **Event** or schedule claims you add later.

Start with a single clean **LocalBusiness**-style graph and expand as your templates mature.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-hotels',
		title: 'Schema Generator for Hotels — Complete Guide | SEWWA',
		description:
			'Hotel and LocalBusiness structured data for hospitality. Rooms, offers, and review patterns.',
		industryLabel: 'Hotels',
		commonSchemas: ['Hotel', 'LocalBusiness', 'Review'],
		tips: [
			'Include room types and amenities that match booking pages',
			'Add pricing and availability only when shown to users',
			'Highlight location and highlights (airport shuttle, parking)',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Riverfront Inn Portland",
  "description": "Boutique hotel on the Willamette with river views and complimentary breakfast.",
  "url": "https://example.com/riverfront-inn",
  "telephone": "+1-503-555-0101",
  "image": ["https://example.com/hotel-lobby.jpg", "https://example.com/guest-room.jpg"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1510 SW Harbor Way",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97201",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "45.5122", "longitude": "-122.6756" },
  "starRating": { "@type": "Rating", "ratingValue": "4" },
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Airport shuttle", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "On-site parking", "value": true }
  ],
  "containsPlace": {
    "@type": "HotelRoom",
    "name": "Deluxe King River View",
    "bed": { "@type": "BedDetails", "type": "King" },
    "occupancy": { "@type": "QuantitativeValue", "maxValue": 2 }
  }
}`,
		bodyMarkdown: `**Hotel** markup should align with **booking reality**: rates and availability change fast—mark up what is stable on the URL (property name, address, star tier if shown, amenity list). Mismatch with OTA feeds causes trust issues.

Use SEWWA to prototype JSON-LD for property templates, then wire dynamic fields from your CMS.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-travel-agencies',
		title: 'Schema Generator for Travel Agencies — Complete Guide | SEWWA',
		description:
			'TravelAgency, offers, and FAQ schema for travel sites. Structured data tips and JSON-LD generator.',
		industryLabel: 'Travel Agencies',
		commonSchemas: ['TravelAgency', 'TouristTrip', 'Review', 'FAQPage'],
		tips: [
			'Mark up packages and itineraries that appear verbatim on-page',
			'Align offers with real availability and pricing',
			'Use Review only with compliant, visible reviews',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://example.com/#agency",
      "name": "Horizon Custom Travel",
      "url": "https://example.com/",
      "logo": "https://example.com/logo.svg",
      "telephone": "+1-212-555-0140",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "350 Madison Ave, Floor 12",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10017",
        "addressCountry": "US"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "TouristTrip",
      "name": "Amalfi Coast: 7 nights, small-group culinary tour",
      "description": "Coastal towns, cooking classes, and winery visits. Dates and inclusions as shown on the booking page.",
      "url": "https://example.com/trips/amalfi-culinary",
      "touristType": "Couples and food enthusiasts",
      "provider": { "@id": "https://example.com/#agency" },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/trips/amalfi-culinary#book",
        "priceCurrency": "USD",
        "price": "4299.00",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-05-01"
      }
    }
  ]
}`,
		bodyMarkdown: `Travel pages often blend **inspiration** and **commerce**. **TravelAgency** identifies the business; **TouristTrip** or **Trip** types apply when you describe specific bookable trips users can see. Avoid marking up aspirational copy as bookable products.

**FAQPage** is ideal for cancellation, visa, and insurance questions that actually appear in an FAQ section.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-automotive',
		title: 'Schema Generator for Automotive — Complete Guide | SEWWA',
		description:
			'AutoRepair and LocalBusiness schema for shops and dealers. Service listings and local SEO.',
		industryLabel: 'Automotive',
		commonSchemas: ['AutoRepair', 'LocalBusiness', 'Service', 'Review'],
		tips: [
			'Use AutoRepair for repair shops; align with services listed',
			'Add brands supported and OEM certifications if shown',
			'Collect reviews with authentic sourcing and policies',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Summit Brake & Tire — NE Portland",
  "image": "https://example.com/bay-area.jpg",
  "url": "https://example.com/locations/ne-portland",
  "telephone": "+1-503-555-0155",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4820 NE Sandy Blvd",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97213",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "45.5432", "longitude": "-122.6120" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "07:30",
    "closes": "18:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brake inspection and repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC recharge and diagnostics" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alignment and suspension" } }
    ]
  },
  "brand": [
    { "@type": "Brand", "name": "Michelin" },
    { "@type": "Brand", "name": "Bosch" }
  ]
}`,
		bodyMarkdown: `**AutoRepair** and **AutoDealer** are distinct—pick the type that matches the page. List **Service** names users recognize (brakes, AC, diagnostics) and keep **areaServed** honest.

Schema supports local pack alignment; combine with strong on-page NAP and GBP hygiene.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-education',
		title: 'Schema Generator for Education — Complete Guide | SEWWA',
		description:
			'EducationalOrganization and Course schema for schools and trainers. Structured data examples.',
		industryLabel: 'Education',
		commonSchemas: ['EducationalOrganization', 'Course', 'LocalBusiness', 'Review'],
		tips: [
			'Use Course for programs with dates, price, and instructor on-page',
			'Expose accreditation when published on the site',
			'Keep location and service area accurate for local intent',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://example.com/#school",
      "name": "Cascade Code Academy",
      "url": "https://example.com/",
      "logo": "https://example.com/logo.png",
      "telephone": "+1-503-555-0112",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "200 SW Market St",
        "addressLocality": "Portland",
        "addressRegion": "OR",
        "postalCode": "97201",
        "addressCountry": "US"
      },
      "sameAs": ["https://www.linkedin.com/school/cascade-code-academy"]
    },
    {
      "@type": "Course",
      "name": "Full-Stack Web Development Bootcamp",
      "description": "16-week immersive program covering HTML, CSS, JavaScript, React, Node, and databases.",
      "url": "https://example.com/programs/full-stack",
      "provider": { "@id": "https://example.com/#school" },
      "educationalCredentialAwarded": "Certificate of completion",
      "courseCode": "FS-2026-SUMMER",
      "timeRequired": "P16W",
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/programs/full-stack#apply",
        "priceCurrency": "USD",
        "price": "12950.00",
        "availability": "https://schema.org/LimitedAvailability"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "startDate": "2026-06-01",
        "endDate": "2026-09-18",
        "instructor": { "@type": "Person", "name": "Sam Rivera" }
      }
    }
  ]
}`,
		bodyMarkdown: `Education sites range from **K–12** to **bootcamps**. **EducationalOrganization** grounds the institution; **Course** fits cohort-based offerings with visible syllabus, duration, and price. Do not mark up courses users cannot enroll in from that URL.

**LocalBusiness** helps for campuses with public-facing locations.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-nonprofits',
		title: 'Schema Generator for Nonprofits — Complete Guide | SEWWA',
		description:
			'NonprofitOrganization schema: mission, donations, and events. Implementation guide + tools.',
		industryLabel: 'Nonprofits',
		commonSchemas: ['NonprofitOrganization', 'LocalBusiness', 'Organization', 'FAQPage'],
		tips: [
			'Clarify mission, donation links, and contact in visible copy',
			'Use FAQ for volunteer and donor questions on-page',
			'Keep logo and sameAs social profiles aligned',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "name": "Willamette River Stewardship",
  "alternateName": "WRS",
  "url": "https://example.org/",
  "logo": "https://example.org/logo.svg",
  "image": "https://example.org/volunteers-cleanup.jpg",
  "description": "Volunteer-led nonprofit restoring native habitat along the Willamette River watershed.",
  "email": "hello@example.org",
  "telephone": "+1-503-555-0190",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "400 Waterfront Park Rd",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97209",
    "addressCountry": "US"
  },
  "nonprofitStatus": "Nonprofit501c3",
  "sameAs": [
    "https://www.instagram.com/willamettestewardship",
    "https://www.facebook.com/willamettestewardship"
  ],
  "foundingDate": "2012",
  "makesOffer": {
    "@type": "Offer",
    "name": "Monthly sustaining donation",
    "url": "https://example.org/donate",
    "category": "Donation"
  }
}`,
		bodyMarkdown: `**NonprofitOrganization** signals mission-focused entities. Pair with **Organization**-level **sameAs** and **logo** for knowledge panel alignment when Google trusts the entity.

**FAQPage** helps explain tax receipts, volunteering, and eligibility—only for FAQs users actually see.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-local-business',
		title: 'Schema Generator for Local Business — Complete Guide | SEWWA',
		description:
			'LocalBusiness, Review, FAQ, and hours schema for generic local SMBs. Practical JSON-LD guide.',
		industryLabel: 'Local Business',
		commonSchemas: ['LocalBusiness', 'Review', 'FAQPage', 'OpeningHoursSpecification'],
		tips: [
			'Keep NAP consistent with Google Business Profile',
			'Add OpeningHoursSpecification including holiday exceptions when shown',
			'Use FAQ for services, areas served, and pricing FAQs on-page',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "GreenLeaf Home Goods",
  "image": "https://example.com/storefront.jpg",
  "url": "https://example.com/locations/hawthorne",
  "telephone": "+1-503-555-0170",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3825 SE Hawthorne Blvd",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97214",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "45.5120", "longitude": "-122.6244" },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "214"
  }
}`,
		bodyMarkdown: `**LocalBusiness** is the backbone of SMB SEO. Prefer a **specific subtype** (e.g. **Store**, **ProfessionalService**) when it matches reality. **OpeningHoursSpecification** beats a single free-text hours string for machines and assistants.

Layer **Review** and **FAQPage** only when content and policy requirements are met.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-contractors',
		title: 'Schema Generator for Contractors — Complete Guide | SEWWA',
		description:
			'General contractors: LocalBusiness, Service, and Review schema. Licensing and service area patterns.',
		industryLabel: 'Contractors',
		commonSchemas: ['LocalBusiness', 'Service', 'Review', 'FAQPage'],
		tips: [
			'List licenses, insurance, and bonding if displayed',
			'Break out trades (roofing, remodeling) clearly per page',
			'Add emergency vs standard hours when relevant',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Pacific Ridge Builders",
  "image": "https://example.com/project-roof.jpg",
  "url": "https://example.com/",
  "telephone": "+1-253-555-0160",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "780 Commerce St",
    "addressLocality": "Tacoma",
    "addressRegion": "WA",
    "postalCode": "98402",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Pierce County" },
    { "@type": "AdministrativeArea", "name": "King County" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "17:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential remodeling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof replacement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ADU design-build" } }
    ]
  }
}`,
		bodyMarkdown: `Contractors often run **multi-trade** brands. Either one **LocalBusiness** with many **Service** items or **separate URLs per trade**—schema should follow your IA, not the other way around.

Use SEWWA to keep JSON-LD consistent across city and service landing templates.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-beauty-salons',
		title: 'Schema Generator for Beauty Salons — Complete Guide | SEWWA',
		description:
			'BeautySalon structured data: services, booking, and reviews. Local SEO for salons and spas.',
		industryLabel: 'Beauty Salons',
		commonSchemas: ['BeautySalon', 'LocalBusiness', 'Service', 'Review'],
		tips: [
			'List services with duration or price when shown',
			'Add booking URL and click-to-call',
			'Use Review with authentic client feedback policies',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Studio Lumen Hair & Color",
  "image": "https://example.com/salon-interior.jpg",
  "url": "https://example.com/",
  "telephone": "+1-415-555-0181",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1842 Valencia St",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94110",
    "addressCountry": "US"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "paymentAccepted": "Cash, Credit Card, Apple Pay",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Balayage color",
          "description": "Hand-painted highlights; pricing after consultation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Signature haircut",
          "offers": { "@type": "Offer", "price": "75.00", "priceCurrency": "USD" }
        }
      }
    ]
  }
}`,
		bodyMarkdown: `**BeautySalon** is the right subtype for many nail, hair, and spa businesses. Services like balayage or gel extensions should appear in copy before you emphasize them in **Service** markup.

Link **makesOffer** or reservation URLs that users actually use—schema should reduce friction, not invent booking paths.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-pet-services',
		title: 'Schema Generator for Pet Services — Complete Guide | SEWWA',
		description:
			'Grooming, boarding, and vet-adjacent LocalBusiness schema. Examples and generator.',
		industryLabel: 'Pet Services',
		commonSchemas: ['LocalBusiness', 'Service', 'Review', 'FAQPage'],
		tips: [
			'Specify services: grooming, daycare, boarding, training',
			'Add pickup/delivery service area if advertised',
			'FAQ for vaccinations, breed restrictions, and hours',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/ProfessionalService",
  "name": "Happy Tails Grooming & Daycare",
  "description": "Full-service dog grooming, half-day daycare, and overnight boarding. Vaccination requirements posted at check-in.",
  "image": "https://example.com/play-yard.jpg",
  "url": "https://example.com/",
  "telephone": "+1-503-555-0138",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9550 SW Barbur Blvd",
    "addressLocality": "Portland",
    "addressRegion": "OR",
    "postalCode": "97219",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "City", "name": "Portland" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "07:00",
    "closes": "18:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pet care services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full groom (bath, brush, nails)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Doggie daycare (half day)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Overnight boarding" } }
    ]
  }
}`,
		bodyMarkdown: `Pet businesses span **VeterinaryCare** (when licensed) to generic **LocalBusiness**. Choose the type that matches regulations and on-page claims. **Service** clarifies packages (bath, nail trim, full groom).

Keep temperament and health requirements in **FAQ** sections you actually display.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-accountants',
		title: 'Schema Generator for Accountants — Complete Guide | SEWWA',
		description:
			'AccountingService schema for CPAs and bookkeepers. YMYL-aware structured data guide.',
		industryLabel: 'Accountants',
		commonSchemas: ['AccountingService', 'LocalBusiness', 'Review', 'FAQPage'],
		tips: [
			'List services: tax, bookkeeping, payroll as shown on-site',
			'Clarify jurisdictions and consultation booking',
			'Avoid misleading claims in markup—mirror compliant copy',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Northline CPA Group",
  "image": "https://example.com/conference-room.jpg",
  "url": "https://example.com/",
  "telephone": "+1-206-555-0144",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "601 Union St, Suite 4200",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "AdministrativeArea", "name": "Washington State" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:30",
    "closes": "17:30"
  },
  "knowsAbout": ["Small business tax", "Bookkeeping", "Payroll compliance"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individual and business tax preparation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly bookkeeping" } }
    ]
  }
}`,
		bodyMarkdown: `**AccountingService** signals professional services; combine with **LocalBusiness** for office-driven firms. Tax season landing pages should not promise outcomes in schema that copy does not support.

Use **FAQPage** for pricing models, deadlines, and document checklists users can read on-page.`,
	},
	{
		kind: 'industry',
		urlSegment: 'schema-generator-for-insurance',
		title: 'Schema Generator for Insurance — Complete Guide | SEWWA',
		description:
			'InsuranceAgency schema: lines of business, local offices, and FAQ. Structured data guide.',
		industryLabel: 'Insurance',
		commonSchemas: ['InsuranceAgency', 'LocalBusiness', 'Review', 'FAQPage'],
		tips: [
			'Be precise about lines: auto, home, life, commercial',
			'Use FAQ for claims basics without promising outcomes',
			'Keep licensing and sameAs profiles current',
		],
		exampleJsonLd: `{
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Summit Shield Insurance — Lake Oswego",
  "image": "https://example.com/agency-office.jpg",
  "url": "https://example.com/locations/lake-oswego",
  "telephone": "+1-503-555-0127",
  "priceRange": "Contact for quote",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Monroe Pkwy, Suite 200",
    "addressLocality": "Lake Oswego",
    "addressRegion": "OR",
    "postalCode": "97035",
    "addressCountry": "US"
  },
  "areaServed": { "@type": "State", "name": "Oregon" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:30",
    "closes": "17:00"
  },
  "knowsAbout": ["Auto insurance", "Homeowners insurance", "Commercial liability", "Life insurance"],
  "memberOf": {
    "@type": "Organization",
    "name": "Independent Insurance Agents & Brokers of Oregon"
  }
}`,
		bodyMarkdown: `**InsuranceAgency** fits brokers and agencies; carriers may use **Organization** at national scale. Mark up **areaServed** and contact methods that match compliance disclosures on the page.

Schema supports clarity; regulated copy still lives in your legal-reviewed content.`,
	},
]
