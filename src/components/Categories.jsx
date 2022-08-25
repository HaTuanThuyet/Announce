import React from 'react'
import {ApiCategories } from '../componentApi/CategoryApi'
import Category from './Category'

function Categories() {
  return (
    <div className='flex justify-between items-center p-5'>
       {ApiCategories.map((category, index)=>(
        <Category item={category} key={index}/>
    ))}
    </div>
  )
}

export default Categories