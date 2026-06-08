import { Link } from "react-router-dom";

function EcommerceDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#171717] to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-orange-400 font-bold hover:text-orange-300">
          ← Back to Portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-bold">
              Frontend Project
            </span>

            <h1 className="text-5xl font-black text-orange-400 mt-6 mb-5">
              Smart Shopy - E-Commerce Website
            </h1>

            <p className="text-gray-300 leading-8 text-lg">
              Smart Shopy is a modern and responsive e-commerce website designed
              to give users a smooth online shopping experience. This project
              includes product browsing, product details, wishlist, cart, orders
              and payment flow.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              The main goal of this project is to create a clean, user-friendly
              and mobile responsive shopping platform using React JS.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://smart-shopy-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 px-7 py-3 rounded-xl font-bold hover:bg-orange-400"
              >
                Live Project
              </a>

              <a
                href="https://github.com/Surya-2310/Smart-Shopy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-7 py-3 rounded-xl font-bold hover:bg-gray-200"
              >
                GitHub Code
              </a>
            </div>
          </div>

          <div className="bg-[#111] border border-orange-500/20 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-orange-300 mb-5">
              Project Highlights
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Responsive Design",
                "Product Listing",
                "Product Details",
                "Wishlist Page",
                "Cart Management",
                "Order Page",
                "Payment Page",
                "API Integration",
              ].map((item) => (
                <div key={item} className="bg-black/60 p-4 rounded-2xl border border-white/10">
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#171717] p-6 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-orange-400 mb-3">User Friendly</h3>
            <p className="text-gray-400 leading-7">
              Simple layout and clear navigation help users find products easily.
            </p>
          </div>

          <div className="bg-[#171717] p-6 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-orange-400 mb-3">Clean UI</h3>
            <p className="text-gray-400 leading-7">
              Modern design with attractive product cards and smooth page structure.
            </p>
          </div>

          <div className="bg-[#171717] p-6 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-orange-400 mb-3">React Based</h3>
            <p className="text-gray-400 leading-7">
              Built using React JS with reusable components and routing.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#171717] p-8 rounded-3xl border border-orange-500/20">
          <h2 className="text-3xl font-black text-orange-400 mb-5">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {["React JS", "React Router", "CSS", "API Integration", "Vercel", "GitHub"].map((tech) => (
              <span key={tech} className="bg-black px-5 py-3 rounded-full border border-orange-500/20 text-orange-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcommerceDetails;