import Link from "next/link";
import Logo from "../../public/assets/pages/logo.webp"
import Image from "next/image";

const Header = () => {
    return (
        <div className="navigation">
            <div className="logo" >
                <Image
                    src={Logo}
                    alt="Logo"
                    priority
                />
            </div>
            <nav className="" >
                <ul className="navigation-list" >
                    <li><Link className="navigation-link" href='/home' >Home</Link></li>
                    <li><Link className="navigation-link" href='/blog' >Blog</Link></li>
                    <li><Link className="navigation-link" href='/about' >About</Link></li>
                    <li><Link className="navigation-link" href='/contact' >Contact</Link></li>
                </ul>
            </nav>
            <div>
            </div>
        </div>
    )
}

export default Header;