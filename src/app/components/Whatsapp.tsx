'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowUp, FaDownload } from 'react-icons/fa';

const Whatsapp = () => {
  const phoneNumber = '8793877913';
  const message = encodeURIComponent(
    'Hi, I would like to know more about your services.'
  );

  const [showTop, setShowTop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBrochureBtn, setShowBrochureBtn] = useState(false);

  /* ---------------- MODAL LOGIC ---------------- */
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('brochureModalShown');

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem('brochureModalShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowBrochureBtn(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setShowBrochureBtn(true);
  };

  /* ---------------- SCROLL LOGIC ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= BROCHURE MODAL ================= */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] sm:w-[50vw] max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
              aria-label="Close brochure modal"
            >
              ×
            </button>

            {/* Brochure */}
            <img
              src="/brochure.png"
              alt="Brochure"
              className="w-full h-auto object-contain"
            />

            {/* Actions */}
            <div className="p-4 flex flex-col sm:flex-row gap-3 justify-between">
              <a
                href="/brochure.png"
                download
                className="w-full sm:w-auto text-center px-5 py-2 rounded-lg bg-[#6B4A8C] text-white font-medium hover:opacity-90"
              >
                Download Brochure
              </a>

              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FLOATING ACTIONS ================= */}
      <div
        className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        {/* Back to Top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition hover:scale-110 hover:bg-gray-900"
          >
            <FaArrowUp size={18} />
          </button>
        )}

        {/* Download Brochure (appears AFTER modal close) */}
        {showBrochureBtn && (
          <a
            href="/brochure.png"
            download
            aria-label="Download brochure"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B4A8C] text-white shadow-lg transition hover:scale-110"
          >
            <FaDownload size={18} />
          </a>
        )}

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
        >
          <FaWhatsapp size={28} />
        </Link>
      </div>
    </>
  );
};

export default Whatsapp;
