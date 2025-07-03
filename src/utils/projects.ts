export function getProjects() {
    const projectsInterestOrder = [9, 3, 2, 11, 1, 7, 10, 8, 6, 12, 5, 4];

    const projects = [
        {
            id: 1,
            name: "Personal OpenGL Project",
            company: "personal",
            description:
                "Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",
            videoURL:
                "https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",
            order: {
                date: 1,
                interest: 0,
            },
            skills: ["OpenGL", "C++"],
        },
        {
            id: 2, 
            name: "University 4th-year Project",
            company: "university",
            description:
                "I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",
            videoURL:
                "https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",
            order: {
                date: 2,
                interest: 0,
            },
            skills: ["WebGL", "Laravel"],
        },
        {
            id: 3,
            name: "University 5th-year Project",
            company: "university",
            description:
                "We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",
            videoURL:
                "https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",
            order: {
                date: 3,
                interest: 0,
            },
            skills: ["Three.js", "Laravel"],
        },
        {
            id: 4,
            name: "Other Projects / WordPress",
            company: "aratech",
            description:
                "Worked on various web development tasks at Aratech, including multiple WordPress projects. Contributed to front-end and back-end functionality across different sites, with additional projects beyond what is showcased.",
            videoURL:
                "https://www.youtube.com/embed/UT-_oq7lSNw?si=tXVKSkXHqYvY32WR",
            order: {
                date: 4,
                interest: 0,
            },
            skills: ["WordPress"],
        },
        {
            id: 5,
            name: "IDB",
            company: "aratech",
            description:
                "Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",
            videoURL:
                "https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",
            order: {
                date: 5,
                interest: 0,
            },
            skills: ["Laravel", "Blade", "Tailwind"],
        },
        {
            id: 6,
            name: "E-buy",
            company: "aratech",
            description:
                "This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",
            videoURL:
                "https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",
            order: {
                date: 6,
                interest: 0,
            },
            skills: ["Laravel", "Blade", "Tailwind"],
        },
        {
            id: 7,
            name: "Qahwah House",
            company: "DivCodes",
            description:
                "Led the front-end development of an e-commerce website using React and Next.js, delivering an optimized and interactive user experience.",
            videoURL:
                "https://www.youtube.com/embed/FTqieNtWHTU?si=nGafYM-swda3Rfg4",
            order: {
                date: 7,
                interest: 0,
            },
            skills: ["React", "Next.js", "Tailwind"],
        },
        {
            id: 8,
            name: "DIVPOS",
            company: "DivCodes",
            description:
                "Developed a customizable e-commerce dashboard using React, designed with modular components to allow easy customization by the development team to fit customer-specific requirements.",
            videoURL:
                "https://www.youtube.com/embed/HEqpv8OhjkQ?si=IdFtkMLQO418Ye4H",
            order: {
                date: 8,
                interest: 0,
            },
            skills: ["React", "Next.js", "Tailwind"],
        },
        {
            id: 9,
            name: "Sunglasses Try On",
            company: "Eyes 360",
            description:
                "Adjusted a 3D sunglasses model on user's face using Google Face Landmark Detection and Babylon.js for precise positioning and a seamless user experience.",
            videoURL:
                "https://www.youtube.com/embed/u7HfBL37Ytg?si=TUSp1ZeqrZEIJXBc",
            order: {
                date: 9,
                interest: 0,
            },
            skills: ["WebGL", "Babylon.js", "Svelte"],
        },
        {
            id: 10,
            name: "EuNet",
            company: "Stark Technologies",
            description:
                "A web hosting website available in two languages. It features an AI-powered chatbot for 24/7 assistance. The site is built using React and Next.js. It includes visually appealing reusable components that present information clearly with an attractive design, along with well-designed forms for user onboarding.",
            videoURL:
                "https://www.youtube.com/embed/nzy92nlbBI4?si=UsvvuLTts9lZfaAE",
            order: {
                date: 10,
                interest: 0,
            },
            skills: ["React", "Next.js", "Tailwind"],
        },
        {
            id: 11,
            name: "Patitas",
            company: "Personal / test application",
            description:
                "Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before. With the help of online tutorials and AI tools, I was able to quickly learn and implement new concepts, demonstrating my ability to adapt and learn fastly. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/repo-prueba'>HERE</a>.",
            videoURL:
                "https://www.youtube.com/embed/3_p-boncOEs?si=EeLnvLWhSDEZys61",
            order: {
                date: 11,
                interest: 0,
            },
            skills: ["Angular", "Spring Boot", "Tailwind"],
        },
        {
            id: 12,
            name: "Articalization",
            company: "Personal / test application",
            description: "In this project, I built a client-side news aggregation application that gathers articles from various external sources using public APIs. Users can filter the news by date, category, search query, and source, with paginated results for easy navigation. They can also customize their experience by adding preferred sources, authors, and categories, tailoring the news feed to their personal interests. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/articalization'>HERE</a>."
            ,videoURL:
                "https://www.youtube.com/embed/9V-b1aAr0dQ?si=cw-vIE_bUP9ZGdez",
            order: {
                date: 12,
                interest: 0,
            },
            skills: ["React", "Redux", "Tailwind"],
        },
    ];

    projectsInterestOrder.forEach((id, index) => {
        const project = projects.find((p) => p.id === id);
        if (project) {
            project.order.interest = index + 1;
        }
    });

    const projectsSkills = new Set<string>();

    projects.forEach((project) => {
        project.skills.forEach((skill) => {
            projectsSkills.add(skill);
        });
    });

    return { projects, projectsSkills }
}