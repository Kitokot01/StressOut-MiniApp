import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import TelegramButton from '../components/TelegramButton';
import Footer from '../components/Footer';

const ForSeafarersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white">
      <div className="flex-grow px-6 py-10 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <BackButton />
          <TelegramButton />
        </div>

        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Морякам
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Моряки сталкиваются с высоким уровнем стресса, длительной изоляцией и
          непростыми условиями работы. Мы предлагаем поддержку специально для тех,
          кто работает в море.
        </motion.p>

        <motion.ul
          className="list-disc list-inside space-y-2 text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <li>Специалисты, понимающие морскую специфику</li>
          <li>Гибкое расписание с учётом рейсов</li>
          <li>Анонимность и безопасность</li>
          <li>Поддержка компаний и крюингов</li>
        </motion.ul>

        <motion.button
          className="bg-[#B6410F] hover:bg-[#C0754D] text-white font-semibold py-3 px-6 rounded-xl transition w-full md:w-auto"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/seafarers-booking')}
        >
          Записаться к специалисту
        </motion.button>
      </div>

      <Footer />
    </div>
  );
};

export default ForSeafarersPage;
