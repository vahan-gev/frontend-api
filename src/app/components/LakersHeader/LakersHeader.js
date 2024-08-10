import {FaInstagram, FaSearch} from "react-icons/fa";
import {FaEnvelope, FaFacebook, FaMessage, FaSnapchat, FaTiktok, FaXTwitter, FaYoutube} from "react-icons/fa6";

export default function LakersHeader() {
    return (
        <div className="px-20 bg-[#232323]">
            <nav className="flex justify-between mx-auto max-w-screen-xxl px-4 py-2">
                <div className="flex">
                    <a href="/" className="mr-2.5">
                        <img src="/assets/img/lakers_70x70.svg" className="lakers-header-logo" alt="Los Angeles Lakers"/>
                    </a>
                    <div className="flex justify-between">
                        <div className="hidden lg:flex px-4 items-center border-r-[0.5px] border-r-black">
                            <ul className='flex xl:gap-4 lg:gap-2'>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block font-extrabold uppercase xl:text-base lg:text-sm">News and
                                        Media</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block font-extrabold uppercase xl:text-base lg:text-sm">Team</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block font-extrabold uppercase xl:text-base lg:text-sm">Schedule</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block font-extrabold uppercase xl:text-base lg:text-sm">Tickets</a>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden lg:flex px-4 items-center border-r-[0.5px] border-r-black">
                            <ul className='flex xl:gap-4 lg:gap-2'>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block xl:text-base lg:text-sm">Laker Girls</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block xl:text-base lg:text-sm">Community</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block xl:text-base lg:text-sm">Store</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block xl:text-base lg:text-sm">Connect</a>
                                </li>
                                <li className='hidden lg:block'>
                                    <a href="/"
                                       className="text-nowrap text-white block xl:text-base lg:text-sm">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4 px-4 lakers-header-icons">
                            <FaFacebook color="white" size={25} />
                            <FaXTwitter color="white" size={25} />
                            <FaInstagram color="white" size={25} />
                            <FaYoutube color="white" size={25} />
                            <FaTiktok color="white" size={25} />
                            <FaSnapchat color="white" size={25} />
                            <FaEnvelope color="white" size={25} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <FaSearch color="white" size={25} />
                </div>
            </nav>
        </div>
    );
}
