import { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import "../Containers/App.css";
import Modal from "../Components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      robot: null,
      SearchValue: "",
      ismodaldisplay: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onsearchchange = (SearchValue) => {
    this.setState({ SearchValue });
  };
  render() {
    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.SearchValue.toLowerCase());
    });
    const currentLocation = () => {
      if (this.state.robot === null) return;
      let lat = this.state.robot.address.geo.lat;
      let lng = this.state.robot.address.geo.lng;

      return { lat, lng };
    };

    const handlemodal = (robot) => {
      this.setState({ ismodaldisplay: true, robot });
    };
    const handleclosemodal = () => {
      this.setState({ ismodaldisplay: false });
    };
    if (this.state.robots.length === 0) {
      return <h1>Loading Please Wait...</h1>;
    } else {
      return (
        <div style={{ position: "relative" }}>
          <Modal
            currentLocation={currentLocation()}
            robot={this.state.robot}
            ismodaldisplay={this.state.ismodaldisplay}
            handleclosemodal={handleclosemodal}
          />
          <h1 className="h1">Robo Friend</h1>

          <SearchBox searchchange={this.onsearchchange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobot} handlemodal={handlemodal} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
