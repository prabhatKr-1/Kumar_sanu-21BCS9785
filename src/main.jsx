import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const AuthContext = createContext(null);

const AppWrapper = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [id, setId] = useState("");

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
