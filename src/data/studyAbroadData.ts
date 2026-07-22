export interface Country {
  id: string;
  name: string;
  description: string;
  flagUrl: string;
}

export interface StudyAbroadCollege {
  id: string;
  countryId: string;
  name: string;
  imageUrl: string;
  description: string;
  ranking: number;
  tuitionFee: string;
  acceptanceRate: string;
  website: string;
  scholarships: Scholarship[];
}

interface Scholarship {
  name: string;
  amount: string;
  deadline: string;
  eligibility: string;
  link: string;
}

export const countries: Country[] = [
  {
    id: "usa",
    name: "United States",
    description: "The United States is a popular destination for international students, offering a wide range of academic programs and world-renowned universities.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
  },
  {
    id: "uk",
    name: "United Kingdom",
    description: "The United Kingdom boasts a rich history of academic excellence and is home to some of the world's most prestigious universities.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
  },
  {
    id: "canada",
    name: "Canada",
    description: "Canada is known for its high quality of life, multicultural environment, and affordable tuition fees, making it an attractive option for international students.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
  },
  {
    id: "australia",
    name: "Australia",
    description: "Australia offers a unique blend of world-class education, stunning natural landscapes, and a relaxed lifestyle, making it a desirable destination for students.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
  },
  {
    id: "germany",
    name: "Germany",
    description: "Germany is a hub for engineering and technology, offering free or low-cost tuition at public universities and a growing number of English-taught programs.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
  },
  {
    id: "japan",
    name: "Japan",
    description: "Japan combines ancient traditions with cutting-edge technology and offers excellent universities with strong programs in engineering, technology, and arts.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
  },
  {
    id: "singapore",
    name: "Singapore",
    description: "Singapore is a global education hub with world-class universities, offering a safe, multicultural environment and strong connections to Asian business markets.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
  },
  {
    id: "sweden",
    name: "Sweden",
    description: "Sweden offers innovative education approaches with a focus on sustainability, creativity and critical thinking, with many programs taught entirely in English.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
  },
  {
    id: "france",
    name: "France",
    description: "France offers prestigious educational institutions, rich cultural experiences, and relatively affordable tuition fees, especially for public universities.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
  },
  {
    id: "netherlands",
    name: "Netherlands",
    description: "The Netherlands offers numerous English-taught programs in an international environment, with strong emphasis on innovation and practical applications.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
  }
];

export const studyAbroadColleges: StudyAbroadCollege[] = [
  {
    id: "harvard",
    countryId: "usa",
    name: "Harvard University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_University_seal.svg/1200px-Harvard_University_seal.svg.png",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, its history, influence, and wealth have made it one of the world's most prestigious universities.",
    ranking: 1,
    tuitionFee: "$54,768",
    acceptanceRate: "3.4%",
    website: "https://www.harvard.edu/",
    scholarships: [
      {
        name: "Need-Based Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on financial need",
        link: "https://college.harvard.edu/financial-aid/how-aid-works"
      },
      {
        name: "External Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Varies",
        link: "https://college.harvard.edu/financial-aid/apply-aid/outside-scholarships"
      }
    ]
  },
  {
    id: "stanford",
    countryId: "usa",
    name: "Stanford University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stanford_University_seal.svg/1200px-Stanford_University_seal.svg.png",
    description: "Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. Known for its academic strength, wealth, proximity to Silicon Valley, and selectivity, it is one of the world's most prestigious universities.",
    ranking: 3,
    tuitionFee: "$56,169",
    acceptanceRate: "3.9%",
    website: "https://www.stanford.edu/",
    scholarships: [
      {
        name: "Need-Based Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on financial need",
        link: "https://financialaid.stanford.edu/undergrad/apply/international.html"
      },
      {
        name: "Knight-Hennessy Scholars",
        amount: "Full tuition and stipend",
        deadline: "October",
        eligibility: "For graduate students",
        link: "https://knight-hennessy.stanford.edu/"
      }
    ]
  },
  {
    id: "mit",
    countryId: "usa",
    name: "Massachusetts Institute of Technology (MIT)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/MIT_Seal.svg/1200px-MIT_Seal.svg.png",
    description: "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. MIT is dedicated to advancing knowledge and educating students in science, technology, and other areas of scholarship that will best serve the nation and the world.",
    ranking: 2,
    tuitionFee: "$55,510",
    acceptanceRate: "4.1%",
    website: "https://web.mit.edu/",
    scholarships: [
      {
        name: "Need-Based Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on financial need",
        link: "https://finaid.mit.edu/apply-for-aid/international-students/"
      },
      {
        name: "External Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Varies",
        link: "https://finaid.mit.edu/apply-for-aid/international-students/outside-resources/"
      }
    ]
  },
  {
    id: "yale",
    countryId: "usa",
    name: "Yale University",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, Yale is the third-oldest institution of higher education in the United States and one of the most prestigious universities in the world.",
    ranking: 4,
    tuitionFee: "$62,250",
    acceptanceRate: "4.6%",
    website: "https://www.yale.edu/",
    scholarships: [
      {
        name: "Need-Based Financial Aid",
        amount: "Varies",
        deadline: "March",
        eligibility: "Based on demonstrated financial need",
        link: "https://finaid.yale.edu/"
      },
      {
        name: "Yale World Fellows Program",
        amount: "Full fellowship",
        deadline: "February",
        eligibility: "Mid-career professionals",
        link: "https://worldfellows.yale.edu/"
      }
    ]
  },
  {
    id: "princeton",
    countryId: "usa",
    name: "Princeton University",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746, Princeton is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.",
    ranking: 1,
    tuitionFee: "$57,410",
    acceptanceRate: "3.9%",
    website: "https://www.princeton.edu/",
    scholarships: [
      {
        name: "Princeton Financial Aid",
        amount: "Full need met",
        deadline: "January",
        eligibility: "All admitted students based on need",
        link: "https://finaid.princeton.edu/"
      },
      {
        name: "Princeton in Africa Fellowship",
        amount: "Full stipend",
        deadline: "February",
        eligibility: "Recent graduates",
        link: "https://piaf.princeton.edu/"
      }
    ]
  },
  {
    id: "columbia",
    countryId: "usa",
    name: "Columbia University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Columbia University is a private Ivy League research university in New York City. Established in 1754, Columbia is the oldest institution of higher learning in New York and the fifth-oldest in the United States.",
    ranking: 18,
    tuitionFee: "$63,530",
    acceptanceRate: "3.7%",
    website: "https://www.columbia.edu/",
    scholarships: [
      {
        name: "Columbia College Scholarship",
        amount: "Up to full tuition",
        deadline: "January",
        eligibility: "Based on academic merit and financial need",
        link: "https://cc.columbia.edu/preprofessional/scholarships"
      },
      {
        name: "International Students Scholarship",
        amount: "Varies",
        deadline: "January",
        eligibility: "International students with financial need",
        link: "https://studentaid.columbia.edu/how/international"
      }
    ]
  },
  {
    id: "uchicago",
    countryId: "usa",
    name: "University of Chicago",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "The University of Chicago is a private research university in Chicago, Illinois. Founded in 1890, the University of Chicago is known for its devotion to academic scholarship and research and the creation of several academic disciplines.",
    ranking: 6,
    tuitionFee: "$61,179",
    acceptanceRate: "6.2%",
    website: "https://www.uchicago.edu/",
    scholarships: [
      {
        name: "UChicago Promise",
        amount: "Full tuition",
        deadline: "January",
        eligibility: "Families earning less than $125,000",
        link: "https://collegeadmissions.uchicago.edu/afford/uchicago-promise"
      },
      {
        name: "Odyssey Scholarship",
        amount: "Full need met",
        deadline: "January",
        eligibility: "First-generation college students",
        link: "https://collegeadmissions.uchicago.edu/afford/odyssey-scholarship"
      }
    ]
  },
  {
    id: "upenn",
    countryId: "usa",
    name: "University of Pennsylvania",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Pennsylvania is a private Ivy League research university in Philadelphia, Pennsylvania. Founded in 1740, Penn is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges.",
    ranking: 8,
    tuitionFee: "$63,452",
    acceptanceRate: "5.7%",
    website: "https://www.upenn.edu/",
    scholarships: [
      {
        name: "Penn First Plus",
        amount: "Full aid package",
        deadline: "February",
        eligibility: "First-generation, low-income students",
        link: "https://www.upenn.edu/pennfirst/penn-first-plus"
      },
      {
        name: "Benjamin Franklin Scholars",
        amount: "Merit-based aid",
        deadline: "December",
        eligibility: "High-achieving students",
        link: "https://www.upenn.edu/pennfirst/scholarships"
      }
    ]
  },
  {
    id: "caltech",
    countryId: "usa",
    name: "California Institute of Technology (Caltech)",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "The California Institute of Technology is a private research university in Pasadena, California. Known for its strength in science and engineering, Caltech is one of the world's most prestigious institutions of technology.",
    ranking: 9,
    tuitionFee: "$60,864",
    acceptanceRate: "6.4%",
    website: "https://www.caltech.edu/",
    scholarships: [
      {
        name: "Caltech Need-Based Aid",
        amount: "Up to full cost",
        deadline: "February",
        eligibility: "Students with demonstrated financial need",
        link: "https://finaid.caltech.edu/"
      },
      {
        name: "Caltech Graduate Fellowships",
        amount: "Full tuition and stipend",
        deadline: "December",
        eligibility: "Graduate students in STEM fields",
        link: "https://www.gradoffice.caltech.edu/financialsupport"
      }
    ]
  },
  {
    id: "duke",
    countryId: "usa",
    name: "Duke University",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "Duke University is a private research university in Durham, North Carolina. Founded in 1838, Duke is known for its highly ranked programs in law, medicine, business, and engineering.",
    ranking: 10,
    tuitionFee: "$63,450",
    acceptanceRate: "6.3%",
    website: "https://duke.edu/",
    scholarships: [
      {
        name: "Robertson Scholars Leadership Program",
        amount: "Full tuition, room, and board",
        deadline: "December",
        eligibility: "Leadership potential and academic excellence",
        link: "https://robertsonscholars.org/"
      },
      {
        name: "Duke University Scholarship",
        amount: "Up to full tuition",
        deadline: "December",
        eligibility: "Merit-based for exceptional students",
        link: "https://financialaid.duke.edu/undergraduate-applicants/merit-scholarships"
      }
    ]
  },
  {
    id: "northwestern",
    countryId: "usa",
    name: "Northwestern University",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "Northwestern University is a private research university in Evanston, Illinois. Founded in 1851, Northwestern is known for its highly ranked programs in journalism, business, law, and medicine.",
    ranking: 11,
    tuitionFee: "$63,468",
    acceptanceRate: "7.2%",
    website: "https://www.northwestern.edu/",
    scholarships: [
      {
        name: "Northwestern Scholarship",
        amount: "Up to full tuition",
        deadline: "January",
        eligibility: "Need-based financial aid",
        link: "https://undergradaid.northwestern.edu/"
      },
      {
        name: "Good Neighbor Great University Scholarship",
        amount: "Full tuition",
        deadline: "December",
        eligibility: "Chicago Public Schools graduates",
        link: "https://undergradaid.northwestern.edu/types-of-aid/scholarships-and-grants/good-neighbor-great-university/"
      }
    ]
  },
  {
    id: "dartmouth",
    countryId: "usa",
    name: "Dartmouth College",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "Dartmouth College is a private Ivy League research university in Hanover, New Hampshire. Founded in 1769, Dartmouth is known for its strong alumni network, outdoor recreation opportunities, and liberal arts education.",
    ranking: 12,
    tuitionFee: "$62,430",
    acceptanceRate: "6.2%",
    website: "https://dartmouth.edu/",
    scholarships: [
      {
        name: "Dartmouth Scholarship",
        amount: "Up to full cost",
        deadline: "February",
        eligibility: "Need-based financial aid",
        link: "https://financialaid.dartmouth.edu/"
      },
      {
        name: "Dartmouth Bound",
        amount: "Full financial aid package",
        deadline: "February",
        eligibility: "Students from specific backgrounds",
        link: "https://admissions.dartmouth.edu/afford/dartmouth-bound"
      }
    ]
  },
  {
    id: "brown",
    countryId: "usa",
    name: "Brown University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Brown University is a private Ivy League research university in Providence, Rhode Island. Founded in 1764, Brown is known for its open curriculum and strong programs in the liberal arts and sciences.",
    ranking: 13,
    tuitionFee: "$62,680",
    acceptanceRate: "5.4%",
    website: "https://www.brown.edu/",
    scholarships: [
      {
        name: "Brown Scholarship",
        amount: "Up to full cost",
        deadline: "February",
        eligibility: "Need-based financial aid",
        link: "https://www.brown.edu/admission/undergraduate/afford/aid-programs"
      },
      {
        name: "Sidney E. Frank Scholarship",
        amount: "Full tuition and expenses",
        deadline: "December",
        eligibility: "First-generation college students",
        link: "https://www.brown.edu/admission/undergraduate/afford/frank-scholarship"
      }
    ]
  },
  {
    id: "cornell",
    countryId: "usa",
    name: "Cornell University",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "Cornell University is a private Ivy League statutory land-grant research university in Ithaca, New York. Founded in 1865, Cornell is known for its highly ranked programs in engineering, agriculture, business, and veterinary medicine.",
    ranking: 17,
    tuitionFee: "$63,200",
    acceptanceRate: "8.7%",
    website: "https://www.cornell.edu/",
    scholarships: [
      {
        name: "Cornell Commitment",
        amount: "Full aid for families earning <$75K",
        deadline: "February",
        eligibility: "Students from low-income families",
        link: "https://finaid.cornell.edu/apply/cornell-commitment"
      },
      {
        name: "Cornell Presidential Research Scholars",
        amount: "$4,000 research funding",
        deadline: "February",
        eligibility: "High-achieving undergraduate researchers",
        link: "https://cprs.cornell.edu/"
      }
    ]
  },
  {
    id: "rice",
    countryId: "usa",
    name: "Rice University",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "Rice University is a private research university in Houston, Texas. Known for its applied science programs, highly selective admissions, and collegiate system, Rice consistently ranks among the top universities in the United States.",
    ranking: 15,
    tuitionFee: "$54,960",
    acceptanceRate: "8.7%",
    website: "https://www.rice.edu/",
    scholarships: [
      {
        name: "Rice Investment",
        amount: "Free tuition for families earning <$200K",
        deadline: "January",
        eligibility: "Students from middle and low-income families",
        link: "https://financialaid.rice.edu/rice-investment"
      },
      {
        name: "Century Scholars Program",
        amount: "Full tuition and fees",
        deadline: "December",
        eligibility: "Outstanding students from Texas",
        link: "https://financialaid.rice.edu/types-aid/scholarships-and-grants/century-scholars"
      }
    ]
  },
  {
    id: "vanderbilt",
    countryId: "usa",
    name: "Vanderbilt University",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Vanderbilt University is a private research university in Nashville, Tennessee. Founded in 1873, Vanderbilt is known for its strong programs in education, law, medicine, and music.",
    ranking: 18,
    tuitionFee: "$58,130",
    acceptanceRate: "6.7%",
    website: "https://www.vanderbilt.edu/",
    scholarships: [
      {
        name: "Opportunity Vanderbilt",
        amount: "Full need met without loans",
        deadline: "January",
        eligibility: "Students with demonstrated financial need",
        link: "https://www.vanderbilt.edu/financialaid/opportunity-vanderbilt/"
      },
      {
        name: "Cornelius Vanderbilt Scholarship",
        amount: "Full tuition plus stipend",
        deadline: "December",
        eligibility: "Merit-based for exceptional students",
        link: "https://admissions.vanderbilt.edu/merit/"
      }
    ]
  },
  {
    id: "notre-dame",
    countryId: "usa",
    name: "University of Notre Dame",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Notre Dame is a private Catholic research university in Notre Dame, Indiana. Founded in 1842, Notre Dame is known for its strong alumni network, athletics program, and commitment to undergraduate education.",
    ranking: 20,
    tuitionFee: "$59,794",
    acceptanceRate: "15.8%",
    website: "https://www.nd.edu/",
    scholarships: [
      {
        name: "Notre Dame Scholarship",
        amount: "Up to full tuition",
        deadline: "January",
        eligibility: "Need-based and merit-based aid",
        link: "https://financialaid.nd.edu/"
      },
      {
        name: "Hesburgh-Yusko Scholars Program",
        amount: "Full tuition and enrichment",
        deadline: "November",
        eligibility: "Students committed to social justice",
        link: "https://admissions.nd.edu/apply/hesburgh-yusko-scholars/"
      }
    ]
  },
  {
    id: "ucla",
    countryId: "usa",
    name: "University of California, Los Angeles (UCLA)",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of California, Los Angeles is a public land-grant research university in Los Angeles, California. UCLA is considered one of the most prestigious public universities in the United States.",
    ranking: 21,
    tuitionFee: "$46,326 (out-of-state)",
    acceptanceRate: "10.8%",
    website: "https://www.ucla.edu/",
    scholarships: [
      {
        name: "Regents Scholarship",
        amount: "Up to full cost of attendance",
        deadline: "November",
        eligibility: "Outstanding academic achievement",
        link: "https://www.ucla.edu/admission/undergraduate-admission/scholarships/regents-scholarship"
      },
      {
        name: "Alumni Scholarship",
        amount: "$4,000 - $20,000",
        deadline: "December",
        eligibility: "Merit-based for exceptional students",
        link: "https://www.uclaalumni.net/scholarships/"
      }
    ]
  },
  {
    id: "uoft",
    countryId: "canada",
    name: "University of Toronto",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in Upper Canada.",
    ranking: 18,
    tuitionFee: "CAD $58,160",
    acceptanceRate: "43%",
    website: "https://www.utoronto.ca/",
    scholarships: [
      {
        name: "Lester B. Pearson International Scholarship",
        amount: "Full tuition, books, incidental fees, and residence support",
        deadline: "January 15",
        eligibility: "International students demonstrating exceptional academic achievement and creativity",
        link: "https://future.utoronto.ca/pearson"
      },
      {
        name: "National Scholarship Program",
        amount: "CAD $7,500",
        deadline: "February 1",
        eligibility: "Canadian citizens and permanent residents",
        link: "https://future.utoronto.ca/finances/awards-scholarships"
      }
    ]
  },
  {
    id: "ubc",
    countryId: "canada",
    name: "University of British Columbia",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of British Columbia is a public research university with campuses near Vancouver and in Kelowna, British Columbia. Established in 1908, it is British Columbia's oldest university.",
    ranking: 34,
    tuitionFee: "CAD $51,000",
    acceptanceRate: "52.4%",
    website: "https://www.ubc.ca/",
    scholarships: [
      {
        name: "International Major Entrance Scholarship",
        amount: "Up to CAD $40,000",
        deadline: "January 15",
        eligibility: "Outstanding international students",
        link: "https://students.ubc.ca/enrolment/finances/award-search/vancouver/faculty-any/level-undergraduate/type-entrance/international-yes"
      },
      {
        name: "Karen McKellin International Leader of Tomorrow Award",
        amount: "Full financial support",
        deadline: "December 1",
        eligibility: "International students with financial need and leadership potential",
        link: "https://you.ubc.ca/applying-ubc/how-apply/international-leaders-tomorrow-award/"
      }
    ]
  },
  {
    id: "mcgill",
    countryId: "canada",
    name: "McGill University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "McGill University is an English-language public research university located in Montreal, Quebec, Canada. Founded in 1821 by royal charter granted by King George IV, the university bears the name of James McGill, a Scottish merchant whose bequest in 1813 formed the university's precursor, University of McGill College.",
    ranking: 31,
    tuitionFee: "CAD $50,000",
    acceptanceRate: "46%",
    website: "https://www.mcgill.ca/",
    scholarships: [
      {
        name: "McGill Entrance Scholarship Program",
        amount: "CAD $3,000 - CAD $12,000",
        deadline: "January 15",
        eligibility: "Outstanding academic achievement",
        link: "https://www.mcgill.ca/studentaid/scholarships-aid/entrance"
      },
      {
        name: "Major Scholarship for International Students",
        amount: "CAD $10,000 - CAD $30,000",
        deadline: "January 15",
        eligibility: "International students with exceptional academic records",
        link: "https://www.mcgill.ca/studentaid/scholarships-aid/entrance/international"
      }
    ]
  },
  {
    id: "mcmaster",
    countryId: "canada",
    name: "McMaster University",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "McMaster University is a public research university in Hamilton, Ontario, Canada. The main McMaster campus is on 121 hectares of land near the residential neighborhoods of Ainslie Wood and Westdale, adjacent to the Royal Botanical Gardens.",
    ranking: 152,
    tuitionFee: "CAD $50,000",
    acceptanceRate: "58.7%",
    website: "https://www.mcmaster.ca/",
    scholarships: [
      {
        name: "McMaster Entrance Awards",
        amount: "CAD $1,000 - CAD $5,000",
        deadline: "Automatic consideration",
        eligibility: "High academic achievement",
        link: "https://registrar.mcmaster.ca/aid-awards/entrance-scholarships/"
      },
      {
        name: "International Excellence Awards",
        amount: "Up to CAD $20,000",
        deadline: "February 1",
        eligibility: "International students with outstanding academic records",
        link: "https://future.mcmaster.ca/admission/international-excellence-awards/"
      }
    ]
  },
  {
    id: "waterloo",
    countryId: "canada",
    name: "University of Waterloo",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Waterloo is a public research university with a main campus in Waterloo, Ontario, Canada. The main campus is on 404 hectares of land adjacent to 'Uptown' Waterloo and Waterloo Park. The university also operates three satellite campuses and four affiliated university colleges.",
    ranking: 112,
    tuitionFee: "CAD $63,000",
    acceptanceRate: "53%",
    website: "https://uwaterloo.ca/",
    scholarships: [
      {
        name: "International Student Entrance Scholarships",
        amount: "CAD $2,000 - CAD $10,000",
        deadline: "February 1",
        eligibility: "International students with high academic standing",
        link: "https://uwaterloo.ca/find-out-more/financing/scholarships"
      },
      {
        name: "President's Scholarship of Distinction",
        amount: "CAD $2,000",
        deadline: "Automatic consideration",
        eligibility: "Exceptional academic achievement",
        link: "https://uwaterloo.ca/student-awards-financial-aid/undergraduate-awards/presidents-scholarships"
      }
    ]
  },
  {
    id: "queens",
    countryId: "canada",
    name: "Queen's University",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "Queen's University at Kingston, commonly known as Queen's University or Queen's, is a public research university in Kingston, Ontario, Canada. Queen's holds more than 1,400 hectares of land throughout Ontario and owns Herstmonceux Castle in East Sussex, England.",
    ranking: 209,
    tuitionFee: "CAD $55,000",
    acceptanceRate: "43.9%",
    website: "https://www.queensu.ca/",
    scholarships: [
      {
        name: "Major Admission Award",
        amount: "CAD $5,000 - CAD $36,000",
        deadline: "February 15",
        eligibility: "Outstanding academic and leadership achievements",
        link: "https://www.queensu.ca/registrar/financial-aid/awards-bursaries/major-admission-awards"
      },
      {
        name: "International Admission Awards",
        amount: "CAD $2,000 - CAD $15,000",
        deadline: "February 15",
        eligibility: "International students with exceptional academic records",
        link: "https://www.queensu.ca/admission/international-admission-awards"
      }
    ]
  },
  {
    id: "alberta",
    countryId: "canada",
    name: "University of Alberta",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of Alberta, also known as U of A or UAlberta, is a public research university located in Edmonton, Alberta, Canada. It was founded in 1908 by Alexander Cameron Rutherford, the first premier of Alberta, and Henry Marshall Tory, its first president.",
    ranking: 110,
    tuitionFee: "CAD $35,000",
    acceptanceRate: "58%",
    website: "https://www.ualberta.ca/",
    scholarships: [
      {
        name: "International Entrance Scholarship",
        amount: "CAD $5,000 - CAD $120,000",
        deadline: "December 1",
        eligibility: "International students with outstanding academic achievement",
        link: "https://www.ualberta.ca/admissions/undergraduate/entrance-awards/international-entrance-scholarships.html"
      },
      {
        name: "Jason Lang Scholarship",
        amount: "CAD $1,000",
        deadline: "September 30",
        eligibility: "Alberta residents with high academic achievement",
        link: "https://studentaid.alberta.ca/scholarships-awards/undergraduate/jason-lang-scholarship/"
      }
    ]
  },
  {
    id: "uottawa",
    countryId: "canada",
    name: "University of Ottawa",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of Ottawa, often referred to as uOttawa or U of O, is a bilingual public research university in Ottawa, Ontario, Canada. The main campus is located on 42.5 hectares in the residential neighbourhood of Sandy Hill, adjacent to Ottawa's Rideau Canal.",
    ranking: 237,
    tuitionFee: "CAD $46,000",
    acceptanceRate: "75%",
    website: "https://www.uottawa.ca/",
    scholarships: [
      {
        name: "International Admission Scholarship",
        amount: "CAD $1,000 - CAD $30,000",
        deadline: "March 1",
        eligibility: "International students with high academic standing",
        link: "https://www.uottawa.ca/financial-aid-awards/undergraduate-awards/admission-scholarships-international-students"
      },
      {
        name: "Excellence Scholarship",
        amount: "CAD $4,000 - CAD $5,000",
        deadline: "March 1",
        eligibility: "Outstanding academic achievement",
        link: "https://www.uottawa.ca/financial-aid-awards/undergraduate-awards/excellence-scholarships"
      }
    ]
  },
  {
    id: "calgary",
    countryId: "canada",
    name: "University of Calgary",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "The University of Calgary is a public research university located in Calgary, Alberta, Canada. The University of Calgary started in 1944 as the Calgary branch of the University of Alberta, founded in 1908, prior to being instituted into a separate, autonomous university in 1966.",
    ranking: 242,
    tuitionFee: "CAD $35,000",
    acceptanceRate: "10.6%",
    website: "https://www.ucalgary.ca/",
    scholarships: [
      {
        name: "International Entrance Scholarship",
        amount: "CAD $15,000 - CAD $60,000",
        deadline: "December 1",
        eligibility: "International students with exceptional academic achievement",
        link: "https://www.ucalgary.ca/registrar/awards/international-entrance-scholarship"
      },
      {
        name: "Schulich Leader Scholarships",
        amount: "CAD $100,000 - CAD $120,000",
        deadline: "January 31",
        eligibility: "STEM students with leadership and entrepreneurial thinking",
        link: "https://schulichleaders.com/"
      }
    ]
  },
  {
    id: "western",
    countryId: "canada",
    name: "Western University",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "The University of Western Ontario, commonly known as Western University or Western, is a public research university in London, Ontario, Canada. The main campus is located on 455 hectares of land, surrounded by residential neighbourhoods and the Thames River bisecting the campus's eastern portion.",
    ranking: 172,
    tuitionFee: "CAD $57,000",
    acceptanceRate: "58%",
    website: "https://www.uwo.ca/",
    scholarships: [
      {
        name: "International President's Entrance Scholarship",
        amount: "CAD $100,000",
        deadline: "January 31",
        eligibility: "International students with exceptional academic and leadership achievements",
        link: "https://www.uwo.ca/admissions/undergraduate/scholarships_awards/entrance_awards/presidents_entrance_scholarship.html"
      },
      {
        name: "National Scholarship",
        amount: "CAD $2,000",
        deadline: "May 1",
        eligibility: "High academic achievement",
        link: "https://www.uwo.ca/admissions/undergraduate/scholarships_awards/entrance_awards/"
      }
    ]
  },
  {
    id: "laval",
    countryId: "canada",
    name: "Université Laval",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "Université Laval is a French-language public research university in Quebec City, Quebec, Canada. The university was founded in 1663, making it the oldest centre of higher education in Canada and the first institution in North America to offer higher education in French.",
    ranking: 419,
    tuitionFee: "CAD $28,000",
    acceptanceRate: "85%",
    website: "https://www.ulaval.ca/",
    scholarships: [
      {
        name: "Excellence Scholarship for International Students",
        amount: "CAD $10,000 - CAD $25,000",
        deadline: "February 1",
        eligibility: "International students with outstanding academic records",
        link: "https://www.ulaval.ca/en/student-services/scholarships-and-financial-aid/scholarships-for-international-students"
      },
      {
        name: "Merit Scholarship Program",
        amount: "CAD $2,000 - CAD $15,000",
        deadline: "March 1",
        eligibility: "Academic excellence",
        link: "https://www.ulaval.ca/bourses-et-aide-financiere"
      }
    ]
  },
  {
    id: "montreal",
    countryId: "canada",
    name: "Université de Montréal",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The Université de Montréal is a French-language public research university in Montreal, Quebec, Canada. The university's main campus is located on the northern slope of Mount Royal in the neighbourhoods of Outremont and Côte-des-Neiges.",
    ranking: 111,
    tuitionFee: "CAD $27,000",
    acceptanceRate: "57%",
    website: "https://www.umontreal.ca/",
    scholarships: [
      {
        name: "Excellence Scholarship",
        amount: "CAD $10,923 - CAD $27,300",
        deadline: "February 1",
        eligibility: "International students with exceptional academic achievement",
        link: "https://international.umontreal.ca/en/admissions-aid/financial-aid/"
      },
      {
        name: "Exemption from Supplementary Tuition Fees",
        amount: "Tuition reduction",
        deadline: "February 1",
        eligibility: "International students based on academic merit",
        link: "https://international.umontreal.ca/en/admissions-aid/financial-aid/exemptions/"
      }
    ]
  },
  {
    id: "concordia",
    countryId: "canada",
    name: "Concordia University",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "Concordia University is a public comprehensive research university located in Montreal, Quebec, Canada. Following the merger of Loyola College and Sir George Williams University, Concordia University was granted a charter by the government of Quebec in 1974, making it the youngest of Quebec's universities.",
    ranking: 521,
    tuitionFee: "CAD $25,000",
    acceptanceRate: "63%",
    website: "https://www.concordia.ca/",
    scholarships: [
      {
        name: "Undergraduate International Tuition Award of Excellence",
        amount: "CAD $10,077",
        deadline: "March 1",
        eligibility: "International undergraduate students with high academic standing",
        link: "https://www.concordia.ca/students/financial-support/scholarships-awards/undergraduate-awards.html"
      },
      {
        name: "Concordia Merit Scholarship",
        amount: "CAD $1,000 - CAD $12,000",
        deadline: "March 1",
        eligibility: "Academic excellence and leadership",
        link: "https://www.concordia.ca/students/financial-support/scholarships-awards/"
      }
    ]
  },
  {
    id: "carleton",
    countryId: "canada",
    name: "Carleton University",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "Carleton University is an English-language public research university in Ottawa, Ontario, Canada. Founded in 1942 as Carleton College, the institution originally operated as a private, non-denominational evening college to serve returning World War II veterans.",
    ranking: 601,
    tuitionFee: "CAD $35,000",
    acceptanceRate: "17%",
    website: "https://carleton.ca/",
    scholarships: [
      {
        name: "Entrance Scholarships for International Students",
        amount: "CAD $4,000 - CAD $16,000",
        deadline: "April 1",
        eligibility: "International students with high academic achievement",
        link: "https://carleton.ca/awards/scholarships-for-international-students/"
      },
      {
        name: "Carleton Prestige Scholarships",
        amount: "CAD $4,000",
        deadline: "May 1",
        eligibility: "Outstanding academic performance",
        link: "https://carleton.ca/awards/undergraduate-awards/"
      }
    ]
  },
  {
    id: "ryerson",
    countryId: "canada",
    name: "Toronto Metropolitan University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Toronto Metropolitan University, formerly known as Ryerson University, is a public research university located in Toronto, Ontario, Canada. The university's undergraduate and graduate programs are housed in eight faculties.",
    ranking: 801,
    tuitionFee: "CAD $33,000",
    acceptanceRate: "78%",
    website: "https://www.torontomu.ca/",
    scholarships: [
      {
        name: "International Secondary School Student Awards",
        amount: "CAD $5,000 - CAD $12,000",
        deadline: "February 1",
        eligibility: "International students entering from secondary school",
        link: "https://www.torontomu.ca/student-life-and-learning/awards-scholarships/international-student-awards/"
      },
      {
        name: "Entrance Scholarships",
        amount: "CAD $1,000 - CAD $5,000",
        deadline: "May 1",
        eligibility: "High academic achievement",
        link: "https://www.torontomu.ca/student-life-and-learning/awards-scholarships/"
      }
    ]
  },
  {
    id: "simon-fraser",
    countryId: "canada",
    name: "Simon Fraser University",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "Simon Fraser University is a public research university in British Columbia, Canada. It maintains three campuses: the main campus on Burnaby Mountain, and satellite campuses in Vancouver and Surrey.",
    ranking: 318,
    tuitionFee: "CAD $40,000",
    acceptanceRate: "59%",
    website: "https://www.sfu.ca/",
    scholarships: [
      {
        name: "International Undergraduate Student Scholarship",
        amount: "CAD $5,000 - CAD $34,000",
        deadline: "February 28",
        eligibility: "International students with outstanding academic records",
        link: "https://www.sfu.ca/students/financialaid/undergraduate/awards/international.html"
      },
      {
        name: "Major Entrance Scholarship",
        amount: "CAD $5,000 - CAD $16,000",
        deadline: "February 28",
        eligibility: "Academic excellence",
        link: "https://www.sfu.ca/students/financialaid/undergraduate/awards/entrance.html"
      }
    ]
  },
  {
    id: "dalhousie",
    countryId: "canada",
    name: "Dalhousie University",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "Dalhousie University is a large public research university in Nova Scotia, Canada. Dalhousie University is a member of the U15, a group of research-intensive universities in Canada.",
    ranking: 308,
    tuitionFee: "CAD $25,000",
    acceptanceRate: "73%",
    website: "https://www.dal.ca/",
    scholarships: [
      {
        name: "Entrance Scholarships for International Students",
        amount: "CAD $1,000 - CAD $30,000",
        deadline: "March 1",
        eligibility: "International students with high academic achievement",
        link: "https://www.dal.ca/admissions/scholarships_awards/international_awards.html"
      },
      {
        name: "Sexton Scholars Program",
        amount: "CAD $10,000 - CAD $85,000",
        deadline: "February 1",
        eligibility: "Outstanding academic achievement in engineering",
        link: "https://www.dal.ca/faculty/engineering/current_students/undergraduate_students/scholarships_and_awards/sexton-scholars.html"
      }
    ]
  },
  {
    id: "manitoba",
    countryId: "canada",
    name: "University of Manitoba",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Manitoba is a public research university in the province of Manitoba, Canada. Located in Winnipeg, it is the largest university in the province and the 17th-largest in all of Canada, with a student enrollment of 29,800.",
    ranking: 651,
    tuitionFee: "CAD $20,000",
    acceptanceRate: "52%",
    website: "https://umanitoba.ca/",
    scholarships: [
      {
        name: "International Undergraduate Student Scholarship",
        amount: "CAD $3,000 - CAD $5,000",
        deadline: "March 1",
        eligibility: "International students with high academic standing",
        link: "https://umanitoba.ca/student-supports/financial-support/scholarships-bursaries-awards/international-undergraduate-scholarships"
      },
      {
        name: "University of Manitoba Entrance Scholarships",
        amount: "CAD $1,500 - CAD $3,000",
        deadline: "May 1",
        eligibility: "High school graduates with outstanding grades",
        link: "https://umanitoba.ca/student-supports/financial-support/scholarships-bursaries-awards"
      }
    ]
  },
  {
    id: "saskatchewan",
    countryId: "canada",
    name: "University of Saskatchewan",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of Saskatchewan is a Canadian public research university, founded in 1907, and located on the east side of the South Saskatchewan River in Saskatoon, Saskatchewan, Canada.",
    ranking: 601,
    tuitionFee: "CAD $24,000",
    acceptanceRate: "70%",
    website: "https://www.usask.ca/",
    scholarships: [
      {
        name: "International Student Awards",
        amount: "CAD $1,000 - CAD $20,000",
        deadline: "February 15",
        eligibility: "International students with academic excellence",
        link: "https://students.usask.ca/money/scholarships-awards/undergraduate-awards.php#InternationalStudentAwards"
      },
      {
        name: "Guaranteed Entrance Scholarships",
        amount: "CAD $500 - CAD $3,000",
        deadline: "May 1",
        eligibility: "High school students with excellent grades",
        link: "https://students.usask.ca/money/scholarships-awards/undergraduate-awards.php"
      }
    ]
  },
  {
    id: "victoria",
    countryId: "canada",
    name: "University of Victoria",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of Victoria is a public research university located in the municipalities of Oak Bay and Saanich, British Columbia, Canada. The university traces its roots to Victoria College, the first post-secondary institution established in British Columbia in 1903.",
    ranking: 359,
    tuitionFee: "CAD $30,000",
    acceptanceRate: "63%",
    website: "https://www.uvic.ca/",
    scholarships: [
      {
        name: "International Entrance Scholarships",
        amount: "CAD $2,500 - CAD $15,000",
        deadline: "February 28",
        eligibility: "International students with outstanding academic achievement",
        link: "https://www.uvic.ca/registrar/safa/entrance-scholarships/international/index.php"
      },
      {
        name: "President's Scholarship for Excellence",
        amount: "CAD $5,000",
        deadline: "February 28",
        eligibility: "Academic excellence and community involvement",
        link: "https://www.uvic.ca/registrar/safa/entrance-scholarships/"
      }
    ]
  },
  {
    id: "oxford",
    countryId: "uk",
    name: "University of Oxford",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/University_of_Oxford-Logo.svg/1200px-University_of_Oxford-Logo.svg.png",
    description: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
    ranking: 5,
    tuitionFee: "£9,250 - £48,620",
    acceptanceRate: "17.5%",
    website: "https://www.ox.ac.uk/",
    scholarships: [
      {
        name: "Rhodes Scholarships",
        amount: "Full tuition and stipend",
        deadline: "Varies by country",
        eligibility: "For postgraduate students",
        link: "https://www.rhodeshouse.ox.ac.uk/scholarships/apply/"
      },
      {
        name: "Clarendon Scholarships",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "For graduate students",
        link: "https://www.ox.ac.uk/clarendon"
      }
    ]
  },
  {
    id: "cambridge",
    countryId: "uk",
    name: "University of Cambridge",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Cambridge_University_coat_of_arms.svg/1200px-Cambridge_University_coat_of_arms.svg.png",
    description: "The University of Cambridge is a collegiate public research university in Cambridge, England. Founded in 1209 and granted a royal charter by King Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving university.",
    ranking: 7,
    tuitionFee: "£22,214 - £58,000",
    acceptanceRate: "21%",
    website: "https://www.cam.ac.uk/",
    scholarships: [
      {
        name: "Cambridge International Scholarships",
        amount: "Full tuition and stipend",
        deadline: "Varies",
        eligibility: "For PhD students",
        link: "https://www.graduate.study.cam.ac.uk/finance/funding/cambridge-international-scholarships"
      },
      {
        name: "Gates Cambridge Scholarships",
        amount: "Full tuition and stipend",
        deadline: "October",
        eligibility: "For postgraduate students",
        link: "https://www.gatescambridge.org/"
      }
    ]
  },
  {
    id: "imperial",
    countryId: "uk",
    name: "Imperial College London",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Imperial College London is a public research university in London, England. Known for its focus on science, engineering, medicine, and business, it consistently ranks among the world's top universities.",
    ranking: 8,
    tuitionFee: "£32,000 - £45,000",
    acceptanceRate: "14%",
    website: "https://www.imperial.ac.uk/",
    scholarships: [
      {
        name: "President's PhD Scholarships",
        amount: "Full tuition and stipend",
        deadline: "December",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.imperial.ac.uk/study/pg/fees-and-funding/scholarships/presidents-phd-scholarships/"
      },
      {
        name: "Imperial College Scholarships",
        amount: "£5,000 - £10,000",
        deadline: "March",
        eligibility: "International students with academic excellence",
        link: "https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-taught/scholarships/"
      }
    ]
  },
  {
    id: "ucl",
    countryId: "uk",
    name: "University College London (UCL)",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "University College London is a public research university in London, England. It is a member institution of the federal University of London and is the second-largest university in the UK by total enrollment.",
    ranking: 10,
    tuitionFee: "£24,000 - £38,000",
    acceptanceRate: "48%",
    website: "https://www.ucl.ac.uk/",
    scholarships: [
      {
        name: "UCL Global Masters Scholarship",
        amount: "£15,000",
        deadline: "March",
        eligibility: "International students applying for Master's programs",
        link: "https://www.ucl.ac.uk/scholarships/ucl-global-masters-scholarship"
      },
      {
        name: "Denys Holland Scholarship",
        amount: "£9,000 per year",
        deadline: "May",
        eligibility: "Students with financial need and academic merit",
        link: "https://www.ucl.ac.uk/scholarships/denys-holland-scholarship"
      }
    ]
  },
  {
    id: "lse",
    countryId: "uk",
    name: "London School of Economics (LSE)",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "The London School of Economics and Political Science is a public research university in London, England. LSE is a specialist university with an international intake and a global reach, focusing on social sciences.",
    ranking: 49,
    tuitionFee: "£22,430 - £34,200",
    acceptanceRate: "8.9%",
    website: "https://www.lse.ac.uk/",
    scholarships: [
      {
        name: "LSE Graduate Support Scheme",
        amount: "Up to £18,000",
        deadline: "April",
        eligibility: "Home and EU students with financial need",
        link: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/Graduate-Support-Scheme"
      },
      {
        name: "International Excellence Awards",
        amount: "£25,000",
        deadline: "April",
        eligibility: "Outstanding international students",
        link: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/scholarships/international-excellence-awards"
      }
    ]
  },
  {
    id: "kings",
    countryId: "uk",
    name: "King's College London",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "King's College London is a public research university located in London, England. Founded in 1829, King's is one of the oldest universities in England and a founding constituent college of the University of London.",
    ranking: 40,
    tuitionFee: "£19,740 - £45,600",
    acceptanceRate: "13%",
    website: "https://www.kcl.ac.uk/",
    scholarships: [
      {
        name: "King's International Scholarships",
        amount: "£10,000",
        deadline: "April",
        eligibility: "International students with academic excellence",
        link: "https://www.kcl.ac.uk/study/funding/kings-international-scholarships"
      },
      {
        name: "Desmond Tutu Scholarship",
        amount: "Full tuition and living expenses",
        deadline: "January",
        eligibility: "Students from developing countries",
        link: "https://www.kcl.ac.uk/study/funding/desmond-tutu-scholarship"
      }
    ]
  },
  {
    id: "edinburgh",
    countryId: "uk",
    name: "University of Edinburgh",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Edinburgh is a public research university based in Edinburgh, Scotland. Founded in 1583, it is the sixth-oldest university in continuous operation in the English-speaking world.",
    ranking: 22,
    tuitionFee: "£23,100 - £34,800",
    acceptanceRate: "40%",
    website: "https://www.ed.ac.uk/",
    scholarships: [
      {
        name: "Edinburgh Global Research Scholarship",
        amount: "Full tuition and stipend",
        deadline: "February",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.ed.ac.uk/studying/postgraduate/finances/funding/university-scholarships/global-research"
      },
      {
        name: "Principal's Career Development PhD Scholarship",
        amount: "Full tuition and stipend",
        deadline: "December",
        eligibility: "Early career researchers",
        link: "https://www.ed.ac.uk/studying/postgraduate/finances/funding/university-scholarships/principals-career-development"
      }
    ]
  },
  {
    id: "manchester",
    countryId: "uk",
    name: "University of Manchester",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "The University of Manchester is a public research university in Manchester, England. Formed in 2004 by the merger of the University of Manchester Institute of Science and Technology and the Victoria University of Manchester.",
    ranking: 28,
    tuitionFee: "£20,000 - £47,000",
    acceptanceRate: "56%",
    website: "https://www.manchester.ac.uk/",
    scholarships: [
      {
        name: "Manchester Global Masters Scholarship",
        amount: "£5,000",
        deadline: "June",
        eligibility: "International students with academic excellence",
        link: "https://www.manchester.ac.uk/study/masters/funding/scholarships/manchester-global-masters-scholarship/"
      },
      {
        name: "President's Doctoral Scholar Award",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.manchester.ac.uk/study/postgraduate-research/funding/presidents-doctoral-scholar-award/"
      }
    ]
  },
  {
    id: "bristol",
    countryId: "uk",
    name: "University of Bristol",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Bristol is a red brick Russell Group research university in Bristol, England. It received its royal charter in 1909, although it can trace its roots to a Merchant Venturers' school founded in 1595.",
    ranking: 55,
    tuitionFee: "£20,100 - £24,700",
    acceptanceRate: "66%",
    website: "https://www.bristol.ac.uk/",
    scholarships: [
      {
        name: "Think Big Scholarships",
        amount: "£6,500 - £20,000",
        deadline: "March",
        eligibility: "International students with academic excellence",
        link: "https://www.bristol.ac.uk/fees-funding/awards/think-big-scholarships/"
      },
      {
        name: "Global Economics Postgraduate Scholarship",
        amount: "£2,000",
        deadline: "July",
        eligibility: "International students studying Economics",
        link: "https://www.bristol.ac.uk/fees-funding/awards/global-economics/"
      }
    ]
  },
  {
    id: "warwick",
    countryId: "uk",
    name: "University of Warwick",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of Warwick is a public research university on the outskirts of Coventry between the West Midlands and Warwickshire, England. The university was founded in 1965 as part of governmental efforts to expand higher education.",
    ranking: 67,
    tuitionFee: "£20,210 - £45,950",
    acceptanceRate: "56%",
    website: "https://warwick.ac.uk/",
    scholarships: [
      {
        name: "Warwick Chancellor's International Scholarships",
        amount: "Full tuition fees",
        deadline: "January",
        eligibility: "Outstanding international students",
        link: "https://warwick.ac.uk/services/dc/schols_fund/scholarships_and_funding/chancellorsint/"
      },
      {
        name: "Warwick Business School Scholarships",
        amount: "Up to £25,000",
        deadline: "April",
        eligibility: "Students applying to WBS programs",
        link: "https://www.wbs.ac.uk/about/fees-funding/scholarships/"
      }
    ]
  },
  {
    id: "glasgow",
    countryId: "uk",
    name: "University of Glasgow",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of Glasgow is a public research university in Glasgow, Scotland. Founded by papal bull in 1451, it is the fourth-oldest university in the English-speaking world and one of Scotland's four ancient universities.",
    ranking: 81,
    tuitionFee: "£19,350 - £25,650",
    acceptanceRate: "77%",
    website: "https://www.gla.ac.uk/",
    scholarships: [
      {
        name: "International Leadership Scholarship",
        amount: "£10,000",
        deadline: "June",
        eligibility: "International students with leadership potential",
        link: "https://www.gla.ac.uk/scholarships/internationaleadershipscholarship/"
      },
      {
        name: "Postgraduate Excellence Scholarship",
        amount: "£5,000",
        deadline: "June",
        eligibility: "International postgraduate students",
        link: "https://www.gla.ac.uk/scholarships/postgraduateexcellencescholarship/"
      }
    ]
  },
  {
    id: "birmingham",
    countryId: "uk",
    name: "University of Birmingham",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "The University of Birmingham is a public research university in Birmingham, England. It received its royal charter in 1900 as a successor to Queen's College, Birmingham and Mason Science College, making it the first English civic university.",
    ranking: 84,
    tuitionFee: "£19,740 - £23,310",
    acceptanceRate: "85%",
    website: "https://www.birmingham.ac.uk/",
    scholarships: [
      {
        name: "Global Masters Scholarships",
        amount: "£2,000 - £10,000",
        deadline: "June",
        eligibility: "International students with academic merit",
        link: "https://www.birmingham.ac.uk/international/fees-and-funding/Global-Masters-Scholarships.aspx"
      },
      {
        name: "Birmingham Business School Scholarships",
        amount: "Up to £10,000",
        deadline: "April",
        eligibility: "Students applying to Business School programs",
        link: "https://www.birmingham.ac.uk/schools/business/courses/scholarships/index.aspx"
      }
    ]
  },
  {
    id: "leeds",
    countryId: "uk",
    name: "University of Leeds",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "The University of Leeds is a public research university in Leeds, West Yorkshire, England. It was established in 1874 as the Yorkshire College of Science and in 1884 it merged with the Leeds School of Medicine.",
    ranking: 86,
    tuitionFee: "£20,250 - £24,500",
    acceptanceRate: "77%",
    website: "https://www.leeds.ac.uk/",
    scholarships: [
      {
        name: "Leeds International Study Centre Scholarship",
        amount: "£5,000",
        deadline: "June",
        eligibility: "International students progressing to Leeds",
        link: "https://www.leeds.ac.uk/international-study-centre/progression-scholarships"
      },
      {
        name: "Think Leeds Scholarships",
        amount: "£2,500 - £5,000",
        deadline: "June",
        eligibility: "International students with academic excellence",
        link: "https://www.leeds.ac.uk/international/scholarships-finance/think-leeds-scholarships"
      }
    ]
  },
  {
    id: "nottingham",
    countryId: "uk",
    name: "University of Nottingham",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Nottingham is a public research university in Nottingham, England. It was founded as University College Nottingham in 1881, and was granted a royal charter in 1948.",
    ranking: 100,
    tuitionFee: "£20,000 - £26,500",
    acceptanceRate: "83%",
    website: "https://www.nottingham.ac.uk/",
    scholarships: [
      {
        name: "International Office Excellence Scholarship",
        amount: "£4,000",
        deadline: "April",
        eligibility: "International students with high academic achievement",
        link: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/masters-scholarships.aspx"
      },
      {
        name: "Developing Solutions Scholarships",
        amount: "Full tuition and living expenses",
        deadline: "April",
        eligibility: "Students from Africa and India",
        link: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/developing-solutions-scholarships.aspx"
      }
    ]
  },
  {
    id: "sheffield",
    countryId: "uk",
    name: "University of Sheffield",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Sheffield is a public research university in Sheffield, South Yorkshire, England. Its history traces back to the foundation of Sheffield Medical School in 1828, Firth College in 1879, and Sheffield Technical School in 1884.",
    ranking: 104,
    tuitionFee: "£19,450 - £24,450",
    acceptanceRate: "84%",
    website: "https://www.sheffield.ac.uk/",
    scholarships: [
      {
        name: "International Merit Postgraduate Scholarship",
        amount: "£2,500",
        deadline: "June",
        eligibility: "International students with academic merit",
        link: "https://www.sheffield.ac.uk/international/money-and-funding/scholarships/postgraduate"
      },
      {
        name: "Faculty PhD Scholarships",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.sheffield.ac.uk/postgraduate/research/scholarships"
      }
    ]
  },
  {
    id: "st-andrews",
    countryId: "uk",
    name: "University of St Andrews",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of St Andrews is a public university in St Andrews, Fife, Scotland. It is the oldest of the four ancient universities of Scotland and the third oldest university in the English-speaking world, founded in 1413.",
    ranking: 95,
    tuitionFee: "£20,370 - £30,160",
    acceptanceRate: "8.35%",
    website: "https://www.st-andrews.ac.uk/",
    scholarships: [
      {
        name: "St Andrews Scholarships for Excellence",
        amount: "£8,000",
        deadline: "March",
        eligibility: "International students with outstanding academic records",
        link: "https://www.st-andrews.ac.uk/study/fees-and-funding/undergraduate/scholarships/"
      },
      {
        name: "Gateway to Research Scholarship",
        amount: "Full tuition and stipend",
        deadline: "February",
        eligibility: "Students from underrepresented countries",
        link: "https://www.st-andrews.ac.uk/study/fees-and-funding/postgraduate/scholarships/gateway-to-research/"
      }
    ]
  },
  {
    id: "southampton",
    countryId: "uk",
    name: "University of Southampton",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of Southampton is a public research university in Southampton, England. Southampton is a founding member of the Russell Group of research-intensive universities in the United Kingdom.",
    ranking: 108,
    tuitionFee: "£19,300 - £22,760",
    acceptanceRate: "84%",
    website: "https://www.southampton.ac.uk/",
    scholarships: [
      {
        name: "Vice-Chancellor's International Scholarship",
        amount: "£3,000",
        deadline: "July",
        eligibility: "International students with academic excellence",
        link: "https://www.southampton.ac.uk/study/fees-funding/scholarships/vice-chancellors-international-scholarship.page"
      },
      {
        name: "Presidential Research Scholarship",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.southampton.ac.uk/study/postgraduate-research/funding-fees/presidential-research-scholarships.page"
      }
    ]
  },
  // Japanese Universities
  {
    id: "university-of-tokyo",
    countryId: "japan",
    name: "University of Tokyo",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
    description: "The University of Tokyo, abbreviated as UTokyo, is a public research university in Tokyo, Japan. Established in 1877, it is Japan's first imperial university and consistently ranks as the top university in Japan.",
    ranking: 23,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "35%",
    website: "https://www.u-tokyo.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students for undergraduate and graduate programs",
        link: "https://www.u-tokyo.ac.jp/en/prospective-students/scholarships.html"
      },
      {
        name: "University of Tokyo Fellowship",
        amount: "¥200,000/month",
        deadline: "December",
        eligibility: "Outstanding doctoral students",
        link: "https://www.u-tokyo.ac.jp/en/prospective-students/doctoral-fellowship.html"
      }
    ]
  },
  {
    id: "kyoto-university",
    countryId: "japan",
    name: "Kyoto University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Kyoto University is a national university in Kyoto, Japan. Founded in 1897, it is one of the former Imperial Universities and is considered one of the most prestigious universities in Japan.",
    ranking: 36,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "38%",
    website: "https://www.kyoto-u.ac.jp/en",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students for all levels",
        link: "https://www.kyoto-u.ac.jp/en/education-campus/education/international/scholarship"
      },
      {
        name: "Kyoto University International Undergraduate Program Scholarship",
        amount: "Full tuition waiver",
        deadline: "January",
        eligibility: "International undergraduate students",
        link: "https://www.kyoto-u.ac.jp/en/education-campus/education/international/iup-scholarship"
      }
    ]
  },
  {
    id: "osaka-university",
    countryId: "japan",
    name: "Osaka University",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Osaka University is a national university in Osaka, Japan. Founded in 1931, it is one of Japan's former imperial universities and is known for its strong programs in medicine, engineering, and science.",
    ranking: 68,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "40%",
    website: "https://www.osaka-u.ac.jp/en",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.osaka-u.ac.jp/en/international/scholarships"
      },
      {
        name: "Osaka University Scholarship for International Students",
        amount: "¥80,000/month",
        deadline: "February",
        eligibility: "International students with excellent academic records",
        link: "https://www.osaka-u.ac.jp/en/international/scholarships/university-scholarship"
      }
    ]
  },
  {
    id: "tohoku-university",
    countryId: "japan",
    name: "Tohoku University",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "Tohoku University is a Japanese national university in Sendai, Miyagi. Founded in 1907, it was the third imperial university in Japan and is known for its research excellence and international outlook.",
    ranking: 79,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "42%",
    website: "https://www.tohoku.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.tohoku.ac.jp/en/international/scholarships/"
      },
      {
        name: "Tohoku University Global Leader Program Scholarship",
        amount: "Full tuition + ¥180,000/month",
        deadline: "December",
        eligibility: "Outstanding doctoral students",
        link: "https://www.tohoku.ac.jp/en/international/global-leader-scholarship/"
      }
    ]
  },
  {
    id: "nagoya-university",
    countryId: "japan",
    name: "Nagoya University",
    imageUrl: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop",
    description: "Nagoya University is a Japanese national university in Nagoya, Japan. Founded in 1939, it is one of Japan's leading research universities and has produced several Nobel Prize winners.",
    ranking: 112,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "45%",
    website: "https://en.nagoya-u.ac.jp/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://en.nagoya-u.ac.jp/international/scholarships/"
      },
      {
        name: "Nagoya University Doctoral Fellowship",
        amount: "¥200,000/month",
        deadline: "January",
        eligibility: "Doctoral students with outstanding research potential",
        link: "https://en.nagoya-u.ac.jp/international/doctoral-fellowship/"
      }
    ]
  },
  {
    id: "hokkaido-university",
    countryId: "japan",
    name: "Hokkaido University",
    imageUrl: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop",
    description: "Hokkaido University is a national university in Sapporo, Hokkaido, Japan. Established in 1876, it is one of the former imperial universities and is known for its beautiful campus and strong agricultural and veterinary programs.",
    ranking: 145,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "50%",
    website: "https://www.hokudai.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.hokudai.ac.jp/en/international/scholarships/"
      },
      {
        name: "Hokkaido University President Fellowship",
        amount: "¥150,000/month",
        deadline: "December",
        eligibility: "Outstanding graduate students",
        link: "https://www.hokudai.ac.jp/en/international/president-fellowship/"
      }
    ]
  },
  {
    id: "kyushu-university",
    countryId: "japan",
    name: "Kyushu University",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
    description: "Kyushu University is a Japanese national university in Fukuoka, Japan. Founded in 1903, it is one of Japan's former imperial universities and is known for its comprehensive research programs and international initiatives.",
    ranking: 135,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "48%",
    website: "https://www.kyushu-u.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.kyushu-u.ac.jp/en/international/scholarships/"
      },
      {
        name: "Kyushu University Doctoral Fellowship",
        amount: "¥180,000/month",
        deadline: "November",
        eligibility: "Exceptional doctoral candidates",
        link: "https://www.kyushu-u.ac.jp/en/international/doctoral-fellowship/"
      }
    ]
  },
  {
    id: "waseda-university",
    countryId: "japan",
    name: "Waseda University",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop",
    description: "Waseda University is a private research university in Tokyo, Japan. Founded in 1882, it is one of Japan's most prestigious private universities and is known for its liberal atmosphere and strong alumni network.",
    ranking: 203,
    tuitionFee: "¥1,200,000-1,500,000 ($8,000-10,000)",
    acceptanceRate: "55%",
    website: "https://www.waseda.jp/top/en/",
    scholarships: [
      {
        name: "Waseda University Scholarship",
        amount: "¥300,000-800,000/year",
        deadline: "March",
        eligibility: "International students with academic excellence",
        link: "https://www.waseda.jp/top/en/international/scholarships/"
      },
      {
        name: "JASSO Scholarship",
        amount: "¥48,000/month",
        deadline: "April",
        eligibility: "International students with financial need",
        link: "https://www.waseda.jp/top/en/international/jasso-scholarship/"
      }
    ]
  },
  {
    id: "keio-university",
    countryId: "japan",
    name: "Keio University",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
    description: "Keio University is a private research university in Tokyo, Japan. Founded in 1858, it is one of Japan's oldest institutions of higher learning and is particularly renowned for its business and economics programs.",
    ranking: 201,
    tuitionFee: "¥1,200,000-1,600,000 ($8,000-11,000)",
    acceptanceRate: "60%",
    website: "https://www.keio.ac.jp/en/",
    scholarships: [
      {
        name: "Keio University Scholarship",
        amount: "¥500,000-1,000,000/year",
        deadline: "February",
        eligibility: "International students with outstanding academic records",
        link: "https://www.keio.ac.jp/en/international/scholarships/"
      },
      {
        name: "Fukuzawa Memorial Scholarship",
        amount: "Full tuition waiver",
        deadline: "January",
        eligibility: "Exceptional international students",
        link: "https://www.keio.ac.jp/en/international/fukuzawa-scholarship/"
      }
    ]
  },
  {
    id: "tsukuba-university",
    countryId: "japan",
    name: "University of Tsukuba",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "The University of Tsukuba is a national university in Tsukuba, Ibaraki, Japan. Established in 1973, it is known for its innovative educational system and strong research programs in science and technology.",
    ranking: 270,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "52%",
    website: "https://www.tsukuba.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.tsukuba.ac.jp/en/international/scholarships/"
      },
      {
        name: "University of Tsukuba Fellowship",
        amount: "¥120,000/month",
        deadline: "December",
        eligibility: "Outstanding graduate students",
        link: "https://www.tsukuba.ac.jp/en/international/fellowship/"
      }
    ]
  },
  {
    id: "hiroshima-university",
    countryId: "japan",
    name: "Hiroshima University",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Hiroshima University is a national university in Hiroshima, Japan. Founded in 1949, it is known for its peace studies programs and comprehensive research activities across multiple disciplines.",
    ranking: 334,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "55%",
    website: "https://www.hiroshima-u.ac.jp/en",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.hiroshima-u.ac.jp/en/international/scholarships"
      },
      {
        name: "Hiroshima University Phoenix Scholarship",
        amount: "¥100,000/month",
        deadline: "February",
        eligibility: "Students from developing countries",
        link: "https://www.hiroshima-u.ac.jp/en/international/phoenix-scholarship"
      }
    ]
  },
  {
    id: "kobe-university",
    countryId: "japan",
    name: "Kobe University",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "Kobe University is a national university in Kobe, Japan. Founded in 1949, it is known for its strong programs in business, economics, and maritime studies, taking advantage of Kobe's position as a major port city.",
    ranking: 351,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "58%",
    website: "https://www.kobe-u.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.kobe-u.ac.jp/en/international/scholarships/"
      },
      {
        name: "Kobe University Maritime Fellowship",
        amount: "¥80,000/month",
        deadline: "March",
        eligibility: "Students in maritime-related fields",
        link: "https://www.kobe-u.ac.jp/en/international/maritime-fellowship/"
      }
    ]
  },
  {
    id: "yokohama-national-university",
    countryId: "japan",
    name: "Yokohama National University",
    imageUrl: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop",
    description: "Yokohama National University is a national university in Yokohama, Japan. Founded in 1949, it is known for its strong engineering and business programs and its beautiful campus overlooking Tokyo Bay.",
    ranking: 401,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "60%",
    website: "https://www.ynu.ac.jp/english/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.ynu.ac.jp/english/international/scholarships/"
      },
      {
        name: "YNU International Student Support Scholarship",
        amount: "¥50,000/month",
        deadline: "April",
        eligibility: "International students with financial need",
        link: "https://www.ynu.ac.jp/english/international/support-scholarship/"
      }
    ]
  },
  {
    id: "chiba-university",
    countryId: "japan",
    name: "Chiba University",
    imageUrl: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop",
    description: "Chiba University is a national university in Chiba, Japan. Founded in 1949, it is known for its comprehensive programs and particularly strong medical and pharmaceutical schools.",
    ranking: 451,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "62%",
    website: "https://www.chiba-u.ac.jp/e/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.chiba-u.ac.jp/e/international/scholarships/"
      },
      {
        name: "Chiba University International Student Scholarship",
        amount: "¥40,000/month",
        deadline: "March",
        eligibility: "International students with good academic standing",
        link: "https://www.chiba-u.ac.jp/e/international/student-scholarship/"
      }
    ]
  },
  {
    id: "niigata-university",
    countryId: "japan",
    name: "Niigata University",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
    description: "Niigata University is a national university in Niigata, Japan. Founded in 1949, it is known for its strong medical school and comprehensive research programs across various disciplines.",
    ranking: 501,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "65%",
    website: "https://www.niigata-u.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.niigata-u.ac.jp/en/international/scholarships/"
      },
      {
        name: "Niigata University Regional Development Scholarship",
        amount: "¥60,000/month",
        deadline: "February",
        eligibility: "Students interested in regional development studies",
        link: "https://www.niigata-u.ac.jp/en/international/regional-scholarship/"
      }
    ]
  },
  {
    id: "okayama-university",
    countryId: "japan",
    name: "Okayama University",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop",
    description: "Okayama University is a national university in Okayama, Japan. Founded in 1949, it is known for its comprehensive programs and particularly strong medical and agricultural schools.",
    ranking: 551,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "68%",
    website: "https://www.okayama-u.ac.jp/eng/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.okayama-u.ac.jp/eng/international/scholarships/"
      },
      {
        name: "Okayama University Excellence Scholarship",
        amount: "¥70,000/month",
        deadline: "January",
        eligibility: "Outstanding international students",
        link: "https://www.okayama-u.ac.jp/eng/international/excellence-scholarship/"
      }
    ]
  },
  {
    id: "kumamoto-university",
    countryId: "japan",
    name: "Kumamoto University",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
    description: "Kumamoto University is a national university in Kumamoto, Japan. Founded in 1949, it is known for its strong medical school and comprehensive research programs, particularly in natural sciences.",
    ranking: 601,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "70%",
    website: "https://www.kumamoto-u.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.kumamoto-u.ac.jp/en/international/scholarships/"
      },
      {
        name: "Kumamoto University International Exchange Scholarship",
        amount: "¥50,000/month",
        deadline: "March",
        eligibility: "International students participating in exchange programs",
        link: "https://www.kumamoto-u.ac.jp/en/international/exchange-scholarship/"
      }
    ]
  },
  {
    id: "shinshu-university",
    countryId: "japan",
    name: "Shinshu University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Shinshu University is a national university in Matsumoto, Nagano, Japan. Founded in 1949, it is known for its beautiful mountain campus setting and strong programs in engineering and fiber science.",
    ranking: 651,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "72%",
    website: "https://www.shinshu-u.ac.jp/english/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.shinshu-u.ac.jp/english/international/scholarships/"
      },
      {
        name: "Shinshu University Mountain Research Scholarship",
        amount: "¥45,000/month",
        deadline: "February",
        eligibility: "Students in environmental and mountain sciences",
        link: "https://www.shinshu-u.ac.jp/english/international/mountain-scholarship/"
      }
    ]
  },
  {
    id: "gunma-university",
    countryId: "japan",
    name: "Gunma University",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Gunma University is a national university in Maebashi, Gunma, Japan. Founded in 1949, it is known for its strong medical school and comprehensive undergraduate and graduate programs.",
    ranking: 701,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "75%",
    website: "https://www.gunma-u.ac.jp/english/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.gunma-u.ac.jp/english/international/scholarships/"
      },
      {
        name: "Gunma University Community Support Scholarship",
        amount: "¥35,000/month",
        deadline: "April",
        eligibility: "International students with community involvement",
        link: "https://www.gunma-u.ac.jp/english/international/community-scholarship/"
      }
    ]
  },
  {
    id: "yamaguchi-university",
    countryId: "japan",
    name: "Yamaguchi University",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "Yamaguchi University is a national university in Yamaguchi, Japan. Founded in 1949, it is known for its comprehensive programs and strong emphasis on international education and research collaboration.",
    ranking: 751,
    tuitionFee: "¥535,800 ($3,600)",
    acceptanceRate: "78%",
    website: "https://www.yamaguchi-u.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "¥143,000-184,000/month",
        deadline: "May",
        eligibility: "International students",
        link: "https://www.yamaguchi-u.ac.jp/en/international/scholarships/"
      },
      {
        name: "Yamaguchi University International Partnership Scholarship",
        amount: "¥40,000/month",
        deadline: "January",
        eligibility: "Students from partner universities",
        link: "https://www.yamaguchi-u.ac.jp/en/international/partnership-scholarship/"
      }
    ]
  },   
   {
  id: "university-of-melbourne",
  countryId: "australia",
  name: "University of Melbourne",
  imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop",
  description: "The University of Melbourne is a leading public research university in Melbourne, Victoria, Australia. Founded in 1853, it’s known for its strength in engineering, computer science, AI & ML research, medical sciences, and arts.",
  ranking: 39,  // in the 2025 Times Higher Education ranking for Australia globally ≈ #39 :contentReference[oaicite:0]{index=0}
  tuitionFee: "AUD $40,000 – 90,000 (~USD $25,000–60,000) per year",  // Depends on course (e.g. Engineering, Medicine are higher) :contentReference[oaicite:1]{index=1}
  acceptanceRate: "≈ 30–40%",  // approximate, Australian top unis are competitive; not always published precisely
  website: "https://www.unimelb.edu.au/",
  scholarships: [
    {
      name: "Melbourne International Undergraduate Scholarship",
      amount: "25% tuition fee remission",
      deadline: "Usually November for following year intake",
      eligibility: "International students enrolling in a bachelor degree, high academic merit",
      link: "https://scholarships.unimelb.edu.au/awards/melbourne-international-undergraduate-scholarship"
    },
    {
      name: "Melbourne Graduate Research Scholarship",
      amount: "Full tuition fee coverage + living allowance (≈ AUD 35,000/year)",
      deadline: "Varies by faculty; check research degree scholarship deadlines",
      eligibility: "International postgraduate research students",
      link: "https://www.unimelb.edu.au/research-support/funding/graduate-research-scholarships"
    }
  ]
},

];

export const getCollegesByCountry = (countryId: string): StudyAbroadCollege[] => {
  return studyAbroadColleges.filter(college => college.countryId === countryId);
};
