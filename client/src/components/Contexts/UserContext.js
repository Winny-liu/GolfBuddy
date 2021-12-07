import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setStatus("idle");
        setUser(data.data);
      })
      .catch((err) => {
        setStatus("err");
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        status,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
