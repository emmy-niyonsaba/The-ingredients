import{chiefLogo} from '/public/images'
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img
            src={chiefLogo}
            alt="Chef Logo"
            className="w-14 h-14 rounded-full border-4 border-white shadow-md object-cover"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Chef Emmanuel
          </h1>
        </div>

        

      </div>
    </header>
  );
};

export default Header;
