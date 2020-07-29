import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <div class="bg-red-700 text-center text-white shadow-lg">
            <div class="flex container mx-auto p-4 ">

                <div class="w-1/2 h12 border-solid border-r-2 border-white hover:underline">
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </div>

                <div class="w-1/2 h12 hover:underline"> 
                    <Link href='/arcebispo'>
                        <a>Arcebispo</a>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Menu