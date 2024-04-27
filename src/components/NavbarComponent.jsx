import React from "react";

function NavbarComponent() {
    let routers = ['Products','About','Contact']
    let pathname = window.location.pathname.slice(1)
  return <div className="container mx-auto flex justify-between h-[120px]">
    <h2>WithoutRouter</h2>
    <ul className="flex gap-5">
        {routers.map((el,i)=>{
            return <li key={i}>
                <a href={`/${el.toLowerCase()}`}
                className={pathname===el.toLowerCase()?'active':''}
                >{el}</a>
            </li>
        })}
    </ul>
  </div>
}

export default NavbarComponent;
