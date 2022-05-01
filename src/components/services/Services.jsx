import React from 'react'
import './services.css'
import avatar1 from "../../assets/block.png"
import avatar2 from "../../assets/block1.png"
import avatar3 from "../../assets/block3.png"
import avatar4 from "../../assets/block4.png"
import avatar5 from "../../assets/ngo.png"
import { NavLink } from 'react-router-dom'


const Services = () => {
  return (
    <section id="services">
       <h2>__________</h2>
      <h2>Join Us</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>ADOPT</h3>
            <NavLink to = "/adoption"><img src={avatar4}></img></NavLink>
          </div>

        </article>
        <article className="service">
          <div className="service__head">
            <h3>FOSTER</h3>
            <NavLink to = "/fostering"><img src={avatar2}></img></NavLink>
          </div>

        </article>
        <article className="service">
          <div className="service__head">
            <h3>VOLUNTEER</h3>
            <NavLink to = "/volunteering"><img src={avatar1}></img></NavLink>
          </div>

        </article>
       
        <article className="service">
          <div className="service__head">
            <h3>NGO</h3>
            <NavLink to = "/ngoregister"><img src={avatar5} style={{height: 100}}></img></NavLink>
          </div>

        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>DONATE</h3>
            <NavLink to = "/donation"><img src={avatar3}></img></NavLink>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Services