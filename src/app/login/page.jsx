'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'
import { fetchLogin } from './fetchLogin'

export default function Login() {
	const notify = (text, style) => toast.error(text, style)

	const parseJwt = token => {
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		const payload = decodeURIComponent(
			window
				.atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join(''),
		)

		return JSON.parse(payload)
	}

	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	})
	const [user, setUser] = useState(null)

	const handlerChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	const handlerSubmit = async e => {
		e.preventDefault()
		const token = await fetchLogin(credentials)
		if (token) {
			let cookie = `auth_token=${token};`
			cookie += 'path=/;'
			cookie += 'max-age=2592000;'
			document.cookie = cookie

			//remove cookie
			//document.cookie = `auth_token=; path=/; max-age=0`
			const userData = parseJwt(token)
			setUser(userData)
		} else {
			notify('Correo o contraseña incorrectos', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			})
		}
	}

	return (
		<main className=" sm:mx-auto sm:w-full sm:max-w-md md:mx-auto md:w-full md:max-w-md">
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Iniciar sesión
					</h2>
				</div>
				<div className="mt-10 ">
					<form
						onSubmit={handlerSubmit}
						className="space-y-2 shadow-md shadow-gray-300 rounded-md p-10 flex flex-col gap-5 ">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								Correo
							</label>
							<div className="mt-2">
								<input
									onChange={handlerChange}
									id="email"
									name="email"
									type="email"
									required
									className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Contraseña
								</label>
							</div>
							<div className="mt-2">
								<input
									onChange={handlerChange}
									id="password"
									name="password"
									type="password"
									required
									className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500"
								/>
							</div>
						</div>

						<div>
							<button className=" flex justify-center items-center w-full  text-white bg-dark-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2dark:hover:bg-dark-blue-2 focus:outline-none dark:focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105">
								Entrar
							</button>
						</div>
						<div className="text-sm text-center">
							<a
								href="#"
								className="font-semibold text-dark-blue-2 hover:text-indigo-500">
								Olvidé mi Contraseña
							</a>
						</div>
					</form>

					{/* <p className="mt-10 text-center text-sm text-gray-500">
						Not a member?
						<a
							href="#"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Start a 14 day free trial
						</a>
					</p> */}
				</div>
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</main>
	)
}
