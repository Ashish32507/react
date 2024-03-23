import React from "react";
import { useContext } from "react";
import userContext from "../Context/UserContext";

function Profile(){
    const {user} = useContext(userContext);
    if(!user)
    {
        return <div>please Login</div>
    }
    return(
        <div>
            Welcome
        </div>
    )
}

export default Profile;