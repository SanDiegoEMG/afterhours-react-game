import React from 'react';
import "./ImageCard.css";

function Card (props) {
return (
        <div>
            <div 
                className="bun-card col-md-3" 
                style={{backgroundImage: `url(${props.image})`}}
                key={props.id}
                onClick={() => props.handleClicked(props.id)}
                >
                <p>{props.name}</p>
            </div>
        </div>  
    )
};



export default Card;