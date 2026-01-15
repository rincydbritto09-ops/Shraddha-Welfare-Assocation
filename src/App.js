import { Link, Routes, Route } from "react-router-dom";
import Collaboration from "./collaboration";
import Donation from "./donation";
import { FaUsers, FaHeart, FaHandshake } from "react-icons/fa";
function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ee]">

      {/* ================= HEADER ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-green-900">
            Shraddha Welfare Association
          </h1>

          <div className="space-x-6 text-sm text-green-900">
            <Link to="/">Home</Link>
            <Link to="/collaboration">Collaboration</Link>
            <Link to="/donation">Donation</Link>
          </div>
        </div>
      </header>

      {/* ================= ROUTES ================= */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* ================= HERO SECTION ================= */}
              <section className="bg-[#1f3d34] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Dignity. Protection.
                      <br />
                      Care for Every Senior Citizen.
                    </h2>

                    <p className="mt-5 text-green-100 text-sm">
                      Shraddha Welfare Association works to protect senior citizens,
                      promoting dignity and emotional well-being.
                    </p>

                    <div className="mt-8 flex gap-4">
                      <button
                        className="bg-white text-green-900 px-6 py-3 rounded-full font-semibold"
                        onClick={() =>
                          document
                            .getElementById("report-abuse")
                            .scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        Report Elder Abuse
                      </button>

                      <button className="border-2 border-white px-6 py-3 rounded-full">
                        Explore Our Work
                      </button>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    <img
                      src="/images/1stimg.avif"
                      alt="Senior Citizens"
                      className="w-60 h-60 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
              </section>

{/* ABOUT SHRADDHA START */}
<section className="bg-[#f6f5ee] py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-serif text-center text-[#2f4f3f] mb-12">
      About Shraddha
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Box 1 */}
      <div className="bg-[#ece6d8] p-6 rounded-xl shadow-sm text-center">
       <div className="text-green-700 text-4xl mb-4 flex justify-center">
         <FaUsers />
       </div>
        <h3 className="font-semibold text-lg mb-2">Who We Are</h3>
        <p className="text-sm text-gray-600">
          Shraddha Welfare Association is an NGO dedicated to supporting senior
          citizens through dignity, legal awareness, and emotional well-being.
        </p>
      </div>

      {/* Box 2 */}
      <div className="bg-[#ece6d8] p-6 rounded-xl shadow-sm text-center">
        <div className="text-green-700 text-4xl mb-4 flex justify-center">
          <FaHeart />
        </div>
        <h3 className="font-semibold text-lg mb-2">Why We Exist</h3>
        <p className="text-sm text-gray-600">
          To protect elders from abuse, neglect, and isolation while ensuring
          their safety, rights, and dignity.
        </p>
      </div>

      {/* Box 3 */}
      <div className="bg-[#ece6d8] p-6 rounded-xl shadow-sm text-center">
        <div className="text-green-700 text-4xl mb-4 flex justify-center">
          <FaHandshake />
        </div>
        <h3 className="font-semibold text-lg mb-2">How We Help</h3>
        <p className="text-sm text-gray-600">
          Through counselling, awareness programs, legal aid, and strong
          community engagement initiatives.
        </p>
      </div>

    </div>
  </div>
</section>
{/* ABOUT SHRADDHA END */}

              {/* WORK OF SHRADDHA START */}
<section className="bg-[#f6f5ee] py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-serif text-center text-[#2f4f3f] mb-16">
      Work of Shraddha
    </h2>

    <div className="space-y-20">

      {/* ITEM 1 – Image Left, Content Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-64 bg-[#ece6d8] rounded-xl overflow-hidden">
          <img
            src="/images/img2.jpeg"
            alt="Prevent Elder Abuse"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#2f4f3f]">
            Work of Shraddha
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Shraddha Welfare Association works actively to prevent elder abuse,provide couselling,
            and spread awareness while offering legal and emotional support to senior citizens
          </p>
          <button className="bg-[#2f4f3f] text-white px-5 py-2 rounded-full text-sm">
            Report Abuse
          </button>
        </div>
      </div>

      {/* ITEM 2 – Content Left, Image Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="md:order-1 order-2">
          <h3 className="text-xl font-semibold mb-3 text-[#2f4f3f]">
            Community Support & Care
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We work closely with families, caregivers, and communities to ensure elders live 
            with dignity, security and emotional well-being
          </p>
          <button className="bg-[#2f4f3f] text-white px-5 py-2 rounded-full text-sm">
            Explore Our Work
          </button>
        </div>

        <div className="w-full h-64 bg-[#ece6d8] rounded-xl overflow-hidden md:order-2 order-1">
          <img
            src="/images/img3.jpeg"
            alt="Community Care"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ITEM 3 – Image Left, Content Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-64 bg-[#ece6d8] rounded-xl overflow-hidden">
          <img
            src="/images/img4.jpeg"
            alt="Legal Awareness"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#2f4f3f]">
            Legal Awareness & Guidance
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We educate senior citizens about their legal rights and provide
            guidance to help them take informed and confident decisions.
          </p>
          <button className="bg-[#2f4f3f] text-white px-5 py-2 rounded-full text-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* ITEM 4 – Content Left, Image Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="md:order-1 order-2">
          <h3 className="text-xl font-semibold mb-3 text-[#2f4f3f]">
            Emotional Counselling
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Our counselling services help elders cope with loneliness, stress,
            and emotional challenges, restoring confidence and hope.
          </p>
          <button className="bg-[#2f4f3f] text-white px-5 py-2 rounded-full text-sm">
            Get Support
          </button>
        </div>

        <div className="w-full h-64 bg-[#ece6d8] rounded-xl overflow-hidden md:order-2 order-1">
          <img
            src="/images/img5.jpeg"
            alt="Emotional Support"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>

  </div>
</section>
{/* WORK OF SHRADDHA END */}

<section className="bg-[#1f3d2b] py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-serif text-white mb-10">
      Hosla & Shraddha: Working Together for Senior Care
    </h2>
    
{/* Video Section */}
<div className="w-full max-w-4xl mx-auto aspect-[14/9] rounded-xl overflow-hidden mb-8">
  <video
    src="/videos/Vid1.mp4"
    controls
    className="w-full h-full object-cover"
  />
</div>

    <p className="text-white text-sm leading-relaxed mb-6">
      This video explores the strategic collaboration between Hosla and
      Shraddha Welfare Association, sharing experiences that enable
      comprehensive care and support for senior citizens, amplifying
      impact together.
    </p>

    <button className="bg-[#f6f5ee] text-[#1f3d2b] px-6 py-2 rounded-full text-sm font-medium">
      Elder Care
    </button>

  </div>
</section>
<section className="bg-[#f6f5ee] py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-serif text-center text-[#1f3d2b] mb-12">
      Voices of Trust & Impact
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Box 1 */}
      <div className="bg-[#ede9dd] p-6 rounded-xl text-center shadow-sm">
        <div className="text-3xl text-[#1f3d2b] mb-4">❝</div>
        <p className="text-sm text-gray-700 mb-4">
          Shraddha understood my problems and stood by me when I needed
          support the most. Their compassion gave me strength.
        </p>
        <h4 className="text-sm font-semibold text-[#1f3d2b]">
          Anupama Senior Citizen
        </h4>
      </div>

      {/* Box 2 */}
      <div className="bg-[#ede9dd] p-6 rounded-xl text-center shadow-sm">
        <div className="text-3xl text-[#1f3d2b] mb-4">❝</div>
        <p className="text-sm text-gray-700 mb-4">
          The guidance and counselling helped our family rebuild trust and
          ensure safety for our elderly parents.
        </p>
        <h4 className="text-sm font-semibold text-[#1f3d2b]">
          Priya Menon
        </h4>
      </div>

      {/* Box 3 */}
      <div className="bg-[#ede9dd] p-6 rounded-xl text-center shadow-sm">
        <div className="text-3xl text-[#1f3d2b] mb-4">❝</div>
        <p className="text-sm text-gray-700 mb-4">
          Their legal awareness sessions empowered us to protect elder
          rights and take confident decisions.
        </p>
        <h4 className="text-sm font-semibold text-[#1f3d2b]">
          Dileep Kumar
        </h4>
      </div>

    </div>
  </div>
</section>

              {/* ================= REPORT ABUSE ================= */}
              <section id="report-abuse" className="bg-[#f6f5ee] py-16">
                <div className="max-w-4xl mx-auto px-6">
                  <div className="bg-[#1f3d2b] rounded-2xl p-10 shadow-lg">
                    <h2 className="text-2xl text-white text-center mb-4">
                      Report Abuse Against a Senior Citizen
                    </h2>

                    <p className="text-sm text-center text-[#d6e2dc] mb-6">
        Your details will remain confidential. You can help protect and support
        seniors by reporting abuse.
      </p>

      {/* Notice box */}
      <div className="bg-[#254b37] text-[#e6efe9] text-sm p-4 rounded-lg mb-6">
        🔒 Confidentiality Notice: This form is secure and your information
        will be handled with care.
      </div>

      {/* Form */}
      <form className="space-y-4">

        <input
          type="text"
          placeholder="Full Name (Optional)"
          className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Contact Number (Optional)"
            className="p-3 rounded-lg bg-white text-gray-700 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address (Optional)"
            className="p-3 rounded-lg bg-white text-gray-700 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Relationship to the Senior Citizen"
            className="p-3 rounded-lg bg-white text-gray-700 outline-none"
          />
          <input
            type="text"
            placeholder="Location of Incident"
            className="p-3 rounded-lg bg-white text-gray-700 outline-none"
          />
        </div>

        {/* Type of Abuse */}
        <div>
          <p className="text-white text-sm mb-2">Type of Abuse</p>
          <div className="flex flex-wrap gap-4 text-[#e6efe9] text-sm">
            <label><input type="checkbox" className="mr-2" /> Physical</label>
            <label><input type="checkbox" className="mr-2" /> Emotional</label>
            <label><input type="checkbox" className="mr-2" /> Financial</label>
            <label><input type="checkbox" className="mr-2" /> Neglect</label>
            <label><input type="checkbox" className="mr-2" /> Psychological</label>
          </div>
        </div>

        <textarea
          rows="4"
          placeholder="Describe the situation briefly"
          className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
        ></textarea>

        {/* Button */}
        <div className="text-center pt-4">
          <button className="bg-[#ede9dd] text-[#1f3d2b] px-6 py-3 rounded-full font-medium hover:bg-[#e2ddcf] transition">
            Submit Confidential Report
          </button>
        </div>

      </form>
    </div>
  </div>
</section>
{/* REPORT ABUSE FORM END */}


              {/* ================= SUPPORT MISSION ================= */}
              <section className="bg-[#f7f6ef] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-3xl font-serif text-center text-[#2f4f3f] mb-10">
                    Want to Support Our Mission?
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#efe6d2] p-8 rounded-xl">
                      <h3 className="font-semibold mb-3">
                        Collaborate With Us
                      </h3>
                      <p className="text-sm mb-6">
                        Partner with us for meaningful senior care initiatives.
                      </p>

                      <Link to="/collaboration">
                        <button className="bg-[#2f4f3f] text-[#efe6d2] px-6 py-2 rounded-full">
                        Collaborate With Us
                      </button>
                      </Link>
                    </div>

                    <div className="bg-[#efe6d2] p-8 rounded-xl">
                      <h3 className="font-semibold mb-3">
                        Support Through Donation
                      </h3>
                    <Link to="/donation">
                      <button className="bg-[#2f4f3f] text-[#efe6d2] px-6 py-2 rounded-full">
                        Donate Now
                      </button>
                    </Link>
                    </div>
                  </div>
                </div>
              </section>
            </>
          }
        />

        {/* ================= COLLABORATION PAGE ================= */}
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </div>
  );
}

export default App;
