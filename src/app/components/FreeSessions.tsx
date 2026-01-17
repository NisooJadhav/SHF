"use client";

import Image from "next/image";
import Link from "next/link";

const sessions = [
  {
    id: 1,
    title: "Free Distance Healing Session",
    subtitle: "Every Sunday Morning",
    image: "/free-healing.webp",
  },
  {
    id: 2,
    title: "Free Meditation Session",
    subtitle: "Every Saturday",
    image: "/free-meditation.webp",
  },
  {
    id: 3,
    title: "12 Chakra Meditation",
    subtitle: "Cost: INR 1212/-",
    image: "/12-chakra-mediation.jpeg"
  },
  {
    id: 4,
    title: "Subconscious Mind Healing Meditation",
    subtitle: "Cost: INR 1212/-",
    image: "/subconscious-meditation.jpeg"
  },
  {
    id: 5,
    title: "Free Reiki & Energy Healing Webinar",
    subtitle: "Every Saturday 7 PM",
    image: "/healing.png"
  }
];

// WhatsApp Channel Link
const WHATSAPP_CHANNEL_LINK =
  "https://whatsapp.com/channel/0029Vb71FnP3mFY7wPkOWT2s";

export default function FreeSessions() {
  return (
    <section
      className="w-full bg-lotus-bg px-6 md:px-12 mt-10 pb-5"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= TITLE ================= */}
        <h2
          className="text-3xl sm:text-4xl font-serif text-center text-lotus-purple mb-12"
          data-aos="fade-up"
        >
          Free Sessions
        </h2>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {sessions.map((session, idx) => (
            <div
              key={session.id}
              className="flex flex-col rounded-3xl overflow-hidden bg-white shadow-sacred transition hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* IMAGE */}
              <div className="relative w-full h-48">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-6 text-center">
                <h3 className="text-xl font-semibold text-lotus-text mb-2">
                  {session.title}
                </h3>

                <p className="text-lotus-muted mb-6">
                  {session.subtitle}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={WHATSAPP_CHANNEL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full rounded-full bg-gradient-to-r from-lotus-pink to-lotus-purple px-6 py-3 text-white font-medium transition hover:bg-lotus-gold hover:text-lotus-text"
                  >
                    Join WhatsApp Channel
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MORE COURSES ================= */}
        <h1
          className="text-xl text-center pb-0 mb-0 pt-10 text-lotus-purple hover:text-purple-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link href="/courses">More Courses →</Link>
        </h1>
      </div>
    </section>
  );
}
