import { FaTelegramPlane } from 'react-icons/fa';

const TelegramButton = () => {
  return (
    <a
      href="https://t.me/stressout_help"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#229ED9] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <FaTelegramPlane size={24} />
    </a>
  );
};

export default TelegramButton;
