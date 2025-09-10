// Publication File Renaming Helper
// This script helps you rename your existing files to match the systematic naming convention

const fs = require('fs');
const path = require('path');

const publications = [
  {
    id: 1,
    title: "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19",
    journal: "The Lancet Global Health",
    year: 2022,
    firstAuthor: "G Reis",
    keywords: ["fluvoxamine", "covid", "together trial", "lancet global health"],
    targetName: "effect-of-early-treatment-with-fluvoxamine-on-risk-of-emergency-care-and-hospitalisation-among-patients-with-covid-19"
  },
  {
    id: 2,
    title: "Effect of early treatment with ivermectin among patients with Covid-19",
    journal: "New England Journal of Medicine",
    year: 2022,
    firstAuthor: "G Reis",
    keywords: ["ivermectin", "covid", "together trial", "nejm"],
    targetName: "effect-of-early-treatment-with-ivermectin-among-patients-with-covid-19"
  },
  {
    id: 3,
    title: "Validating a shortened depression scale (10 item CES-D) among HIV-positive people",
    journal: "PLoS One",
    year: 2012,
    firstAuthor: "W Zhang",
    keywords: ["depression", "ces-d", "hiv", "scale", "validation", "plos"],
    targetName: "validating-a-shortened-depression-scale-10-item-ces-d-among-hiv-positive-people-in-british-columbia-canada"
  },
  {
    id: 4,
    title: "Interventions to improve adherence to antiretroviral therapy",
    journal: "The Lancet HIV",
    year: 2017,
    firstAuthor: "S Kanters",
    keywords: ["adherence", "antiretroviral", "art", "hiv", "meta-analysis", "systematic review"],
    targetName: "interventions-to-improve-adherence-to-antiretroviral-therapy-a-systematic-review-and-network-meta-analysis"
  },
  {
    id: 5,
    title: "A real-time dashboard of clinical trials for COVID-19",
    journal: "The Lancet Digital Health",
    year: 2020,
    firstAuthor: "K Thorlund",
    keywords: ["dashboard", "clinical trials", "covid", "real-time", "lancet digital"],
    targetName: "a-real-time-dashboard-of-clinical-trials-for-covid-19"
  },
  {
    id: 6,
    title: "Early treatment with pegylated interferon lambda for Covid-19",
    journal: "New England Journal of Medicine",
    year: 2023,
    firstAuthor: "G Reis",
    keywords: ["interferon", "lambda", "covid", "together trial", "nejm"],
    targetName: "early-treatment-with-pegylated-interferon-lambda-for-covid-19"
  },
  {
    id: 7,
    title: "HIV care continuum in Rwanda",
    journal: "The Lancet HIV",
    year: 2015,
    firstAuthor: "S Nsanzimana",
    keywords: ["hiv", "rwanda", "care continuum", "national programme"],
    targetName: "hiv-care-continuum-in-rwanda-a-cross-sectional-analysis-of-the-national-programme"
  },
  {
    id: 8,
    title: "Mobile health applications for HIV prevention and care in Africa",
    journal: "Current Opinion in HIV and AIDS",
    year: 2015,
    firstAuthor: "JI Forrest",
    keywords: ["mobile health", "mhealth", "hiv", "africa", "prevention"],
    targetName: "mobile-health-applications-for-hiv-prevention-and-care-in-africa"
  }
];

// Helper functions
function showPublicationGuide() {
  console.log("📚 PUBLICATION IDENTIFICATION GUIDE");
  console.log("=" .repeat(80));
  console.log("Use this guide to identify which of your files corresponds to each publication:\n");

  publications.forEach((pub, index) => {
    console.log(`${index + 1}. ${pub.title}`);
    console.log(`   Journal: ${pub.journal} (${pub.year})`);
    console.log(`   First Author: ${pub.firstAuthor}`);
    console.log(`   Keywords: ${pub.keywords.join(", ")}`);
    console.log(`   Target filename: ${pub.targetName}.pdf`);
    console.log(`   Target thumbnail: ${pub.targetName}.jpg`);
    console.log("");
  });
}

function generateRenameCommands() {
  console.log("🔄 SAMPLE RENAME COMMANDS");
  console.log("=" .repeat(80));
  console.log("Replace 'OLD_FILENAME' with your actual file names:\n");

  console.log("# For PDFs:");
  publications.forEach((pub, index) => {
    console.log(`mv "OLD_FILENAME_${index + 1}.pdf" "${pub.targetName}.pdf"`);
  });

  console.log("\n# For Thumbnails:");
  publications.forEach((pub, index) => {
    console.log(`mv "OLD_THUMBNAIL_${index + 1}.jpg" "${pub.targetName}.jpg"`);
  });

  console.log("\n# Example with actual filenames:");
  console.log(`mv "fluvoxamine_paper.pdf" "${publications[0].targetName}.pdf"`);
  console.log(`mv "ivermectin_study.pdf" "${publications[1].targetName}.pdf"`);
  console.log(`mv "depression_scale.pdf" "${publications[2].targetName}.pdf"`);
}

function createInteractiveMapper() {
  console.log("🎯 INTERACTIVE FILE MAPPER");
  console.log("=" .repeat(80));
  console.log("Create a mapping file to track your renames:\n");

  const mappingContent = publications.map((pub, index) => {
    return `# ${index + 1}. ${pub.title.substring(0, 60)}...
# Journal: ${pub.journal} (${pub.year})
# Keywords: ${pub.keywords.join(", ")}
OLD_PDF_NAME_${index + 1}.pdf -> ${pub.targetName}.pdf
OLD_THUMBNAIL_${index + 1}.jpg -> ${pub.targetName}.jpg
`;
  }).join("\n");

  fs.writeFileSync('file-mapping.txt', mappingContent);
  console.log("✅ Created 'file-mapping.txt' - edit this file with your actual filenames!");
}

function showBatchRenameScript() {
  console.log("📝 BATCH RENAME SCRIPT");
  console.log("=" .repeat(80));

  const batchScript = `#!/bin/bash
# Publication File Renaming Script
# Edit the OLD_FILENAME variables below with your actual file names

# PDFs - Replace these with your actual filenames
${publications.map((pub, i) =>
`OLD_PDF_${i + 1}="YOUR_FILE_${i + 1}.pdf"  # ${pub.title.substring(0, 40)}...
if [ -f "$OLD_PDF_${i + 1}" ]; then
    mv "$OLD_PDF_${i + 1}" "${pub.targetName}.pdf"
    echo "✅ Renamed PDF ${i + 1}: ${pub.targetName}.pdf"
fi`).join("\n\n")}

# Thumbnails - Replace these with your actual filenames
${publications.map((pub, i) =>
`OLD_THUMB_${i + 1}="YOUR_THUMBNAIL_${i + 1}.jpg"  # ${pub.title.substring(0, 40)}...
if [ -f "$OLD_THUMB_${i + 1}" ]; then
    mv "$OLD_THUMB_${i + 1}" "${pub.targetName}.jpg"
    echo "✅ Renamed thumbnail ${i + 1}: ${pub.targetName}.jpg"
fi`).join("\n\n")}

echo "🎉 Renaming complete!"
`;

  fs.writeFileSync('batch-rename.sh', batchScript);
  console.log("✅ Created 'batch-rename.sh' script!");
  console.log("   1. Edit the OLD_FILENAME variables with your actual file names");
  console.log("   2. Run: chmod +x batch-rename.sh");
  console.log("   3. Run: ./batch-rename.sh");
}

// Main execution
console.log("🏷️  PUBLICATION FILE RENAMING HELPER");
console.log("=" .repeat(80));
console.log("This tool helps you rename your existing files to match our systematic naming convention.\n");

const command = process.argv[2];

switch(command) {
  case 'guide':
    showPublicationGuide();
    break;
  case 'commands':
    generateRenameCommands();
    break;
  case 'mapper':
    createInteractiveMapper();
    break;
  case 'script':
    showBatchRenameScript();
    break;
  default:
    console.log("Usage:");
    console.log("  node rename-publications.js guide      # Show publication identification guide");
    console.log("  node rename-publications.js commands   # Generate sample rename commands");
    console.log("  node rename-publications.js mapper     # Create interactive mapping file");
    console.log("  node rename-publications.js script     # Generate batch rename script");
    console.log("\nStart with 'guide' to identify your files, then use 'script' to generate a renaming script!");
}
