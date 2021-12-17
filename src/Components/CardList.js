import Card from "./Card";

const Cardlist = ({ robots, handlemodal }) => {
  // if (true) {
  //   throw new Error("Oooh Shit!!!");
  // }

  return (
    <div className="cardsbox">
      {robots.map((user, i) => {
        return (
          <Card
            handlemodal={handlemodal}
            key={i}
            robot={robots[i]}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
