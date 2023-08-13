export default function Login() {
	return (
		<main className=" sm:mx-auto sm:w-full sm:max-w-md md:mx-auto md:w-full md:max-w-md">
			<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div class="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Iniciar sesión
					</h2>
				</div>
				<div className="mt-10 ">
					<form
						action="#"
						method="POST"
						className="space-y-2 shadow-md shadow-gray-300 rounded-md p-10 flex flex-col gap-5 ">
						<div>
							<label
								for="email"
								class="block text-sm font-medium leading-6 text-gray-900">
								Correo
							</label>
							<div class="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
								/>
							</div>
						</div>

						<div>
							<div class="flex items-center justify-between">
								<label
									for="password"
									class="block text-sm font-medium leading-6 text-gray-900">
									Contraseña
								</label>
							</div>
							<div class="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500"
								/>
							</div>
						</div>

						<div>
							<button
								type="button"
								className=" flex justify-center items-center w-full  text-white bg-dark-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2dark:hover:bg-dark-blue-2 focus:outline-none dark:focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105">
								Entrar
							</button>
						</div>
						<div class="text-sm text-center">
							<a
								href="#"
								class="font-semibold text-dark-blue-2 hover:text-indigo-500">
								Olvidé mi Contraseña
							</a>
						</div>
					</form>

					{/* <p class="mt-10 text-center text-sm text-gray-500">
						Not a member?
						<a
							href="#"
							class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Start a 14 day free trial
						</a>
					</p> */}
				</div>
			</div>
		</main>
	)
}
