"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

const SideNavBar = () => {

     

    const current=usePathname();

    return (
        <div className="fixed top-0 mb-14 z-50 w-full">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={'/'}>Home</Link></li> 
                            <li><Link href={'/projects'}>Projects</Link></li> 
                            <li><Link href={'/service'}>Service</Link></li>
                            <li><Link href={'/team'}>Team</Link></li>
                            <li><Link href={'/testimonials'}>Testimonials</Link></li>
                         
                         
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Babul's</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                            <li><Link href={'/'}>Home</Link></li> 
                            <li><Link href={'/projects'}>Projects</Link></li> 
                            <li><Link href={'/service'}>Service</Link></li>
                            <li><Link href={'/team'}>Team</Link></li>
                            <li><Link href={'/testimonials'}>Testimonials</Link></li>
                             
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
             </div>
             
        </div>
    );
};
export default SideNavBar;