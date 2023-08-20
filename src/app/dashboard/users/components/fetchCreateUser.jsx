export const fetchCreateUser = async credentials => {
	const url = `${process.env.apiUrl}/users/`
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-User-Id': 1,
			auth_token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJjcmlzdCB0ZXN0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkyNDU0NjMxLCJleHAiOjE2OTI1NDEwMzF9.0zZVzRym4dgI_bD3W185R-aAZuJZ5mD9AyFS1zwmu0I',
		},
		body: JSON.stringify(credentials),
		cache: 'no-store',
	})
	const data = await response.json()

	return data.success
}
