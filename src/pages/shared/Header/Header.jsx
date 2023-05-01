import React, { useContext } from 'react'
import logo from './../../../assets/logo.png';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { authcontext } from '../../../Providers/AuthProvider';
import NavigationBar from '../NavigationBar/NavigationBar';


const Header = () => {
return (
<Container>
    <div className='text-center'>
        <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
    <div className='d-flex bg-secondary p-2 fw-bold fs-5'>
        <Button variant="danger">Latest</Button>
        <Marquee className='text-danger' speed={50}>
            I can be a React component, multiple React components, or just some text.
        </Marquee>
    </div>
    <NavigationBar></NavigationBar>
</Container>
)
}

export default Header