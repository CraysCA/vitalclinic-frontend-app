import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
	const authToken = request.cookies.get('auth_token')?.value

	if (request.nextUrl.pathname.startsWith('/dashboard') && !authToken) {
		const response = NextResponse.redirect(new URL('/login', request.url))
		response.cookies.delete('auth_token')
		return response
	}
	if (authToken && request.nextUrl.pathname.startsWith('/login')) {
		const response = NextResponse.redirect(new URL('/dashboard', request.url))
		return response
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/dashboard(.*)', '/login'],
}
