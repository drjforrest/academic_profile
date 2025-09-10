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
    title: "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19: the TOGETHER randomised, platform clinical trial",
    authors: "G Reis, EA dos Santos Moreira-Silva, DCM Silva, L Thabane, G Milagres, AC Ferreira, CQ dos Santos, VEG de Souza Campos, AM Nogueira, APM de Almeida, EDS Callegari, ADF de Figueiredo Neto, JI Forrest, H Ruton, L Sprague, P McKenzie, C Guo, EJ Mills, ...",
    year: 2022,
    journal: "The Lancet Global Health",
    imageUrl: "/pdf/thumbnails/00001PDF.png",
    aiHint: "clinical trial COVID-19 treatment",
    pdfUrl: "/pdf/00001PDF.pdf",
    fullTextUrl: "https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(21)00448-4/fulltext",
    abstract: "Recent evidence indicates a potential therapeutic role of fluvoxamine for COVID-19. In the TOGETHER trial for acutely symptomatic patients with COVID-19, we aimed to evaluate the effectiveness of fluvoxamine in preventing hospitalisation or extended observation in an emergency setting among high-risk outpatients with early COVID-19 symptoms.",
    cites: 415,
    citesPerYear: 138.33,
    slug: createSlug("Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19"),
    tags: extractTags("Effect of early treatment with fluvoxamine on risk of emergency care and hospitalisation among patients with COVID-19", "The Lancet Global Health"),
  },
  {
    id: 2,
    title: "Effect of early treatment with ivermectin among patients with Covid-19",
    authors: "G Reis, EASM Silva, DCM Silva, L Thabane, AC Ferreira, VE Souza-Campos, AM Nogueira, APM de Almeida, EDS Callegari, AD de Figueiredo Neto, L Sprague, P McKenzie, O Harari, K Thorlund, EJ Mills, JI Forrest, ...",
    year: 2022,
    journal: "New England Journal of Medicine",
    imageUrl: "/pdf/thumbnails/00002PDF.png",
    aiHint: "randomized clinical trial ivermectin COVID-19",
    pdfUrl: "/pdf/00002PDF.pdf",
    fullTextUrl: "https://www.nejm.org/doi/pdf/10.1056/nejmoa2115869",
    doi: "10.1056/NEJMoa2115869",
    abstract: "The efficacy of ivermectin in preventing hospitalization or extended observation in an emergency setting among outpatients with acutely symptomatic coronavirus disease 2019 (Covid-19) is unclear.",
    cites: 264,
    citesPerYear: 88,
    slug: createSlug("Effect of early treatment with ivermectin among patients with Covid-19"),
    tags: extractTags("Effect of early treatment with ivermectin among patients with Covid-19", "New England Journal of Medicine"),
  },
  {
    id: 3,
    title: "Validating a shortened depression scale (10 item CES-D) among HIV-positive people in British Columbia, Canada",
    authors: "W Zhang, N O'Brien, JI Forrest, KA Salters, TL Patterson, JS Montaner, RS Hogg, VD Lima",
    year: 2012,
    journal: "PLoS One",
    imageUrl: "/pdf/thumbnails/00003PDF.png",
    aiHint: "HIV mental health depression screening",
    pdfUrl: "/pdf/00003PDF.pdf",
    abstract: "To establish the reliability and validity of a shortened (10-item) depression scale used among HIV-positive patients enrolled in the Drug Treatment Program in British Columbia, Canada.",
    cites: 686,
    citesPerYear: 52.77,
    slug: createSlug("Validating a shortened depression scale (10 item CES-D) among HIV-positive people in British Columbia, Canada"),
    tags: extractTags("Validating a shortened depression scale (10 item CES-D) among HIV-positive people in British Columbia, Canada", "PLoS One"),
  },
  {
    id: 4,
    title: "Interventions to improve adherence to antiretroviral therapy: a systematic review and network meta-analysis",
    authors: "S Kanters, JJH Park, K Chan, ME Socias, N Ford, JI Forrest, K Thorlund, J Nachega, EJ Mills",
    year: 2017,
    journal: "The Lancet HIV",
    imageUrl: "/pdf/thumbnails/00004PDF.png",
    aiHint: "HIV treatment adherence systematic review",
    pdfUrl: "/pdf/00004PDF.pdf",
    fullTextUrl: "https://www.thelancet.com/pdfs/journals/lanhiv/PIIS2352-3018(16)30206-5.pdf",
    abstract: "High adherence to antiretroviral therapy is crucial to the success of HIV treatment. We evaluated comparative effectiveness of adherence interventions with the aim of informing evidence-based treatment guidelines.",
    cites: 303,
    citesPerYear: 37.88,
    slug: createSlug("Interventions to improve adherence to antiretroviral therapy: a systematic review and network meta-analysis"),
    tags: extractTags("Interventions to improve adherence to antiretroviral therapy: a systematic review and network meta-analysis", "The Lancet HIV"),
  },
  {
    id: 5,
    title: "A real-time dashboard of clinical trials for COVID-19",
    authors: "K Thorlund, L Dron, J Park, G Hsu, JI Forrest, EJ Mills",
    year: 2020,
    journal: "The Lancet Digital Health",
    imageUrl: "/pdf/thumbnails/00005PDF.png",
    aiHint: "COVID-19 clinical trials dashboard digital health",
    pdfUrl: "/pdf/00005PDF.pdf",
    abstract: "In response to the global coronavirus disease 2019 (COVID-19) emergency, clinical trial research assessing the efficacy and safety of clinical candidate interventions to treat COVID-19 has been accelerated worldwide.",
    cites: 261,
    citesPerYear: 52.2,
    slug: createSlug("A real-time dashboard of clinical trials for COVID-19"),
    tags: extractTags("A real-time dashboard of clinical trials for COVID-19", "The Lancet Digital Health"),
  },
  {
    id: 6,
    title: "Early treatment with pegylated interferon lambda for Covid-19",
    authors: "G Reis, EAS Moreira Silva, KCM Silva, LJ Thabane, AC Ferreira, VEG de Souza-Campos, AP de Almeida, A Nogueira, EDS Callegari, AD de Figueiredo Neto, PS Menezes de Sá, KK Shinjo, G Keepanasseril, S Shuaib, JI Forrest, JH Park, CS Wiens, CM Guo, K Thorlund, EJ Mills, ...",
    year: 2023,
    journal: "New England Journal of Medicine",
    imageUrl: "/pdf/thumbnails/00006PDF.png",
    aiHint: "COVID-19 interferon lambda treatment",
    pdfUrl: "/pdf/00006PDF.pdf",
    doi: "10.1056/NEJMoa2209760",
    abstract: "The efficacy of a single dose of pegylated interferon lambda in preventing clinical events among outpatients with acute symptomatic coronavirus disease 2019 (Covid-19) is unclear.",
    cites: 174,
    citesPerYear: 87,
    slug: createSlug("Early treatment with pegylated interferon lambda for Covid-19"),
    tags: extractTags("Early treatment with pegylated interferon lambda for Covid-19", "New England Journal of Medicine"),
  },
  {
    id: 7,
    title: "HIV care continuum in Rwanda: a cross-sectional analysis of the national programme",
    authors: "S Nsanzimana, S Kanters, E Remera, JI Forrest, A Binagwaho, J Condo, EJ Mills",
    year: 2015,
    journal: "The Lancet HIV",
    imageUrl: "/pdf/thumbnails/00007PDF.png",
    aiHint: "HIV care continuum Rwanda health systems",
    pdfUrl: "/pdf/00007PDF.pdf",
    abstract: "Rwanda has made remarkable progress towards HIV care programme with strong national monitoring and surveillance. Knowledge about the HIV care continuum is essential for programme monitoring and identifying gaps in service delivery.",
    cites: 65,
    citesPerYear: 6.5,
    slug: createSlug("HIV care continuum in Rwanda: a cross-sectional analysis of the national programme"),
    tags: extractTags("HIV care continuum in Rwanda: a cross-sectional analysis of the national programme", "The Lancet HIV"),
  },
  {
    id: 8,
    title: "Mobile health applications for HIV prevention and care in Africa",
    authors: "JI Forrest, M Wiens, S Kanters, S Nsanzimana, KR Lester, EJ Mills",
    year: 2015,
    journal: "Current Opinion in HIV and AIDS",
    imageUrl: "/pdf/thumbnails/00008PDF.png",
    aiHint: "mobile health mHealth HIV Africa digital",
    pdfUrl: "/pdf/00008PDF.pdf",
    abstract: "The potential for m-health in Africa is numerous and should not be limited only to direct patient-care focused applications. Although the use of smart phone technology is on the rise in Africa, the majority of the population still relies on more basic mobile phone technology.",
    cites: 82,
    citesPerYear: 8.2,
    slug: createSlug("Mobile health applications for HIV prevention and care in Africa"),
    tags: extractTags("Mobile health applications for HIV prevention and care in Africa", "Current Opinion in HIV and AIDS"),
  },
  {
    id: 9,
    title: "Women and vulnerability to HAART non-adherence: a literature review of treatment adherence by gender from 2000 to 2011",
    authors: "CM Puskas, JI Forrest, S Parashar, KA Salters, AM Cescon, KA Kaida, EJ Mills, RS Hogg",
    year: 2011,
    journal: "Current HIV/AIDS Reports",
    imageUrl: "/pdf/thumbnails/00009PDF.png",
    aiHint: "HIV treatment adherence gender disparities",
    pdfUrl: "/pdf/00009PDF.pdf",
    doi: "10.1007/s11904-011-0098-0",
    abstract: "A literature review of original research articles on adherence to antiretroviral therapy (ART) in developed countries, covering January 2000 to June 2011, was conducted to determine if gender differences in adherence exist.",
    cites: 211,
    citesPerYear: 15.07,
    slug: createSlug("Women and vulnerability to HAART non-adherence: a literature review of treatment adherence by gender from 2000 to 2011"),
    tags: extractTags("Women and vulnerability to HAART non-adherence: a literature review of treatment adherence by gender from 2000 to 2011", "Current HIV/AIDS Reports"),
  },
  {
    id: 10,
    title: "Comparative efficacy and safety of first-line antiretroviral therapy for the treatment of HIV infection: a systematic review and network meta-analysis",
    authors: "S Kanters, M Vitoria, M Doherty, ME Socias, N Ford, JI Forrest, K Popoff, I Bansback, O Nsanzimana, K Thorlund, EJ Mills",
    year: 2016,
    journal: "The Lancet HIV",
    imageUrl: "/pdf/thumbnails/00010PDF.png",
    aiHint: "HIV antiretroviral therapy meta-analysis",
    pdfUrl: "/pdf/00010PDF.pdf",
    abstract: "New antiretroviral therapy (ART) regimens for HIV could improve clinical outcomes for patients. To inform global guidelines, we aimed to assess the comparative effectiveness of recommended ART regimens for adults with HIV.",
    cites: 257,
    citesPerYear: 28.56,
    slug: createSlug("Comparative efficacy and safety of first-line antiretroviral therapy for the treatment of HIV infection: a systematic review and network meta-analysis"),
    tags: extractTags("Comparative efficacy and safety of first-line antiretroviral therapy for the treatment of HIV infection: a systematic review and network meta-analysis", "The Lancet HIV"),
  },
  {
    id: 11,
    title: "Effect of early treatment with hydroxychloroquine or lopinavir and ritonavir on risk of hospitalization among patients with COVID-19: the TOGETHER randomized clinical trial",
    authors: "G Reis, EASM Silva, DCM Silva, L Thabane, AC Ferreira, VEG Souza-Campos, AM Nogueira, APM Almeida, EDS Callegari, ADF Figueiredo-Neto, L Sprague, H Hendrickson, JI Forrest, P McKenzie, AA Gordon, K Thorlund, EJ Mills",
    year: 2021,
    journal: "JAMA Network Open",
    imageUrl: "/pdf/thumbnails/00011PDF.png",
    aiHint: "hydroxychloroquine COVID-19 clinical trial",
    pdfUrl: "/pdf/00011PDF.pdf",
    abstract: "Importance: Data on the efficacy of hydroxychloroquine or lopinavir-ritonavir for the treatment of high-risk outpatients with COVID-19 in developing countries are needed. Objective: To determine whether hydroxychloroquine or lopinavir-ritonavir reduces hospitalization among high-risk patients with early symptomatic COVID-19 in an outpatient setting.",
    cites: 165,
    citesPerYear: 41.25,
    slug: createSlug("Effect of early treatment with hydroxychloroquine or lopinavir and ritonavir on risk of hospitalization among patients with COVID-19"),
    tags: extractTags("Effect of early treatment with hydroxychloroquine or lopinavir and ritonavir on risk of hospitalization among patients with COVID-19", "JAMA Network Open"),
  },
  {
    id: 12,
    title: "Life expectancy among HIV-positive patients in Rwanda: a retrospective observational cohort study",
    authors: "S Nsanzimana, E Remera, S Kanters, K Chan, JI Forrest, N Ford, J Condo, A Binagwaho, EJ Mills",
    year: 2015,
    journal: "The Lancet Global Health",
    imageUrl: "/pdf/thumbnails/00012PDF.png",
    aiHint: "HIV life expectancy Rwanda",
    pdfUrl: "/pdf/00012PDF.pdf",
    abstract: "Rwanda has achieved substantial progress in scaling up of antiretroviral therapy. We aimed to assess the effect of increased access to antiretroviral therapy on life expectancy among HIV-positive patients in two distinct periods: 2003–07, during which access to antiretroviral therapy was rapidly scaled up, and 2008–12, during which access to antiretroviral therapy remained widespread.",
    cites: 144,
    citesPerYear: 14.4,
    slug: createSlug("Life expectancy among HIV-positive patients in Rwanda: a retrospective observational cohort study"),
    tags: extractTags("Life expectancy among HIV-positive patients in Rwanda: a retrospective observational cohort study", "The Lancet Global Health"),
  },
  {
    id: 13,
    title: "Effect of early treatment with metformin on risk of emergency care and hospitalization among patients with COVID-19: The TOGETHER randomized platform clinical trial",
    authors: "G Reis, EASM Silva, DCM Silva, L Thabane, AC Ferreira, VEG Souza-Campos, AM Nogueira, APM de Almeida, EDS Callegari, ADF de Figueiredo-Neto, L Sprague, H Hendrickson, JI Forrest, P McKenzie, K Thorlund, EJ Mills",
    year: 2022,
    journal: "The Lancet Regional Health - Americas",
    imageUrl: "/pdf/thumbnails/00013PDF.png",
    aiHint: "metformin COVID-19 clinical trial",
    pdfUrl: "/pdf/00013PDF.pdf",
    abstract: "Observational studies have postulated a therapeutic role of metformin in treating COVID-19. We conducted an adaptive platform clinical trial to determine whether metformin is efficacious in preventing COVID-19 related hospitalization or death.",
    cites: 63,
    citesPerYear: 21,
    slug: createSlug("Effect of early treatment with metformin on risk of emergency care and hospitalization among patients with COVID-19"),
    tags: extractTags("Effect of early treatment with metformin on risk of emergency care and hospitalization among patients with COVID-19", "The Lancet Regional Health"),
  },
  {
    id: 14,
    title: "Association between Internet use and body dissatisfaction among young females: Cross-sectional analysis of the Canadian Community Health Survey",
    authors: "A Carter, JI Forrest, A Kaida",
    year: 2017,
    journal: "Journal of Medical Internet Research",
    imageUrl: "/pdf/thumbnails/00014PDF.png",
    aiHint: "Internet use body image young women",
    pdfUrl: "/pdf/00014PDF.pdf",
    abstract: "Background Recent research suggests Internet exposure, including Facebook use, is positively correlated with body dissatisfaction, especially among girls and young women. Canada has one of the highest Internet access rates in the world, yet no previous research has examined this relationship in a Canadian population. Objective Our objective was to evaluate the relationship between Internet use and body dissatisfaction among a national sample of Canadian females 12-29 years of age.",
    cites: 58,
    citesPerYear: 7.25,
    slug: createSlug("Association between Internet use and body dissatisfaction among young females"),
    tags: extractTags("Association between Internet use and body dissatisfaction among young females", "Journal of Medical Internet Research"),
  },
  {
    id: 15,
    title: "Including online-recruited seeds: a respondent-driven sample of men who have sex with men",
    authors: "NJ Lachowsky, A Lal, JI Forrest, KG Card, Z Cui, P Sereda, A Rich, HF Raymond, D Moore, RS Hogg, EA Roth",
    year: 2016,
    journal: "Journal of Medical Internet Research",
    imageUrl: "/pdf/thumbnails/00015PDF.png",
    aiHint: "respondent-driven sampling MSM methodology",
    pdfUrl: "/pdf/00015PDF.pdf",
    abstract: "Technology has changed the way men who have sex with men (MSM) seek sex and socialize, which may impact the implementation of respondent-driven sampling (RDS) among this population.",
    cites: 57,
    citesPerYear: 6.33,
    slug: createSlug("Including online-recruited seeds: a respondent-driven sample of men who have sex with men"),
    tags: extractTags("Including online-recruited seeds: a respondent-driven sample of men who have sex with men", "Journal of Medical Internet Research"),
  },
  {
    id: 16,
    title: "Improving health outcomes through concurrent HIV program scale-up and health system development in Rwanda: 20 years of experience",
    authors: "S Nsanzimana, K Prabhu, H McDermott, E Karita, JI Forrest, P Drobac, P Farmer, EJ Mills, A Binagwaho",
    year: 2015,
    journal: "BMC Medicine",
    imageUrl: "/pdf/thumbnails/00016PDF.png",
    aiHint: "HIV health system strengthening Rwanda",
    pdfUrl: "/pdf/00016PDF.pdf",
    doi: "10.1186/s12916-015-0443-z",
    abstract: "The 1994 genocide against the Tutsi destroyed the health system in Rwanda. It is impressive that a small country like Rwanda has advanced its health system to the point of now offering near universal health insurance coverage.",
    cites: 60,
    citesPerYear: 6,
    slug: createSlug("Improving health outcomes through concurrent HIV program scale-up and health system development in Rwanda: 20 years of experience"),
    tags: extractTags("Improving health outcomes through concurrent HIV program scale-up and health system development in Rwanda: 20 years of experience", "BMC Medicine"),
  },
  {
    id: 17,
    title: "Trends and level of control of hypertension among adults attending an ambulatory HIV clinic in Kampala, Uganda: a retrospective study",
    authors: "R Kalyesubula, A Kayongo, FC Semitala, A Muhindo, N Adengo, A Kintu, HS Katalemwa, JI Forrest, JS Castelnuovo, YC Manabe",
    year: 2016,
    journal: "BMJ Global Health",
    imageUrl: "/pdf/thumbnails/00017PDF.png",
    aiHint: "hypertension HIV comorbidity Uganda",
    pdfUrl: "/pdf/00017PDF.pdf",
    abstract: "Background With an ageing HIV-positive population, sub-Saharan Africa is now facing a dual epidemic of communicable and non-communicable diseases (NCDs). This study aimed to determine the prevalence, trends and level of control of hypertension among adults attending an ambulatory HIV clinic in Kampala, Uganda.",
    cites: 51,
    citesPerYear: 5.67,
    slug: createSlug("Trends and level of control of hypertension among adults attending an ambulatory HIV clinic in Kampala, Uganda"),
    tags: extractTags("Trends and level of control of hypertension among adults attending an ambulatory HIV clinic in Kampala, Uganda", "BMJ Global Health"),
  },
  {
    id: 18,
    title: "Thinking upstream: the roles of international health and drug policies in public health responses to chemsex",
    authors: "O Stevens, JI Forrest",
    year: 2018,
    journal: "Sexual Health",
    imageUrl: "/pdf/thumbnails/00018PDF.png",
    aiHint: "Chemsex public health policy",
    pdfUrl: "/pdf/00018PDF.pdf",
    abstract: "Chemsex is a growing public health concern in urban centres, and few interventions exist to mitigate the significant sexual, drug-related, and social harms potentially experienced by people who participate in chemsex.",
    cites: 28,
    citesPerYear: 4,
    slug: createSlug("Thinking upstream: the roles of international health and drug policies in public health responses to chemsex"),
    tags: extractTags("Thinking upstream: the roles of international health and drug policies in public health responses to chemsex", "Sexual Health"),
  },
  {
    id: 19,
    title: "An event-level analysis of the interpersonal factors associated with condomless anal sex among gay, bisexual, and other men who have sex with men (MSM) with online-met partners",
    authors: "KG Card, NJ Lachowsky, Z Cui, S Shurgold, F Gislason, JI Forrest, RS Hogg, DM Moore",
    year: 2017,
    journal: "AIDS Education and Prevention",
    imageUrl: "/pdf/thumbnails/00019PDF.png",
    aiHint: "MSM sexual behavior online partners",
    pdfUrl: "/pdf/00019PDF.pdf",
    doi: "10.1521/aeap.2017.29.2.154",
    abstract: "The interpersonal determinants of condomless anal sex (CAS) within online-initiated sexual relationships remain poorly understood. Therefore, respondent-driven sampling was used to recruit 774 gay, bisexual, and other men who have sex with men (MSM) for a computer-administered survey regarding their most recent online-initiated sexual encounters.",
    cites: 31,
    citesPerYear: 3.88,
    slug: createSlug("An event-level analysis of the interpersonal factors associated with condomless anal sex among gay, bisexual, and other men who have sex with men with online-met partners"),
    tags: extractTags("An event-level analysis of the interpersonal factors associated with condomless anal sex among gay, bisexual, and other men who have sex with men with online-met partners", "AIDS Education and Prevention"),
  },
  {
    id: 20,
    title: "Impact of implementing performance-based financing on childhood malnutrition in Rwanda",
    authors: "A Binagwaho, J Condo, C Wagner, F Ngabo, C Karema, S Kanters, JI Forrest, J De Dieu Bizimana, A Farmer, P Drobac",
    year: 2014,
    journal: "BMC Public Health",
    imageUrl: "/pdf/thumbnails/00020PDF.png",
    aiHint: "performance-based financing malnutrition Rwanda",
    pdfUrl: "/pdf/00020PDF.pdf",
    doi: "10.1186/1471-2458-14-1132",
    abstract: "Malnutrition remains a serious concern in Rwanda, particularly among children under-5 years. Performance-based financing (PBF), an innovative health systems financing strategy, has been implemented in Rwanda since 2009. The aim of this study was to evaluate the impact of PBF and other factors associated with the prevalence of three key indicators of childhood malnutrition in Rwanda, namely wasting, underweight and stunting.",
    cites: 39,
    citesPerYear: 3.55,
    slug: createSlug("Impact of implementing performance-based financing on childhood malnutrition in Rwanda"),
    tags: extractTags("Impact of implementing performance-based financing on childhood malnutrition in Rwanda", "BMC Public Health"),
  },
];
