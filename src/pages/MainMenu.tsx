
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const MainMenu = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Найти специалиста', path: '/categories' },
    { label: 'О нас', path: '/about' },
    { label: 'Морякам', path: '/for-seafarers' },
    { label: 'Поддержка', path: '/support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white flex flex-col">
      <div className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Главное меню
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {buttons.map((btn, index) => (
            <motion.button
              key={index}
              onClick={() => navigate(btn.path)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#253745] hover:bg-[#4A5C6A] transition-colors duration-300 text-white font-medium py-4 px-6 rounded-lg shadow"
            >
              {btn.label}
            </motion.button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainMenu;
