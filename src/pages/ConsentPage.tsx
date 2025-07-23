
import { useNavigate } from 'react-router-dom';

const ConsentPage = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem('consentGiven', 'true');
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать в Stress Out</h1>
      <p className="mb-4">
        Это мини-приложение поможет вам найти специалиста для поддержки ментального здоровья.
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Я согласен
      </button>
    </div>
  );
};

export default ConsentPage;
