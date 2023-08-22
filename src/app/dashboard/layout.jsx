'use client'
import { redirect } from 'next/navigation'
import { useAuthContext } from '../../../contexts/authContext'
import { decodeToken } from '../../../contexts/decodeToken'
import Sidebar from './components/Sidebar'
import Header from './components/header'

export default function Layout({ children }) {
	const { isLoggedIn, authTokens } = useAuthContext()

	if (!isLoggedIn) redirect('/login')
	const user = decodeToken(authTokens)

	return (
		<div>
			<div className="flex flex-col mx-auto w-full z-50">
				<Header user={user} />
				<Sidebar user={user} />
				<main className="w-full">{children}</main>
			</div>
		</div>
	)
}
