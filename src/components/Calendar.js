import React from 'react'
import './AboutUs.css'
import './Calendar.css'

const Calendar = () => {

    return (
        <div className='calendar' id ='calendar'>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Calendar</div>
                </div>
                <div className='content'>
                <iframe src="https://embed.styledcalendar.com/#OSme3GXXPY3JtJiVl0cR" title="Styled Calendar" class="styled-calendar-container"style={{width: '100%', border: 'none',height: '100%'}} data-cy="calendar-embed-iframe"></iframe>
                <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
            </div> 
        </div>
    )
}

export default Calendar