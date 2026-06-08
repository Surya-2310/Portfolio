import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/surya.png";

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [skillModal, setSkillModal] = useState(false);
  const [activeSkill, setActiveSkill] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React JS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "API Integration", category: "Frontend" },
    { name: "Zoho Creator", category: "Zoho" },
    { name: "Deluge Script", category: "Zoho" },
    { name: "React Native", category: "Mobile" },
  ];

  const categories = ["All", "Frontend", "Zoho", "Tools", "Mobile"];

  const filteredSkills = activeSkill === "All" ? skills : skills.filter((skill) => skill.category === activeSkill);

  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Modern shopping website with product list, product details, cart, wishlist, orders and payment flow.",
      tech: "React, Router, CSS, API",
      type: "Frontend",
      detailsLink: "/ecommerce-details",
      icon: "🛒",
    },
    {
      title: "Restaurant Website",
      desc: "Responsive restaurant website featuring menu display, table reservation, contact form, and mobile-friendly design.",
      tech: "HTML, CSS, JavaScript, React", // Added React if using the component created earlier
      type: "Frontend",
      detailsLink: "/restaurant-details", // ✨ Enabled the route link here!
      icon: "🍽️",
    },
    {
      title: "Billing & Sales Management",
      desc: "Business app for billing, sales records, customer details, reports and workflow automation.",
      tech: "Zoho Creator, Deluge",
      type: "Zoho Creator",
      icon: "📊",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setSuccess("Please fill all fields");
      return;
    }

    setSuccess("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.18),transparent_35%)]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black">
            Surya<span className="text-orange-400"></span>
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-orange-400 capitalize">
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4 bg-black">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left">
            <p className="text-orange-400 font-bold mb-4">Hello, I am</p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Surya
            </h2>

            <h3 className="mt-5 text-2xl md:text-4xl font-bold text-gray-200">
              Frontend Developer <span className="text-orange-400">&</span> Zoho Creator Developer
            </h3>

            <p className="mt-6 text-gray-400 leading-8 max-w-2xl mx-auto lg:mx-0">
              I build responsive web interfaces, React applications, Zoho Creator apps,
              workflow automation and user-friendly business solutions.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="bg-orange-500 px-7 py-3 rounded-xl font-bold hover:bg-orange-400">
                View Projects
              </a>

              <a href="tel:+916374793309" className="border border-orange-400 text-orange-400 px-7 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white">
                Hire Me
              </a>

              <a href="/Resume.pdf" target="_blank" className="bg-white text-black px-7 py-3 rounded-xl font-bold hover:bg-gray-200">
                View CV
              </a>

              <a href="/Resume.pdf" download="Surya_Resume.pdf" className="bg-orange-300 text-black px-7 py-3 rounded-xl font-bold hover:bg-gray-200">
                Download CV
              </a>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start gap-5 text-gray-300">
              <a href="https://github.com/Surya-2310" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/surya-s-t2310" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                LinkedIn
              </a>
              <a href="mailto:suryaseetharaman001@gmail.com" className="hover:text-orange-400">
                Email
              </a>
            </div>
          </div>

          {/* Profile Image Banner */}
          <div className="flex justify-center">
            <div className="relative cursor-pointer" onClick={() => setImageOpen(true)}>
              <div className="absolute -inset-8 bg-orange-500/25 blur-3xl rounded-full"></div>

              <div className="relative w-[290px] sm:w-[380px] h-[420px] bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-700 rounded-[45px] p-1 shadow-2xl">
                <div className="w-full h-full bg-[#111] rounded-[42px] p-4 overflow-hidden">
                  <img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover rounded-[34px] hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <p className="text-center text-orange-300 mt-4 text-sm">
                Click image to view full size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Modal */}
      {imageOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-5">
          <button
            onClick={() => setImageOpen(false)}
            className="absolute top-6 right-6 bg-orange-500 px-4 py-2 rounded-xl font-bold"
          >
            Close
          </button>

          <img
            src={image}
            alt="full profile"
            className="max-w-full max-h-[85vh] object-contain rounded-3xl border border-orange-500/40"
          />
        </div>
      )}

      {/* Stats */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {["3+ Projects", "12 Skills", "Responsive UI", "Job Ready"].map((item) => (
            <div key={item} className="bg-white/5 backdrop-blur border border-orange-500/20 p-6 rounded-2xl text-center">
              <h3 className="text-lg md:text-xl font-bold text-orange-400">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-black text-orange-400 mb-6 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300 leading-8">
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                Frontend Developer
              </h3>
              <p>
                I am a Frontend Developer skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React JS. I build responsive, user-friendly, and modern web applications with clean UI designs.
                I have created an E-Commerce Website with product listing, cart, wishlist, orders, and payment pages.
                I also work on frontend projects like portfolio websites, landing pages, dashboards, and mobile app UI designs. 
                I enjoy exploring new frontend technologies and improving my skills by building real-time projects.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-orange-300 mb-3">
                Zoho Creator Developer
              </h3>
              <p>
                I have created a Billing System using Zoho Creator with forms, reports, pages, and workflows. 
                This project helps manage customer details, product details, invoice generation, billing records, and payment status.
                It also makes the billing process easier, faster, and more organized using low-code development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-black/30">
        <h2 className="text-4xl font-black text-center text-orange-400 mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Click below button to filter skills by category.
        </p>

        <div className="text-center mb-10">
          <button
            onClick={() => setSkillModal(true)}
            className="bg-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-400"
          >
            Open Skill Filter
          </button>
        </div>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill.name} className="px-5 py-3 bg-[#171717] border border-orange-500/20 rounded-full hover:border-orange-400 hover:-translate-y-1 transition">
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Skill Filter Modal */}
      {skillModal && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-5">
          <div className="w-full max-w-3xl bg-[#111] border border-orange-500/30 rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-black text-orange-400">
                Skill Filter
              </h2>

              <button
                onClick={() => setSkillModal(false)}
                className="bg-orange-500 px-4 py-2 rounded-xl font-bold"
              >
                X
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkill(cat)}
                  className={`px-5 py-2 rounded-full font-bold ${
                    activeSkill === cat
                      ? "bg-orange-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="bg-black p-4 rounded-2xl border border-white/10">
                  <h3 className="text-orange-300 font-bold">{skill.name}</h3>
                  <p className="text-gray-500 text-sm">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <p className="text-center text-orange-300 font-bold mb-3">My Work</p>
        <h2 className="text-4xl font-black text-center text-orange-400 mb-12">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-[#151515] border border-white/10 rounded-3xl p-6 hover:border-orange-400 hover:-translate-y-2 transition">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
                  {project.type}
                </span>
                <span className="text-4xl">{project.icon}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 leading-7 mb-4">{project.desc}</p>
              <p className="text-orange-300 font-semibold mb-5">{project.tech}</p>

              {project.detailsLink ? (
                <Link to={project.detailsLink} className="block text-center w-full bg-orange-500 py-3 rounded-xl font-bold hover:bg-orange-400">
                  View Details
                </Link>
              ) : (
                <button className="w-full bg-gray-700 py-3 rounded-xl font-bold cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center text-orange-400 mb-4">
            Contact Me
          </h2>

          <p className="text-center text-gray-400 mb-10">
            Send your message using the box below.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a href="mailto:suryaseetharaman001@gmail.com" className="bg-[#171717] p-5 rounded-2xl border border-orange-500/10 hover:border-orange-400 text-center">
              <p className="text-xs uppercase text-gray-500 mb-1">Email Me</p>
              <p className="text-orange-300 font-semibold break-all">suryaseetharaman001@gmail.com</p>
            </a>

            <a href="tel:+916374793309" className="bg-[#171717] p-5 rounded-2xl border border-orange-500/10 hover:border-orange-400 text-center">
              <p className="text-xs uppercase text-gray-500 mb-1">Call Me</p>
              <p className="text-orange-300 font-semibold">+91 6374793309</p>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#111] border border-orange-500/20 rounded-3xl p-6 md:p-8">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="w-full mb-4 p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-orange-400"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              className="w-full mb-4 p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-orange-400"
            />

            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your Message"
              className="w-full mb-4 p-4 rounded-xl bg-black border border-white/10 outline-none focus:border-orange-400"
            ></textarea>

            {success && <p className="text-orange-300 mb-4">{success}</p>}

            <button className="w-full bg-orange-500 py-4 rounded-xl font-bold hover:bg-orange-400">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-6 text-center bg-black text-gray-400">
        © 2026 Surya. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Portfolio;