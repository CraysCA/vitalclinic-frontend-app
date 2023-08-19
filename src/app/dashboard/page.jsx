import ListOfFiles from './ListOfFiles'

export default function Dashboard() {
	return (
		<section className="bg-white px-6 py-24 sm:py-10 lg:px-8 h-screen lg:pl-72">
			<div className="space-y-2 shadow-md shadow-gray-300 rounded-md p-10 flex flex-col gap-5 ">
				<ListOfFiles />
			</div>
		</section>
	)
}
