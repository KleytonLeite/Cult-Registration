import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Cadastro = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Idade: ''
    })
    const [sucess, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const enviar = async () => {
        try {
            const response = await fetch('/api/enviarCadastro', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (error) {
        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='container mx-auto w-full max-w-lg '>
            <PageTitle title='Cadastro' />
            <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 text-sm font-bold px-4 py-3 mb-2 mt-4 uppercase text-center">
                <div className="flex">
                    <div>
                        <p className="font-bold">Inscrições</p>
                    </div>
                </div>
            </div>
            {!sucess &&
            <div class="container mx-auto w-full max-w-lg mt-12 mb-12'">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Nome
                        </label>
                        <input className="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text" placeholder="Nome e Sobre Nome"
                            onChange={onChange} name='Nome' value={form.Nome} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            placeholder="exemplo@com.br"
                            onChange={onChange} name='Email' value={form.Email} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Idade
                        </label>
                        <input className="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mr-3 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            placeholder="Sua Idade"
                            onChange={onChange} name='Idade' value={form.Idade} />
                        <p class="text-red-500 text-xs italic">Entre 11 de 59 anos</p>
                    </div>
                    
                    <div class="flex items-center justify-between">
                    <button className='uppercase appearance-none block w-full pacity-75 bg-teal-500 hover:bg-teal-600 p-3 rounded text-white font-semibold' onClick={enviar}>
                            Enviar
                      </button>
                        <div class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-8">
                        <Link href='/'>
                             <a >Voltar</a>
                         </Link>
                        </div>                     
                    </div>
                </form>
            
                <p class="text-center text-gray-500 text-xs mb-6">
                &copy;2020 Kleyton Leite. All rights reserved.
                    </p>
            </div>
            }
            {sucess && <div><p>Cadastro Realizado com Sucesso!!</p>
                {console.log(sucess)}
             cod: {retorno.showCodigo}
            </div>}
        </div>
    )
}

export default Cadastro
