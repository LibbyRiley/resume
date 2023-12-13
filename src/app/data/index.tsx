export interface PersonalDetails {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  statement: string[];
}
export const personalDetails: PersonalDetails = {
  name: "LibbyRiley",
  email: "libbyriley@windowslive.com",
  phone: "0432 390 262",
  location: "Melbourne, VIC",
  linkedIn: "https://www.linkedin.com/in/libbyriley/",
  statement: [
    "I have 8+ years of experience and have consistently grown as a front-end developer, working in multidisciplinary teams with designers, developers and producers within diverse projects. During this time I've also developed my leadership skills overseeing junior developers and working with clients to build amazing websites and applications.",
    "I am experienced in modern Javascript - React and NextJS, HTML5, CSS3/SCSS, and using GraphQL for API integration. I've built end-to-end micro-service applications using a range of Headless CMS platforms and content tools.",
    "I'm working on certain skills that are in-demand on the market right now, namely Typescript, TailwindCSS, and AWS.",
    "I am a NZ citizen with full working rights for Australia.",
  ],
};

export interface Role {
  title: string;
  company: string;
  start: string;
  end: string;
  responsibilities: string[];
}
export const roles: Role[] = [
  {
    title: "Senior Front-end Developer",
    company: "Prime Motive",
    start: "Nov 2020",
    end: "Nov 2023",
    responsibilities: [
      "Responsible for component driven development by building performant, scalable, and maintainable code. Building a range of projects including JAMStack websites built with NextJS or GatsbyJS connected to headless content-management systems like Contentful, Sanity, and Prismic, and hosted on Netlify.",
      "Lead developer on projects from conception to launch, working in tools like Figma, Slack, and Miro with multidisciplinary teams to define roadmaps and prioritise features with the client",
      "Trained in the AgencyAgile method, as part of the core project team. Contributing to establishing project processes and shared learning to improve context discovery, roadmapping, and estimation exercises.",
      "Supporting the sales and partnerships team to validate and win opportunities, reviewing and providing feedback on RFPs, contributing to proposals, meeting with potential clients, and building relationships with existing clients and their teams.",
      "Managing and mentoring junior and mid-level developers, performing code reviews and providing constructive feedback and teaching, advocating for and facilitating learn/PD time, and supporting their professional goals. Performing coaching and support to UI designers. Providing feedback and collaborated on design file organisation and design-to-dev handover processes.",
      "Ran 'Lunch & Learn' style meetings within the Design Studio to educate our designers and sales teams on Development topics and trends, including “CSS Animations”, “Alt Text 101”, and “Ask A Dev”. Presented project showcases, shared and celebrated team success.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Prime Motive",
    start: "Feb 2017",
    end: "Nov 2020",
    responsibilities: [
      "Built one site in Vue, before then learning React for a number of websites and applications. Gained some experience with MongoDB. Began building sites with Headless CMS stacks, getting familiar with Contentful, Prismic, Sanity.",
      "Mentored junior developers, doing code reviews and providing constructive feedback and teaching.",
      "Established a bi-monthly dev showcase to share project success, recent learning and reading, facilitated team problem-solving.",
    ],
  },
  {
    title: "Junior Front-end Developer",
    company: "Prime Motive",
    start: "Aug 2015",
    end: "Feb 2017",
    responsibilities: [
      "Developed clean, scalable, maintainable front-end components for a multi-step form application.",
      "Learnt build tools - Grunt, Gulp, WebPack. Git processes and version control systems.",
      "Built a number of marketing websites on range of platforms and development stacks, including WordPress, PHP, and CraftCMS,",
    ],
  },
];
export interface Project {
  title: string;
  client: string;
  story: string;
  stack: string;
  image: { src: string; alt: string };
  url: string;
}

export const projects: Project[] = [
  {
    title: "Prime Motive Company Website",
    client: "Prime Motive",
    story:
      "A flagship project for this strategic design agency, showcasing collaborative expertise in design innovation",
    stack: "React CRA, Contentful, ChakraUI, Cloudinary, React Hook Forms",
    image: {
      src: "project-pm-website.png",
      alt: "Screenshot of Prime Motive website homepage",
    },
    url: "https://primemotive.com.au/",
  },
  {
    title: "Find a Broker Tool",
    client: "CGU",
    story:
      "A pilot program prototype tool to generate warm leads for insurance broker partners.",
    stack: "React, NextJS, SendGrid, ChakraUI",
    image: {
      src: "project-cgu-blt.png",
      alt: "Find a Broker Tool start page",
    },
    url: "https://www.cgu.com.au/find-a-broker/",
  },
  {
    title: "Motorserve Marketing Site",
    client: "Motorserve",
    story:
      "Revolutionise Motorserve's online presence with a sleek, user-friendly website showcasing services, promotions, and a seamless customer experience",
    stack: "React, Gatsby, Sanity.io, GraphQL",
    image: {
      src: "project-motorserve.png",
      alt: "Screenshot of Motorserve website homepage",
    },
    url: "https://motorserve.com.au/",
  },
  {
    title: "Pathways Finder Tool",
    client: "RMIT University",
    story:
      "The tool delivers a wealth of information to students' through an engrossing interactive experience, which influences many users to consider RMIT as their ‘educator of choice’",
    stack: "React, NextJS, Prisma, GraphQL, Styled Components",
    image: {
      src: "project-pathways.png",
      alt: "Pathways Finder application screenshot",
    },
    url: "https://pathways.rmit.edu.au/",
  },

  {
    title: "Sharecover Marketing Site",
    client: "ShareCover",
    story:
      "Front-end component library and template development, coordinating with ShareCover development team, working with their technology stack and release cycles",
    stack: "React, Gatsby, ChakraUI",
    image: {
      src: "project-sharecover.png",
      alt: "Screenshot of Sharecover website homepage",
    },
    url: "https://sharecover.com/",
  },
];
