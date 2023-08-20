export const postUploadFile = async e => {
	try {
		const body = new FormData()
		body.append('files', e.target.files[0])
		body.append('folder', 'inventory')

		const response = await fetch(`${process.env.apiUrl}/files/upload`, {
			method: 'POST',
			headers: {
				'X-User-Id': 1,
				auth_token:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJjcmlzdCB0ZXN0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkyNDU0NjMxLCJleHAiOjE2OTI1NDEwMzF9.0zZVzRym4dgI_bD3W185R-aAZuJZ5mD9AyFS1zwmu0I',
			},
			body: body,
		})
		const data = await response.json()
		return data.success
	} catch (error) {
		console.log(error)
	}
}
