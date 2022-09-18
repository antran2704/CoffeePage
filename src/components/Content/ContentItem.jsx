import { useEffect, useRef } from "react";
import imgs from "../../assets/images/index";

function ContentItem({ data }) {
  const aRef = useRef()
  useEffect(() => {
    console.log(window.innerHeight)
    console.log(aRef.current.getBoundingClientRect())
  })
  return (
    <div className={`mx-auto max-w-container px-[20px] flex ${data.imgPos === "left" ? "sm:flex-col" : "sm:flex-col-reverse"}  items-center justify-between my-10 sm:gap-5`}>
      {data.imgPos === "left" && (
        <img className="w-[30%] sm:w-full" src={imgs.coffeeBeans} alt="" />
      )}
      <div className="w-[50%] sm:w-full">
        <h3 className="text-medium sm:text-center md:text-mdMedium sm:text-smMedium text-textColor font-bold">{data.title}</h3>
        <p ref={aRef} className="text-small sm:text-justify md:text-mdSmall sm:text-smSmall text-textColor font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat
          adipisci quaerat accusamus quia sunt explicabo praesentium dolores
          autem corporis porro cumque ab amet eaque voluptates, odio quae
          inventore facilis.
        </p>
      </div>
      {data.imgPos === "right" && (
        <img className="w-[30%] sm:w-full" src={imgs.coffeeBeans} alt="" />
      )}
    </div>
  );
}

export default ContentItem;
