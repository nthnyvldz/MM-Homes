import Cards from "../../components/cards";
import Inputs from "../../components/inputs";
import Navigation from "../../components/navigation";
import "react-multi-carousel/lib/styles.css";

export default function HomePage() {
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
    </div>
  );
}
