const Card = ({ name, email, id }) => {
  return (
    <div className="cards">
      <img alt="img" src={`https://robohash.org/${id}?200*100`} />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};
export default Card;
