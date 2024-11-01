import React from 'react'
import './AboutUs.css'
import './SocInNo.css'
import image1 from './images/1.png'
import image2 from './images/numberImage2.png'
import image3 from './images/3.png'
import image4 from './images/numberImage4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import image7 from './images/7.png'
import image8 from './images/8.png'
import image9 from './images/9.png'
import image10 from './images/numberImage10.png'
const SocInNo = () => {

    return (
        <div className='socInNo'>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Society In Numbers</div>
                </div>
                <div className='top_content'>
                    <div className='numberBox'>
                        <div className='number'>
                            50+
                        </div>
                        <div className= 'numberImage'>
                            <img src={image1} alt='logo' />
                        </div>
                        <div className='numberText'>
                            Executive Team Members
                        </div>
                    </div>
    
                    <div className='numberBox'>
                        <div className='number'>
                            300+
                        </div>
                        <div className= 'numberImage'>
                            <img src={image3} alt='logo' />
                        </div>
                        <div className='numberText'>
                            Social Media Following
                        </div>
                    </div>
                    <div className='numberBox'>
                        <div className='number'>
                            6+
                        </div>
                        <div className= 'numberImage'>
                            <img src={image5} alt='logo' />
                        </div>
                        <div className='numberText'>
                            Society Collaboration
                        </div>
                    </div>
                    </div>
                    <div className='content'>
                    <div className='numberBox'>
                        <div className='number'>
                            18+
                        </div>
                        <div className= 'numberImage'>
                            <img src={image6} alt='logo' />
                        </div>
                        <div className='numberText'>
                            Events
                        </div>
                    </div>
                    <div className='numberBox'>
                        <div className='number'>
                            30+
                        </div>
                        <div className= 'numberImage'>
                            <img src={image7} alt='logo' />
                        </div>
                        <div className='numberText'>
                            Guest Speakers
                        </div>
                    </div>
                    <div className='numberBox'>
                        <div className='number'>
                            £1 million +
                        </div>
                        <div className= 'numberImage'>
                            <img src={image8} alt='logo' />
                        </div>  
                        <div className='numberText'>
                            Early Stage Funding Pool
                        </div>
                    </div>
                    <div className='numberBox'>
                        <div className='number'>
                            300+
                        </div>
                        <div className= 'numberImage'>
                            <img src={image9} alt='logo' />
                        </div>
                        <div className='numberText'>
                            Alumni Network
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SocInNo
