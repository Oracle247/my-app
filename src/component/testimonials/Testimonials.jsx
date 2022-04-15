import React from 'react'
import './testimonials.css'
import IMG from '../../asset/brooke-cagle-H6We-lFziBg-unsplash.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    key:1,
    avatar: IMG,
    name: 'Nicholas Duadei',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque a ullam veritatis error eum explicabo rem, necessitatibus, nam laudantium possimus.'
  },
  {
    key:2,
    avatar: IMG,
    name: 'Nicholas Duadei',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque a ullam veritatis error eum explicabo rem, necessitatibus, nam laudantium possimus.'
  },
  {
    key:3,
    avatar: IMG,
    name: 'Nicholas Duadei',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque a ullam veritatis error eum explicabo rem, necessitatibus, nam laudantium possimus.'
  },
  {
    key:4,
    avatar: IMG,
    name: 'Nicholas Duadei',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque a ullam veritatis error eum explicabo rem, necessitatibus, nam laudantium possimus.'
  },
  {
    key:5,
    avatar: IMG,
    name: 'Nicholas Duadei',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque a ullam veritatis error eum explicabo rem, necessitatibus, nam laudantium possimus.'
  },
  {
    key:6,
    avatar: IMG,
    name: 'Nicholas Duadei',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae neque a ullam veritatis error eum explicabo rem, necessitatibus, nam laudantium possimus.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="client__image" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            ) 
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials