import React from "react";
import "./Home.css";
import homeimg from "../../Assets/homehero.png";
import quote from "../../Assets/quote.png";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import skillsgroup from "../../Assets/Group 36.png";
import aboutimg from "../../Assets/Image.png";
import linkedin from '../../Assets/mdi--linkedin.svg'
import gmail from '../../Assets/mdi--gmail.svg'
const Home = () => {
  const projectBoxes = [
    {
      img: project1,
      techStack: "React,Gsap",
      title: "Ecuity Exousia",
      subTitle: "IT Agency website",
      link: "https://www.ecuityexousia.in/",
    },
    {
      img: project2,
      techStack: "React,Redux,React-Router",
      title: "My TuitionCenter",
      subTitle: "Tuition Platform for tutors & students",
      link: "http://139.144.4.104:3000/",
    },
  ];
  return (
    <div className="homeContainer">
      <div className="heroContainer" id="home">
        <div className="homeHero">
          <div className="homeIntro">
            <h3>
              Sanath is a <span>web designer</span> and{" "}
              <span>front-end developer</span>
            </h3>
            <h4>
              He crafts responsive websites where technologies meet creativity
            </h4>
            <button className="homecontact">Contact me!!</button>
          </div>
          <div className="homeImg">
            <img src={homeimg} alt="" />
            <h3>Currently Working On Portfolio</h3>
          </div>
        </div>
        <div className="homeQuote">
          <img src={quote} alt="" />
        </div>
      </div>
      <div className="homeProjectSection" id="works">
        <div className="homeProjectHeading">
          <div className="lineheading">
            <h3>
              <span>#</span>projects
            </h3>
            <div className="line"></div>
          </div>
          <button>View all~~{">"}</button>
        </div>
        <div className="homeProjectBoxes">
          {projectBoxes.map((box, index) => (
            <div key={index} className="homeprojectbox">
              <img src={box.img} alt={box.title} />
              <h4>{box.techStack}</h4>
              <div className="homeprojectheading">
                <h3 className="homeProjectTitle">{box.title}</h3>
                <p>{box.subTitle}</p>
              </div>
              <div className="homeProjectLink">
                <a href={box.link} target="_blank">
                  Link {"<"}~{">"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homeSkillsSection" id="skills">
        <div className="homeSkillsHeading">
          <h3>
            <span>#</span>skills
          </h3>
          <div className="skillsline"></div>
        </div>
        <div className="homeskillsContainer">
          <div className="homeskillsimage">
            <img src={skillsgroup} alt="" />
          </div>
          <div className="homeskillsgrid">
            <div className="homeskill skill1">
              <h2>Languages</h2>
              <p>HTML,JAVASCRIPT</p>
            </div>
            <div className="homeskill skill2">
              <h2>Frameworks/Libraries</h2>
              <p>React,GSAP,Bootstrap</p>
              <p style={{ margin: "0 5px" }}>tailwind</p>
            </div>
            <div className="homeskill skill3">
              <h2>Tools</h2>
              <p>Git,npm,VS code</p>
            </div>
            <div className="homeskill skill4">
              <h2>Other Skills</h2>
              <p>
                Responsive Design,Cross-Browser Compatibility..,Version Control
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homeAboutme" id="about">
        <div className="homeAboutmeHeading">
          <h3>
            <span>#</span>about-me
          </h3>
          <div className="skillsline"></div>
        </div>
        <div className="homeAboutmeContainer">
          <div className="homeAboutmeContent">
            <p>Hello, I'm Sanath</p>
            <p>
              I’m a self-taught front-end developer based in Hyderabad, India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
          <div className="homeAboutmeImage">
            <img src={aboutimg} alt="" />
          </div>
        </div>
      </div>
      <div className="homeContactsection" id="contact">
        <div className="homeContactHeading">
          <h3>
            <span>#</span>Contact-me
          </h3>
          <div className="skillsline"></div>
        </div>
        <div className="homeContactContainer">
          <div className="HomeContactContent">
            <p>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="homeContactLinks">
            <h2>message me here</h2>
            <a href="https://linkedin.com/in/sanath-reddy-74931223b" target="_blank"><img src={linkedin} alt="linkedin" />Linkedln</a>
            <a href="mailto:sanathreddyg42@gmail.com" target="_blank"><img src={gmail} alt="" />sanathreddyg42@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
