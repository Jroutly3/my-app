import React from "react";

function Card({person}) {
    return(
        <div className="tc bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5 fl w-100">
            <div>
                <h2>{person.name}</h2>
                <p>Unit: {person.unit}; Location: {person.location}; Phone Number:{person.phoneNumber}</p>
            </div>
        </div>
    )
}

export default Card;