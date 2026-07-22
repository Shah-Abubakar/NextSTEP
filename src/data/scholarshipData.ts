
export interface Scholarship {
  id: string;
  name: string;
  organization: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  description: string;
  applicationUrl: string;
  category: ScholarshipCategory;
  country: string;
  featured?: boolean;
}

export type ScholarshipCategory = 
  | "undergraduate" 
  | "postgraduate" 
  | "research" 
  | "merit" 
  | "need-based" 
  | "international" 
  | "women" 
  | "minority" 
  | "stem" 
  | "arts" 
  | "sports";

export const scholarships: Scholarship[] = [
  {
    id: "gates-millennium",
    name: "Gates Millennium Scholars Program",
    organization: "Bill & Melinda Gates Foundation",
    amount: "Full cost of attendance",
    deadline: "January 15, 2026",
    eligibility: [
      "US citizen, permanent resident, or foreign national",
      "GPA of 3.3 or higher",
      "Demonstrated leadership abilities",
      "Demonstrated financial need",
      "Meet Federal Pell Grant eligibility criteria"
    ],
    description: "The Gates Millennium Scholars Program selects 300 students each year to receive a good-through-graduation scholarship to use at any college or university of their choice, along with personal and professional development through leadership programs.",
    applicationUrl: "https://www.gmsp.org/",
    category: "undergraduate",
    country: "USA",
    featured: true
  },
  {
    id: "fulbright",
    name: "Fulbright Foreign Student Program",
    organization: "U.S. Department of State",
    amount: "Full tuition, living stipend, airfare and health insurance",
    deadline: "Varies by country",
    eligibility: [
      "Non-US citizen",
      "Bachelor's degree or equivalent",
      "Excellent academic record",
      "English language proficiency",
      "Country-specific requirements"
    ],
    description: "The Fulbright Program offers grants to graduate students for study and research abroad. The program facilitates cultural exchange through direct interaction between individuals.",
    applicationUrl: "https://foreign.fulbrightonline.org/",
    category: "postgraduate",
    country: "International",
    featured: true
  },
  {
    id: "chevening",
    name: "Chevening Scholarship",
    organization: "UK Government",
    amount: "Full tuition, living expenses, return flights, and other allowances",
    deadline: "November 2, 2025",
    eligibility: [
      "Citizen of a Chevening-eligible country",
      "Return to home country for minimum 2 years after scholarship",
      "2+ years work experience",
      "Bachelor's degree",
      "Meet English language requirements"
    ],
    description: "Chevening is the UK government's international scholarships program aimed at developing global leaders. Funded by the Foreign, Commonwealth and Development Office and partner organizations.",
    applicationUrl: "https://www.chevening.org/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "commonwealth",
    name: "Commonwealth Scholarship",
    organization: "Commonwealth Scholarship Commission",
    amount: "Tuition fees, living allowance, airfare, and other allowances",
    deadline: "October 18, 2025",
    eligibility: [
      "Citizen of a Commonwealth country",
      "Permanent resident in a Commonwealth country",
      "Available to return to home country after scholarship",
      "Hold a first degree of at least upper second class (2:1) honors standard"
    ],
    description: "Commonwealth Scholarships enable talented and motivated individuals to gain the knowledge and skills required for sustainable development, and are offered to citizens from low and middle income Commonwealth countries.",
    applicationUrl: "https://cscuk.fcdo.gov.uk/scholarships/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "erasmus-mundus",
    name: "Erasmus Mundus Joint Master Degree Scholarships",
    organization: "European Commission",
    amount: "€1,400 per month plus tuition and travel",
    deadline: "Varies by program",
    eligibility: [
      "Bachelor degree or equivalent",
      "Must not have resided in the program country for more than 12 months in the last 5 years",
      "Language proficiency",
      "Program-specific requirements"
    ],
    description: "Erasmus Mundus Joint Master Degrees are prestigious, integrated, international study programs delivered by a consortium of higher education institutions that award full degree scholarships to the best student candidates worldwide.",
    applicationUrl: "https://erasmus-plus.ec.europa.eu/",
    category: "postgraduate",
    country: "Europe",
    featured: false
  },
  {
    id: "daad",
    name: "DAAD Scholarships",
    organization: "German Academic Exchange Service",
    amount: "€850-1,200 monthly, plus additional allowances",
    deadline: "Varies by program",
    eligibility: [
      "Bachelor's degree (for Master's scholarships)",
      "Master's degree (for PhD scholarships)",
      "Excellent academic record",
      "Language proficiency in German or English depending on program",
      "Maximum age depends on specific program"
    ],
    description: "The German Academic Exchange Service (DAAD) offers scholarships for international students to study in Germany at various academic levels and in various fields.",
    applicationUrl: "https://www.daad.de/en/",
    category: "international",
    country: "Germany",
    featured: false
  },
  {
    id: "rhodes",
    name: "Rhodes Scholarship",
    organization: "Rhodes Trust",
    amount: "Full tuition and stipend for Oxford University",
    deadline: "Varies by country, typically August-October",
    eligibility: [
      "Citizen of an eligible Rhodes constituency",
      "Age 19-25",
      "Bachelor's degree with high academic achievement",
      "Demonstrated leadership potential",
      "Commitment to service"
    ],
    description: "The Rhodes Scholarship is the oldest and perhaps most prestigious international scholarship program, enabling outstanding young people from around the world to study at the University of Oxford.",
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "knight-hennessy",
    name: "Knight-Hennessy Scholars",
    organization: "Stanford University",
    amount: "Full tuition, stipend, and travel for Stanford graduate programs",
    deadline: "October 12, 2025",
    eligibility: [
      "Applying to or enrolled in a Stanford graduate program",
      "Bachelor's degree in 2020 or later for 2026 cohort",
      "Demonstrated independence of thought, leadership, and civic mindset"
    ],
    description: "The Knight-Hennessy Scholars program cultivates a diverse, multidisciplinary community of emerging leaders from around the world and guides them to collaborate, innovate, and communicate as they prepare to address the complex challenges facing society.",
    applicationUrl: "https://knight-hennessy.stanford.edu/",
    category: "postgraduate",
    country: "USA",
    featured: false
  },
  {
    id: "aga-khan",
    name: "Aga Khan Foundation International Scholarship",
    organization: "Aga Khan Foundation",
    amount: "50-100% of costs based on need",
    deadline: "March 31, 2026",
    eligibility: [
      "Citizen of an eligible developing country",
      "Excellent academic record",
      "Admitted to a highly reputable university",
      "Demonstrated financial need",
      "Commitment to development of home country"
    ],
    description: "The Aga Khan Foundation provides scholarships for postgraduate studies to outstanding students from developing countries who have no other means of financing their studies, with the aim of developing effective scholars and leaders.",
    applicationUrl: "https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme",
    category: "postgraduate",
    country: "International",
    featured: false
  },
  {
    id: "schwarzman",
    name: "Schwarzman Scholars",
    organization: "Tsinghua University",
    amount: "Full tuition, room and board, travel, stipend, and more",
    deadline: "September 21, 2025",
    eligibility: [
      "Bachelor's degree or equivalent",
      "Age 18-28",
      "English language proficiency",
      "Demonstrated leadership qualities",
      "Academic excellence"
    ],
    description: "Schwarzman Scholars is a highly selective, one-year master's program at Tsinghua University in Beijing designed to prepare the next generation of global leaders for the challenges of the future.",
    applicationUrl: "https://www.schwarzmanscholars.org/",
    category: "postgraduate",
    country: "China",
    featured: false
  },
  {
    id: "rotary",
    name: "Rotary Peace Fellowship",
    organization: "Rotary Foundation",
    amount: "Full tuition and expenses, including travel",
    deadline: "May 15, 2026",
    eligibility: [
      "Bachelor's degree",
      "3+ years relevant work experience",
      "Proficiency in English, second language recommended",
      "Demonstrated commitment to peace and international understanding"
    ],
    description: "The Rotary Peace Fellowship is a fully funded master's degree or professional development certificate program at premier universities around the world for professionals committed to promoting peace and cooperation.",
    applicationUrl: "https://www.rotary.org/en/our-programs/peace-fellowships",
    category: "postgraduate",
    country: "International",
    featured: false
  },
  {
    id: "joint-japan-world-bank",
    name: "Joint Japan/World Bank Graduate Scholarship Program",
    organization: "World Bank",
    amount: "Full tuition, monthly living stipend, travel expenses, health insurance",
    deadline: "April 30, 2026",
    eligibility: [
      "Citizen of a World Bank member developing country",
      "Bachelor's degree",
      "2+ years of recent development-related work experience",
      "Currently employed in development-related work",
      "Under 45 years of age"
    ],
    description: "The program provides scholarships for graduate studies to individuals from developing countries to help build capacity in their home countries in areas of development, including economics, health, education, and agriculture.",
    applicationUrl: "https://www.worldbank.org/en/programs/scholarships",
    category: "postgraduate",
    country: "International",
    featured: false
  },
  {
    id: "vanier",
    name: "Vanier Canada Graduate Scholarships",
    organization: "Government of Canada",
    amount: "CAD $50,000 per year for three years",
    deadline: "November 2, 2025",
    eligibility: [
      "Pursuing doctoral studies at a Canadian institution",
      "Canadian citizen, permanent resident, or foreign citizen",
      "Outstanding academic achievement (min. 80% average)",
      "Demonstrated leadership skills",
      "Research potential"
    ],
    description: "The Vanier CGS program aims to attract and retain world-class doctoral students and establish Canada as a global center of excellence in research and higher learning.",
    applicationUrl: "https://vanier.gc.ca/en/home-accueil.html",
    category: "research",
    country: "Canada",
    featured: false
  },
  {
    id: "endeavour",
    name: "Endeavour Leadership Program",
    organization: "Australian Government",
    amount: "Tuition, travel, establishment allowance, monthly stipend, health insurance",
    deadline: "October 31, 2025",
    eligibility: [
      "International student from eligible countries",
      "Excellent academic record",
      "Accepted to an Australian educational institution",
      "Not currently receiving an Australian Government scholarship"
    ],
    description: "The Endeavour Leadership Program is the Australian Government's competitive, merit-based scholarship program providing opportunities for Australians to undertake study, research or professional development overseas and for overseas citizens to do the same in Australia.",
    applicationUrl: "https://www.education.gov.au/",
    category: "international",
    country: "Australia",
    featured: false
  },
  {
    id: "clarendon",
    name: "Clarendon Fund Scholarships",
    organization: "University of Oxford",
    amount: "Full tuition and college fees plus annual grant for living expenses",
    deadline: "January deadline of the Oxford course",
    eligibility: [
      "All graduate applicants to Oxford, regardless of nationality",
      "Academic excellence",
      "Competition is based solely on academic merit and research potential"
    ],
    description: "The Clarendon Fund is Oxford University's flagship scholarship scheme, offering around 140 new scholarships each year to academically excellent graduate students from all around the world.",
    applicationUrl: "https://www.ox.ac.uk/clarendon",
    category: "postgraduate",
    country: "UK",
    featured: false
  },
  {
    id: "new-zealand",
    name: "New Zealand International Doctoral Research Scholarships",
    organization: "New Zealand Government",
    amount: "Tuition fees, plus NZ$28,500 annual stipend and health insurance",
    deadline: "July 15, 2026",
    eligibility: [
      "International students (not from New Zealand or Australia)",
      "Excellent academic record",
      "Admission to a PhD program at a New Zealand university",
      "Meet English language requirements"
    ],
    description: "The New Zealand International Doctoral Research Scholarships provide full financial support for international students to pursue PhD study in New Zealand, fostering links with international research institutes and markets.",
    applicationUrl: "https://www.education.govt.nz/",
    category: "research",
    country: "New Zealand",
    featured: false
  },
  {
    id: "make-our-planet-great",
    name: "Make Our Planet Great Again Scholarships",
    organization: "French Government",
    amount: "€1,700 per month plus travel and health insurance",
    deadline: "March 30, 2026",
    eligibility: [
      "Non-French researchers and students",
      "Research or studies in climate change, earth system or energy transition",
      "Master's or PhD level",
      "Excellent academic background"
    ],
    description: "The 'Make Our Planet Great Again' initiative invites researchers, teachers, and students to France to conduct research on combating climate change and preserving the environment.",
    applicationUrl: "https://www.campusfrance.org/en/make-our-planet-great-again-en",
    category: "research",
    country: "France",
    featured: false
  },
  {
    id: "charpak",
    name: "Charpak Scholarship Program",
    organization: "French Embassy in India",
    amount: "€700 per month, plus tuition waiver and other benefits",
    deadline: "April 15, 2026",
    eligibility: [
      "Indian national residing in India",
      "Between 18 and 30 years old",
      "Currently enrolled in an Indian institution",
      "French language proficiency (for some programs)",
      "Accepted by a French institution"
    ],
    description: "The Charpak Scholarship Program facilitates the exchange of students between India and France, offering financial support to Indian students pursuing Master's degrees, research internships, or exchange programs in France.",
    applicationUrl: "https://www.inde.campusfrance.org/charpak-scholarship-program",
    category: "international",
    country: "France",
    featured: false
  },
  {
    id: "great-scholarships",
    name: "GREAT Scholarships",
    organization: "British Council",
    amount: "£10,000 towards tuition fees",
    deadline: "Varies by institution",
    eligibility: [
      "Citizen of eligible countries including India, China, Turkey, Malaysia",
      "Undergraduate or postgraduate student",
      "Accepted to study at a UK university participating in the GREAT Scholarships"
    ],
    description: "The GREAT Scholarships program offers scholarships to students from selected countries who want to study at UK universities across various subjects including business, engineering, law, art and design, and more.",
    applicationUrl: "https://study-uk.britishcouncil.org/scholarships/great-scholarships",
    category: "international",
    country: "UK",
    featured: false
  },
  {
    id: "orange-tulip",
    name: "Orange Tulip Scholarship",
    organization: "Nuffic Neso India",
    amount: "Varies (10-100% tuition fee waiver)",
    deadline: "April 25, 2026",
    eligibility: [
      "Indian nationals",
      "Admitted to participating Dutch higher education institutions",
      "Meet specific requirements set by the offering institution"
    ],
    description: "The Orange Tulip Scholarship program offers scholarships specifically for Indian students who wish to pursue studies in the Netherlands, funded by Dutch higher education institutions and companies.",
    applicationUrl: "https://www.nesoindia.org/scholarships/orange-tulip-scholarship",
    category: "international",
    country: "Netherlands",
    featured: false
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi Scholarships",
    organization: "Indian Embassy, various countries",
    amount: "Monthly stipend plus tuition fees",
    deadline: "July 31, 2026",
    eligibility: [
      "Citizens of countries with Indian diplomatic missions",
      "Excellent academic record",
      "Financial need",
      "Recommendation from local educational institution"
    ],
    description: "Named after Mahatma Gandhi, these scholarships are offered by Indian embassies in various countries to promote cultural understanding and educational exchange between India and other nations.",
    applicationUrl: "https://www.indianembassy.org.in/",
    category: "international",
    country: "India",
    featured: false
  },
  {
    id: "cern-summer",
    name: "CERN Summer Student Programme",
    organization: "European Organization for Nuclear Research",
    amount: "Living allowance, travel, health insurance",
    deadline: "January 31, 2026",
    eligibility: [
      "Undergraduate (3+ years) or graduate student in physics, engineering, computer science",
      "Member or non-Member State nationality",
      "Return to academic institution after the program",
      "Good knowledge of English"
    ],
    description: "The CERN Summer Student Program offers undergraduate and graduate students the opportunity to join in the day-to-day work of research teams in physics, computing, engineering, and mathematics at one of the world's leading research institutions.",
    applicationUrl: "https://careers.cern/summer",
    category: "stem",
    country: "Switzerland",
    featured: false
  },
  {
    id: "national-scholarship-portal",
    name: "National Scholarship Portal (NSP) Schemes",
    organization: "Government of India",
    amount: "₹10,000-₹1,00,000 per year",
    deadline: "October 31, 2025",
    eligibility: [
      "Indian nationals only",
      "Family income below specified limits (varies by scheme)",
      "Minimum 50-60% marks in previous examination",
      "Enrolled in recognized Indian institution",
      "Aadhaar number required"
    ],
    description: "The NSP is the central platform for all Indian government scholarships, offering over 100 schemes for SC/ST/OBC/Minority/General category students at school, undergraduate, and postgraduate levels across India.",
    applicationUrl: "https://scholarships.gov.in/",
    category: "undergraduate",
    country: "India",
    featured: true
  },
  {
    id: "pmsss",
    name: "Prime Minister's Special Scholarship Scheme (PMSSS)",
    organization: "AICTE, Government of India",
    amount: "Full tuition plus ₹7,500-₹12,500 monthly stipend",
    deadline: "September 15, 2025",
    eligibility: [
      "Indian nationals from J&K, Ladakh",
      "Students who passed 12th from J&K or Ladakh board",
      "Family income below ₹8 lakh per annum",
      "Minimum 60% in Class 12"
    ],
    description: "The PMSSS enables students from Jammu & Kashmir and Ladakh to pursue undergraduate/postgraduate studies outside these regions in top Indian institutions, covering full tuition fees and providing a monthly stipend.",
    applicationUrl: "https://www.aims.aicte-india.org/",
    category: "undergraduate",
    country: "India",
    featured: true
  },
  {
    id: "obc-pragati",
    name: "Pragati Scholarship for OBC Students",
    organization: "AICTE, Government of India",
    amount: "₹50,000 per year",
    deadline: "November 30, 2025",
    eligibility: [
      "OBC category Indian students",
      "Family income below ₹2.5 lakh per annum",
      "Enrolled in AICTE-approved technical institution (Diploma/Degree)",
      "Not receiving any other scholarship"
    ],
    description: "AICTE's Pragati Scholarship supports OBC students pursuing technical education (engineering, management, pharmacy) at AICTE-approved institutions, providing financial assistance for tuition and educational expenses.",
    applicationUrl: "https://www.aicte-india.org/bureaus/swanath",
    category: "undergraduate",
    country: "India",
    featured: false
  },
  {
    id: "sitaram-jindal",
    name: "Sitaram Jindal Foundation Scholarships",
    organization: "Sitaram Jindal Foundation",
    amount: "₹500-₹2,500 per month",
    deadline: "January 31, 2026",
    eligibility: [
      "Indian students from Class 1 to professional courses",
      "Family income below ₹2.5 lakh per annum",
      "Minimum 60% marks in previous examination",
      "Not availing any other scholarship benefits"
    ],
    description: "The Sitaram Jindal Foundation offers merit-cum-means scholarships to students across India at every academic level, from primary school to professional degree courses, with preference given to girls and students from rural areas.",
    applicationUrl: "https://www.sitaramjindalfoundation.org/",
    category: "need-based",
    country: "India",
    featured: false
  },
  {
    id: "begum-hazrat",
    name: "Begum Hazrat Mahal National Scholarship",
    organization: "Maulana Azad Education Foundation, Govt of India",
    amount: "₹12,000 per year",
    deadline: "October 15, 2025",
    eligibility: [
      "Girl students from minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)",
      "Class 9-12 students",
      "Family income below ₹2 lakh per annum",
      "Minimum 50% marks in previous class"
    ],
    description: "This centrally sponsored scholarship provides financial support to meritorious girl students from minority communities studying in classes 9-12 in India, helping reduce dropout rates among minority girls.",
    applicationUrl: "https://maef.nic.in/",
    category: "women",
    country: "India",
    featured: false
  },
  {
    id: "inspire-fellowship",
    name: "INSPIRE Fellowship",
    organization: "Department of Science & Technology, Government of India",
    amount: "₹62,000 per month for 5 years",
    deadline: "March 31, 2026",
    eligibility: [
      "Indian nationals",
      "Top 1% in Master's degree (University rank holders)",
      "Age below 32 years",
      "Pursuing PhD in basic or applied sciences",
      "Selected through DST-INSPIRE screening"
    ],
    description: "The INSPIRE Fellowship by DST India offers research fellowships to the top 1% post-graduate science students to pursue doctoral research in basic and applied sciences at recognized Indian institutions.",
    applicationUrl: "https://online-inspire.gov.in/",
    category: "research",
    country: "India",
    featured: true
  },
  {
    id: "kishore-vaigyanik",
    name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    organization: "Indian Institute of Science (IISc), Government of India",
    amount: "₹5,000-₹7,000 monthly fellowship plus contingency grant",
    deadline: "November 1, 2025",
    eligibility: [
      "Indian nationals",
      "Students in Class 11, 12, or first year of UG in basic sciences",
      "Must qualify the KVPY aptitude test",
      "Excellent academic record in science subjects"
    ],
    description: "KVPY is a national program to attract exceptionally motivated students to pursue careers in basic sciences, research, and teaching. It provides generous scholarships and contingency grants from undergraduate to doctoral levels.",
    applicationUrl: "https://kvpy.iisc.ac.in/",
    category: "stem",
    country: "India",
    featured: true
  },
  {
    id: "ntse",
    name: "National Talent Search Examination (NTSE) Scholarship",
    organization: "NCERT, Government of India",
    amount: "₹1,250 per month (Class 11-12), ₹2,000 per month (UG/PG)",
    deadline: "August 31, 2025",
    eligibility: [
      "Indian nationals studying in Class 10",
      "Minimum 55% marks for General, 50% for SC/ST",
      "Must qualify state-level selection and national-level exam",
      "Enrolled in recognized Indian school"
    ],
    description: "NTSE is the most prestigious national scholarship for school students in India, awarded to 2,000 meritorious students each year, providing financial support from Class 11 through postgraduate studies.",
    applicationUrl: "https://ncert.nic.in/ntse.php",
    category: "merit",
    country: "India",
    featured: false
  },
  {
    id: "nsf-undergrad",
    name: "National Science Foundation (NSF) Graduate Research Fellowship",
    organization: "National Science Foundation, USA",
    amount: "$37,000 annual stipend plus $12,000 education allowance",
    deadline: "October 18, 2025",
    eligibility: [
      "US citizen, national, or permanent resident",
      "Undergraduate senior or first-year graduate student",
      "Pursuing research-based master's or PhD in STEM fields",
      "Excellent academic and research record"
    ],
    description: "The NSF GRFP is the oldest and most prestigious graduate fellowship in the United States, providing five years of support to outstanding students pursuing research-based graduate degrees in STEM disciplines.",
    applicationUrl: "https://www.nsfgrfp.org/",
    category: "stem",
    country: "USA",
    featured: false
  },
  {
    id: "japan-mext",
    name: "MEXT Research Scholarships",
    organization: "Ministry of Education, Japan (MEXT)",
    amount: "¥143,000-¥145,000 per month plus tuition waiver and airfare",
    deadline: "April 30, 2026",
    eligibility: [
      "International students from countries with diplomatic relations with Japan",
      "Bachelor's degree (for research students)",
      "Age under 35 years",
      "Good academic record",
      "Basic Japanese or English proficiency"
    ],
    description: "MEXT research scholarships enable international students to conduct graduate-level research at Japanese universities. The scholarship covers full tuition, monthly allowance, and round-trip airfare, with no age limit for PhD applicants.",
    applicationUrl: "https://www.mext.go.jp/en/",
    category: "research",
    country: "Japan",
    featured: false
  },
  {
    id: "polish-government",
    name: "Polish Government Scholarships for Indian Students",
    organization: "Polish National Agency for Academic Exchange (NAWA)",
    amount: "Full tuition plus PLN 1,500 monthly stipend",
    deadline: "June 30, 2026",
    eligibility: [
      "Indian nationals",
      "Bachelor's degree for master's applicants",
      "Master's degree for PhD applicants",
      "Good academic record",
      "Polish language proficiency preferred but not mandatory"
    ],
    description: "The Polish Government offers fully funded scholarships for Indian students to pursue second-cycle (Master's) or third-cycle (PhD) studies at Polish public universities across various disciplines.",
    applicationUrl: "https://nawa.gov.pl/en/",
    category: "international",
    country: "Poland",
    featured: false
  },
  {
    id: "gates-cambridge",
    name: "Gates Cambridge Scholarship",
    organization: "University of Cambridge",
    amount: "Full tuition, maintenance allowance (£18,744+), airfare, and visa costs",
    deadline: "October 15, 2025",
    eligibility: [
      "International students from outside the UK",
      "Applying for a full-time postgraduate degree at Cambridge",
      "Outstanding intellectual ability and academic achievement",
      "Leadership potential and commitment to improving lives"
    ],
    description: "The Gates Cambridge Scholarship is one of the most prestigious international scholarships, awarding around 80 full-cost scholarships each year to outstanding applicants for postgraduate study at the University of Cambridge.",
    applicationUrl: "https://www.gatescambridge.org/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "india-singapore",
    name: "India-Singapore Comprehensive Economic Cooperation Agreement (CECA) Scholarship",
    organization: "Government of Singapore & Government of India",
    amount: "Full tuition plus living allowance and airfare",
    deadline: "March 15, 2026",
    eligibility: [
      "Indian nationals",
      "Excellent academic record",
      "Admitted to participating Singapore institutions (NUS, NTU, SMU)",
      "Age under 35 years",
      "Commitment to return to India after studies"
    ],
    description: "The India-Singapore CECA scholarship enables Indian students to pursue undergraduate and postgraduate degrees at top Singapore universities including NUS, NTU, and SMU, strengthening bilateral educational ties.",
    applicationUrl: "https://www.singaporeindia.org/",
    category: "international",
    country: "Singapore",
    featured: false
  },
  {
    id: "aditya-birla",
    name: "Aditya Birla Group Scholarships",
    organization: "Aditya Birla Group",
    amount: "₹1,50,000 per year",
    deadline: "November 15, 2025",
    eligibility: [
      "Indian nationals",
      "First-year undergraduate students at top IITs, NITs, or BITS campuses",
      "Family income below ₹4 lakh per annum",
      "Minimum 60% marks in Class 12",
      "Demonstrated leadership qualities"
    ],
    description: "The Aditya Birla Group Merit-cum-Means Scholarship offers financial support to high-achieving engineering students from economically disadvantaged backgrounds studying at premier Indian institutions.",
    applicationUrl: "https://www.adityabirla.com/sustainability/aditya-birla-group-scholarships",
    category: "need-based",
    country: "India",
    featured: false
  },
  {
    id: "tata-trust",
    name: "Tata Trusts Scholarships for Higher Education",
    organization: "Tata Trusts",
    amount: "Up to ₹10 lakh per year",
    deadline: "May 31, 2026",
    eligibility: [
      "Indian nationals",
      "Admitted to top global universities (for study abroad scholarships)",
      "Or studying at TISS, TIFR, and other Tata-affiliated institutions",
      "Demonstrated financial need",
      "Excellent academic record"
    ],
    description: "Tata Trusts offers multiple scholarship programs including the Tata Scholarships for study at Indian institutions (TISS, TIFR) and the JN Tata Endowment for loans-without-interest for studies abroad.",
    applicationUrl: "https://www.tatatrusts.org/",
    category: "postgraduate",
    country: "India",
    featured: false
  },
  {
    id: "jneh",
    name: "JN Tata Endowment for Higher Education",
    organization: "Tata Group",
    amount: "₹1,00,000-₹10,00,000 as loan without interest",
    deadline: "March 15, 2026",
    eligibility: [
      "Indian nationals",
      "Graduates from recognized Indian universities",
      "Undertaking full-time postgraduate studies abroad",
      "Under 45 years of age",
      "Proven academic excellence and extracurricular achievements"
    ],
    description: "One of India's oldest scholarship programs (est. 1892), the JN Tata Endowment provides loan scholarships without interest to Indian students for higher studies abroad, covering almost all academic disciplines.",
    applicationUrl: "https://www.jntataendowment.org/",
    category: "international",
    country: "International",
    featured: false
  },
  {
    id: "nurture-merit",
    name: "Nurture Merit cum Means Scholarship",
    organization: "Nurture India Foundation",
    amount: "₹25,000-₹75,000 per year",
    deadline: "December 31, 2025",
    eligibility: [
      "Indian students in Classes 9-12 or undergraduate courses",
      "Family income below ₹5 lakh per annum",
      "Minimum 80% marks in previous examination",
      "Active in extracurricular activities"
    ],
    description: "The Nurture Merit cum Means Scholarship supports talented students from economically weaker backgrounds to continue their education without financial barriers, covering school and college-level studies.",
    applicationUrl: "https://www.nurtureindiascholarship.com/",
    category: "merit",
    country: "India",
    featured: false
  },
  {
    id: "krishna-women",
    name: "Krishna Women's Scholarship for STEM",
    organization: "Krishna Foundation",
    amount: "₹60,000 per year",
    deadline: "February 28, 2026",
    eligibility: [
      "Indian women students",
      "Enrolled in B.Tech/B.E., M.Tech, or PhD in STEM fields",
      "Family income below ₹6 lakh per annum",
      "Minimum 70% marks in previous examination",
      "Not receiving other major scholarships"
    ],
    description: "The Krishna Women's Scholarship for STEM aims to bridge the gender gap in technical education by supporting meritorious women pursuing engineering, science, and technology degrees at the undergraduate, postgraduate, and doctoral levels.",
    applicationUrl: "https://www.krishnafoundation.org/",
    category: "women",
    country: "India",
    featured: false
  },
  {
    id: "eth-zurich",
    name: "ETH Zurich Excellence Scholarship",
    organization: "ETH Zurich",
    amount: "CHF 12,000 per semester plus tuition waiver",
    deadline: "December 15, 2025",
    eligibility: [
      "International students accepted to ETH Zurich master's programs",
      "Outstanding academic record (top 10% of class)",
      "Research potential",
      "Excellent recommendation letters",
      "Strong motivation for research at ETH"
    ],
    description: "The ETH Zurich Excellence Scholarship and Opportunity Program (ESOP) provides outstanding master's students with a full tuition waiver and living cost scholarship to study at one of the world's leading technical universities in Switzerland.",
    applicationUrl: "https://www.ethz.ch/en/studies/financing/scholarships/excellencescholarship.html",
    category: "stem",
    country: "Switzerland",
    featured: false
  },
  {
    id: "aagaaz-pg",
    name: "Aagaaz Postgraduate Scholarship for Girls",
    organization: "Aagaaz Foundation",
    amount: "₹40,000 per year",
    deadline: "August 31, 2025",
    eligibility: [
      "Indian women students",
      "Pursuing any postgraduate degree (MA, MSc, MCom, MBA, etc.)",
      "Family income below ₹3.5 lakh per annum",
      "Minimum 60% marks in undergraduate degree",
      "First-generation graduate preferred"
    ],
    description: "Aagaaz Foundation provides postgraduate scholarships specifically for women from low-income families, supporting their pursuit of master's degrees across all academic disciplines in Indian universities.",
    applicationUrl: "https://www.aagaazfoundation.org/",
    category: "women",
    country: "India",
    featured: false
  },
  {
    id: "nsf-grfp",
    name: "NSF Graduate Research Fellowship Program",
    organization: "National Science Foundation (USA)",
    amount: "$37,000 annual stipend + $16,000 tuition allowance",
    deadline: "October 18, 2025",
    eligibility: [
      "US citizen, national, or permanent resident",
      "Enrolled or planning to enroll in a research-based master's or PhD program",
      "STEM or social science research focus",
      "Undergraduate degree with strong academic record"
    ],
    description: "The NSF GRFP supports outstanding graduate students in NSF-supported STEM and social science disciplines who are pursuing research-based master's and doctoral degrees at accredited US institutions.",
    applicationUrl: "https://www.nsfgrfp.org/",
    category: "postgraduate",
    country: "USA",
    featured: true
  },
  {
    id: "eth-zurich",
    name: "ETH Zurich Excellence Scholarship",
    organization: "ETH Zurich",
    amount: "Full tuition + CHF 12,000 per semester living stipend",
    deadline: "December 15, 2025",
    eligibility: [
      "International students",
      "Outstanding bachelor's degree",
      "Top 10% of graduating class",
      "Strong research proposal",
      "English proficiency (TOEFL/IELTS)"
    ],
    description: "The ETH Zurich Excellence Scholarship supports outstanding students pursuing a master's degree at ETH Zurich, one of the world's leading universities for science and technology.",
    applicationUrl: "https://ethz.ch/en/studies/master/application/excellence-scholarship.html",
    category: "postgraduate",
    country: "Switzerland",
    featured: false
  },
  {
    id: "india-singapore-ceca",
    name: "India-Singapore CECA Scholarship",
    organization: "Government of India & Singapore",
    amount: "Full tuition + living expenses + airfare",
    deadline: "March 15, 2026",
    eligibility: [
      "Indian citizens",
      "Bachelor's degree with minimum 60% marks",
      "Under 30 years of age",
      "Strong academic record",
      "English proficiency (IELTS 6.5+)"
    ],
    description: "The India-Singapore Comprehensive Economic Cooperation Agreement (CECA) scholarship enables Indian students to pursue postgraduate studies at top Singapore universities including NUS, NTU, and SMU.",
    applicationUrl: "https://www.education.gov.in/",
    category: "international",
    country: "Singapore",
    featured: false
  },
  {
    id: "aagaaz-pg",
    name: "Aagaaz Postgraduate Scholarship for Girls",
    organization: "Aagaaz Foundation",
    amount: "₹40,000 per year",
    deadline: "August 31, 2025",
    eligibility: [
      "Indian women students",
      "Pursuing any postgraduate degree (MA, MSc, MCom, MBA, etc.)",
      "Family income below ₹3.5 lakh per annum",
      "Minimum 60% marks in undergraduate degree",
      "First-generation graduate preferred"
    ],
    description: "Aagaaz Foundation provides postgraduate scholarships specifically for women from low-income families, supporting their pursuit of master's degrees across all academic disciplines in Indian universities.",
    applicationUrl: "https://www.aagaazfoundation.org/",
    category: "women",
    country: "India",
    featured: false
  },
  {
    id: "coca-cola-scholars",
    name: "Coca-Cola Scholars Program",
    organization: "Coca-Cola Scholars Foundation",
    amount: "$20,000",
    deadline: "October 31, 2025",
    eligibility: [
      "US high school seniors",
      "Minimum 3.0 GPA",
      "Current or former Coca-Cola Scholars Program participant",
      "Demonstrated leadership in school and community"
    ],
    description: "The Coca-Cola Scholars Program is one of the most prestigious undergraduate scholarships in America, awarding 150 students each year with $20,000 for their college education.",
    applicationUrl: "https://www.coca-colascholarsfoundation.org/",
    category: "undergraduate",
    country: "USA",
    featured: true
  },
  {
    id: "national-merit",
    name: "National Merit Scholarship Program",
    organization: "National Merit Scholarship Corporation",
    amount: "$2,500 one-time award",
    deadline: "February 15, 2026",
    eligibility: [
      "US high school students",
      "PSAT/NMSQT scores in top 1%",
      "US citizen or permanent resident",
      "Enrolled full-time in an accredited US college"
    ],
    description: "The National Merit Scholarship Program is an academic competition for recognition and scholarships that began in 1955. High school students enter by taking the PSAT/NMSQT and meeting published program entry requirements.",
    applicationUrl: "https://www.nationalmerit.org/",
    category: "merit",
    country: "USA",
    featured: true
  },
  {
    id: "ron-brown",
    name: "Ron Brown Scholar Program",
    organization: "Ron Brown Scholar Program",
    amount: "$40,000 ($10,000 per year)",
    deadline: "January 9, 2026",
    eligibility: [
      "Black or African American high school seniors",
      "US citizen or permanent resident",
      "Demonstrated academic excellence",
      "Demonstrated leadership and community service",
      "Financial need"
    ],
    description: "The Ron Brown Scholar Program provides scholarships, mentoring, and internship opportunities to academically talented African American high school seniors.",
    applicationUrl: "https://www.ronbrown.org/",
    category: "undergraduate",
    country: "USA",
    featured: false
  },
  {
    id: "posse-foundation",
    name: "Posse Foundation Scholarship",
    organization: "The Posse Foundation",
    amount: "Full tuition (partner colleges)",
    deadline: "Varies by city",
    eligibility: [
      "High school seniors in Posse cities",
      "Leadership and academic potential",
      "US citizen or permanent resident",
      "Demonstrated ability to work in diverse teams"
    ],
    description: "The Posse Foundation identifies, recruits and trains leadership development teams from public high schools to attend top-tier partner universities on full-tuition scholarships.",
    applicationUrl: "https://www.possefoundation.org/",
    category: "undergraduate",
    country: "USA",
    featured: false
  },
  {
    id: "questbridge",
    name: "QuestBridge National College Match",
    organization: "QuestBridge",
    amount: "Full four-year scholarship (tuition, room, board, expenses)",
    deadline: "September 27, 2025",
    eligibility: [
      "US high school seniors",
      "Family income under $65,000 for a family of four",
      "Strong academic record",
      "US citizen or permanent resident",
      "Demonstrated financial need"
    ],
    description: "QuestBridge connects high-achieving students from low-income backgrounds with full four-year scholarships to 50 of the nation's best colleges.",
    applicationUrl: "https://www.questbridge.org/",
    category: "need-based",
    country: "USA",
    featured: true
  },
  {
    id: "gates-scholars",
    name: "Gates Scholarship",
    organization: "Bill & Melinda Gates Foundation",
    amount: "Full cost of attendance (last dollar)",
    deadline: "September 15, 2025",
    eligibility: [
      "US high school seniors",
      "Pell-eligible",
      "At least one parent African American, American Indian, Hispanic American, or Asian American",
      "Minimum 3.3 GPA",
      "Demonstrated leadership"
    ],
    description: "The Gates Scholarship is a highly selective, last-dollar scholarship for outstanding minority high school seniors from low-income households. Each year 300 students are selected.",
    applicationUrl: "https://www.thegatesscholarship.org/",
    category: "need-based",
    country: "USA",
    featured: true
  },
  {
    id: "college-board-opportunity",
    name: "College Board Opportunity Scholarships",
    organization: "College Board",
    amount: "$500 to $2,000 per task (up to $5,500 total)",
    deadline: "Rolling (various completion milestones)",
    eligibility: [
      "US high school students",
      "Create a College Board account",
      "Complete college planning steps",
      "Enrolled in an accredited US college"
    ],
    description: "The College Board Opportunity Scholarships reward students for completing key college planning milestones like building a college list, practicing for the SAT, and completing the FAFSA.",
    applicationUrl: "https://opportunity.collegeboard.org/",
    category: "undergraduate",
    country: "USA",
    featured: false
  },
  {
    id: "lilly-endowment",
    name: "Lilly Endowment Community Scholarship",
    organization: "Lilly Endowment Inc.",
    amount: "Full tuition + $900 book stipend",
    deadline: "Varies by county (typically September-October)",
    eligibility: [
      "Indiana residents",
      "High school seniors",
      "Accepted at an accredited Indiana college",
      "Demonstrated leadership and community involvement"
    ],
    description: "The Lilly Endowment Community Scholarship provides full-tuition scholarships and a $900 book stipend to Indiana students, with recipients selected by community foundations across the state.",
    applicationUrl: "https://www.lillyendowment.org/",
    category: "merit",
    country: "USA",
    featured: false
  },
  {
    id: "stamps-scholarship",
    name: "Stamps Leadership Scholarship",
    organization: "Stamps Family Charitable Foundation",
    amount: "Full cost of attendance (varies by partner university)",
    deadline: "Varies by partner university (typically November-January)",
    eligibility: [
      "High school seniors applying to partner universities",
      "Exceptional academic record",
      "Demonstrated leadership",
      "Strong extracurricular involvement",
      "Commitment to community service"
    ],
    description: "The Stamps Scholarship is a merit-based scholarship program that partners with 40+ universities across the US to provide full cost of attendance plus enrichment funding for academic and professional development.",
    applicationUrl: "https://www.stampsfoundation.org/",
    category: "merit",
    country: "USA",
    featured: true
  },
  {
    id: "morehead-cain",
    name: "Morehead-Cain Scholarship",
    organization: "University of North Carolina at Chapel Hill",
    amount: "Full tuition, room, board, laptop, and summer experiences",
    deadline: "October 15, 2025",
    eligibility: [
      "US citizens or permanent residents",
      "High school seniors",
      "Exceptional academic record",
      "Demonstrated leadership and moral force",
      "Physical vigor and curiosity"
    ],
    description: "The Morehead-Cain is the first merit scholarship program in the United States, providing a comprehensive four-year undergraduate experience at UNC Chapel Hill including summer enrichment opportunities.",
    applicationUrl: "https://www.moreheadcain.org/",
    category: "merit",
    country: "USA",
    featured: false
  },
  {
    id: "jack-kent-cooke",
    name: "Jack Kent Cooke College Scholarship",
    organization: "Jack Kent Cooke Foundation",
    amount: "Up to $55,000 per year",
    deadline: "January 8, 2026",
    eligibility: [
      "US high school seniors",
      "Minimum 3.9 unweighted GPA",
      "Demonstrated financial need (family income below $95,000)",
      "Exceptional academic record and leadership",
      "Intent to enroll at an accredited US college"
    ],
    description: "The Jack Kent Cooke Foundation College Scholarship supports high-achieving students with financial need, providing up to $55,000 per year for undergraduate studies at any accredited US college.",
    applicationUrl: "https://www.jkcf.org/",
    category: "need-based",
    country: "USA",
    featured: true
  },
  {
    id: "dell-scholars",
    name: "Dell Scholars Program",
    organization: "Michael & Susan Dell Foundation",
    amount: "$20,000 + laptop + textbook credits",
    deadline: "December 1, 2025",
    eligibility: [
      "US high school seniors",
      "Participating in a college readiness program",
      "Family income at or below national median",
      "Demonstrated determination and grit",
      "Minimum 2.4 GPA"
    ],
    description: "The Dell Scholars Program provides financial assistance, technology, and mentoring to students who demonstrate grit and determination to succeed despite personal challenges, with a focus on non-traditional barriers to college access.",
    applicationUrl: "https://www.dellscholars.org/",
    category: "need-based",
    country: "USA",
    featured: false
  },
  {
    id: "google-women-techmakers",
    name: "Google Women Techmakers Scholars Program",
    organization: "Google",
    amount: "$10,000 + retreat invitation",
    deadline: "January 15, 2026",
    eligibility: [
      "Women in computer science or related STEM fields",
      "Undergraduate or graduate students",
      "Strong academic record",
      "Demonstrated leadership in tech",
      "Enrolled at an accredited university"
    ],
    description: "Google's Women Techmakers Scholars Program supports women pursuing degrees in computer science and related STEM fields, providing financial support and building a network of future tech leaders.",
    applicationUrl: "https://www.womentechmakers.com/",
    category: "women",
    country: "International",
    featured: true
  },
  {
    id: "palantir-women",
    name: "Palantir Women in Technology Scholarship",
    organization: "Palantir Technologies",
    amount: "$10,000",
    deadline: "February 28, 2026",
    eligibility: [
      "Women pursuing a degree in STEM",
      "Undergraduate or graduate student",
      "Enrolled at a US or Canadian university",
      "Demonstrated interest in technology and software engineering"
    ],
    description: "The Palantir Women in Technology Scholarship supports women pursuing degrees in STEM who demonstrate excellence in their fields and a commitment to advancing women in technology.",
    applicationUrl: "https://www.palantir.com/students/",
    category: "women",
    country: "USA",
    featured: false
  },
  {
    id: "microsoft-diversity",
    name: "Microsoft Diversity STEM Scholarship",
    organization: "Microsoft",
    amount: "$7,500",
    deadline: "March 15, 2026",
    eligibility: [
      "High school seniors or undergraduate students",
      "Pursuing a STEM degree",
      "From an underrepresented background",
      "US citizen or permanent resident",
      "Minimum 3.0 GPA"
    ],
    description: "The Microsoft Diversity STEM Scholarship supports underrepresented students pursuing degrees in science, technology, engineering, and mathematics at four-year US colleges.",
    applicationUrl: "https://www.microsoft.com/en-us/diversity/",
    category: "stem",
    country: "USA",
    featured: false
  },
  {
    id: "aaas-mass-media",
    name: "AAAS Mass Media Science & Engineering Fellowship",
    organization: "American Association for the Advancement of Science",
    amount: "$7,500 stipend + travel expenses",
    deadline: "January 1, 2026",
    eligibility: [
      "Undergraduate or graduate students in STEM",
      "Strong science communication skills",
      "US citizen or permanent resident",
      "Available for 10-week summer placement"
    ],
    description: "The AAAS Mass Media Fellowship places STEM students at media organizations across the US to learn how to communicate complex scientific topics to the general public.",
    applicationUrl: "https://www.aaas.org/programs/mass-media-fellowship",
    category: "stem",
    country: "USA",
    featured: false
  },
  {
    id: "hertz-foundation",
    name: "Hertz Foundation Graduate Fellowship",
    organization: "Fannie and John Hertz Foundation",
    amount: "Full tuition + $38,000 annual stipend",
    deadline: "October 25, 2025",
    eligibility: [
      "US citizens or permanent residents",
      "Graduate students in applied sciences and engineering",
      "Undergraduate degree in STEM",
      "Commitment to making applied sciences available to the US",
      "Exceptional research potential"
    ],
    description: "The Hertz Fellowship supports graduate students pursuing PhDs in applied sciences and engineering, providing full tuition and a generous stipend to the nation's most promising STEM researchers.",
    applicationUrl: "https://www.hertzfoundation.org/",
    category: "research",
    country: "USA",
    featured: true
  },
  {
    id: "ndseg",
    name: "NDSEG Fellowship",
    organization: "Department of Defense (USA)",
    amount: "Full tuition + $38,400 annual stipend",
    deadline: "December 10, 2025",
    eligibility: [
      "US citizens or nationals",
      "Graduate students in STEM fields",
      "Bachelor's degree or equivalent",
      "Research focus aligned with DoD mission areas",
      "Enrolled at an accredited US institution"
    ],
    description: "The National Defense Science and Engineering Graduate Fellowship supports doctoral students in STEM disciplines that are critical to national defense, with full tuition and a competitive stipend.",
    applicationUrl: "https://ndseg.sysplus.com/",
    category: "research",
    country: "USA",
    featured: false
  }
];

export const getScholarshipsByCategory = (category: ScholarshipCategory): Scholarship[] => {
  return scholarships.filter(scholarship => scholarship.category === category);
};

export const getFeaturedScholarships = (): Scholarship[] => {
  return scholarships.filter(scholarship => scholarship.featured === true);
};

export const getScholarshipById = (id: string): Scholarship | undefined => {
  return scholarships.find(scholarship => scholarship.id === id);
};

