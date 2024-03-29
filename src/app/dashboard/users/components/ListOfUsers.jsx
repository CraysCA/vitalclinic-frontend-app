import CreateUser from './CreateUser'
const fetchUsers = async () => {
	const url = `${process.env.apiUrl}/users/`
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-User-Id': 1,
			auth_token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJjcmlzdCB0ZXN0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkyMzg3OTYwLCJleHAiOjE2OTI0NzQzNjB9.3P6OF6_tVSWmjJmvY1dJebnfwI8UQdshqZBbDoodkbE',
		},
		next: {
			revalidate: 60,
		},
	})
	const data = await response.json()
	return data.success ? data.data : []
}

function checkType(user) {
	let type = 'Desconocido'
	if (user.type === 1) type = 'Administrador'
	if (user.type === 2) type = 'Empleado'
	if (user.type === 3) type = 'Cliente'
	return type
}

export default async function ListOfUsers() {
	const users = await fetchUsers()

	return (
		<div className=" overflow-x-auto shadow-md sm:rounded-lg p-4">
			<div className=" flex flex-row gap-6 z-10 ">
				<div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>

						<input
							type="text"
							id="table-search-users"
							className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search for users"
						/>
					</div>
				</div>
				<CreateUser />
			</div>
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Nombre
						</th>
						<th scope="col" className="px-6 py-3">
							Tipo
						</th>
						<th scope="col" className="px-6 py-3">
							Estado
						</th>
						<th scope="col" className="px-6 py-3">
							Acción
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr
							key={user.id}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
								scope="row"
								className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
								<img
									className="w-10 h-10 rounded-full"
									src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
									alt={user.name}
								/>
								<div className="pl-3">
									<div className="text-base font-semibold">
										{user.name} {user.lastname}
									</div>
									<div className="font-normal text-gray-500">{user.email}</div>
								</div>
							</th>
							<td className="px-6 py-4">{checkType(user)}</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
									Online
								</div>
							</td>
							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									Eliminar
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
