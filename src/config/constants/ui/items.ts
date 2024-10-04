import { btnVariant } from "@app/components/ui/button/button";
import { IMAGES } from "../images";

export interface INavLinks {
    id: string;
    title: string;
}
const navLinks: INavLinks[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
export interface ITech {
    [key: string]: {
        name: string;
        icon: string;
    }[];
}

const technologies: ITech = {
    "Programming Languages": [
        {
            name: "HTML",
            icon: IMAGES.tech.html,
        },
        {
            name: "CSS",
            icon: IMAGES.tech.css,
        },
        {
            name: "JavaScript",
            icon: IMAGES.tech.javascript,
        },
        {
            name: "TypeScript",
            icon: IMAGES.tech.typescript,
        },
    ],
    "Frontend Technologies": [
        {
            name: "React.js",
            icon: IMAGES.tech.reactjs,
        },
        {
            name: "Next.js",
            icon: IMAGES.tech.nextjs,
        },
        {
            name: "React-native",
            icon: IMAGES.tech.reactNative,
        },
        {
            name: "Redux Toolkit",
            icon: IMAGES.tech.redux,
        },
        {
            name: "Tailwind CSS",
            icon: IMAGES.tech.tailwind,
        },
        {
            name: "Bootstrap",
            icon: IMAGES.tech.bootstrap,
        },
        {
            name: "Scss",
            icon: IMAGES.tech.sass,
        },
    ],
    "Backend Technologies": [
        {
            name: "Express.js",
            icon: IMAGES.tech.express,
        },
        {
            name: "Node.js",
            icon: IMAGES.tech.nodejs,
        },
        {
            name: "MongoDB",
            icon: IMAGES.tech.mongodb,
        },
        {
            name: "Mongoose",
            icon: IMAGES.tech.mongoose,
        },
        {
            name: "Prisma",
            icon: IMAGES.tech.prisma,
        },
        {
            name: "PostgreSql",
            icon: IMAGES.tech.postgres,
        },
        {
            name: "MySql",
            icon: IMAGES.tech.mysql,
        },
        {
            name: "Sequelize",
            icon: IMAGES.tech.sequelize,
        },
        {
            name: "TypeORM",
            icon: IMAGES.tech.typeorm,
        },
    ],
    "APIs & VCS Tools": [
        {
            name: "Rest API",
            icon: IMAGES.tech.rest,
        },
        {
            name: "GraphQL",
            icon: IMAGES.tech.gql,
        },
        {
            name: "Axios",
            icon: IMAGES.tech.axios,
        },
        {
            name: "Socket.io",
            icon: IMAGES.tech.socket,
        },
        {
            name: "Git",
            icon: IMAGES.tech.git,
        },
        {
            name: "Github",
            icon: IMAGES.tech.github,
        },
        {
            name: "Gitlab",
            icon: IMAGES.tech.gitlab,
        },
    ],
};

export interface ISkill {
    name: string;
    color: string;
}
export interface IPojects {
    name: string;
    description: string;
    tags: ISkill[];
    image: string;
    source_code_link?: string;
}

const projects: IPojects[] = [
    {
        name: "Portfolio",
        description:
            "A web-based platform that effectively demonstrates my skills and experience, featuring brief descriptions with links to code repositories and live demos, showcasing my problem-solving abilities and project management expertise.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "green-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "purple-text-gradient",
            },
            {
                name: "i18n",
                color: "pink-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "EmailJS",
                color: "red-text-gradient",
            },
        ],
        image: IMAGES.experience.portfolio,
    },
    {
        name: "SIRH",
        description:
            "A web-based platform for managing employee documents, vacations, salaries, and more, streamlining HR and workforce management tasks in one place. It includes real-time tracking and communication tools to enhance team productivity.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "purple-text-gradient",
            },
            {
                name: "GraphQL",
                color: "red-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "yellow-text-gradient",
            },
            {
                name: "Sequelize",
                color: "green-text-gradient",
            },
        ],
        image: IMAGES.experience.sirh,
    },
    {
        name: "PROXECO",
        description:
            "A mobile app that links sellers, stores, users, and delivery services, enabling product browsing, purchasing, and efficient order fulfillment with real-time tracking and seamless communication between all parties.",
        tags: [
            {
                name: "React-Native",
                color: "yellow-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "orange-text-gradient",
            },
            {
                name: "REST API",
                color: "red-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "purple-text-gradient",
            },
            {
                name: "TypeORM",
                color: "pink-text-gradient",
            },
            {
                name: "Socket.io",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "teal-text-gradient",
            },
        ],
        image: IMAGES.experience.proxeco,
    },
    {
        name: "JOLT",
        description:
            "A web app that allows companies to create employee profiles and apply for job postings created by enterprises, streamlining the hiring process and facilitating connections between employers and potential hires in an efficient manner.",
        tags: [
            {
                name: "NextJS",
                color: "purple-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "blue-text-gradient",
            },
            {
                name: "REST API",
                color: "teal-text-gradient",
            },
            {
                name: "Tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "yellow-text-gradient",
            },
            {
                name: "Prisma",
                color: "orange-text-gradient",
            },
            {
                name: "Redux",
                color: "red-text-gradient",
            },
        ],
        image: IMAGES.experience.jolt,
    },
    {
        name: "Slodka Szkola",
        description:
            "A web app that sells cakes and offers courses on how to make them, providing users with delicious treats and the skills to create their own confections. It features secure payments and engaging tutorials for a delightful baking experience.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "green-text-gradient",
            },
            {
                name: "REST API",
                color: "yellow-text-gradient",
            },
            {
                name: "Sass",
                color: "pink-text-gradient",
            },
            {
                name: "MongoDB",
                color: "orange-text-gradient",
            },
            {
                name: "Mongoose",
                color: "red-text-gradient",
            },
            {
                name: "TypeScript",
                color: "teal-text-gradient",
            },
        ],
        image: IMAGES.experience.soldka,
    },
    {
        name: "Task Manager",
        description:
            "A task manager app that notifies users about their event dates, helping them stay organized and on schedule. It features intuitive task tracking, reminders, and a user-friendly interface for effective time management.",
        tags: [
            {
                name: "NextJS",
                color: "green-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "blue-text-gradient",
            },
            {
                name: "REST API",
                color: "pink-text-gradient",
            },
            {
                name: "Sass",
                color: "red-text-gradient",
            },
            {
                name: "MongoDB",
                color: "teal-text-gradient",
            },
            {
                name: "Mongoose",
                color: "yellow-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
        ],
        image: IMAGES.experience.toDo,
        source_code_link: "https://github.com/RafikElRahmi/vini-to-do-front",
    },
];

export interface IExperience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}
//todo
const experiences: IExperience[] = [
    {
        title: "FullStack JS Developer",
        company_name: "EyeOtech",
        icon: IMAGES.experience.EyeOtech,
        iconBg: "#DECAFB",
        date: "March 2024 – present",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            // "Led front-end and back-end development for web and mobile apps, ensuring high performance and security.",
            // "Used Tailwind CSS to enhance design eﬃciency and consistency, cutting down design time.",
            // "Mentored junior developers and conducted code reviews to maintain high quality.",
            // "Optimized application performance through code refactoring and eﬃcient algorithms.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Mentoring junior developers and conducting code reviews.",
            "Optimized application performance through code refactoring.",
        ],
    },
    {
        title: "FullStack JS Developer",
        company_name: "MajCake",
        icon: IMAGES.experience.MajCake,
        iconBg: "#383E56",
        date: "July 2023 – January 2024",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            // "Collaborated remotely with a cross-functional team based in Poland, eﬀectively communicating in English to facilitate seamless development cycles and project management.",
            // "Enhanced expertise in the MERN stack through dedicated after-hours work with junior developers.",
            "Collaborating with teams to drive product quality and innovation.",
            "Ensuring cross-browser compatibility across various platforms.",
            "Engaging in code reviews to foster a culture of continuous improvement.",
            "Collaborated remotely with a team in Poland to facilitate seamless project management.",
            "Enhanced expertise in the MERN stack through collaboration with junior developers.",
        ],
    },
];
export interface IService {
    title: string;
    icon: string;
}
const services: IService[] = [
    {
        title: "Reactjs Developer",
        icon: IMAGES.services.web,
    },
    {
        title: "React-Native Developer",
        icon: IMAGES.services.mobile,
    },
    {
        title: "Nodejs Developer",
        icon: IMAGES.services.backend,
    },
    {
        title: "FullStack JS Developer",
        icon: IMAGES.services.fullStack,
    },
];
export { btnVariant, navLinks, technologies, projects, experiences, services };
