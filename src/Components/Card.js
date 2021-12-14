const Card = ({ name, email, id }) => {
  return (
    <div className="cards">
      <img alt="img" className="robopics" src={`https://robohash.org/${id}?`} />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};
export default Card;
