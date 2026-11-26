// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-mentoring",
          title: "Mentoring",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/mentoring/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications and conference proceedings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-composite-layups",
          title: 'Composite Layups',
          description: "2022 to 2025 - Various composite manufacturing projects for complex geometries showcasing core design for manufacturing and process creativity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Composites/";
            },},{id: "projects-lab-projects",
          title: 'Lab Projects',
          description: "2021 to 2025 - An exhibit of the projects done in lab courses at the University of California, San Diego.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LabProjects/";
            },},{id: "projects-nasa-jpl-mars-smallsat-concepts",
          title: 'NASA JPL: Mars SmallSat Concepts',
          description: "2024 - Development of 2 Mars SmallSat mission concepts contributing architecture designs and trade studies in elements relevant to a SmallSat size constraint.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MarsSmallSatConcepts/";
            },},{id: "projects-nasa-jpl-multi-payload-mission-design-tools",
          title: 'NASA JPL: Multi-Payload Mission Design Tools',
          description: "2025 - Description of participation in a multi-day international design study for a Mars SmallSat transporter requiring development of mission design tools using JavaScript to streamline multi-payload systems engineering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Multi-PayloadMissionDesignTools/";
            },},{id: "projects-nacelle-component-prototyping",
          title: 'Nacelle Component Prototyping',
          description: "2023 - Research and technology role at Collins Aerospace optimizing thermoplastic manipulation jig and prototyping manufacturing methods for Nacelle component replacements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NacelleComponentPrototyping/";
            },},{id: "projects-rocket-recovery-system",
          title: 'Rocket Recovery System',
          description: "2022 to 2026 - Presented at AIAA SciTech 2026 - Design and test of a dual deployment recovery system for a 30,000 ft apogee bi-prop rocket.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RocketRecoverySystem/";
            },},{id: "projects-samos-lab",
          title: 'SAMOS Lab',
          description: "2024 to 2025 - Literature review on satellite ablation modeling techniques.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SAMOSLab/";
            },},{id: "projects-statistical-orbit-determination",
          title: 'Statistical Orbit Determination',
          description: "2024 - Analyzed orbital from 3 viewpoints along with projected dynamics to generate approximate location ellipsoid using a Kalman filter.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StatisticalOrbitDetermination/";
            },},{id: "projects-titan-wig-glider",
          title: 'Titan WIG Glider',
          description: "2025 - Wing In Ground effect remote control aircraft designed and built in a team of 3. I designed and implemented a number of core elements described here.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TitanWIGGlider/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
