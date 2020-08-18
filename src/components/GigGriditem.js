import React from 'react'

export const GigGriditem = (props) => {


    const {img} = props;

console.log(img);
    return (


        <div className="card" animated__animated animated__fadeIn>

            <img src={img.url} alt={img.title}/>
    <p>{img.title}</p>
        </div>
    )
}
