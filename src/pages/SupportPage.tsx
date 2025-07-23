import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import { FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const SupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white">
      <div className="flex-grow px-6 py-10 max-w-3xl mx-auto">
        <div className="flex justify-start mb-6">
          <BackButton />
        </div>

        <motion.h1
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Связаться с нами
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Если у вас возникли вопросы, предложения или нужна помощь — напишите нам.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="mailto:stressouthelp@hotmail.com"
            className="flex items-center gap-3 bg-[#11212D] hover:bg-[#1c2a38] px-4 py-3 rounded-xl transition"
          >
            <FaEnvelope className="text-[#D59D80]" size={20} />
            <span className="text-gray-200">stressouthelp@hotmail.com</span>
          </a>

          <a
            href="https://t.me/stressout_help"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#11212D] hover:bg-[#1c2a38] px-4 py-3 rounded-xl transition"
          >
            <FaTelegramPlane className="text-[#D59D80]" size={20} />
            <span className="text-gray-200">@stressout_help</span>
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default SupportPage;
