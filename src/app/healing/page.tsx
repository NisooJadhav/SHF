import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holistic Healing Therapies | Sacred Healing Foundation",
  description:
    "Experience Reiki healing, psychic healing, crystal therapy, angel healing, EFT, subconscious and Akashic Records healing for mind, body, and soul.",
  alternates: {
    canonical: "https://www.sacredhealingfoundation.com/healing",
  },
};

export default function HealingPage() {
  const phoneNumber = "918793877913";
  const message = encodeURIComponent(
    "Hi, I would like to book a healing session."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="bg-gradient-to-b from-purple-50 to-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-lotus-purple mb-6">
          Holistic Healing Therapies
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our healing services work across physical, emotional, mental, and
          energetic dimensions, guided with intention, compassion, and spiritual
          alignment.
        </p>
      </section>

      {/* ================= REIKI ================= */}
      <section id="reiki" className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          ✨ Reiki Healing (In-Person & Distance)
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Distance Reiki Healing</li>
          <li>Money & Abundance Reiki Healing</li>
          <li>Health & Pain Relief Reiki</li>
          <li>Emotional & Mental Healing Reiki</li>
          <li>Chakra Healing & Balancing</li>
          <li>Aura Cleansing & Protection Healing</li>
          <li>Ancestral / Family Reiki Healing</li>
          <li>Past Trauma & Inner Child Healing</li>
        </ul>
      </section>

      {/* ================= ADVANCED / PSYCHIC ================= */}
      <section
        id="advanced-psychic"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🔮 Advanced & Psychic Healing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Psychic Healing</li>
          <li>Intuitive Energy Healing</li>
          <li>Subconscious Mind Healing</li>
          <li>Past Life Healing</li>
          <li>Karma & Soul Blockage Healing</li>
          <li>Fear, Anxiety & Overthinking Healing</li>
          <li>Cord Cutting & Energy Release Healing</li>
        </ul>
      </section>

      {/* ================= CRYSTAL ================= */}
      <section id="crystal" className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          💎 Crystal & Vibrational Healing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Crystal Healing Therapy</li>
          <li>Crystal Grid Healing</li>
          <li>Crystal Chakra Healing</li>
          <li>Crystal Protection Healing</li>
        </ul>
      </section>

      {/* ================= SPIRITUAL / ANGEL ================= */}
      <section
        id="spiritual"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          👼 Spiritual & Angelic Healing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Angel Healing Therapy</li>
          <li>Angel Protection Healing</li>
          <li>Angel Guidance Healing</li>
          <li>Divine Feminine / Inner Shakti Healing</li>
        </ul>
      </section>

      {/* ================= MIND ================= */}
      <section id="mind" className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🧠 Mind & Emotional Healing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>EFT Therapy (Emotional Freedom Technique)</li>
          <li>Stress Relief & Relaxation Healing</li>
          <li>Sleep & Insomnia Healing</li>
          <li>Confidence & Self-Worth Healing</li>
        </ul>
      </section>

      {/* ================= AKASHIC ================= */}
      <section
        id="akashic"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          📜 Akashic Records Healing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Akashic Records Healing</li>
          <li>Soul Purpose & Life Path Healing</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 text-center bg-lotus-section">
        <h3 className="text-3xl font-semibold text-lotus-purple mb-4">
          Begin Your Healing Journey
        </h3>
        <p className="text-gray-700 mb-6">
          Healing starts when intention meets divine guidance.
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
        >
          Book a Healing Session
        </Link>
      </section>
    </main>
  );
}
