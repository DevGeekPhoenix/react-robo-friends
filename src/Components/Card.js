const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
      <img alt="img" src={`https://robohash.org/${id}?200*100`} />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};
export default Card;
