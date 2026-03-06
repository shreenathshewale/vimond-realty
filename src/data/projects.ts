/**
 * @fileOverview Centralized data for all ViMond Realty projects.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Configuration {
  type: string;
  area: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  image: string;
  status: 'ongoing' | 'completed';
  tagline: string;
  about: string;
  highlights: string[];
  rera?: string;
  configurations?: Configuration[];
  whyUs: string[];
  amenities: Amenity[];
  advantages: string[];
  faqs: FAQ[];
}

export const projects: Project[] = [
  {
    slug: "vivencia",
    name: "Vivencia",
    location: "Koregaon Park, Pune",
    image: "/images/Vivenica.png",
    status: "ongoing",
    tagline: "A landmark of tree-lined elegance.",
    about: "Located in the heart of Pune's most prestigious neighborhood, Vivencia is a landmark of architectural precision and lifestyle enhancement. Every detail of Vivencia has been engineered to honor the legacy of Koregaon Park while introducing modern, future-proof building methods.",
    highlights: ["Premium residential tower", "Prime central location", "Contemporary architecture"],
    rera: "P52100001234",
    configurations: [
      { type: "3 BHK Luxury", area: "1850 - 2100 Sq. Ft." },
      { type: "4 BHK Premium", area: "2400 - 2800 Sq. Ft." },
      { type: "Penthouse", area: "4500+ Sq. Ft." }
    ],
    whyUs: [
      "Prime Koregaon Park location",
      "Intelligent luxury architecture",
      "Premium construction quality",
      "Spacious modern layouts"
    ],
    amenities: [
      { icon: "Waves", label: "Infinity Pool" },
      { icon: "Dumbbell", label: "Private Gym" },
      { icon: "Trees", label: "Rooftop Garden" },
      { icon: "ShieldCheck", label: "24/7 Security" },
      { icon: "Cpu", label: "Smart Automation" },
      { icon: "Car", label: "Reserved Parking" }
    ],
    advantages: [
      "Heart of Koregaon Park, Lane 7",
      "Proximity to Osho International Resort",
      "Access to Elite Lifestyle & Dining Hubs",
      "Serene, Tree-lined Historical Neighborhood"
    ],
    faqs: [
      { question: "Where is Vivencia located?", answer: "Vivencia is located in Lane 7, Koregaon Park, Pune." },
      { question: "Is the project RERA registered?", answer: "Yes, the project is registered under MahaRERA No. P52100001234." },
      { question: "What configurations are available?", answer: "We offer premium 3 & 4 BHK luxury residences and exclusive penthouses." }
    ]
  },
  {
    slug: "verista",
    name: "Verïsta",
    location: "Law College Road, Pune",
    image: "/images/Verista.png",
    status: "ongoing",
    tagline: "Contemporary living in a historic heart.",
    about: "Verïsta stands as a testament to intelligent design in a historic heart, blending traditional values with cutting-edge architecture. On the prestigious Law College Road, Verïsta offers a rare combination of modern luxury and serene heritage.",
    highlights: ["Modern luxury apartments", "Spacious layouts", "Premium neighborhood"],
    rera: "P52100005678",
    configurations: [
      { type: "3 BHK Classic", area: "1650 - 1900 Sq. Ft." },
      { type: "4 BHK Grand", area: "2200 - 2600 Sq. Ft." }
    ],
    whyUs: [
      "Historic Law College Road location",
      "Low-density development",
      "Environmentally conscious design",
      "High-spec interiors"
    ],
    amenities: [
      { icon: "Trees", label: "Landscaped Courtyard" },
      { icon: "Dumbbell", label: "Fitness Suite" },
      { icon: "ShieldCheck", label: "Advanced Security" },
      { icon: "Cpu", label: "EV Charging" },
      { icon: "Sun", label: "Solar Energy" },
      { icon: "Layout", label: "Business Lounge" }
    ],
    advantages: [
      "Historic Law College Road",
      "Near FTII & Bhandarkar Institute",
      "Serene and Prestigious Enclave",
      "Excellent Proximity to Deccan Gymkhana"
    ],
    faqs: [
      { question: "Where is Verïsta located?", answer: "It is situated on Law College Road, one of Pune's most prestigious residential areas." },
      { question: "What is the status of the project?", answer: "Verïsta is currently an ongoing development." }
    ]
  },
  {
    slug: "signature",
    name: "Signature Tower II",
    location: "Model Colony, Pune",
    image: "/images/Signature.png",
    status: "ongoing",
    tagline: "A legacy redefined.",
    about: "Signature Tower II represents the peak of architectural mastery in Model Colony, setting new benchmarks for urban sophistication. As a landmark development, Signature is designed for those who appreciate the finer nuances of living.",
    highlights: ["High-end residential project", "Excellent connectivity", "Elegant design"],
    rera: "P52100009012",
    configurations: [
      { type: "4 BHK Sky Home", area: "3200 Sq. Ft." }
    ],
    whyUs: [
      "Tranquil Model Colony environment",
      "Exclusive 4-BHK floor plans",
      "Advanced home automation",
      "Elite concierge services"
    ],
    amenities: [
      { icon: "Heart", label: "Wellness Center" },
      { icon: "Briefcase", label: "Business Lounge" },
      { icon: "Layout", label: "Rooftop Skywalk" },
      { icon: "ShieldCheck", label: "Advanced Security" },
      { icon: "Dumbbell", label: "Elite Fitness Lab" },
      { icon: "Cpu", label: "Home Automation" }
    ],
    advantages: [
      "Tranquil Model Colony Location",
      "Easy Access to Pune University",
      "Premier and Established Neighborhood",
      "Connected to Major Commercial Hubs"
    ],
    faqs: [
      { question: "What makes Signature Tower II unique?", answer: "Its location in Model Colony combined with futuristic sky-home concepts makes it a true landmark." }
    ]
  },
  {
    slug: "serenity",
    name: "Serenity",
    location: "Paud Road, Kothrud",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    status: "completed",
    tagline: "An architectural marvel on Paud Road.",
    about: "With an imposing exterior look, ‘Serenity’ is truly an architectural marvel strategically located on Paud Road. It offers a right mix of gracious living apartments, smart offices and stunning showrooms. A great proposition if you wish to stay connected with the downtown, the ethnic charm, new futuristic opportunities and a happening locality.",
    highlights: ["Architectural marvel", "Strategic location", "Mixed-use development"],
    rera: "P52100001810",
    whyUs: [
      "Strategic Paud Road location",
      "Proven quality and maintenance",
      "High rental yield potential",
      "Vibrant mixed-use community"
    ],
    amenities: [
      { icon: "Home", label: "Grand Entrance" },
      { icon: "ShieldCheck", label: "24/7 Security" },
      { icon: "Trees", label: "Garden Spaces" },
      { icon: "Car", label: "Ample Parking" }
    ],
    advantages: [
      "Prime Paud Road Location",
      "Excellent connectivity to Kothrud Hubs",
      "Established community & infrastructure",
      "Nearby schools and hospitals"
    ],
    faqs: [
      { question: "Where is Serenity located?", answer: "Serenity is strategically located on Paud Road, Kothrud." },
      { question: "Is the project RERA registered?", answer: "Yes, MahaRERA Registration No. P52100001810." }
    ]
  },
  {
    slug: "success-square",
    name: "Success Square",
    location: "Near Mritunjay Mandir, Kothrud",
    image: "https://images.unsplash.com/photo-1567684014761-b618b6983527?q=80&w=1000",
    status: "completed",
    tagline: "The new landmark of today's Kothrud.",
    about: "Located in the heart of a buzzing suburb, right beside Mritunjayeshwar Mandir on Karve Road, Success Square is the new landmark of today’s Kothrud. With premium residences and thoughtfully envisioned commercial spaces, it truly reflects the contemporary lifestyle and joyful verve you would like to adapt with your new address.",
    highlights: ["Heart of buzzing suburb", "Karve Road access", "Contemporary lifestyle"],
    rera: "P52100001813",
    whyUs: [
      "In the heart of Karve Road",
      "Perfect balance of work and home",
      "Excellent visibility for commercial",
      "Established residential value"
    ],
    amenities: [
      { icon: "Car", label: "Ample Parking" },
      { icon: "ShieldCheck", label: "High Security" },
      { icon: "Layout", label: "Smart Planning" },
      { icon: "Briefcase", label: "Commercial Spaces" }
    ],
    advantages: [
      "Adjacent to Mritunjay Mandir",
      "Excellent road connectivity on Karve Road",
      "Close to major shopping & dining hubs",
      "Prime residential neighborhood"
    ],
    faqs: [
      { question: "Where is Success Square located?", answer: "It is located beside Mritunjayeshwar Mandir on Karve Road, Kothrud." }
    ]
  },
  {
    slug: "shivalik",
    name: "Shivalik",
    location: "Mayur Colony, Kothrud",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    status: "completed",
    tagline: "Plush residences for the creme de la creme.",
    about: "In close proximity with Bhagwan Shiva’s divine existence, ‘Shivalik’ is a luxury residential project at the prestigious address of Mayur Colony, Kothrud. These are plush residences for the creme de la creme. Living here would be an absolute status upgrade.",
    highlights: ["Prestigious address", "Luxury living", "Sophisticated design"],
    rera: "P52100014200",
    whyUs: [
      "Elite Mayur Colony address",
      "Low maintenance luxury",
      "Excellent capital appreciation",
      "Peaceful living environment"
    ],
    amenities: [
      { icon: "Dumbbell", label: "Fitness Area" },
      { icon: "Trees", label: "Landscape" },
      { icon: "ShieldCheck", label: "Modern Security" },
      { icon: "Home", label: "Status Address" }
    ],
    advantages: [
      "Elite Mayur Colony location",
      "Serene neighborhood",
      "Proximity to quality education and healthcare",
      "Elite social infrastructure"
    ],
    faqs: [
      { question: "What makes Shivalik prestigious?", answer: "Its location in Mayur Colony and luxury design cater to the elite." }
    ]
  }
];