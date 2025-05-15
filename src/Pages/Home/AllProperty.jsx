import PropertyMap from "./PropertyMap/PropertyMap"


const AllProperty = () => {
  return (
    <section className='bg-[#f9f7f2]'>
        <div className='container mx-auto '>
        <h1 className='text-[#1C3988] font-semibold text-4xl text-center pt-10'>Explore Properties on the Map</h1>
        <p className='text-center pt-4 text-gray-700'>Whether you're looking to buy or sell land, we have the right tools and features for you.</p>
      
      <div className="relative h-[400px] md:h-[600px] w-full py-10">
          <PropertyMap />
        </div>
    </div>
    </section>
  )
}

export default AllProperty
