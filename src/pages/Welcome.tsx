// src/pages/Welcome.tsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06141B] via-[#11212D] to-[#253745] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#C6C6D0] mb-6 leading-tight">
          Добро пожаловать в Stress Out
        </h1>
        <p className="text-[#9BA8AB] text-lg md:text-xl mb-8">
          Мы поможем найти специалиста для поддержки ментального здоровья. Без давления. С заботой.
        </p>
        <button
          onClick={() => navigate('/main')}
          className="bg-[#D59D80] hover:bg-[#C0754D] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Начать
        </button>
      </motion.div>
    </div>
  );
};

export default Welcome;
