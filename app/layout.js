import './globals.css';

import { Nunito } from 'next/font/google';
const NunitoGoogleFont = Nunito({
	weight: ['300', '400', '600', '700', '900'],
	subsets: ['latin'],
});

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata = {
	title: 'TUTORIAL - Wirex App clone',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* cdnjs for animation for elements */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
			</head>
			<body className={NunitoGoogleFont.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
