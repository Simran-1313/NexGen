import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const FooterMotion = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const options = [
    { value: 'India', label: 'India' },
    { value: 'U.S.A', label: 'U.S.A' },
    { value: 'Canada', label: 'Canada' },
  ]
  return (
    <div className="w-full px-0 pt-16">
      <div className="mx-auto w-full  bg-[#212731] p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#212731] px-4 py-2 text-left text-sm font-medium text-white hover:bg-black/60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Categories</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 ,ease: 'easeOut'}}
                    className="px-4 pb-2 pt-4 text-sm text-gray-500"
                  >
                    <ul>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Web Builder </a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Hearing</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Data Center</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Robotic-Automation</a></li>
        </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#212731] px-4 py-2 text-left text-sm font-medium text-white hover:bg-black/60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Contact</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 ,ease: 'easeOut'}}
                    className="px-4 pb-2 pt-4 text-sm text-gray-500"
                  >
                    <ul>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Contact</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Privacy Policy</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Terms Of Service</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Categories</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>About</a></li>
        </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
        {/* <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#212731] px-4 py-2 text-left text-sm font-medium text-white hover:bg-black/60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Country</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 ,ease: 'easeOut'}}
                    className="px-4 pb-2 pt-4 text-sm text-gray-500"
                  >
                    <ul>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>India</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>U.S.A</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Canade</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Mexico</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Norway</a></li>
        </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure> */}
        <div className='flex justify-around  h-[30%] w-[20%] ml-9 pl-6 text-sm mb-10 mt-4'>
    <option value="" className='text-white bg-[#212731] text-lg sm:text-sm font-semibold mr-8 ' >Country</option>
          <select className='bg-[#212731] text-white ' value={selectedOption} onChange={handleOptionChange}>
           
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

    </div>
      </div>
    </div>
  )
}

export default FooterMotion