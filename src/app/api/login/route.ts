import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password'

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Set auth cookie
    cookies().set('auth_token', `${username}:${password}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 hours
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  )
} 