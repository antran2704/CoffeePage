import imgs from "../../assets/images";
import "./Header.scss";
function Header({isOpenModal}) {
 
  return (
    <div className={`bg-primaryColor h-screen sm:h-[70vh] relative overflow-hidden ${isOpenModal && "blur-sm"}`}>
      <div className="max-w-container px-[20px] mx-auto h-full flex sm:flex-col-reverse sm:justify-center items-center ">
        <div className="max-w-[50%] sm:w-full sm:max-w-none sm:text-center sm:justify-center  z-10">
          <h1 className="text-large text-whiteColor md:text-mdLarge  sm:text-smLarge">Our Coffee Is</h1>
          <h3 className="text-medium text-whiteColor md:text-mdMedium sm:text-smMedium">A Never Ending Story</h3>
          <button  className="text-small text-whiteColor bg-redColor px-[30px] py-[6px] rounded-md md:text-mdSmall sm:text-smSmall">
            See new location
          </button>
        </div>
        <img
            className="hidden sm:block sm:rotate-45 sm:w-[70%]"
            src={imgs.cupCoffee}
            alt=""
          />
        <div className="absolute sm:hidden top-[-20px] right-[0]  w-[70%]  h-[600px]  bg-textColor rounded-bl-[48%] rounded-tl-[48%] md:rounded-tl-[10%]  transition-all ease-linear duration-200 z-0">
          <img
            className="header__img absolute bottom-[4%] left-[10%]"
            src={imgs.cupCoffee}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
