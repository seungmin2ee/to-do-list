import List from "./List";

const Lists = ({isData, reRendering}) => {

  return (
    <ul className="lists">
        {isData.map( (list) => {
           return <List key={list.id} list={list} reRendering={reRendering} />
        })}
    </ul>
  )
    
  
};

export default Lists;
