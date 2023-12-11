import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";
import SidebarStart from "../components/SidebarStart";
import Header from "../components/Header";

function PrivateRoute() {
//   const [auth, setAuth] = useState(false);
  let auth = localStorage.getItem('user')
//   useEffect(()=>{
//     function auth() {
//         let is = localStorage.getItem('user')
//         if (is) {
//             setAuth(true)
//         }
//     }
//     auth()
//   },[])

  return auth ? (
    <>
      <NavbarHeader />
      <Header />
      <SidebarStart />
      <div className="content-body">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default PrivateRoute;
