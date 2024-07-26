import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[50vh]">
    <h1 className="font-bold  text-2xl rounded-3xl mt-4 sm:text-4xl  ">Du hast dich verlaufen :(</h1>
    <p className="text-lg font-semibold">
      Diese Seite existiert leider nicht.
    </p>
    <Link href="/" className="bg-red-600 text-white px-8 hover:bg-red-500 py-3 text-sm rounded-3xl mt-4 sm:text-base " >Zurück zum Shop</Link>
  </div>
  )
}
