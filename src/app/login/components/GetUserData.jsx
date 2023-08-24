import { useAuthContext } from '../../../../contexts/authContext'
import { decodeToken } from '../../../../contexts/decodeToken'

export function GetUserData() {
	const { authTokens } = useAuthContext()
	const user = decodeToken(authTokens)

	return { user, authToken: authTokens }
}
