import React, { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  
render(props){
  const imgData = this.props.myData();
  console.log(imgData)
  return(
  <div>
     <h1>Kalvium Gallary</h1>
  <div>
    {imgData.map((imaage, index)=>{
            
            
return(
    <div key={index} >
        <img src={imaage.img} alt="" />
    </div>)
})}

  </div>
 </div>
    
  )
}
  // code here
}
