import ListOfFiles from '../ListOfFiles'
import UploadFile from './components/UploadFile'

export default function Files() {
	return (
		<section className="bg-white px-6 py-24 sm:py-10 lg:px-8 h-screen lg:pl-72">
			<UploadFile />
			<ListOfFiles userId={7} />
		</section>
	)
}
