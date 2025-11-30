import { useState } from "react"
import { Link } from "react-router-dom"
import { styles } from './../../style.js'
import { navLinks } from '../constants';
import { logo, menu, close } from "../assets/index.js";
export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary h-20 `}>
      <div className="w-full flex justify-between items-center max-w-7xl  mx-auto ">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

          <img src={logo} alt="logo" className="w-13 h-13 object-contain sm:translate-x-45 translate-x-0 rounded-full" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex  sm:translate-x-45 translate-x-0"> &nbsp;  Aditya &nbsp;<span className="sm:block hidden font-bold  "> |&nbsp; Mern Developer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 -translate-x-5 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
        ${active === link.title ? "text-white" : "text-secondary"}
        hover:text-white text-[18px] font-medium cursor-pointer
      `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center !mr-5">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} 
            black-gradient p-6 absolute top-20 right-4 mx-4 my-2 min-w-40
            z-10 rounded-xl flex-col gap-4`}
          >

            <ul className="list-none flex flex-col items-center justify-center gap-4 h-[150px]">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} 
          font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>



      </div>
    </nav>
  )
}
