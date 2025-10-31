import { useState } from "react";
import logo from "../../assets/logoForum.png";

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

  const inputClass = (value) =>
    `px-4 py-2 rounded-xl border border-white/30 ${
      value
        ? "bg-gradient-to-r from-cyan-100 to-amber-100 text-gray-800"
        : "bg-white/10 text-white placeholder-white/70"
    } focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-xs`;

  const fontStyle = {
    fontFamily: "Hazmat Regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <>
      {/* 🌐 Desktop Triangle Design */}
      <div className="hidden md:flex relative mx-auto flex-col items-center justify-center">
        {/* Logo background with opacity */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
            zIndex: 0,
          }}
        ></div>

        <div
          style={{
            width: "500px",
            height: "450px",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            padding: "3rem 2rem",
            paddingTop: "100px",
            zIndex: 1,
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-start space-y-4"
          >
            <h2 className="text-sm font-bold text-white text-center mb-4" style={fontStyle}>
              Register
            </h2>

            <div className="flex flex-col w-40">
              <label className="text-white mb-1 text-xs text-center" style={fontStyle}>Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onKeyDown={(e) => e.stopPropagation()}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                className={inputClass(formData.fullName)}
                style={fontStyle}
              />
            </div>

            <div className="flex flex-col w-60">
              <label className="text-white mb-1 text-xs text-center" style={fontStyle}>University</label>
              <input
                type="text"
                value={formData.university}
                onKeyDown={(e) => e.stopPropagation()}
                onChange={(e) => handleChange("university", e.target.value)}
                placeholder="Enter your university"
                className={inputClass(formData.university)}
                style={fontStyle}
              />
            </div>

            <div className="flex flex-col w-80">
              <label className="text-white mb-1 text-xs text-center" style={fontStyle}>Email</label>
              <input
                type="email"
                value={formData.email}
                onKeyDown={(e) => e.stopPropagation()}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
                className={inputClass(formData.email)}
                style={fontStyle}
              />
            </div>

            <button
              type="submit"
              className="w-100 py-2.5 bg-cyan-500/80 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-xs mt-4 cursor-pointer"
              style={fontStyle}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* 📱 Mobile Card Design */}
      <div className="flex md:hidden items-center justify-center min-h-screen p-6 relative">
        {/* Smaller, adaptive logo for mobile */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "auto",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.15,
            zIndex: 0,
          }}
        ></div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-black/40 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 shadow-lg space-y-4 relative z-10"
        >
          <h2 className="font-bold text-white text-center" style={{ ...fontStyle, fontSize: "0.95rem" }}>
            Register
          </h2>

          <div className="flex flex-col">
            <label className="text-white mb-1 text-center" style={{ ...fontStyle, fontSize: "0.7rem" }}>Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onKeyDown={(e) => e.stopPropagation()}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              className="px-3 py-1.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              style={{ ...fontStyle, fontSize: "0.7rem" }}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1 text-center" style={{ ...fontStyle, fontSize: "0.7rem" }}>University</label>
            <input
              type="text"
              value={formData.university}
              onKeyDown={(e) => e.stopPropagation()}
              onChange={(e) => handleChange("university", e.target.value)}
              placeholder="Enter your university"
              className="px-3 py-1.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              style={{ ...fontStyle, fontSize: "0.7rem" }}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1 text-center" style={{ ...fontStyle, fontSize: "0.7rem" }}>Email</label>
            <input
              type="email"
              value={formData.email}
              onKeyDown={(e) => e.stopPropagation()}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-1.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              style={{ ...fontStyle, fontSize: "0.7rem" }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-500/80 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-xl mt-2"
            style={{ ...fontStyle, fontSize: "0.75rem" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}