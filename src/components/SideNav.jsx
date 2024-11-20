import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export function SideNav({selectedPokemon, setSelectedPokemon, handleToggleMenu, showSideMenu}) {

    const [searchItem, setSearchItem] = useState('');

    const filteredItems = searchItem && first151Pokemon.map((item, itemIndex) => ({
            itemName: item,
            itemNumber: getFullPokedexNumber(itemIndex), 
           })).filter((mappedItem) => {
            return (mappedItem.itemName.toLowerCase().includes(searchItem.toLowerCase()) 
                || 
             mappedItem.itemNumber.includes(searchItem))
        })

        console.log(filteredItems)
    
    return(
    <nav className={' ' + (!showSideMenu ? " open" : '')}>
        <div className={"header " + (!showSideMenu ? " open" : '')}>
            <button 
            onClick={handleToggleMenu}
            className="open-nav-button">
                <i className="fa-solid fa-angles-left"></i>
            </button>
            <h1 className="text-gradient">Pokédex</h1>
        </div>
        <input 
        type = 'text'
        value={searchItem}
        placeholder="Search here ..."
        onChange={e => {
            setSearchItem(e.target.value)
        }}/>
        {!searchItem ? (first151Pokemon.map((pokemon, pIndex) =>
            <button key={pIndex} className={'nav-card ' + (
                pIndex === selectedPokemon ? ' nav-card-selected' : ' '
            )} 
            onClick={() => {
                setSelectedPokemon(pIndex); 
                handleToggleMenu();
            }}>
                <p>{getFullPokedexNumber(pIndex)}</p>
                <p>{pokemon}</p>
            </button>))   : 

            (filteredItems.map((mappedItem, mappedItemIndex) =>
            <button key={mappedItemIndex} className={'nav-card ' + (
                Number(mappedItem.itemNumber) === selectedPokemon ? ' nav-card-selected' : ' '
            )} 
            onClick={() => 
            {setSelectedPokemon(Number(mappedItem.itemNumber) - 1);
              handleToggleMenu();  
            }}>
                <p>{mappedItem.itemNumber}</p>
                <p>{mappedItem.itemName}</p>
            </button>)

        )} 
    </nav>
    )
}