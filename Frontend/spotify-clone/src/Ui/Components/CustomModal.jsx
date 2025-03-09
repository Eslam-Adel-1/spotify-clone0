const CustomModal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
