import React from "react";
import SignUpForm from "layouts/SignUpForm";
import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";

const SignUp = () => {
    return (

        <div>
            <Navbar />
            <div style={{ margin: "0 auto", width: "1200px", marginTop: "60px", textAlign: "center" }}>
                <SignUpForm />
            </div>
            <Footer />

        </div>

    )
}

export default SignUp;
