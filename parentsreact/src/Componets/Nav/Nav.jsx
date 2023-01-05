const navList = [
    "Forside",
   "Produkter",
   "Om os",
    "Ledige stillinger",
    "Kontakt oss"
]

const Nav = () => {

    return (
        <nav>
            {navList.map((value, index) => {
                return (
                    <a key={index} href={"/" + value}>{value}</a>
                )
            })}
        </nav>
    )
}

export {Nav}