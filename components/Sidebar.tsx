import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="/images/avatar.JPG"
        alt="avatar"
        className="mx-auto rounded-full"
        width="128px"
        height="128px"
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-bodoni">
        <span className="text-purple">Daniel </span>
        Grenfell
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Recent Graduate
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/Daniel Grenfell CV.pdf"
        download="Daniel Grenfell CV.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* //social icons */}
      <div className="flex justify-around w-9/12 my-5 text-purple md:w-full">
        <a href="https://www.linkedin.com/in/daniel-grenfell-551a881b3/">
          <AiFillLinkedin className="w-10 h-10 cursor-pointer" />
        </a>
        <a href="https://github.com/dgrenfell">
          <AiFillGithub className="w-10 h-10 cursor-pointer" />
        </a>
      </div>

      {/* address */}

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>London, United Kingdom</span>
        </div>
        <p className="my-2">daniel.grenfell1@gmail.com</p>
        <p className="my-2">07544319120</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:daniel.grenfell1@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
