"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: wire to API or email service later
    window.setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 md:mb-14"
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-extrabold text-asu-black"
          >
            Contact <span className="text-asu-maroon">us</span>
          </h2>
          <p className="mt-3 text-lg text-asu-gray max-w-2xl mx-auto">
            Questions about the Writing Guide, tutoring, or feedback? Send us a message and we&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[280px] lg:min-h-full lg:aspect-[4/5] max-h-[560px]"
          >
            <Image
              src="/notebook.png"
              alt="Student writing notes — contact the Writing Guide team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-asu-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-medium text-white/90 uppercase tracking-wider">
                ASU Writing Guide
              </p>
              <p className="mt-1 text-xl md:text-2xl font-bold leading-snug">
                We&apos;re here to help you write with confidence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="rounded-2xl bg-white/95 backdrop-blur-sm border border-asu-gray/15 shadow-lg p-8 md:p-10 flex flex-col justify-center"
          >
            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-asu-gold/20 text-asu-maroon text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-asu-black">Message received</h3>
                <p className="mt-2 text-asu-gray">
                  Thanks for reaching out. We&apos;ll reply as soon as we can.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-semibold text-asu-maroon hover:text-asu-maroon/80 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-asu-black mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-asu-gray/25 bg-white px-4 py-3 text-asu-black placeholder:text-asu-gray/50 focus:outline-none focus:ring-2 focus:ring-asu-maroon/35 focus:border-asu-maroon/40 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-asu-black mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-asu-gray/25 bg-white px-4 py-3 text-asu-black placeholder:text-asu-gray/50 focus:outline-none focus:ring-2 focus:ring-asu-maroon/35 focus:border-asu-maroon/40 transition"
                    placeholder="you@asu.edu"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-asu-black mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-asu-gray/25 bg-white px-4 py-3 text-asu-black placeholder:text-asu-gray/50 focus:outline-none focus:ring-2 focus:ring-asu-maroon/35 focus:border-asu-maroon/40 transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-asu-black mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-asu-gray/25 bg-white px-4 py-3 text-asu-black placeholder:text-asu-gray/50 focus:outline-none focus:ring-2 focus:ring-asu-maroon/35 focus:border-asu-maroon/40 transition resize-y min-h-[120px]"
                    placeholder="Tell us more about your question or feedback…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto mt-2 bg-asu-black text-asu-white font-semibold px-8 py-3 rounded-full shadow-md transition hover:bg-asu-black/85 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
