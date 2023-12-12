
import { Navigate, Outlet } from "react-router-dom";

// Components
import NavbarHeader from "../components/NavbarHeader";
import Header from "../components/Header";
import SidebarBar from "../components/SidebarBar";

function PrivateRoute() {

  let auth = localStorage.getItem('user')

  return auth ? (
    <>
      <NavbarHeader />
      <Header />
      <SidebarBar />
      <div className="content-body">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default PrivateRoute;
