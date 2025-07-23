
import { useNavigate } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#11212D] text-gray-300 py-6 mt-auto shadow-inner">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <button onClick={() => navigate('/about')} className="hover:text-white transition">
            О нас
          </button>
          <button onClick={() => navigate('/seafarers')} className="hover:text-white transition">
            Морякам
          </button>
          <button onClick={() => navigate('/support')} className="hover:text-white transition">
            Поддержка
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <a
            href="https://t.me/stressout_help"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <FaTelegramPlane className="text-lg" />
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
