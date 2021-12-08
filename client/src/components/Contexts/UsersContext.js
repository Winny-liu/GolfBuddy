import React, { createContext, useState, useEffect} from "react";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  
  const [users, setUsers] = useState([]);
  const [usersStatus, setUsersStatus] = useState("loading");

  useEffect(() => {
    // get all users

    setUsersStatus("loading")
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setUsersStatus("idle");
      });
  }, []);

  return (
    <UsersContext.Provider
      value={{
        usersStatus,
        setUsersStatus,
        users,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
