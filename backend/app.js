const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = 8080 || process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, url } = req;
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
});

const links = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#skills', text: 'skills' },
  { id: 3, href: '#about', text: 'about' },
  { id: 4, href: '#projects', text: 'projects' },
];

const skills = [
  {
    id: 1,
    title: 'HTML&CSS',
    icon: 'FaHtml5',
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: 2,
    title: 'Javascript',
    icon: 'FaJs',
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: 3,
    title: 'React',
    icon: 'FaReact',
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

const projects = [
  {
    id: 1,
    img: 'https://github.com/adilhusain01/Images/blob/main/MyProfile/project1.png?raw=true',
    url: 'https://adilhusain.netlify.app/',
    github: 'https://github.com/adilhusain01/MyPortfolio.gi',
    title: 'Portfolio',
    text: "It's a minimalistic portfolio website I've made with React and Tailwind CSS to feature Information about me and my Projects",
  },
  {
    id: 2,
    img: 'https://github.com/adilhusain01/Images/blob/main/MyProfile/project2.png?raw=true',
    url: 'https://trakker-track.netlify.app/',
    github: 'https://github.com/adilhusain01/tracker.gi',
    title: 'Trakker',
    text: 'Trakker is an all-in-one platform that helps manage your Nutrition, Tasks, and Exercise routine through integrated tracking and progress monitoring.',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1477124508671-45ba8ede458f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
// Route to get links
app.get('/api/links', (req, res) => {
  try {
    res.json(links);
  } catch (error) {
    console.error('Error fetching links:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get skills
app.get('/api/skills', (req, res) => {
  try {
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get projects
app.get('/api/projects', (req, res) => {
  try {
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
