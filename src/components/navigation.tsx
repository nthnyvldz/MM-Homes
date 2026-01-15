import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/mm-logo.webp";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [sidebarOpen, setsidebarOpen] = React.useState(false);

  return (
    <nav className="bg-white px-8 py-4 flex justify-between lg:items-center top-0 left-0 right-0 z-50 shadow-md shadow-[#215E61]">
      {/* Navigation Bar - Non-Responsive */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center text-black">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        <div className="justify-between hidden lg:flex">
          <ul className="flex gap-8 text-sm">
            <li>
              <a href="#" className="hover:text-[#215E61] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#215E61] transition-colors">
                Listings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#215E61] transition-colors">
                Let's Move
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#215E61] transition-colors">
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Bar - Responsive */}
        {sidebarOpen && (
          <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center w-full h-full z-50">
            <div className="fixed lg:hidden top-0 right-0 z-40 w-72 h-dvh transition-transform sm:translate-x-0 bg-white">
              <div className="flex items-center mt-12">
                <button
                  onClick={() => setsidebarOpen(!sidebarOpen)}
                  className="px-3 py-2 border rounded text-black border-white hover:text-[#393E46] hover:border-white "
                >
                  <FontAwesomeIcon icon={faX} />
                </button>{" "}
              </div>

              <div className="h-full px-4 py-5 overflow-y-auto flex flex-col space-y-2">
                <ul className="text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-[#215E61] hover:underline 
                                        p-2 rounded-lg hover:bg-gray-100"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-[#215E61] hover:underline 
                                        p-2 rounded-lg hover:bg-gray-100"
                    >
                      Listings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-[#215E61] hover:underline 
                                        p-2 rounded-lg hover:bg-gray-100"
                    >
                      Let's Move
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-black hover:text-[#215E61] hover:underline 
                                        p-2 rounded-lg hover:bg-gray-100"
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setsidebarOpen(!sidebarOpen)}
          className="block lg:hidden px-3 py-2 border rounded text-black border-white hover:text-[#393E46] hover:border-white"
          data-testid="menu-button"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}
