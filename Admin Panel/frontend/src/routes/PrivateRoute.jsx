import { Navigate, Outlet } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// Components
import NavbarHeader from "../components/NavbarHeader";
import Header from "../components/Header/Header";
import SidebarBar from "../components/SidebarBar";

function PrivateRoute() {
  const handle = useFullScreenHandle();
  let auth = localStorage.getItem("user");

  return auth ? (
    <>
      <FullScreen handle={handle}>
        <NavbarHeader />
        <Header fullscreenHandle={handle} />
        <SidebarBar />
        <div className="content-body">
          <Outlet />
        </div>
      </FullScreen>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default PrivateRoute;
