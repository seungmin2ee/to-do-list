import List from "./List";

const Lists = ({isData}) => {

  return (
    <ul className="lists">
        {isData.map( (list) => {
           return <List key={list.id} list={list} />
        })}
    </ul>
  )
    
  
};

export default Lists;
