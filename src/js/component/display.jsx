import React from "react";
import { CardBootstrap } from "./card_bootstrap";
//create your first component

export const Display= (props) => {
	return (

        <div className="row">
            <div className="col-2"></div>
	<div className="col d-flex justify-content-evenly ">
      
     <CardBootstrap/>
     <CardBootstrap/>
     <CardBootstrap/>
     <CardBootstrap/>
    

</div>
<div className="col-2"></div>
</div>
  



	);
};
