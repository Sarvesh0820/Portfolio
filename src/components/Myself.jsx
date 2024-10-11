import photo from "../assets/me.jpeg";
const Myself = () => {
  return (
     <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex  ">
          <img src={photo} alt="sarvesh hadgaonkar" className="rounded-full h-[250px] w-[250px] object-cover" />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Sarvesh Hadgaonkar
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
        </div>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Frontend Developer with a focus on React Js development,
          dedicated to crafting elegant and user-friendly web applications.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:sarveshhadgaonkar01@gmail.com@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent ">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};
export default Myself;
