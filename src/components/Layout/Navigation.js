import { Navbar, Nav, Icon} from 'rsuite';
import React from "react";
import {Link} from "react-router-dom";


const Navigation = () => {

    return (
        <Navbar>

            <Navbar.Body>
                <Nav>
                    <Nav.Item
                        to={"/"} componentClass={Link}
                        icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item
                        to={"/all"} componentClass={Link}>
                        All Products
                    </Nav.Item>
                    <Nav.Item
                        to={"/due"} componentClass={Link}
                        icon={<Icon icon="exclamation-circle2" />}>
                        Due
                    </Nav.Item>
                    <Nav.Item
                        to={"/expired"} componentClass={Link}
                        icon={<Icon icon="ban" />}>
                        Expired
                    </Nav.Item>
                </Nav>
                <Nav pullRight>

                    <Nav.Item
                        to={"/config"} componentClass={Link}
                        icon={<Icon icon="cog" />}>
                        Config
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

export default Navigation;
