import React from 'react'

const Filter = ({categories, loading, filterPods, filtered, reset}) => {


 const renderCate = () => {
  return categories.map((cate, index) => {
   return (
    <React.Fragment key={index} >
     <label className="category">
      <input type="checkbox" name="" id="" onChange={(event) => filterPods(cate, event)}/>
      <span>{cate}</span>
     </label>
    </React.Fragment>)
  })
 }




 return (
  <div className="categories">
   {categories.length > 0 && !loading ? renderCate() : null}
  </div>
 )
}

export default Filter