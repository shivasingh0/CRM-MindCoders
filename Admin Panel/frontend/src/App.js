import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import NavbarHeader from "./components/NavbarHeader";
import SidebarStart from "./components/SidebarStart";

// Pages
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/studentManagement/Enquiries";
import Admissions from "./pages/studentManagement/Admissions";
import TotalStudents from "./pages/studentManagement/TotalStudents";
import NewAdmission from "./pages/studentManagement/subPage/NewAdmission";
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
            {/* Student management routes start */}
            <Route path="/students" element={<TotalStudents />} />
            <Route path="/enquiries" element={<Enquiries />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="newadmission" element={<NewAdmission />} />
            {/* Student management routes end */}
            {/* Employee management routes start */}
            <Route path="/employees" element={<TotalEmpolyees />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/lead-distribution" element={<LeadDistribution />} />
            {/* Employee management routes end */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
