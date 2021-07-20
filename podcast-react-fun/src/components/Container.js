import React from 'react'
import Pod from './Pod'

const Container = ({pods, loading, filtered}) => {

 const reverseTitle = (e) => {
  e.stopPropagation()
  e.target.innerText = e.target.innerText.split(" ").reverse().join(" ")
 }

 const renderPods = () =>{
  if(filtered.length > 0){
   return filtered.map((pod) => {
    return <Pod key={pod.id} pod={pod} reverseTitle={reverseTitle} />
   })
  }
  
  else{
   return pods.map(pod =>{
    return <Pod key={pod.id} pod={pod} reverseTitle={reverseTitle}/>
   })
  }
 } 

 return (
  <div className="pods-container">
    { pods.length > 0 && !loading ? renderPods() : null}
  </div>
 )
}

export default Container
