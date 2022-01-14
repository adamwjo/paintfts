import React from 'react'
import './paintingcard.css'

const Painting = (props) => {
    return (
        <div className="card border-secondary mb-3 painting-card">
            <div className="card-header">{props.paintingData.title}</div>
            <img src={props.paintingData.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">Secondary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Painting
