// import React, { useEffect } from "react";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import  "./header.css"
import { Link, useNavigate} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { } from "react-router-dom";
// import { logout } from "../actions/userActions";

function Header() {
    // const dispatch = useDispatch();
    const Navigate = useNavigate();
    // const userLogin = useSelector((state) => state.userLogin);
    // const { userInfo } = userLogin;

    // const logoutHandler = () => {
    //     dispatch(logout());
    // };

    // useEffect(() => { }, [userInfo]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        ProKhelo App
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                                    <Link to="/alluser">
                                        All User
                                    </Link>
                         </Nav.Link>
                            
                        <NavDropdown
                                    title="Ankit pandey"
                                    id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                <Link to="/updateprofile">
                                    My Profile
                                </Link>
                                </NavDropdown.Item>
                                 <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => {
                                localStorage
                                    .removeItem("userInfo");
                                Navigate("/");
                            }}>
                                <Link to="#action/3.4">
                                    Logout
                                </Link>
                                    </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;