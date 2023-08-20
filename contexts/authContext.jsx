'use client'
import { decodeToken } from './decodeToken'
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'

const AUTH_TOKENS_KEY = 'NEXT_JS_AUTH'

export const AuthContext = createContext({
	login: authToken => {},
	logout: () => {},
	isLoggedIn: false,
	authTokens: null,
})

export default function AuthContextProvider({ children }) {
	const authTokensInLocalStorage = window.localStorage.getItem(AUTH_TOKENS_KEY)
	const [authTokens, setAuthTokens] = useState(
		authTokensInLocalStorage === null
			? null
			: JSON.parse(authTokensInLocalStorage),
	)

	const login = useCallback(function (authToken) {
		window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(authToken))

		setAuthTokens(authToken)
	}, [])

	const logout = useCallback(function () {
		window.localStorage.removeItem(AUTH_TOKENS_KEY)
		setAuthTokens(null)
	}, [])

	const value = useMemo(
		() => ({
			login,
			logout,
			authTokens,
			isLoggedIn: authTokens !== null,
		}),
		[authTokens, login, logout],
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
	return useContext(AuthContext)
}