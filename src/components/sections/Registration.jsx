import { useState } from "react";
import logo from "/LogoForum.png";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    email: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-green-400");
  const [loading, setLoading] = useState(false); // ✅ new loading state

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.university || !formData.email) {
      setStatusMessage("Please fill in all fields");
      setStatusColor("text-red-400");
      return;
    }

    setStatusMessage("⏳ Processing...");
    setStatusColor("text-white");
    setLoading(true); // disable button

    try {
      const res = await fetch("https://forum-vybt.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMessage("✅ Registration successful!");
        setStatusColor("text-green-400");
        setFormData({ fullName: "", university: "", email: "" });
      } else {
        console.warn("Backend error:", data.message);
        await saveToFirestore(formData);
      }
    } catch (err) {
      console.error("Server unreachable, fallback to Firestore:", err);
      await saveToFirestore(formData);
    } finally {
      setLoading(false); // re-enable button
    }
  };

  const saveToFirestore = async (data) => {
    try {
      await addDoc(collection(db, "registrations"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      setStatusMessage("✅ Saved to Firebase successfully!");
      setStatusColor("text-green-400");
      setFormData({ fullName: "", university: "", email: "" });
    } catch (firebaseErr) {
      console.error("Firestore error:", firebaseErr);
      setStatusMessage("❌ Could not save to Firebase.");
      setStatusColor("text-red-400");
    }
  };

  const inputClass = (value) =>
    `px-4 py-2 rounded-xl border border-white/30 ${
      value
        ? "bg-gradient-to-r from-cyan-100 to-amber-100 text-gray-800"
        : "bg-white/10 text-white placeholder-white/70"
    } focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-xs`;

  const fontStyle = {
    fontFamily:
      "Hazmat Regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <>
      {/* Desktop Design */}
      <div className="hidden md:flex relative mx-auto flex-col items-center justify-center scale-175">
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
          }}></div>

        <div
          style={{
            width: "500px",
            height: "450px",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            padding: "3rem 2rem",
            paddingTop: "100px",
            zIndex: 1,
          }}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-start space-y-3">
            <h2
              className="text-sm font-bold text-white text-center mb-4"
              style={fontStyle}>
              Register
            </h2>

            {["fullName", "university", "email"].map((field) => (
              <div
                key={field}
                className={`flex flex-col ${
                  field === "fullName"
                    ? "w-40"
                    : field === "university"
                    ? "w-60"
                    : "w-80"
                }`}>
                <label
                  className="text-white mb-1 text-xs text-center"
                  style={fontStyle}>
                  {field === "fullName"
                    ? "Full Name"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  placeholder={`Enter your ${field.replace(
                    "fullName",
                    "name"
                  )}`}
                  className={inputClass(formData[field])}
                  style={fontStyle}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className={`w-90 py-2 bg-cyan-500/80 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-xs cursor-pointer ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={fontStyle}>
              {loading ? "⏳ Processing..." : "Submit"}
            </button>

            {statusMessage && (
              <p
                className={`text-center text-[0.55rem] ${statusColor}`}
                style={fontStyle}>
                {statusMessage}
              </p>
            )}

            <div className="text-center">
              <a
                href="https://forum.supcom.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyan-300 hover:underline"
                style={fontStyle}>
                Last edition website
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Design */}
      <div className="flex md:hidden items-center justify-center min-h-screen p-4 relative">
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
          }}></div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs bg-black/40 backdrop-blur-2xl border border-white/30 rounded-2xl p-4 shadow-lg space-y-4 relative z-10">
          <h2
            className="font-bold text-white text-center"
            style={{ ...fontStyle, fontSize: "0.9rem" }}>
            Register
          </h2>

          {["fullName", "university", "email"].map((field) => (
            <div key={field} className="flex flex-col">
              <label
                className="text-white mb-1 text-center"
                style={{ ...fontStyle, fontSize: "0.7rem" }}>
                {field === "fullName"
                  ? "Full Name"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder={`Enter your ${field.replace("fullName", "name")}`}
                className="px-2.5 py-1 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                style={{ ...fontStyle, fontSize: "0.7rem" }}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-1.5 bg-cyan-500/80 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-xl ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ ...fontStyle, fontSize: "0.75rem" }}>
            {loading ? "⏳ Processing..." : "Submit"}
          </button>

          {statusMessage && (
            <p
              className={`text-center text-[0.65rem] ${statusColor}`}
              style={fontStyle}>
              {statusMessage}
            </p>
          )}

          <div className="mt-1 text-center">
            <a
              href="https://forum.supcom.tn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:underline"
              style={fontStyle}>
              Last edition
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
