import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
    background: #f4efe8;
    border-top: 1px solid #d8d4cf;

    > nav {
        display: flex;
        justify-content: center;
    } 
    > nav div { width: 1120px;}

  & ul {
    list-style: none;
    display: flex;

    li {
        width:25%;
        text-align:center;

        a {
            width: 100%;
            padding: 20px;
            display: inline-block;
            font-size: 1.2em;
        }
    }
    }
`;

const Nav = () => {
    return (
        <Navbar>
            <nav className="nav">
                <div className="navbarContainer">
                    <ul>
                        <li><a href="#">menu1</a></li>
                        <li><a href="#">menu1</a></li>
                        <li><a href="#">menu1</a></li>
                        <li><a href="#">menu1</a></li>
                    </ul>

                </div>
            </nav>
        </Navbar>
    )
}

export default Nav;