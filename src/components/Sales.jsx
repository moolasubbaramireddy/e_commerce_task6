import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({endpoint:{title, items}}) => {
    //console.log(items)
  return (
    <>
        <div>
            <Title name={title}/>
            <div>
                {items?.map((item,index)=>(
                     <Item {...item} key={index} />
                ))}
               
            </div>
        </div>
    </>
  )
}

export default Sales