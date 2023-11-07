import React from 'react';
import { FaDiaspora, FaFacebook, FaFacebookF, FaSquareTwitter, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
      return (
            <footer className="px-4 divide-y bg-gray-800 text-gray-100 mt-16">
                  <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                        <div className="lg:w-1/3">
                              <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E31C25]">
                                    <FaDiaspora className='text-black'></FaDiaspora>
                                    </div>
                                    <span className="self-center text-2xl font-semibold text-[#E31C25]">FitnesHomE</span>
                              </a>
                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                              <div className="space-y-3">
                                    <h3 className="tracki uppercase text-gray-50">Product</h3>
                                    <ul className="space-y-1">
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Features</a>
                                          </li>
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Integrations</a>
                                          </li>
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Pricing</a>
                                          </li>
                                          <li>
                                                <a rel="noopener noreferrer" href="#">FAQ</a>
                                          </li>
                                    </ul>
                              </div>
                              <div className="space-y-3">
                                    <h3 className="tracki uppercase text-gray-50">Company</h3>
                                    <ul className="space-y-1">
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Privacy</a>
                                          </li>
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                          </li>
                                    </ul>
                              </div>
                              <div className="space-y-3">
                                    <h3 className="uppercase text-gray-50">Developers</h3>
                                    <ul className="space-y-1">
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Public API</a>
                                          </li>
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Documentation</a>
                                          </li>
                                          <li>
                                                <a rel="noopener noreferrer" href="#">Guides</a>
                                          </li>
                                    </ul>
                              </div>
                              <div className="space-y-3">
                                    <div className="uppercase text-gray-50">Social media</div>
                                    <div className="flex justify-start space-x-3">
                                          <FaFacebookF className='text-2xl text-[#E31C25]'></FaFacebookF>
                                          <FaTiktok className='text-2xl text-[#E31C25]'></FaTiktok>
                                          <FaSquareTwitter className='text-2xl text-[#E31C25]'></FaSquareTwitter>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="py-6 text-sm text-center text-[#E31C25]">© FitnesHomE. All rights reserved.</div>
            </footer>
      );
};

export default Footer;