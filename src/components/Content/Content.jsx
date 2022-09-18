import ContentItem from "./ContentItem";
import data from "./index";
function Content({isOpenModal}) {
  return (
    <div className= {`${isOpenModal && "blur-sm"}`}>
        {data.map((item,index) => (
            <ContentItem key={index} data={item}/>
        ))}
       
    </div>
  );
}

export default Content;
