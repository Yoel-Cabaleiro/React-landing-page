import React from 'react';
import PropTypes from 'prop-types';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

function Card(props){
    return(
    <div className="card col-lg-3 col-md-6 col-xs-12 p-0 m-2" id="card">
        <img src={props.img} className="card-img-top" alt="Image not found"/>
        <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
        
        </div>
        <div className="card-footer text-center bg-white">
            <a href="#" className="btn btn-primary">Ver proyecto</a>
        </div>

    </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default Card