import React from 'react'
import Uzum from "../../assets/uzum.png"
import ITPark from "../../assets/IT-Park.png"
import Click from "../../assets/click.png"
import UzumNasiya from "../../assets/uzumNasiya.png"
import Payme from "../../assets/payme.png"
import Bilgi from "../../assets/bilgi.png"
const Slider = () => {
  return (
    <div className="slider py-5">
      <div className="slider-track">  
        <div className="slide"><img src={Uzum}/></div>
        <div className="slide"><img src={ITPark}/></div>
        <div className="slide"><img src={Click}/></div>
        <div className="slide"><img src={UzumNasiya}/></div>
        <div className="slide"><img src={Payme}/></div>
        <div className="slide"><img src={Bilgi}/></div>
        <div className="slide"><img src={Uzum}/></div>
        <div className="slide"><img src={ITPark}/></div>
        <div className="slide"><img src={Click}/></div>
        <div className="slide"><img src={UzumNasiya}/></div>
        <div className="slide"><img src={Payme}/></div>
        <div className="slide"><img src={Bilgi}/></div>
        <div className="slide"><img src={Uzum}/></div>
        <div className="slide"><img src={ITPark}/></div>
        <div className="slide"><img src={Click}/></div>
        <div className="slide"><img src={UzumNasiya}/></div>
        <div className="slide"><img src={Payme}/></div>
        <div className="slide"><img src={Bilgi}/></div>
        
      </div>
    </div>
  )
}

export default Slider