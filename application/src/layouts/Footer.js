import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer class="mainfooter" role="contentinfo">
            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">

                            <div class="footer-pad">
                                <h4>DBS BANKING</h4>
                                <ul class="list-unstyled">
                                    <li><a href="#"></a></li>
                                    <li><a href="https://www.dbs.com/about-us/default.page?pid=sg-group-pweb-footer-about-us#">About</a></li>
                                    <li><a href="https://www.dbs.com/media/default.page?pid=sg-group-pweb-footer-media">Media</a></li>
                                    {/* <li><a href="#">Forms</a></li>
                                    <li><a href="#">News and Updates</a></li>
                                    <li><a href="#">FAQs</a></li> */}
                                </ul>
                            </div>
                        </div>
                        {/* <div class="col-md-3 col-sm-6">

                            <div class="footer-pad">
                                <h4>Heading 2</h4>
                                <ul class="list-unstyled">
                                    <li><a href="#">Website Tutorial</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Disclaimer</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Webmaster</a></li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div class="col-md-3 col-sm-6">

                            <div class="footer-pad">
                                <h4>Heading 3</h4>
                                <ul class="list-unstyled">
                                    <li><a href="#">Parks and Recreation</a></li>
                                    <li><a href="#">Public Works</a></li>
                                    <li><a href="#">Police Department</a></li>
                                    <li><a href="#">Fire</a></li>
                                    <li><a href="#">Mayor and City Council</a></li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div class="col-md-3">
                            <h4>Follow Us</h4>
                            <ul class="social-network social-circle">
                                <li><a href="https://www.facebook.com/dbs.sg/?brand_redir=21282830280" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/dbs-bank/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 copy">
                            <p class="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;