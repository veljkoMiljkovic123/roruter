import React, { useState } from "react";

function SingleProductCardComponent({ product }) {
    const [currenImage, setCurrentImage]=useState(0)
    function changeCurrentImage(i){
        setCurrentImage(i)
    }

  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-5">
        {/* velika slika */}
        <img src={product.images[currenImage]} alt="" />
        {/* male slike */}
        <div className="flex items-center gap-5">
          {product.images.map((img, i) => {
            return <img src={img} key={i} alt="" className="w-[150px] border-2 border-slate-300 object-cover" onClick={()=>changeCurrentImage(i)}/>;
          })}
        </div>
      </div>
      <div>{/* content */}</div>
    </div>
  );
}

export default SingleProductCardComponent;
