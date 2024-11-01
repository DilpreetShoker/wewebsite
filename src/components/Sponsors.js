import React from 'react'
import './Sponsors.css'
import BanKOfAmerica from './images/BankOfAmerica.png'
import SaltPay from './images/SaltPay.png'
import Pando from './images/Pando.png'
import JPMorgan from './images/JPMorgan.png'
import Accenture from './images/Accenture.png'
import ClimateX from './images/ClimateX.png'
import WBS  from './images/WBS.png'
import Qualco from './images/Qualco.png'
import Nacue from './images/Nacue.png'

const Sponsors = () => {

    return (
        <div className='sponsors' id = "sponsors">
                <div className='title'>
                    <div className='line'></div>
                    <div className='text'>Sponsors</div>
                </div>
                <div className='content'>
                <div className='sponsorImage'>
                    <img src={BanKOfAmerica} alt = 'Bank of America'/>
                </div>
                <div className='sponsorImage'>
                    <img src={SaltPay} alt = 'SaltPay'/>
                </div>
                <div className='sponsorImage'>
                    <img src={Pando} alt = 'Pando'/>
                </div>
                <div className='sponsorImage'>
                    <img src={JPMorgan} alt = 'JP Morgan'/>
                </div>
                <div className='sponsorImage'>
                    <img src={Accenture} alt = 'Accenture'/>
                </div>
                <div className='sponsorImage'>
                    <img src={ClimateX} alt = 'ClimateX'/>
                </div>
                <div className='sponsorImage'>
                    <img src={WBS} alt = 'Warwick Business School'/>
                </div>
                <div className='sponsorImage'>
                    <img src={Qualco} alt = 'Qualco'/>
                </div>
                <div className='sponsorImage'>
                    <img src={Nacue} alt = 'Nacue'/>
                </div>
                </div>
        </div>
    )
}

export default Sponsors
