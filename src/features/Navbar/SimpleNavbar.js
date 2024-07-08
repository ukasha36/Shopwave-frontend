import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const SimpleNavbar = ({children}) => {
  return (
    <div className="min-h-full">
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold tracking-tight text-white">ShopWave</h1>

            </div>
       
          </div>
     
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
     
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
     
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
           
  
          </div>
    
        </div>
      </DisclosurePanel>
    </Disclosure>

 
    <main className='bg-[#f3f4f6]'>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {children}
        
        </div>
    </main>
  </div>
  );
};

export default SimpleNavbar;