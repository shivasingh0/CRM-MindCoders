import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavbarHeader from "./components/NavbarHeader";
import SidebarStart from "./components/SidebarStart";
import Dashboard from "./pages/Dashboard";
// import Enquery from "./pages/Enquery";
import FeesCollection from "./pages/FeesCollection";
import TeacherCreation from "./pages/TeacherCreation";
import Registrations from "./pages/Registrations";
import MyProfile from "./pages/MyProfile";
// import Login from './pages/Login';
import AddEnrollement from "./pages/AddEnrollement";
import AddCourses from "./pages/AddCourses";
import AddFollowup from "./pages/AddFollowup";
import CourseDetails from "./pages/CourseDetails";
import Enquiries from "./pages/Enquiries";
import Admissions from "./pages/Admissions";
import AddEnquiries from "./modals/AddEnquiries";

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
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/feescollection" element={<FeesCollection />} />
            <Route path="/teachecreation" element={<TeacherCreation />} />
            <Route path="/registration" element={<Registrations />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/addenrollement" element={<AddEnrollement />} />
            <Route path="/addcourses" element={<AddCourses />} />
            <Route path="/addfollowup" element={<AddFollowup />} />
            <Route path="/coursedetails" element={<CourseDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
