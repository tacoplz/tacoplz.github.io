// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "En Luna",
  middleName: "",
  lastName: "",
  message: " Civil and passionate about engineering. ",
  icons: [
    /*{
      image: "fa-github",
      url: "https://github.com/tacoplz",
    }, */
    {
      image: "fas fa-envelope",
      url: "mailto: cs106607@gmail.com",
    },
    {
      image: "fas fa-phone",
      url: "tel: +1 (330) 340-1673",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chris-stephan-pe-0ba702275/",
    },
    /*{
      image: "fa-facebook",
      url: "https://www.facebook.com/chris.stephan.1428",
    },*/
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/tacoplz/",
    },
    /*{
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    }, */
  ],
  scheduleEventUrl: "https://calendar.google.com/calendar/u/0/r/eventedit?add=cs106607@gmail.com",
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

// to add new objects ensure that you are adding the varible to app.js and calling it in aboutme.jsx
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ChrisIsrael.jpg"),
  imageSize: 375,
  message:
    "My name is Chris. I like engineering.",
  resume: "https://drive.google.com/file/d/1c9bzfmCowXKO0UGITxOGcNrjmbCu_b6D/view?usp=sharing",
  //scheduleEventUrl: "https://calendar.google.com/calendar/u/0/r/eventedit?add=cs106607@gmail.com",
  //The line below embeds my Google Calendar. 
  // calendarUrl: "https://calendar.google.com/calendar/embed?src=cs106607%40gmail.com&ctz=America%2FDenver",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "tacoplz", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ChrisIsrael.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ChrisIsrael.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Construction Design Plans", value: 75 },
    { name: "Construction Administration", value: 95 },
    { name: "Grant Administration", value: 80 },
    { name: "Construction Management", value: 85 },
    { name: "Local Agency Contracting", value: 90 },
    { name: "Design Calculatons", value: 75 },
    { name: "Workflows and Process Design", value: 75 },
    { name: "Specification and Design Standard Writing", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for small-dollar (<$25,000.00) contracts for construction administration, design, and agency specifications or contract writing opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "cs106607@gmail.com",
};

const experiences = {
  show: true,
  heading: "Employment and Education",
  data: [
    {
      role: 'Senior Engineer - City of Aurora',// Here Add Company Name
      companylogo: require('../assets/img/aurora-logo.png'),
      date: 'September 2015 – Present',
    },
    {
      role: 'Civil Engineer II / Surveyor',
      companylogo: require('../assets/img/mannik.png'),
      date: 'May 2014 – September 2015',
    },
    {
      role: 'Master of Science in Civil Engineering',
      companylogo: require('../assets/img/ou logo.png'),
      date: 'May 2012 – May 2014',
      
    },
    {
      role: 'Bachelor of Science in Civil Engineering',
      companylogo: require('../assets/img/ou logo.png'),
      date: 'September 2008 – May 2012',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
