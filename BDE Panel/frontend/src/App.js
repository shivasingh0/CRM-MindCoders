import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavbarHeader from "./components/NavbarHeader";
import SidebarStart from "./components/SidebarStart";
import Dashboard from "./pages/Dashboard";
// import Enquery from "./pages/Enquery";
// import Registrations from "./pages/Registrations";
import MyProfile from "./pages/MyProfile";
// import Login from './pages/Login';
import AddEnrollement from "./pages/AddEnrollement";
import AddFollowup from "./pages/AddFollowup";
import Enquiries from "./pages/studentManagement/Enquiries";
import Admissions from "./pages/studentManagement/Admissions";
import AddEnquiries from "./modals/AddEnquiries";
import TotalStudents from "./pages/studentManagement/TotalStudents";
import TotalEmpolyees from "./pages/employeeManagement/TotalEmpolyees";
import Teams from "./pages/employeeManagement/Teams";
import LeadDistribution from "./pages/employeeManagement/LeadDistribution";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarHeader />
        <Header />
        <SidebarStart />
        <div className="content-body">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/enquiries" element={<Enquiries />} >
              <Route path="addenquiries" element={ <AddEnquiries/> } />
              </Route>
            {/* <Route path="/enquery" element={<Enquery />} /> */}
            <Route path="/students" element={<TotalStudents />} />
            <Route path="/employees" element={<TotalEmpolyees />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/lead-distribution" element={<LeadDistribution />} />
            <Route path="/admissions" element={<Admissions />} />
            {/* <Route path="/registration" element={<Registrations />} /> */}
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/addenrollement" element={<AddEnrollement />} />
            <Route path="/addfollowup" element={<AddFollowup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
