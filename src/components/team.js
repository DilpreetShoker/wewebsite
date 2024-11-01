import React from 'react'
import './AboutUs.css'
import './team.css'
import Aalya from './images/Aalya.png'
import Marianthi from './images/Marianthi.png'
import Denys from './images/Denys.png'
import Aaryan from './images/Aaryan.png'
import Ollie from './images/Ollie.png'
import Shaurya from './images/Shaurya.png'
import Aly from './images/Aly.png'
import User from './images/user.png'

const Team = () => {
    const displayTeam = (eventID,spanNo) => {
       
        var modal = document.getElementById(eventID);
        var span = document.getElementsByClassName("teamClose")[spanNo];
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
    return (
        <>
        <div id = "Flagship" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Flagship
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Tanvi Jain</p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Ruhani Khanna </p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Narmatha Murugesu</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>TBC</p>
                <p>TBC</p>
            </div>
            </div>
        </div>
        <div id = "WEConnect" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                WEConnect
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Oliver Taylor  </p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Hrishita Rangoonwala</p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Omar Aljabri</p>
                <p>Shaima lone </p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>Kayan Intwala</p>
            </div>
            </div>
        </div>
        <div id = "EResearch" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Entrepreneurial Research
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Nabil Sheta </p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Joba Thomas</p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Margherita Bossi</p>
                <p>Theo van Peski</p>
                <p>TBC</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>TBC</p>
            </div>
            </div>
        </div>
        <div id = "Marketing" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Marketing
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Samanvi Jain  </p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Aneesha Khan</p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Alicia Robert</p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Naomi Carne</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>Aashna Ajit</p>
            </div>
            </div>
        </div>
        <div id = "IEvents" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Interactive Events
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Naznin Bhuiyan </p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Sander Meenan  </p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Spyros Ioannidis</p>
                <p>Medha Tater</p>
                <p>Burhan Miah</p>
                <p>Bachar Ibrahim el Husseini</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>Arsh Mir</p>
                <p>Ibrahim Khambaty </p>
            </div>
            </div>
        </div>
        <div id = "Diversity" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Diversity
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Hiya Gandhi</p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>Avi Saluja</p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Anahita Souham</p>
                <p>Vivian Zhang</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>Faizan Malik</p>
                <p>Reyna Kewelremany</p>
            </div>
            </div>
        </div>
        <div id = "Finance" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Finance
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>TBC</p>
            </div>
            <div className='head'>
            <img src={User} alt='User' />
                <h3>Co-Head</h3>
                <p>TBC</p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>Aarav Kumar</p>
                <p>Malavika Joshi</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>Gracelyn Asley Sukandi</p>
            </div>
            </div>
        </div>
        <div id = "Socials" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Socials
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>TBC</p>
            </div>
            <div className='head'>
            <img src={User} alt='Head' />
                <h3>Co-Head</h3>
                <p>TBC</p>
            </div>
            <div className='members'>
                <h3>Members</h3>
                <p>TBC</p>
                <p>TBC</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>TBC</p>
            </div>
            </div>
        </div>
        <div id = "Tech" className="modal">
            <div className="teamContent">
            <span className="teamClose">&times;</span>
            <div className='teamTitle'>
                Technology
            </div>
            <div className='one_head'>
            <img src={User} alt='Head' />
                <h3>Head</h3>
                <p>Dilpreet Singh</p>
            </div>
            <div className='members'>
                <h3>Fresher Reps</h3>
                <p>TBC</p>
            </div>
            </div>
        </div>
        <div className='team'>
                <div className='title' id = 'team'>
                    <div className='line'></div>
                    <div className='text'>The Executive Team</div>
                </div>
                <div className='content'>
                    <div className='board'>
                        <div className='team_title'>
                            <h1>The Board</h1>
                        </div>
                        <div className='PCMembers'>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Marianthi} alt='Marianthi' />
                                </div>
                                <div className='memberName'>
                                    Marianthi
                                </div>
                                <div className='memberPosition'>
                                    Senior Advisor
                                </div>
                            </div>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Aly} alt='Aly' />
                                </div>
                                <div className='memberName'>
                                    Aly
                                </div>
                                <div className='memberPosition'>
                                    Senior Advisor
                                </div>
                            </div>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Aalya} alt='Aalya' />
                                </div>
                                <div className='memberName'>
                                    Aalya
                                </div>
                                <div className='memberPosition'>
                                    Chairwoman
                                </div>
                            </div>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Aaryan} alt='Aaryan' />
                                </div>
                                <div className='memberName'>
                                    Aaryan
                                </div>
                                <div className='memberPosition'>
                                    President
                                </div>
                            </div>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Denys} alt='Denys' />
                                </div>
                                <div className='memberName'>
                                    Denys
                                </div>
                                <div className='memberPosition'>
                                    Chairman
                                </div>
                            </div>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Ollie} alt='Ollie' />
                                </div>
                                <div className='memberName'>
                                    Ollie
                                </div>
                                <div className='memberPosition'>
                                    Senior Advisor
                                </div>
                            </div>
                            <div className='member'>
                                <div className= 'memberImage'>
                                    <img src={Shaurya} alt='Shaurya' />
                                </div>
                                <div className='memberName'>
                                    Shaurya
                                </div>
                                <div className='memberPosition'>
                                    Treasuer
                                </div>
                            </div>
                        </div>
                        <div className='mobileMembers'>
                            <div className='top_r'>
                                <div className='member' id = 'Aalya'>
                                    <div className= 'memberImage'>
                                        <img src={Aalya} alt='Aalya' />
                                    </div>
                                    <div className='memberName'>
                                        Aalya
                                    </div>
                                    <div className='memberPosition'>
                                        Chairwoman
                                    </div>
                                </div>
                                <div className='member' id = 'Aaryan'>
                                    <div className= 'memberImage'>
                                        <img src={Aaryan} alt='Aaryan' />
                                    </div>
                                    <div className='memberName'>
                                        Aaryan
                                    </div>
                                    <div className='memberPosition'>
                                        President
                                    </div>
                                </div>
                                <div className='member' id = 'Denys'>
                                    <div className= 'memberImage'>
                                        <img src={Denys} alt='Denys' />
                                    </div>
                                    <div className='memberName'>
                                        Denys
                                    </div>
                                    <div className='memberPosition'>
                                        Chairman
                                    </div>
                                </div>
                            </div>
                            <div className='top_r2'>
                            <div className='member' id = 'Aaryan'>
                                    <div className= 'memberImage'>
                                        <img src={Aaryan} alt='Aaryan' />
                                    </div>
                                    <div className='memberName'>
                                        Aaryan
                                    </div>
                                    <div className='memberPosition'>
                                        President
                                    </div>
                                </div>
                                <div className='member' id = 'Aalya'>
                                    <div className= 'memberImage'>
                                        <img src={Aalya} alt='Aalya' />
                                    </div>
                                    <div className='memberName'>
                                        Aalya
                                    </div>
                                    <div className='memberPosition'>
                                        Chairwoman
                                    </div>
                                </div>
                                <div className='member' id = 'Denys'>
                                    <div className= 'memberImage'>
                                        <img src={Denys} alt='Denys' />
                                    </div>
                                    <div className='memberName'>
                                        Denys
                                    </div>
                                    <div className='memberPosition'>
                                        Chairman
                                    </div>
                                </div>
                            </div>
                            <div className='bottom_r'>
                                <div className='member'>
                                    <div className= 'memberImage'>
                                        <img src={Marianthi} alt='Marianthi' />
                                    </div>
                                    <div className='memberName'>
                                        Marianthi
                                    </div>
                                    <div className='memberPosition'>
                                        Senior Advisor
                                    </div>
                                </div>
                                <div className='member'>
                                    <div className= 'memberImage'>
                                        <img src={Aly} alt='Aly' />
                                    </div>
                                    <div className='memberName'>
                                        Aly
                                    </div>
                                    <div className='memberPosition'>
                                        Senior Advisor
                                    </div>
                                </div>
                                <div className='member'>
                                    <div className= 'memberImage'>
                                        <img src={Ollie} alt='Ollie' />
                                    </div>
                                    <div className='memberName'>
                                        Ollie
                                    </div>
                                    <div className='memberPosition'>
                                        Senior Advisor
                                    </div>
                                </div>
                                <div className='member'>
                                    <div className= 'memberImage'>
                                        <img src={Shaurya} alt='Shaurya' />
                                    </div>
                                    <div className='memberName'>
                                        Shaurya
                                    </div>
                                    <div className='memberPosition'>
                                        Treasuer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='teams'>
                        <div className='team_title'>
                            <h1>Teams</h1>
                        </div>
                        <div className='top_row'>
                            <div className='single_team' onClick = {()=> displayTeam("Flagship",0)}>
                                Flagship
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("WEConnect",1)}>
                                WEConnect
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("EResearch",2)}>
                                Entrepreneurial Research
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("Marketing",3)}>
                                Marketing
                            </div>
                        </div>
                        <div className='bottom_row'>
                            <div className='single_team' onClick = {()=> displayTeam("IEvents",4)}>
                                Interactive
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("Diversity",5)} >
                                Diversity
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("Finance",6)}>
                                Finance
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("Socials",7)}>
                                Socials
                            </div>
                            <div className='single_team' onClick = {()=> displayTeam("Tech",8)}>
                                Tech
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Team