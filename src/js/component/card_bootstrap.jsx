import React from "react";
import John_Wick from "../../img/John_Wick.jpg"
//create your first component

export const CardBootstrap= (props) => {
    console.log(props.test)
	return (
	
    <div className={props.test} style={{width: "15rem", paddingBottom:"10px"}}>
  <img class="card-img-top" src={John_Wick} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

 



	);
   
   
};
