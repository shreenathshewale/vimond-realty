/**
 * @fileOverview Centralized data for all ViMond Realty projects.
 */

export interface Project {
  slug: string;
  name: string;
  location: string;
  image: string;
  description: string;
  fullDescription: string;
  status: 'ongoing' | 'completed';
  highlights: string[];
  rera?: string;
  amenities: { icon: string; label: string }[];
  advantages: string[];
  faqs: { question: string; answer: string }[];
}

export const projects: Project[] = [
  {
    slug: "vivencia",
    name: "Vivencia",
    location: "Koregaon Park",
    image: "/images/Vivenica.png",
    status: "ongoing",
    description: "A landmark of tree-lined elegance.",
    fullDescription: "Located in the heart of Pune's most prestigious neighborhood, Vivencia is a landmark of architectural precision and lifestyle enhancement. Every detail of Vivencia has been engineered to honor the legacy of Koregaon Park while introducing modern, future-proof building methods.",
    highlights: ["Premium residential tower", "Prime central location", "Contemporary architecture"],
    rera: "P52100001234",
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
      { question: "Where is the project located?", answer: "Vivencia is located in Lane 7, Koregaon Park, Pune." },
      { question: "Is the project RERA registered?", answer: "Yes, it is registered under MahaRERA No. P52100001234." },
      { question: "What configurations are available?", answer: "We offer premium 3 & 4 BHK luxury residences." }
    ]
  },
  {
    slug: "verista",
    name: "Verïsta",
    location: "Law College Road",
    image: "/images/Verista.png",
    status: "ongoing",
    description: "Contemporary living in a historic heart.",
    fullDescription: "Verïsta stands as a testament to intelligent design in a historic heart, blending traditional values with cutting-edge architecture. On the prestigious Law College Road, Verïsta offers a rare combination of modern luxury and serene heritage.",
    highlights: ["Modern luxury apartments", "Spacious layouts", "Premium neighborhood"],
    rera: "P52100005678",
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
    location: "Model Colony",
    image: "/images/Signature.png",
    status: "ongoing",
    description: "A legacy redefined.",
    fullDescription: "Signature Tower II represents the peak of architectural mastery in Model Colony, setting new benchmarks for urban sophistication. As a landmark development, Signature is designed for those who appreciate the finer nuances of living.",
    highlights: ["High-end residential project", "Excellent connectivity", "Elegant design"],
    rera: "P52100009012",
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
    description: "With an imposing exterior look, Serenity is truly an architectural marvel.",
    fullDescription: "Serenity is a landmark completed project that defined luxury in Kothrud. Strategically located on Paud Road, it offers an imposing architectural presence and meticulously planned living spaces.",
    highlights: ["Architectural marvel", "Strategic location", "Imposing exterior"],
    rera: "P52100001810",
    amenities: [
      { icon: "Home", label: "Grand Entrance" },
      { icon: "ShieldCheck", label: "24/7 Security" },
      { icon: "Trees", label: "Garden Spaces" }
    ],
    advantages: [
      "Prime Paud Road Location",
      "Excellent connectivity to Kothrud Hubs",
      "Established community"
    ],
    faqs: [
      { question: "Is Serenity completed?", answer: "Yes, this project is fully completed and occupied." }
    ]
  },
  {
    slug: "success-square",
    name: "Success Square",
    location: "Near Mritunjay Mandir, Kothrud",
    image: "https://images.unsplash.com/photo-1567684014761-b618b6983527?q=80&w=1000",
    status: "completed",
    description: "Located in the heart of a buzzing suburb on Karve Road.",
    fullDescription: "Success Square sits at the heart of Kothrud's commercial and residential buzz. Located near the iconic Mritunjayeshwar Mandir, it offers unparalleled convenience and lifestyle access.",
    highlights: ["Heart of buzzing suburb", "Karve Road access", "Iconic neighborhood"],
    rera: "P52100001813",
    amenities: [
      { icon: "Car", label: "Ample Parking" },
      { icon: "ShieldCheck", label: "High Security" },
      { icon: "Layout", label: "Smart Planning" }
    ],
    advantages: [
      "Adjacent to Mritunjay Mandir",
      "Excellent road connectivity",
      "Close to major shopping hubs"
    ],
    faqs: [
      { question: "What is the location of Success Square?", answer: "It is located near Mritunjay Mandir on Karve Road, Kothrud." }
    ]
  },
  {
    slug: "shivalik",
    name: "Shivalik",
    location: "Mayur Colony, Kothrud",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    status: "completed",
    description: "A luxury residential project at the prestigious address of Mayur Colony.",
    fullDescription: "Shivalik redefined premium living in Mayur Colony. Known for its sophisticated design and elite neighborhood, it remains one of the most sought-after addresses in Kothrud.",
    highlights: ["Prestigious address", "Luxury living", "Sophisticated design"],
    rera: "P52100014200",
    amenities: [
      { icon: "Dumbbell", label: "Fitness Area" },
      { icon: "Trees", label: "Landscape" },
      { icon: "ShieldCheck", label: "Modern Security" }
    ],
    advantages: [
      "Elite Mayur Colony location",
      "Serene neighborhood",
      "Proximity to quality education and healthcare"
    ],
    faqs: [
      { question: "Is the project RERA registered?", answer: "Yes, the registration number is P52100014200." }
    ]
  }
];
