import Link from "next/link"

const NavbarLinks = ({ href, title }) => {
    return (
        <Link 
          href={href}
          className="block py-2 pl-3 pr-4 text-zinc-400 sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </Link>
    )
}

export default NavbarLinks