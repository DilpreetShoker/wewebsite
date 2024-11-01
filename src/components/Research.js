import React from 'react'
import './AboutUs.css'
import './Events.css'
import AI_Research from './AI_Research.pdf'

const onResearchClick = (fileName)  => {
    window.open(AI_Research);
  }
const Research = () => {
    
    return (
        <div className='events' id = "research">
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Research</div>
                </div>
                <div className='content'>
                    <div className='eventImage1' onClick={()=> onResearchClick(AI_Research)} >
                        <p>AI in Business</p>
                    </div>       
                    <div className='eventImage2' >
                        <p>Coming Soon</p>
                    </div>
                    <div className='eventImage3' >
                        <p>Coming soon </p>
                    </div>
                    <div className='eventImage4'>
                        <p>Coming Soon</p>
                    </div>
                </div> 
        </div>
    )
}

export default Research