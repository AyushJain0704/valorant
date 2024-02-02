import React from 'react'
import Valorant_maps from './Valorant_maps.json'

function Carousel() {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.zleague.gg/theportal/wp-content/uploads/2023/06/All-Valorant-maps-ranked.png" className="d-block w-100" alt=" "/>
                </div>
                {Valorant_maps.List.map(urls => {
                    return(
                        <div className="carousel-item">
                            <img src={urls.Image} className="d-block w-100" alt=" "/>
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel;
