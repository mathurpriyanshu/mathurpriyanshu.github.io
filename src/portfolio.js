//SEO Related settings
const seo = {
  title: "Priyanshu's Portfolio",
  description: "Priyanshu's Personal Portfolio",
  og: {
    title: "Priyanshu Mathur Portfolio",
    type: "website",
    url: "http://mathurpriyanshu.com/",
  },
};

//Home Page
const greeting = {
  title: "Priyanshu Mathur",
  logo_name: "PriyanshuMathur",

  subTitle:
    "Transforming ideas into impactful software solutions, one line of code at a time.",
  resumeLink:
    "https://docs.google.com/document/d/101ROw-v5kgLHLhspDa_DcW1Mt97iKXyrUkMX_MekJQk/edit?usp=sharing",
  portfolio_repository:
    "https://github.com/mathurpriyanshu/mathurpriyanshu.github.io",
  githubProfile: "https://github.com/mathurpriyanshu",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mathurpriyanshu",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu-mathur/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },

  {
    name: "Gmail",
    link: "mailto:mathurpriyanshu2890@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kiran__a__n",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kiran_a_n/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop responsive web applications with clean, user-friendly interfaces.",
        "⚡ Build robust backend systems using technologies like Node.js, Python, and Java.",
        "⚡ Ensure seamless interaction between front-end and back-end through efficient API calls.",
        "⚡ Optimize application performance and scalability for a better user experience.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Strong background in ETL (Extract, Transform, Load) processes for data preparation",
        "⚡ Hypothesis testing and statistical analysis techniques",
        "⚡ Skilled in creating compelling data visualizations with PowerBI for insights",
      ],

      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#11557C",
          },
        },
        {
          skillName: "scikitlearn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Scipy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            backgroundColor: "transparent",
            color: "#8CAAE6",
          },
        },

        {
          skillName: "Data Visualization",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#E97627",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working on multiple cloud platforms",
        "⚡ Working with databases such as MySQL, MongoDB, or PostgreSQL",
        "⚡ Implementing continuous integration and deployment (CI/CD) pipelines for cloud-based applications",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying applications on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const certifications = {
  certifications: [
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      subtitle: "Udemy - Abdul Bari",
      logo_path: "udemy-new.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ac3eeada-a11e-47f6-8564-adb9e6e71eb0/",
      alt_name: "Udemy certificate",
      color_code: "#8C151599",
    },
    {
      title: "Platform Developer I",
      subtitle: "Salesforce",
      logo_path: "pd1.png",
      certificate_link:
        "https://trailhead.salesforce.com/en/credentials/verification/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "Supervised ML",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/3MDPJMSS8DQH",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Paper Publication",
    //   subtitle: "- ISJEM",
    //   logo_path: "isjem.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1MGS9vht22hwQuZoZwu8tOl5KUjgYIX4U/view?usp=sharing",
    //   alt_name: "ISJEM",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Virtual Internship",
    //   subtitle: "- BlackBird",
    //   logo_path: "black.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/17-iX5Hc1Cgu9jGmsoGZfi6lfhc7x1eww/view?usp=sharing",
    //   alt_name: "Internship",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "AWS",
    //   subtitle: "- Simplilearn",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1mGWzAqH711YJ0FmzHOwN1Gs8HnmvC74i/view?usp=sharing",
    //   alt_name: "aws",
    //   color_code: "#FA9C1B",
    // },
    // {
    //   title: "Virtual Internship",
    //   subtitle: "- Accenture",
    //   logo_path: "accenturelogo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1soGDd0-dBE25P3Jcijaun3B1H0Qifums/view?usp=sharing",
    //   alt_name: "IBM",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Coding Compitation",
    //   subtitle: "- Agoda",
    //   logo_path: "Codegoda-logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1r9m4vftAwM5NwVePH2M-2deqhVV2LwVO/view?usp=sharing",
    //   alt_name: "Agoda",
    //   color_code: "#4D0C83",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "- PrepInsta",
    //   logo_path: "prepinsta.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1htXr6ISaD8tUNtj8j14AbIrRIeaRV9jb/view?usp=sharing",
    //   alt_name: "IBM",
    //   color_code: "#000000",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Florida",
      subtitle: "MS in Computer Science",
      logo_path: "uf_logo.jpeg",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Pursuing a Master’s degrree in Computer Science with a focus on advanced data structures, distributed systems, and data engineering.",
        "⚡ Selected to work on an individual research project (individual study) under Dr. Christan Grant, concentrating on AI/ML pipelines for the Fall 2024 semester.",
        "⚡ Achieved a GPA of 3.44, showcasing strong academic performance and a solid understanding of the coursework throughout the degree program.",
      ],
      website_link: "https://www.ufl.edu/",
    },

    {
      title: "College of Technology and Engineering",
      subtitle: "B.Tech in Computer Science & Engineering",
      logo_path: "ctae_logo.png",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Graduated with a focus on core computer science principles, including algorithms, data structures, and software engineering.",
        "⚡ Completed coursework in operating systems, database systems, design & analysis of algorithms and several other interesting courses.",
        "⚡ Collaborated on team-based projects, enhancing my ability to work effectively in dynamic environments.",
      ],
      website_link: "https://www.ctae.ac.in/",
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/mathurpriyanshu/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/mathurpriyanshu1",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/priyanshumathur/",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mathurpriyansh",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: false,
      experiences: [
        {
          title: "Student Developer",
          company:
            "Trustworthy Engineered Autonomy(TEA) Lab, University of Florida",
          company_url: "https://tea.ece.ufl.edu/",
          logo_path: "tea.jpg",
          duration: "May 2024 - August 2024",
          location: "Gainesville, FL",
          description:
            "Collaborated on the implementation of cutting-edge research focused on High-Dimensional Controllers. Leveraged DevOps tools like Docker and executed tasks on the HiPerGator supercomputer. Worked closely with professors and researchers to develop reliable, scalable software solutions, contributing to impactful research in autonomous systems.",
          color: "#000000",
        },
        {
          title: "Associate Software Engineer",
          company: "V2Solutions",
          company_url: "https://www.v2solutions.com/",
          logo_path: "v2.jpg",
          duration: "June 2022 - June 2023",
          location: "Udaipur, Rajasthan (India)",
          description:
            "Developed and maintained full-stack applications on Salesforce CRM, including API integrations and custom Lightning Web Components. Optimized system functionality through Apex and JavaScript, ensuring seamless user experiences. Collaborated with cross-functional teams to deliver scalable solutions, performed unit testing, and resolved issues to maintain code quality and performance. Got certified as a Salesforce Platform Developer I during this period.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Intern",
          company: "Flipshope",
          company_url: "https://flipshope.com/",
          logo_path: "flipshope.webp",
          duration: "May 2021 - October 2021",
          location: "Remote",
          description:
            "Worked on data analysis projects to optimize customer behavior insights and improve product performance. Developed and implemented data pipelines for gathering, processing, and analyzing large datasets. Utilized tools like Python and Pandas to extract meaningful insights, contributing to data-driven decisions that enhanced business outcomes.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "November 2023 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like AutoGPT, Supabase, Tensorflow, Facebook, Scrapy, Exercism, Python, Github community, Forem etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //     {
    //       title: "Mentor",
    //       company: "Exercism",
    //       company_url: "https://exercism.org/",
    //       logo_path: "exercism.png",
    //       duration: "September 2023 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "Exercism is a coding platform for collaborative learning. As an active participant on Exercism I've mentored over 170+ students worldwide. Through real-world coding exercises, I am providing guidance to learners, helping them to enhance their programming skills and achieve their learning goals.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Moderator",
    //       company: "Dev Community",
    //       company_url: "https://dev.to/",
    //       logo_path: "devcommunity.png",
    //       duration: "November 2023 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am a part of core community moderation team at DEV. As a DEV Tag Moderator, I actively contribute to organizing and improving content on DEV. ",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create full-stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic_zoomed.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://dev.to/dev_kiran",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ranebennur, T.A.-Ranebennur, Dist.-Haveri, Karnataka - 581115",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/cU6oYqqj55KfoH9w5",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9035918593",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  competitiveSites,
  contactPageData,
};
