'use client'
import { redirect } from 'next/navigation'
import { useAuthContext } from '../../../contexts/authContext'
import { decodeToken } from '../../../contexts/decodeToken'
import Sidebar from './components/Sidebar'

export default function Layout({ children }) {
	const { isLoggedIn, authTokens } = useAuthContext()

	if (!isLoggedIn) redirect('/login')
	const user = decodeToken(authTokens)

	return (
		<div className="flex mx-auto w-full">
			<Sidebar user={user} />
			<main className="w-full">{children}</main>
		</div>
	)
}
