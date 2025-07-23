import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import { dummySpecialists } from '../data/dummySpecialists';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const specialist = dummySpecialists.find((s) => s.id === id);

  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Здесь позже будет отправка данных в Telegram

    navigate('/thank-you'); // Переход на страницу благодарности
  };

  if (!specialist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1D25] text-white">
        <p>Специалист не найден</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white flex flex-col">
      <BackButton />
      <div className="flex-grow px-6 py-10 max-w-2xl mx-auto w-full">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Запись к специалисту
        </motion.h1>

        <motion.div
          className="bg-[#11212D] rounded-xl p-6 mb-6 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl font-semibold">{specialist.name}</p>
          <p className="text-gray-300">{specialist.title}</p>
        </motion.div>

        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block">
            <span className="text-sm text-gray-400">Ваше имя</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван"
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-400">Ваш Telegram</span>
            <input
              type="text"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder="@your_username"
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full mt-4 bg-[#D363B9] hover:bg-[#B6410F] text-white py-3 rounded-xl transition"
          >
            Отправить заявку
          </button>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;

