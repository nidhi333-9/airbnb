import logo from "../assets/Group.svg";


const Navbar = () => {
    return (
        <>
            <nav className="h-20 bg-white">

                <img className="px-5 py-7 md:px-14" src={logo} />
            </nav>
        </>
    )
}

export default Navbar;