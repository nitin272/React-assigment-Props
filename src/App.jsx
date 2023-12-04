import elephant from "./images/elephant.jpeg";
import './App.css'




function App(props) {
  // code here
  const imgDAta = props.myData();
  return(
    <>
      <h1>Kalvium Gallary</h1>
      <div>
        {
        imgDAta.map((item,index)=>{
        return(
          <div key={index}>
            <img src={item.img} alt="" />
          </div>
        )
      })}
      </div>
      
  </>
  )

}

export default App;
