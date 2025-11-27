interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I came in with only a rough concept, and Founders Workclave transformed it into a complete PRD and project plan. The clarity and speed saved me weeks of back-and-forth.",
    author: "Amara O",
    role: "Startup Founder",
  },
  {
    id: 2,
    quote:
      "We switched from scattered tools to Founders Workclave and now manage PRDs, clients, and payments in one place. Our workflow has never been this organized.",
    author: "Yvonne A",
    role: "PrimeStack Digital Agency",
  },
  {
    id: 3,
    quote:
      "The AI consultant and milestone dashboard helped me understand my product better than I expected. It simplified everything from requirements to payment",
    author: "Dapo K.",
    role: "SaaS Founder",
  },
];

export const countryCodes = [
  { code: "+234", country: "Nigeria" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
];

export interface SignupFormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  countryCode: string;
  password: string;
  agreedToTerms: boolean;
}
