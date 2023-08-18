import Sidebar from "./components/Sidebar"

export default function Layout({ children }) {
	return (
		<div className="flex mx-auto w-full">
			<Sidebar />
			<main className="w-full">{children}</main>
		</div>
	)
}
