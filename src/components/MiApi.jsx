import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Search from './Search'
function MiApi() {
  const [info, setInfo] = useState({})
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")
 const apiURL = 'https://rickandmortyapi.com/api/character'
  async function getcharacters(apiURL) {
        const res = await fetch(apiURL)
        const data = await res.json()
        const sortData = data.results.sort((a,b) => {
            if (a.name < b.name) {
              return -1;
            } if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
      
          setCharacters(sortData);
        setInfo(data.info)
        return data
}
const handleSearch = (e) => {
setSearch(e.target.value);
}
const listCharacters = !search
? characters
: characters.filter((x) => x.name.toLowerCase().includes(search.toLocaleLowerCase()));

    useEffect(() => {
        getcharacters(apiURL)

    }, [])

    return (
        <>
                       {/* Buscador */}
            {/* SEARCH SECTION */}
            <div className='text-center p-10 bg-pink-400 mt-3 h-screen'>

                <input onChange={(e) => handleSearch(e)}
                    type='search'
                    value={search}
                    className='bg-green px-3 gap-3 rounded-md mx-3'
                    placeholder='Buscar por nombre'
                />
                <button
                type="button"
                aria-label="Submit Search"
                
               
                >Vivo</button>








            </div>

                       <div className='conteiner m-4'>
            <div className='row'>

                    {

                        listCharacters.map((item, i) => (
                            <div key={i} className='col mb-4'>
                                <div className='card' style={{ minWidth: '100px' }}>
                                    <img src={item.image} alt="" />
                                    <div className='card-body'>
                                        <h3 className='card-title'>{item.name}</h3>
                                        <hr />
                                        <p>Status: {item.status}</p>
                                        <p>Especie: {item.species} </p>
                                        <p>Genero: {item.gender} </p>
                                        <p>Origen: {item.origin.name} </p>
                                        <p>Localizacion: {item.location.name} </p>



                                    </div>
                                </div>
                            </div>


                        ))
                    }




                </div>





            </div>


        </>




    )
}

export default MiApi