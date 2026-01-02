"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const phoneNumber = "918793877913";
  const message = encodeURIComponent(
    "Hi, I would like to book a consultation."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const reikiLinks = [
    { name: "Usui Reiki Level 1 & 2", href: "/reiki/#level-1-2" },
    { name: "Usui Reiki Level 3a & 3b", href: "/reiki/#level-3" },
    { name: "Usui Reiki Grandmaster", href: "/reiki/#grandmaster" },
    { name: "Reiki Grandmastership", href: "/reiki/#complete" },
    { name: "Money Reiki", href: "/reiki/#money" },
    { name: "Karuna Reiki", href: "/reiki/#karuna" },
  ];

  const healingLinks = [
    { name: "Reiki Healing (In-Person & Distance)", href: "/healing/#reiki" },
    { name: "Advanced & Psychic Healing", href: "/healing/#advanced-psychic" },
    { name: "Crystal & Vibrational Healing", href: "/healing/#crystal" },
    { name: "Spiritual & Angelic Healing", href: "/healing/#spiritual" },
    { name: "Mind & Emotional Healing", href: "/healing/#mind" },
    { name: "Akashic Records Healing", href: "/healing/#akashic" },
  ];

  const healingGuideLinks = [
    { name: "What We Heal", href: "/healing-guide/#guide-what-we-heal" },
    { name: "How We Heal", href: "/healing-guide/#guide-how-we-heal" },
    { name: "Healing Process", href: "/healing-guide/#guide-healing-process" },
    { name: "How Healing Works", href: "/healing-guide/#guide-how-healing-works" },
    { name: "Healing Ethics", href: "/healing-guide/#guide-ethics" },
  ];

  const coursesLinks = [
    { name: "Usui Reiki Level 1", href: "/courses/usui-reiki-level-1" },
    { name: "Usui Reiki Level 2", href: "/courses/usui-reiki-level-2" },
    { name: "Usui Reiki Master", href: "/courses/usui-reiki-master" },
    { name: "Reiki Grand Mastership", href: "/courses/reiki-grand-mastership" },
    { name: "Karuna Reiki", href: "/courses/karuna-reiki" },
    { name: "Money Reiki", href: "/courses/money-reiki" },
    { name: "Angel Therapy", href: "/courses/angel-therapy" },
    { name: "Rider Waite Tarot Card", href: "/courses/rider-waite-tarot-card" },
    { name: "Osho Zen Tarot Card", href: "/courses/osho-zen-tarot-card" },
    { name: "Crystal Healing", href: "/courses/crystal-healing" },
    { name: "EFT (Emotional Freedom Technique)", href: "/courses/eft" },
  ];

  const aboutLinks = [
    { name: "About Poonam Thore", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Certifications", href: "/about/#certifications" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Book Consultation", href: whatsappLink, target: "_blank" },
  ];

  return (
    <footer className="w-full bg-lotus-purple text-white">
      <div className="max-w-8xl px-10 py-12">

        {/* MAIN FOOTER ROW */}
        <div className="flex flex-wrap gap-10 lg:flex-nowrap">

          {/* LOGO / INFO */}
          <div className="basis-full lg:basis-[28%] space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-16 w-56">
                <Image src="/logo.png" alt="Sacred Healing Foundation" fill />
              </div>
            </Link>

            <p className="text-purple-200 text-sm leading-relaxed">
              Sacred Healing Foundation is dedicated to holistic healing and
              spiritual transformation through ancient wisdom and modern techniques.
            </p>

            <div className="space-y-2 text-sm text-purple-200">
              <a href="tel:+918793877913" className="block hover:text-white">
                +91 87938 77913
              </a>
              <a href="tel:+918668555532" className="block hover:text-white">
                +91 86685 55532
              </a>
              <a
                href="mailto:sacredhealingfoundation2712@gmail.com"
                className="block break-all hover:text-white"
              >
                sacredhealingfoundation2712@gmail.com
              </a>
            </div>

            <div className="text-yellow-300 font-semibold">
              ॥ श्री कृष्ण शरणम् ॥
            </div>
          </div>

          {/* LINK SECTIONS */}
          {[
            { title: "Reiki", links: reikiLinks },
            { title: "Energy & Reiki Healing", links: healingLinks },
            { title: "Healing Guide", links: healingGuideLinks },
            { title: "Courses", links: coursesLinks },
          ].map((section) => (
            <div key={section.title} className="basis-full sm:basis-1/2 lg:basis-[14%]">
              <h3 className="text-lg font-bold mb-4 text-pink-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-purple-200 text-sm hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ABOUT + QUICK */}
          <div className="basis-full sm:basis-1/2 lg:basis-[14%]">
            <h3 className="text-lg font-bold mb-4 text-pink-300">About</h3>
            <ul className="space-y-2 mb-6">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-purple-200 text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-4 text-pink-300">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.target}
                    className="text-purple-200 text-sm hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-300 text-sm">
            © {new Date().getFullYear()} Sacred Healing Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-purple-300 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-purple-300 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* CREDIT */}
      <div className="bg-black py-3 text-center text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://aviorta.com/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-300"
        >
          Avoirta LLC
        </a>
      </div>
    </footer>
  );
}
