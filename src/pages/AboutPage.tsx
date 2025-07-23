import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import TelegramButton from '../components/TelegramButton';
import Footer from '../components/Footer';

const AboutPage = () => {
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
          О проекте Stressout
        </motion.h1>

        <motion.div
          className="text-lg text-gray-300 space-y-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>
            <strong>Stressout</strong> — это безопасное пространство, где ты можешь найти помощь, понять себя и сделать первый шаг к внутреннему спокойствию.
          </p>
          <p>
            Здесь работают проверенные специалисты:
            <br />— психологи и коучи;
            <br />— нейропсихологи;
            <br />— практики осознанности;
            <br />— консультанты по стрессу и выгоранию.
          </p>
          <p>
            Если ты чувствуешь тревогу, усталость, растерянность — ты не один, мы рядом.
            И мы собрали тех, кто действительно умеет поддерживать.
          </p>
          <p>
            Ты можешь:
            <br />— выбрать специалиста;
            <br />— задать свой вопрос;
            <br />— или стать тем, кто помогает другим.
          </p>
          <p>
            <strong>Stressout</strong> — чтобы каждый знал: помощь ближе, чем кажется. Тут только ты и тот, кто может помочь.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
