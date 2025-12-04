import { useState } from "react";

function LoginLogout(){
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    function handleLogin(){
        setIsLoggedIn(true);
    }

    function handleLogout(){
        setIsLoggedIn(false);
    }
    return(
        <div>
            { isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ):(
                <button onClick={handleLogin}>Login</button>
            )}
            <h3>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h3>
        </div>
    )
}
export default LoginLogout;