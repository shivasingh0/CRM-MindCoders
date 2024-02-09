import { Navigate, Outlet } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// Import Components
import * as COMPONENT_ROUTES from "../routes/ComponentRoute";
import { getDataFromSessionStorage } from "../helpers/Helpers";

function PrivateRoute() {
  const handle = useFullScreenHandle();
  let auth = getDataFromSessionStorage();

  return auth ? (
    <>
      <FullScreen handle={handle}>
        <COMPONENT_ROUTES.NAV_BAR />
        <COMPONENT_ROUTES.HEADER fullscreenHandle={handle} />
        <COMPONENT_ROUTES.SIDE_BAR />
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
