// src/components/Registration.jsx
import { useState } from "react";
import logo from "../../assets/logo.svg";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    email: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.university || !formData.email) {
      alert("Please fill in all fields");
      return;
    }
    alert(
      `Registration submitted!\nName: ${formData.fullName}\nUniversity: ${formData.university}\nEmail: ${formData.email}`
    );
  };

  return (
    <>
      {/* 🌐 Desktop Triangle Design */}
      <div
        className="hidden md:flex relative mx-auto flex-col items-center justify-center"
        style={{
          width: "500px",
          height: "450px",
          backdropFilter: "blur(100px)",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          padding: "3rem 2rem",
          paddingTop: "120px",
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-start space-y-4"
        >
          <h2 className="text-xl font-bold text-white text-center mb-4">
            Register
          </h2>

          <div className="flex flex-col w-40">
            <label className="text-white mb-1 text-sm">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col w-60">
            <label className="text-white mb-1 text-sm">University</label>
            <input
              type="text"
              value={formData.university}
              onChange={(e) => handleChange("university", e.target.value)}
              placeholder="Enter your university"
              className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col w-80">
            <label className="text-white mb-1 text-sm">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-100 py-2.5 bg-cyan-500/80 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-sm mt-4 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* 📱 Mobile Card Design */}
      <div className="flex md:hidden items-center justify-center min-h-screen p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-white text-center">
            Register
          </h2>

          <div className="flex flex-col">
            <label className="text-white mb-1 text-sm">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1 text-sm">University</label>
            <input
              type="text"
              value={formData.university}
              onChange={(e) => handleChange("university", e.target.value)}
              placeholder="Enter your university"
              className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1 text-sm">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-cyan-500/80 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-xl text-sm mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
