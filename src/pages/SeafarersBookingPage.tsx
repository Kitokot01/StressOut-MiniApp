import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import TelegramButton from '../components/TelegramButton';
import Footer from '../components/Footer';

const SeafarersBookingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06141B] via-[#0D1D25] to-[#11212D] text-white flex flex-col">
      <div className="flex-grow px-6 py-12 max-w-2xl mx-auto">
        <BackButton />

        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Помощь морякам
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Если вы работаете в море и нуждаетесь в поддержке, просто нажмите на кнопку ниже — наш Telegram-бот свяжется с вами и поможет найти специалиста, подходящего именно вам.
        </motion.p>

        <motion.a
          href="https://t.me/stressout_help"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#D59D80] hover:bg-[#C0754D] text-white font-semibold rounded-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Связаться через Telegram
        </motion.a>
      </div>

      <TelegramButton />
      <Footer />
    </div>
  );
};

export default SeafarersBookingPage;
