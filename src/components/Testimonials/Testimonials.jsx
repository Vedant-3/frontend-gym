import React, { useState } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {testimonialsData} from '../../data/testimonialsData';

const Testimonials = () => {

    const [data,setData] = useState(0);
    const dlength = testimonialsData.length ;

    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>{testimonialsData[data].review}</span>
                <span>
                    <span style={{color:'var(--orange)'}}>{testimonialsData[data].name}</span>{" "}
                    - {testimonialsData[data].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[data].image} alt="" />

                <div className="arrows">
                    <img onClick={()=>{
                        if(data === 0){
                            setData(dlength-1);
                        }
                        else{
                            setData((prev)=>prev-1) ;
                        }
                    }} src={leftArrow} alt="" />
                    <img onClick={()=>{
                        if(data === dlength-1){
                            setData(0);
                        }
                        else{
                            setData((prev)=>prev+1) ;
                        }
                    }} src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials