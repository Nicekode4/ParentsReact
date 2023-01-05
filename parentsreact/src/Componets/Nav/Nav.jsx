const Nav = (probs) => {

    return (
        <nav>
            {probs.data.map((value, index) => {
                return (
                    <a key={index} href={"/" + value}>{value}</a>
                )
            })}
        </nav>
    )
}

export default Nav