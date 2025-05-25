const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Nagesh Tiwari. All rights reserved.
      </p>
      {/* Optional: Add a link to your GitHub/LinkedIn if desired */}
      {/* <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
        Powered by Next.js & Tailwind CSS
      </p> */}
    </footer>
  );
};

export default Footer;