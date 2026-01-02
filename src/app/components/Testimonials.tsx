"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Anjali Sharma",
    city: "Mumbai",
    image: "/client/anjali.jpg",
    message:
      "I had an amazing experience with the healing sessions. From the very first session, I felt calm, protected, and emotionally balanced. The energy work truly helped me release negativity and brought positivity into my life.",
  },
  {
    name: "Neha Verma",
    city: "Delhi",
    image: "/client/neha.jpg",
    message:
      "The Reiki and angel healing sessions were very powerful. I could feel the shift in my energy within a few days. My stress levels reduced, and I started feeling more confident and peaceful.",
  },
  {
    name: "Ritu Malhotra",
    city: "Pune",
    image: "/client/ritu.jpg",
    message:
      "I am extremely grateful for this healing journey. The guidance, protection, and energy healing helped me overcome emotional blocks. I feel more aligned, relaxed, and positive than before.",
  },
  {
    name: "Kavita Joshi",
    city: "Jaipur",
    image: "/client/kavita.jpg",
    message:
      "After taking the healing sessions, I noticed a big change in my mindset and overall energy. I sleep better now, feel protected, and my daily life feels much more balanced.",
  },
  {
    name: "Pooja Nair",
    city: "Bangalore",
    image: "/client/pooja.jpg",
    message:
      "This healing experience was truly divine. The sessions helped me emotionally and spiritually. I felt lighter, more confident, and deeply connected to positive energies.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-lotus-bg px-4 py-20"
      id="testimonials"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      {/* ================= SECTION INTRO ================= */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-serif text-lotus-purple">
          Client Testimonials
        </h2>
        <p className="mt-4 text-lotus-muted max-w-2xl mx-auto">
          Heartfelt experiences shared by those who have felt the power of
          healing, balance, and positive transformation.
        </p>
      </div>

      {/* ================= TESTIMONIAL CARDS ================= */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sacred border border-lotus-purple/10 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            {/* Client Image */}
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-lotus-gold/40">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Message */}
            <p className="text-justify text-lotus-text leading-relaxed mb-6">
              “{t.message}”
            </p>

            {/* Footer */}
            <div className="mt-auto text-center">
              <div className="h-px bg-lotus-gold/40 mb-4" />
              <p className="font-semibold text-lotus-purple">{t.name}</p>
              <p className="text-sm text-lotus-muted">{t.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}