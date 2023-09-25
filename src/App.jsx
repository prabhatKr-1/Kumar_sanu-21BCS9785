import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./main"; 
import Header from "./components/Header";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Weather from "./pages/Weather";
import Search from "./pages/Search";
import "./styles/header.css";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";

function App() {
  const { isAuth } = useContext(AuthContext);
  const PrivateRoute = ({ element }) => {
    if (isAuth) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/weather" element={<Weather />} />
        <Route
          path="/search/:query"
          element={<PrivateRoute element={<Search />} />}
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
