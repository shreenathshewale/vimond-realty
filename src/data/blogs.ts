/**
 * @fileOverview Centralized data for ViMond Realty blog posts.
 */

export interface Blog {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  content: string[];
}

export const blogs: Blog[] = [
  {
    slug: "igbc-gold-certified",
    title: "What is IGBC Gold Certified Building?",
    category: "Sustainability",
    description: "IGBC Gold Certification is awarded to buildings that follow sustainable construction practices, energy efficiency and environmentally responsible design.",
    image: "https://images.unsplash.com/photo-1742845873557-9ba9cb0691ca?q=80&w=1000",
    content: [
      "IGBC Gold Certification is awarded to buildings that follow sustainable construction practices, energy efficiency and environmentally responsible design. It ensures reduced carbon footprint, efficient water usage and improved indoor environmental quality.",
      "At ViMond Realty, we prioritize these standards because we believe that luxury should not come at the cost of the environment. A Gold-certified building significantly reduces carbon footprints while providing a healthier living environment for residents.",
      "Key benefits include lower utility costs, improved indoor air quality, and the peace of mind that comes with living in a space designed for the future."
    ]
  },
  {
    slug: "koregaon-park-living",
    title: "Benefits of Living in Koregaon Park",
    category: "Lifestyle",
    description: "Koregaon Park is one of Pune's most premium residential areas known for its greenery, elite lifestyle and excellent connectivity.",
    image: "https://images.unsplash.com/photo-1573845105959-48591b7fd566?q=80&w=1000",
    content: [
      "Koregaon Park is one of Pune's most premium residential areas known for its greenery, elite lifestyle, excellent connectivity and proximity to business hubs, restaurants and cultural centers.",
      "Living here means being at the center of culture and convenience. From the serenity of the Osho International Resort to the high-end retail and social hubs of Lane 7, Koregaon Park offers a unique blend of peace and energy.",
      "ViMond's projects in this area are designed to honor this legacy, providing a modern sanctuary within this iconic historical district."
    ]
  },
  {
    slug: "intelligent-luxury-homes",
    title: "Why Intelligent Luxury Homes Are the Future",
    category: "Innovation",
    description: "Modern luxury homes combine smart technology, sustainable architecture and intelligent planning to enhance everyday living.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
    content: [
      "Modern luxury homes combine smart technology, sustainable architecture and intelligent planning to enhance everyday living. These homes provide comfort, energy efficiency and future-ready design.",
      "The definition of luxury has evolved. It is no longer just about expensive finishes; it is about 'Intelligent Luxury'—how a home responds to your needs through design and technology.",
      "Integrated smart home systems allow residents to control their environment with precision, enhancing security and convenience simultaneously. This philosophy ensures that a home is not just a place to stay, but a tool for living better."
    ]
  }
];
