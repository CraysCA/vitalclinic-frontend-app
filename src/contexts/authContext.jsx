'use client'

import { createContext, useCallback, useContext, useMemo } from 'react'
import Cookies from 'js-cookie'

const AUTH_TOKENS_KEY = 'auth_token'

export const AuthContext = createContext({
	login: authToken => {},
	logout: () => {},
})

export default function AuthContextProvider({ children }) {
	const login = useCallback(function (authToken) {
		Cookies.set('auth_token', JSON.stringify(authToken))
	}, [])

	const logout = useCallback(function () {
		Cookies.remove('auth_token')
	}, [])

	const value = useMemo(
		() => ({
			login,
			logout,
		}),
		[login, logout],
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
	return useContext(AuthContext)
}
