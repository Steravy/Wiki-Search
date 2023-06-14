import Link from "next/link"


const Navbar = () => {

    return (
        <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl" >
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0" >
                <Link href="/">Just a Project</Link>
            </h1>
        </nav>
    )
}

export default Navbar;