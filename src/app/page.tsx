import type { Metadata } from 'next';

import Hero from "../app/components/Hero";
import HomeAbout from "../app/components/HomeAbout";
import FreeSessions from "./components/FreeSessions";
import MyGoal from "./components/MyGoal";
import Loader from "./components/Loader";
import Divider from "./components/Divider";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: 'Sacred Healing Foundation | Holistic Healing & Spiritual Growth',
  description:
    'Sacred Healing Foundation offers holistic healing, Reiki, spiritual therapies, and certified courses to restore balance, peace, and well-being.',
  alternates: {
    canonical: 'https://www.sacredhealingfoundation.com/',
  },
};

export default function HomePage() {
  return (
    <div>
      <Loader />
      <Hero />
      <HomeAbout />
      <Divider />
      <MyGoal />
      <Divider />
      <FreeSessions />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
    </div>
  );
}