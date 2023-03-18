import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayout () {
    return (<>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our Friends</NavLink>
        </nav> 
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </>
    )
}