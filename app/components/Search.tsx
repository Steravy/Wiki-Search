'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from '../page.module.css'



export default function Search() {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    }


    return (

        <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>

            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`bg-slate-800 p-2 w-80 text-xl  ${styles.imput}`}
                placeholder="Search..."
            />

            <button className="p-2 text-2xl rounded-xl  ml-2 font-bold" type="submit">
                {/* 🚀 */}
                🔍
            </button>

        </form>
    )
}