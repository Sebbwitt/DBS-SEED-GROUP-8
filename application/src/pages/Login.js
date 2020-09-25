import React from "react";

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Username:
                    <input type="text" name="username"/>
                </label>
                <br/>
                <label>Password:
                    <input type="password" name="password"/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
                <br/>
                Forgot password?
            </form>
        </div>
    )
}

export default Login;