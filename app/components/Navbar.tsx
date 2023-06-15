import Link from "next/link"
import Search from "./Search";


const Navbar = () => {

    return (
        <header className="bg-slate-800 md:px-40 p-4  flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl " >

            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0" >
                <Link href="/">Wiki Search</Link>
            </h1>

            {/* <nav className={`flex justify-center`}>
                <ul className={`flex flex-row items-center justify-center gap-2.5 w-44 text-lg font-normal text-white `} >
                    <li>
                        <Link href={'#'} target="blank" >Home</Link>
                    </li>
                    <li>
                        <Link href={'#'} target="blank" >Home</Link>
                    </li>
                    <li>
                        <Link href={'#'} target="blank" >Home</Link>
                    </li>
                </ul>
            </nav> */}

            <Search />
        </header>
    )
}

export default Navbar;