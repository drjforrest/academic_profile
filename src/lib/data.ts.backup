export type Publication = {
  id: number;
  title: string;
  authors: string;
  year: number;
  journal: string;
  imageUrl: string;
  aiHint: string;
  pdfUrl: string;
  fullTextUrl?: string;
  doi?: string;
  abstract: string;
  cites: number;
  citesPerYear: number;
  slug: string;
  tags: string[];
};

// Helper function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

// Helper function to extract tags from title and journal
function extractTags(title: string, journal: string): string[] {
  const tags = [];

  // Journal-based tags
  if (journal.toLowerCase().includes("lancet")) tags.push("The Lancet");
  if (journal.toLowerCase().includes("nejm")) tags.push("NEJM");
  if (journal.toLowerCase().includes("hiv")) tags.push("HIV/AIDS");
  if (journal.toLowerCase().includes("covid")) tags.push("COVID-19");

  // Title-based tags
  if (title.toLowerCase().includes("covid")) tags.push("COVID-19");
  if (title.toLowerCase().includes("hiv")) tags.push("HIV/AIDS");
  if (title.toLowerCase().includes("antiretroviral"))
    tags.push("Antiretroviral Therapy");
  if (title.toLowerCase().includes("fluvoxamine")) tags.push("Fluvoxamine");
  if (title.toLowerCase().includes("ivermectin")) tags.push("Ivermectin");
  if (title.toLowerCase().includes("rwanda")) tags.push("Rwanda");
  if (title.toLowerCase().includes("together")) tags.push("TOGETHER Trial");
  if (title.toLowerCase().includes("meta-analysis")) tags.push("Meta-analysis");
  if (title.toLowerCase().includes("systematic review"))
    tags.push("Systematic Review");

  return tags.length > 0 ? tags : ["Global Health"];
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19: the TOGETHER randomised, platform clinical trial",
    authors:
      "G Reis, EA dos Santos Moreira-Silva, DCM Silva, L Thabane, G Milagres, AC Ferreira, CQ dos Santos, VEG de Souza Campos, AM Nogueira, APM de Almeida, EDS Callegari, ADF de Figueiredo Neto, JI Forrest, H Ruton, L Sprague, P McKenzie, C Guo, EJ Mills, ...",
    year: 2022,
    journal: "The Lancet Global Health",
    imageUrl:
      "/pdf/thumbnails/09cac00cfff89f0239e1f9a7e384436ec175.png",
    aiHint: "clinical trial COVID-19 treatment",
    pdfUrl:
      "/pdf/effect-of-early-treatment-with-fluvoxamine-on-risk-of-emergency-care-and-hospitalisation-among-patients-with-covid-19.pdf",
    fullTextUrl:
      "https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(21)00448-4/fulltext",
    abstract:
      "Recent evidence indicates a potential therapeutic role of fluvoxamine for COVID-19. In the TOGETHER trial for acutely symptomatic patients with COVID-19, we aimed to evaluate the effectiveness of fluvoxamine in preventing hospitalisation or extended observation in an emergency setting among high-risk outpatients with early COVID-19 symptoms.",
    cites: 415,
    citesPerYear: 138.33,
    slug: createSlug(
      "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19",
    ),
    tags: extractTags(
      "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19",
      "The Lancet Global Health",
    ),
  },
  {
    id: 2,
    title:
      "Effect of early treatment with ivermectin among patients with Covid-19",
    authors:
      "G Reis, EASM Silva, DCM Silva, L Thabane, AC Ferreira, CQ dos Santos, VEG de Souza Campos, AM Nogueira, APM de Almeida, JI Forrest, H Ruton, L Sprague, C Guo, D Martin-Loeches, PJN Thabane, A Milagres, LSA Cyr, EJ Mills, ...",
    year: 2022,
    journal: "New England Journal of Medicine",
    imageUrl:
      "/pdf/thumbnails/1-s2.0-S0002916524005884-main.png",
    aiHint: "randomized clinical trial ivermectin COVID-19",
    pdfUrl:
      "/pdf/effect-of-early-treatment-with-ivermectin-among-patients-with-covid-19.pdf",
    fullTextUrl: "https://www.nejm.org/doi/pdf/10.1056/nejmoa2115869",
    doi: "10.1056/NEJMoa2115869",
    abstract:
      "The efficacy of ivermectin in preventing hospitalization or extended observation in an emergency setting among outpatients with acutely symptomatic coronavirus disease 2019 (Covid-19) is unclear.",
    cites: 264,
    citesPerYear: 88,
    slug: createSlug(
      "Effect of early treatment with ivermectin among patients with Covid-19",
    ),
    tags: extractTags(
      "Effect of early treatment with ivermectin among patients with Covid-19",
      "New England Journal of Medicine",
    ),
  },
  {
    id: 3,
    title:
      "Validating a shortened depression scale (10 item CES-D) among HIV-positive people in British Columbia, Canada",
    authors:
      "W Zhang, N O'Brien, JI Forrest, KA Salters, RP Patterson, AE Montaner, RS Hogg, V Lima",
    year: 2012,
    journal: "PLoS One",
    imageUrl:
      "/pdf/thumbnails/11524_2016_Article_32.png",
    aiHint: "HIV mental health depression screening",
    pdfUrl:
      "/pdf/validating-a-shortened-depression-scale-10-item-ces-d-among-hiv-positive-people-in-british-columbia-canada.pdf",
    abstract:
      "To establish the reliability and validity of a shortened (10-item) depression scale used among HIV-positive patients enrolled in the Drug Treatment Program in British Columbia, Canada.",
    cites: 686,
    citesPerYear: 52.77,
    slug: createSlug(
      "Validating a shortened depression scale (10 item CES-D) among HIV-positive people in British Columbia, Canada",
    ),
    tags: extractTags(
      "Validating a shortened depression scale among HIV-positive people",
      "PLoS One",
    ),
  },
  {
    id: 4,
    title:
      "Interventions to improve adherence to antiretroviral therapy: a systematic review and network meta-analysis",
    authors:
      "S Kanters, JJH Park, K Chan, ME Socias, N Ford, JI Forrest, M Thorlund, EJ Nachega, EJ Mills",
    year: 2017,
    journal: "The Lancet HIV",
    imageUrl:
      "/pdf/thumbnails/1471-2458-14-1132.png",
    aiHint: "HIV treatment adherence systematic review",
    pdfUrl:
      "/pdf/interventions-to-improve-adherence-to-antiretroviral-therapy-a-systematic-review-and-network-meta-analysis.pdf",
    fullTextUrl:
      "https://www.thelancet.com/pdfs/journals/lanhiv/PIIS2352-3018(16)30206-5.pdf",
    abstract:
      "High adherence to antiretroviral therapy is crucial to the success of HIV treatment. We evaluated comparative effectiveness of adherence interventions with the aim of informing evidence-based treatment guidelines.",
    cites: 303,
    citesPerYear: 37.88,
    slug: createSlug(
      "Interventions to improve adherence to antiretroviral therapy: a systematic review and network meta-analysis",
    ),
    tags: extractTags(
      "Interventions to improve adherence to antiretroviral therapy",
      "The Lancet HIV",
    ),
  },
  {
    id: 5,
    title: "A real-time dashboard of clinical trials for COVID-19",
    authors: "K Thorlund, L Dron, J Park, G Hsu, JI Forrest, EJ Mills",
    year: 2020,
    journal: "The Lancet Digital Health",
    imageUrl:
      "/pdf/thumbnails/1745-6215-15-467.png",
    aiHint: "COVID-19 clinical trials dashboard digital health",
    pdfUrl: "/pdf/a-real-time-dashboard-of-clinical-trials-for-covid-19.pdf",
    abstract:
      "In response to the global coronavirus disease 2019 (COVID-19) emergency, clinical trial research assessing the efficacy and safety of clinical candidate interventions to treat COVID-19 has been accelerated worldwide.",
    cites: 261,
    citesPerYear: 52.2,
    slug: createSlug("A real-time dashboard of clinical trials for COVID-19"),
    tags: extractTags(
      "A real-time dashboard of clinical trials for COVID-19",
      "The Lancet Digital Health",
    ),
  },
  {
    id: 6,
    title: "Early treatment with pegylated interferon lambda for Covid-19",
    authors:
      "G Reis, EAS Moreira Silva, DCM Silva, L Thabane, G Milagres, AC Ferreira, VEG dos Santos, CQ dos Santos, AM Nogueira, APM de Almeida, EDS Callegari, ADF de Figueiredo Neto, JI Forrest, H Ruton, L Sprague, P McKenzie, C Guo, EJ Mills, ...",
    year: 2023,
    journal: "New England Journal of Medicine",
    imageUrl:
      "/pdf/thumbnails/20220803172223_62ea92afa0dbb.png",
    aiHint: "COVID-19 interferon lambda treatment",
    pdfUrl:
      "/pdf/early-treatment-with-pegylated-interferon-lambda-for-covid-19.pdf",
    doi: "10.1056/NEJMoa2209760",
    abstract:
      "The efficacy of a single dose of pegylated interferon lambda in preventing clinical events among outpatients with acute symptomatic coronavirus disease 2019 (Covid-19) is unclear.",
    cites: 174,
    citesPerYear: 87,
    slug: createSlug(
      "Early treatment with pegylated interferon lambda for Covid-19",
    ),
    tags: extractTags(
      "Early treatment with pegylated interferon lambda for Covid-19",
      "New England Journal of Medicine",
    ),
  },
  {
    id: 7,
    title:
      "HIV care continuum in Rwanda: a cross-sectional analysis of the national programme",
    authors:
      "S Nsanzimana, S Kanters, E Remera, JI Forrest, M Binagwaho, E Condo, VS Uwimana, M Rwigamba, B Uwinkindi, M Karema, N Ford, EJ Mills",
    year: 2015,
    journal: "The Lancet HIV",
    imageUrl:
      "/pdf/thumbnails/6fc32fcc07dc0e858c9dac0815b898ade7b0.png",
    aiHint: "HIV care continuum Rwanda health systems",
    pdfUrl:
      "/pdf/hiv-care-continuum-in-rwanda-a-cross-sectional-analysis-of-the-national-programme.pdf",
    abstract:
      "Rwanda has made remarkable progress towards HIV care programme with strong national monitoring and surveillance. Knowledge about the HIV care continuum is essential for programme monitoring and identifying gaps in service delivery.",
    cites: 65,
    citesPerYear: 6.5,
    slug: createSlug(
      "HIV care continuum in Rwanda: a cross-sectional analysis of the national programme",
    ),
    tags: extractTags("HIV care continuum in Rwanda", "The Lancet HIV"),
  },
  {
    id: 8,
    title: "Mobile health applications for HIV prevention and care in Africa",
    authors: "JI Forrest, M Wiens, S Kanters, B Nsanzimana, S Lester, EJ Mills",
    year: 2015,
    journal: "Current Opinion in HIV and AIDS",
    imageUrl:
      "/pdf/thumbnails/A_latent_class_analysis_of_sex.png",
    aiHint: "mobile health mHealth HIV Africa digital",
    pdfUrl:
      "/pdf/mobile-health-applications-for-hiv-prevention-and-care-in-africa.pdf",
    abstract:
      "The potential for m-health in Africa is numerous and should not be limited only to direct patient-care focused applications. Although the use of smart phone technology is on the rise in Africa, the majority of the population still relies on more basic mobile phone technology.",
    cites: 82,
    citesPerYear: 8.2,
    slug: createSlug(
      "Mobile health applications for HIV prevention and care in Africa",
    ),
    tags: extractTags(
      "Mobile health applications for HIV prevention and care in Africa",
      "Current Opinion in HIV and AIDS",
    ),
  },
];
