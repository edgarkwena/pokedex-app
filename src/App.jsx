import { useState } from "react"
import { Header } from "./components/Header"
import { PokeCard } from "./components/PokeCard"
import { SideNav } from "./components/SideNav"

function App() { 
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  function handleToggleMenu () {
    setShowSideMenu(!showSideMenu)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu}/>
      <SideNav 
      selectedPokemon={selectedPokemon} 
      setSelectedPokemon={setSelectedPokemon} 
      handleToggleMenu={handleToggleMenu}
      showSideMenu={showSideMenu}/>
      <PokeCard sP={selectedPokemon} />
    </>
    
  )
}

export default App
