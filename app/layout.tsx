import './global.css'
import {Metadata} from "next";
import Layout from "composition/layout/layout";

export const metadata: Metadata = {
    title: 'Fragranceia test',
    description: 'Generated by fio',
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body><Layout>{children}</Layout></body>
        </html>
    )
}
