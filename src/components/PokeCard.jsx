import { useQuery } from "@tanstack/react-query"
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import TypeCard from "./TypeCard"
import Modal from "./Modal";
import { useState } from "react";
import ModalChildren from "./ModalChildren";

export function PokeCard({sP}) {

    const [skill, setSkill] = useState(false);
    const [moveName, setMoveName] = useState('');
    const [moveUrl, setMoveUrl] = useState('');

    const handleClick = (name, url) => {
        setMoveName(name);
        setMoveUrl(url);
        setSkill(true);
    }

/*
    const moveFn = (move) => {
        if (move?.url !== moveUrl) {
            setMoveUrl(move?.url);
        };
        
        //setMoveName(move?.name);
    }

 
    const fetchMoveData = async () => {
        if (!moveUrl || moveUrl === 'null') return null;
        const res = await fetch(moveUrl);
        return res.json();
    }
    */
    const fetchPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getPokedexNumber(sP)}`);
        if(!response.ok) throw new Error('Network response was not ok');
        return response.json();
    }

    // Define a query to fetch Pokémon data

    const { data: pokemon , error: pErr, isLoading: pIsLoading } = useQuery({
        queryKey: ['pokemon', sP], // Unique key for this query
        queryFn: fetchPokemon, 
    
         /*{
            // Optional configuration
            staleTime: 5 * 60 * 1000, // 5 mins before data becomes stale
            cacheTime: 10 * 60 * 1000, // Cache data for 10 mins
        } */     
    });

    if (pIsLoading) return <div><h4>Loading...</h4></div>;
    if (pErr) return <p>Error: {pErr.message}</p>
    //console.log(pokemon)
    /*
    const {data: moveData, error: moveErr, isLoading: moveLoading } = useQuery({
        queryKey: ['move', moveUrl || ''],
        queryFn: fetchMoveData,
        enabled: !!moveUrl,
    });

    if (moveLoading) return <div><h4>Move Loading...</h4></div>;
    if (moveErr) return <p>Error: {moveErr.message}</p>

    const description = moveData?.flavor_text_entries.filter(val => (
        val.version_group.name === 'firered-leafgreen'
    ))[0]?.flavor_text;

*/
    const EXCLUDED_KEYS = ['other','versions'];

    const getImageList = (sprites) => {
        if(!sprites) return [];

        return (
            Object.keys(sprites).filter(key => (sprites[key] && !EXCLUDED_KEYS.includes(key)))
        )
    }



return (
    <div className="poke-card">
        <div>
            <h4>#{getFullPokedexNumber(sP)}</h4>
            <h2>{pokemon.name}</h2>
        </div>
        <div className="type-container">
            {pokemon?.types?.map((typeObj, index) => 
                <TypeCard key={index} type={typeObj?.type?.name}></TypeCard>  
            )}
        </div>
        {/*
            <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        */}
        <img className="default-img" src={'/pokemon/'+getFullPokedexNumber(sP)+'.png'}
        alt={`${pokemon.name}-large-img`}
        />
        <div className="img-container">
            {getImageList(pokemon.sprites).map((spriteKey, spriteIndex)=> {
            const spriteUrl = pokemon.sprites[spriteKey];
            return (<img key={spriteIndex} src={spriteUrl} alt={`${pokemon.name}-img-${spriteUrl}`}/>)

                })}
        </div>
        <h3>Stats</h3>
        <div className="stats-card">
            {!!pokemon && (pokemon.stats.map((statObj, statObjIndex) => {
                const { base_stat, stat } = statObj;
                return (
                    <div key={statObjIndex} className="stat-item">
                        <p>{stat?.name.replaceAll('-', ' ')}</p>
                        <h4>{base_stat}</h4>
                    </div>
                )
            }))}
        </div>
        <h3>Moves</h3>
        <div className="pokemon-move-grid">
            {pokemon.moves.map((moveObj, moveObjIndex) => {
                return (
                    <button className="button-card pokemon-move"
                    key={moveObjIndex} onClick={() => {
                        //setSkill(true);
                        //setMoveName(moveObj?.name);
                        //setMoveUrl(moveObj?.url)
                        //handleClick(moveObj?.name, moveObj.url)
                        handleClick(moveObj?.move?.name, moveObj?.move?.url);
                        console.log("Move URL:", moveUrl, "Move Name:", moveName);

                    }}>
                        <p>
                            {moveObj?.move?.name.replaceAll('-', ' ')}
                        </p>
                    </button>
                )
            })}

        </div>
            {skill && (<Modal handleCloseModal={() => {setSkill(false)}}>
                <div>
                    <ModalChildren moveName = {moveName} moveUrl = {moveUrl}/>
                </div>
                </Modal>)
            }

    </div>
)
}