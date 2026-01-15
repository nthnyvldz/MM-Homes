import Navigation from "../../components/navigation";

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
        <div className="categSect1 group relative flex justify-center h-40 md:h-80 w-full items-center overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 group-hover:opacity-0 transition-opacity duration-300">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">
              Top Residential Sales Last 5 Years
            </h5>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs md:text-sm lg:text-base font-medium mb-2">
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales! Our team works hard everyday to grow and learn, so that we
              may continue to excel in our market. Our clients deserve our best,
              & we want to make sure our best is better every year.
            </p>
          </div>
        </div>

        <div className="categSect2 group relative flex justify-center h-40 md:h-80 w-full items-center overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 group-hover:opacity-0 transition-opacity duration-300">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">
              Don't Just List it...
            </h5>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs md:text-sm lg:text-base font-medium mb-2">
              Get it SOLD! We exhaust every avenue to ensure our listings are at
              the fingertips of every possible buyer, getting you top dollar for
              your home.
            </p>
          </div>
        </div>

        <div className="categSect3 group relative flex justify-center h-40 md:h-80 w-full items-center overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 group-hover:opacity-0 transition-opacity duration-300">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">
              Guide to Buyers
            </h5>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs md:text-sm lg:text-base font-medium mb-2">
              Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, & more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
