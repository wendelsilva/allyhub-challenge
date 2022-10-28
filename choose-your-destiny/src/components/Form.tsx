import { useState, useEffect } from "react";
import { IMaskInput } from 'react-imask';
import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import { useErrorMessage } from "../hooks/useErrorMessage";

import { api } from '../lib/api';
import { Button } from './Button';
import { Input } from './Input';
import { Text } from './Text';

import 'react-toastify/dist/ReactToastify.css';
import { useSuccessMessage } from "../hooks/useSuccessMessage";

interface CountryProps {
    code: string;
    name: string;
    name_ptbr: string;
}

interface CitiesProps {
    id: number;
    code: string;
    name: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    name_ptbr: string;
    lat: string;
    log: string;
    url1: string;
    url2: string;
}

export function Form() {
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [cities, setCities] = useState<CitiesProps[]>([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() =>{
        api.get('/country').then(response => {
            setCountries(response.data); 
        })
    }, [])

    useEffect(() =>{
        api.get('/city').then(response => {
            setCities(response.data); 
        })
    }, [])

    const countriesOptions = countries.map(country => (
        {
            value: country.name_ptbr,
            label: country.name_ptbr
        }
    ))

    const cityOptions = cities.map(city => (
        {
            value: city.name_ptbr,
            label: city.name_ptbr
        }
    ))

    function handleValidateForm(event) {
        event.preventDefault();
        
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        if(name != "" && emailRegex.test(email)) {
            useSuccessMessage("Formulário enviado com sucesso", 2000)
        } else {
            useErrorMessage("Erro ao enviar formulário preencha todos os campos", 2000)
            return
        }
    }

    return (
        <>
            <form className="flex flex-col items-strech gap-4 bg-zinc-800  w-full max-w-[320px] py-4 px-2 rounded mb-4 xl:max-w-[480px] xl:py-5 xl:px-4">
                <Text text="Dados Pessoais" className="text-center text-2xl text-cyan-400 font-bold"/>

                <label htmlFor="name" className="flex flex-col gap-2">
                    <Text text="Nome" className="text-zinc-200 text-lg font-semibold" />
                    <Input type="text" name="name" value={name} onChange={() => setName(event.target.value)} placeholder="Digite seu nome" className="w-full outline-none text-zinc-200 bg-transparent flex-1 placeholder:text-zinc-500 border-2 border-zinc-700 rounded p-2 focus:border-cyan-400" />
                </label>

                <label htmlFor="email" className="flex flex-col gap-2">
                    <Text text="Email" className="text-zinc-200 text-lg font-semibold" />
                    <Input type="email" name="email" value={email} onChange={() => setEmail(event.target.value)} placeholder="Digite seu email" className="w-full outline-none text-zinc-200 bg-transparent flex-1 placeholder:text-zinc-500 border-2 border-zinc-700 rounded p-2 focus:border-cyan-400" />
                </label>

                <label htmlFor="tel" className="flex flex-col gap-2">
                    <Text text="Telefone/Celular" className="text-zinc-200 text-lg font-semibold" />
                    <IMaskInput name="tel" type="tel" mask="(00) 00000-0000" placeholder="Digite o seu CPF" className="w-full outline-none text-zinc-200 bg-transparent flex-1 placeholder:text-zinc-500 border-2 border-zinc-700 rounded p-2 focus:border-cyan-400" />
                </label>

                <label htmlFor="cpf" className="flex flex-col gap-2">
                    <Text text="CPF" className="text-zinc-200 text-lg font-semibold" />
                    <IMaskInput name="cpf" mask="000.000.000-00" placeholder="Digite o seu CPF" className="w-full outline-none text-zinc-200 bg-transparent flex-1 placeholder:text-zinc-500 border-2 border-zinc-700 rounded p-2 focus:border-cyan-400" />
                </label>

                <Text text="Destinos de Interesse" className="text-center text-2xl text-cyan-400 font-bold"/>

                <label htmlFor="countries" className="flex flex-col gap-2">
                    <Text text="Países" className="text-zinc-200 text-lg font-semibold" />
                    <Select 
                        isMulti
                        options={countriesOptions}
                        name="countries"
                        placeholder="Selecione os países..."
                    />
                </label>

                <label htmlFor="cities" className="flex flex-col gap-2">
                    <Text text="Cidades" className="text-zinc-200 text-lg font-semibold" />
                    <Select 
                        isMulti
                        options={cityOptions}
                        name="cities"
                        placeholder="Selecione as cidades..."
                    />
                </label>

                <Button type="submit" onClick={() => handleValidateForm(event)} className="text-cyan-400 p-2 rounded w-32 bg-zinc-800 font-semibold text-lg hover:bg-zinc-700">Enviar</Button>
            </form>

            <ToastContainer />
        </>
    )
}