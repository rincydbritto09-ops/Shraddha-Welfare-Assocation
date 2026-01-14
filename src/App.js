import { Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import Collaboration from "./collaboration";
import Report from "./report"; 
import DonationOptions from "./donation";


function App() {
  const reportAbuseRef = useRef(null);
  return (
    <div className="min-h-screen bg-[#f6f3ee]">

      {/* ================= HEADER ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-green-900">
            Shraddha Welfare Association
          </h1>

          <nav className="space-x-6 text-sm text-green-900">
            <Link to="/">Home</Link>
            <Link to="/collaboration">Collaboration</Link>
            <Link to="/donation">Donation</Link>
          </nav>
        </div>
      </header>

      {/* ================= ROUTES ================= */}
      <Routes>

        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              {/* HERO SECTION */}
              <section className="bg-[#1f3d34] text-white py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      Dignity. Protection.
                      <br />Care for Every Senior Citizen.
                    </h2>

                    <p className="text-green-100 mb-6">
                      Shraddha Welfare Association works to protect senior
                      citizens through dignity, legal awareness, and care.
                    </p>

                    <Link to="/report">
                      <button className="bg-white text-green-900 px-6 py-3 rounded-full font-semibold">
                        Report Elder Abuse
                      </button>
                    </Link>

                    <Link to="/collaboration">
                      <button className="border-2 border-white px-6 py-3 rounded-full ml-4">
                        Collaborate With Us
                      </button>
                    </Link>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src="/images/1stimg.avif"
                      alt="Senior Care"
                      className="w-64 h-64 rounded-full object-cover border-4 border-white"
                    />
                  </div>

                </div>
              </section>

              {/* ABOUT SHRADDHA */}
              <section className="py-16 bg-[#f6f5ee]">
                <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl text-center mb-12 text-[#2f4f3f]">
                    About Shraddha
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#ece6d8] p-6 rounded-xl text-center">
                      <div className="text-3xl mb-4">👥</div>
                      <h3 className="font-semibold mb-2">Who We Are</h3>
                      <p className="text-sm text-gray-600">
                        An NGO supporting senior citizens through dignity,
                        legal awareness, and emotional well-being.
                      </p>
                    </div>

                    <div className="bg-[#ece6d8] p-6 rounded-xl text-center">
                      <div className="text-3xl mb-4">❤</div>
                      <h3 className="font-semibold mb-2">Why We Exist</h3>
                      <p className="text-sm text-gray-600">
                        To protect elders from abuse, neglect, and isolation.
                      </p>
                    </div>

                    <div className="bg-[#ece6d8] p-6 rounded-xl text-center">
                      <div className="text-3xl mb-4">🤝</div>
                      <h3 className="font-semibold mb-2">How We Help</h3>
                      <p className="text-sm text-gray-600">
                        Counselling, awareness programs, legal aid, and
                        community engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* WORK OF SHRADDHA */}
              <section id="report-abuse-form" className="bg-[#f6f5ee] py-16">
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
                          Shraddha Welfare Association works actively to prevent elder abuse, providing counselling,
                          and spread awareness while offering legal and emotional support to senior citizens.
                        </p>
                        <Link to="/report">
                          <button className="bg-[#2f4f3f] text-white px-5 py-2 rounded-full text-sm">
                            Report Abuse
                          </button>
                        </Link>
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
                          with dignity, security, and emotional well-being.
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

              {/* VIDEO & COLLABORATION */}
              <section className="bg-[#1f3d2b] py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <h2 className="text-3xl font-serif text-white mb-10">
                    Hosla & Shraddha: Working Together for Senior Care
                  </h2>

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

              {/* VOICES / TESTIMONIALS */}
              <section ref={reportAbuseRef} className="bg-[#f6f5ee] py-16">
                <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl font-serif text-center text-[#1f3d2b] mb-12">
                    Voices of Trust & Impact
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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

              {/* SUPPORT MISSION */}
              <section className="bg-[#f7f6ef] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-3xl font-serif mb-10 text-[#2f4f3f]">
                    Want to Support Our Mission?
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-[#efe6d2] p-8 rounded-xl">
                      <h3 className="font-semibold mb-3">
                        Collaborate With Us
                      </h3>
                      <p className="text-sm mb-6">
                        Partner with us to strengthen senior care initiatives through
                        meaningful collaborations and shared impact.
                      </p>

                      <Link to="/collaboration">
                        <button className="bg-[#2f4f3f] text-[#efe6d2] px-6 py-2 rounded-full">
                          Collaborate With Us
                        </button>
                      </Link>
                    </div>

                    <div className="bg-[#efe6d2] rounded-xl p-8 text-center">
                      <h3 className="text-lg font-semibold text-[#2f4f3f] mb-3">
                        Support Through Donation
                      </h3>
                      <p className="text-sm text-gray-700 mb-6">
                        Help us reach more seniors in need by supporting our programs through
                        thoughtful and impactful donations.
                      </p>
                      <button className="bg-[#2f4f3f] text-[#efe6d2] px-6 py-2 rounded-full">
                        Support Through Donation
                      </button>
                    </div>

                  </div>
                </div>
              </section>
            </>
          }
        />

        {/* ================= COLLABORATION PAGE ================= */}
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/report" element={<Report />} />
        <Route path="/donation" element={<DonationOptions />} />

      </Routes>
    </div>
  );
}

export default App;