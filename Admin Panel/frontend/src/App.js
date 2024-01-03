import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/enquiryPage/Enquiries";
import Admissions from "./pages/admissionPage/Admissions";
import NewAdmission from "./pages/admissionPage/subPage/NewAdmission";
import TotalEmpolyees from "./pages/totalEmployeePage/TotalEmpolyees";
import LeadDistribution from "./pages/leadDistributionPage/LeadDistribution";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Support from "./pages/Support";
import ErrorPage from "./pages/ErrorPage";
import MyProfile from "./pages/profilePage/MyProfile";
import Layout from "./components/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import VarifyOtp from "./pages/VarifyOtp";
import EditProfile from "./pages/profilePage/subPage/EditProfile";
import Courses from "./pages/coursesPage/Courses";
import AddNewCourse from "./pages/coursesPage/subPage/AddNewCourse";
import FeeCollection from "./pages/feesPage/FeeCollection";
import Invoice from "./pages/Invoice";
import DemoClasses from "./pages/demoClassPage/DemoClasses";
import ChangePassword from "./pages/profilePage/subPage/ChangePassword";
import Passout from "./pages/passoutPage/Passout";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            {/* Student management routes start */}
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="feecollection" element={<FeeCollection />} />
            <Route path="admissions" element={<Layout />}>
              <Route index element={<Admissions />} />
              <Route path="newadmission" element={<NewAdmission />} />
            </Route>
            <Route path="passout" element={<Passout/>} />
            {/* Student management routes end */}
            {/* Employee management routes start */}
            <Route path="employees" element={<TotalEmpolyees />} />
            <Route path="lead-distribution" element={<LeadDistribution />} />
            {/* Employee management routes end */}
            {/* Course routes start */}
            <Route path="courses" element={<Courses/>} >
              <Route path="addnewcourse" element={<AddNewCourse/>} />
            </Route>
            <Route path="democlass" element={<DemoClasses/>} />
            {/* Course routes end */}
            {/* Other routes start */}
            <Route path="profile" element={<Layout />}>
              <Route index element={<MyProfile />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="changepassword" element={<ChangePassword />} />
            </Route>
            <Route path="support" element={<Support />} />
            {/* Other routes end */}
            {/* PageNot Found start */}
            <Route path="*" element={<ErrorPage />}></Route>
            {/* PageNot Found end */}
          </Route>

          <Route path="/invoice" element={<Invoice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/varifyotp" element={<VarifyOtp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
