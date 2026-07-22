export type Project = {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  context: string;
  overview: string[];
  highlights: string[];
  tools: string[];
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Paytrail",
    subtitle: "Research-based decision making",
    description:
      "Finland's largest digital payment provider had no structured way to understand user behavior. I introduced Hotjar analytics (heatmaps, session recordings, user flows) transforming gut feelings into evidence-based design decisions. Now Paytrail knows how users really use their platform and which features they should focus their development on.",
    tags: ["UX Research", "Analytics", "Project Management", "Stakeholder collaboration"],
    role: "Lead UX Researcher, Project Manager",
    context:
      "Paytrail is Finland's leading online payment service provider, serving tens of thousands of businesses. Paytrail had successfully unified two payment platforms into a single merchant service. As the platform evolved, the team wanted to validate how merchants actually used the product instead of relying on assumptions. The project focused on user research to strengthen product decisions and make sure that development was focusing on the most important features.",
    overview: [
      "Through research, product usage patterns were validated while uncovering new user behaviors and opportunities for improvement. Working closely with stakeholders, the project delivered practical, evidence-based insights that supported product strategy, feature prioritization, and an improved user experience.",
    ],
    highlights: [
      "Conducted UX research to validate product usage and user behavior",
      "Configured heatmaps, session recordings, and funnel analysis for core user journeys",
      "Collaborated closely with product owners and stakeholders throughout the project",
      "Translated behavioral data into concrete UI improvements and backlog priorities",
    ],
    tools: ["Hotjar", "FigJam", "Notion", "M365"],
  },
  {
    num: "02",
    title: "Gebwell Smart Hub",
    subtitle: "From engineer-friendly to user-friendly",
    description:
      "A Finnish energy tech company wanted to take their software from engineer-friendly to user-friendly. The project focused on redesigning Gebwell Smart Hub user experience and visual interface to make complex energy data easier to understand while improving usability across desktop and mobile devices. The result is a modern, intuitive solution that helps users manage their heating systems more efficiently and confidently.",
    tags: ["UX/UI Design","Project management", "Dev Collaboration", "Information Architecture"],
    role: "UI/UX Designer, Project Manager",
    context:
      "Gebwell develops smart heating systems for residential and commercial buildings. As Gebwell's digital services evolved, the company wanted to modernize the Smart Hub platform to provide customers with a more intuitive way to monitor and control their heating systems. The goal was to improve usability, simplify complex information, and create a seamless experience across desktop and mobile devices while supporting Gebwell's growing digital ecosystem.",
    overview: [
      "The project focused on redesigning the Gebwell Smart Hub user experience and UI. Working closely with stakeholders and developers, we rethought key user journeys, clarified the information architecture, and introduced a cleaner, more consistent design. The redesigned interface makes it easier for users to access real-time system information, manage heating settings, and monitor energy performance with greater confidence. Particular attention was given to accessibility, responsive design, and creating an experience that balances technical functionality with ease of use."
    ],
    highlights: [
      "Led the UX and UI design for the Smart Hub redesign",
      "Designed intuitive user flows for monitoring and controlling heating systems",
      "Focused on making complex data easier to understand",
      "Created high-fidelity UI designs with a modern, consistent visual language",
      "Iterated on designs based on feedback to ensure usability and alignment with business goals"
    ],
    tools: ["Figma", "SanaAI", "Notion", "M365"],
  },
  {
    num: "03",
    title: "Thesis on Design Systems",
    subtitle: "Conducting comprehensive research",
    description:
      "For my M.Sc. thesis I researched design systems and their implementation. In addition to a literature review, I surveyed 24 Finnish organizations and conducted 7 deep interviews to uncover how Finnish companies have built design systems, and what issues have they faced in the process. The finding? Communication is both the biggest driver and the biggest blocker of design system success.",
    tags: ["Research", "Design Systems", "Academic", "Interviews"],
    role: "Researcher & Author",
    context:
      "Design systems are widely adopted in global product companies, but less is known about how Finnish organizations approach building and maintaining them. In my research I wanted to explore not only how Design Systems are built but also what are the factors that make them success or fail. The reasearch can be used as a guide when planning the development process of a Design System: what to do and what not to do.",
    overview: [
      "The reasearch investigated design system maturity across Finnish companies through a mixed-methods study: a survey of 24 organizations and seven in-depth expert interviews spanning organizations and teams of different sizes and fields. The research mapped development processes, team models, and recurring pain points. The central finding was that communication quality is the most important factor in the development process of a Design System. ",
    ],
    highlights: [
      "Designed and distributed a survey reaching 24 Finnish organizations",
      "Conducted seven semi-structured interviews with professionals of different fields",
      "Processed qualitative and quantitative data into a comprehensive research",
      "Identified communication as both the primary enabler and the most common blocker of adoption",
    ],
    tools: ["LaTeX", "Andor", "Google Scholar", "M365"],
  },

  {
    num: "04",
    title: "Gebwell heating systems",
    subtitle: "Design in a physical product",
    description:
      "A Finnish energy company needed a completely new software for managing and onboarding heating systems through a built-in touchpad. I worked closely with the client defining use cases for a wide variety of users, as well as designed the UI for the software. The result was a modern and intuitive software that enables onboarding and everyday use of the heating systems.",
    tags: ["Product Design", "UI/UX Design", "Dev Collaboration", "User flows"],
    role: "Product Designer, Project Manager",
    context:
      "Gebwell develops smart heating solutions for residential and commercial buildings. The project aimed to simplify the installation and day-to-day management of heating systems through a single, intuitive software platform. Used by mechanics during system setup via built-in touchscreen interfaces and later by building managers to monitor performance, adjust settings, and generate reports, the software needed to support users with varying levels of technical expertise. The goal was to create a modern, user-friendly experience that makes complex tasks efficient and accessible throughout the system's lifecycle.",
    overview: [
      "I joined as a freelance designer at the client's request, leading the redesign. Working closely together with the development team, I iterated on UI designs balancing complex device data with clear hierarchy, readable dashboards, and consistent interaction patterns.",
    ],
    highlights: [
      "Designed the software from wireframes to high-fidelity UI",
      "Ensured consistent design language throughout the whole software",
      "Worked closely with the client designing the software with quick iteration-cycles",
      "Defined user flows and information architecture",
    ],
    tools: ["Figma", "Figma Make", "SanaAI", "M365"],
  }
];
