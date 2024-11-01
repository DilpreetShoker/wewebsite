import React from 'react'
import './AboutUs.css'
import './Calender.css'

const Calender = () => {

    return (
        <div className='calender'>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Calender</div>
                </div>
                <div className='content'>
                <iframe src="https://embed.styledcalendar.com/#cXyT3Kk6S1zAhvNc7PfP" title="Styled Calendar" class="styled-calendar-container" style={{width: '100%', border: 'none',height: '100%'}} data-cy="calendar-embed-iframe"></iframe>
<script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                </div>
        </div>
    )
}

export default Calender