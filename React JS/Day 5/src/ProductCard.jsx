import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <div className='text-white border-2 p-5 flex flex-col w-70 h-100 gap-5 bg-blue-300'>
        <img className='w-60' src="https://imgs.search.brave.com/pv8oepH2hyfG0LUmeOgMNBgG8M8p_Q8ramCymcy-hFw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvY3NzLXRy/YW5zaXRpb25zLWFu/aW1hdGUtaGFtYnVy/Z2VyLWJ1dHRvbi5w/bmc" alt="" />
        <h1>Name od Product</h1>
        <p className='text-[13px]'>Description</p>
        <p className='text-green-600'>Price</p>
        <button className='bg-amber-300 p-3 text-[20px] font-bold font-mono'>Delete</button>
      </div>
    </div>
  )
}

export default ProductCard
