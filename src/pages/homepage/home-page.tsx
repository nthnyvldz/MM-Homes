import Cards from "../../components/cards";
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
    </div>
  );
}
