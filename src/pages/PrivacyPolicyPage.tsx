// src/pages/PrivacyPolicyPage.tsx


const PrivacyPolicyPage = () => {
  return (
    <div className="p-4 text-sm text-gray-800 overflow-y-auto max-h-screen bg-white">
      <h1 className="text-lg font-bold mb-4">Политика конфиденциальности</h1>
      <p className="mb-2">
        Настоящая Политика конфиденциальности и обработки персональных данных (далее — «Политика») разработана в отношении обработки персональных данных пользователей Telegram-бота «StressOut_bot» и канала “Stress Out”, в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ.
      </p>
      <p className="mb-2">
        Принятием настоящей Политики является нажатие Пользователем на кнопку "Принять" в чат-боте, что приравнивается к согласию на обработку персональных данных. Если вы не согласны — прекратите использование сервиса.
      </p>
      <p className="mb-2">
        Обработка осуществляется на законной и справедливой основе, строго в рамках целей:
        предоставление доступа к консультациям, обратная связь, обработка заявок, соблюдение закона.
      </p>
      <p className="mb-2">
        Данные: имя, телефон, email, выбранные услуги. Мы **не** обрабатываем биометрию или специальные категории данных.
      </p>
      <p className="mb-2">
        Вы можете отозвать согласие, уточнить или удалить данные — по почте: <b>stressouthelp@hotmail.com</b>.
      </p>
      <p className="mb-2">
        Все данные хранятся в РФ и защищены техническими, организационными и правовыми мерами.
      </p>
      <p className="text-xs text-gray-500">
        ИП Лагутин Андрей Андреевич, ИНН 253600272898
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
