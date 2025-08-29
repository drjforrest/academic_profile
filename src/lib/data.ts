export type Publication = {
  id: number;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  imageUrl: string;
  aiHint: string;
  pdfUrl: string;
  doi: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    id: 1,
    title: "Equity in AI: Global Health Collaboration",
    authors: ["Forrest, J.", "Li, M.", "Chen, W."],
    year: 2024,
    journal: "The Lancet Digital Health",
    imageUrl: "https://picsum.photos/400/500",
    aiHint: "abstract AI health",
    pdfUrl: "#",
    doi: "10.1016/S2589-7500(23)00250-5",
    tags: ["AI", "Global Health", "Equity"],
  },
  {
    id: 2,
    title: "Digital Innovation in African-Canadian Research Partnerships",
    authors: ["Forrest, J.", "Osei, K.", "Tremblay, L."],
    year: 2023,
    journal: "Journal of Health Informatics in Africa",
    imageUrl: "https://picsum.photos/400/501",
    aiHint: "digital innovation africa",
    pdfUrl: "#",
    doi: "10.12968/jhia.2023.2.1.1",
    tags: ["Digital Innovation", "Partnerships"],
  },
  {
    id: 3,
    title: "Network Analysis of Scientific Collaboration in Pandemics",
    authors: ["Forrest, J.", "Singh, R."],
    year: 2023,
    journal: "Nature Communications",
    imageUrl: "https://picsum.photos/400/502",
    aiHint: "network analysis science",
    pdfUrl: "#",
    doi: "10.1038/s41467-023-12345-6",
    tags: ["Network Analysis", "Pandemics"],
  },
  {
    id: 4,
    title: "The Role of AI in Enabling Research: A Methodological Review",
    authors: ["Forrest, J."],
    year: 2022,
    journal: "AI & Society",
    imageUrl: "https://picsum.photos/400/503",
    aiHint: "AI research methodology",
    pdfUrl: "#",
    doi: "10.1007/s00146-022-01389-3",
    tags: ["AI", "Research Methods"],
  },
  {
    id: 5,
    title: "Capacity Building for Digital Health in Low-Resource Settings",
    authors: ["Forrest, J.", "Abebe, T."],
    year: 2021,
    journal: "Global Health Action",
    imageUrl: "https://picsum.photos/400/504",
    aiHint: "digital health capacity",
    pdfUrl: "#",
    doi: "10.1080/16549716.2021.1891234",
    tags: ["Digital Health", "Capacity Building"],
  },
  {
    id: 6,
    title: "Ethical Considerations for AI in Global Health",
    authors: ["Forrest, J.", "Global Health Ethics Consortium"],
    year: 2024,
    journal: "BMJ Global Health",
    imageUrl: "https://picsum.photos/400/505",
    aiHint: "AI ethics health",
    pdfUrl: "#",
    doi: "10.1136/bmjgh-2024-012345",
    tags: ["AI", "Ethics", "Global Health"],
  },
];
