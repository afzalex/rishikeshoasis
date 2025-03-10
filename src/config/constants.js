export const getBaseUrl = () => {
  return ''; // No prefix needed for custom domain
};

// For assets like images
export const getAssetsUrl = () => {
  return process.env.PUBLIC_URL || ''; // Use PUBLIC_URL for correct asset paths
};

// Business Details
export const BUSINESS_INFO = {
  name: "Rishikesh Oasis Retreat",
  tagline: "Your peaceful sanctuary in Rishikesh",
  description: "Discover inner peace and spiritual growth in the yoga capital of the world. Our retreat offers a perfect blend of traditional yoga practices, meditation, and modern comfort to help you on your journey of self-discovery.",
  
  // Contact Information
  contact: {
    phone: {
      primary: "+91 9897000106",
      whatsapp: "+91 9897000106",
    },
    email: "info@rishikeshoasis.com",
    address: {
      line1: "Near Lakshman Jhula",
      line2: "Tapovan, Rishikesh",
      city: "Rishikesh",
      state: "Uttarakhand",
      country: "India",
      pinCode: "249192"
    }
  },

  // Social Media
  social: {
    instagram: "https://instagram.com/rishikeshoasis",
    facebook: "https://facebook.com/rishikeshoasis",
    twitter: "https://twitter.com/rishikeshoasis"
  },

  // Business Hours
  businessHours: {
    weekdays: "6:00 AM - 9:00 PM",
    weekends: "6:00 AM - 8:00 PM",
    timezone: "IST (UTC+5:30)"
  },

  // Services
  services: [
    {
      name: "Yoga Classes",
      description: "Traditional Hatha and Ashtanga yoga classes for all levels"
    },
    {
      name: "Meditation Sessions",
      description: "Guided meditation and mindfulness practices"
    },
    {
      name: "Accommodation",
      description: "Peaceful and comfortable rooms with Ganga view"
    },
    {
      name: "Ayurvedic Treatments",
      description: "Traditional healing and wellness therapies"
    }
  ],

  // Legal Information
  legal: {
    registrationNumber: "UPTR2023456789",
    gst: "09ABCDE1234F1Z5"
  }
}; 