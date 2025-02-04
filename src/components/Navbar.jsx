import { IoChevronDown } from "react-icons/io5";
import Button from "./Button";
import { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";


const Navbar = () => {
    // function that sets and updates the nav icons
    const [nav, setNav] = useState(false);
    // function to toggle nav between hamburger and close
    const toggleNav = () => {
        setNav(!nav);
    };
   

  return (
     <nav className="w-full absolute left-0 mt-10 z-2">
        <div className="w-3/4 mx-auto flex justify-between items-center">

            <div className="flex items-end">
                <h1 className="font-extrabold text-4xl text-white">Blogr</h1>

                <ul className="hidden ml-12 gap-6 text-white md:flex">
                    <div className="flex items-center">
                        <a href="/">Product</a>
                        <IoChevronDown className="ml-1" />
                    </div>
                    <div className="flex items-center">
                        <a href="/">Company</a>
                        <IoChevronDown className="ml-1" />
                    </div>
                    <div className="flex items-center">
                        <a href="/">Connect</a>
                        <IoChevronDown className="ml-1" />
                    </div>
                
                </ul>
            </div>

            <div className="space-x-4 hidden md:flex ">
                <Button 
                    label="Login"
                    className="text-white font-bold"
                />
                <Button 
                    label="SignUp"
                    className="px-6 py-2 text-[var(--color-neutral-white)] rounded-full 
                    bg-[var(--color-primary-red)] hover:bg-[var(--color-red-hover)] font-bold text-sm"
                    
                />

            </div>
                {/* Hamburger menu and close menu for mobile navigation */}
            <button onClick={toggleNav} className="md:hidden cursor-pointer">
                {nav ? 
                (<img src={close} /> ) 
                : (<img src={hamburger} />)}
            </button>
        </div>

        {/* Mobile menu links */}
        <div>
            {
                nav ? (
                    <ul className="flex flex-col gap-6 text-black md:hidden bg-[var(--color-neutral-white)]
                    w-[80%] h-[500px] mx-auto rounded-lg items-center mt-4 transition-transform duration-200 delay-300 
                    ease-in-out shadow-2xl">
                        <div className="flex items-center mt-12">
                            <a>Product</a>
                            <IoChevronDown className="ml-1 text-red-400" />
                        </div>
                        <div className="flex items-center">
                            <a>Company</a>
                            <IoChevronDown className="ml-1 text-red-400" />
                        </div>
                        <div className="flex items-center">
                            <a>Connect</a>
                            <IoChevronDown className="ml-1 text-red-400" />
                        </div>
                        <div className="space-y-4 flex flex-col md:hidden">
                            <Button 
                                label="Login"
                                className=""
                            />
                            <Button 
                                label="SignUp"
                                className="px-6 py-2 text-[var(--color-neutral-white)] rounded-full 
                                bg-[var(--color-primary-red)] hover:bg-[var(--color-red-hover)] font-bold text-sm"
                                
                            />

                        </div>
                
                    </ul>
                    
                ) : (
                    null
                )
            }
        </div>
     </nav>
  )
}

export default Navbar