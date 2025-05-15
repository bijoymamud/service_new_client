import React from 'react';

const CenteredTextBackground = () => {
  return (
    <div
      className="h-[50vh] w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/d0yZfNhG/Group-2147226059.png')",
      }}
    >
      <h1 className="text-white  text-center  px-6 py-4 rounded-xl">
        <h1 className='capitalize font-bold text-4xl'>ready to find your perfect property?</h1>
        <p className='text-white/80 mt-2 w-3/5 mx-auto'>Join thousands of buyers and sellers on the world’s premier land marketplace and experience a smarter, more secure way to buy and sell land across the globe. Whether you're looking for a peaceful countryside plot, a strategic investment opportunity, or a space to build your dream home, our platform connects you with high-quality listings and trusted users worldwide.</p>

        <div className='flex items-center justify-center mt-10 gap-5'>
            <button className='border px-8 py-3 cursor-pointer hover:bg-blue-900'>I am a Buyer</button>
           <button className='border px-8 py-3 hover:bg-blue-900 cursor-pointer'>I am a Seller</button>
        </div>
      </h1>
    </div>
  );
};

export default CenteredTextBackground;
