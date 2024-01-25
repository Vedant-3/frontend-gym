import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';

import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
          
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
        </div>
        <div>
          <span className='hero-desc'>
            In here we will help you to shape and build your ideal body and live up your life to fullest
          </span>
        </div>

        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>

        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_img} alt="" className='hero-img' />
        <img src={hero_img_back} alt="" className='hero-img-back' />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero