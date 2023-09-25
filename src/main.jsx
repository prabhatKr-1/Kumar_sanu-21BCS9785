import React, { createContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const AuthContext = createContext(null);

const AppWrapper = () => {
  const initialAuthState = localStorage.getItem("isAuthenticated") === "true";
  const [isAuth, setIsAuth] = useState(initialAuthState);
  const [id, setId] = useState("");
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuth.toString());
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        id,
        setId,
      }}
    >
      <App />
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
