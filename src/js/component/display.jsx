import React from "react";
import { CardBootstrap } from "./card_bootstrap";
//create your first component
const date = new Date();
const testTime = date.getMinutes();
 


export const Display= () => {
    if(testTime%2==0){
    return (
                <div className="row ">
                    <div className="col-2"></div>
                    <div className="col-8 d-flex justify-content-between">
                 <CardBootstrap test="bg-secondary" />
                 <CardBootstrap test="bg-secondary" />
                 <CardBootstrap test="bg-secondary" />
                 <CardBootstrap test="bg-secondary" />
             
                 </div>
                 <div className="col-2"></div>
            
            </div>
          
    );
    }
    else{
        return (
            <div className="row ">
                <div className="col-2"></div>
                <div className="col-8 d-flex justify-content-between ">
             {/* <CardBootstrap test="bg-white"/>
             <CardBootstrap test="bg-white"/>
             <CardBootstrap test="bg-white"/>
             <CardBootstrap test="bg-white"/> */}  

                  <CardBootstrap test="bg-secondary" />
                 <CardBootstrap test="bg-secondary" />
                 <CardBootstrap test="bg-secondary" />
                 <CardBootstrap test="bg-secondary" />   
                  
             </div>
             <div className="col-2"></div>
        
        </div>
);
} 
    }


	// if(testTime%2==0){
    //     return (
    //         <div className="row ">
    //             <div className="col-2"></div>
    //             <div className="col-8 d-flex justify-content-between">
    //          <CardBootstrap test={testTime} />
         
    //          </div>
    //          <div className="col-2"></div>
        
    //     </div>
        
    //         ); 
    // }else{
    //     return (
    //         <div className="row ">
    //             <div className="col-2"></div>
    //             <div className="col-8 d-flex justify-content-between">
    //          <CardBootstrap />
    //          <CardBootstrap/>
    //          <CardBootstrap/>
    //          <CardBootstrap/>
    //          </div>
    //          <div className="col-2"></div>
        
    //     </div>
        
         
    




