import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const Item = ({ id, title, text, rating, btn, color, img, price, shadow }) => {
  //console.log(id)
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          <h1>{text}</h1>
          <div>
            <div>
              <h1>{price}</h1>
            </div>
            <div>
              <StarIcon className="icon-style text-slate-900npm den" />
              <h1>{rating}</h1>
            </div>
            <div>
              <button type='button' className="" > <ShoppingBagIcon className="icon-style text-slate-900" /> </button>
              <button type="button" className="">{btn} </button>
            </div>
          </div>
        </div>
        <div>
          <img 
          src={img} 
          alt='img/item-img'
          className=""/>
        </div>
      </div>
    </>
  );
};

export default Item;
