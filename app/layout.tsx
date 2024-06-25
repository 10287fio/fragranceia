import './global.css'
import {Metadata} from "next";
import Layout from "../layout/layout";

export const metadata: Metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {

    const getLayouts = Layout;

    return (
        <html lang="en">
        <body><Layout>{children}</Layout></body>
        </html>
    )
}
