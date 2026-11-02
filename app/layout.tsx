import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Spin — A little less laundry day', description: 'Your shared laundry room, beautifully in sync. A university UI/UX prototype.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
