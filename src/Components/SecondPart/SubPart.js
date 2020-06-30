import React from 'react';
import "./SubPart.css";

const SubPart = (props) => {

    const {title,description, image} = props.item;
    return (
        <div className="mt-2 mb-2">
        <div className="text-center">
        <img className="img-fluid" src={image} alt="building"/>
        </div>
        <h3 className="text-uppercase text-center mt-4 mb-4">{title}</h3>
        <p className="pl-4 pr-4 mb-3 text-center">{description}</p>
        <div className="text-center mt-4">
        <a className="custom-btn text-dark text-uppercase font-weight-bold" href="/">More info</a>
        </div>
        
        </div>
    );
};

export default SubPart;