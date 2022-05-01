import React from 'react'
import './testimonials.css'
import avatar1 from "../../assets/block4.png"
import avatar2 from "../../assets/block1.png"
import avatar3 from "../../assets/block.png"
import avatar4 from "../../assets/block3.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: "ADOPT",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
  {
    avatar: avatar2,
    name: "FOSTER",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
  {
    avatar: avatar3,
    name: "VOLUNTEER",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
  {
    avatar: avatar4,
    name: "DONATE",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
       <h2>__________</h2>
      <h2>Our Services</h2>

      <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination = {{clickable: true}}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h3 className="client__name">{name}</h3>
              <b><i><h4 className="client__review">{review}</h4></i></b>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials