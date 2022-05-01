import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/c1.jpeg'
import IMG2 from '../../assets/d1.jpg'
import IMG3 from '../../assets/c2.jpg'
import IMG4 from '../../assets/d3.jpg'
import IMG5 from '../../assets/c3.jpg'
import IMG6 from '../../assets/bg.jpg'
// For now just using 1 image for convenience

// Map through the array of portfolio items
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency DashBoard & Financial Visualization",
  
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
   
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
  
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
 
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
  
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>__________</h2>
      <h2>Our Objectives</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <i><h3>{title}</h3></i>
            <div className="portfolio__item-cta">
            </div>
        </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio