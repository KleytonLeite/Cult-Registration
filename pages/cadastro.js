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
        <div className='justify-centercontainer mx-auto w-full max-w-lg '>
            <PageTitle title='Cadastro' />
            <div className="flex bg-red-500 text-white text-sm font-bold px-4 py-3 text-sm font-bold px-4 py-3 mb-2 mt-4 uppercase">
                <div className="flex">
                    <div className='justify-center'>
                        <p className="font-bold">Inscrições</p>
                    </div>
                </div>
            </div>
            {!sucess &&
                <div className="container mx-auto w-full max-w-lg mt-12 mb-12">
                    <form onSubmit={function handleSubmit(evt) {
                        evt.preventDefault();
                    }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Nome
                        </label>
                            <input className="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text" placeholder="Nome e Sobre Nome"
                                onChange={onChange} name='Nome' value={form.Nome} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                        </label>
                            <input className="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="exemplo@com.br"
                                onChange={onChange} name='Email' value={form.Email} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Idade
                        </label>
                            <input className="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mr-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="Sua Idade"
                                onChange={onChange} name='Idade' value={form.Idade} />
                            <p className="text-red-500 text-xs italic">Entre 11 de 59 anos</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className='uppercase appearance-none block w-full pacity-75 bg-teal-500 hover:bg-teal-600 p-3 rounded text-white font-semibold' onClick={enviar}>
                                Enviar
                      </button>
                            <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-8">
                                <Link href='/'>
                                    <a >Voltar</a>
                                </Link>
                            </div>
                        </div>
                    </form>

                    <p className="text-center text-gray-500 text-xs mb-6">
                        &copy;2020 Kleyton Leite. All rights reserved.
                    </p>
                </div>
            }
            {sucess &&
                <div className='container mx-auto w-full max-w-lg mt-8 mb-12'>
                    <div className='grid container mx-auto'>
                        <div className='block bg-teal-100 border-t border-b border-teal-500 text-teal-700 px-4 py-3 text-sm mb-12 text-center'>
                            Parabéns!!!
                            <p className='uppercase font-bold'>{form.Nome}</p>
                            <p>{retorno.messageCadastro}</p>
                        </div>
                        <div class="flex m-4 items-center bg-teal-500 text-white text-sm font-bold px-4 py-3" role="alert">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                            <p>Informações inportantes!</p>
                        </div>
                        <div className='grid mt-12 m-4'>
                            <div className='bg-white-100 rounded-l-md border-l-4 border-teal-500 text-teal-700 p-4 shadow-md text-center'>
                                <p>Segue Seu <strong className='uppercase'>codigo</strong> de inscrição logo abaixo, você pode tirar um print dessa tela. </p>
                            </div>
                        </div>
                        <div className='grid m-4'>
                            <div className='bg-white-100 rounded-l-md border-l-4 border-teal-500 text-teal-700 p-4 shadow-md text-center'>
                                <p className='text-3xl font-bold'>{retorno.Cod}</p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex container mx-auto text-center uppercase font-bold text-sm text-red-500 hover:text-red-800 p-8">

                        <button className="flex 1 mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" type="button">
                            <Link href='/'>
                                <a className='flex 1 mx-auto' ><p className='pr-2'>&larr;</p>Voltar</a>
                            </Link>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cadastro
