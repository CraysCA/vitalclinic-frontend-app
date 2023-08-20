export const fetchLogin = async credentials => {
	const { email, password } = credentials
	const url = `${process.env.apiUrl}/auth/login`
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization:
				'Basic ' + Buffer.from(email + ':' + password).toString('base64'),
		},
		cache: 'no-store',
	})
	const data = await response.json()

	return data.success ? data.data : ''
}
