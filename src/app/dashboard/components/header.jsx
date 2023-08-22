'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header(props) {
	const { user } = props

	const [openModal, setOpenModal] = useState(false)

	return (
		<header className="py-3 bg-white  text-right flex flex-col items-end justify-center ">
			<div
				onClick={() => {
					setOpenModal(!openModal)
				}}
				className="flex flex-col justify-center items-center mr-12 cursor-pointer hover:bg-slate-200 py-1 px-3 rounded-md ">
				<div className="flex flex-row gap-2 items-center">
					<div className="w-8 h-8 rounded-full bg-slate-600"></div>
					{user.name} {user.lastname}
				</div>
				<span className="font-semibold">{user.email} </span>
				{openModal ? (
					<Link
						className=" border-t-2 rounded-md py-2 hover:bg-white "
						href="/logout">
						Cerrar Sesión
					</Link>
				) : (
					''
				)}
			</div>
		</header>
	)
}
