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
    description: "IGBC Gold certification represents environmentally responsible construction with sustainable materials, energy efficiency and eco-friendly design.",
    image: "/images/blog-1.jpg",
    content: [
      "The Indian Green Building Council (IGBC) Gold certification is one of the highest recognitions for sustainable architecture in India. It is awarded to buildings that demonstrate excellence in water conservation, energy efficiency, and the use of eco-friendly materials.",
      "At ViMond Realty, we prioritize these standards because we believe that luxury should not come at the cost of the environment. A Gold-certified building significantly reduces carbon footprints while providing a healthier living environment for residents.",
      "Key benefits include lower utility costs, improved indoor air quality, and the peace of mind that comes with living in a space designed for the future."
    ]
  },
  {
    slug: "koregaon-park-living",
    title: "Benefits of Living in Koregaon Park",
    category: "Lifestyle",
    description: "Koregaon Park is one of Pune's most prestigious residential areas offering premium lifestyle, excellent connectivity, and vibrant surroundings.",
    image: "/images/blog-2.jpg",
    content: [
      "Koregaon Park is more than just a pin code; it is a lifestyle statement. Known for its lush tree-lined lanes, historical bungalows, and world-class dining, it remains the most sought-after neighborhood in Pune.",
      "Living here means being at the center of culture and convenience. From the serenity of the Osho International Resort to the high-end retail and social hubs of Lane 7, Koregaon Park offers a unique blend of peace and energy.",
      "ViMond's projects in this area are designed to honor this legacy, providing a modern sanctuary within this iconic historical district."
    ]
  },
  {
    slug: "intelligent-luxury-homes",
    title: "Why Intelligent Luxury Homes are the Future",
    category: "Innovation",
    description: "Modern luxury homes are now designed with intelligent planning, smart technology and sustainable architecture to enhance everyday living.",
    image: "/images/blog-3.jpg",
    content: [
      "The definition of luxury has evolved. It is no longer just about expensive finishes; it is about 'Intelligent Luxury'—how a home responds to your needs through design and technology.",
      "Intelligent homes utilize advanced spatial planning to maximize natural light and ventilation. Integrated smart home systems allow residents to control their environment with precision, enhancing security and convenience simultaneously.",
      "This philosophy ensures that a home is not just a place to stay, but a tool for living better. At ViMond, intelligence is the foundation of every blueprint we create."
    ]
  }
];
