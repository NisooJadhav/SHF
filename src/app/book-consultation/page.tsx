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
  const message = encodeURIComponent("Hi, I would like to book a healing session.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="bg-gradient-to-b from-purple-50 to-white">
      {/* ================= HERO ================= */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-lotus-purple mb-6">
          Book Consultation for Holistic Healing Therapies
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our healing sessions support you across physical, emotional, mental, and
          energetic dimensions, guided with intention, compassion, and spiritual
          alignment.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl border border-lotus-purple text-lotus-purple font-semibold hover:bg-purple-50 transition"
          >
            WhatsApp Now
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-600 leading-relaxed">
          Distance healing is available worldwide. You will receive guidance after the
          session (energy hygiene, grounding, and simple daily practices).
        </p>
      </section>

      {/* ================= REIKI ================= */}
      <section id="reiki" className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          ✨ Reiki Healing (In-Person & Distance)
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          Reiki supports relaxation, stress release, emotional stability, and energetic
          alignment. Each session is customized based on your intention and current
          challenges.
        </p>

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

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= MONEY / ABUNDANCE ================= */}
      <section
        id="money-healing"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          💰 Money & Financial Blockage Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          These sessions focus on clearing financial stress patterns, fear-based money
          decisions, lack mindset, self-worth issues, and energetic resistance to
          receiving. It is helpful if you feel stuck in income, business, or career
          growth.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Money & Financial Blockage Healing</li>
          <li>Abundance Activation & Receiving Energy Healing</li>
          <li>Business & Career Growth Energy Support</li>
          <li>Confidence + Self-Worth Expansion Healing</li>
          <li>Removing Fear of Success / Fear of Failure Patterns</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= ANCESTRAL & KARMIC FINANCE ================= */}
      <section
        id="ancestral-karmic-finance"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🧬 Ancestral & Karmic Financial Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          Sometimes money blocks are not only personal — they can be connected to
          ancestral patterns, generational trauma, karmic debts, or long-term energetic
          imprints. This healing focuses on clearing inherited scarcity cycles and
          restoring your connection with stability, receiving, and prosperity.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Generational Money Block Clearing</li>
          <li>Karmic Debt / Energy Pattern Release</li>
          <li>Family Financial Trauma Healing</li>
          <li>Breaking Repeating Struggle Cycles in Business & Income</li>
          <li>Healing Relationship With Money, Security & Trust</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= ADVANCED / PSYCHIC ================= */}
      <section
        id="advanced-psychic"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🔮 Advanced & Psychic Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          These sessions are for deeper emotional processing and energetic clearing.
          Useful when you feel overwhelmed, stuck, energetically drained, or repeating
          the same life patterns.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Psychic Healing</li>
          <li>Intuitive Energy Healing</li>
          <li>Subconscious Mind Healing</li>
          <li>Past Life Healing</li>
          <li>Karma & Soul Blockage Healing</li>
          <li>Fear, Anxiety & Overthinking Healing</li>
          <li>Cord Cutting & Energy Release Healing</li>
          <li>Relationship & Emotional Attachment Healing</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= CRYSTAL ================= */}
      <section id="crystal" className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          💎 Crystal & Vibrational Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          Crystal healing works with the energetic frequency of crystals to support
          balance, grounding, protection, and emotional stability. Perfect for chakra
          alignment and improving energetic boundaries.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Crystal Healing Therapy</li>
          <li>Crystal Grid Healing</li>
          <li>Crystal Chakra Healing</li>
          <li>Crystal Protection Healing</li>
          <li>Vibrational Cleansing for Aura & Space</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= SPIRITUAL / ANGEL ================= */}
      <section
        id="spiritual"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          😇 Spiritual & Angelic Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          Angelic healing supports divine protection, emotional comfort, clarity, and
          energetic upliftment. It is often chosen during emotional lows, confusion,
          or when you need spiritual guidance and strength.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Angel Healing Therapy</li>
          <li>Angel Protection Healing</li>
          <li>Angel Guidance Healing</li>
          <li>Divine Feminine / Inner Shakti Healing</li>
          <li>Negative Energy Clearing & Shielding</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= MIND ================= */}
      <section id="mind" className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🧠 Mind & Emotional Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          These therapies are designed to calm your nervous system, reduce emotional
          overwhelm, and strengthen self-trust. Sessions can help you feel lighter,
          more stable, and mentally clear.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>EFT Therapy (Emotional Freedom Technique)</li>
          <li>Stress Relief & Relaxation Healing</li>
          <li>Sleep & Insomnia Healing</li>
          <li>Confidence & Self-Worth Healing</li>
          <li>Emotional Detox & Mental Clarity Healing</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* ================= AKASHIC ================= */}
      <section
        id="akashic"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          📜 Akashic Records Healing
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          Akashic Records healing supports deep insight into soul lessons, repeated
          life patterns, and energetic blocks that may be influencing your present
          path. It is a powerful modality for clarity and inner guidance.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Akashic Records Healing</li>
          <li>Soul Purpose & Life Path Healing</li>
          <li>Spiritual Guidance for Decision-Making</li>
        </ul>

        <div className="mt-6 text-center">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500 leading-relaxed text-center">
          Note: Healing services support overall well-being and spiritual growth. They
          are not a replacement for medical or psychological treatment.
        </p>
      </section>
    </main>
  );
}
