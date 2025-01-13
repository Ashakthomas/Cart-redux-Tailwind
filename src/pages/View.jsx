import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img height={'250px'} width={'350px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
        <div>
          <h3 className='font-bold'>PID: id</h3>
          <h1 className='text-5xl font-bold'>Title</h1>
          <h4 className='text-2xl text-red-600 font-bold'>$ 250</h4>
          <h4>Brand :</h4>
          <h4>Category :</h4>
          <p>
            <span className='font-bold'>Description</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur expedita itaque distinctio nostrum explicabo accusantium. Sed ad hic, possimus similique asperiores minus. Illum ipsum a similique nam nesciunt aspernatur accusamus?
          </p>
          <div className='flex justify-between mt-5'>
            <button className='bg-blue-600 rounded text-white p-2'>Add to whishlist</button>
            <button className='bg-green-600 rounded text-white p-2'>Add to cart</button>


          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default View