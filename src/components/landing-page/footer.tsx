import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-white-300 pt-10">
            <div className="bg-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* About Us */}
                        <div className="space-y-4">
                            <h2 className="text-black text-lg font-semibold">About Us</h2>
                            <p className="text-black-300">
                                We are a leading software solution dedicated to addressing the critical need for secure password management within organizations. Our innovative application provides a user-friendly interface for managing passwords securely, reducing reliance on elevated privileges and minimizing the risk of data breaches.
                            </p>
                        </div>

                        {/* Site Map */}
                        <div className="space-y-4">
                            <h2 className="text-black text-lg font-semibold">Site Map</h2>
                            <ul className="text-black-300">
                                <li><Link to="/" className="hover:text-gray">Home</Link></li>
                                <li><Link to="/about" className="hover:text-gray">About</Link></li>
                                <li><Link to="/projects" className="hover:text-gray">Our Projects</Link></li>
                                <li><Link to="/contact" className="hover:text-gray">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-4">
                            <h2 className="text-black text-lg font-semibold">Follow Us</h2>
                            <div className="flex space-x-4">
                                <Link to="#" className="text-gray-300 hover:text-black">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="#" className="text-gray-300 hover:text-black">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to="#" className="text-gray-300 hover:text-black">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="#" className="text-gray-300 hover:text-black">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
                        <p className="text-black-300">© 2024 OPSHELLS . All rights reserved.</p>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-black-300 hover:text-black">
                                Privacy Policy
                            </Link>
                            <Link to="#" className="text-black-300 hover:text-black">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

