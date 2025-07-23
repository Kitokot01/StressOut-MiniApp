import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import TelegramButton from '../components/TelegramButton';
import Footer from '../components/Footer';
import { dummySpecialists } from '../data/dummySpecialists';

const SpecialistList = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const filtered = dummySpecialists.filter((s) => s.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white flex flex-col">
      <BackButton />
      <div className="flex-grow px-4 py-8 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">
          Специалисты: {category}
        </h1>

        <div className="grid gap-4">
          {filtered.map((spec) => (
            <motion.div
              key={spec.id}
              className="p-4 bg-[#1C2A36] rounded-xl shadow hover:bg-[#263845] cursor-pointer transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/booking/${spec.id}`)}
            >
              <h2 className="text-xl font-semibold">{spec.name}</h2>
              <p className="text-sm text-gray-300">{spec.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <TelegramButton />
      <Footer />
    </div>
  );
};

export default SpecialistList;
