import React from "react";
import { FaStar } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";
import ifedaApp from '@/public/Mobile design.png';
import ifedaWeb from "@/public/a (1).png";
import gameHubImage from "@/public/game.png";
import GamePic from "@/public/game.png";
import YoutubeImage from "@/public/youtube.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}
export const certificationsData = [
    {
        title: "Oracle Certified Associate, Java SE 8 Programmer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://ifeda.vercel.app",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Oracle"),
            " "
        ),
        description:
            "An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies.",
        icon: React.createElement(FaStar),
        date: "2025 Avril",
    },
    {
        title: "Certified Flutter Developer",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://media.licdn.com/dms/image/v2/D4E2DAQG78q8Ul5iNSA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1708725063995?e=1742760000&v=beta&t=GHUnRk_GhnQU-8i5MX3UqJgia-VhigK6xEu9qlM6xKQ",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "TechLink"),
            " "
        ),
        description:
            "Complete 6 months bootcamp of Flutter developping mobile Full stack applications.",
        icon: React.createElement(FaStar),
        date: "2023 Feb - 2023 September",
    },
]
export const experiencesData = [
    
    {
        title: "Software Engineering Intern",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://ifeda.vercel.app",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Ifeda.tn."),
            " Ariana, Tunisia"
        ),
        description:
            "Developed Full stack Mobile Application using Flutter as Front-End, and FireBase as a Backend, Also i was responsible for System Design and Modelling the necessary Component of the mobile application.",
        icon: React.createElement(FaStar),
        date: "2024 Feb - 2024 December",
    },
    {
        title: "Masters In Computer Science",
        location: "Higher Institue of Informatics | Tunisia",
        description:
            "Graduated with a Masters Degree in Computer Science,Gained foundational knowledge in Machine Learning, AI and modeling.",
        icon: React.createElement(FaStar),
        date: "2023 May - 2025 Juin",
    },
    {
        title: "BS in Computer Science",
        location: "Higher Institue of Informatics | Tunisia",
        description:
            "Graduated with a Bachelor of Computer Science. Gained foundational knowledge in Softwares Engennering.",
        icon: React.createElement(LuGraduationCap),
        date: "2020 Sep - 2023 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "计算机与信息技术硕士",
        "location": "英国圣安德鲁斯大学",
        "description": "在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，预计以一等学位毕业（GPA17/20）。",
        icon: React.createElement(LuGraduationCap),
        "date": "2023年9月 - 2024年12月"
    },
    {
        "title": "前端实习生",
        "location": "蔚来汽车（中国武汉）",
        "description": `参与团队多个平台的迭代开发，独立完成内部告警平台的值班表页面开发。协助开发蔚来第三代场站列表与详情页，集成百度地图 API 实现定位与选点功能。优化任务魔棒页面，新增管理员角色，重构权限管理逻辑，用头像列表展示管理员，并整合飞书 API 实现消息发送。自定义 Element-UI 级联选择组件，解决全选德国 2000+ 城市时浏览器卡死问题，通过懒加载优化显著提升性能。遵循 Agile/Scrum 开发流程，进行两周一迭代，通过 Jira 跟进项目需求，设计技术方案，并与测试、后端、产品及 设计团队密切对接。`,
        "icon": React.createElement(FaStar),
        "date": "2022年8月 - 2022年12月"
    },
    {
        "title": "前端开发",
        "location": "武汉大学大数据研究院",
        "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
        "icon": React.createElement(FaStar),
        "date": "2022年5月 - 2022年8月"
    },
    {
        "title": "数字出版学士",
        "location": "武汉大学",
        "description": "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2019年9月 - 2023年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Arabic Summary Mobile application",
        "title_zh": "数字道德国家协作平台",
        "description":
            "A powerful Mobile Application for people who wants to read books in Arabic language. The app provides a summary of the book in Arabic language. ",
        "desc_zh": "旨在促进苏格兰高校在数字道德领域合作的协作平台。该平台集成用户访谈、工作坊、OAuth登录、最新数字博客RSS feed显示、完备的事件管理系统（包含高级评分与评论功能）以及注重可访问性的响应式设计。",
        "tags": ["Flutter", "FireBase", "Riverpod", ],
        "imageUrl": ifedaApp,
        "projectUrl": "https://ifeda.vercel.app/",
        "demoUrl": "https://ifeda.vercel.app/"
    },
    {
        title: "3D Graphics Game",
        title_zh: '打字测验',
        description:
            "A project done by the End of 3D Computer Graphics Game i took.",
        desc_zh: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
        tags: ["pure C", "3D Computer Graphics","No-openGL"],
        imageUrl: GamePic,
        projectUrl: 'https://github.com/Codefreyy/typing-speed-game',
        demoUrl: 'https://joy-typing-speed.netlify.app/',
    },
    {
        title: "Website for Mobile App",
        title_zh: "社交新闻论坛",
        description:
            `A modern Website to market the application and introduce the user to the idea of summary application.
            `,
        desc_zh: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
        tags: ["Next.js", "TypeScript", "Upstash", "React-Query", "TailwindCSS"],
        imageUrl: ifedaWeb,
         "projectUrl": "https://play.google.com/store/apps/details?id=com.imem.ifeda",
        "demoUrl": "https://play.google.com/store/apps/details?id=com.imem.ifeda"
    },
    {
        title: "Code With Imem",
        title_zh: '世界财富可视化光谱',
        description: "This is my Youtube channel where i put some tutorials and some of my projects in English to help others. I learned a lot from scripting a video to editing and also to choose an prepare thumbnails. Most importantly I improved the way i communicate.",
        desc_zh: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
        tags: ["Flutter", "Tutorials", "Linux","Ubuntu"],
        imageUrl: YoutubeImage,
        projectUrl: 'https://www.youtube.com/@CodeWithImem',
        demoUrl: 'https://www.youtube.com/@CodeWithImem',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "Spring Boot",
    "Flutter",
    "Firebase",
    "SQL",
    "NoSQL",
    "UML",
    "C++",
    "C",
    "Java",
    "Python",
    "Node",
    "Express",
    "Git",
    "Github",
    "Boostrap",
    "MongoDB",
    "UI/UX"
] 
