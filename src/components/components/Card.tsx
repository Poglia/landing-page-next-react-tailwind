import { title } from "process";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="relative flex flex-row overflow-hidden py-6 px-4 sm:px-0">
      <div className="group relative overflow-hidden overflow-clip-rounded bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg sm:mx-[5px] sm:max-w-sm sm:px-3 sm:min-h-[500px]">
        <span className="absolute mx-3 top-10 z-0 h-20 w-20 rounded-full bg-black transition-all duration-1000 group-hover:scale-[20]"></span>
        <div className="relative z-10 mx-3 max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 group-hover:text-black text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="flex flex-col justify-between h-[20rem]  pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 ">
            <p className="my-4">{description}</p>
            <a href="https://forms.gle/dKCxALGxEf3yM24Y9" target="blank">
            <button className="btn btn-primary group-hover:bg-white text-lg -tracking-tight group-hover:text-black cursor-pointer self-start">
              Avalie meu caso
            </button>
            </a>
            {/* <div className="h-10 w-10 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500"></div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
