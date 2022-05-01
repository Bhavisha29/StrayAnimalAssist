import React from 'react'
import './about.css'
import ME from '../../assets/d2.jpg'
import Img1 from '../../assets/1.jpeg'
import Img2 from '../../assets/2.jpeg'
import Img3 from '../../assets/3.jpeg'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h2>__________</h2>
      <center><h1>About Us</h1></center>
      <h3>___________</h3>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <img src={Img1}></img>
            </article>
            <article className="about__card">
            <img src={Img2}></img>
            </article>
            <article className="about__card">
            <img src={Img3}></img>
            </article>

        </div>
        <i><b><p>
        We see a lot of strays roaming about in the streets of India and many of them are not treated well on top of not getting food on a regular basis. 
 In addition to that, they risk spreading various diseases. We here at Stray Animal Assist detect the
  strays on the streets through CCTV cameras and reporting it to the nearby NGOs so that they can take necessary actions of either putting them for fostering , adopting or nurturing. Also all the pet lovers can Adopt and Foster these lovely beings and join our family.
        </p></b></i>
      </div>
      </div>
    </section>
  )
}

export default About