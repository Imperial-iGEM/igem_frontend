import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lottiedata/lf30_5egnodig.json'



export default function ThisAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          //height={432}
         // width={786}
        />
      </div>
    );
  }