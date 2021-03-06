import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/getHabilitarCadastro', fetcher)
    console.log(data)
    return (

        <div className=''>
            <PageTitle title='Seja Bem-Vindo' />
            <div className="container mx-auto md:flex p-4 m-1 rounded overflow-hidden shadow-lg">
                <div className='md:flex border-solid border-2 border-gray sm: flex 1 mx-auto'>
                    <div className="md:flex-shrink-0 py-4 px-8 ">
                        <img className="rounded-lg md:w-56" src="data:image/jpeg;base64,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"
                            alt="Catedral da trindade" />
                    </div>
                    <div className=" mt-4 md:ml-6 py-6 px-12">
                        <div className="uppercase tracking-wide text-sm text-red-800 font-bold">Reabertura dos cultos</div>
                        <a href="https://www.instagram.com/p/CCWfHvKBEp7/" target="_blank" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Comunicado - Assitar o video </a>
                        <p className="mt-2 text-gray-600">Reaberturados cultos presenciais, assista o video onde dona marcia convida a todos para participar dessa nova etapa  .</p>
                    </div>
                </div>
            </div>
            {!data &&
                <div className='flex container mx-auto mt-6'>
                    <div className='flex 1 mx-auto'>
                        <img className='' src="/Spinner.gif" />
                    </div>
                </div>
            }
            {!error && data &&
                <div>
                    <div className='flex container mx-auto m-6'>
                        <div className="flex-none container mx-auto w-full max-w-lg">
                            <div className='flex flex-cols w-full h-16 bg-red-700 shadow-lg text-white uppercase p-4 font-bold '>
                                <p className='flex-1'>Inscritos</p>
                                <svg className='flex-shrink-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff"><path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" /></svg><p className='flex-shrink-0 px-4'>{data.registered}</p>
                            </div>
                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <div className=''>
                                        <p className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 text-sm font-bold px-4 py-3 mb-2 uppercase text-center">
                                            DESCRIÇÃO DO EVENTO
                          </p>
                                        <p className="block bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 text-sm mb-2  text-center">
                                            Você poderá participar do culto <strong className='uppercase'>{data.message}.</strong> Para isso, observe algumas das regras abaixo.
                          </p>
                                    </div>
                                    <p className="block text-gray-700 text-sm mb-2 text-justify">
                                        Apenas <strong>250 lugares estarão disponíveis</strong>, apesar da lei nos permitir até <strong>300 participantes</strong>;
                              <strong> O uso de máscara é obrigatório</strong>;
                              Se estiver doente ou no grupo de risco, fique em casa;
                              <strong> Maiores de 60 anos e menores de 10 anos</strong>, por enquanto, não podem participar;
                              <strong> Traga sua garrafa de água</strong>, não disponibilizaremos bebedouros;
                              <strong> Evite aglomerações nos banheiros</strong>;
                              <strong> Use álcool 70% para desinfectar superfícies e objetos tocados com frequência</strong>;
                              Podemos nos reunir, mas ainda precisamos respeitar o distanciamento, portanto, sentar apenas nos locais indicados com o adesivo verde;
                              Evitem abraços e cumprimentos próximos, quando tudo isso passar (e vai passar), poderemos nos abraçar novamente.
                          </p>
                                </div>

                                <div className="grid">
                                    {!data || !data.showCadastro && <p className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 shadow-md text-center'>{data.messageErro}</p>}
                                    {data && data.showCadastro &&
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" type="button">
                                            <Link href='/cadastro'>
                                                <a >Cadastrar</a>
                                            </Link>
                                        </button>
                                    }
                                </div>
                            </div>
                            <p className="text-center text-gray-500 text-xs">
                                &copy;2020 Kleyton Leite. All rights reserved.
                  </p>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default Index
