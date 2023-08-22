/* eslint-disable @next/next/no-async-client-component */
'use client'
import Link from 'next/link'

import { HomeIcon, UsersIcon, DocumentTextIcon } from '@heroicons/react/outline'
import { useSelectedLayoutSegment } from 'next/navigation'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Sidebar(props) {
	const { type } = props.user
	const segment = useSelectedLayoutSegment()

	let sidebarOptions = []

	if (type == 1) {
		sidebarOptions = [
			{
				name: 'Panel Principal',
				href: '/dashboard',
				Icon: HomeIcon,
				typeAllow: [1, 2, 3],
				current: !segment ? true : false,
			},
			{
				name: 'Usuarios',
				href: '/dashboard/users',
				Icon: UsersIcon,
				typeAllow: [1],
				current: `/${segment}` === '/users' ? true : false,
			},
			{
				name: 'Mis Archivos',
				href: '/dashboard/files',
				Icon: DocumentTextIcon,
				typeAllow: [1, 2, 3],
				current: `/${segment}` === '/files' ? true : false,
			},
		]
	} else if (type == 2 || type == 3) {
		sidebarOptions = [
			{
				name: 'Panel Principal',
				href: '/dashboard',
				Icon: HomeIcon,

				current: !segment ? true : false,
			},
			{
				name: 'Mis Archivos',
				href: '/dashboard/files',
				Icon: DocumentTextIcon,

				current: `/${segment}` === '/files' ? true : false,
			},
		]
	}

	return (
		<div>
			<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col z-50">
				<div className="flex grow flex-col gapy-y-5 overflow-y-auto gb-white px-8 pb-4 shadow-md mr-8">
					<div className="flex h-16 shrink-0 items-center justify-between">
						<h1 className="text-2xl font-bold text-dark-blue">
							VITAL<span className=" text-red-500">CLINIC</span>
						</h1>
						<button>patras</button>
					</div>

					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{sidebarOptions.map(option => (
										<li key={option.name}>
											<Link
												href={option.href}
												className={classNames(
													option.current
														? 'bg-dark-blue text-white'
														: 'text-black hover:text-white hover:bg-dark-blue-2',
													'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
												)}>
												<option.Icon
													className={classNames(
														option.current
															? 'text-white group-hover:text-white h-6 w-6 shrink-0'
															: 'text-black group-hover:text-white h-6 w-6 shrink-0',
													)}
												/>
												{option.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}
