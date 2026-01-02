import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healing Guide | What We Heal & How Healing Works",
  description:
    "Understand what we heal, how healing works, the healing process, and our ethical healing practices at Sacred Healing Foundation.",
  alternates: {
    canonical: "https://www.sacredhealingfoundation.com/healing-guide",
  },
};

export default function HealingGuidePage() {
  const phoneNumber = "918793877913";
  const message = encodeURIComponent(
    "Hi, I would like to know more about your healing process."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="bg-gradient-to-b from-purple-50 to-white">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-lotus-purple mb-6">
          Healing Guide
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          A clear understanding of what we heal, how healing works, and the
          ethical principles we follow during every healing session.
        </p>
      </section>

      {/* ================= WHAT WE HEAL ================= */}
      <section
        id="guide-what-we-heal"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🌱 What We Heal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We support healing on physical, emotional, mental, energetic, and
          spiritual levels by addressing root causes and energetic imbalances.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Stress, anxiety, fear, overthinking & emotional imbalance</li>
          <li>Depression, sadness, grief & inner unrest</li>
          <li>Physical discomfort (supportive healing)</li>
          <li>Migraine, sinus issues, body pain & fatigue (energy level)</li>
          <li>Sleep problems & mental exhaustion</li>
          <li>Relationship issues & emotional wounds</li>
          <li>Financial blockages & abundance issues</li>
          <li>Business & career growth blockages</li>
          <li>Low confidence, lack of clarity & decision-making issues</li>
          <li>Chakra imbalance & aura disturbances</li>
          <li>Negative energy, energy leakage & energetic heaviness</li>
          <li>Inner child healing & ancestral emotional patterns</li>
          <li>Spiritual imbalance & lack of inner connection</li>
        </ul>

        <p className="mt-6 text-gray-700 italic">
          Healing works differently for every individual based on their energy,
          openness, and life situation.
        </p>
      </section>

      {/* ================= HOW WE HEAL ================= */}
      <section
        id="guide-how-we-heal"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🤝 How We Heal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We follow a holistic and ethical healing approach guided by universal
          life force energy, love, intention, and divine guidance.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Reiki Healing (Usui, Karuna & advanced Reiki energies)</li>
          <li>Distance Healing (no physical presence required)</li>
          <li>Chakra Healing & Energy Alignment</li>
          <li>Aura Cleansing & Protection Shielding</li>
          <li>Emotional & Mental Healing</li>
          <li>Inner Child & Ancestral Energy Healing</li>
          <li>Money & Abundance Energy Healing</li>
          <li>Angelic & Divine Energy Support</li>
          <li>Guided Healing Meditation & Energy Activation</li>
        </ul>

        <p className="mt-6 text-gray-700 italic">
          Healing is gentle, non-invasive, and works according to the receiver’s
          highest good.
        </p>
      </section>

      {/* ================= HEALING PROCESS ================= */}
      <section
        id="guide-healing-process"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          ✨ Healing Process
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our healing process is calm, respectful, and designed to ensure comfort
          and safety throughout the session.
        </p>

        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Client intention & issue sharing (optional)</li>
          <li>Energy assessment and intuitive scanning</li>
          <li>Healing session through Reiki and divine guidance</li>
          <li>Energy balancing, grounding & protection</li>
          <li>Post-healing relaxation and hydration guidance</li>
          <li>Simple self-care or meditation guidance if required</li>
        </ol>

        <p className="mt-6 text-gray-700 italic">
          Healing may be felt immediately or gradually depending on the
          individual.
        </p>
      </section>

      {/* ================= HOW HEALING WORKS ================= */}
      <section
        id="guide-how-healing-works"
        className="px-6 py-10 bg-white max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🔄 How Healing Works
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Healing works on the energy body, which influences the mind, emotions,
          and physical body. Releasing energy blockages restores balance and
          harmony.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Releasing stuck or negative energy</li>
          <li>Calming the nervous system</li>
          <li>Improving emotional balance</li>
          <li>Supporting the body’s natural healing ability</li>
          <li>Shifting mindset and awareness</li>
          <li>Aligning thoughts, emotions, and actions</li>
          <li>Creating space for clarity, peace, and abundance</li>
        </ul>

        <p className="mt-6 text-gray-700 italic">
          Healing supports transformation from within — gently and naturally.
        </p>
      </section>

      {/* ================= ETHICS ================= */}
      <section
        id="guide-ethics"
        className="px-6 py-10 max-w-5xl mx-auto scroll-mt-24"
      >
        <h2 className="text-3xl font-semibold text-lotus-purple mb-4">
          🛡️ Healing Ethics & Disclaimer
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Healing is done with consent, compassion, and confidentiality</li>
          <li>No forceful healing or energy manipulation</li>
          <li>Client’s free will is always respected</li>
          <li>Healing is performed only for the highest good</li>
          <li>No negative or harmful practices are used</li>
        </ul>

        <p className="mt-6 text-gray-700 italic">
          Healing is a supportive journey and not a substitute for professional
          medical or psychological care.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 text-center bg-lotus-section">
        <h3 className="text-3xl font-semibold text-lotus-purple mb-4">
          Ready to Begin Your Healing Journey?
        </h3>
        <p className="text-gray-700 mb-6">
          We are here to guide and support you with care and integrity.
        </p>
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-block px-8 py-4 rounded-xl bg-lotus-purple text-white font-semibold hover:opacity-90 transition"
        >
          Talk to a Healing Guide
        </Link>
      </section>
    </main>
  );
}