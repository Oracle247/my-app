import React from 'react'
import './portfolio.css'
import IMG from '../../asset/luca-iaconelli-kvBOc0nxNlk-unsplash.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Lorem ipsum dolor sit',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG,
    title: 'Lorem ipsum dolor sit',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG,
    title: 'Lorem ipsum dolor sit',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG,
    title: 'Lorem ipsum dolor sit',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG,
    title: 'Lorem ipsum dolor sit',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG,
    title: 'Lorem ipsum dolor sit',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG} alt="portfolio-image" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__buttons">
                  <a href={github} target="_blank" className="btn">Github</a>
                  <a href={demo} target="_blank" className="btn btn-primary">Demo</a>
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