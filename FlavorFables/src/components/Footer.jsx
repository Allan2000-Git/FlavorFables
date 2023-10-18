import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full py-2 bg-[var(--secondary-color)] text-[var(--text-color)]">
            <div className="max-w-[1120px] mx-auto flex items-center justify-between">
                <div>
                    <img className="rounded-lg w-[80px]" src="../src/assets/FlavorFables-logos_transparent.png" alt="FlavorFables logo" />
                </div>
                <div>
                    <p>Copyright &copy; {new Date().getFullYear} FlavorFables. All rights reserved. Bon appétit 🧑‍🍳</p>
                </div>
                <div>
                    <div className="flex flex-wrap space-x-4 ">
                        <a className="social-icons" href="#"><FaInstagram size="20px" /></a>
                        <a className="social-icons" href="#"><FaYoutube size="20px" /></a>
                        <a className="social-icons" href="#"><FaTwitter size="20px" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer