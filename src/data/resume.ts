export const resumeData = {
  name: "Adarsh Kumar Sharma",
  title: "Full Stack Developer",
  email: "adarshsharma1552004@gmail.com",
  phone: "8795427984",
  github: "Adarshvis",
  linkedin: "adarsh-kumar-sharma-72263329b",
  about: "I’m a freelance web developer and IT student at University of Delhi with experience building modern websites, CMS platforms, and full-stack web applications. I mainly work with React, Next.js, Payload CMS, and Grav CMS, and have developed projects for educational institutions, government initiatives, and organizations. Along with development, I also help with UI improvements, deployment, and content-focused websites. I enjoy turning ideas into clean, functional, and user-friendly digital products while continuously exploring new technologies and real-world problem solving.",
  experience: [
    {
      role: "Web Development Intern",
      company: "Samarth-eGov(Ministry of Education)",
      period: "March 2025 - Present",
      description: [
        "Developed Home Page for SamarthX (Govt. of Goa) using Grav CMS.",
        "Built Payload CMS-based web application for SamarthX with admin dashboards.",
        "Built Payload CMS-based web application for Delhi University Computer Centre(DUCC) with admin dashboards.",
        "Built full-stack institutional portal for Cyber Physical Systems Lab using Next.js.",
        "Developed responsive department website for Institute of Informatics and Communication(IIC).",
        "Revamped UI/UX for MOSAI and deployed on GCP."
      ]
    },
    {
      role: "Research Intern",
      company: "Dept. of Forest and Wildlife (Govt. of NCT of Delhi)",
      period: "Jan 2025 - March 2025",
      description: [
        "Project: Understanding Human-Leopard Conflict in Delhi.",
        "Conducted field surveys and primary data collection.",
        "Analyzed response patterns to identify interaction trends.",
        "Presented findings for conflict-mitigation strategies."
      ]
    },
    {
      role: "Project Management Intern",
      company: "Across The Globe (ATG)",
      period: "April 2024 - Dec 2024",
      description: [
        "Managed social media handles for multiple clients.",
        "Developed branding strategies and improved outreach."
      ]
    }
  ],
  projects: [
    {
      title: "DUCC — Univ. of Delhi Computer Centre",
      tech: ["Next.js", "Payload CMS", "TailwindCSS"],
      description: "Designed and shipped the official DUCC portal for the University of Delhi Computer Centre — a CMS-driven institutional site with announcements, services and faculty modules.",
      link: "https://ducc.uod.ac.in/",
      status: "INSTITUTIONAL PORTAL",
      image: "/ducc.png"
    },
    {
      title: "MOSAI — mosai.org.in",
      tech: ["Grav CMS", "GCP", "UI/UX"],
      description: "Revamped UI/UX and shipped the Mombusho Scholars Association of India website on Google Cloud using Grav CMS.",
      link: "https://mosai.org.in",
      status: "REVAMP & GCP DEPLOY",
      image: "/mosai.png"
    },
    {
      title: "Career SamarthX — DU",
      tech: ["Payload CMS", "Next.js", "MongoDB"],
      description: "Multi-module Payload CMS platform powering career.samarthx.du.ac.in with Home, About, Auth, Application modules, form workflows and admin dashboard.",
      link: "https://career.samarthx.du.ac.in",
      status: "PRODUCTION CMS PLATFORM",
      image: "/SamarthX.png"
    }
  ],
  skills: {
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    frameworks: ["ReactJS", "Next.js", "Node.js", "Angular", "TailwindCSS"],
    tools: ["Git", "MongoDB", "Docker", "CI/CD", "VS Code", "Cursor"],
    platforms: ["Linux", "Google Cloud", "Windows"]
  },
  awards: [
    { title: "Third Prize in Micromouse", org: "IIT BHU", date: "Mar 2024" },
    { title: "First Prize in Pixelate", org: "IIT BHU", date: "Mar 2024" },
    { title: "First Prize in Line Follower", org: "IIT Jodhpur", date: "Jan 2024" },
    { title: "Finalist (Top 15)", org: "IIT Bombay Techfest", date: "Dec 2023" }
  ],
  education: [
    { degree: "B.Tech in Information Technology", school: "University of Delhi", period: "2022 - 2026" },
    { degree: "Class 12th (PCM)", school: "Saraswati Shishu Mandir", period: "2022" }
  ],
  academicJourney: {
    projects: [
      {
        title: "ZeroHunger (Web-based Application)",
        description: "A web-based platform designed to reduce food waste and donate surplus food to NGOs. Developed and designed the frontend using HTML, JavaScript, React, and TailwindCSS.",
        tech: ["HTML", "JavaScript", "React", "TailwindCSS"]
      },
      {
        title: "Using Language Models to Solve Linear Programming Problems",
        description: "Explored the use of Large Language Models (LLMs) to solve optimization tasks like resource allocation and logistics. Evaluated single-step and multi-step approaches, showing LLMs can produce accurate and practical solutions.",
        tech: ["Python", "LLMs", "Optimization"]
      },
      {
        title: "Steganography in Spatial Domain",
        description: "Combined Least Significant Bit (LSB) and Spread Spectrum Image Steganography (SSIS) to securely embed messages within images while preserving quality. Outperformed traditional methods based on PSNR and MSE metrics.",
        tech: ["Python", "Image Processing", "Cryptography"]
      },
      {
        title: "Mathematical Modeling of Crime Against Women in India",
        description: "Developed a regression-based model analyzing socio-economic factors such as population density, unemployment, and per capita income. Predicted crime trends, showing crime rates increase with unemployment and population but decrease with GDP.",
        tech: ["Python", "Statistical Modeling", "Data Analysis"]
      }
    ],
    conferences: [
      {
        title: "A Heterogeneous Ensemble Approach for Improving Robustness in Facial Expression Recognition Across Variable Conditions",
        authors: "Anjani Kumar, Shantanu Pandey, Adarsh Kumar Sharma and Swastik Guha Roy",
        affiliation: "Cluster Innovation Centre, University of Delhi, New Delhi, India",
        abstract: "Facial expression recognition has emerged as a critical area of research with applications spanning human-computer interaction, mental health analysis, and affective computing. This study presents a practical and scalable approach to facial expression recognition (FER) that targets three persistent challenges: class imbalance, appearance variability, and deployment efficiency. We introduce a class-balancing data-augmentation pipeline using rotations, translations, shearing, zooming, and flips to equalise class frequencies on AffectNet and FER2013 subsets, then train and compare modern architectures and recent relevant literature. Motivated by the complementary strengths of different model families, we propose a heterogeneous ensemble that combines attention-based (ViT), MLP-based (MLP-Mixer), hybrid (CoAtNet), and modern convolutional (ConvNeXt) backbones to improve robustness across pose, lighting, and occlusion. Experiments on the prepared datasets demonstrate clear gains over standard baselines, and the pipeline was validated in a real-time setting. Results indicate that carefully balancing datasets and leveraging architectural diversity yield measurable improvements in per-class performance and overall accuracy, highlighting a viable path toward fairer and more deployable FER systems.",
        keywords: "Facial Expression Recognition, Class Imbalance, Data Augmentation, Ensemble Learning, Vision Transformer (ViT)",
        conference: "International Conference on Mathematical Sciences and Computational Intelligence (ICMSCI-2026)",
        organizer: "Department of Mathematics, PG DAV College, University of Delhi, in association with the Faculty of Mathematical Sciences, University of Delhi, and National Institute of Technology (NIT), Mandi & Uttarakhand",
        date: "Feb 2026",
        period: "20-22 February 2026"
      }
    ]
  }
}
