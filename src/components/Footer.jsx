const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 text-sm py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">
          © {new Date().getFullYear()} Abderrakib Ambari. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/AbderrakibAmbari"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abderrakib-ambari/"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
