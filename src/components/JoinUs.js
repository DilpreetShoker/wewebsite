import React from 'react'
import './AboutUs.css'
import './JoinUs.css'

const JoinUs = () => {

    return (
        <div className='joinUs' id = "joinUs">
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Join Us</div>
                </div>
                <div className='content'>
                    <div className='col1'>
                        <h3>Purchase your membership now on the SU website</h3>
                        <a href='https://www.warwicksu.com/societies-sports/societies/entrepreneurs/'>JOIN US !!</a>
                        <p>If you have any queries feel free to contact us through our email:
                            warwickentrepreneurssociety@gmail.com</p>
                    </div>
                    <div className='col2'></div>
                </div>
        </div>
    )
}

export default JoinUs