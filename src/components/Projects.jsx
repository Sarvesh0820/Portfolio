import currency from '../assets/currencyCon.mp4'
import todo from '../assets/todo.mp4'
import blog from '../assets/blog.mp4'
import tweet from '../assets/tweet.mp4'

const Projects = () => {
  return (
    <section className='mb-5'>
        <div className="flex items-center flex-col justify-center m-12 mt-20">
          <h1 className="text-white text-5xl font-extrabold">PROJECTS</h1>
      <p className="tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">EXPLORE NOW</p>
        </div>
      <div className="flex flex-wrap justify-center">
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div className="bg-black text-white  shadow-md rounded-lg border border-white">
      <div className="w-full h-full aspect-ratio-16/9 overflow-hidden rounded-t-lg">
        <video src={currency} loop muted autoPlay style={{ maxHeight: '100%', objectFit: 'cover', width: '100%' }}></video>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Currency Converter</h2>
        <p className="text-gray-600">A currency converter app where you can convert any currency with just a click</p>
        <div className="flex justify-between">
          <a href="https://convert-paisa.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            Open Project
          </a>
          <a href="https://github.com/Sarvesh0820/currencyConverter" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            View Repository
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div className="bg-black text-white rounded-lg border border-white shadow-md">
      <div className="w-full h-full aspect-ratio-16/9 overflow-hidden rounded-t-lg">
  <video src={todo} loop muted autoPlay style={{ maxHeight: '100%', objectFit: 'cover', width: '100%' }}></video>
</div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Todo App</h2>
        <p className="text-gray-600">A todo app where you can add your daily todo tasks.</p>
        <div className="flex justify-between">
          <a href="https://sarvesh-my-todo.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            Open Project
          </a>
          <a href="https://github.com/Sarvesh0820/todo" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            View Repository
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div className="bg-black text-white rounded-lg border border-white shadow-md">
      <div className="w-full h-full aspect-ratio-16/9 overflow-hidden rounded-t-lg">
        <video src={blog} loop muted autoPlay style={{ maxHeight: '100%', objectFit: 'cover', width: '100%'}}></video>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Blog Nest</h2>
        <p className="text-gray-600">A blog app where you can create blogs and modify it.</p>
        <div className="flex justify-between">
          <a href="https://project3.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            Open Project
          </a>
          <a href="https://github.com/Sarvesh0820/blogPost" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            View Repository
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div className="bg-black text-white shadow-md rounded-lg border border-white">
      <div className="w-full h-full aspect-ratio-16/9 overflow-hidden rounded-t-lg">
  <video src={tweet} loop muted autoPlay style={{ maxHeight: '100%', objectFit: 'cover', width: '100%' }}></video>
</div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Tweet It</h2>
        <p className="text-gray-600">A tweet app where you can post tweets just like the Tweeter app.</p>
        <div className="flex justify-between">
          <a href="https://project4.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            Open Project
          </a>
          <a href="https://github.com/Sarvesh0820/TweetIt" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-white hover:text-black border border-white text-white font-bold py-2 px-4 rounded-lg">
            View Repository
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
    
  );
};

export default Projects;
