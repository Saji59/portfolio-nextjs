"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // Web3Forms endpoint
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "0af1dc96-c119-46c1-ab91-0101ce0288b2",
        ...formData,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setStatus("Message sent! I'll get back to you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      setStatus("Failed. Please try again.");
    }
  };

  return (
    <section className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-10">
          <h2>Contact Me</h2>
          <span className="text-primary text-xl">( 05 )</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-secondary mb-6">Have a project in mind? Feel free to reach out!</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><span className="text-2xl">✉️</span> sajirs0928@gmail.com</div>
              <div className="flex items-center gap-3"><span className="text-2xl">📞</span> +94 76 132 2172</div>
              <div className="flex items-center gap-3"><span className="text-2xl">📍</span> Sri Lanka</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full p-3 border rounded-lg" />
            <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="w-full p-3 border rounded-lg" />
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full p-3 border rounded-lg" />
            <textarea name="message" placeholder="Message *" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80">Send Message</button>
            {status && <p className="text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}