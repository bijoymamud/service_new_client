import Banner from './Banner'
import { FeaturedProperties } from './FeaturedProperties '
import { WhyChoose } from './Why_we'
import Packages from './Packages'
  import AllProperty from './AllProperty'
import FAQ from './Faq'
import Testimonial from './Testimonial'
import TagLine from './TagLine'
// import Review from './Review'

const Home = () => {
  return (
    <div>
         <Banner/>
         <FeaturedProperties/>
        <WhyChoose />
        <Packages/>
        <AllProperty/>
        <FAQ/>
        <Testimonial/>
        <TagLine/>
        {/* <Review/> */}
       {/* <TestimonialSlider /> */}
    </div>
  )
}

export default Home
