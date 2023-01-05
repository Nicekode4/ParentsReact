const Footer = (probs) => {
    return (
    <footer>
            
        <nav>
            {probs.data.map((value, index) => {
                return (
                    <a key={index} href={"/" + value}>{value}</a>
                )
            })}
        </nav>
    </footer>
    )
}

export default Footer