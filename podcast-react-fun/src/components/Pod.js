import React from 'react'

const Pod = ({pod, reverseTitle}) => {

 const findLink = () => {
  if(pod.feedburnerUrl){
   return pod.feedburnerUrl
  }
  else if(pod.link && !pod.feedburnerUrl){
   return pod.link
  }
  else{
   return null
  }
 }

 return (
  <div className="pod-container">
   <h2 onClick={(event) => reverseTitle(event)} className="pod-title">{pod.title}</h2>
   <p className="pod-author">Author: {pod.author.name ? pod.author.name : 'Unknown'}</p>
   <a className="pod-link" target="_blank" href={findLink()}>Check It Out</a>
  </div>
 )
}

export default Pod

