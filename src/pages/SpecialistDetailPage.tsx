import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import TelegramButton from '../components/TelegramButton';
import Footer from '../components/Footer';
import { dummySpecialists } from '../data/dummySpecialists';

const specialistDescriptions: Record<string, string> = {
  psychologist:
    'Клинический психолог занимается диагностикой, лечением и профилактикой психических заболеваний. Помогает при тревоге, панике, выгорании, используя терапевтические методы.',
  neuropsychologist:
    'Нейропсихолог исследует взаимосвязь мозга и поведения. Помогает при нарушениях памяти, внимания, эмоционального состояния, вызванных заболеваниями или травмами мозга.',
  meditation:
    'Специалист по медитации и осознанности помогает развивать концентрацию, снижать стресс и улучшать психоэмоциональное состояние через медитативные практики.',
  astrologer:
    'Астропсихолог сочетает астрологию и психологию, помогая понять особенности личности и жизненные события через анализ карт и влияние планет.',
  sexologist:
    'Сексолог консультирует по вопросам интимных отношений, помогает справляться с сексуальными расстройствами и улучшать сексуальное здоровье.',
  coach:
    'Психолог-коуч помогает в вопросах карьеры и самореализации: выявить сильные стороны, поставить цели, развивать уверенность и двигаться к личному росту.',
  crisis:
    'Кризисный психолог оказывает поддержку при утрате, разводе, травме и других эмоциональных кризисах. Помогает справляться с перегрузкой.',
  family:
    'Семейный и детский психолог помогает детям и семьям справляться с конфликтами, адаптацией и формировать эмоциональное благополучие.',
};

const SpecialistDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const specialist = dummySpecialists.find((s) => s.id === id);

  if (!specialist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1D25] text-white">
        <p>Специалист не найден</p>
      </div>
    );
  }

  const description = specialistDescriptions[specialist.category] || 'Описание недоступно.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white flex flex-col">
      <BackButton />
      <div className="flex-grow px-6 py-10 max-w-3xl mx-auto w-full">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {specialist.name}
        </motion.h1>

        <motion.h2
          className="text-xl text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {specialist.title}
        </motion.h2>

        <motion.p
          className="text-md text-gray-400 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>

        <button
          onClick={() => navigate(`/booking/${specialist.id}`)}
          className="bg-[#D363B9] text-white py-3 px-6 rounded-xl shadow hover:bg-[#B6410F] transition"
        >
          Записаться к специалисту
        </button>
      </div>
      <TelegramButton />
      <Footer />
    </div>
  );
};

export default SpecialistDetailPage;
