import React from "react";
import UserContext from "./UserContext"; // assuming UserContext is properly exported from "./UserContext"

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
