const backendServerAddress = "https://orbitviewmedia.pythonanywhere.com/";
const instagram = "https://www.instagram.com/orbitview_/";
const twitter = "https://x.com/OrbitViewMedia";
const linkedin = "https://www.linkedin.com/company/orbitview/"

const productAndServices = [
  { id: 1, title: "OrbitView Premium", endpoint: "/premium" },
  { id: 2, title: "Quiztrepreneur", endpoint: "https://quiztrepreneur.vercel.app/" },
  { id: 3, title: "Techonomics", endpoint: "https://techonomics.vercel.app/" },
  // { id: 4, title: "OrbitView Nexus", endpoint: "/nexus" },
  // { id: 5, title: "StarFindr", endpoint: "/starfindr" },
  // { id: 6, title: "MarketSentinel", endpoint: "/sentinel" },
  // { id: 7, title: "SpaceView", endpoint: "/spaceview" },
  // { id: 8, title: "AutoCommander", endpoint: "/autocommander" },
];

const solutions = [
  { id: 1, title: "Individuals", endpoint: "/solutions/individuals" },
  { id: 2, title: "Families", endpoint: "/solutions/families" },
  { id: 3, title: "Students", endpoint: "/solutions/students" },
  { id: 4, title: "Businesses", endpoint: "/solutions/businesses" },
  { id: 5, title: "Government", endpoint: "/solutions/governments" },
];

const resourceCenter = [
  { id: 1, title: "Careers", endpoint: "/careers" },
  { id: 2, title: "Technical Articles", endpoint: "/technical-articles" },
  { id: 3, title: "White Papers", endpoint: "/white-papers" },
  { id: 4, title: "Blog", endpoint: "/blog" },
  { id: 5, title: "Podcasts", endpoint: "/podcasts" },
];

const newsRoom = [
  { id: 1, title: "Press Releases", endpoint: "/press-releases" },
  { id: 2, title: "In the News", endpoint: "/in-the-news" },
  { id: 3, title: "Events", endpoint: "/events" },
  { id: 4, title: "Webinars and Videos", endpoint: "/media" },
  { id: 5, title: "Blog", endpoint: "/blog" },
  { id: 6, title: "Podcasts", endpoint: "/podcasts" },
  { id: 7, title: "Newsletters", endpoint: "/newsletters" },
];

const investorInformation = [
  { id: 1, title: "Understanding OrbitView", endpoint: "/understanding-orbitview" },
  { id: 2, title: "Our Strengths", endpoint: "/our-strengths" },
  { id: 3, title: "Financial Results", endpoint: "/financial-results" },
  { id: 4, title: "Events", endpoint: "/events" },
  { id: 5, title: "Announcements", endpoint: "/announcements" },
  { id: 6, title: "Financial Calendar", endpoint: "/financial-calendar" },
  { id: 7, title: "Covering Analysts", endpoint: "/covering-analysts" },
  { id: 8, title: "Corporate Governance", endpoint: "/corporate-governance" },
  { id: 9, title: "FAQs", endpoint: "/faqs" },
];

const aboutUs = [
  { id: 1, title: "Company", endpoint: "/company" },
  { id: 2, title: "Partnerships", endpoint: "/partnerships" },
  { id: 3, title: "Leadership", endpoint: "/leadership" },
  { id: 4, title: "Webinars and Videos", endpoint: "/media" },
  { id: 5, title: "Blog", endpoint: "/blog" },
  { id: 6, title: "Podcasts", endpoint: "/podcasts" },
];

const community = [
  { id: 1, title: "Events", endpoint: "/events" },
  { id: 2, title: "Hackathons and Competitions", endpoint: "/competitions" },
  { id: 3, title: "Ambassadors and Launch Program", endpoint: "/programs" },
  { id: 4, title: "Collaboration", endpoint: "/collaboration" },
  { id: 5, title: "OrbitView Web Framework", endpoint: "/web-framework" },
];

const support = [
  { id: 1, title: "Help Center", endpoint: "/help-center" },
  { id: 2, title: "Product Documentations", endpoint: "/product-documentation" },
  { id: 3, title: "Community Support", endpoint: "/community-support" },
  // { id: 4, title: "Social Media", endpoint: "/" },
  { id: 5, title: "Privacy Policy", endpoint: "/privacy-policy" },
  { id: 6, title: "Compliance Information", endpoint: "/compliance-information" },
  { id: 7, title: "Terms of Service", endpoint: "/terms-of-service" },
];

const Links = {
  backendServerAddress: backendServerAddress,
  socialMedia: {
    instagram: instagram,
    twitter: twitter, 
    linkedin: linkedin
  },
  productsAndServices: productAndServices,
  solutions: solutions,
  resourceCenter: resourceCenter,
  newsRoom: newsRoom,
  investInformation: investorInformation,
  aboutUs: aboutUs,
  community: community,
  support: support,
};

export default Links;
