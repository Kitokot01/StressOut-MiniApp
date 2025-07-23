import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white mb-6"
    >
      <FaArrowLeft size={14} />
      <span>Назад</span>
    </button>
  );
};

export default BackButton;
