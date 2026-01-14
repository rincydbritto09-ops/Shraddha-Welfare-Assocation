import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    relationship: "",
    location: "",
    abuseTypes: [],
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let newAbuseTypes = [...formData.abuseTypes];
      if (checked) {
        newAbuseTypes.push(value);
      } else {
        newAbuseTypes = newAbuseTypes.filter((item) => item !== value);
      }
      setFormData({ ...formData, abuseTypes: newAbuseTypes });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Confidential report submitted successfully!");
    // Reset form
    setFormData({
      fullName: "",
      contact: "",
      email: "",
      relationship: "",
      location: "",
      abuseTypes: [],
      description: "",
    });
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#254b37] to-[#1f3d2b]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#1f3d2b] rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-serif text-center text-white mb-4">
            Report Abuse Against a Senior Citizen
          </h2>
          <p className="text-sm text-center text-[#d6e2dc] mb-6">
            Your details will remain confidential. You can help protect and
            support seniors by reporting abuse.
          </p>

          {/* Notice box */}
          <div className="bg-[#254b37] text-[#e6efe9] text-sm p-4 rounded-lg mb-6">
            🔒 Confidentiality Notice: This form is secure and your information
            will be handled with care.
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name (Optional)"
              className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact Number (Optional)"
                className="p-3 rounded-lg bg-white text-gray-700 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address (Optional)"
                className="p-3 rounded-lg bg-white text-gray-700 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                placeholder="Relationship to the Senior Citizen"
                className="p-3 rounded-lg bg-white text-gray-700 outline-none"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location of Incident"
                className="p-3 rounded-lg bg-white text-gray-700 outline-none"
              />
            </div>

            {/* Type of Abuse */}
            <div>
              <p className="text-white text-sm mb-2">Type of Abuse</p>
              <div className="flex flex-wrap gap-4 text-[#e6efe9] text-sm">
                {["Physical", "Emotional", "Financial", "Neglect", "Psychological"].map(
                  (type) => (
                    <label key={type}>
                      <input
                        type="checkbox"
                        name="abuseTypes"
                        value={type}
                        checked={formData.abuseTypes.includes(type)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {type}
                    </label>
                  )
                )}
              </div>
            </div>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the situation briefly"
              className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
            ></textarea>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#ede9dd] text-[#1f3d2b] px-6 py-3 rounded-full font-medium hover:bg-[#e2ddcf] transition"
              >
                Submit Confidential Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReportForm;