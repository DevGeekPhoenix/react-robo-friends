const Card = ({ name, email, id, handlemodal, robot }) => {
  return (
    <div className="cards" onClick={() => handlemodal(robot)}>
      <img alt="img" className="robopics" src={`https://robohash.org/${id}?`} />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};
export default Card;
