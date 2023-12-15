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
  challenges: string | null;
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
    challenges:
      "An iterative project, that underwent a redesign every 18 months for 4 years - pivoting designs and structure. The client (my boss) had a tendency to bring me new designs everytime and the overhead of single use custom components was outrageous. So I pushed hard for a CMS and set of reusable content components to be included to help create a process and cohesion in the design as well as reduce the design and dev effort ongoing. Contentful's changing base tier limits meant we had to get clever with our content types and be clear in establishing rules and limitations with the designers. Animation and interactive elements were a key feature and meant that as developers we navigated performance-heavy design concepts, working with the design lead (the director and founder) to define a more efficent but just as amazing experience.",
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
    challenges:
      "Client kept stopping and starting and in order to maintain momentum we were asked to build a skeleton protoype based on early requirements. We went through numerous context sessions and workshops to establish the design requirements and when I provided a spreadsheet with the data model clearly defined, this got signed off. But when the data was provided to me by the client it didn't fit the model, and there was crucial differences which meant changes to the tool logic and design. The client's legal team took a big red pen to the prototype. These things meant a significant change to the user journey and the user experience suffered a great deal as a result but the client was still very happy to get something live as this was a pilot program.",
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
    challenges:
      "An incredibly tight budget, the flexibility of the site is limited. I've seen some amazing configurations of Sanity that, with an upcoming rebuild scheduled, I was gunning to roll out to it.",
  },
  {
    title: "Pathways Finder Tool",
    client: "RMIT University",
    story:
      "The tool delivers a wealth of information to students' through an engrossing interactive experience, which influences many users to consider RMIT as their ‘educator of choice’",
    stack: "React, Prisma, GraphQL, Styled Components",
    image: {
      src: "project-pathways.png",
      alt: "Pathways Finder application screenshot",
    },
    url: "https://pathways.rmit.edu.au/",
    challenges:
      "The orginal budget didnt extend to a user friendly data update feature so data updates were done via a manual process by us and the data was always a hot mess and there was always a lot of back and forth. Built up a relationship with the client and staff handling on their side to troubleshoot each issue, setting aside a full day for the update, responding quickly, and providing detailed error messages to help the client find the issue in their spreadsheet. Last year, after bringing concerns about the time and money being spent on this process, I lead the initial stages of a project to build a better way. I ran a couple context sessions with the client about their needs and how they gather their data, and then I mentored a mid-level developer to build an amazing backend application for consuming, validating, and publishing data updates. His solution blew it out of the park and this has empowered the client to completely own the data update process.",
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
    challenges:
      "The initial intent was that we would handover the front-end component and the internal developers would integrate them into their DatoCMS website templates. But again the timeline got crunch on their side and they realised they wouldn’t have time to consume and integrate, while also building out the new flows for the quote platform. During the situate phase of the project there had been a context gathering session and during that we had asked about the regularity of content updates on the site and discovered that it was pretty rare, so internally I suggested we could just build the site statically in the short term. We approached the client and their internal developers with an offer that if they could get us the content for launch, we would use it to build a static generated marketing site with the new components for them to go live with.",
  },
];
