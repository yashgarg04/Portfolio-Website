import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { links } from '../../data';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <h2 className='text-3xl font-bold'>
                Port<span className='text-emerald-600'>folio</span>
              </h2>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {
                    links.map((link) => {
                      const { id, href, text } = link;
                      return (
                        <a
                          key={id}
                          href={href}
                          className='capitalize px-3 py-2 rounded-md text-lg font-medium tracking-wide hover:text-white hover:bg-emerald-500 duration-300'
                        >
                          {text}
                        </a>
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-emerald-100 inline-flex items-center justify-center p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FaBars className="block h-8 w-8 text-emerald-500" aria-hidden="true" strokeWidth={5} strokeLinecap='round' strokeLinejoin='round' />               
                ) : (
                  <FaXmark className="block h-8 w-8 text-emerald-500" aria-hidden="true" strokeWidth={5} strokeLinecap='round' strokeLinejoin='round' />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {
                    links.map((link) => {
                      const { id, href, text } = link;
                      return (
                        <a
                          key={id}
                          href={href}
                          className='block capitalize px-3 py-2 rounded-md text-lg font-medium tracking-wide hover:text-white hover:bg-emerald-500 duration-300'
                        >
                          {text}
                        </a>
                      );
                    })
                  }
              </div>
            </div>
          )}
        </Transition>
      </nav>

  );

};

export default Navbar;
