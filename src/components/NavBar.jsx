
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (

        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src='../typing.png' className="mr-3 h-6 sm:h-9" alt="TypingCast Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TypingCast</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Link to="/typing-test">
                <Button>Get started</Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="about-us">About</Navbar.Link>
                {/* <Navbar.Link href="#">Services</Navbar.Link> */}
                {/* <Navbar.Link href="#">Pricing</Navbar.Link> */}
                <Navbar.Link href="/contact-us">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar