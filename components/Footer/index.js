import React from 'react'

const Footer = () => {
    return (
        <div className='inset-x-0 bottom-0 m-1 sm:absolute md:fixed text-center text-white bg-red-700'>
            <div className='container mx-auto p-6'>
                <p><span className='font-semibold uppercase'>IECB
                Igreja Episcopal Carismática do Brasil  </span><br></br>
                Rua Carneiro Vilela, 569
                Espinheiro, Recife-PE
                CEP 52050-030

                +55 81 3221-0994
                <a href="http://novo.iecbrasil.com.br/"  target="_blank"  className="block mt-1 text-lg leading-tight font-semibold text-white hover:underline">www.iecbrasil.com.br</a>
                secretaria.trindade@iecbrasil.com.br
                </p>
            </div>
        </div>
    )
}

export default Footer