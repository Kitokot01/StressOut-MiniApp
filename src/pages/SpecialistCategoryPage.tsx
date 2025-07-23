import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import TelegramButton from '../components/TelegramButton';
import Footer from '../components/Footer';

const categories = [
  { id: 'psychologist', name: 'Клинический психолог' },
  { id: 'family', name: 'Семейный и детский психолог' },
  { id: 'sexologist', name: 'Сексолог' },
  { id: 'coach', name: 'Коуч по самореализации' },
  { id: 'crisis', name: 'Кризисный психолог' },
  { id: 'neuropsychologist', name: 'Нейропсихолог' },
  { id: 'meditation', name: 'Практик осознанности' },
  { id: 'astrologer', name: 'Астропсихолог' },
];

const SpecialistCategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1D25] to-[#06141B] text-white px-4 py-8 flex flex-col">
      <BackButton />
      <div className="max-w-3xl mx-auto flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Выберите категорию
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => navigate(`/specialists/${cat.id}`)}
              className="bg-[#1C2A36] hover:bg-[#263845] text-white py-3 px-4 rounded-xl shadow transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
      </div>
      <TelegramButton />
      <Footer />
    </div>
  );
};

export default SpecialistCategoryPage;
