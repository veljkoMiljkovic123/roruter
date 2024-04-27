import React from "react";
import { Link,NavLink } from "react-router-dom";
function NavbarComponent() {

    let routers = ['Products','About','Contact']
   
  return <div className="container mx-auto flex justify-between h-[120px]">
    <h2>WithoutRouter</h2>
    <ul className="flex gap-5">
       
        {routers.map((el,i)=>{
            return <li key={i}>
            <NavLink to={`/${el.toLowerCase()}`}>{el}</NavLink>
            </li>
        })}
    </ul>
  </div>
}

export default NavbarComponent;
