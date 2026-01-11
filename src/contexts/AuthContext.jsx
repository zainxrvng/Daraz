import { createContext, useContext, useState, useEffect } from "react";
import { tryLogin } from "../utils/auth";
import { getUsers, saveUser} from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {phone,email,password}

  useEffect(() => {
    // auto-login if token exists (optional)
    const raw = localStorage.getItem("daraz_current");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = (cred) => {
    const u = tryLogin(cred);
    if (u) {
      localStorage.setItem("daraz_current", JSON.stringify(u));
      setUser(u);
      return true;
    }
    return false;
  };

  const register = (cred) => {
    saveUser(cred); // utils/auth.js
    localStorage.setItem("daraz_current", JSON.stringify(cred));
    setUser(cred);
  };

  const logout = () => {
    localStorage.removeItem("daraz_current");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
