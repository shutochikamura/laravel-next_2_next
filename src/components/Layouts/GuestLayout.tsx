import Head from 'next/head'
import React from 'react'

type GuestLayoutType = {
    children: React.ReactNode
}

const GuestLayout = ({ children }: GuestLayoutType) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
