import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Item = ({id,title,text,rating,btn,color,img,price,shadow}) => {
  console.log(id)
  return (
    <>
    <div>
      <div>
        <h1>{title}</h1>
        <h1>{text}</h1>
        <div>
          <div><StarIcon className='icon-style text-slate-900'/><h1>{rating}</h1></div>
        </div>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default Item