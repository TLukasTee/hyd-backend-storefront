
'use client'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,

} from '@headlessui/react'


import Image from 'next/image';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Unser Sortiment',
      featured: [
        {
          name: 'NEU! | VITALSTOFFE ',
          href: '/at/cat-vitalstoffe',
          imageSrc: 'https://res.cloudinary.com/dd0kypcrk/image/upload/v1720087687/Hydro_Whey_Vanille_g9fj2w.png',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Z-NUTRITION | HYDRO WHEY',
          href: '/at/cat-proteine',
          imageSrc: 'https://res.cloudinary.com/dd0kypcrk/image/upload/v1719408230/Design_ohne_Titel_1280x1280_skbzp5.svg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Vitalstoffe ',
          items: [
            { name: 'Magensium', href: '/products/magnesium-citrate' },
            { name: 'Omega 3', href: '/products/Omega3softgels' },

          ],
        },
        {
          id: 'accessories',
          name: 'Proteine ',
          items: [
            { name: 'Hydro Whey Vanille Eis', href: '/products/hydro-whey-vanille-eis' },
            { name: 'Hydro Whey Banane', href: '/products/hydro-whey-banane' },
            { name: 'Hydro Whey Erdbeere', href: '/products/hydro-whey-erdbeere' },
          ],
        },
        {
          id: 'brands',
          name: 'Zusatzstoffe',
          items: [
            { name: 'Gorilla Pre Workout', href: '/products/preworkout-gorilla-zilime' },

          ],
        },
      ],
    },


  ],
  pages: [

    { name: 'Über Uns', href: '/agbs' },
    { name: 'Kontakt', href: '/impressum' },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DropdownNav() {


  return (
    <div>
      <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          {navigation.categories.map((category) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex ">
                    <PopoverButton
                      className={classNames(
                        open
                          ? 'border-red-600 text-red-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800  ',
                        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-bold transition-colors duration-200 ease-out uppercase tracking-wide',
                      )}
                    >
                      {category.name}
                    </PopoverButton>
                  </div>

                  <PopoverPanel
                    transition
                    className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group relative text-base sm:text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 ">
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    width={400}
                                    height={400}
                                    className="object-cover object-center hover:opacity-75"
                                  />
                                </div>
                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                  {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Jetzt bestellen
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p id={`${section.name}-heading`} className="font-extrabold uppercase tracking-wide text-gray-900">
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${section.name}-heading`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a href={item.href} className="hover:text-gray-800">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          ))}

          {navigation.pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm  text-gray-700 hover:text-gray-800  font-bold transition-colors duration-200 ease-out uppercase tracking-wide"
            >
              {page.name}
            </a>
          ))}
        </div>
      </PopoverGroup>


    </div>
  )
}
