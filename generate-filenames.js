// Helper script to generate publication filenames
// Run with: node generate-filenames.js

const publications = [
  {
    id: 1,
    title: "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19: the TOGETHER randomised, platform clinical trial",
    slug: "effect-of-early-treatment-with-fluvoxamine-on-risk-of-emergency-care-and-hospitalisation-among-patients-with-covid-19"
  },
  {
    id: 2,
    title: "Effect of early treatment with ivermectin among patients with Covid-19",
    slug: "effect-of-early-treatment-with-ivermectin-among-patients-with-covid-19"
  },
  {
    id: 3,
    title: "Validating a shortened depression scale (10 item CES-D) among HIV-positive people in British Columbia, Canada",
    slug: "validating-a-shortened-depression-scale-10-item-ces-d-among-hiv-positive-people-in-british-columbia-canada"
  },
  {
    id: 4,
    title: "Interventions to improve adherence to antiretroviral therapy: a systematic review and network meta-analysis",
    slug: "interventions-to-improve-adherence-to-antiretroviral-therapy-a-systematic-review-and-network-meta-analysis"
  },
  {
    id: 5,
    title: "A real-time dashboard of clinical trials for COVID-19",
    slug: "a-real-time-dashboard-of-clinical-trials-for-covid-19"
  },
  {
    id: 6,
    title: "Early treatment with pegylated interferon lambda for Covid-19",
    slug: "early-treatment-with-pegylated-interferon-lambda-for-covid-19"
  },
  {
    id: 7,
    title: "HIV care continuum in Rwanda: a cross-sectional analysis of the national programme",
    slug: "hiv-care-continuum-in-rwanda-a-cross-sectional-analysis-of-the-national-programme"
  },
  {
    id: 8,
    title: "Mobile health applications for HIV prevention and care in Africa",
    slug: "mobile-health-applications-for-hiv-prevention-and-care-in-africa"
  }
];

console.log("📄 PDF FILENAMES:");
console.log("=".repeat(50));
publications.forEach(pub => {
  console.log(`${pub.slug}.pdf`);
});

console.log("\n🖼️  THUMBNAIL FILENAMES:");
console.log("=".repeat(50));
publications.forEach(pub => {
  console.log(`${pub.slug}.jpg`);
});

console.log("\n📋 BASH COMMANDS TO CREATE PLACEHOLDER FILES:");
console.log("=".repeat(50));
console.log("# Create PDF directory structure");
console.log("mkdir -p src/public/pdf/thumbnails");
console.log("");
console.log("# Create placeholder PDF files (replace with your actual PDFs)");
publications.forEach(pub => {
  console.log(`touch "src/public/pdf/${pub.slug}.pdf"`);
});
console.log("");
console.log("# Create placeholder thumbnail files (replace with your actual images)");
publications.forEach(pub => {
  console.log(`touch "src/public/pdf/thumbnails/${pub.slug}.jpg"`);
});

console.log("\n🔄 UPDATED DATA STRUCTURE PREVIEW:");
console.log("=".repeat(50));
console.log("// Update imageUrl and pdfUrl in your data.ts file:");
publications.slice(0, 2).forEach(pub => {
  console.log(`{
  id: ${pub.id},
  // ... other fields
  imageUrl: "/pdf/thumbnails/${pub.slug}.jpg",
  pdfUrl: "/pdf/${pub.slug}.pdf",
  // ... other fields
},`);
  console.log("");
});
