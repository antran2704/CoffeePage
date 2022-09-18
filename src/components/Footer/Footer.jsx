import imgs from "../../assets/images";
import { FaFacebook } from "react-icons/fa";
function Footer({ isOpenModal }) {
  return (
    <div className={`w-full bg-textColor py-10 ${isOpenModal && "blur-sm"}`}>
      <div className="mx-auto max-w-container px-[20px] text-center flex flex-col items-center justify-center">
        <img className="w-[80px] h-[80px]" src={imgs.logo} alt="" />
        <h3 className="text-small md:text-mdSmall sm:text-smSmall text-primaryColor font-bold">
          One Sip - Forget The Rest
        </h3>
        <p className="text-small md:text-mdSmall sm:text-smSmall text-[#9c9c9c]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          architecto veniam, quia similique voluptatum porro, assumenda beatae
          dolore exercitationem fugit aspernatur, blanditiis maxime officia amet
          ullam ab vel ut tempore.
        </p>
      </div>
      <div className="flex items-center justify-center my-3 gap-3">
        <a href="/" className="bg-primaryColor p-2 rounded-full">
          <FaFacebook className="text-whiteColor" />
        </a>
        <a href="/" className="bg-primaryColor p-2 rounded-full">
          <FaFacebook className="text-whiteColor" />
        </a>
        <a href="/" className="bg-primaryColor p-2 rounded-full">
          <FaFacebook className="text-whiteColor" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
