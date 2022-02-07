import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Header(){
    return <div>
        <Navbar bg="dark" varient="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto nav_bar_wrapper">             
                 <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
}
export default Header