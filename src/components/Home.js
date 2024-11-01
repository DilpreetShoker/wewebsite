import React from 'react'
import './Home.css'
import '../index.css'

const Hero = () => {
    return (
        <div className='home'>
            <div className='content'>
                <div className='col1'>
                    <h6>BECOME A PART OF</h6>
                    <h1>THE LARGEST ENTREPRENEURIAL SOCIETY</h1>
                    <h6>AT THE UNIVERSITY OF WARWICK</h6>
                </div>
                <div className='col2'>
                    <div className='image1'></div>
                    <div className='image2'></div>
                    <div className='image3'></div>
                </div>
            </div>
            {/* <div className='col1'>
                <h6>BECOME A PART OF</h6>
                <h1>THE LARGEST ENTREPRENEURIAL SOCIETY</h1>
                <h6>AT THE UNIVERSITY OF WARWICK</h6>
            </div>
            <div className='col2'></div> */}
        </div>
    )
}

export default Hero
