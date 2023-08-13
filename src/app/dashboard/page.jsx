import ListOfFiles from './ListOfFiles.jsx'
import NavBar from './components/NavBar.jsx'

export default async function Dashboard() {
	return (
		<section className=" sm:mx-auto sm:w-full sm:max-w-md md:mx-auto md:w-full md:max-w-md">
			<h1>esto es el Dashboard</h1>
			<NavBar />
			<ListOfFiles />
		</section>
	)
}
