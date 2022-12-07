import React from 'react'

function Cards({listCharacters=[]}) {
  return (
    <div className='row'>

      {

listCharacters.map((item,i)=>(
          <div key={i} className='col mb-3'>
            <div className='card' style={{minWidth:'200px'}}>
              <img src={item.image} alt="" />
              <div className='card-body'>
                <h3 className='card-title'>{item.name}</h3>
                <hr/>
                <p>Status: {item.status}</p>
                <p>Species: {item.species} </p>
                <p>Gender: {item.gender} </p>
                <p>Origin: {item.origin.name} </p>
                <p>Location: {item.location.name} </p>



              </div>
            </div>
             </div>


        ))
      }
       

       

    </div>
  )
}

export default Cards