import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data=[
  {
    id:1,
    image:IMG1,
    title:'Salmage-Sales-Management-Mobile-App-Animation',
    github:'http://github.com',
    demo:'https://dribbble.com/shots/18833461-Salmage-Sales-Management-Mobile-App-Animation'
  },
  {
    id:2,
    image:IMG2,
    title:'Refersion-UI-Product-Visuals',
    github:'http://github.com',
    demo:'https://dribbble.com/shots/18851138-Refersion-UI-Product-Visuals'
  },
  {
    id:3,
    image:IMG3,
    title:'Wedays-Wedding-Organizer-Landing-Page',
    github:'http://github.com',
    demo:'https://dribbble.com/shots/18848768--Wedays-Wedding-Organizer-Landing-Page'
  },
  {
    id:4,
    image:IMG4,
    title:'Kalao-Web-Design-for-NFT-Marketplace',
    github:'http://github.com',
    demo:'https://dribbble.com/shots/18847976-Kalao-Web-Design-for-NFT-Marketplace'
  },
  {
    id:5,
    image:IMG5,
    title:'HRGeer-HR-Management-Dasboard',
    github:'http://github.com',
    demo:'https://dribbble.com/shots/18845541-HRGeer-HR-Management-Dasboard'
  },
  {
    id:6,
    image:IMG6,
    title:'Joboard-Website-Landing-Page',
    github:'http://github.com',
    demo:'https://dribbble.com/shots/18846898-Joboard-Website-Landing-Page'
  }
]
 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,title,github,demo,image})=>{
            return(

            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
  
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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