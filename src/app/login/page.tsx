"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"
import { Button, Input } from "@medusajs/ui"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get("username")
    const password = formData.get("password")

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const from = searchParams.get("from") || "/"
      router.push(from)
      router.refresh()
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md  rounded-lg bg-white p-6 shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Dieser Shop unterliegt zurzeit der Entwicklung.
          </h2>
        </div>
      
      </div>
    </div>
  )
} 