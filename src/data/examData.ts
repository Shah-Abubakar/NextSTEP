
export interface Exam {
  id: string;
  name: string;
  description: string;
  category: "science" | "commerce" | "arts" | "general";
  conductingBody: string;
  applicationPeriod: string;
  examDate: string;
  eligibility: string;
  isPopular: boolean;
}

interface ExamData {
  undergraduate: Exam[];
  postgraduate: Exam[];
}

export const indiaExams: ExamData = {
  undergraduate: [
    // Science stream
    {
      id: "jee-main",
      name: "JEE Main",
      description: "Joint Entrance Examination for admission to undergraduate engineering programs at NITs, IIITs and other centrally funded institutions.",
      category: "science",
      conductingBody: "National Testing Agency (NTA)",
      applicationPeriod: "Dec 2024 - Jan 2025",
      examDate: "Jan & April 2025",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics",
      isPopular: true
    },
    {
      id: "jee-advanced",
      name: "JEE Advanced",
      description: "Entrance exam for admission to Indian Institutes of Technology (IITs).",
      category: "science",
      conductingBody: "IIT Bombay (rotating annually)",
      applicationPeriod: "April - May 2025",
      examDate: "May 2025",
      eligibility: "Must qualify JEE Main first",
      isPopular: true
    },
    {
      id: "neet-ug",
      name: "NEET UG",
      description: "National Eligibility cum Entrance Test for admission to MBBS, BDS, and other medical courses in India.",
      category: "science",
      conductingBody: "National Testing Agency (NTA)",
      applicationPeriod: "Feb - March 2025",
      examDate: "May 2025",
      eligibility: "10+2 with Physics, Chemistry, and Biology",
      isPopular: true
    },
    {
      id: "bitsat",
      name: "BITSAT",
      description: "Birla Institute of Technology and Science Admission Test for various engineering programs.",
      category: "science",
      conductingBody: "BITS Pilani",
      applicationPeriod: "Jan - April 2025",
      examDate: "May 2025",
      eligibility: "10+2 with minimum 75% in PCM",
      isPopular: false
    },
    {
      id: "viteee",
      name: "VITEEE",
      description: "VIT Engineering Entrance Examination for VIT University admission.",
      category: "science",
      conductingBody: "VIT University",
      applicationPeriod: "Nov 2024 - March 2025",
      examDate: "April 2025",
      eligibility: "10+2 with PCM or PCB",
      isPopular: false
    },
    // Commerce stream
    {
      id: "cuet",
      name: "CUET",
      description: "Common University Entrance Test for admission to undergraduate programs in central universities.",
      category: "commerce",
      conductingBody: "National Testing Agency (NTA)",
      applicationPeriod: "March - April 2025",
      examDate: "May 2025",
      eligibility: "10+2 in any stream",
      isPopular: true
    },
    {
      id: "clat-ug",
      name: "CLAT UG",
      description: "Common Law Admission Test for admission to National Law Universities for 5-year integrated law programs.",
      category: "commerce",
      conductingBody: "Consortium of NLUs",
      applicationPeriod: "Jan - Nov 2024",
      examDate: "Dec 2024",
      eligibility: "10+2 with minimum 45% marks",
      isPopular: true
    },
    {
      id: "ipmat",
      name: "IPMAT",
      description: "IIM Indore and Rohtak Integrated Program in Management Aptitude Test.",
      category: "commerce",
      conductingBody: "IIM Indore and IIM Rohtak",
      applicationPeriod: "March - April 2025",
      examDate: "May 2025",
      eligibility: "10+2 with minimum 60% marks",
      isPopular: false
    },
    // Arts stream
    {
      id: "nid-dat",
      name: "NID DAT",
      description: "National Institute of Design Design Aptitude Test for admission to various design programs.",
      category: "arts",
      conductingBody: "National Institute of Design",
      applicationPeriod: "Oct - Dec 2024",
      examDate: "Jan 2025",
      eligibility: "10+2 in any stream",
      isPopular: false
    },
    {
      id: "nift",
      name: "NIFT Entrance Exam",
      description: "National Institute of Fashion Technology entrance exam for design, fashion, and management courses.",
      category: "arts",
      conductingBody: "NIFT",
      applicationPeriod: "Dec 2024 - Jan 2025",
      examDate: "Feb 2025",
      eligibility: "10+2 in any stream",
      isPopular: false
    },
    {
      id: "nata",
      name: "NATA",
      description: "National Aptitude Test in Architecture for admission to B.Arch programs.",
      category: "arts",
      conductingBody: "Council of Architecture",
      applicationPeriod: "Jan - March 2025",
      examDate: "April 2025",
      eligibility: "10+2 with Mathematics",
      isPopular: false
    }
  ],
  postgraduate: [
    {
      id: "gate",
      name: "GATE",
      description: "Graduate Aptitude Test in Engineering for admission to postgraduate programs in engineering and science.",
      category: "science",
      conductingBody: "IIT Madras (rotating annually)",
      applicationPeriod: "Sep - Oct 2024",
      examDate: "Feb 2025",
      eligibility: "Bachelor's degree in Engineering/Science",
      isPopular: true
    },
    {
      id: "cat",
      name: "CAT",
      description: "Common Admission Test for admission to management programs in IIMs and other business schools.",
      category: "commerce",
      conductingBody: "IIM Calcutta (rotating annually)",
      applicationPeriod: "Aug - Sep 2024",
      examDate: "Nov 2024",
      eligibility: "Bachelor's degree with minimum 50%",
      isPopular: true
    },
    {
      id: "upsc-cse",
      name: "UPSC Civil Services",
      description: "Civil Services Examination for recruitment to various civil services like IAS, IPS, IFS, etc.",
      category: "general",
      conductingBody: "Union Public Service Commission",
      applicationPeriod: "Feb - March 2025",
      examDate: "June 2025 (Prelims)",
      eligibility: "Bachelor's degree in any discipline",
      isPopular: true
    },
    {
      id: "net",
      name: "UGC NET",
      description: "National Eligibility Test for determining eligibility for lectureship and JRF awards.",
      category: "general",
      conductingBody: "National Testing Agency (NTA)",
      applicationPeriod: "March - April 2025",
      examDate: "June 2025",
      eligibility: "Master's degree with minimum 55%",
      isPopular: false
    },
    {
      id: "csir-net",
      name: "CSIR UGC NET",
      description: "Joint CSIR UGC Test for Junior Research Fellowship and Eligibility for Lectureship in science subjects.",
      category: "science",
      conductingBody: "National Testing Agency (NTA)",
      applicationPeriod: "March - April 2025",
      examDate: "June 2025",
      eligibility: "Master's degree in Science",
      isPopular: false
    },
    {
      id: "neet-pg",
      name: "NEET PG",
      description: "National Eligibility cum Entrance Test for admission to MD/MS and PG diploma courses.",
      category: "science",
      conductingBody: "National Board of Examinations (NBE)",
      applicationPeriod: "Jan - Feb 2025",
      examDate: "March 2025",
      eligibility: "MBBS degree",
      isPopular: true
    },
    {
      id: "clat-pg",
      name: "CLAT PG",
      description: "Common Law Admission Test for admission to LLM programs in National Law Universities.",
      category: "commerce",
      conductingBody: "Consortium of NLUs",
      applicationPeriod: "Jan - Nov 2024",
      examDate: "Dec 2024",
      eligibility: "LLB degree with minimum 55%",
      isPopular: false
    }
  ]
};

export const worldwideExams: ExamData = {
  undergraduate: [
    {
      id: "sat",
      name: "SAT",
      description: "Scholastic Assessment Test for undergraduate admission to US colleges and universities.",
      category: "general",
      conductingBody: "College Board",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates throughout the year",
      eligibility: "No specific eligibility criteria",
      isPopular: true
    },
    {
      id: "act",
      name: "ACT",
      description: "American College Testing for undergraduate admission to US colleges and universities.",
      category: "general",
      conductingBody: "ACT, Inc.",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates throughout the year",
      eligibility: "No specific eligibility criteria",
      isPopular: true
    },
    {
      id: "ielts-academic",
      name: "IELTS Academic",
      description: "International English Language Testing System for studying at undergraduate and postgraduate levels.",
      category: "general",
      conductingBody: "British Council, IDP, Cambridge Assessment English",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates every month",
      eligibility: "No specific eligibility criteria",
      isPopular: true
    },
    {
      id: "toefl",
      name: "TOEFL",
      description: "Test of English as a Foreign Language for non-native speakers seeking to enroll in English-speaking universities.",
      category: "general",
      conductingBody: "Educational Testing Service (ETS)",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates every month",
      eligibility: "No specific eligibility criteria",
      isPopular: true
    },
    {
      id: "ap",
      name: "AP Exams",
      description: "Advanced Placement exams for high school students to earn college credit and advanced placement.",
      category: "general",
      conductingBody: "College Board",
      applicationPeriod: "Jan - March 2025",
      examDate: "May 2025",
      eligibility: "High school students",
      isPopular: false
    },
    {
      id: "duolingo",
      name: "Duolingo English Test",
      description: "A modern digital language proficiency test accepted by over 3,000 institutions worldwide.",
      category: "general",
      conductingBody: "Duolingo",
      applicationPeriod: "Year-round",
      examDate: "On-demand, online",
      eligibility: "No specific eligibility criteria",
      isPopular: false
    }
  ],
  postgraduate: [
    {
      id: "gre",
      name: "GRE",
      description: "Graduate Record Examination for admission to graduate and business programs worldwide.",
      category: "general",
      conductingBody: "Educational Testing Service (ETS)",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates throughout the year",
      eligibility: "Bachelor's degree (not mandatory for test)",
      isPopular: true
    },
    {
      id: "gmat",
      name: "GMAT",
      description: "Graduate Management Admission Test for admission to MBA and other business programs.",
      category: "commerce",
      conductingBody: "Graduate Management Admission Council (GMAC)",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates throughout the year",
      eligibility: "Bachelor's degree (not mandatory for test)",
      isPopular: true
    },
    {
      id: "mcat",
      name: "MCAT",
      description: "Medical College Admission Test for admission to medical schools in the US and Canada.",
      category: "science",
      conductingBody: "Association of American Medical Colleges (AAMC)",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates from Jan to Sep",
      eligibility: "Undergrad with pre-med courses",
      isPopular: false
    },
    {
      id: "lsat",
      name: "LSAT",
      description: "Law School Admission Test for admission to law schools in the US and Canada.",
      category: "commerce",
      conductingBody: "Law School Admission Council (LSAC)",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates throughout the year",
      eligibility: "No specific eligibility criteria",
      isPopular: false
    },
    {
      id: "pte-academic",
      name: "PTE Academic",
      description: "Pearson Test of English Academic for studying abroad in English-speaking countries.",
      category: "general",
      conductingBody: "Pearson",
      applicationPeriod: "Year-round",
      examDate: "Multiple dates every month",
      eligibility: "No specific eligibility criteria",
      isPopular: true
    },
    {
      id: "cambridge-exams",
      name: "Cambridge English Exams",
      description: "Range of exams including C1 Advanced and C2 Proficiency for academic and professional purposes.",
      category: "general",
      conductingBody: "Cambridge Assessment English",
      applicationPeriod: "Varies by location",
      examDate: "Multiple dates throughout the year",
      eligibility: "No specific eligibility criteria",
      isPopular: false
    }
  ]
};
