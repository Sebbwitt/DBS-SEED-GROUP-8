import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

const storage = window.localStorage;

const Navbar = () => {
    function logout() {
        window.localStorage.removeItem('token');
        window.location.href = '/about';
    }

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">DBS SEED BANK</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                         </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    {window.localStorage.getItem('token')== null ? <button class="btn btn-outline-danger my-2 my-sm-0" > <Link  to="/login">Login Now!</Link></button> : null}
                    {window.localStorage.getItem('token')!= null ? <button class="btn btn-outline-danger my-2 my-sm-0" onClick={() => logout()}> Logout</button> : null}
                </form>
            </div>
        </nav>










        // <div>

        //     <nav className="navbar navbar-expand-lg navbar-light  bg-light">
        //         <a class="navbar-brand" >DBS SEED BANK</a>
        //         <Link className="navbar-brand" to="/">Home</Link>
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/">About Us</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/2">Page2</Link>
        //             </li>
        //         </ul>
        //         <form class="form-inline my-2 my-lg-0">
        //             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        //                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </nav>


        // </div>

        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <a class="navbar-brand" href="#">DBS SEED BANK</a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>

        //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav mr-auto">
        //             <li class="nav-item active">
        //                 <Link to="/">Home</Link>
        //                {/* <a class="nav-link" href="#">Home </a> */}
        //             </li>
        //             <li class="nav-item active">
        //                 <a class="nav-link" href="#">About Us </a>
        //             </li>
        //             <li class="nav-item active">
        //                 <a class="nav-link" href="#">About Us </a>
        //             </li>
        //         </ul>
        //     </div>

        //     <Route exact path="/" render={Home} />
        // </nav>



        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#link">Link</Nav.Link>
        //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //             </NavDropdown>
        //         </Nav>
        //         <Form inline>
        //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //             <Button variant="outline-success">Search</Button>
        //         </Form>
        //     </Navbar.Collapse>
        // </Navbar>
        // <div>
        //     <ul>
        //         <li>Somepage</li>
        //         <li>Somepage</li>
        //         <li>Somepage</li>
        //         <li>Somepage</li>
        //     </ul>
        // </div>
    )
}

export default Navbar;