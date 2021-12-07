import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);

  return (
    <CurrentUserContext.Provider
      value={{
        status,
        setStatus,
        user,
        setUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
