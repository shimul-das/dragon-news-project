import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../../Home/Home/Qzone/QZone';
import bannerimg from "../../../assets/bg1.png"

const RightNav = () => {
return (
<div>
    <div>
        <h4>Login With</h4>
        <Button className='m-2 p-3' variant="outline-primary">
            <FaGoogle className='me-2'></FaGoogle> Login with Google
        </Button>
        <Button className='m-2 p-3' variant="outline-success">
            <FaGithub className='me-2'></FaGithub>Login with Github
        </Button>
    </div>
    <div>
        <h4>Find Us On</h4>
        <ListGroup>
            <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
            <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
            <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
        </ListGroup>
    </div>
    <QZone></QZone>
    <div className='p-3'>
        <img src={bannerimg} alt="" />
    </div>
</div>
)
}

export default RightNav