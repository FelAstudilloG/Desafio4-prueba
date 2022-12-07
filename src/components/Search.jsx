import React from 'react'

function Search({onSearch}) {

    const handleSearch=()=>{
        onSearch()
    
      }
    
  return (
    <div className='conteiner mt-3'>
        <ul className='justify-content-center page-item'>
        <input type="text" placeholder='Inserte nombre'
        className='m-2'
        value={onSearch}/>
        
        <button
        className='m-2'
        onClick={handleSearch}>Search</button>


        </ul>
        
    </div>
  )
}

export default Search