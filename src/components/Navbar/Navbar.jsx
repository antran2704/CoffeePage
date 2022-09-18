import imgs from "../../assets/images";
import { FiMenu } from "react-icons/fi";
import {AiFillCloseCircle} from "react-icons/ai"
import "./Navbar.scss";
import menus from "./index";
import { useScrollTop } from "../../hooks";
function Navbar({handleOpenModal , isOpenModal}) {
  const height = useScrollTop()

  return (
    <div style={{backgroundColor: `rgba(154 ,190 ,193,${height/400})`}} className="h-[80px] w-full fixed z-30">
      <div className="mx-auto max-w-container px-[20px] md:max-w-mdContainer sm:max-w-smContainer flex items-center justify-between sm:h-full">
        <img className="w-[80px] h-[80px] sm:w-[60px] sm:h-[60px]" src={imgs.logo} alt="" />
        <div onClick={handleOpenModal} className={`all:fixed all:top-0 all:bottom-0 all:left-0 ${isOpenModal ? "all:right-0" : "all:-right-ful"} all:bg-layoutModal transition-all ease-linear duration-1000`}></div>
        <ul className={`flex items-center justify-between text-small w-[50%] all:absolute ${isOpenModal ? "all:right-0" : "all:-right-full"} all:top-0 all:bottom-0 all:flex-col all:h-screen all:justify-start all:items-start all:bg-textColor all:gap-[30px] all:py-[20px] transition-all ease-linear duration-300`}>
          <AiFillCloseCircle onClick={handleOpenModal} className="hidden all:text-[30px] all:block all:text-whiteColor all:mx-[16px] all:cursor-pointer"/>
          {menus.map((item, index) => (
            <a
              key={index}
              className="navbar__item text-whiteColor hover:text-primaryColor all:w-full"
              href="/"
            >
              <li className="all:py-[10px] all:px-[16px]">{item.title}</li>
            </a>
          ))}
        </ul>
        <FiMenu onClick={handleOpenModal} className="text-[30px] text-whiteColor hidden all:block" />
      </div>
    </div>
  );
}

export default Navbar;
