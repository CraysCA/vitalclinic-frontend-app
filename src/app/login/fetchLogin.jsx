export const fetchLogin = async credentials => {
	const { email, password } = credentials
	const url = 'https://vitalclinic-backend-81os-dev.fl0.io/auth/login'
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization:
				'Basic ' + Buffer.from(email + ':' + password).toString('base64'),
		},
	})
	const data = await response.json()

	return data.success ? data.data : ''
}