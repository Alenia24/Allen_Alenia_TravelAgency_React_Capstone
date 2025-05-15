import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Import react boostrap and CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Pages
import HomePage from "./pages/HomePage/HomePage";
import Destination from "./pages/Destinations/Destinations";
import DestinationItem from "./pages/DestionationItem/DestinationItem";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard/AdmimDashboard";
import EditDestination from "./pages/EditDestination/EditDestination";
import NewDestination from "./pages/NewDestination/NewDestination";
import BookingPage from "./pages/BookingPage/BookingPage";
import AdminTripDetails from "./components/AdminTripDetails/AdminTripDetails";
import RestrictedPage from "./pages/RestrictedPage/RestrictedPage";

function App() {
  // Resources https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
  // Create private routes that
  const PrivateRoutes = ({requiredRole}) => {
    // Check to see if an access token is stored in local storage
    const token = localStorage.getItem("accessToken");
    // Get the user role 
    const role = localStorage.getItem("role");

    // If no token send to the login page should change to unauthorized
    if (!token) return <Navigate to="/restricted" />;

    // If the user role is not the required role 
    if (role !== requiredRole) {
      return <Navigate to="/login" />;
    }

    return <Outlet/>
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destinations/:id" element={<DestinationItem />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/restricted" element={<RestrictedPage />} />
        {/* //Admin routes */}
        <Route element={<PrivateRoutes requiredRole="admin" />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/editDestinations/:id" element={<EditDestination />} />
          <Route
            path="/admin-trip-details/:id"
            element={<AdminTripDetails />}
          />
          <Route path="/new-destination" element={<NewDestination />} />
        </Route>

        {/* <Route path="*" element={<NoFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
