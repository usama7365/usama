import React  from "react"
import "./style.css"

export default class Tasbeeh extends React.Component{

state={x:0}

handle=()=>{

this.x=this.x++

this.setState({

y:this.state.x++

})



}


render(){

return(
    
<div>
<h1 >hello</h1>

<div className="main">
<h1>{this.state.x}</h1>
    <button onClick={this.handle}>inc</button>


</div>



</div>


)

}

}