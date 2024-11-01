import React from 'react'
import './AboutUs.css'
import './Events.css'
import past_speakers from './images/past_speakers.png'
import Xelerate from './images/Xelerate.png'
import Socials from './images/Socials.png'
import location from './images/location.png'
import building from './images/buildings.png'
import business from './images/businessMeeting.png'
import money from './images/Money.png'
const displayEvent = (eventID,spanNo) => {
       
    var modal = document.getElementById(eventID);
    var span = document.getElementsByClassName("close")[spanNo];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

const Events = () => {
    return (
        <>
        <div id = "EventModal1" className="modal">
            <div className="eventContent">
                <span className="close">&times;</span>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Interactive Events</div>
                </div>
                <div className='left_box'>
                <h2>What we do</h2>
                <p>Held <b>weekly</b>, our interactive events host renowned speakers for workshops 
                    and networking sessions while collaborating with other University societies.</p>
                <p>Check out our <b>calendar</b> for this week’s event</p>
                </div>
                
                <div className='right_box'>
                    <h2>Past speakers from: </h2>
                    <img src={past_speakers} alt='past speakers' />
                </div>
            </div>
        </div>
        <div id = "EventModal2" className="modal">
        <div className="eventContent">
                <span className="close">&times;</span>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Flagship Events</div>
                </div>
                <div className='left_box'>
                <h2>What we do</h2>
                <p>Experience <b>premium</b> networking at London’s iconic <b>Shard</b>, 
                    connecting aspiring <b>entrepreneurs</b> with <b>industry leaders</b> </p>
                <p> Largest <b>entrepreneurial summit</b>  bringing together students, 
                    <b>founders</b>, and <b>investors</b> to Warwick, 
                    exploring the future of entrepreneurship</p>
                </div>
                
                <div className='right_box1'>
                    <div className='top_box'>
                    <h2>Careers Fair</h2>
                    <p>EXPLORING ENTREPRENEURSHIP IN THE CORPORATE SPACE </p>
                    <p><img src={location} alt='location' /><b>The Shard, London</b></p>
                    </div>
                    <div className='bottom_box'>
                    <h2>Impact Summit</h2>
                    <p>TBC ... </p>
                    <p><img src={location} alt='location' /><b className='imgP'>University of Warwick</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div id = "EventModal3" className="modal">
            <div className="eventContent">
                <span className="close">&times;</span>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>WEConnect</div>
                </div>
                <div className='main_box'>
                    <div className='left'>
                        <p>
                        Run the largest student <b>accelerator</b> program- XELERATE 🚀 
                        on campus bringing ideas to life through workshops 
                        and <b>mentorship</b> by industry <b>professionals</b>
                        </p>
                    </div>
                    <div className='center'>
                        <img src={Xelerate} alt='Xalerate' />
                    </div>
                    <div className='right'>
                    <div className='section'>
                        <div className='left_s'>
                            <p><b>£1,000,000</b> <br></br>investment pool</p>
                        </div>
                        <div className='right_s'>
                            <img src={money} alt='location' />
                        </div>  
                    </div>
                    <div className='section'>
                        <div className='left_s'>
                            <p><b>7+</b> <br></br>worshops </p>
                        </div>
                        <div className='right_s'>
                            <img src={business} alt='business' />
                        </div>
                    </div>
                    <div className='section'>
                        <div className='left_s'>
                            <p>Pitch Day at <br></br><b>The Shard</b></p> 
                        </div>
                        <div className='right_s'>
                        <img src={building} alt='business' />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div id = "EventModal4" className="modal">
            <div className="eventContent">
                <span className="close">&times;</span>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Socials</div>
                </div>
                <div className='main_box'>
                    <div className='left_b'>
                    <p>Join us for our bi-weekly socials: </p>
                    <div className='list'>
                        <b>Termly parties</b><br></br>
                        <b>Thrilling circles</b><br></br>
                        <b>Pub golf</b><br></br>
                        <b>Bar crawls </b><br></br>
                        <b>Bottomless Brunch</b><br></br>
                    </div>
                    <p>Our socials are a great way to unwind and foster lasting friendships</p>
                    </div>
                    <div className='right_b'>
                        <img src={Socials} alt = 'Socials'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='events'>
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Events</div>
                </div>
                <div className='content'>
                    <div className='eventImage1' onClick = {()=> displayEvent("EventModal1",0)}>
                        <p>Interactive  Events</p>
                    </div>       
                    <div className='eventImage2' onClick = {()=> displayEvent("EventModal2",1)}>
                        <p>Flagship Events</p>
                    </div>
                    <div className='eventImage3' onClick = {()=> displayEvent("EventModal3",2)}>
                        <p>WEConnect</p>
                    </div>
                    <div className='eventImage4' onClick = {()=> displayEvent("EventModal4",3)}>
                        <p>Socials</p>
                    </div>
                </div> 
        </div>
        </>
    )
}

export default Events