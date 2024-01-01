import React from 'react';
import Lottie from 'lottie-react';
import animationData from './Advert/Animation - 1703987041091.json'; // Replace with the correct path to your animation file

function LottieAnimation() {
    return <div className="lottie-container"><Lottie animationData={animationData} /></div>;
}

export default LottieAnimation;
