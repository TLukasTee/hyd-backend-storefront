

import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline"

import DropdownNavMobile from "./DropDownNavMobile"
import DropdownNav from "./DropdownNav"





function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
   
    <div className="sticky top-0 inset-x-0 z-50 group bg-white">
        <p className="flex h-10 items-center justify-center bg-red-600 px-4 sm:text-sm text-xs font-medium text-white sm:px-6 lg:px-8">
          Neu in Österreich! Kostenloser Versand ab 75€ Bestellwert.
        </p>
          <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          
            <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
        
            <div className="flex items-center justify-between w-full lg:hidden">

            <div className="flex items-center">
              <DropdownNavMobile />
              

              {process.env.FEATURE_SEARCH_ENABLED && (
  <LocalizedClientLink
    className="6"
    href="/search"
    scroll={false}
    data-testid="nav-search-link"
  >
    <div className="flex items-center w-full">
    <MagnifyingGlassIcon className="h-6 w-6 text-neutral-500 relative left-2" />
    </div>
  </LocalizedClientLink>
)}
            </div>
            <LocalizedClientLink href="/" className="flex-1 flex justify-center">
              <img
                className="h-16 w-auto"
                src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
                alt=""
              />
            </LocalizedClientLink>
            <div className="flex items-center">
              <a href="account" className="mr-4">
                <UserIcon className="h-6 w-6 text-neutral-800" />
              </a>
              <Suspense fallback={<div className="h-6 w-6" />}>
                <CartButton />
              </Suspense>
            </div>
            </div>
            <LocalizedClientLink href="/" className="hidden sm:flex">
              <img
                className="h-16 w-auto"
                src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
                alt=""
              />
            </LocalizedClientLink>
              <DropdownNav />
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
             
                </div>
                <div className=" lg:ml-6 hidden sm:flex ">
                {process.env.FEATURE_SEARCH_ENABLED && (
  <LocalizedClientLink
    className="relative block w-full sm:w-96"
    href="/search"
    scroll={false}
    data-testid="nav-search-link"
  >
    <div className="flex items-center w-full">
      <MagnifyingGlassIcon className="absolute left-3 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Suche nach Protein, Nahrung..."
        className="w-full py-2 pl-10 pr-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        readOnly
      />
    </div>
  </LocalizedClientLink>
)}
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/AT.svg"
                      alt=""
                      className="block h-auto w-7 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">AT</span>
                    <span className="sr-only">, Land ändern</span>
                  </a>
                </div>

                {/* Search */}
                <div className="hidden sm:flex "> 
                <div className="ml-2 flow-root lg:mx-4">
                  <a href="/account" className="group  flex items-center p-2">
                    <UserIcon
                      className="h-8 w-8 flex-shrink-0 text-neutral-700 group-hover:text-gray-800"
                      aria-hidden="true"
                    />
            
                    <span className="sr-only">Produkte im Warenkorb</span>
                  </a>
                </div>
                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base flex gap-2 "
                      href="/cart"
                    >
                      Warenkorb
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
              </div>
              </div>
            </nav>
      </header>
    </div>
  )
}
