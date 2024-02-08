import React from 'react'
import { ItemSearch } from './ItemSearch'

export const SearchListContainer = ({search}) => {
  return (
    <div className='mx-auto NoticesContainer d-flex flex-wrap  justify-content-evenly '>
        {search.map((data,index) => {
            return(
              <ItemSearch data={data} key={index}/>
            )
        })}
    </div>
  )
}
