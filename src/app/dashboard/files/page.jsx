import ListOfFiles from '../ListOfFiles'
import UploadFile from './components/UploadFile'
// import { useAuthContext } from '../../../../contexts/authContext'
// import { decodeToken } from '../../../../contexts/decodeToken'
//no va en client el list of files
export default function Files() {
	// const { authTokens: authToken } = useAuthContext()
	// const user = decodeToken(authToken)
	// const userData = { authToken, user }

	return (
		<section className="bg-white px-6 py-24 sm:py-10 lg:px-8 h-screen lg:pl-72">
			<UploadFile />
			<ListOfFiles />
		</section>
	)
}
