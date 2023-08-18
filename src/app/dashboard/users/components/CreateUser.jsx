'use client'
import { useState } from 'react'

export default function CreateUser() {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	})

	const handlerChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}
	const handlerSubmit = async e => {
		e.preventDefault()
	}
	return (
		<section className="bg-white px-6 py-24 sm:py-10 lg:px-8 h-screen lg:pl-72">
			<form
				onSubmit={handlerSubmit}
				className="space-y-2 shadow-md shadow-gray-300 rounded-md p-10 flex flex-col gap-5 ">
				<h1 className="font-bold ">Crear usuario</h1>
				<div className="flex flex-row gap-3">
					<div className=" w-48">
						<label
							htmlFor="name"
							className="mb-4 font-semibold text-gray-900 dark:text-white">
							Nombre
						</label>
						<div className="mt-2">
							<input
								onChange={handlerChange}
								id="name"
								name="name"
								type="text"
								required
								className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
							/>
						</div>
					</div>
					<div className=" w-48">
						<label
							htmlFor="lastname"
							className="mb-4 font-semibold text-gray-900 dark:text-white">
							Apellido
						</label>
						<div className="mt-2">
							<input
								onChange={handlerChange}
								id="lastname"
								name="lastname"
								type="text"
								required
								className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
							/>
						</div>
					</div>
				</div>
				<div className=" w-96">
					<label
						htmlFor="email"
						className="mb-4 font-semibold text-gray-900 dark:text-white">
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

				<div className=" w-48">
					<label
						htmlFor="costumerId"
						className="mb-4 font-semibold text-gray-900 dark:text-white">
						Id de
					</label>
					<div className="mt-2">
						<input
							onChange={handlerChange}
							id="costumerId"
							name="costumerId"
							type="text"
							required
							className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
						/>
					</div>
				</div>

				<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
					Tipo de usuario
				</h3>
				<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
						<div className="flex items-center pl-3">
							<input
								id="horizontal-list-radio-license"
								type="radio"
								value=""
								name="list-radio"
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="horizontal-list-radio-license"
								className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Administrador
							</label>
						</div>
					</li>
					<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
						<div class="flex items-center pl-3">
							<input
								id="horizontal-list-radio-id"
								type="radio"
								value=""
								name="list-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="horizontal-list-radio-id"
								class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Empleado
							</label>
						</div>
					</li>
					<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
						<div class="flex items-center pl-3">
							<input
								id="horizontal-list-radio-millitary"
								type="radio"
								value=""
								name="list-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="horizontal-list-radio-millitary"
								class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Cliente
							</label>
						</div>
					</li>
				</ul>

				<div>
					<button className=" flex justify-center items-center w-full  text-white bg-dark-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2dark:hover:bg-dark-blue-2 focus:outline-none dark:focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105">
						Crear usuario
					</button>
				</div>
			</form>
		</section>
	)
}
