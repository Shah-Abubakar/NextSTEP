export interface College {
  id: string;
  name: string;
  description: string;
  rating: number;
  type: "Government" | "Private";
  courses: string[];
  fees: {
    tuition: { min: number; max: number };
    hostel: { min: number; max: number };
  };
  location: {
    city: string;
    state: string;
    address: string;
  };
  established: number;
  accreditation: string[];
  facilities: string[];
  admissionProcess: string;
  scholarships: {
    name: string;
    amount: string;
    eligibility: string;
  }[];
  placementRate: number;
  averagePackage: number;
  imageUrl?: string;
  placement: {
    percentage: number;
    avgSalary?: number;
    topRecruiters?: string[];
    topCompanies?: string[];
  };
  entranceExams?: string[];
  admissionDetails?: {
    eligibility: string;
    process: string;
    deadlines: string;
  };
}

export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

export const states: State[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 37,
  },
  {
    id: "karnataka",
    name: "Karnataka",
    collegeCount: 19,
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    collegeCount: 18,
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 21,
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    collegeCount: 12,
  },
  {
    id: "gujarat",
    name: "Gujarat",
    collegeCount: 10,
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    collegeCount: 1,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    collegeCount: 1,
  },
  {
    id: "kerala",
    name: "Kerala",
    collegeCount: 12,
  },
  {
    id: "punjab",
    name: "Punjab",
    collegeCount: 1,
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    collegeCount: 1
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    collegeCount: 1
  },
  {
    id: "assam",
    name: "Assam",
    collegeCount: 1
  },
  {
    id: "bihar",
    name: "Bihar",
    collegeCount: 1
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    collegeCount: 1
  },
  {
    id: "goa",
    name: "Goa",
    collegeCount: 1
  },
  {
    id: "haryana",
    name: "Haryana",
    collegeCount: 1
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    collegeCount: 1
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    collegeCount: 1
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    collegeCount: 1
  },
  {
    id: "manipur",
    name: "Manipur",
    collegeCount: 1
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    collegeCount: 1
  },
  {
    id: "mizoram",
    name: "Mizoram",
    collegeCount: 1
  },
  {
    id: "nagaland",
    name: "Nagaland",
    collegeCount: 1
  },
  {
    id: "odisha",
    name: "Odisha",
    collegeCount: 1
  },
  {
    id: "sikkim",
    name: "Sikkim",
    collegeCount: 1
  },
  {
    id: "telangana",
    name: "Telangana",
    collegeCount: 12
  },
  {
    id: "tripura",
    name: "Tripura",
    collegeCount: 1
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    collegeCount: 1
  },
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    collegeCount: 1
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    collegeCount: 1
  },
  {
    id: "dadra-nagar-haveli",
    name: "Dadra & Nagar Haveli",
    collegeCount: 1
  },
  {
    id: "daman-diu",
    name: "Daman & Diu",
    collegeCount: 1
  },
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    collegeCount: 1
  },
  {
    id: "ladakh",
    name: "Ladakh",
    collegeCount: 1
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    collegeCount: 1
  },
  {
    id: "puducherry",
    name: "Puducherry",
    collegeCount: 1
  }
];

const keralaColleges: College[] = [
  {
    id: "iit-palakkad",
    name: "Indian Institute of Technology Palakkad",
    description: "One of the newer IITs established in Kerala, known for innovative engineering programs and research excellence.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Palakkad",
      state: "Kerala",
      address: "Ahalia Integrated Campus, Kozhippara, Palakkad, Kerala 678557"
    },
    established: 2015,
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Research Labs", "Central Library", "Hostels", "Sports Complex", "Cafeteria"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition waiver",
        eligibility: "Family income < 5 LPA"
      }
    ],
    placementRate: 92,
    averagePackage: 1400000,
    placement: {
      percentage: 92,
      avgSalary: 1400000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified candidates",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  },
  {
    id: "nit-calicut",
    name: "National Institute of Technology Calicut",
    description: "Premier technical institute in Kerala offering undergraduate and postgraduate programs in engineering and technology.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Technology", "Management", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Calicut",
      state: "Kerala",
      address: "NIT Campus, Chathamangalam, Kozhikode, Kerala 673601"
    },
    established: 1961,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Facilities", "Medical Center"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 88,
    averagePackage: 1200000,
    placement: {
      percentage: 88,
      avgSalary: 1200000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with valid score",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  },
  {
    id: "cusat",
    name: "Cochin University of Science and Technology",
    description: "State university known for engineering, science, and technology programs with strong industry connections.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Science", "Technology", "Management", "Law"],
    fees: {
      tuition: { min: 80000, max: 120000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Kochi",
      state: "Kerala",
      address: "Cochin University P.O, Kochi, Kerala 682022"
    },
    established: 1971,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Research Labs", "Library", "Hostels", "Sports Complex", "Auditorium"],
    admissionProcess: "KEAM/Management Quota",
    scholarships: [
      {
        name: "State Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 82,
    averagePackage: 600000,
    placement: {
      percentage: 82,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "UST Global"]
    },
    entranceExams: ["KEAM", "JEE Main"],
    admissionDetails: {
      eligibility: "Plus Two with PCM for engineering",
      process: "KEAM Counselling",
      deadlines: "June-August"
    }
  },
  {
    id: "university-of-kerala",
    name: "University of Kerala",
    description: "One of the oldest universities in India, offering diverse academic programs across multiple disciplines.",
    rating: 4.2,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Law", "Medicine", "Engineering"],
    fees: {
      tuition: { min: 25000, max: 80000 },
      hostel: { min: 6000, max: 12000 }
    },
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      address: "Senate House Campus, Palayam, Thiruvananthapuram, Kerala 695034"
    },
    established: 1937,
    accreditation: ["NAAC A++", "UGC"],
    facilities: ["Multiple Libraries", "Research Centers", "Hostels", "Medical Facilities"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top performers in each course"
      }
    ],
    placementRate: 75,
    averagePackage: 400000,
    placement: {
      percentage: 75,
      avgSalary: 400000,
      topRecruiters: ["Government Sectors", "Private Companies", "Banks"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "Plus Two for UG, Graduation for PG",
      process: "University Counselling",
      deadlines: "May-July"
    }
  },
  {
    id: "iisc-bangalore-kerala-campus",
    name: "Indian Institute of Science Education and Research Thiruvananthapuram",
    description: "Premier research institute focusing on science education and cutting-edge research.",
    rating: 4.7,
    type: "Government",
    courses: ["Pure Sciences", "Applied Sciences", "Research"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala",
      address: "Maruthamala P.O, Vithura, Thiruvananthapuram, Kerala 695551"
    },
    established: 2008,
    accreditation: ["NAAC A++", "Institute of Eminence"],
    facilities: ["Advanced Research Labs", "Library", "Hostels", "Sports Facilities"],
    admissionProcess: "KVPY/JEE Advanced/JAM",
    scholarships: [
      {
        name: "INSPIRE Fellowship",
        amount: "₹80,000 per year",
        eligibility: "All admitted students"
      }
    ],
    placementRate: 95,
    averagePackage: 1800000,
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ["Research Institutes", "IITs", "IISc", "International Universities"]
    },
    entranceExams: ["KVPY", "JEE Advanced", "JAM"],
    admissionDetails: {
      eligibility: "KVPY/JEE Advanced qualified",
      process: "Direct Admission",
      deadlines: "May-June"
    }
  },
  {
    id: "kerala-agricultural-university",
    name: "Kerala Agricultural University",
    description: "Leading agricultural university offering comprehensive programs in agriculture and allied sciences.",
    rating: 4.1,
    type: "Government",
    courses: ["Agriculture", "Veterinary Science", "Forestry", "Agricultural Engineering"],
    fees: {
      tuition: { min: 40000, max: 80000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Thrissur",
      state: "Kerala",
      address: "KAU P.O, Vellanikkara, Thrissur, Kerala 680656"
    },
    established: 1971,
    accreditation: ["NAAC A", "ICAR"],
    facilities: ["Research Farms", "Veterinary Hospital", "Library", "Hostels"],
    admissionProcess: "KEAM Agriculture/NEET",
    scholarships: [
      {
        name: "Agricultural Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Merit-based for agriculture students"
      }
    ],
    placementRate: 78,
    averagePackage: 350000,
    placement: {
      percentage: 78,
      avgSalary: 350000,
      topRecruiters: ["Government Agriculture Dept", "Private Agro Companies", "Banks"]
    },
    entranceExams: ["KEAM Agriculture", "NEET"],
    admissionDetails: {
      eligibility: "Plus Two with Biology/Agriculture",
      process: "KEAM Counselling",
      deadlines: "June-August"
    }
  },
  {
    id: "mahatma-gandhi-university",
    name: "Mahatma Gandhi University",
    description: "Major state university offering diverse undergraduate and postgraduate programs.",
    rating: 4.0,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Engineering", "Management", "Law"],
    fees: {
      tuition: { min: 20000, max: 100000 },
      hostel: { min: 6000, max: 12000 }
    },
    location: {
      city: "Kottayam",
      state: "Kerala",
      address: "Priyadarshini Hills P.O, Kottayam, Kerala 686560"
    },
    established: 1983,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Central Library", "Research Centers", "Hostels", "Sports Facilities"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "University Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Economically weaker sections"
      }
    ],
    placementRate: 70,
    averagePackage: 400000,
    placement: {
      percentage: 70,
      avgSalary: 400000,
      topRecruiters: ["IT Companies", "Banks", "Government Sectors"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "Plus Two for UG programs",
      process: "University Admission Process",
      deadlines: "May-July"
    }
  },
  {
    id: "rajiv-gandhi-iiit-kottayam",
    name: "Indian Institute of Information Technology Kottayam",
    description: "Premier IT institute focusing on information technology and computer science education.",
    rating: 4.4,
    type: "Government",
    courses: ["Computer Science", "Information Technology", "Electronics"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Kottayam",
      state: "Kerala",
      address: "Pala-Kottayam Road, Kottayam, Kerala 686635"
    },
    established: 2015,
    accreditation: ["NBA", "NAAC"],
    facilities: ["Computer Labs", "Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Technical Education Scholarship",
        amount: "₹40,000 per year",
        eligibility: "Merit cum means"
      }
    ],
    placementRate: 90,
    averagePackage: 1100000,
    placement: {
      percentage: 90,
      avgSalary: 1100000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Infosys"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  },
  {
    id: "amrita-university",
    name: "Amrita Vishwa Vidyapeetham",
    description: "Private deemed university known for engineering, medicine, and research programs.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Medicine", "Business", "Arts & Sciences", "Ayurveda"],
    fees: {
      tuition: { min: 300000, max: 500000 },
      hostel: { min: 80000, max: 120000 }
    },
    location: {
      city: "Kollam",
      state: "Kerala",
      address: "Clappana P.O, Kollam, Kerala 690525"
    },
    established: 2003,
    accreditation: ["NAAC A++", "NBA", "NIRF Ranked"],
    facilities: ["Modern Labs", "Hospital", "Library", "Hostels", "Sports Complex"],
    admissionProcess: "AEEE/NEET/CAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to 100% tuition waiver",
        eligibility: "Top performers in entrance exams"
      }
    ],
    placementRate: 85,
    averagePackage: 800000,
    placement: {
      percentage: 85,
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant"]
    },
    entranceExams: ["AEEE", "NEET", "CAT"],
    admissionDetails: {
      eligibility: "Plus Two with relevant subjects",
      process: "University Entrance Tests",
      deadlines: "April-June"
    }
  },
  {
    id: "sree-chitra-tirunal-institute",
    name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology",
    description: "Premier medical institute and deemed university specializing in medical sciences and biomedical technology.",
    rating: 4.6,
    type: "Government",
    courses: ["Medicine", "Biomedical Technology", "Medical Research"],
    fees: {
      tuition: { min: 50000, max: 150000 },
      hostel: { min: 10000, max: 18000 }
    },
    location: {
      city: "Thiruvananthapuram",
      state: "Kerala", 
      address: "Medical College P.O, Thiruvananthapuram, Kerala 695011"
    },
    established: 1973,
    accreditation: ["NAAC A++", "Institute of Eminence"],
    facilities: ["Super Specialty Hospital", "Research Labs", "Library", "Hostels"],
    admissionProcess: "NEET/Institute Entrance",
    scholarships: [
      {
        name: "Medical Merit Scholarship",
        amount: "₹60,000 per year",
        eligibility: "NEET top scorers"
      }
    ],
    placementRate: 95,
    averagePackage: 1200000,
    placement: {
      percentage: 95,
      avgSalary: 1200000,
      topRecruiters: ["Hospitals", "Medical Colleges", "Research Institutes"]
    },
    entranceExams: ["NEET", "Institute Entrance Tests"],
    admissionDetails: {
      eligibility: "NEET qualified for medical courses",
      process: "Institute Counselling",
      deadlines: "June-August"
    }
  },
  {
    id: "kerala-veterinary-university",
    name: "Kerala Veterinary and Animal Sciences University",
    description: "Specialized university for veterinary and animal sciences education and research.",
    rating: 4.0,
    type: "Government",
    courses: ["Veterinary Medicine", "Animal Sciences", "Dairy Science", "Fisheries"],
    fees: {
      tuition: { min: 60000, max: 100000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Wayanad",
      state: "Kerala",
      address: "Pookode, Lakkidi P.O, Wayanad, Kerala 673576"
    },
    established: 2010,
    accreditation: ["NAAC A", "Veterinary Council of India"],
    facilities: ["Veterinary Hospital", "Research Farms", "Library", "Hostels"],
    admissionProcess: "NEET/KEAM",
    scholarships: [
      {
        name: "Veterinary Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Merit and need-based"
      }
    ],
    placementRate: 80,
    averagePackage: 400000,
    placement: {
      percentage: 80,
      avgSalary: 400000,
      topRecruiters: ["Government Veterinary Dept", "Private Clinics", "Dairy Companies"]
    },
    entranceExams: ["NEET", "KEAM"],
    admissionDetails: {
      eligibility: "Plus Two with Biology",
      process: "KEAM Counselling",
      deadlines: "June-August"
    }
  },
  {
    id: "indian-maritime-university-kochi",
    name: "Indian Maritime University - Kochi Campus",
    description: "Specialized maritime university offering courses in shipping, port management, and marine engineering.",
    rating: 4.2,
    type: "Government",
    courses: ["Marine Engineering", "Nautical Science", "Port Management", "Ship Building"],
    fees: {
      tuition: { min: 120000, max: 180000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Kochi",
      state: "Kerala",
      address: "Kundannoor, Maradu P.O, Kochi, Kerala 682304"
    },
    established: 2008,
    accreditation: ["NAAC", "DGS Approved"],
    facilities: ["Simulation Labs", "Workshop", "Library", "Hostels", "Training Ship"],
    admissionProcess: "IMU CET/JEE Main",
    scholarships: [
      {
        name: "Maritime Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Merit-based for maritime courses"
      }
    ],
    placementRate: 92,
    averagePackage: 1500000,
    placement: {
      percentage: 92,
      avgSalary: 1500000,
      topRecruiters: ["Shipping Companies", "Port Authorities", "Offshore Companies"]
    },
    entranceExams: ["IMU CET", "JEE Main"],
    admissionDetails: {
      eligibility: "Plus Two with PCM",
      process: "IMU Counselling",
      deadlines: "May-July"
    }
  }
];

const maharashtraColleges: College[] = [
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    description: "A premier engineering institute known for its research and academic excellence.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Powai, Mumbai, Maharashtra 400076"
    },
    established: 1958,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 95,
    averagePackage: 2200000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/IITBMainBuildingCROP.jpg",
    placement: {
      percentage: 95,
      avgSalary: 2200000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "vjti-mumbai",
    name: "Veermata Jijabai Technological Institute",
    description: "One of the oldest engineering colleges in Asia, offering quality education and research.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 80000, max: 100000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Matunga, Mumbai, Maharashtra 400019"
    },
    established: 1887,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "EBC Scholarship",
        amount: "Fee concession",
        eligibility: "EBC category students"
      }
    ],
    placementRate: 80,
    averagePackage: 800000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/VJTI_Quadrangle.jpg",
    placement: {
      percentage: 80,
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "coep-pune",
    name: "College of Engineering Pune",
    description: "A prestigious government engineering college with excellent industry connections.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 85000, max: 110000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Wellesley Rd, Shivajinagar, Pune, Maharashtra 411005"
    },
    established: 1854,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 85,
    averagePackage: 900000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/COEP_Main_building.JPG",
    placement: {
      percentage: 85,
      avgSalary: 900000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pict-pune",
    name: "Pune Institute of Computer Technology",
    description: "Leading computer technology institute known for its IT and computer engineering programs.",
    rating: 4.3,
    type: "Private",
    courses: ["Computer Engineering", "IT", "Electronics"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Survey No. 27, Near Trimurti Chowk, Dhankawadi, Pune 411043"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 90,
    averagePackage: 850000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pune_Institute_of_Computer_Technology%2C_Katraj%2C_Pune.jpg",
    placement: {
      percentage: 90,
      avgSalary: 850000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Accenture"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "spit-mumbai",
    name: "Sardar Patel Institute of Technology",
    description: "Renowned engineering institute affiliated to University of Mumbai.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai 400058"
    },
    established: 1962,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Sports", "Auditorium"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 82,
    averagePackage: 750000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Spit.jpg",
    placement: {
      percentage: 82,
      avgSalary: 750000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Capgemini"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "kjsce-mumbai",
    name: "K. J. Somaiya College of Engineering",
    description: "Premier engineering college with strong industry partnerships and research focus.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 160000, max: 190000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Vidyavihar, Mumbai, Maharashtra 400077"
    },
    established: 1983,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 88,
    averagePackage: 950000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Kjsieit2012.jpg",
    placement: {
      percentage: 88,
      avgSalary: 950000,
      topRecruiters: ["Amazon", "Microsoft", "Goldman Sachs", "JP Morgan"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "walchand-sangli",
    name: "Walchand College of Engineering",
    description: "Historic engineering college known for its strong alumni network and quality education.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 75000, max: 95000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Sangli",
      state: "Maharashtra",
      address: "Vishrambag, Sangli, Maharashtra 416415"
    },
    established: 1947,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/WCE_Main_Building.jpg",
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mit-pune",
    name: "Maharashtra Institute of Technology",
    description: "Well-established engineering institute with multiple campuses and diverse programs.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 130000, max: 160000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Paud Rd, Kothrud, Pune, Maharashtra 411038"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 75,
    averagePackage: 600000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/MIT-WPU.tif/lossy-page1-3840px-MIT-WPU.tif.jpg",
    placement: {
      percentage: 75,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "gcoea-nagpur",
    name: "Government College of Engineering Aurangabad",
    description: "Government engineering college with strong emphasis on research and innovation.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 70000, max: 90000 },
      hostel: { min: 12000, max: 20000 },
    },
    location: {
      city: "Aurangabad",
      state: "Maharashtra",
      address: "Aurangabad, Maharashtra 431005"
    },
    established: 1960,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 700000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Government_engineering_College_Aurangabad.jpg",
    placement: {
      percentage: 80,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "symbiosis-pune",
    name: "Symbiosis Institute of Technology",
    description: "Premier private institute known for its innovative curriculum and industry exposure.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Computer Applications"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Lavale, Pune, Maharashtra 412115"
    },
    established: 2008,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Lab"],
    admissionProcess: "SET Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 92,
    averagePackage: 1100000,
    imageUrl: "https://www.sitpune.edu.in/assets/images/student/gallery/sit-campus-1.jpg",
    placement: {
      percentage: 92,
      avgSalary: 1100000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Deloitte"]
    },
    entranceExams: ["SET"],
    admissionDetails: {
      eligibility: "SET qualified with minimum 50% in 12th",
      process: "University counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "bits-pilani-goa",
    name: "BITS Pilani Goa Campus",
    description: "Prestigious private institute known for its academic excellence and research.",
    rating: 4.6,
    type: "Private",
    courses: ["Engineering", "Science", "Pharmacy"],
    fees: {
      tuition: { min: 450000, max: 500000 },
      hostel: { min: 45000, max: 55000 },
    },
    location: {
      city: "Goa",
      state: "Maharashtra",
      address: "Zuarinagar, Sancoale, Goa 403726"
    },
    established: 2004,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "BITSAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹2,00,000",
        eligibility: "BITSAT top scorers"
      }
    ],
    placementRate: 95,
    averagePackage: 1800000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/BITS_GOA_main_building.jpg",
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook"]
    },
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "BITSAT qualified with minimum 75% in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "iiser-pune",
    name: "Indian Institute of Science Education and Research Pune",
    description: "Premier research institute focusing on science education and cutting-edge research.",
    rating: 4.5,
    type: "Government",
    courses: ["Science", "Research", "Mathematics"],
    fees: {
      tuition: { min: 50000, max: 75000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dr. Homi Bhabha Rd, Pashan, Pune, Maharashtra 411008"
    },
    established: 2006,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Facilities"],
    admissionProcess: "KVPY, JEE Advanced",
    scholarships: [
      {
        name: "INSPIRE Scholarship",
        amount: "₹80,000 per year",
        eligibility: "KVPY fellows"
      }
    ],
    placementRate: 70,
    averagePackage: 1200000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/IISER_Pune_Campus.jpg",
    placement: {
      percentage: 70,
      avgSalary: 1200000,
      topRecruiters: ["Research Institutes", "IBM", "Microsoft", "Goldman Sachs"]
    },
    entranceExams: ["KVPY", "JEE Advanced"],
    admissionDetails: {
      eligibility: "KVPY or JEE Advanced qualified",
      process: "Centralized counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "vnit-nagpur",
    name: "Visvesvaraya National Institute of Technology",
    description: "National Institute of Technology known for its engineering and technology programs.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Architecture"],
    fees: {
      tuition: { min: 135000, max: 165000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Nagpur",
      state: "Maharashtra",
      address: "South Ambazari Rd, Nagpur, Maharashtra 440010"
    },
    established: 1960,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 83,
    averagePackage: 1050000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/VNIT_Nagpur_main.jpg",
    placement: {
      percentage: 83,
      avgSalary: 1050000,
      topRecruiters: ["Microsoft", "Amazon", "Flipkart", "Samsung"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "dkte-ichalkaranji",
    name: "Datta Kala Group of Institutions",
    description: "Multi-disciplinary institution offering engineering, management and other programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Ichalkaranji",
      state: "Maharashtra",
      address: "Rajwada, Ichalkaranji, Maharashtra 416115"
    },
    established: 1998,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 72,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 72,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "sinhgad-pune",
    name: "Sinhgad College of Engineering",
    description: "Well-known engineering college with strong industry connections and placement record.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 125000, max: 155000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Off Sinhgad Rd, Vadgaon, Pune, Maharashtra 411041"
    },
    established: 1996,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 76,
    averagePackage: 580000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/C1_building_of_Sinhgad_College_of_Engineering,_Pune.jpg",
    placement: {
      percentage: 76,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Persistent"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pcet-pune",
    name: "Pimpri Chinchwad College of Engineering",
    description: "Government engineering college known for its quality education and affordable fees.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 78000, max: 98000 },
      hostel: { min: 16000, max: 24000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Sector No. 26, Pradhikaran, Nigdi, Pune 411044"
    },
    established: 1999,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 79,
    averagePackage: 680000,
    imageUrl: "https://www.pccoepune.com/images/slider/pccoe-campus.jpg",
    placement: {
      percentage: 79,
      avgSalary: 680000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "dypiet-pune",
    name: "D.Y. Patil Institute of Engineering and Technology",
    description: "Private engineering institute with modern infrastructure and industry partnerships.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 135000, max: 165000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018"
    },
    established: 1984,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 74,
    averagePackage: 570000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 74,
      avgSalary: 570000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "bharati-vidyapeeth-pune",
    name: "Bharati Vidyapeeth College of Engineering",
    description: "Established engineering college with comprehensive programs and good placement opportunities.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 24000, max: 34000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dhankawadi, Pune, Maharashtra 411043"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 77,
    averagePackage: 590000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Bharati_vidyapeeth_college_of_engineering_pune.jpg",
    placement: {
      percentage: 77,
      avgSalary: 590000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Capgemini"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "iiit-pune",
    name: "Indian Institute of Information Technology Pune",
    description: "Premier institute focused on information technology and computer science education.",
    rating: 4.4,
    type: "Government",
    courses: ["Computer Science", "IT", "Electronics"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Survey No. 124/1/1, Opposite to NDA, Pashan, Pune 411008"
    },
    established: 2016,
    accreditation: ["NAAC A+"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 90,
    averagePackage: 1200000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/Building_of_Indian_Institute_of_Information_Technology,_Pune_in_April_2023.jpg",
    placement: {
      percentage: 90,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Adobe"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JoSAA counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "ict-mumbai",
    name: "Institute of Chemical Technology Mumbai",
    description: "Premier institute for chemical engineering and technology with excellent industry connections.",
    rating: 4.5,
    type: "Government",
    courses: ["Chemical Engineering", "Biotechnology", "Pharmacy"],
    fees: {
      tuition: { min: 95000, max: 120000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Nathalal Parekh Marg, Matunga East, Mumbai 400019"
    },
    established: 1933,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Main, MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 95,
    averagePackage: 1500000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Uict.JPG",
    placement: {
      percentage: 95,
      avgSalary: 1500000,
      topRecruiters: ["Reliance", "ONGC", "Shell", "Hindustan Unilever"]
    },
    entranceExams: ["JEE Main", "MHT CET"],
    admissionDetails: {
      eligibility: "JEE Main or MHT CET qualified",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "viit-pune",
    name: "Vishwakarma Institute of Information Technology",
    description: "Leading IT institute known for its innovative curriculum and industry partnerships.",
    rating: 4.2,
    type: "Private",
    courses: ["Computer Engineering", "IT", "Electronics", "Mechanical"],
    fees: {
      tuition: { min: 145000, max: 175000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Survey No. 2/3/4, Kondhwa, Pune 411048"
    },
    established: 2004,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 85,
    averagePackage: 720000,
    imageUrl: "https://www.viit.ac.in/media/k2/items/cache/b7e607e23f1646b9ce9f7d0da4fbe580_S.jpg",
    placement: {
      percentage: 85,
      avgSalary: 720000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Accenture"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "dypcoe-pune",
    name: "D.Y. Patil College of Engineering",
    description: "Well-established engineering college with comprehensive programs and good placement record.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Akurdi, Pune, Maharashtra 411044"
    },
    established: 1984,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 78,
    averagePackage: 620000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Dyakurdi.jpg",
    placement: {
      percentage: 78,
      avgSalary: 620000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mit-aurangabad",
    name: "Maharashtra Institute of Technology Aurangabad",
    description: "Branch of MIT with focus on engineering and management education.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management"],
    fees: {
      tuition: { min: 125000, max: 155000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Aurangabad",
      state: "Maharashtra",
      address: "Beed Bypass Road, Aurangabad, Maharashtra 431028"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 72,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 72,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "jspm-pune",
    name: "JSPM's Rajarshi Shahu College of Engineering",
    description: "Engineering college known for its practical approach to education and industry exposure.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Tathawade, Pune, Maharashtra 411033"
    },
    established: 1992,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 70,
    averagePackage: 480000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Jspm_building-2.JPG",
    placement: {
      percentage: 70,
      avgSalary: 480000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Regional Companies"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "avcoe-sangamner",
    name: "Amrutvahini College of Engineering",
    description: "Engineering college focused on providing quality technical education in rural Maharashtra.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 110000, max: 140000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Sangamner",
      state: "Maharashtra",
      address: "Sangamner, Ahmednagar, Maharashtra 422608"
    },
    established: 1996,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹8,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 65,
    averagePackage: 420000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 65,
      avgSalary: 420000,
      topRecruiters: ["TCS", "Infosys", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "kkwce-nashik",
    name: "K.K. Wagh Institute of Engineering Education and Research",
    description: "Established engineering institute in Nashik with strong emphasis on research and development.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 135000, max: 165000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Nashik",
      state: "Maharashtra",
      address: "Hirabai Haridas Vidyanagari, Amrutdham, Nashik 422003"
    },
    established: 1984,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 76,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 76,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mvps-nashik",
    name: "MVPS's K.B.T. College of Engineering",
    description: "Engineering college in Nashik known for its quality education and student development programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 115000, max: 145000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Nashik",
      state: "Maharashtra",
      address: "Vidyanagari, Nashik, Maharashtra 422013"
    },
    established: 1983,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 68,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 68,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Local Companies"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "aitrc-vita",
    name: "Annasaheb Dange College of Engineering and Technology",
    description: "Engineering college in Sangli district providing quality technical education.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 105000, max: 135000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Sangli",
      state: "Maharashtra",
      address: "Ashta, Sangli, Maharashtra 416301"
    },
    established: 1985,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹8,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 62,
    averagePackage: 380000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/ADCET_Ashta01.jpg",
    placement: {
      percentage: 62,
      avgSalary: 380000,
      topRecruiters: ["TCS", "Infosys", "Regional Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "aissms-pune",
    name: "AISSMS College of Engineering",
    description: "Established engineering college in Pune with diverse engineering programs.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 130000, max: 160000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Kennedy Rd, Near RTO, Pune, Maharashtra 411001"
    },
    established: 1992,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 74,
    averagePackage: 580000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/AISSMS_College_of_Engineering%2C_Pune.jpg",
    placement: {
      percentage: 74,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Capgemini"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "prec-loni",
    name: "Pravara Rural Engineering College",
    description: "Rural engineering college committed to providing quality technical education.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 108000, max: 138000 },
      hostel: { min: 16000, max: 26000 },
    },
    location: {
      city: "Loni",
      state: "Maharashtra",
      address: "Loni Kalbhor, Ahmednagar, Maharashtra 413736"
    },
    established: 1999,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 66,
    averagePackage: 450000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 66,
      avgSalary: 450000,
      topRecruiters: ["TCS", "Infosys", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pes-pune",
    name: "PES Modern College of Engineering",
    description: "Modern engineering college with emphasis on innovation and entrepreneurship.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 138000, max: 168000 },
      hostel: { min: 24000, max: 34000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Shivajinagar, Pune, Maharashtra 411005"
    },
    established: 1994,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹16,000 per year",
        eligibility: "Top 12% students"
      }
    ],
    placementRate: 75,
    averagePackage: 610000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/PESMCOE.jpg",
    placement: {
      percentage: 75,
      avgSalary: 610000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Persistent"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mescoe-pune",
    name: "Modern Education Society's College of Engineering",
    description: "Established engineering college with strong industry connections and placement support.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 128000, max: 158000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Wadia City, Pune, Maharashtra 411001"
    },
    established: 1962,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹14,000 per year",
        eligibility: "Top 18% students"
      }
    ],
    placementRate: 73,
    averagePackage: 560000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 73,
      avgSalary: 560000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pccoe-pune",
    name: "Pimpri Chinchwad College of Engineering and Research",
    description: "Research-oriented engineering college with focus on innovation and technology development.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 142000, max: 172000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Sector 26, Pradhikaran, Nigdi, Pune 411044"
    },
    established: 2001,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 81,
    averagePackage: 720000,
    imageUrl: "https://www.pccoer.com/images/slider/IMG_20221118_121441.jpg",
    placement: {
      percentage: 81,
      avgSalary: 720000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "sies-nerul",
    name: "SIES Graduate School of Technology",
    description: "Technology-focused institute in Navi Mumbai with modern infrastructure and industry exposure.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 148000, max: 178000 },
      hostel: { min: 26000, max: 36000 },
    },
    location: {
      city: "Navi Mumbai",
      state: "Maharashtra",
      address: "Nerul, Navi Mumbai, Maharashtra 400706"
    },
    established: 1993,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 12% students"
      }
    ],
    placementRate: 77,
    averagePackage: 680000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/SIES_GST_11.jpg",
    placement: {
      percentage: 77,
      avgSalary: 680000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Accenture"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "gcoe-jalgaon",
    name: "Government College of Engineering Jalgaon",
    description: "Government engineering college providing affordable quality education in North Maharashtra.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 72000, max: 92000 },
      hostel: { min: 14000, max: 22000 },
    },
    location: {
      city: "Jalgaon",
      state: "Maharashtra",
      address: "Jalgaon, Maharashtra 425001"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    imageUrl: "https://www.gcoej.ac.in/assets/images/slides/slide1.jpg",
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "gcoe-karad",
    name: "Government College of Engineering Karad",
    description: "Government engineering college in Satara district known for its quality education and research.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 74000, max: 94000 },
      hostel: { min: 15000, max: 23000 },
    },
    location: {
      city: "Karad",
      state: "Maharashtra",
      address: "Karad, Satara, Maharashtra 415124"
    },
    established: 1986,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹16,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 79,
    averagePackage: 670000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/GCEKPhoto.jpg",
    placement: {
      percentage: 79,
      avgSalary: 670000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mit-wpu-pune",
    name: "MIT World Peace University",
    description: "Multi-disciplinary university offering various programs with focus on holistic education.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Management", "Design", "Liberal Arts"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Loni Kalbhor, Pune, Maharashtra 412201"
    },
    established: 2017,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Hub"],
    admissionProcess: "University Entrance Test",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 8% students"
      }
    ],
    placementRate: 82,
    averagePackage: 750000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Main_entrance_to_MITCOE.jpg",
    placement: {
      percentage: 82,
      avgSalary: 750000,
      topRecruiters: ["TCS", "Infosys", "Accenture", "Deloitte"]
    },
    entranceExams: ["University Entrance Test"],
    admissionDetails: {
      eligibility: "Based on university entrance test and 12th marks",
      process: "University counseling",
      deadlines: "May-June annually"
    }
  }
];

const delhiColleges: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    description: "Premier engineering and technology institute known for its cutting-edge research and academic excellence.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Design"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016"
    },
    established: 1961,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹75,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 96,
    averagePackage: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 96,
      avgSalary: 2500000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University",
    description: "Premier technical university offering undergraduate and postgraduate programs in engineering and technology.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology", "Applied Sciences"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Bawana Rd, Shahbad Daulatpur, Delhi 110042"
    },
    established: 1941,
    accreditation: ["NAAC A+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 85,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 85,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Adobe", "Samsung", "Flipkart"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "nsit-delhi",
    name: "Netaji Subhas University of Technology",
    description: "Renowned engineering university formerly known as NSIT, offering quality technical education.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Azad Hind Fauj Marg, Sector 3, Dwarka, New Delhi 110078"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 82,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 82,
      avgSalary: 1100000,
      topRecruiters: ["Amazon", "Microsoft", "Samsung", "Oracle", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "iiit-delhi",
    name: "Indraprastha Institute of Information Technology Delhi",
    description: "Research-focused institute specializing in information technology and computer sciences.",
    rating: 4.5,
    type: "Government",
    courses: ["Computer Science", "Electronics", "Mathematics", "Design"],
    fees: {
      tuition: { min: 350000, max: 400000 },
      hostel: { min: 40000, max: 50000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Okhla Industrial Estate, Phase III, New Delhi 110020"
    },
    established: 2008,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 95,
    averagePackage: 1800000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Uber"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "du-north-campus",
    name: "University of Delhi - North Campus",
    description: "Premier central university offering diverse undergraduate and postgraduate programs.",
    rating: 4.6,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Social Sciences"],
    fees: {
      tuition: { min: 15000, max: 35000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Delhi University, North Campus, Delhi 110007"
    },
    established: 1922,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers"],
    admissionProcess: "CUET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 75,
      avgSalary: 600000,
      topRecruiters: ["Deloitte", "EY", "KPMG", "Wipro", "TCS"]
    },
    entranceExams: ["CUET"],
    admissionDetails: {
      eligibility: "CUET qualified with relevant subjects in 12th",
      process: "University counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "jnu-delhi",
    name: "Jawaharlal Nehru University",
    description: "Premier research university known for social sciences, languages, and international studies.",
    rating: 4.4,
    type: "Government",
    courses: ["Arts", "Social Sciences", "Languages", "International Studies"],
    fees: {
      tuition: { min: 5000, max: 15000 },
      hostel: { min: 12000, max: 20000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "New Mehrauli Rd, JNU, New Delhi 110067"
    },
    established: 1969,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Hostel", "Sports", "Cultural Centers", "Research Centers"],
    admissionProcess: "JNUEE",
    scholarships: [
      {
        name: "UGC Fellowship",
        amount: "₹31,000 per month",
        eligibility: "Research scholars"
      }
    ],
    placementRate: 65,
    averagePackage: 500000,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    placement: {
      percentage: 65,
      avgSalary: 500000,
      topRecruiters: ["Government Organizations", "NGOs", "Research Institutes", "Media"]
    },
    entranceExams: ["JNUEE"],
    admissionDetails: {
      eligibility: "JNUEE qualified with relevant undergraduate degree",
      process: "University counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences Delhi",
    description: "Premier medical institute and hospital providing world-class medical education and healthcare.",
    rating: 4.9,
    type: "Government",
    courses: ["Medicine", "Nursing", "Allied Health Sciences"],
    fees: {
      tuition: { min: 5000, max: 15000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Ansari Nagar, New Delhi 110029"
    },
    established: 1956,
    accreditation: ["NAAC A++", "MCI"],
    facilities: ["Library", "Labs", "Hostel", "Hospital", "Research Centers"],
    admissionProcess: "NEET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 100,
    averagePackage: 1500000,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    placement: {
      percentage: 100,
      avgSalary: 1500000,
      topRecruiters: ["Government Hospitals", "Private Healthcare", "Research Institutes"]
    },
    entranceExams: ["NEET"],
    admissionDetails: {
      eligibility: "NEET qualified with PCB in 12th",
      process: "Centralized counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "dms-delhi",
    name: "Delhi School of Management, DTU",
    description: "Premier management school offering MBA and executive programs with industry focus.",
    rating: 4.2,
    type: "Government",
    courses: ["Management", "MBA", "Executive Programs"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Bawana Rd, Shahbad Daulatpur, Delhi 110042"
    },
    established: 2009,
    accreditation: ["NAAC A", "AICTE"],
    facilities: ["Library", "Case Study Rooms", "Hostel", "Sports"],
    admissionProcess: "CAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹40,000 per year",
        eligibility: "CAT 95+ percentile"
      }
    ],
    placementRate: 88,
    averagePackage: 1300000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 88,
      avgSalary: 1300000,
      topRecruiters: ["Deloitte", "KPMG", "Amazon", "Flipkart", "Paytm"]
    },
    entranceExams: ["CAT"],
    admissionDetails: {
      eligibility: "CAT qualified with graduation in any discipline",
      process: "Institute counseling",
      deadlines: "March-April annually"
    }
  },
  {
    id: "jamia-millia",
    name: "Jamia Millia Islamia",
    description: "Central university offering diverse programs in engineering, humanities, and social sciences.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Arts", "Social Sciences", "Architecture"],
    fees: {
      tuition: { min: 25000, max: 45000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Jamia Nagar, Okhla, New Delhi 110025"
    },
    established: 1920,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers"],
    admissionProcess: "JMI Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 72,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 72,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["JMI Entrance"],
    admissionDetails: {
      eligibility: "JMI entrance qualified with relevant 12th subjects",
      process: "University counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "igdtuw-delhi",
    name: "Indira Gandhi Delhi Technical University for Women",
    description: "Technical university exclusively for women offering engineering and technology programs.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology", "Applied Sciences"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Kashmere Gate, Delhi 110006"
    },
    established: 2013,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 800000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 75,
      avgSalary: 800000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Oracle", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified female candidates with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "vips-delhi",
    name: "Vivekananda Institute of Professional Studies",
    description: "Multi-disciplinary institute offering programs in engineering, management, and law.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Applied Sciences"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Pitampura, Delhi 110034"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 70,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 70,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Capgemini"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with relevant 12th subjects",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "bharati-vidyapeeth-delhi",
    name: "Bharati Vidyapeeth College of Engineering Delhi",
    description: "Engineering college known for its comprehensive programs and industry connections.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 160000, max: 190000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "A-4, Paschim Vihar, Rohtak Rd, New Delhi 110063"
    },
    established: 1999,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 68,
    averagePackage: 580000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 68,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "HCL"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "amity-delhi",
    name: "Amity University Delhi NCR",
    description: "Private university offering diverse programs with modern infrastructure and industry partnerships.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Journalism", "Design"],
    fees: {
      tuition: { min: 280000, max: 350000 },
      hostel: { min: 40000, max: 50000 },
    },
    location: {
      city: "Noida",
      state: "Delhi",
      address: "Sector 125, Noida, Uttar Pradesh 201313"
    },
    established: 2005,
    accreditation: ["NAAC A+"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Centers"],
    admissionProcess: "Amity JEE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,00,000",
        eligibility: "JEE top scorers"
      }
    ],
    placementRate: 85,
    averagePackage: 950000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 85,
      avgSalary: 950000,
      topRecruiters: ["Microsoft", "Amazon", "Accenture", "Deloitte", "IBM"]
    },
    entranceExams: ["Amity JEE"],
    admissionDetails: {
      eligibility: "Amity JEE qualified or based on 12th marks",
      process: "University counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "jss-delhi",
    name: "JSS Academy of Technical Education",
    description: "Technical institute offering engineering and management programs with industry focus.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Management", "Applied Sciences"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Noida",
      state: "Delhi",
      address: "Sector 62, Noida, Uttar Pradesh 201309"
    },
    established: 1998,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 65,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 65,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "mait-delhi",
    name: "Maharaja Agrasen Institute of Technology",
    description: "Technical institute affiliated to GGSIPU offering engineering and applied sciences programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Applied Sciences"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "PSP Area, Sector 22, Rohini, Delhi 110086"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 72,
    averagePackage: 680000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 72,
      avgSalary: 680000,
      topRecruiters: ["Amazon", "Microsoft", "Samsung", "Oracle"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "msit-delhi",
    name: "Maharaja Surajmal Institute of Technology",
    description: "Engineering institute known for its academic excellence and placement record.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Applied Sciences"],
    fees: {
      tuition: { min: 145000, max: 175000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "C-4, Janakpuri, New Delhi 110058"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Sports", "Auditorium"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 70,
    averagePackage: 620000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 70,
      avgSalary: 620000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Wipro"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "gbpiet-delhi",
    name: "G.B. Pant Government Engineering College",
    description: "Government engineering college offering quality technical education at affordable fees.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 85000, max: 115000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "JLN Marg, New Delhi 110003"
    },
    established: 2007,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 78,
      avgSalary: 750000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Oracle"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "teri-delhi",
    name: "TERI School of Advanced Studies",
    description: "Research institute focusing on energy, environment, and sustainable development studies.",
    rating: 4.1,
    type: "Private",
    courses: ["Environmental Sciences", "Policy Studies", "Management"],
    fees: {
      tuition: { min: 200000, max: 280000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "10, Institutional Area, Vasant Kunj, New Delhi 110070"
    },
    established: 1998,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Research Centers"],
    admissionProcess: "TERI Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 850000,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    placement: {
      percentage: 80,
      avgSalary: 850000,
      topRecruiters: ["UN Organizations", "Government Bodies", "NGOs", "Consulting Firms"]
    },
    entranceExams: ["TERI Entrance"],
    admissionDetails: {
      eligibility: "TERI entrance qualified with relevant background",
      process: "Institute counseling",
      deadlines: "April-May annually"
    }
  },
  {
    id: "ipu-delhi",
    name: "Guru Gobind Singh Indraprastha University",
    description: "State university offering diverse programs through affiliated colleges across Delhi NCR.",
    rating: 3.8,
    type: "Government",
    courses: ["Engineering", "Management", "Law", "Medicine", "Pharmacy"],
    fees: {
      tuition: { min: 120000, max: 180000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Sector 16C, Dwarka, New Delhi 110078"
    },
    established: 1998,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Sports", "Medical Center"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 68,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 68,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with relevant 12th subjects",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "sia-delhi",
    name: "Symbiosis Institute of Australia Delhi",
    description: "International institute offering programs in collaboration with Australian universities.",
    rating: 3.6,
    type: "Private",
    courses: ["Management", "Information Technology", "Design"],
    fees: {
      tuition: { min: 300000, max: 400000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Gurgaon",
      state: "Delhi",
      address: "Plot No. 681, Sector 15 Part II, Gurgaon, Haryana 122001"
    },
    established: 2010,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "Institute Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 75,
      avgSalary: 720000,
      topRecruiters: ["International Companies", "MNCs", "IT Companies"]
    },
    entranceExams: ["Institute Entrance"],
    admissionDetails: {
      eligibility: "Institute entrance qualified with graduation",
      process: "Institute counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "ncdc-delhi",
    name: "National Centre for Design and Product Development",
    description: "Specialized institute focusing on design, innovation, and product development.",
    rating: 3.7,
    type: "Government",
    courses: ["Design", "Product Development", "Innovation Management"],
    fees: {
      tuition: { min: 80000, max: 120000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi 110016"
    },
    established: 2012,
    accreditation: ["NAAC B++"],
    facilities: ["Design Studios", "Labs", "Workshop", "Innovation Center"],
    admissionProcess: "Design Entrance",
    scholarships: [
      {
        name: "Creative Excellence Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Portfolio based selection"
      }
    ],
    placementRate: 72,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    placement: {
      percentage: 72,
      avgSalary: 650000,
      topRecruiters: ["Design Studios", "Product Companies", "Startups", "MNCs"]
    },
    entranceExams: ["Design Entrance"],
    admissionDetails: {
      eligibility: "Design entrance qualified with portfolio submission",
      process: "Institute counseling",
      deadlines: "June-July annually"
    }
  }
];

const karnatakaColleges: College[] = [
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science",
    description: "Premier research institution known for its excellence in science and engineering research.",
    rating: 4.9,
    type: "Government",
    courses: ["Science", "Engineering", "Research"],
    fees: {
      tuition: { min: 50000, max: 80000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "CV Raman Avenue, Bangalore, Karnataka 560012"
    },
    established: 1909,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Research Labs", "Hostel", "Sports"],
    admissionProcess: "KVPY/JEE Advanced/GATE",
    scholarships: [
      {
        name: "KVPY Fellowship",
        amount: "₹7,000 per month",
        eligibility: "KVPY qualified students"
      },
      {
        name: "JRF Fellowship",
        amount: "₹31,000 per month",
        eligibility: "PhD students"
      }
    ],
    placementRate: 100,
    averagePackage: 2800000,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    placement: {
      percentage: 100,
      avgSalary: 2800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook"]
    },
    entranceExams: ["KVPY", "JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "KVPY/JEE Advanced qualified",
      process: "Online application and counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "nit-karnataka",
    name: "National Institute of Technology Karnataka",
    description: "Premier technical institute offering undergraduate and postgraduate programs in engineering.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Surathkal",
      state: "Karnataka",
      address: "Srinivasnagar, Surathkal, Karnataka 575025"
    },
    established: 1960,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Hub"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "₹1,000-₹12,000 per month",
        eligibility: "Based on family income and merit"
      }
    ],
    placementRate: 92,
    averagePackage: 1400000,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    placement: {
      percentage: 92,
      avgSalary: 1400000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Intel"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "rvce-bangalore",
    name: "R.V. College of Engineering",
    description: "Autonomous engineering college affiliated to VTU, known for quality education and placements.",
    rating: 4.5,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 40000, max: 60000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "RV Vidyaniketan Post, Mysore Road, Bangalore 560059"
    },
    established: 1963,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cafeteria"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Family income < ₹3 lakhs"
      }
    ],
    placementRate: 85,
    averagePackage: 800000,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    placement: {
      percentage: 85,
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "bmsce-bangalore",
    name: "B.M.S. College of Engineering",
    description: "Autonomous engineering college with excellent academic standards and industry connections.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 240000, max: 280000 },
      hostel: { min: 35000, max: 50000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Bull Temple Road, Basavanagudi, Bangalore 560019"
    },
    established: 1946,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹40,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 82,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    placement: {
      percentage: 82,
      avgSalary: 750000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Bosch"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "msrit-bangalore",
    name: "M.S. Ramaiah Institute of Technology",
    description: "Leading engineering institute known for innovation and entrepreneurship.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 260000, max: 310000 },
      hostel: { min: 45000, max: 65000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Gnanagangothri Campus, MSR Nagar, Bangalore 560054"
    },
    established: 1962,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹35,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    placement: {
      percentage: 80,
      avgSalary: 720000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "HCL"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "pesit-bangalore",
    name: "PES Institute of Technology",
    description: "Premier engineering college with focus on innovation and research.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 280000, max: 330000 },
      hostel: { min: 50000, max: 70000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "100 Feet Ring Road, BSK III Stage, Bangalore 560085"
    },
    established: 1988,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "KCET/COMEDK/PESSAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹60,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 88,
    averagePackage: 900000,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    placement: {
      percentage: 88,
      avgSalary: 900000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe"]
    },
    entranceExams: ["KCET", "COMEDK", "PESSAT"],
    admissionDetails: {
      eligibility: "KCET/COMEDK/PESSAT qualified",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "sjce-mysore",
    name: "Sri Jayachamarajendra College of Engineering",
    description: "Government engineering college affiliated to VTU with strong academic tradition.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 80000, max: 120000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Mysore",
      state: "Karnataka",
      address: "Manasagangothri, Mysore, Karnataka 570006"
    },
    established: 1963,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET",
    scholarships: [
      {
        name: "Government Scholarship",
        amount: "Fee concession",
        eligibility: "SC/ST/OBC students"
      }
    ],
    placementRate: 75,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    placement: {
      percentage: 75,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T"]
    },
    entranceExams: ["KCET"],
    admissionDetails: {
      eligibility: "KCET qualified with PCM in 12th",
      process: "KEA counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "uvce-bangalore",
    name: "University Visvesvaraya College of Engineering",
    description: "Government engineering college affiliated to Bangalore University with rich heritage.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 75000, max: 110000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Jnanabharathi Campus, Bangalore University, Bangalore 560056"
    },
    established: 1917,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 70,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    placement: {
      percentage: 70,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Accenture", "Mindtree"]
    },
    entranceExams: ["KCET"],
    admissionDetails: {
      eligibility: "KCET qualified with PCM in 12th",
      process: "KEA counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "nitte-mangalore",
    name: "NITTE Meenakshi Institute of Technology",
    description: "Leading private engineering college with strong industry partnerships.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 220000, max: 270000 },
      hostel: { min: 40000, max: 55000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "P.B. No. 6429, Yelahanka, Bangalore 560064"
    },
    established: 2001,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cafeteria"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 78,
    averagePackage: 680000,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    placement: {
      percentage: 78,
      avgSalary: 680000,
      topRecruiters: ["Microsoft", "Amazon", "Flipkart", "Byju's"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "cmrit-bangalore",
    name: "CMR Institute of Technology",
    description: "Engineering college with focus on technology and innovation.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 35000, max: 50000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "132, AECS Layout, Kundalahalli, Bangalore 560037"
    },
    established: 2000,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 72,
    averagePackage: 620000,
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    placement: {
      percentage: 72,
      avgSalary: 620000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Tech Mahindra"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "biet-davangere",
    name: "Bapuji Institute of Engineering and Technology",
    description: "Government engineering college with emphasis on technical education.",
    rating: 3.9,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 70000, max: 100000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Davangere",
      state: "Karnataka",
      address: "Shamanur Road, Davangere, Karnataka 577004"
    },
    established: 1979,
    accreditation: ["NAAC B++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET",
    scholarships: [
      {
        name: "Government Scholarship",
        amount: "Fee waiver",
        eligibility: "SC/ST/OBC students"
      }
    ],
    placementRate: 65,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    placement: {
      percentage: 65,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL"]
    },
    entranceExams: ["KCET"],
    admissionDetails: {
      eligibility: "KCET qualified with PCM in 12th",
      process: "KEA counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "ksit-bangalore",
    name: "KS Institute of Technology",
    description: "Engineering college offering quality technical education with modern facilities.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 30000, max: 45000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "# 14, Raghuvanahalli, Kanakapura Road, Bangalore 560062"
    },
    established: 1999,
    accreditation: ["NAAC B++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 68,
    averagePackage: 580000,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    placement: {
      percentage: 68,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Mindtree", "Accenture"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "ait-bangalore",
    name: "Acharya Institute of Technology",
    description: "Private engineering college with focus on holistic development.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 160000, max: 200000 },
      hostel: { min: 25000, max: 40000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Acharya Dr. Sarvepalli Radhakrishnan Road, Bangalore 560107"
    },
    established: 2000,
    accreditation: ["NAAC B+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 62,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    placement: {
      percentage: 62,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "pes-university",
    name: "PES University",
    description: "Leading private university known for engineering and technology programs.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 250000, max: 350000 },
      hostel: { min: 80000, max: 120000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "100 Feet Ring Road, BSK III Stage, Bangalore 560085"
    },
    established: 1972,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Modern Labs", "Library", "Hostels", "Sports Complex", "Innovation Center"],
    admissionProcess: "PESSAT/KCET",
    scholarships: [
      {
        name: "PES Merit Scholarship",
        amount: "₹75,000 per year",
        eligibility: "PESSAT rank under 1000"
      }
    ],
    placementRate: 90,
    averagePackage: 850000,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    placement: {
      percentage: 90,
      avgSalary: 850000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Adobe", "Goldman Sachs"]
    },
    entranceExams: ["PESSAT", "KCET"],
    admissionDetails: {
      eligibility: "PESSAT/KCET qualified with PCM in 12th",
      process: "PESSAT counseling/KEA counseling",
      deadlines: "May-August annually"
    }
  },
  {
    id: "ramaiah-institute",
    name: "M.S. Ramaiah Institute of Technology",
    description: "Autonomous engineering college with excellent academic standards and industry connections.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology", "Architecture"],
    fees: {
      tuition: { min: 180000, max: 250000 },
      hostel: { min: 60000, max: 90000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "MSR Nagar, Bangalore 560054"
    },
    established: 1962,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Central Library", "Research Labs", "Hostels", "Sports Complex", "Medical Center"],
    admissionProcess: "KCET/COMEDK",
    scholarships: [
      {
        name: "Ramaiah Excellence Award",
        amount: "₹50,000 per year",
        eligibility: "Top 10% in KCET/COMEDK"
      }
    ],
    placementRate: 88,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 88,
      avgSalary: 720000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Bosch", "Toyota"]
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "KCET/COMEDK qualified with PCM in 12th",
      process: "KEA counseling/Direct admission",
      deadlines: "July-August annually"
    }
  },
  {
    id: "christ-university",
    name: "CHRIST (Deemed to be University)",
    description: "Multi-disciplinary deemed university offering diverse programs with emphasis on holistic education.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Sciences", "Commerce", "Humanities"],
    fees: {
      tuition: { min: 200000, max: 280000 },
      hostel: { min: 90000, max: 130000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Hosur Road, Bangalore 560029"
    },
    established: 1969,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Library", "Research Centers", "Hostels", "Sports Complex", "Chapel"],
    admissionProcess: "CUET/University Entrance",
    scholarships: [
      {
        name: "CHRIST Merit Scholarship",
        amount: "₹60,000 per year",
        eligibility: "Top 15% in entrance exam"
      }
    ],
    placementRate: 85,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 85,
      avgSalary: 650000,
      topRecruiters: ["Deloitte", "EY", "KPMG", "TCS", "Accenture"]
    },
    entranceExams: ["CUET", "University Entrance"],
    admissionDetails: {
      eligibility: "12th with minimum 50% marks",
      process: "University entrance exam and counseling",
      deadlines: "April-May annually"
    }
  },
  {
    id: "jain-university",
    name: "Jain (Deemed-to-be University)",
    description: "Private deemed university known for innovation and industry-oriented education.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences", "Commerce"],
    fees: {
      tuition: { min: 180000, max: 240000 },
      hostel: { min: 75000, max: 110000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Jayanagar 9th Block, Bangalore 560011"
    },
    established: 1990,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Digital Library", "Innovation Labs", "Hostels", "Sports Complex", "Medical Center"],
    admissionProcess: "JET/KCET",
    scholarships: [
      {
        name: "Jain Merit Scholarship",
        amount: "₹45,000 per year",
        eligibility: "JET rank under 2000"
      }
    ],
    placementRate: 82,
    averagePackage: 580000,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    placement: {
      percentage: 82,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "IBM"]
    },
    entranceExams: ["JET", "KCET"],
    admissionDetails: {
      eligibility: "12th with minimum 50% marks",
      process: "JET/KCET counseling",
      deadlines: "May-July annually"
    }
  },
  {
    id: "reva-university",
    name: "REVA University",
    description: "Private university focusing on technology education and research innovation.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences", "Architecture"],
    fees: {
      tuition: { min: 160000, max: 220000 },
      hostel: { min: 70000, max: 100000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Rukmini Knowledge Park, Kattigenahalli, Bangalore 560064"
    },
    established: 2012,
    accreditation: ["NAAC A+", "NBA", "UGC"],
    facilities: ["Modern Labs", "Library", "Hostels", "Sports Complex", "Innovation Hub"],
    admissionProcess: "REVA CET/KCET",
    scholarships: [
      {
        name: "REVA Merit Award",
        amount: "₹40,000 per year",
        eligibility: "Top 20% in entrance exam"
      }
    ],
    placementRate: 75,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    placement: {
      percentage: 75,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "Tech Mahindra", "HCL", "Capgemini"]
    },
    entranceExams: ["REVA CET", "KCET"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "REVA CET/KCET counseling",
      deadlines: "June-August annually"
    }
  },
  {
    id: "cmr-university",
    name: "CMR University",
    description: "Private university offering undergraduate and postgraduate programs with industry focus.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 150000, max: 200000 },
      hostel: { min: 65000, max: 85000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "AECS Layout, Bangalore 560037"
    },
    established: 2013,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Library", "Computer Labs", "Hostels", "Sports", "Industry Interface"],
    admissionProcess: "CMRUET/KCET",
    scholarships: [
      {
        name: "CMR Merit Scholarship",
        amount: "₹35,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 70,
    averagePackage: 480000,
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    placement: {
      percentage: 70,
      avgSalary: 480000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture", "L&T"]
    },
    entranceExams: ["CMRUET", "KCET"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "CMRUET/KCET counseling",
      deadlines: "June-July annually"
    }
  }
];

const tamilNaduColleges: College[] = [
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    description: "Premier engineering institute, consistently ranked as India's top technical university.",
    rating: 4.9,
    type: "Government",
    courses: ["Engineering", "Technology", "Sciences", "Management"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 18000, max: 25000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sardar Patel Road, Adyar, Chennai 600036"
    },
    established: 1959,
    accreditation: ["NAAC A++", "NBA", "ABET"],
    facilities: ["Research Labs", "Library", "Hostel", "Sports Complex", "Medical Center"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "₹1,00,000 per year",
        eligibility: "JEE Advanced qualified with family income < 5 LPA"
      }
    ],
    placementRate: 99,
    averagePackage: 2100000,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    placement: {
      percentage: 99,
      avgSalary: 2100000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Facebook", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with PCM in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "anna-university",
    name: "Anna University",
    description: "State technical university offering undergraduate and postgraduate programs in engineering and technology.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology", "Architecture", "Planning"],
    fees: {
      tuition: { min: 60000, max: 100000 },
      hostel: { min: 20000, max: 35000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sardar Patel Road, Guindy, Chennai 600025"
    },
    established: 1978,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Central Library", "Computer Center", "Hostels", "Sports Facilities"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "State Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% in TNEA"
      }
    ],
    placementRate: 85,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 85,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology",
    description: "Private deemed university known for its engineering programs and international collaborations.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 198000, max: 400000 },
      hostel: { min: 180000, max: 250000 },
    },
    location: {
      city: "Vellore",
      state: "Tamil Nadu",
      address: "Vellore 632014"
    },
    established: 1984,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Digital Library", "Research Centers", "Hostels", "Sports Complex", "Medical Center"],
    admissionProcess: "VITEEE",
    scholarships: [
      {
        name: "Dr. G. Viswanathan Scholarship",
        amount: "₹2,00,000 per year",
        eligibility: "VITEEE rank under 1000"
      }
    ],
    placementRate: 95,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 95,
      avgSalary: 750000,
      topRecruiters: ["Accenture", "TCS", "Wipro", "Amazon", "Microsoft"]
    },
    entranceExams: ["VITEEE"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 60% marks",
      process: "VITEEE followed by counseling",
      deadlines: "April-May annually"
    }
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    description: "Premier technical institute known for excellence in engineering education and research.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Technology", "Sciences", "Management"],
    fees: {
      tuition: { min: 150000, max: 200000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      address: "National Highway 67, Tiruchirappalli 620015"
    },
    established: 1964,
    accreditation: ["NAAC A++", "NBA", "AICTE"],
    facilities: ["Central Library", "Computer Center", "Hostels", "Sports Complex", "Health Center"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Institute Merit Scholarship",
        amount: "₹75,000 per year",
        eligibility: "Top 20% students based on JEE Main rank"
      }
    ],
    placementRate: 92,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    placement: {
      percentage: 92,
      avgSalary: 1200000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Samsung", "Oracle"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "psg-tech",
    name: "PSG College of Technology",
    description: "Autonomous engineering college with strong industry connections and excellent placement record.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Technology", "Applied Sciences"],
    fees: {
      tuition: { min: 90000, max: 150000 },
      hostel: { min: 30000, max: 45000 },
    },
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      address: "Peelamedu, Coimbatore 641004"
    },
    established: 1951,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Library", "Labs", "Hostels", "Sports", "Training & Placement Cell"],
    admissionProcess: "TNEA/Management Quota",
    scholarships: [
      {
        name: "PSG Merit Scholarship",
        amount: "₹40,000 per year",
        eligibility: "Top 15% in entrance exam"
      }
    ],
    placementRate: 88,
    averagePackage: 680000,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    placement: {
      percentage: 88,
      avgSalary: 680000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "L&T", "Ashok Leyland"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling/Direct admission",
      deadlines: "June-July annually"
    }
  },
  {
    id: "thiagarajar-college",
    name: "Thiagarajar College of Engineering",
    description: "Government-aided autonomous engineering college known for quality education.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 45000, max: 80000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Madurai",
      state: "Tamil Nadu",
      address: "Thiruparankundram, Madurai 625015"
    },
    established: 1957,
    accreditation: ["NAAC A+", "NBA", "UGC"],
    facilities: ["Library", "Computer Center", "Hostels", "Sports Complex"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "TCE Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 82,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    placement: {
      percentage: 82,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Accenture", "HCL"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "sathyabama-university",
    name: "Sathyabama Institute of Science and Technology",
    description: "Deemed university with focus on research and innovation in engineering and technology.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 180000, max: 250000 },
      hostel: { min: 80000, max: 120000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai 600119"
    },
    established: 1987,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Library", "Research Centers", "Hostels", "Sports", "Medical Center"],
    admissionProcess: "SAEEE/JEE Main",
    scholarships: [
      {
        name: "Chancellor's Scholarship",
        amount: "₹1,00,000 per year",
        eligibility: "JEE Main rank under 10000"
      }
    ],
    placementRate: 75,
    averagePackage: 480000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 75,
      avgSalary: 480000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Capgemini", "Tech Mahindra"]
    },
    entranceExams: ["SAEEE", "JEE Main"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "SAEEE/JEE Main counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "ssn-college",
    name: "SSN College of Engineering",
    description: "Autonomous engineering college affiliated to Anna University with excellent academic standards.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 120000, max: 180000 },
      hostel: { min: 45000, max: 65000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Old Mahabalipuram Road, Kalavakkam 603110"
    },
    established: 1996,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Digital Library", "Labs", "Hostels", "Sports Complex", "Innovation Center"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "SSN Excellence Award",
        amount: "₹60,000 per year",
        eligibility: "Top 10% in TNEA"
      }
    ],
    placementRate: 90,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    placement: {
      percentage: 90,
      avgSalary: 720000,
      topRecruiters: ["Amazon", "Microsoft", "Google", "Zoho", "PayPal"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "srm-university",
    name: "SRM Institute of Science and Technology",
    description: "Private deemed university with multiple campuses and strong industry partnerships.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Medicine", "Law"],
    fees: {
      tuition: { min: 250000, max: 350000 },
      hostel: { min: 120000, max: 180000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "SRM Nagar, Kattankulathur 603203"
    },
    established: 1985,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Library", "Research Centers", "Hostels", "Sports Complex", "Medical Center"],
    admissionProcess: "SRMJEEE",
    scholarships: [
      {
        name: "SRM Merit Scholarship",
        amount: "₹1,50,000 per year",
        eligibility: "SRMJEEE rank under 500"
      }
    ],
    placementRate: 85,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 85,
      avgSalary: 650000,
      topRecruiters: ["Accenture", "TCS", "Wipro", "Cognizant", "Infosys"]
    },
    entranceExams: ["SRMJEEE"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "SRMJEEE followed by counseling",
      deadlines: "April-May annually"
    }
  },
  {
    id: "madras-institute-tech",
    name: "Madras Institute of Technology",
    description: "Campus of Anna University, premier institute for aerospace and other engineering disciplines.",
    rating: 4.3,
    type: "Government",
    courses: ["Aerospace Engineering", "Electronics", "Computer Science", "Mechanical"],
    fees: {
      tuition: { min: 60000, max: 100000 },
      hostel: { min: 25000, max: 40000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Chromepet, Chennai 600044"
    },
    established: 1949,
    accreditation: ["NAAC A+", "NBA", "UGC"],
    facilities: ["Aerospace Labs", "Library", "Hostels", "Sports Complex"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "MIT Alumni Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 87,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    placement: {
      percentage: 87,
      avgSalary: 700000,
      topRecruiters: ["HAL", "ISRO", "DRDO", "Boeing", "Airbus"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "coimbatore-institute-tech",
    name: "Coimbatore Institute of Technology",
    description: "Autonomous engineering college known for its industry-oriented curriculum.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 80000, max: 130000 },
      hostel: { min: 35000, max: 50000 },
    },
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      address: "Coimbatore 641014"
    },
    established: 1956,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Library", "Labs", "Hostels", "Sports", "Industry Interface"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "CIT Merit Award",
        amount: "₹35,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 78,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    placement: {
      percentage: 78,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bosch", "TVS Motors"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "sastra-university",
    name: "SASTRA Deemed University",
    description: "Private deemed university offering multidisciplinary programs with emphasis on research.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology", "Sciences", "Management", "Liberal Arts"],
    fees: {
      tuition: { min: 170000, max: 220000 },
      hostel: { min: 60000, max: 90000 },
    },
    location: {
      city: "Thanjavur",
      state: "Tamil Nadu",
      address: "Thirumalaisamudram, Thanjavur 613401"
    },
    established: 1984,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["Digital Library", "Research Centers", "Hostels", "Sports Complex", "Innovation Hub"],
    admissionProcess: "JEE Main/SASTRA Entrance",
    scholarships: [
      {
        name: "SASTRA Excellence Scholarship",
        amount: "₹80,000 per year",
        eligibility: "JEE Main rank under 5000"
      }
    ],
    placementRate: 82,
    averagePackage: 620000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 82,
      avgSalary: 620000,
      topRecruiters: ["Amazon", "Microsoft", "TCS", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main", "SASTRA Entrance"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 60% marks",
      process: "JEE Main/SASTRA Entrance counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "karunya-university",
    name: "Karunya Institute of Technology and Sciences",
    description: "Deemed university with Christian minority status, known for engineering and research programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology", "Sciences", "Management"],
    fees: {
      tuition: { min: 140000, max: 190000 },
      hostel: { min: 70000, max: 100000 },
    },
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      address: "Karunya Nagar, Coimbatore 641114"
    },
    established: 1986,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Library", "Research Centers", "Hostels", "Medical Center", "Sports Complex"],
    admissionProcess: "JEE Main/KEAM",
    scholarships: [
      {
        name: "Karunya Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "JEE Main rank under 15000"
      }
    ],
    placementRate: 73,
    averagePackage: 450000,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    placement: {
      percentage: 73,
      avgSalary: 450000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "L&T"]
    },
    entranceExams: ["JEE Main", "KEAM"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "JEE Main/KEAM counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "vel-tech-university",
    name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    description: "Private deemed university focusing on technology education and research.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 120000, max: 170000 },
      hostel: { min: 60000, max: 85000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Avadi, Chennai 600062"
    },
    established: 1997,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Digital Library", "Labs", "Hostels", "Sports", "Industry Interface"],
    admissionProcess: "VTEE/JEE Main",
    scholarships: [
      {
        name: "Vel Tech Merit Award",
        amount: "₹40,000 per year",
        eligibility: "Top 25% in entrance exam"
      }
    ],
    placementRate: 70,
    averagePackage: 420000,
    imageUrl: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    placement: {
      percentage: 70,
      avgSalary: 420000,
      topRecruiters: ["TCS", "Infosys", "Tech Mahindra", "HCL", "Capgemini"]
    },
    entranceExams: ["VTEE", "JEE Main"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "VTEE/JEE Main counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "amrita-university-coimbatore",
    name: "Amrita Vishwa Vidyapeetham - Coimbatore",
    description: "Multi-campus deemed university with strong emphasis on research and innovation.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology", "Medicine", "Business", "Arts & Sciences"],
    fees: {
      tuition: { min: 200000, max: 280000 },
      hostel: { min: 90000, max: 130000 },
    },
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      address: "Ettimadai, Coimbatore 641112"
    },
    established: 1994,
    accreditation: ["NAAC A++", "NBA", "UGC"],
    facilities: ["World-class Labs", "Library", "Hostels", "Medical Center", "Sports Complex"],
    admissionProcess: "AEEE/JEE Main",
    scholarships: [
      {
        name: "Amrita Merit Scholarship",
        amount: "₹1,00,000 per year",
        eligibility: "AEEE rank under 1000"
      }
    ],
    placementRate: 88,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 88,
      avgSalary: 720000,
      topRecruiters: ["Amazon", "Microsoft", "Google", "Infosys", "TCS"]
    },
    entranceExams: ["AEEE", "JEE Main"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 60% marks",
      process: "AEEE/JEE Main counseling",
      deadlines: "April-May annually"
    }
  },
  {
    id: "loyola-icam",
    name: "Loyola-ICAM College of Engineering and Technology",
    description: "Catholic minority institution known for holistic education and industry partnerships.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 95000, max: 140000 },
      hostel: { min: 40000, max: 60000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Pearl City, Chennai 600034"
    },
    established: 2001,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Library", "Labs", "Hostels", "Sports", "Chapel"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "Loyola Excellence Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 20% in TNEA"
      }
    ],
    placementRate: 75,
    averagePackage: 480000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 75,
      avgSalary: 480000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant", "Accenture"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "kongu-engineering-college",
    name: "Kongu Engineering College",
    description: "Autonomous engineering college with strong alumni network and industry connections.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 75000, max: 120000 },
      hostel: { min: 30000, max: 45000 },
    },
    location: {
      city: "Erode",
      state: "Tamil Nadu",
      address: "Perundurai, Erode 638060"
    },
    established: 1983,
    accreditation: ["NAAC A+", "NBA", "UGC"],
    facilities: ["Library", "Computer Center", "Hostels", "Sports", "Training Center"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "KEC Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 72,
    averagePackage: 460000,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    placement: {
      percentage: 72,
      avgSalary: 460000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Ashok Leyland", "TVS Motors"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "TNEA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "hindustan-university",
    name: "Hindustan Institute of Technology and Science",
    description: "Deemed university offering diverse programs with focus on industry readiness.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Sciences", "Architecture"],
    fees: {
      tuition: { min: 160000, max: 220000 },
      hostel: { min: 80000, max: 115000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Padur, Chennai 603103"
    },
    established: 1985,
    accreditation: ["NAAC A", "NBA", "UGC"],
    facilities: ["Library", "Research Centers", "Hostels", "Medical Center", "Sports Complex"],
    admissionProcess: "HITSEEE/JEE Main",
    scholarships: [
      {
        name: "HITS Merit Scholarship",
        amount: "₹60,000 per year",
        eligibility: "JEE Main rank under 20000"
      }
    ],
    placementRate: 68,
    averagePackage: 410000,
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    placement: {
      percentage: 68,
      avgSalary: 410000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "HCL"]
    },
    entranceExams: ["HITSEEE", "JEE Main"],
    admissionDetails: {
      eligibility: "12th PCM with minimum 50% marks",
      process: "HITSEEE/JEE Main counseling",
      deadlines: "May-June annually"
    }
  }
];

const uttarPradeshColleges: College[] = [
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    description: "One of the premier engineering institutes in India, known for its academic excellence and research.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Design"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      address: "Kalyanpur, Kanpur, Uttar Pradesh 208016"
    },
    established: 1959,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Innovation Hub"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 95,
    averagePackage: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 95,
      avgSalary: 2500000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "iit-bhu",
    name: "Indian Institute of Technology (BHU) Varanasi",
    description: "Premier engineering institute with rich heritage and excellent academic programs.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Humanities"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "Varanasi, Uttar Pradesh 221005"
    },
    established: 1919,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers", "Research Labs"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Complete fee waiver",
        eligibility: "SC/ST category students"
      }
    ],
    placementRate: 92,
    averagePackage: 2200000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 92,
      avgSalary: 2200000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Samsung", "Intel"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "hbtu-kanpur",
    name: "Harcourt Butler Technical University",
    description: "Leading technical university known for engineering and technology programs.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 75000, max: 95000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      address: "Nawabganj, Kanpur, Uttar Pradesh 208002"
    },
    established: 1921,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Workshop", "Innovation Center"],
    admissionProcess: "JEE Main / UPSEE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "State Scholarship",
        amount: "Fee concession",
        eligibility: "UP domicile students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["JEE Main", "UPSEE"],
    admissionDetails: {
      eligibility: "JEE Main qualified or UPSEE qualified with PCM in 12th",
      process: "Online counseling through AKTU",
      deadlines: "July-August annually"
    }
  },
  {
    id: "university-lucknow",
    name: "University of Lucknow",
    description: "One of the oldest and most prestigious universities in India offering diverse programs.",
    rating: 4.2,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Law", "Management", "Education"],
    fees: {
      tuition: { min: 15000, max: 35000 },
      hostel: { min: 8000, max: 15000 },
    },
    location: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      address: "Badshah Bagh, Lucknow, Uttar Pradesh 226007"
    },
    established: 1867,
    accreditation: ["NAAC A+", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers", "Museum"],
    admissionProcess: "Merit based / Entrance exam",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "Minority Scholarship",
        amount: "Fee concession",
        eligibility: "Minority community students"
      }
    ],
    placementRate: 65,
    averagePackage: 450000,
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    placement: {
      percentage: 65,
      avgSalary: 450000,
      topRecruiters: ["Government Organizations", "TCS", "Infosys", "Banking Sector"]
    },
    entranceExams: ["LUCET", "CUET"],
    admissionDetails: {
      eligibility: "12th passed from recognized board",
      process: "Online application and entrance exam",
      deadlines: "May-June annually"
    }
  },
  {
    id: "jssu-noida",
    name: "Jaypee Institute of Information Technology",
    description: "Premier private institute for engineering and technology education.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Technology", "Management", "Applied Sciences"],
    fees: {
      tuition: { min: 220000, max: 280000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      address: "Sector 62, Noida, Uttar Pradesh 201309"
    },
    established: 2001,
    accreditation: ["NAAC A+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Labs", "Incubation Center"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Top 10% students in JEE Main"
      },
      {
        name: "Sports Scholarship",
        amount: "Fee concession",
        eligibility: "State/National level sports achievers"
      }
    ],
    placementRate: 85,
    averagePackage: 950000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 85,
      avgSalary: 950000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Adobe", "Samsung"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with minimum 75% in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "amity-noida",
    name: "Amity University Noida",
    description: "Leading private university offering diverse programs with modern infrastructure.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Medical", "Arts", "Science"],
    fees: {
      tuition: { min: 280000, max: 350000 },
      hostel: { min: 40000, max: 50000 },
    },
    location: {
      city: "Noida",
      state: "Uttar Pradesh",
      address: "Sector 125, Noida, Uttar Pradesh 201313"
    },
    established: 2005,
    accreditation: ["NAAC A+", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Centers", "Medical Center"],
    admissionProcess: "Amity JEE / Merit based",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,00,000",
        eligibility: "Top performers in entrance exam"
      },
      {
        name: "Sports Excellence Scholarship",
        amount: "Fee waiver",
        eligibility: "National level sports achievers"
      }
    ],
    placementRate: 80,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 80,
      avgSalary: 750000,
      topRecruiters: ["Accenture", "TCS", "Infosys", "Wipro", "Cognizant"]
    },
    entranceExams: ["Amity JEE", "JEE Main"],
    admissionDetails: {
      eligibility: "12th passed with minimum 60% marks",
      process: "Online application and entrance exam",
      deadlines: "April-May annually"
    }
  },
  {
    id: "gl-bajaj-mathura",
    name: "GL Bajaj Institute of Technology and Management",
    description: "Well-established engineering college with excellent industry connections.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Computer Applications"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Greater Noida",
      state: "Uttar Pradesh",
      address: "Plot No. 2, APJ Abdul Kalam Road, Knowledge Park III, Greater Noida"
    },
    established: 1998,
    accreditation: ["NAAC B+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Auditorium", "Cafeteria"],
    admissionProcess: "UPSEE / JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Fee concession",
        eligibility: "Family income < ₹3 lakhs"
      }
    ],
    placementRate: 75,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 75,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "HCL", "Wipro", "Capgemini"]
    },
    entranceExams: ["UPSEE", "JEE Main"],
    admissionDetails: {
      eligibility: "UPSEE qualified or JEE Main qualified with PCM in 12th",
      process: "Online counseling through AKTU",
      deadlines: "July-August annually"
    }
  },
  {
    id: "geu-dehradun",
    name: "Graphic Era University",
    description: "Modern university with focus on technology and innovation.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Management", "Sciences", "Computer Applications"],
    fees: {
      tuition: { min: 190000, max: 240000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Dehradun",
      state: "Uttar Pradesh",
      address: "566/6 Bell Road, Clement Town, Dehradun, Uttarakhand 248002"
    },
    established: 1993,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center", "Incubation Hub"],
    admissionProcess: "JEE Main / GEEE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹75,000",
        eligibility: "Top 10% students in entrance exam"
      },
      {
        name: "Alumni Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Children of alumni"
      }
    ],
    placementRate: 82,
    averagePackage: 850000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 82,
      avgSalary: 850000,
      topRecruiters: ["Amazon", "Microsoft", "Google", "Infosys", "TCS"]
    },
    entranceExams: ["JEE Main", "GEEE"],
    admissionDetails: {
      eligibility: "JEE Main qualified or GEEE qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "bennett-university",
    name: "Bennett University",
    description: "Modern private university with international collaborations and industry partnerships.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Media", "Liberal Arts"],
    fees: {
      tuition: { min: 320000, max: 380000 },
      hostel: { min: 45000, max: 60000 },
    },
    location: {
      city: "Greater Noida",
      state: "Uttar Pradesh",
      address: "Plot Nos 8-11, Tech Zone II, Greater Noida, Uttar Pradesh 201310"
    },
    established: 2016,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Labs", "Industry Interface"],
    admissionProcess: "JEE Main / SAT / Bennett University Test",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹2,00,000",
        eligibility: "Top performers in entrance exam"
      },
      {
        name: "International Scholarship",
        amount: "Fee waiver",
        eligibility: "International exchange students"
      }
    ],
    placementRate: 88,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 88,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Goldman Sachs", "McKinsey"]
    },
    entranceExams: ["JEE Main", "SAT", "BUT"],
    admissionDetails: {
      eligibility: "JEE Main qualified or SAT score or BUT qualified with 12th passed",
      process: "Online application and counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "sharda-university",
    name: "Sharda University",
    description: "International university with diverse programs and global partnerships.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Medical", "Law", "Arts", "Agriculture"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 35000, max: 50000 },
    },
    location: {
      city: "Greater Noida",
      state: "Uttar Pradesh",
      address: "Plot No. 32-34, Knowledge Park III, Greater Noida, Uttar Pradesh 201310"
    },
    established: 2009,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Medical Center", "International Center"],
    admissionProcess: "Merit based / Entrance exam",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,50,000",
        eligibility: "Top 10% students"
      },
      {
        name: "International Scholarship",
        amount: "Fee concession",
        eligibility: "International students"
      }
    ],
    placementRate: 78,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    placement: {
      percentage: 78,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"]
    },
    entranceExams: ["SUAT", "JEE Main"],
    admissionDetails: {
      eligibility: "12th passed with minimum 50% marks",
      process: "Online application and entrance exam",
      deadlines: "April-May annually"
    }
  },
  {
    id: "galgotias-university",
    name: "Galgotias University",
    description: "Private university known for engineering and management programs with modern facilities.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Applied Sciences", "Humanities"],
    fees: {
      tuition: { min: 220000, max: 280000 },
      hostel: { min: 40000, max: 55000 },
    },
    location: {
      city: "Greater Noida",
      state: "Uttar Pradesh",
      address: "Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, Uttar Pradesh 203201"
    },
    established: 2011,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center", "Skill Development Center"],
    admissionProcess: "GEEE / JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,00,000",
        eligibility: "Top performers in entrance exam"
      },
      {
        name: "Sports Scholarship",
        amount: "Fee waiver",
        eligibility: "State/National level sports achievers"
      }
    ],
    placementRate: 80,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 80,
      avgSalary: 650000,
      topRecruiters: ["Amazon", "Microsoft", "TCS", "Infosys", "Wipro"]
    },
    entranceExams: ["GEEE", "JEE Main"],
    admissionDetails: {
      eligibility: "GEEE qualified or JEE Main qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "mit-moradabad",
    name: "Moradabad Institute of Technology",
    description: "Engineering college with strong industry connections and practical learning approach.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Management", "Computer Applications"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Moradabad",
      state: "Uttar Pradesh",
      address: "Ram Ganga Vihar, Moradabad, Uttar Pradesh 244001"
    },
    established: 1996,
    accreditation: ["NAAC B+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Workshop", "Computer Center"],
    admissionProcess: "UPSEE / JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Fee concession",
        eligibility: "Family income < ₹2 lakhs"
      }
    ],
    placementRate: 70,
    averagePackage: 480000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 70,
      avgSalary: 480000,
      topRecruiters: ["TCS", "Infosys", "HCL", "Tech Mahindra", "Wipro"]
    },
    entranceExams: ["UPSEE", "JEE Main"],
    admissionDetails: {
      eligibility: "UPSEE qualified or JEE Main qualified with PCM in 12th",
      process: "Online counseling through AKTU",
      deadlines: "July-August annually"
    }
  }
];

const telanganaColleges: College[] = [
  {
    id: "iit-hyderabad",
    name: "Indian Institute of Technology Hyderabad",
    description: "Premier engineering institute known for its cutting-edge research and academic excellence.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Design"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Kandi, Sangareddy, Hyderabad, Telangana 502285"
    },
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Innovation Hub"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 94,
    averagePackage: 2400000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 94,
      avgSalary: 2400000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Intel"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "nit-warangal",
    name: "National Institute of Technology Warangal",
    description: "Prestigious NIT known for its engineering programs and research contributions.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 140000, max: 160000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Warangal",
      state: "Telangana",
      address: "Warangal, Telangana 506004"
    },
    established: 1959,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Innovation Labs"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Complete fee waiver",
        eligibility: "SC/ST category students"
      }
    ],
    placementRate: 90,
    averagePackage: 1800000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 90,
      avgSalary: 1800000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Samsung", "TCS"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad",
    description: "Premier institute for computer science and information technology education.",
    rating: 4.8,
    type: "Private",
    courses: ["Computer Science", "Electronics", "Computational Natural Sciences"],
    fees: {
      tuition: { min: 380000, max: 420000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Gachibowli, Hyderabad, Telangana 500032"
    },
    established: 1998,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Startup Incubator"],
    admissionProcess: "UGEE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹2,00,000",
        eligibility: "Top performers in UGEE"
      },
      {
        name: "Need-based Scholarship",
        amount: "Fee concession",
        eligibility: "Family income < ₹6 lakhs"
      }
    ],
    placementRate: 98,
    averagePackage: 2800000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 98,
      avgSalary: 2800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook", "Adobe"]
    },
    entranceExams: ["UGEE"],
    admissionDetails: {
      eligibility: "UGEE qualified with minimum 75% in 12th with PCM",
      process: "Online counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "osmania-university",
    name: "Osmania University",
    description: "One of the oldest and most prestigious universities in South India offering diverse programs.",
    rating: 4.3,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Law", "Engineering", "Medicine"],
    fees: {
      tuition: { min: 15000, max: 45000 },
      hostel: { min: 8000, max: 18000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "University Road, Hyderabad, Telangana 500007"
    },
    established: 1918,
    accreditation: ["NAAC A+", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers", "Museums"],
    admissionProcess: "Merit based / Entrance exam",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "Minority Scholarship",
        amount: "Fee concession",
        eligibility: "Minority community students"
      }
    ],
    placementRate: 70,
    averagePackage: 500000,
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    placement: {
      percentage: 70,
      avgSalary: 500000,
      topRecruiters: ["Government Organizations", "TCS", "Infosys", "Banking Sector"]
    },
    entranceExams: ["EAMCET", "PGCET"],
    admissionDetails: {
      eligibility: "12th passed from recognized board",
      process: "Online application and entrance exam",
      deadlines: "May-June annually"
    }
  },
  {
    id: "bits-hyderabad",
    name: "Birla Institute of Technology and Science Hyderabad",
    description: "Premier private institute known for its innovative academic programs and industry connections.",
    rating: 4.7,
    type: "Private",
    courses: ["Engineering", "Sciences", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 450000, max: 500000 },
      hostel: { min: 50000, max: 65000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Jawahar Nagar, Kapra Mandal, Medchal, Hyderabad, Telangana 500078"
    },
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Centers", "Research Labs"],
    admissionProcess: "BITSAT",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Up to ₹3,00,000",
        eligibility: "Top performers with family income < ₹12 lakhs"
      },
      {
        name: "Merit Scholarship",
        amount: "Fee waiver",
        eligibility: "Top 1% in BITSAT"
      }
    ],
    placementRate: 95,
    averagePackage: 2200000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 95,
      avgSalary: 2200000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Samsung", "Goldman Sachs"]
    },
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "BITSAT qualified with minimum 75% in 12th with PCM",
      process: "Online counseling based on BITSAT score",
      deadlines: "June-July annually"
    }
  },
  {
    id: "jntu-hyderabad",
    name: "Jawaharlal Nehru Technological University Hyderabad",
    description: "Leading technological university offering various engineering and technology programs.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 60000, max: 80000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Kukatpally, Hyderabad, Telangana 500085"
    },
    established: 1972,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Workshop", "Research Centers"],
    admissionProcess: "TS EAMCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "State Scholarship",
        amount: "Fee concession",
        eligibility: "Telangana domicile students"
      }
    ],
    placementRate: 75,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 75,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["TS EAMCET"],
    admissionDetails: {
      eligibility: "TS EAMCET qualified with PCM in 12th",
      process: "Online counseling through TS EAMCET",
      deadlines: "July-August annually"
    }
  },
  {
    id: "ise-hyderabad",
    name: "Indian School of Business Hyderabad",
    description: "World-renowned business school offering premier management education.",
    rating: 4.9,
    type: "Private",
    courses: ["MBA", "Executive MBA", "Management Programs"],
    fees: {
      tuition: { min: 3400000, max: 3600000 },
      hostel: { min: 80000, max: 100000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Gachibowli, Hyderabad, Telangana 500111"
    },
    established: 2001,
    accreditation: ["AACSB", "EQUIS"],
    facilities: ["Library", "Case Study Rooms", "Hostel", "Sports", "Leadership Center", "Innovation Labs"],
    admissionProcess: "GMAT/GRE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹10,00,000",
        eligibility: "Top performers in GMAT/GRE"
      },
      {
        name: "Diversity Scholarship",
        amount: "Partial fee waiver",
        eligibility: "Underrepresented groups"
      }
    ],
    placementRate: 100,
    averagePackage: 28000000,
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    placement: {
      percentage: 100,
      avgSalary: 28000000,
      topRecruiters: ["McKinsey", "BCG", "Bain", "Goldman Sachs", "JP Morgan"]
    },
    entranceExams: ["GMAT", "GRE"],
    admissionDetails: {
      eligibility: "Bachelor's degree with GMAT/GRE score and work experience",
      process: "Online application with essays and interviews",
      deadlines: "January-March annually"
    }
  },
  {
    id: "cbit-hyderabad",
    name: "Chaitanya Bharathi Institute of Technology",
    description: "Premier engineering college known for its academic excellence and industry partnerships.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Gandipet, Hyderabad, Telangana 500075"
    },
    established: 1979,
    accreditation: ["NAAC A+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center", "Industry Interface"],
    admissionProcess: "TS EAMCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students in TS EAMCET"
      },
      {
        name: "Sports Scholarship",
        amount: "Fee concession",
        eligibility: "State/National level sports achievers"
      }
    ],
    placementRate: 85,
    averagePackage: 850000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 85,
      avgSalary: 850000,
      topRecruiters: ["Microsoft", "Amazon", "TCS", "Infosys", "Cognizant"]
    },
    entranceExams: ["TS EAMCET"],
    admissionDetails: {
      eligibility: "TS EAMCET qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "mvsr-hyderabad",
    name: "Mahatma Gandhi Institute of Technology",
    description: "Well-established engineering college with strong academic programs and placements.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Gandipet, Hyderabad, Telangana 500075"
    },
    established: 1997,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Auditorium", "Computer Center"],
    admissionProcess: "TS EAMCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Fee concession",
        eligibility: "Family income < ₹3 lakhs"
      }
    ],
    placementRate: 80,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 80,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Capgemini"]
    },
    entranceExams: ["TS EAMCET"],
    admissionDetails: {
      eligibility: "TS EAMCET qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "vasavi-hyderabad",
    name: "Vasavi College of Engineering",
    description: "Prestigious engineering college known for its quality education and excellent faculty.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 160000, max: 190000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Ibrahim Bagh, Hyderabad, Telangana 500031"
    },
    established: 1981,
    accreditation: ["NAAC A+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Auditorium", "Research Centers"],
    admissionProcess: "TS EAMCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students in TS EAMCET"
      },
      {
        name: "Alumni Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Children of alumni"
      }
    ],
    placementRate: 88,
    averagePackage: 800000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 88,
      avgSalary: 800000,
      topRecruiters: ["Amazon", "Microsoft", "TCS", "Infosys", "Accenture"]
    },
    entranceExams: ["TS EAMCET"],
    admissionDetails: {
      eligibility: "TS EAMCET qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "nih-hyderabad",
    name: "National Institute of Nutrition",
    description: "Premier institute for nutrition research and public health education.",
    rating: 4.5,
    type: "Government",
    courses: ["Nutrition", "Public Health", "Food Technology", "Biochemistry"],
    fees: {
      tuition: { min: 25000, max: 40000 },
      hostel: { min: 12000, max: 20000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Jamai-Osmania, Hyderabad, Telangana 500007"
    },
    established: 1918,
    accreditation: ["NAAC A+", "ICMR"],
    facilities: ["Library", "Research Labs", "Hostel", "Clinical Units", "Community Health Centers"],
    admissionProcess: "Entrance exam",
    scholarships: [
      {
        name: "Research Fellowship",
        amount: "₹31,000 per month",
        eligibility: "PhD students"
      },
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top performers"
      }
    ],
    placementRate: 92,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    placement: {
      percentage: 92,
      avgSalary: 600000,
      topRecruiters: ["ICMR", "WHO", "Government Health Departments", "NGOs", "Research Institutions"]
    },
    entranceExams: ["GATE", "NET"],
    admissionDetails: {
      eligibility: "Master's degree in relevant subjects",
      process: "Entrance exam and interview",
      deadlines: "March-April annually"
    }
  },
  {
    id: "nalsar-hyderabad",
    name: "NALSAR University of Law",
    description: "Premier law university known for its excellent legal education and research programs.",
    rating: 4.6,
    type: "Government",
    courses: ["Law", "Legal Studies", "Business Law", "International Law"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Justice City, Shameerpet, Hyderabad, Telangana 500101"
    },
    established: 1998,
    accreditation: ["NAAC A++", "BCI"],
    facilities: ["Library", "Moot Court", "Hostel", "Sports", "Legal Aid Clinic", "Research Centers"],
    admissionProcess: "CLAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,00,000",
        eligibility: "Top performers in CLAT"
      },
      {
        name: "Need-based Scholarship",
        amount: "Fee concession",
        eligibility: "Family income < ₹4 lakhs"
      }
    ],
    placementRate: 95,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    placement: {
      percentage: 95,
      avgSalary: 1200000,
      topRecruiters: ["Law Firms", "Corporate Legal Departments", "Government", "Judiciary", "Legal Consultancies"]
    },
    entranceExams: ["CLAT"],
    admissionDetails: {
      eligibility: "CLAT qualified with 12th passed",
      process: "Online counseling based on CLAT score",
      deadlines: "June-July annually"
    }
  }
];

const gujaratColleges: College[] = [
  {
    id: "iit-gandhinagar",
    name: "Indian Institute of Technology Gandhinagar",
    description: "Premier engineering institute known for its innovative curriculum and research excellence.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Design"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      address: "Palaj, Gandhinagar, Gujarat 382355"
    },
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Innovation Hub"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 93,
    averagePackage: 2300000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 93,
      avgSalary: 2300000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Samsung"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "nit-surat",
    name: "Sardar Vallabhbhai National Institute of Technology Surat",
    description: "Leading NIT known for its engineering programs and research contributions.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Technology", "Management", "Sciences"],
    fees: {
      tuition: { min: 140000, max: 160000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Surat",
      state: "Gujarat",
      address: "Ichchhanath, Surat, Gujarat 395007"
    },
    established: 1961,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Innovation Labs"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Complete fee waiver",
        eligibility: "SC/ST category students"
      }
    ],
    placementRate: 88,
    averagePackage: 1600000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 88,
      avgSalary: 1600000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "TCS", "L&T"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "iiim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad",
    description: "Premier management institute and one of the top business schools in India.",
    rating: 4.9,
    type: "Government",
    courses: ["MBA", "Executive MBA", "Management Programs", "PhD"],
    fees: {
      tuition: { min: 2500000, max: 2700000 },
      hostel: { min: 60000, max: 80000 },
    },
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Vastrapur, Ahmedabad, Gujarat 380015"
    },
    established: 1961,
    accreditation: ["AACSB", "EQUIS", "AMBA"],
    facilities: ["Library", "Case Study Rooms", "Hostel", "Sports", "Leadership Center", "Innovation Labs"],
    admissionProcess: "CAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹5,00,000",
        eligibility: "Top performers in CAT"
      },
      {
        name: "Need-based Scholarship",
        amount: "Partial fee waiver",
        eligibility: "Family income < ₹8 lakhs"
      }
    ],
    placementRate: 100,
    averagePackage: 32000000,
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    placement: {
      percentage: 100,
      avgSalary: 32000000,
      topRecruiters: ["McKinsey", "BCG", "Bain", "Goldman Sachs", "JP Morgan"]
    },
    entranceExams: ["CAT"],
    admissionDetails: {
      eligibility: "CAT qualified with bachelor's degree and work experience",
      process: "Group discussion, personal interview, and written ability test",
      deadlines: "January-February annually"
    }
  },
  {
    id: "daiict-gandhinagar",
    name: "Dhirubhai Ambani Institute of Information and Communication Technology",
    description: "Premier institute for ICT education with strong industry partnerships.",
    rating: 4.4,
    type: "Private",
    courses: ["ICT", "Computer Science", "Electronics", "Design"],
    fees: {
      tuition: { min: 280000, max: 320000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      address: "Near Indroda Circle, Gandhinagar, Gujarat 382007"
    },
    established: 2001,
    accreditation: ["NAAC A+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center", "Incubation Hub"],
    admissionProcess: "JEE Main / GUJCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,00,000",
        eligibility: "Top 10% students in entrance exam"
      },
      {
        name: "Need-based Scholarship",
        amount: "Fee concession",
        eligibility: "Family income < ₹4 lakhs"
      }
    ],
    placementRate: 92,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 92,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Adobe", "Cisco"]
    },
    entranceExams: ["JEE Main", "GUJCET"],
    admissionDetails: {
      eligibility: "JEE Main qualified or GUJCET qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "gujarat-university",
    name: "Gujarat University",
    description: "One of the oldest and largest universities in Gujarat offering diverse programs.",
    rating: 4.2,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Law", "Management", "Engineering"],
    fees: {
      tuition: { min: 15000, max: 40000 },
      hostel: { min: 8000, max: 18000 },
    },
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Navrangpura, Ahmedabad, Gujarat 380009"
    },
    established: 1949,
    accreditation: ["NAAC A+", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers", "Museums"],
    admissionProcess: "Merit based / Entrance exam",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "State Scholarship",
        amount: "Fee concession",
        eligibility: "Gujarat domicile students"
      }
    ],
    placementRate: 65,
    averagePackage: 450000,
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    placement: {
      percentage: 65,
      avgSalary: 450000,
      topRecruiters: ["Government Organizations", "TCS", "Infosys", "Banking Sector"]
    },
    entranceExams: ["GUJCET", "CUET"],
    admissionDetails: {
      eligibility: "12th passed from recognized board",
      process: "Online application and entrance exam",
      deadlines: "May-June annually"
    }
  },
  {
    id: "ldrp-gandhinagar",
    name: "L.D. College of Engineering",
    description: "Premier government engineering college with excellent academic programs.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 65000, max: 85000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Navrangpura, Ahmedabad, Gujarat 380015"
    },
    established: 1948,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Workshop", "Computer Center"],
    admissionProcess: "GUJCET / JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "State Scholarship",
        amount: "Fee concession",
        eligibility: "Gujarat domicile students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Wipro", "HCL"]
    },
    entranceExams: ["GUJCET", "JEE Main"],
    admissionDetails: {
      eligibility: "GUJCET qualified or JEE Main qualified with PCM in 12th",
      process: "Online counseling through ACPC",
      deadlines: "July-August annually"
    }
  },
  {
    id: "nirma-university",
    name: "Nirma University",
    description: "Leading private university known for its engineering and management programs.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Pharmacy", "Architecture"],
    fees: {
      tuition: { min: 220000, max: 280000 },
      hostel: { min: 30000, max: 45000 },
    },
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Sarkhej-Gandhinagar Highway, Ahmedabad, Gujarat 382481"
    },
    established: 2003,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center", "Industry Interface"],
    admissionProcess: "JEE Main / GUJCET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹75,000",
        eligibility: "Top performers in entrance exam"
      },
      {
        name: "Sports Scholarship",
        amount: "Fee concession",
        eligibility: "State/National level sports achievers"
      }
    ],
    placementRate: 85,
    averagePackage: 950000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 85,
      avgSalary: 950000,
      topRecruiters: ["Amazon", "Microsoft", "TCS", "Infosys", "L&T"]
    },
    entranceExams: ["JEE Main", "GUJCET"],
    admissionDetails: {
      eligibility: "JEE Main qualified or GUJCET qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "cept-ahmedabad",
    name: "CEPT University",
    description: "Specialized university for planning, architecture, technology, and management.",
    rating: 4.5,
    type: "Private",
    courses: ["Architecture", "Planning", "Technology", "Management", "Design"],
    fees: {
      tuition: { min: 180000, max: 250000 },
      hostel: { min: 25000, max: 40000 },
    },
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Kasturbhai Lalbhai Campus, University Road, Ahmedabad, Gujarat 380009"
    },
    established: 2005,
    accreditation: ["NAAC A+", "COA"],
    facilities: ["Library", "Design Studios", "Hostel", "Sports", "Workshop", "Exhibition Halls"],
    admissionProcess: "NATA / JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Top 10% students"
      },
      {
        name: "Design Excellence Scholarship",
        amount: "Fee waiver",
        eligibility: "Outstanding portfolio submission"
      }
    ],
    placementRate: 88,
    averagePackage: 800000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 88,
      avgSalary: 800000,
      topRecruiters: ["Architecture Firms", "Design Studios", "Urban Planning Agencies", "Construction Companies"]
    },
    entranceExams: ["NATA", "JEE Main"],
    admissionDetails: {
      eligibility: "NATA qualified or JEE Main qualified with 12th passed",
      process: "Portfolio review and counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "pandit-deendayal",
    name: "Pandit Deendayal Energy University",
    description: "Specialized university focused on energy and petroleum studies.",
    rating: 4.1,
    type: "Government",
    courses: ["Petroleum Engineering", "Energy Engineering", "Management", "Law"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      address: "Raisan Village, Gandhinagar, Gujarat 382426"
    },
    established: 2007,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers", "Industry Partnerships"],
    admissionProcess: "JEE Main / GUJCET",
    scholarships: [
      {
        name: "Energy Sector Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top performers in energy-related courses"
      },
      {
        name: "Merit Scholarship",
        amount: "Fee concession",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 82,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 82,
      avgSalary: 750000,
      topRecruiters: ["ONGC", "Reliance", "IOCL", "BPCL", "Adani Group"]
    },
    entranceExams: ["JEE Main", "GUJCET"],
    admissionDetails: {
      eligibility: "JEE Main qualified or GUJCET qualified with PCM in 12th",
      process: "Online counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "msu-baroda",
    name: "Maharaja Sayajirao University of Baroda",
    description: "Premier state university offering comprehensive education across multiple disciplines.",
    rating: 4.3,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Engineering", "Medicine", "Law"],
    fees: {
      tuition: { min: 20000, max: 50000 },
      hostel: { min: 10000, max: 20000 },
    },
    location: {
      city: "Vadodara",
      state: "Gujarat",
      address: "Pratapgunj, Vadodara, Gujarat 390002"
    },
    established: 1949,
    accreditation: ["NAAC A+", "UGC"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers", "Museums"],
    admissionProcess: "Merit based / Entrance exam",
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "State Scholarship",
        amount: "Fee concession",
        eligibility: "Gujarat domicile students"
      }
    ],
    placementRate: 70,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    placement: {
      percentage: 70,
      avgSalary: 550000,
      topRecruiters: ["Government Organizations", "TCS", "Infosys", "Healthcare Sector"]
    },
    entranceExams: ["GUJCET", "NEET", "CLAT"],
    admissionDetails: {
      eligibility: "12th passed from recognized board",
      process: "Online application and entrance exam",
      deadlines: "May-June annually"
    }
  }
];

const rajasthanColleges: College[] = [
  {
    id: "iit-jodhpur",
    name: "Indian Institute of Technology Jodhpur",
    description: "Premier engineering institute in Rajasthan known for its innovative curriculum and research excellence.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Jodhpur",
      state: "Rajasthan",
      address: "NH 65, Nagaur Road, Karwar, Jodhpur, Rajasthan 342037"
    },
    established: 2008,
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Research Labs", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition waiver",
        eligibility: "Family income < 5 LPA"
      }
    ],
    placementRate: 90,
    averagePackage: 1300000,
    placement: {
      percentage: 90,
      avgSalary: 1300000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified candidates",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const westBengalColleges: College[] = [
  {
    id: "jadavpur-university",
    name: "Jadavpur University",
    description: "Prestigious state university known for engineering, arts, and research excellence.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Arts", "Science", "Management"],
    fees: {
      tuition: { min: 25000, max: 80000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "188, Raja S.C. Mallick Rd, Jadavpur, Kolkata, West Bengal 700032"
    },
    established: 1955,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "WBJEE/JECA",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 85,
    averagePackage: 800000,
    placement: {
      percentage: 85,
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant"]
    },
    entranceExams: ["WBJEE", "JECA"],
    admissionDetails: {
      eligibility: "12th PCM for engineering",
      process: "WBJEE Counselling",
      deadlines: "June-August"
    }
  }
];

const punjabColleges: College[] = [
  {
    id: "pec-chandigarh",
    name: "Punjab Engineering College",
    description: "Premier engineering college with excellent infrastructure and placement record.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 10000, max: 18000 }
    },
    location: {
      city: "Chandigarh",
      state: "Punjab",
      address: "Sector 12, Chandigarh 160012"
    },
    established: 1921,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Labs", "Library", "Hostels", "Sports Facilities"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top performers"
      }
    ],
    placementRate: 88,
    averagePackage: 700000,
    placement: {
      percentage: 88,
      avgSalary: 700000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Infosys"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const andhraPradeshColleges: College[] = [
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad",
    description: "Premier IT institute known for computer science and information technology programs.",
    rating: 4.6,
    type: "Private",
    courses: ["Computer Science", "Electronics", "Design"],
    fees: {
      tuition: { min: 300000, max: 400000 },
      hostel: { min: 20000, max: 30000 }
    },
    location: {
      city: "Hyderabad",
      state: "Andhra Pradesh",
      address: "Gachibowli, Hyderabad, Telangana 500032"
    },
    established: 1998,
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Research Centers", "Incubation Center", "Hostels", "Sports Complex"],
    admissionProcess: "UGEE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "50% tuition waiver",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 95,
    averagePackage: 1800000,
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Facebook", "Amazon"]
    },
    entranceExams: ["UGEE"],
    admissionDetails: {
      eligibility: "12th PCM with 90%+ marks",
      process: "UGEE Exam",
      deadlines: "April-May"
    }
  }
];

const biharColleges: College[] = [
  {
    id: "nit-patna",
    name: "National Institute of Technology Patna",
    description: "Premier technical institute offering quality engineering education in Bihar.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Patna",
      state: "Bihar",
      address: "Ashok Rajpath, Patna, Bihar 800005"
    },
    established: 2004,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Labs", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 82,
    averagePackage: 800000,
    placement: {
      percentage: 82,
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const arunachalPradeshColleges: College[] = [
  {
    id: "rajiv-gandhi-university",
    name: "Rajiv Gandhi University",
    description: "State university offering diverse academic programs in Arunachal Pradesh.",
    rating: 3.8,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Management", "Law"],
    fees: {
      tuition: { min: 15000, max: 50000 },
      hostel: { min: 5000, max: 10000 }
    },
    location: {
      city: "Itanagar",
      state: "Arunachal Pradesh",
      address: "Rono Hills, Doimukh, Itanagar, Arunachal Pradesh 791112"
    },
    established: 1985,
    accreditation: ["NAAC B+", "UGC"],
    facilities: ["Library", "Hostels", "Sports Complex", "Computer Center"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "State Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 65,
    averagePackage: 300000,
    placement: {
      percentage: 65,
      avgSalary: 300000,
      topRecruiters: ["Government Departments", "Private Companies", "Banks"]
    },
    entranceExams: ["University Entrance Test"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const assamColleges: College[] = [
  {
    id: "iit-guwahati",
    name: "Indian Institute of Technology Guwahati",
    description: "Premier engineering institute in Northeast India known for academic excellence.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Design"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Guwahati",
      state: "Assam",
      address: "Guwahati, Assam 781039"
    },
    established: 1994,
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition waiver",
        eligibility: "Family income < 5 LPA"
      }
    ],
    placementRate: 88,
    averagePackage: 1200000,
    placement: {
      percentage: 88,
      avgSalary: 1200000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const chhattisgarhColleges: College[] = [
  {
    id: "nit-raipur",
    name: "National Institute of Technology Raipur",
    description: "Premier technical institute offering quality engineering education in Chhattisgarh.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Raipur",
      state: "Chhattisgarh",
      address: "GE Road, Raipur, Chhattisgarh 492010"
    },
    established: 1956,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Labs", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 700000,
    placement: {
      percentage: 80,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const goaColleges: College[] = [
  {
    id: "goa-university",
    name: "Goa University",
    description: "State university offering diverse academic programs in a coastal setting.",
    rating: 4.0,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Engineering", "Law"],
    fees: {
      tuition: { min: 20000, max: 80000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Panaji",
      state: "Goa",
      address: "Taleigao Plateau, Goa 403206"
    },
    established: 1985,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Marine Sciences Center", "Library", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top performers"
      }
    ],
    placementRate: 70,
    averagePackage: 450000,
    placement: {
      percentage: 70,
      avgSalary: 450000,
      topRecruiters: ["Government Sectors", "Tourism Industry", "IT Companies"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const haryanaColleges: College[] = [
  {
    id: "nit-kurukshetra",
    name: "National Institute of Technology Kurukshetra",
    description: "Premier technical institute known for engineering excellence in Haryana.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Kurukshetra",
      state: "Haryana",
      address: "Kurukshetra, Haryana 136119"
    },
    established: 1963,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 85,
    averagePackage: 900000,
    placement: {
      percentage: 85,
      avgSalary: 900000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Samsung"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const himachalPradeshColleges: College[] = [
  {
    id: "nit-hamirpur",
    name: "National Institute of Technology Hamirpur",
    description: "Premier engineering institute nestled in the hills of Himachal Pradesh.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Hamirpur",
      state: "Himachal Pradesh",
      address: "Hamirpur, Himachal Pradesh 177005"
    },
    established: 1986,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Labs", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 83,
    averagePackage: 750000,
    placement: {
      percentage: 83,
      avgSalary: 750000,
      topRecruiters: ["TCS", "Infosys", "Amazon", "Microsoft"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const jharkhandColleges: College[] = [
  {
    id: "nit-jamshedpur",
    name: "National Institute of Technology Jamshedpur",
    description: "Premier technical institute in the steel city of Jamshedpur.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Jamshedpur",
      state: "Jharkhand",
      address: "Adityapur, Jamshedpur, Jharkhand 831014"
    },
    established: 1960,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Tata Steel", "Wipro"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const madhyaPradeshColleges: College[] = [
  {
    id: "iiit-bhopal",
    name: "Indian Institute of Information Technology Bhopal",
    description: "Premier IT institute known for computer science and information technology programs.",
    rating: 4.3,
    type: "Government",
    courses: ["Computer Science", "Information Technology", "Electronics"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Bhopal",
      state: "Madhya Pradesh",
      address: "Bhopal, Madhya Pradesh 462066"
    },
    established: 2017,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Computer Labs", "Research Centers", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 85,
    averagePackage: 900000,
    placement: {
      percentage: 85,
      avgSalary: 900000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const manipurColleges: College[] = [
  {
    id: "manipur-university",
    name: "Manipur University",
    description: "Central university offering diverse academic programs in Manipur.",
    rating: 3.9,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Management", "Education"],
    fees: {
      tuition: { min: 15000, max: 60000 },
      hostel: { min: 6000, max: 12000 }
    },
    location: {
      city: "Imphal",
      state: "Manipur",
      address: "Canchipur, Imphal, Manipur 795003"
    },
    established: 1980,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Central Library", "Research Centers", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Central University Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 68,
    averagePackage: 350000,
    placement: {
      percentage: 68,
      avgSalary: 350000,
      topRecruiters: ["Government Departments", "NGOs", "Private Companies"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const meghalayaColleges: College[] = [
  {
    id: "nit-meghalaya",
    name: "National Institute of Technology Meghalaya",
    description: "Emerging technical institute offering quality engineering education in Northeast India.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Shillong",
      state: "Meghalaya",
      address: "Bijni Complex, Laitumkhrah, Shillong, Meghalaya 793003"
    },
    established: 2010,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Computer Labs", "Library", "Hostels", "Sports Facilities"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 600000,
    placement: {
      percentage: 75,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const mizoramColleges: College[] = [
  {
    id: "mizoram-university",
    name: "Mizoram University",
    description: "Central university providing quality higher education in Mizoram.",
    rating: 3.8,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Management", "Law"],
    fees: {
      tuition: { min: 12000, max: 50000 },
      hostel: { min: 5000, max: 10000 }
    },
    location: {
      city: "Aizawl",
      state: "Mizoram",
      address: "Tanhril, Aizawl, Mizoram 796004"
    },
    established: 2001,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Central Library", "Computer Center", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Central University Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 62,
    averagePackage: 280000,
    placement: {
      percentage: 62,
      avgSalary: 280000,
      topRecruiters: ["Government Departments", "Banks", "Private Companies"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const nagalandColleges: College[] = [
  {
    id: "nagaland-university",
    name: "Nagaland University",
    description: "Central university offering quality education in diverse fields in Nagaland.",
    rating: 3.7,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Management", "Education"],
    fees: {
      tuition: { min: 12000, max: 45000 },
      hostel: { min: 5000, max: 10000 }
    },
    location: {
      city: "Kohima",
      state: "Nagaland",
      address: "Lumami, Zunheboto, Nagaland 798627"
    },
    established: 1994,
    accreditation: ["NAAC B++", "UGC"],
    facilities: ["Library", "Computer Center", "Hostels", "Sports Facilities"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top performers"
      }
    ],
    placementRate: 58,
    averagePackage: 250000,
    placement: {
      percentage: 58,
      avgSalary: 250000,
      topRecruiters: ["Government Departments", "NGOs", "Banks"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "Direct Admission",
      deadlines: "June-August"
    }
  }
];

const odishaColleges: College[] = [
  {
    id: "nit-rourkela",
    name: "National Institute of Technology Rourkela",
    description: "Premier engineering institute in Odisha known for its excellent academic standards.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology", "Science", "Management"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Rourkela",
      state: "Odisha",
      address: "Sector-1, Rourkela, Odisha 769008"
    },
    established: 1961,
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 87,
    averagePackage: 950000,
    placement: {
      percentage: 87,
      avgSalary: 950000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Samsung"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const sikkimColleges: College[] = [
  {
    id: "sikkim-university",
    name: "Sikkim University",
    description: "Central university offering quality education in the beautiful state of Sikkim.",
    rating: 3.9,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Management", "Technology"],
    fees: {
      tuition: { min: 15000, max: 60000 },
      hostel: { min: 6000, max: 12000 }
    },
    location: {
      city: "Gangtok",
      state: "Sikkim",
      address: "6th Mile, Samdur, Tadong, Gangtok, Sikkim 737102"
    },
    established: 2007,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Central Library", "Research Centers", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Central University Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 70,
    averagePackage: 400000,
    placement: {
      percentage: 70,
      avgSalary: 400000,
      topRecruiters: ["Government Departments", "Tourism Industry", "IT Companies"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const tripuraColleges: College[] = [
  {
    id: "tripura-university",
    name: "Tripura University",
    description: "Central university providing quality higher education in Tripura.",
    rating: 3.8,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Management", "Education"],
    fees: {
      tuition: { min: 12000, max: 50000 },
      hostel: { min: 5000, max: 10000 }
    },
    location: {
      city: "Agartala",
      state: "Tripura",
      address: "Suryamaninagar, Agartala, Tripura 799022"
    },
    established: 1987,
    accreditation: ["NAAC A", "UGC"],
    facilities: ["Central Library", "Computer Center", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Central University Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 65,
    averagePackage: 320000,
    placement: {
      percentage: 65,
      avgSalary: 320000,
      topRecruiters: ["Government Departments", "Banks", "Private Companies"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const uttarakhandColleges: College[] = [
  {
    id: "iit-roorkee",
    name: "Indian Institute of Technology Roorkee",
    description: "One of the oldest technical institutions in Asia, known for engineering excellence.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Architecture", "Management", "Science"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 15000, max: 25000 }
    },
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      address: "Roorkee, Uttarakhand 247667"
    },
    established: 1847,
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Research Centers", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition waiver",
        eligibility: "Family income < 5 LPA"
      }
    ],
    placementRate: 92,
    averagePackage: 1400000,
    placement: {
      percentage: 92,
      avgSalary: 1400000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const andamanNicobarColleges: College[] = [
  {
    id: "andaman-university",
    name: "Dr. A.P.J. Abdul Kalam University",
    description: "University offering diverse academic programs in the Andaman & Nicobar Islands.",
    rating: 3.6,
    type: "Government",
    courses: ["Science", "Arts", "Commerce", "Management"],
    fees: {
      tuition: { min: 15000, max: 40000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Port Blair",
      state: "Andaman & Nicobar Islands",
      address: "Brookshabad, Port Blair, Andaman & Nicobar Islands 744112"
    },
    established: 2016,
    accreditation: ["UGC", "NAAC B+"],
    facilities: ["Library", "Computer Center", "Hostels", "Marine Studies Center"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "Island Development Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Local students"
      }
    ],
    placementRate: 55,
    averagePackage: 250000,
    placement: {
      percentage: 55,
      avgSalary: 250000,
      topRecruiters: ["Government Departments", "Tourism Industry", "Marine Organizations"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "Direct Admission",
      deadlines: "June-August"
    }
  }
];

const chandigarhColleges: College[] = [
  {
    id: "panjab-university",
    name: "Panjab University",
    description: "Premier university in Chandigarh offering diverse academic programs.",
    rating: 4.2,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Engineering", "Law", "Management"],
    fees: {
      tuition: { min: 25000, max: 100000 },
      hostel: { min: 10000, max: 20000 }
    },
    location: {
      city: "Chandigarh",
      state: "Chandigarh",
      address: "Sector 14, Chandigarh 160014"
    },
    established: 1882,
    accreditation: ["NAAC A++", "UGC"],
    facilities: ["Central Library", "Research Centers", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["Government Sectors", "IT Companies", "Banks"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

const dadraNagarHaveliColleges: College[] = [
  {
    id: "dnh-college",
    name: "Government College Silvassa",
    description: "Government college providing quality education in Dadra & Nagar Haveli.",
    rating: 3.5,
    type: "Government",
    courses: ["Arts", "Science", "Commerce"],
    fees: {
      tuition: { min: 8000, max: 25000 },
      hostel: { min: 4000, max: 8000 }
    },
    location: {
      city: "Silvassa",
      state: "Dadra & Nagar Haveli",
      address: "Silvassa, Dadra & Nagar Haveli 396230"
    },
    established: 1965,
    accreditation: ["UGC", "NAAC B"],
    facilities: ["Library", "Computer Lab", "Sports Ground"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "Government Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 50,
    averagePackage: 200000,
    placement: {
      percentage: 50,
      avgSalary: 200000,
      topRecruiters: ["Government Departments", "Local Industries"]
    },
    entranceExams: ["Merit Based"],
    admissionDetails: {
      eligibility: "12th passed",
      process: "Direct Admission",
      deadlines: "June-July"
    }
  }
];

const damanDiuColleges: College[] = [
  {
    id: "daman-college",
    name: "Government College Daman",
    description: "Government college offering undergraduate programs in Daman & Diu.",
    rating: 3.4,
    type: "Government",
    courses: ["Arts", "Science", "Commerce"],
    fees: {
      tuition: { min: 8000, max: 25000 },
      hostel: { min: 4000, max: 8000 }
    },
    location: {
      city: "Daman",
      state: "Daman & Diu",
      address: "Nani Daman, Daman 396210"
    },
    established: 1968,
    accreditation: ["UGC", "NAAC B"],
    facilities: ["Library", "Computer Lab", "Sports Facilities"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "UT Scholarship",
        amount: "₹8,000 per year",
        eligibility: "Local students"
      }
    ],
    placementRate: 45,
    averagePackage: 180000,
    placement: {
      percentage: 45,
      avgSalary: 180000,
      topRecruiters: ["Government Departments", "Tourism Industry"]
    },
    entranceExams: ["Merit Based"],
    admissionDetails: {
      eligibility: "12th passed",
      process: "Direct Admission",
      deadlines: "June-July"
    }
  }
];

const jammuKashmirColleges: College[] = [
  {
    id: "nit-srinagar",
    name: "National Institute of Technology Srinagar",
    description: "Premier technical institute in the beautiful valley of Kashmir.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology", "Science"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 12000, max: 20000 }
    },
    location: {
      city: "Srinagar",
      state: "Jammu & Kashmir",
      address: "Hazratbal, Srinagar, Jammu & Kashmir 190006"
    },
    established: 1960,
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Research Labs", "Central Library", "Hostels", "Sports Complex"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 700000,
    placement: {
      percentage: 80,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Amazon"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified",
      process: "JoSAA Counselling",
      deadlines: "June-July"
    }
  }
];

const ladakhColleges: College[] = [
  {
    id: "ladakh-university",
    name: "University of Ladakh",
    description: "Newly established university serving the high-altitude region of Ladakh.",
    rating: 3.6,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Buddhist Studies"],
    fees: {
      tuition: { min: 10000, max: 35000 },
      hostel: { min: 5000, max: 10000 }
    },
    location: {
      city: "Leh",
      state: "Ladakh",
      address: "Leh, Ladakh 194101"
    },
    established: 2019,
    accreditation: ["UGC"],
    facilities: ["Library", "Computer Center", "Hostels", "Research Centers"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "Ladakh Development Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Local students"
      }
    ],
    placementRate: 52,
    averagePackage: 220000,
    placement: {
      percentage: 52,
      avgSalary: 220000,
      topRecruiters: ["Government Departments", "Tourism Industry", "NGOs"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed",
      process: "Direct Admission",
      deadlines: "June-August"
    }
  }
];

const lakshadweepColleges: College[] = [
  {
    id: "lakshadweep-college",
    name: "Govt. Degree College Kavaratti",
    description: "Government college providing higher education in the coral islands of Lakshadweep.",
    rating: 3.3,
    type: "Government",
    courses: ["Arts", "Science", "Commerce"],
    fees: {
      tuition: { min: 5000, max: 20000 },
      hostel: { min: 3000, max: 6000 }
    },
    location: {
      city: "Kavaratti",
      state: "Lakshadweep",
      address: "Kavaratti, Lakshadweep 682555"
    },
    established: 1985,
    accreditation: ["UGC"],
    facilities: ["Library", "Computer Lab", "Marine Studies Center"],
    admissionProcess: "Merit Based",
    scholarships: [
      {
        name: "Island Scholarship",
        amount: "₹5,000 per year",
        eligibility: "All students"
      }
    ],
    placementRate: 40,
    averagePackage: 150000,
    placement: {
      percentage: 40,
      avgSalary: 150000,
      topRecruiters: ["Government Departments", "Fisheries", "Tourism"]
    },
    entranceExams: ["Merit Based"],
    admissionDetails: {
      eligibility: "12th passed",
      process: "Direct Admission",
      deadlines: "June-July"
    }
  }
];

const puducherryColleges: College[] = [
  {
    id: "pondicherry-university",
    name: "Pondicherry University",
    description: "Central university offering diverse academic programs in the Union Territory of Puducherry.",
    rating: 4.0,
    type: "Government",
    courses: ["Arts", "Science", "Engineering", "Management", "Law"],
    fees: {
      tuition: { min: 20000, max: 80000 },
      hostel: { min: 8000, max: 15000 }
    },
    location: {
      city: "Puducherry",
      state: "Puducherry",
      address: "R.V. Nagar, Kalapet, Puducherry 605014"
    },
    established: 1985,
    accreditation: ["NAAC A++", "UGC"],
    facilities: ["Central Library", "Research Centers", "Hostels", "Sports Complex"],
    admissionProcess: "Merit/Entrance Based",
    scholarships: [
      {
        name: "Central University Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Merit-based selection"
      }
    ],
    placementRate: 75,
    averagePackage: 500000,
    placement: {
      percentage: 75,
      avgSalary: 500000,
      topRecruiters: ["Government Sectors", "IT Companies", "Research Organizations"]
    },
    entranceExams: ["University Entrance Tests"],
    admissionDetails: {
      eligibility: "12th passed for UG",
      process: "University Counselling",
      deadlines: "June-August"
    }
  }
];

export const getCollegesByState = (stateId: string) => {
  const stateCollegeMap: { [key: string]: College[] } = {
    "maharashtra": maharashtraColleges,
    "delhi": delhiColleges,
    "karnataka": karnatakaColleges,
    "tamil-nadu": tamilNaduColleges,
    "uttar-pradesh": uttarPradeshColleges,
    "gujarat": gujaratColleges,
    "rajasthan": rajasthanColleges,
    "west-bengal": westBengalColleges,
    "kerala": keralaColleges,
    "punjab": punjabColleges,
    "andhra-pradesh": andhraPradeshColleges,
    "bihar": biharColleges,
    "telangana": telanganaColleges,
    "arunachal-pradesh": arunachalPradeshColleges,
    "assam": assamColleges,
    "chhattisgarh": chhattisgarhColleges,
    "goa": goaColleges,
    "haryana": haryanaColleges,
    "himachal-pradesh": himachalPradeshColleges,
    "jharkhand": jharkhandColleges,
    "madhya-pradesh": madhyaPradeshColleges,
    "manipur": manipurColleges,
    "meghalaya": meghalayaColleges,
    "mizoram": mizoramColleges,
    "nagaland": nagalandColleges,
    "odisha": odishaColleges,
    "sikkim": sikkimColleges,
    "tripura": tripuraColleges,
    "uttarakhand": uttarakhandColleges,
    "andaman-nicobar": andamanNicobarColleges,
    "chandigarh": chandigarhColleges,
    "dadra-nagar-haveli": dadraNagarHaveliColleges,
    "daman-diu": damanDiuColleges,
    "jammu-kashmir": jammuKashmirColleges,
    "ladakh": ladakhColleges,
    "lakshadweep": lakshadweepColleges,
    "puducherry": puducherryColleges
  };

  return stateCollegeMap[stateId] || [];
};

export const getCollegeById = (collegeId: string): College | undefined => {
  const allStates = Object.keys({
    "maharashtra": maharashtraColleges,
    "delhi": delhiColleges,
    "karnataka": karnatakaColleges,
    "tamil-nadu": tamilNaduColleges,
    "uttar-pradesh": uttarPradeshColleges,
    "gujarat": gujaratColleges,
    "rajasthan": [],
    "west-bengal": [],
    "kerala": keralaColleges,
    "punjab": [],
    "andhra-pradesh": [],
    "bihar": [],
    "telangana": telanganaColleges,
    "arunachal-pradesh": [],
    "assam": [],
    "chhattisgarh": [],
    "goa": [],
    "haryana": [],
    "himachal-pradesh": [],
    "jharkhand": [],
    "madhya-pradesh": [],
    "manipur": [],
    "meghalaya": [],
    "mizoram": [],
    "nagaland": [],
    "odisha": [],
    "sikkim": [],
    "tripura": [],
    "uttarakhand": [],
    "andaman-nicobar": [],
    "chandigarh": [],
    "dadra-nagar-haveli": [],
    "daman-diu": [],
    "jammu-kashmir": [],
    "ladakh": [],
    "lakshadweep": [],
    "puducherry": []
  });
  
  for (const stateId of allStates) {
    const colleges = getCollegesByState(stateId);
    const college = colleges.find(c => c.id === collegeId);
    if (college) {
      return college;
    }
  }
  
  return undefined;
};
