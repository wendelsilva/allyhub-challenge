import { useState } from 'react';

import { IMaskInput } from 'react-imask';
import Select from 'react-select';

import { Check, ArrowCircleDown } from 'phosphor-react';

export function Form() {
    const [ checked, setChecked ] = useState(true);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <>
            <form className="flex flex-col items-center gap-4 bg-zinc-800 max-w-[320px] w-full p-4 rounded mb-4 ">
                <h1>Dados Pessoais</h1>
                <label htmlFor="name">
                    <p>Nome</p>
                    <input type="text" name="name" placeholder="Digite seu Nome" className="rounded py-1 bg-transparent border-2 border-zinc-700 pl-2 text-zinc-200"/>
                </label>

                <label htmlFor="email">
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Digite seu Email" className="rounded py-1 bg-transparent border-2 border-zinc-700 pl-2 text-zinc-200"/>
                </label>

                <label htmlFor="tel">
                    <p>Telefone</p>
                    <input type="tel" name="tel" placeholder="Digite seu Telefone" className="rounded py-1 bg-transparent border-2 border-zinc-700 pl-2 text-zinc-200"/>
                </label>

                <label htmlFor="cpf">
                    <p>CPF</p>
                    <IMaskInput mask="000.000.000-00" placeholder="Digite o seu CPF" className="rounded py-1 bg-transparent border-2 border-zinc-700 pl-2 text-zinc-200"/>
                </label>

                <h1>Destinos de Interesse</h1>

                <Select 
                    isMulti
                    options={options}
                    name="Países"
                />

                <Select 
                    isMulti
                    options={options}
                    name="Países"
                />  

            </form>

            <button type="submit" className="bg-cyan-400 p-2 rounded w-32">Enviar</button>
        </>
    )
}