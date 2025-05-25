const CustomAlertModal = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[100] transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full transform transition-all duration-300 scale-100">
        <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-5">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlertModal;