import cuongImage from "../assets/Team/cuong.jpg";
import tungImage from "../assets/Team/tung.jpg";
import minhImage from "../assets/Team/minh.jpg";
import Activity from "../assets/Gymmifyfigma/Activity.jpg";
import Analytics from "../assets/Gymmifyfigma/Analytics.jpg";
import Home from "../assets/Gymmifyfigma/Home.jpg";
import Logbook from "../assets/Gymmifyfigma/Logbook.jpg";
import Logbook1 from "../assets/Gymmifyfigma/Logbook1.jpg";
import Profile from "../assets/Gymmifyfigma/Profile.jpg";
import Workout from "../assets/Gymmifyfigma/Workout.jpg";
import Leaderboard from "../assets/Gymmifyfigma/Leaderboard.png";
import SmartWatch from "../assets/smartW.jpg";
import SmartWatch2 from "../assets/smartwatch.jpg";
import TV from "../assets/smartTV.jpg";
import TV1 from "../assets/smartTV2.jpg";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "idea",
    title: "Project Idea",
  },
  {
    id: "process",
    title: "Design Process",
  },
  {
    id: "need",
    title: "NeedFinding",
  },
  {
    id: "prototype",
    title: "Prototype",
  },
];

export const ImgLogo = logo;
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const teamMembers = [
  {
    name: "Dinh Viet Cuong",
    studentID: "20213566",
    role: "Fitness Leader",
    description: "Cuong is a fitness enthusiast who specializes in creating user-friendly applications for fitness enthusiasts.",
    image: cuongImage,
  },
  {
    name: "Chu Quang Tung",
    studentID: "20210603",
    role: "Programming Guru",
    description: "Tung specializes in creating user-friendly applications for fitness enthusiasts.",
    image: tungImage,
  },
  {
    name: "Dao Duc Nhat Minh",
    studentID: "20213594",
    role: "Design Expert",
    description: "Minh is a design expert who specializes in creating user-friendly applications for fitness enthusiasts.",
    image: minhImage,
  }
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The demo of this fitness app is fantastic! The user-friendly design and intuitive navigation make it stand out from other apps.",
    name: "Nguyen Dinh Thuan",
    designation: "Fitness Enthusiast",
    company: "HUST",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I love how the app provides clear progress tracking and motivational features. It's exactly what I needed to stay consistent with my workouts!",
    name: "Bui Tien Dung",
    designation: "Personal Trainer",
    company: "HUST",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The demo showcases an excellent balance between simplicity and functionality. I can't wait to use the full version to achieve my fitness goals!",
    name: "Nguyen Thai Son",
    designation: "Beginner Lifter",
    company: "HUST",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const lowPrototypes = [
  {
    name: "Home Page",
    description:
      "The home page serves as the central hub of the workout app, providing users with an overview of their fitness journey. It displays featured workout routines, quick access to start or resume a workout, and a summary of recent activities. Users can view personalized recommendations based on their fitness goals, favorite exercises, or current progress.",
    image: Home,
  },
  {
    name: "Logbook",
    description:
      "The logbook page acts as a detailed activity tracker, where users can log and review their workout history. It shows completed workouts, duration, exercises performed, repetitions, and sets. Users can add notes on how they felt during each session or make adjustments to future routines.",
    image: Logbook,
  },
  {
    name: "Analytics Page",
    description:
      "The analytics page provides users with in-depth insights into their fitness performance over time. Visualized through graphs and charts, users can track metrics like calories burned, workout duration, exercise frequency, and strength progression",
    image: Analytics,
  },
  {
    name: "Settings/Profile Page",
    description:
      "The settings/personal page allows users to customize their fitness profile, preferences, and workout settings. Gamification elements like badges, achievements, and leaderboards are also displayed to encourage user engagement and retention.",
    image: Profile,
  },
  {
    name: "Leaderboard/Social",
    description: 
    "The leaderboard page displays the top users based on their workout frequency, duration, and achievements. Users can compete with friends, join challenges, and share their progress on social media platforms. This feature aims to foster a sense of community and friendly competition among users.",
    image: Leaderboard,
  },
  {
    name: "Workout Page",
    description:
    "The workout page is where users can access a library of pre-recorded workout routines, categorized by fitness level, duration, and muscle group. Users can filter workouts based on their preferences, save their favorite routines, and track their progress over time. The workout page also includes a timer, exercise instructions, and video demonstrations to guide users through each session.",
    image: Workout,
  },
];
export const midPrototypes = [
  {
    name: "Concept 1: Wearable Device - Smartwatch",
    description:
      "The smartwatch concept integrates fitness tracking features with the workout app, allowing users to monitor their heart rate, calories burned, and workout duration in real-time. The smartwatch can sync with the app to provide personalized workout recommendations, track progress, and send notifications for upcoming workouts.",
    image: SmartWatch,
  },
  {
    name: "Logbook",
    description:
      "The logbook page acts as a detailed activity tracker, where users can log and review their workout history. It shows completed workouts, duration, exercises performed, repetitions, and sets. Users can add notes on how they felt during each session or make adjustments to future routines.",
    image: Logbook,
  },
  {
    name: "Analytics Page",
    description:
      "The analytics page provides users with in-depth insights into their fitness performance over time. Visualized through graphs and charts, users can track metrics like calories burned, workout duration, exercise frequency, and strength progression",
    image: Analytics,
  },
  {
    name: "Settings/Profile Page",
    description:
      "The settings/personal page allows users to customize their fitness profile, preferences, and workout settings. Gamification elements like badges, achievements, and leaderboards are also displayed to encourage user engagement and retention.",
    image: Profile,
  },
];
export { services, technologies, experiences, testimonials, projects };
