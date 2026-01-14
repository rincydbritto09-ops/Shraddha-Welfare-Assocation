function Donation() {
  const options = [
    {
      title: "One-Time Donation",
      desc: "Make a one-time contribution",
      type: "one-time",
      icon: <RupeeSVG />,
    },
    {
      title: "Monthly Support",
      desc: "Support monthly for consistent help",
      type: "monthly",
      icon: <CalendarSVG />,
    },
    {
      title: "Custom Contribution",
      desc: "Choose your own amount",
      type: "custom",
      icon: <PercentSVG />,
    },
  ];

  const onSelect = (type) => {
    console.log("Selected:", type);
  };

  return (
    <div className="bg-[#f6f5ee] text-[#1f3d2b]">

      {/* ================= HERO ================= */}
<section className="bg-gradient-to-r from-[#1f3d2b] to-[#2f5d44] text-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Content */}
    <div>
      <h1 className="text-4xl font-serif font-bold mb-4">
        Support Dignity. Protect Lives. Restore Hope.
      </h1>
      <p className="text-lg mb-6">
        Your support enables Shraddha Welfare Association to protect
        senior citizens from abuse, neglect, and isolation.
      </p>
      <button className="bg-white text-[#1f3d2b] px-6 py-3 rounded-full font-semibold shadow">
        Donate Now
      </button>
    </div>

    {/* Right Image Placeholder */}
    <div className="flex justify-center md:justify-end">
    <div className="w-full max-w-md h-72 bg-white/10 rounded-2xl overflow-hidden">
    <img src="/images/nur.jpg" alt="Prevent Elder Abuse" className="w-full h-full object-cover"/>
   </div>
  </div>
</div>
</section>

      {/* ================= WHY SUPPORT MATTERS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2">
            Why Your Support Matters
          </p>
          <h2 className="text-3xl font-serif font-bold mb-12">
            Why Your Donation Makes a Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<HeartHandsSVG />}
              title="Protecting Vulnerable Seniors"
              desc="Protection from abuse, neglect, and isolation."
            />
            <InfoCard
              icon={<ChatSVG />}
              title="Free Counselling"
              desc="Emotional and psychological support."
            />
            <InfoCard
              icon={<BulbSVG />}
              title="Awareness & Prevention"
              desc="Education and community outreach."
            />
          </div>
        </div>
      </section>

{/* ================= TRANSPARENCY ================= */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="uppercase text-sm tracking-widest font-semibold mb-2">
      How Your Donation Is Used
    </p>
    <h2 className="text-3xl font-serif font-bold mb-12">
      Transparency Matters to Us
    </h2>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {[
        "Free Abuse Counselling & Helpline",
        "Legal Awareness Workshops",
        "Community Counselling",
        "Medical & Essential Aids",
        "Volunteer Training",
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <TickCircleSVG />
          </div>
          <p className="text-sm">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= DONATION OPTIONS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-sm font-semibold">
              Donation Options
            </p>
            <h2 className="text-3xl font-serif font-bold mt-2">
              Choose How You Want to Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((opt) => (
              <div
                key={opt.type}
                onClick={() => onSelect(opt.type)}
                className="bg-[#dfe8df] p-6 rounded-2xl text-center cursor-pointer hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    {opt.icon}
                  </div>
                </div>

                <h3 className="font-semibold">{opt.title}</h3>
                <p className="text-sm mt-2">{opt.desc}</p>

                <button className="mt-4 px-5 py-2 bg-[#1f3d2b] text-white rounded-full">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DONATION FORM ================= */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl p-10 shadow">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">
            Make a Donation
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <AmountBtn text="₹500" />
            <AmountBtn text="₹1,000" />
            <AmountBtn text="₹2,500" />
            <AmountBtn text="Custom Amount" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input className="border p-3 rounded" placeholder="Full Name" />
            <input className="border p-3 rounded" placeholder="Email Address" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input className="border p-3 rounded" placeholder="Contact Number (Optional)" />
            <input className="border p-3 rounded" placeholder="Message (Optional)" />
          </div>

          <button className="w-full bg-[#1f3d2b] text-white py-3 rounded-full font-semibold">
            Proceed to Secure Payment
          </button>
        </div>
      </section>

      {/* ================= AFTER PAYMENT INFO ================= */}
<section className="py-12 bg-[#f0f0e6]">
  <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl p-8 shadow text-center">

    {/* Secure Payment Assurance */}
    <h2 className="text-2xl font-serif font-bold mb-3">
      Secure Payment
    </h2>
    <p className="text-sm mb-6">
      Your contribution is safe and goes directly to supporting senior citizens. Transparency is our priority, ensuring every donation makes a real impact.
    </p>

    {/* Other Ways to Support */}
    <h3 className="text-lg font-semibold mb-2">Other Ways to Support</h3>
    <h2 className="text-xl font-bold mb-3">Cannot Donate Right Now?</h2>
    
    <div className="flex flex-col gap-2 text-left mb-4">
      {[
        "Volunteers",
        "Spread Awareness",
        "Share Information",
        "Corporate Partnership",
      ].map((item, idx) => (
        <h5 key={idx} className="flex items-center gap-2 text-sm">
          <span className="inline-block w-2 h-2 bg-[#1f3d2b] rounded-full"></span>
          {item}
        </h5>
      ))}
    </div>

    {/* Explore Other Ways to Help */}
    <button className="mx-auto mb-4 px-6 py-2 border-2 border-[#1f3d2b] rounded-full hover:bg-[#1f3d2b] hover:text-white transition">
      Explore Other Ways to Help
    </button>

    {/* Inspirational Closing */}
    <h2 className="text-xl font-serif font-bold mt-4">
      Every senior citizen deserves dignity, safety, and care...
    </h2>
  </div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1f3d2b] text-white py-8 text-center">
        <p className="text-sm">
          Shraddha Welfare Association · An initiative under Hosla
        </p>
      </footer>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

const InfoCard = ({ icon, title, desc }) => (
  <div className="bg-[#dfe8df] p-6 rounded-2xl">
    <div className="w-14 h-14 mx-auto rounded-full bg-white flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm">{desc}</p>
  </div>
);

const AmountBtn = ({ text }) => (
  <button className="border px-4 py-2 rounded-full hover:bg-[#1f3d2b] hover:text-white transition">
    {text}
  </button>
);

/* ================= SVG ICONS ================= */

const RupeeSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="1.6">
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13l6 8 6-8" />
    <path d="M6 13h6a4 4 0 0 0 0-8" />
  </svg>
);

const CalendarSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PercentSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="1.6">
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const HeartHandsSVG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="1.6">
    <path d="M12 21s-6-4.35-9-8.5C1 9 3 6 6.5 6c2 0 3.5 1.5 5.5 3.5C14 7.5 15.5 6 17.5 6 21 6 23 9 21 12.5 18 16.65 12 21 12 21z"/>
  </svg>
);

const ChatSVG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="1.6">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
  </svg>
);

const BulbSVG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="1.6">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z"/>
  </svg>
);

const TickCircleSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f3d2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);


export default Donation;