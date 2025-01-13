import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <>
    <Header/>
    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img height={'200px'} width={'100%'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Home