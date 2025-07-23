import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import TelegramButton from '../components/TelegramButton';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white flex flex-col justify-center items-center p-6">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Спасибо за заявку!
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 mb-8 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Мы получили вашу информацию. Наш специалист свяжется с вами в Telegram в ближайшее время.
      </motion.p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/main')}
          className="bg-[#C0754D] hover:bg-[#B6410F] transition text-white font-semibold py-2 px-6 rounded-xl shadow"
        >
          На главную
        </button>

        <TelegramButton />
      </div>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
