"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = () => {
  const searchParams = useSearchParams()
  const [currentView, setCurrentView] = useState<LOGIN_VIEW>(LOGIN_VIEW.SIGN_IN)

  useEffect(() => {
    const view = searchParams.get('view')
    if (view === LOGIN_VIEW.REGISTER) {
      setCurrentView(LOGIN_VIEW.REGISTER)
    }
  }, [searchParams])

  return (
    <div className="w-full flex justify-start px-8 py-8">
      {currentView === LOGIN_VIEW.SIGN_IN ? (
        <Login setCurrentView={setCurrentView} />
      ) : (
        <Register setCurrentView={setCurrentView} />
      )}
    </div>
  )
}

export default LoginTemplate