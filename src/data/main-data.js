// Social Icons
import linkedinIcon from "../images/linkedin.svg"
import emailIcon from "../images/email.svg"

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
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
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
