import Cards from "../../components/cards";
import Inputs from "../../components/inputs";
import Navigation from "../../components/navigation";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import DynamicCards from "../../components/dynamic-cards";
import slide1 from "../../assets/slide1.webp";
import slide2 from "../../assets/slide2.webp";
import slide3 from "../../assets/slide3.webp";
import slide4 from "../../assets/slide4.webp";
import slide5 from "../../assets/slide5.webp";
import slide6 from "../../assets/slide6.webp";
import slide7 from "../../assets/slide7.webp";
import service1 from "../../assets/services1.webp";
import service2 from "../../assets/services2.webp";
import service3 from "../../assets/services3.webp";
import support1 from "../../assets/support1.webp";
import support2 from "../../assets/support2.webp";
import support3 from "../../assets/support3.webp";
import support4 from "../../assets/support4.webp";

export default function HomePage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section flex justify-center py-56 xl:py-64 px-4 md:px-6 lg:px-8 items-center">
        <div className="max-w-7xl text-center">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-4">
            Pahrump Realtor
          </h2>

          <p className="mt-4 text-sm md:text-base lg:text-xl text-white">
            MARCI METZGER - THE RIDGE REALTY GROUP
          </p>

          <div className="mt-8">
            <a
              href="tel:(206) 919-6886"
              className="px-6 py-3 rounded-md bg-white hover:bg-[#f0f0f0] font-medium text-sm md:text-base lg:text-xl transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <div className="m-12 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center ">
        <Cards
          title="Top Residential Sales Last 5 Years"
          description="We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales! Our team works hard everyday to grow and learn, so that we
              may continue to excel in our market. Our clients deserve our best,
              & we want to make sure our best is better every year."
          classId="showcase1"
        />

        <Cards
          title="Don't Just List it..."
          description="Get it SOLD! We exhaust every avenue to ensure our listings are at
              the fingertips of every possible buyer, getting you top dollar for
              your home."
          classId="showcase2"
        />

        <Cards
          title="Guide to Buyers"
          description="Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, & more!"
          classId="showcase3"
        />
      </div>

      {/* Find Listing Section */}
      <div className="find-listing-section flex justify-center py-56 xl:py-64 px-4 md:px-6 lg:px-8 items-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full">
          <h2 className="text-md lg:text-xl font-bold text-gray-800 text-center">
            SEARCH LISTINGS
          </h2>

          <div className="grid gap-3 lg:grid-cols-3 lg:gap-5 mt-8">
            <Inputs
              inputType="selection"
              placeholder="Select Location"
              label="Location"
              options={["Location 1", "Location 2", "Location 3"]}
            />

            <Inputs
              inputType="selection"
              placeholder="Type"
              label="Type"
              options={["Type 1", "Type 2", "Type 3"]}
            />

            <Inputs
              inputType="selection"
              placeholder="Sort By"
              label="Sort By"
              options={["Option 1", "Option 2", "Option 3"]}
            />

            <Inputs
              inputType="selection"
              placeholder="Any Number"
              label="Bedrooms"
              options={["1+", "2+", "3+", "4+", "5+"]}
            />

            <Inputs
              inputType="selection"
              placeholder="Any Number"
              label="Baths"
              options={["1+", "2+", "3+", "4+", "5+"]}
            />

            <div className="grid grid-cols-2 gap-2">
              <Inputs inputType="number" label="Min Price" />
              <Inputs inputType="number" label="Max Price" />
            </div>

            <button className="col-span-full px-6 py-3 rounded-md bg-black hover:bg-gray-800 text-[12px] lg:text-sm font-medium text-white transition-colors">
              Search Listings
            </button>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-16 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            PHOTO GALLERY
          </h2>

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-2"
          >
            <div>
              <img
                src={slide1}
                alt="Slide 1"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={slide2}
                alt="Slide 2"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={slide3}
                alt="Slide 3"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={slide4}
                alt="Slide 4"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={slide5}
                alt="Slide 5"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={slide6}
                alt="Slide 6"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={slide7}
                alt="Slide 7"
                className="w-full h-full lg:h-96 object-cover rounded-lg"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-8 px-4 md:px-6 lg:px-8">
        <h2 className="text-md lg:text-3xl font-bold text-gray-800 text-center mb-12">
          OUR SERVICES
        </h2>
        <div className="max-w-sm md:max-w-4xl lg:max-w-7xl mx-auto">
          <DynamicCards
            image={service1}
            title="Real Estate Done Right"
            description="Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
          />

          <DynamicCards
            image={service2}
            title="Real Estate Done Right"
            description="Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
          />

          <DynamicCards
            image={service3}
            title="Real Estate Done Right"
            description="Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
          />
        </div>
      </div>

      {/* Support Section */}
      <div className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex justify-center">
              <img
                src={support1}
                alt="Support 1"
                className="w-auto h-24 object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={support2}
                alt="Support 2"
                className="w-auto h-24 object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={support3}
                alt="Support 3"
                className="w-auto h-24 object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={support4}
                alt="Support 4"
                className="w-auto h-24 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
