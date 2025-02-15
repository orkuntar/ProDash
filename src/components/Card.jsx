export const Card = ({ title }) => {
    return (
      <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm pointer-events-auto relative z-0">
        <h3 className="text-lg mb-3 text-center text-gray-800 dark:text-white">{title}</h3>
        <p className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          {Math.floor(Math.random() * 100)}
        </p>
      </div>
    );
  };