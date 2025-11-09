import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Form Submitted Successfully!",
      html: `
        <div style="text-align: left; padding: 10px;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Timeline:</strong> ${
            formData.timeline || "Not specified"
          }</p>
          <p><strong>Project Details:</strong> ${
            formData.details || "Not provided"
          }</p>
        </div>
      `,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#f97316",
      background: "#18181b",
      color: "#ffffff",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      timeline: "",
      details: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Contact me
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => {
                handleInputChange(e);
                e.target.setCustomValidity("");
              }}
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter valid phone number")
              }
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full px-4 py-3 bg-zinc-900 rounded text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded text-white focus:border-orange-500 focus:outline-none transition appearance-none cursor-pointer"
              required
            >
              <option value="">Service Of Interest</option>
              <option value="web-design">Web Design</option>
              <option value="app-design">App Design</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="graphic-design">Graphic Design</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="timeline"
              placeholder="Timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-900 rounded text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
            />
            <textarea
              name="details"
              placeholder="Project Details..."
              value={formData.details}
              onChange={handleInputChange}
              rows="1"
              className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black border border-white text-white px-8 py-3 rounded hover:bg-orange-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
