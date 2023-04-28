import "./CardStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$1</p>
                <p> - </p>
                <p> - </p>
                <p>Not yet started</p>
                <Link to="/contact" className="btn"> VIEW </Link>
            </div>
            <div className="card">
                <h3>- Pro -</h3>
                <span className="bar"></span>
                <p className="btc">$10</p>
                <p> - </p>
                <p> - </p>
                <p>Not yet started</p>
                <Link to="/contact" className="btn"> VIEW </Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> - </p>
                <p> - </p>
                <p>Not yet started</p>
                <Link to="/contact" className="btn"> VIEW </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Card;