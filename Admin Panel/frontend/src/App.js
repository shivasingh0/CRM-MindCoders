import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import Path-Routes
import { PathRoutes } from "./routes/PathRoutes";

// Import Pages
import * as PAGE_ROUTES from "./routes/PageRoutes";

// Import Components
import * as COMPONENT_ROUTES from "./routes/ComponentRoute";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path={PathRoutes.DASHBOARD}
            element={<PAGE_ROUTES.PRIVATE_ROUTE />}
          >
            <Route index element={<PAGE_ROUTES.DASHBOARD />} />
            {/* Student management routes start */}
            <Route
              path={PathRoutes.ENQUIRIES}
              element={<PAGE_ROUTES.ENQUIRIES />}
            />
            <Route
              path={PathRoutes.FEE_COLLECTION}
              element={<PAGE_ROUTES.FEE_COLLECTION />}
            />
            <Route
              path={PathRoutes.ADMISSIONS}
              element={<COMPONENT_ROUTES.LAYOUT />}
            >
              <Route index element={<PAGE_ROUTES.ADMISSIONS />} />
              <Route
                path={PathRoutes.NEW_ADMISSION}
                element={<PAGE_ROUTES.NEW_ADMISSIONS />}
              />
            </Route>
            <Route
              path={PathRoutes.PASSOUT}
              element={<PAGE_ROUTES.PASSOUT />}
            />
            {/* Student management routes end */}
            {/* Employee management routes start */}
            <Route
              path={PathRoutes.EMPLOYEES}
              element={<PAGE_ROUTES.TOTAL_EMPLOYEES />}
            />
            <Route
              path={PathRoutes.LEAD_DISTRIBUTION}
              element={<PAGE_ROUTES.LEAD_DISTRIBUTION />}
            />
            {/* Employee management routes end */}
            {/* Course routes start */}
            <Route path={PathRoutes.COURSES} element={<PAGE_ROUTES.COURSES />}>
              <Route
                path={PathRoutes.ADD_NEW_COURSE}
                element={<PAGE_ROUTES.ADD_NEW_COURSE />}
              />
            </Route>
            <Route
              path={PathRoutes.DEMO_CLASS}
              element={<PAGE_ROUTES.DEMO_CLASS />}
            />
            {/* Course routes end */}
            {/* Other routes start */}
            <Route
              path={PathRoutes.PROFILE}
              element={<COMPONENT_ROUTES.LAYOUT />}
            >
              <Route index element={<PAGE_ROUTES.PROFILE />} />
              <Route
                path={PathRoutes.EDIT_PROFILE}
                element={<PAGE_ROUTES.EDIT_PROFILE />}
              />
              <Route
                path={PathRoutes.CHANGE_PASSWORD}
                element={<PAGE_ROUTES.CHANGE_PASSWORD />}
              />
            </Route>
            <Route
              path={PathRoutes.SUPPORT}
              element={<PAGE_ROUTES.SUPPORT />}
            />
            {/* Other routes end */}
            {/* PageNot Found start */}
            <Route
              path={PathRoutes.ERROR_PAGE}
              element={<PAGE_ROUTES.ERROR />}
            />
            {/* PageNot Found end */}
          </Route>

          <Route path={PathRoutes.INVOICE} element={<PAGE_ROUTES.INVOICE />} />
          <Route path={PathRoutes.LOGIN} element={<PAGE_ROUTES.LOGIN />} />
          <Route
            path={PathRoutes.FORGOT_PASSWORD}
            element={<PAGE_ROUTES.FORGOT_PASSWORD />}
          />
          <Route
            path={PathRoutes.VARIFY_OTP}
            element={<PAGE_ROUTES.VARIFY_OTP />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
