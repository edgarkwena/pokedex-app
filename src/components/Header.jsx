export function Header({handleToggleMenu}) {
    return (
        <header>
            <button 
            onClick={handleToggleMenu}
            className="open-nav-button">
            <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="text-gradient">PokéDex</h1>
        </header>
    )
}