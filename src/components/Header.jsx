const Header = () => {
  return (
    <header className="header w-full flex justify-between items-center md:flex-row flex-col mt-3 p-3">
      <div className="flex-col font-serif font-extrabold">
        <h1 className="text-white">Sarvesh</h1>
        <h1 className="text-white">Hadgaonkar</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg" onClick={(e) => {
    e.preventDefault();
    document.getElementById('about-me-anchor').scrollIntoView({ behavior: 'smooth' });
  }} >
          About Me
        </button>
        <button className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg" onClick={() => window.open("mailto:sarveshhadgaonkar01@gmail.com")}>
          Contact Me
        </button>
      </div>
    </header>
  );
};
export default Header;
