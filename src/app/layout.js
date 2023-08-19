import './globals.css'
//import { Inter } from 'next/font/google'
import 'flowbite'
//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'VitalClinic app',
	description:
		'Droguería Vitalclinic, distribuidora nacional de productos farmacológicos y equipos médicos en Maturín. Calidad y compromiso en nuestros servicios.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	)
}
