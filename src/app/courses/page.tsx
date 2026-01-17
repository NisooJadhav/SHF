import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healing & Reiki Courses | Sacred Healing Foundation",
  description:
    "Enroll in certified Reiki and spiritual healing courses designed for beginners and advanced practitioners.",
  alternates: {
    canonical: "https://www.sacredhealingfoundation.com/courses",
  },
};

type Course = {
  id: number;
  title: string;
  slug: string;
  shortDesc: string;
  image: string;
};

const coursesData: Course[] = [
  {
    id: 1,
    title: "Usui Reiki Level 1",
    slug: "usui-reiki-level-1",
    shortDesc:
      "Foundation course for self-healing, chakras, and Reiki principles.",
    image: "/courses/usui-reiki-level-1.webp",
  },
  {
    id: 2,
    title: "Usui Reiki Level 2",
    slug: "usui-reiki-level-2",
    shortDesc:
      "Symbols, distance healing, emotional and mental healing techniques.",
    image: "/courses/usui-reiki-level-2.webp",
  },
  {
    id: 3,
    title: "Usui Reiki Master (3A & 3B)",
    slug: "usui-reiki-master",
    shortDesc: "Master symbols, attunements, teaching, and advanced healing.",
    image: "/courses/usui-reiki-master.webp",
  },
  {
    id: 4,
    title: "Reiki Grand Mastership",
    slug: "reiki-grand-mastership",
    shortDesc: "Highest level of Reiki with lineage, mastery, and discipline.",
    image: "/courses/reiki-grand-mastership.webp",
  },
  {
    id: 5,
    title: "Karuna Reiki (Level 1 to Grandmaster)",
    slug: "karuna-reiki",
    shortDesc:
      "Complete Karuna Reiki journey from Practitioner to Grandmaster for deep emotional healing & transformation.",
    image: "/courses/karuna-reiki.webp",
  },

  /* ================= MONEY REIKI (3 LEVELS) ================= */

  {
    id: 6,
    title: "Money Reiki Level 1 – Practitioner",
    slug: "money-reiki-level-1",
    shortDesc:
      "Clear money blocks, activate abundance flow, and start daily money healing practice.",
    image: "/courses/money-reiki.webp",
  },
  {
    id: 7,
    title: "Money Reiki Level 2 – Advanced / Distance Healing",
    slug: "money-reiki-level-2",
    shortDesc:
      "Distance healing, money karma clearing, business/job energy healing & prosperity programming.",
    image: "/courses/money-reiki.webp",
  },
  {
    id: 8,
    title: "Money Reiki Level 3 – Master / Teacher",
    slug: "money-reiki-level-3",
    shortDesc:
      "Master-level abundance attunements, teaching methodology, and professional client session format.",
    image: "/courses/money-reiki.webp",
  },

  {
    id: 9,
    title: "Angel Therapy",
    slug: "angel-therapy",
    shortDesc: "Connect with angels and archangels for healing and guidance.",
    image: "/courses/angel-therapy.webp",
  },

  /* ================= NEW TAROT COURSES ================= */

  {
    id: 10,
    title: "Rider Waite Tarot Card Reading",
    slug: "rider-waite-tarot-card",
    shortDesc: "Learn tarot meanings, intuition, and ethical readings.",
    image: "/courses/rider-waite-tarot-card.webp",
  },
  {
    id: 11,
    title: "Osho Zen Tarot Card Reading",
    slug: "osho-zen-tarot-card",
    shortDesc: "Insightful tarot for awareness, intuition, and mindful guidance.",
    image: "/courses/osho-zen-tarot.webp",
  },

  {
    id: 12,
    title: "Crystal Healing",
    slug: "crystal-healing",
    shortDesc: "Crystals, chakras, grids, cleansing, and healing practices.",
    image: "/courses/crystal-healing.webp",
  },
  {
    id: 13,
    title: "EFT (Emotional Freedom Technique)",
    slug: "eft",
    shortDesc: "Tapping therapy for stress, fears, and emotional release.",
    image: "/courses/eft.webp",
  },
];

export default function CoursesPage() {
  return (
    <section
      className="min-h-screen bg-lotus-bg px-4 py-16"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">
          <h1
            className="text-3xl sm:text-4xl font-semibold text-lotus-purple"
            data-aos="fade-up"
          >
            Spiritual Healing Courses
          </h1>
          <p
            className="mt-3 text-lotus-muted max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Structured, ethical, and spiritually aligned courses designed for
            self-healing, mastery, and conscious growth.
          </p>
        </div>

        {/* ================= WHAT YOU RECEIVE ================= */}
        <div
          className="mb-12 rounded-2xl bg-lotus-section shadow-md p-6 sm:p-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-lotus-purple text-center">
            What You Receive in All Our Courses
          </h2>

          <p className="mt-3 text-center text-lotus-muted max-w-3xl mx-auto">
            Every course includes complete learning, course materials, and
            lifelong support — so you’re never alone in your healing journey.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certification */}
            <div className="rounded-2xl bg-white/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-lotus-text">
                🎓 Certification Included
              </h3>
              <p className="mt-2 text-sm text-lotus-muted leading-relaxed">
                Professional certificate included (as per level) to build trust,
                confidence, and credibility for healing practice & teaching.
              </p>
            </div>

            {/* Recorded Lessons */}
            <div className="rounded-2xl bg-white/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-lotus-text">
                🎥 Recorded Video Lessons
              </h3>
              <p className="mt-2 text-sm text-lotus-muted leading-relaxed">
                Lifetime access to recorded sessions so you can learn anytime,
                at your pace, and revisit lessons whenever needed.
              </p>
            </div>

            {/* PDF Material */}
            <div className="rounded-2xl bg-white/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-lotus-text">
                📘 PDF Study Material
              </h3>
              <p className="mt-2 text-sm text-lotus-muted leading-relaxed">
                Detailed, structured notes with step-by-step techniques and
                practices — perfect for revision and long-term reference.
              </p>
            </div>

            {/* Lifetime Support */}
            <div className="rounded-2xl bg-white/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-lotus-text">
                💬 Lifetime Support & Guidance
              </h3>
              <p className="mt-2 text-sm text-lotus-muted leading-relaxed">
                Ongoing mentor support after course completion via WhatsApp /
                email / groups for doubt-clearing, healing guidance, and growth.
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-8 rounded-2xl bg-white/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-lotus-text">
              🌈 Additional Benefits
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-lotus-muted">
              <li>✔ Guided healing & practice sessions</li>
              <li>✔ Practical applications & real-life case studies</li>
              <li>✔ Energy cleansing & alignment techniques</li>
              <li>✔ Ethical healing practices & professional mentoring</li>
              <li>✔ Confidence, balance & spiritual growth</li>
            </ul>

            <p className="mt-4 text-sm text-lotus-text font-medium">
              “Every course is a complete experience — learning, healing, and a
              lifelong connection.”
            </p>
          </div>

          {/* Zoom / Convenience */}
          <div className="mt-8 rounded-2xl bg-lotus-bg p-6 border border-black/5">
            <h3 className="text-lg font-semibold text-lotus-text">
              Classes will be Live on Zoom
            </h3>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/70 p-4 text-sm text-lotus-muted shadow-sm">
                ❌ No travelling
              </div>
              <div className="rounded-xl bg-white/70 p-4 text-sm text-lotus-muted shadow-sm">
                ❌ No off required from job/work
              </div>
              <div className="rounded-xl bg-white/70 p-4 text-sm text-lotus-muted shadow-sm">
                ❌ No hamper in household activities
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold text-lotus-gold">
              Course materials + Certificate of completion included
            </p>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group rounded-2xl bg-lotus-section shadow-md hover:shadow-xl transition overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-lotus-text group-hover:text-lotus-purple transition">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-lotus-muted leading-relaxed">
                  {course.shortDesc}
                </p>

                <div className="mt-4 text-sm font-medium text-lotus-gold">
                  View Course →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
