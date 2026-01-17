import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

/* ================= TYPES ================= */

type Course = {
  title: string;
  slug: string;
  description: string;
  image: string;
  syllabus: string[];

  // ✅ NEW (Optional fields for pricing + duration)
  feesInr?: number;
  duration?: string;
};

/* ================= HELPERS ================= */

function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function formatUSDFromINR(amountInr: number) {
  const usd = amountInr / 90;
  return `$${usd.toFixed(2)}`;
}

/* ================= COURSE DATA ================= */

const courses: Course[] = [
  {
    title: "Usui Reiki Level 1",
    slug: "usui-reiki-level-1",
    description:
      "A foundational Reiki course focused on self-healing, chakras, energy awareness, grounding, and ethical Reiki practice.",
    image: "/courses/usui-reiki-level-1.webp",
    syllabus: [
      "Introduction to Reiki",
      "What is Reiki Energy",
      "History of Reiki – Dr. Mikao Usui",
      "How Reiki Works",
      "Five Reiki Principles (Precepts)",
      "Chakras – Introduction & Basic Understanding",
      "Aura & Energy Body Basics",
      "Hand Positions for Self-Healing",
      "Step-by-Step Self-Healing Technique",
      "Daily Reiki Practice Routine",
      "Reiki Ethics & Responsibility",
      "Grounding & Protection Basics",
    ],
    // ✅ NEW pricing data (as per your latest fees)
    feesInr: 4100,
    duration: "3 Days",
  },

  {
    title: "Usui Reiki Level 2",
    slug: "usui-reiki-level-2",
    description:
      "Advanced Reiki training focused on paranormal energy science, Reiki symbols attunement, distance healing, brain functionality, and goal manifestation techniques.",
    image: "/courses/usui-reiki-level-2.webp",
    syllabus: [
      "Science behind all Paranormal & Supernatural Sciences",
      "Psychokinesis",
      "Astral Body Projection",
      "Reason behind Tantra, Mantra & Yantra",
      "Attunement of 3 great Reiki symbols",
      "How to use it to Heal everything around you?",
      "Functionality of left and right brain",
      "Physical & distance Healing",
      "Alpha Level Healing",
      "Effectiveness of Visualisation",
      "Uses & Importance of Affirmation",
      "Attraction and Empowerment of Goal",
    ],
    feesInr: 8100,
    duration: "As per batch schedule",
  },

  {
    title: "Usui Reiki Master (Level 3A & 3B)",
    slug: "usui-reiki-master",
    description:
      "Master-level Reiki training covering deep mastery, advanced healing, higher protection, symbols, and attunement processes (Level 3A + 3B combined).",
    image: "/courses/usui-reiki-master.webp",
    syllabus: [
      // ✅ Reiki Level III course content (3A)
      "Master symbol",
      "Chakra or kundalini Meditation",
      "Psychic attack & prevention",
      "Crystal healing",
      "Psychic surgery",
      "Definite goal achievement",
      "Science of chakra",
      "Science of third eye",
      "Kinesiology",
      "Other powerful symbols",
      "Secret of science of siddhi",

      // ✅ Reiki Level 3B content
      "Three Attunement Symbols",
      "Power of Hui-Yin",
      "How to Attain a Powerful State of Hui-Yin",
      "Some Important Yog Mudras in Attunement",
      "Learn the Powerful Initiation and Attunement Process of Reiki Level 1, 2 & 3",
      "Naveen Reiki Attunement",
      "Meditation for Reiki Master on a Daily Basis",
      "New Healing Attunement",
      "Healing Attunement of William Lee Rand",
      "Self Attunement",
      "Distant Attunement",
      "Importance of Antahkarana",
      "Varieties and Uses of Antahkarana",
      "Japanese Reiki Techniques",
      "Laws of the Universe",
    ],
    feesInr: 35000,
    duration: "As per batch schedule",
  },

  {
    title: "Reiki Grand Mastership",
    slug: "reiki-grand-mastership",
    description:
      "The highest level of Reiki mastery focusing on hidden symbology science, advanced symbols, instant healing techniques, and 20 great Reiki symbol attunements.",
    image: "/courses/reiki-grand-mastership.webp",
    syllabus: [
      "Science Behind Symbology",
      "Origin of Reiki & Other Symbols",
      "How Symbols Work and Generate Energy",
      "Dr. Usui’s Hidden Knowledge & True Story",
      "Facts & Deep Meaning of Initiation & Attunement",
      "Attunement / Initiation of Prosperity or Money Attunement",
      "Samridhi Shaktipat",
      "Harmonious Relationship Attunement",
      "Madhurya Shaktipat",
      "Education & Knowledge Attunement",
      "Vidya Shaktipat",
      "Grand Master’s Instant Healing Techniques",
      "How to Create a Powerful Reiki Master",
      "How to Create a Master Grid",
      "Attunement of 20 Great Reiki Symbols",
    ],
    feesInr: 24500,
    duration: "As per batch schedule",
  },

  {
    title: "Karuna Reiki (Level 1 to Grandmaster)",
    slug: "karuna-reiki",
    description:
      "A complete compassion-based Reiki journey from Practitioner to Master/Teacher to Grandmaster for deep emotional healing and spiritual transformation.",
    image: "/courses/karuna-reiki.webp",
    syllabus: [
      // ✅ Level 1
      "Introduction to Karuna Reiki & meaning of “Karuna” (Compassion)",
      "Energy principles & difference from Usui Reiki",
      "Karuna Reiki Level 1 Symbols – meaning & usage",
      "Attunement process (self & others)",
      "Basic self-healing techniques",
      "Healing emotional blocks & past trauma",
      "Daily practice for energy flow & abundance",
      "Meditation and visualization for compassion healing",

      // ✅ Level 2
      "Advanced Karuna Reiki symbols – Level 2",
      "Attunement process for Level 2",
      "Distance healing & sending energy across time/space",
      "Emotional & subconscious block clearing",
      "Healing addictions, fear, anxiety, and relationship issues",
      "Chakra & aura cleansing techniques",
      "Guided practice on friends/clients",
      "Daily practice for energy expansion",

      // ✅ Level 3
      "Karuna Reiki Master symbols & high-frequency attunements",
      "Past-life & karmic healing techniques",
      "Shadow work & inner-child healing",
      "How to attune others (teaching methodology)",
      "Conducting workshops & professional sessions",
      "Ethics & responsibilities of a Karuna Reiki Master",
      "Advanced meditation & compassion energy activation",
      "Self-empowerment & spiritual growth",

      // ✅ Bonus Features (included as syllabus points for UI display)
      "Lifetime access to recorded videos",
      "PDF manuals with symbols, techniques & daily practices",
      "Continuous mentor support via WhatsApp/email",
      "Optional live group practice sessions",
      "Guidance for self-healing and professional client sessions",
    ],
    // ⚠️ You didn't give a specific Karuna fee yet (you gave only reiki fees)
    // If Karuna has a fee later, add it here.
    duration: "As per batch schedule",
  },

  {
    title: "Money Reiki Level 1 – Practitioner",
    slug: "money-reiki-level-1",
    description:
      "Practitioner-level Money Reiki course focused on clearing money blocks, activating abundance flow, and daily prosperity healing practices.",
    image: "/courses/money-reiki.webp",
    syllabus: [
      "Introduction to Money Reiki",
      "Difference between Reiki & Money Reiki",
      "Understanding money energy and abundance flow",
      "Money Reiki symbols – introduction & attunement",
      "Clearing money blocks and fear of money",
      "Self-healing with Money Reiki",
      "Attracting income, opportunities & stability",
      "Money meditation techniques",
      "Charging wallet, money box, cheques, salary slips",
      "Daily Money Reiki practice",
      "Certificate of completion",
    ],
    feesInr: 5100,
    duration: "1–2 Days OR 8–12 Hours (Online/Offline)",
  },

  {
    title: "Money Reiki Level 2 – Advanced / Distance Healing",
    slug: "money-reiki-level-2",
    description:
      "Advanced Money Reiki training for distance healing, clearing subconscious beliefs, healing financial karma, and programming money goals.",
    image: "/courses/money-reiki.webp",
    syllabus: [
      "Advanced Money Reiki symbols",
      "Distance Money Reiki healing",
      "Healing past financial karma & patterns",
      "Subconscious money belief clearing",
      "Business, job & sales energy healing",
      "Money goals programming",
      "Prosperity affirmations with Reiki",
      "Abundance rituals & grids",
      "Case studies & practice sessions",
      "Advanced certification",
    ],
    feesInr: 7100,
    duration: "2–4 Days OR 2–4 Weeks (Online Batches)",
  },

  {
    title: "Money Reiki Level 3 – Master / Teacher",
    slug: "money-reiki-level-3",
    description:
      "Master-level Money Reiki program covering attunements, teaching methodology, professional session format, and mass abundance healing.",
    image: "/courses/money-reiki.webp",
    syllabus: [
      "Master level Money Reiki symbols",
      "High-frequency abundance attunements",
      "How to attune others into Money Reiki",
      "Teaching methodology",
      "Client money-healing session format",
      "Mass abundance healing techniques",
      "Wealth consciousness expansion",
      "Creating your own Money Reiki workshops",
      "Ethics & responsibility of a Master",
      "Master / Teacher certificate",
    ],
    feesInr: 17000,
    duration: "3–6 Days OR 1–2 Months (Advanced Training)",
  },

  {
    title: "Angel Therapy (Basic to Advanced)",
    slug: "angel-therapy",
    description:
      "Learn to connect with angels and archangels for healing, protection, guidance, and spiritual support.",
    image: "/courses/angel-therapy.webp",
    syllabus: [
      "Introduction to Angels & Archangels",
      "Guardian Angels & Their Roles",
      "Angel Numbers (111, 222, 444, etc.)",
      "How Angels Communicate",
      "Angel Prayers & Invocations",
      "Angel Meditation Techniques",
      "Angel Healing for Self & Others",
      "Calling Angels for Protection & Guidance",
      "Working with Archangel Michael, Raphael, Gabriel & Uriel",
    ],
    duration: "As per batch schedule",
  },

  /* ================= TAROT COURSES ================= */

  {
    title: "Rider Waite Tarot Card Reading",
    slug: "rider-waite-tarot-card",
    description: "Learn tarot meanings, intuition, and ethical readings.",
    image: "/courses/rider-waite-tarot-card.webp",
    syllabus: [
      "Introduction to Tarot, History of Tarot & Evolution of Rider Waite Tarot",
      "Tarot as Divination, Artistic Science & Tool of Awareness",
      "Symbolism, Colors, Images & Chakra Connections in Rider Waite Tarot",
      "Tarot and Astrology Relationship (Zodiac, Planets & Elements)",
      "Numerology in Tarot (Numbers, Major Arcana & Number Patterns)",
      "Structure of Tarot Deck – Major Arcana & Minor Arcana (Rider Waite Deck)",
      "Benefits of Mastering Tarot & Role of a Conscious Tarot Reader",
      "Code of Ethics, Do’s & Don’ts & Thumb Rules of Tarot Reading",
    ],
    duration: "As per batch schedule",
  },

  {
    title: "Osho Zen Tarot Card Reading",
    slug: "osho-zen-tarot-card",
    description:
      "A consciousness-based tarot course integrating Zen philosophy, intuition, and healing-oriented readings.",
    image: "/courses/osho-zen-tarot.webp",
    syllabus: [
      "Introduction to Tarot, History of Tarot & Evolution of Osho Zen Tarot",
      "Tarot as Divination, Artistic Science & Tool of Awareness",
      "Zen Philosophy, Consciousness & Present-Moment Guidance through Tarot",
      "Tarot as Psychological, Karmic & Horary Science",
      "Tarot and Astrology Relationship (Zodiac, Planets & Elements)",
      "Numerology in Tarot (Numbers, Major Arcana & Number Patterns)",
      "Structure of Tarot Deck – Major Arcana & Minor Arcana (Osho Zen Deck)",
      "Symbolism, Colors, Images & Chakra Connections in Osho Zen Tarot",
      "Benefits of Mastering Tarot & Role of a Conscious Tarot Reader",
      "Code of Ethics, Do’s & Don’ts & Thumb Rules of Tarot Reading",
      "Tarot Table Setup, Reader Tools & Choosing the Right Deck",
      "Energy Healing of Tarot Cards – Cleansing, Energizing & Protection",
      "Intuition Development, Meditation, Grounding & Energy Shielding",
      "Card Shuffling, Question Framing & Reading Techniques",
      "Tarot Card Spreads – Guidance, Awareness, Relationship & Career",
      "Interpretation Skills – Judgement-Free, Energy-Based & Healing Readings",
      "Tarot as a Healing Tool for Emotional & Mental Clarity",
      "Timing of Events – Practical Tips, Divine Timing & Indicators",
      "Practice Readings, Case Studies & Confidence Building",
      "Professional Tarot Practice – Client Sessions, Ethics & Spiritual Service",
    ],
    duration: "As per batch schedule",
  },

  {
    title: "Crystal Healing",
    slug: "crystal-healing",
    description:
      "A holistic crystal healing course covering crystal properties, chakra alignment, grids, and healing techniques.",
    image: "/courses/crystal-healing.webp",
    syllabus: [
      "Introduction to Crystal Healing",
      "How Crystals Work",
      "Types of Crystals & Their Properties",
      "Chakras & Crystal Connections",
      "Crystal Cleansing Methods",
      "Crystal Charging Techniques",
      "Crystal Grids",
      "Self-Healing & Client Healing",
      "Wearing Crystals & Crystal Jewelry Healing",
    ],
    duration: "As per batch schedule",
  },

  {
    title: "EFT (Emotional Freedom Technique)",
    slug: "eft",
    description:
      "A practical tapping therapy course for emotional release, stress reduction, and mind–body healing.",
    image: "/courses/eft.webp",
    syllabus: [
      "Introduction to EFT",
      "What is Tapping Therapy",
      "Meridian Points Explanation",
      "EFT for Stress, Fear & Anxiety",
      "EFT for Physical Pain",
      "EFT for Money & Relationship Issues",
      "Creating Effective EFT Statements",
      "Self-Tapping & Client Sessions",
    ],
    duration: "As per batch schedule",
  },
];

/* ================= SEO ================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} | Sacred Healing Foundation`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  };
}

/* ================= PAGE ================= */

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const phoneNumber = "918793877913";
  const message = encodeURIComponent(
    `Hi, I would like to know more about the ${course.title} course.`
  );

  const showFees = typeof course.feesInr === "number";

  return (
    <section
      className="min-h-screen bg-lotus-bg px-4 py-12"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-5xl">
        {/* ================= BREADCRUMBS ================= */}
        <nav className="mb-6 text-sm text-lotus-muted" data-aos="fade-up">
          <Link href="/" className="hover:text-lotus-purple">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/courses" className="hover:text-lotus-purple">
            Courses
          </Link>
          <span className="mx-2">/</span>
          <span className="text-lotus-text">{course.title}</span>
        </nav>

        {/* ================= HERO ================= */}
        <div
          className="relative rounded-3xl bg-lotus-section shadow-lg overflow-hidden group"
          data-aos="zoom-in"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-lotus-pink via-lotus-gold to-lotus-purple blur-xl opacity-30" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1
                className="text-3xl sm:text-4xl font-semibold text-lotus-purple"
                data-aos="fade-up"
              >
                {course.title}
              </h1>

              <p
                className="mt-4 text-lotus-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {course.description}
              </p>

              {/* ✅ DURATION */}
              {course.duration && (
                <div
                  className="mt-4 rounded-2xl bg-white/70 p-4 border border-black/5"
                  data-aos="fade-up"
                  data-aos-delay="130"
                >
                  <p className="text-sm text-lotus-muted">
                    <span className="font-semibold text-lotus-text">
                      Duration:
                    </span>{" "}
                    {course.duration}
                  </p>
                </div>
              )}

              {/* ✅ FEES (INR + USD) */}
              {showFees && (
                <div
                  className="mt-4 rounded-2xl bg-white/70 p-4 border border-black/5"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <p className="text-sm text-lotus-muted">
                    <span className="font-semibold text-lotus-text">Fees:</span>{" "}
                    <span className="font-semibold text-lotus-purple">
                      {formatINR(course.feesInr!)}
                    </span>{" "}
                    <span className="text-lotus-muted">
                      ({formatUSDFromINR(course.feesInr!)})
                    </span>
                  </p>

                  <p className="mt-1 text-xs text-lotus-muted">
                    USD amount is approximate (INR ÷ 90).
                  </p>
                </div>
              )}

              {/* ✅ ZOOM NOTE (Required on all courses) */}
              <div
                className="mt-5 rounded-2xl bg-lotus-bg p-4 border border-black/5"
                data-aos="fade-up"
                data-aos-delay="170"
              >
                <p className="text-sm font-semibold text-lotus-text">
                  𝗖𝗟𝗔𝗦𝗦𝗘𝗦 𝗪𝗜𝗟𝗟 𝗕𝗘 𝗟𝗜𝗩𝗘 𝗢𝗡 𝗭𝗢𝗢𝗠.
                </p>
                <p className="mt-2 text-sm text-lotus-muted">
                  ❌ NO TRAVELLING <br />
                  ❌ NO OFF REQUIRED FROM JOB/WORK <br />
                  ❌ NO HAMPER IN HOUSEHOLD ACTIVITIES
                </p>
              </div>

              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-fit rounded-full bg-lotus-gold px-6 py-3 text-white text-sm font-medium hover:scale-105 transition"
                data-aos="fade-up"
                data-aos-delay="220"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ================= SYLLABUS ================= */}
        <div className="mt-14">
          <h2
            className="text-2xl font-semibold text-lotus-purple mb-6"
            data-aos="fade-up"
          >
            What You Will Learn
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.syllabus.map((item, i) => (
              <li
                key={i}
                className="rounded-xl bg-white px-5 py-4 border border-lotus-purple/10 hover:border-lotus-gold transition"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
