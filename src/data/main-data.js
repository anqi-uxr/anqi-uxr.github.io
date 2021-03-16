// Social Icons
import linkedinIcon from "../images/linkedin.svg"
import emailIcon from "../images/email.svg"

import hivetecThumbnail from "../images/hivetec-thumbnail.jpg"

export default {
  //   Header Details ---------------------
  name: "Anqi",
  headerParagraph: [
    "Hello👋, I'm a UX researcher with a background in Human Factors and Psychology and a heart for creating social impact.",
    "I care deeply about making meaningful social impacts through my research. My research benefits beyond the scope of a product. The impact of my research reaches into promoting species diversity and sustainability through caring about honeybees, raising open science awareness, and equalizing student access to educational resources.",
    "Scroll down to see my work!",
  ],
  contactEmail: "anqi.li.uxr@gmail.com",
  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1,
      title: "IoT for Agriculture: Remote Beehive Monitoring Tech",
      para:
        "Foundational Research for a Student Startup",
      imageSrc: hivetecThumbnail,
      url: "hivetec",
    },
  ],
  // End Work Section -----------------------

  //   Contact Section --------------
  social: [
    // Email
    {
      img: emailIcon,
      url: "mailto:anqi.li.uxr@gmail.com",
    },
    // LinkedIn
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/anqi-li-uxr/",
    },
  ],
  // End Contact Section ---------------
}
