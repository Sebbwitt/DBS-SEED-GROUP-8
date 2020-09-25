import React from "react";

import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <img class="d-block w-100" src="..." alt="First slide"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;