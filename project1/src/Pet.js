import React from "react";

export default function Pet ({ name, animal, breed, media, location, id })  {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, animal),
    //     React.createElement("h2", {}, breed),
    // ]);

    let hero= 'http://placecorgi.com/260/180'
    if(media.length)
    {
        hero = media[0].small;
    }
    return (
        // <div>
        //     <h1>{name}</h1>
        //     <h2>{animal}</h2>
        //     <h2>{breed}</h2>
        // </div>
        <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal}-${breed}-${location}`}</h2>
            </div>
        </a>
    )

};