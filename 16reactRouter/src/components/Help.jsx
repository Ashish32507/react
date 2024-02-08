import React  from "react";
import { useNavigate } from "react-router-dom";
function Help()
{
    const navigate = useNavigate();
    function clickHnadler()
    {
        navigate("/Login")
    }
    return(
        <>
            help Page
            <button onClick={clickHnadler}>Click To Move Login Page</button>
        </>
    )
}

export default Help;