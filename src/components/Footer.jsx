import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px', marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E Cart</h5>
          <p>Designed and built with all the love in the world by the luminar team with the help of our contributors. </p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>

        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart Page</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist Page</Link>

        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>React BootStrap</a>
          <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
          

        </div>
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Contact Us</h5>
        <div className='flex'>
          <input type="text" placeholder='Enter Your Email Here...' className='rounded p-1' />
          <button className='btn btn-info ms-2'><i className='fa-solid fa-arrow-right'></i></button>

        </div>
        <div className='icons flex justify-between mt-3'>
          <a href="https://x.com/explore" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-x-twitter'></i></a>

          <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>

          <a href="https://www.linkedin.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>

          <a href="https://github.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>


          <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>

          <a href="https://github.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i className='fa-brands fa-phone'></i></a>





        </div>


        </div>

      </div>
      <p className='text-center mt-3 text-white'>Copyright &copy; January 2025, E-Cart. Built with React.</p>
    </div>
  )
}

export default Footer