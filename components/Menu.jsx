import Link from "next/link"

// const navLinks = [
//     {
//         path: "/posts",
//         display: "Posts",
//     },
//     {
//         path: "/about",
//         display: "About",
//     },
//     {
//         path: "/tours",
//         display: "Tours",
//     },
// ];

const Menu = () => {
    return (
        <>
            <nav className="border-gray-200 dark:bg-gray-900 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 ">
                    <Link href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Blogim</span>
                    </Link>
                    <div className="flex items-center md:order-2">
                        <Link href="/login" className="text-white dark:text-white hover:bg-gray-50 hover:text-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" >Login</Link>


                        <Link href="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Register</Link>

                    </div>
                    {/* <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}



                        </ul>
                    </div> */}
                </div>
            </nav>



        </>
    )
}

export default Menu