'use client'

import Sidebar from './components/Sidebar'

export default function Layout({ children }) {
	return (
		<div>
			<div className="flex flex-col mx-auto w-full z-50">
				<Sidebar />
				<main className="w-full">{children}</main>
			</div>
		</div>
	)
}
