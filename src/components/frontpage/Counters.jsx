import React from "react";
import Number from "./Number";


function CounterComponent() {


  return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-y-16 py-10" style={{backgroundImage:'../../assets/banner.jpg'}}>
           
                  <Number
                    n={12}
                    title=" Years Helping Business"
             
                    client:visible
                  />
            

           
              
                  <Number
                    n={90}
                    title=" Working Employees"
            className="z-20"
                    client:visible
                  />
         

          
              
                  <Number
                    n={100}
                    title=" Complete Projects"
            
                    client:visible
                  />
          

          
                  <Number
                    n={12}
                    title=" Happy Customers"
                    client:visible
                  />
           
   
           </div>
   
           



  );
}

export default CounterComponent;
