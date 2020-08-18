import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GigGriditem } from "./GigGriditem";
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({ category }) => {


    const  {data:images, loading} = useFetchGifs(category);
//   const [images, setImages] = useState([]);


  return (

      <>
    <h3 className="animate__animated animate__bounce animate__faster">{category}</h3>



  {loading && <p>Loading</p>}


    <div className="card-grid">

      
        {images.map(img => (

            <GigGriditem 
            key={img.id}
            img={img}/>
        )
        )}
      
    </div>
    </>
  );
};
