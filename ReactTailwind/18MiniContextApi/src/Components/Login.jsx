import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext); // Corrected 'userContext' to 'UserContext'
    
    function handleSubmit(e) {
        e.preventDefault();
        setUser({ userName, password }); // Passing an object with userName and password
    }
    
    return (
        <div>
            <h2>Login</h2> {/* Corrected 'Logn' to 'Login' */}
            <input 
                type="text" 
                placeholder="User Name" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
            />
            {"  "}
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button> {/* Changed 'handler' to 'handleSubmit' */}
        </div>
    );
}

export default Login;
