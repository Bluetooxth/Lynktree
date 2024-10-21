"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};