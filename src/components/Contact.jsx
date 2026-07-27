import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle, XCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_fooh7er",   // Service ID
        "template_nadylmc",   // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        {
          publicKey: "QoVrrZxbuc69YtvhK", // Public key passed as an object
        }
      )
      .then(() => {
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#0F0A1F]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-medium mb-2 tracking-wide">
          Let's talk
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Get In{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Have a project in mind, an opportunity, or just want to say hi? My
          inbox is always open.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-violet-200 dark:border-violet-900/50 bg-white dark:bg-[#1E1433] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-violet-200 dark:border-violet-900/50 bg-white dark:bg-[#1E1433] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-xl border border-violet-200 dark:border-violet-900/50 bg-white dark:bg-[#1E1433] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-violet-300/50 dark:shadow-violet-900/50 hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
          >
            <Send size={18} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm justify-center">
              <CheckCircle size={16} /> Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm justify-center">
              <XCircle size={16} /> Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gloriasemyol@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/gloriasemyol"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <SiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/gloriasemyol"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;