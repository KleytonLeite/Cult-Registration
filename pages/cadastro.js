import React from 'react'

const Cadastro = () => {
    return (

        <div className='container mx-auto w-full max-w-lg'>
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 mt-4 shadow-md" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p class="font-bold">Inscrição para o culto</p>
                        <p class="text-sm">Quarta-feira 15/07/2020 .</p>
                    </div>
                </div>
            </div>
            <form class="container mx-auto py-8 px-4 rounded overflow-hidden shadow-lg w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nome
                    </label>
                        <input class="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nome" />
                        <p class="text-red-500 text-xs italic">Por favor preencher todos os campos.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Sobre Nome
                    </label>
                        <input class="appearance-none block w-full bg-red-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Sobre Nome" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Idade
                    </label>
                        <input class="appearance-none block w-full bg-red-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 mr-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Sua Idade" />
                        <p class="text-red-500 text-xs italic">Maiores de 18 anos</p>
                    </div>
                    <div class="w-full md:w-1/2 px-6 mb-6 mt-6 md:mb-0">
                        <button className='uppercase appearance-none block w-full pacity-75 bg-teal-500 hover:bg-teal-600 p-3 rounded text-white font-semibold'>Enviar</button>
                    </div>
                </div>
            </form>
            <div className='py-4 invisible'>
                <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 shadow-md" role="alert">
                    <p class="font-bold">IECB Pedimos desculpas!</p>
                    <p>Não é possivel inscrição pra esse culto o limeite permitido foi ultrapassado, será aberta novas vagas para os proximos cultos, logo mais! .</p>
                </div>
            </div>
        </div>
    )
}

export default Cadastro