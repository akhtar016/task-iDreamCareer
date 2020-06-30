import React from 'react';
import "./HomeSecond.css";
import SubPart from './SubPart';

const HomeSecond = () => {

  
    const  data = [
       {
           title : "Mauris vulputate dolor",
           description:"Praesent pellentesue facilisis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
            image: "https://i.ibb.co/ZNfBFqD/1.png"
       } ,
        {
           title : "Fusce ultrices fringilla",
           description:"Pellentesue adipiscing purus ac magna. Pellentesque habitant morbi tristique senectus et netus et fames ac turpis egestas",
            image:   "https://i.ibb.co/bRjJDv9/2.png"
       } ,
        {
           title : "nulla luctus eleifend purus",
           description:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit.",
            image: "https://i.ibb.co/nMSZ9Vt/3.png"
       } 
    ]
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
            {
                data.map(item => 
                    (
              <div className="col-md-4 d-flex justify-content-md-between">
                <SubPart item={item}></SubPart>
              </div>
            )
                )
            }
            {/* https://i.ibb.co/7QsyMqj/4.png */}

            </div>
            <hr/>
        </div>
    );
};

export default HomeSecond;