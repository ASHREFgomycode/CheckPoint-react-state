import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import todoLogo from "../src/to-do-list.png";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { desc: "Eat", id: Math.random(), statut: false },
        { desc: "School", id: Math.random(), statut: false },
        { desc: "Gym", id: Math.random(), statut: false },
      ],
      textLive: "",
    };
  }
  addTask = () =>
    this.state.textLive !== "" &&
    this.setState({
      tasks: [
        ...this.state.tasks,
        { desc: this.state.textLive, id: Math.random(), statut: false },
      ],
      textLive: "",
    });
  deleteTask = (a) =>
    this.setState({
      tasks: this.state.tasks.filter((el, i, t) => el.id !== a),
    });

  statutTask = (a) =>
    this.setState({
      tasks: this.state.tasks.map((el, i, t) =>
        el.id === a ? { ...el, statut: !el.statut } : el
      ),
    });
  render() {
    return (
      <div className="bg">
        <div className="img">
          <img
          alt=""
          src={todoLogo}
          width="160"
          height="160"
          // style={{ marginLeft: "-46px"}}

          className="d-inline-block align-top"
        />
        </div>
        <div >
          {this.state.tasks.map((el, i, t) => (
            <div className="items">
              <h2 className={el.statut && "deco"} id="h2">
                {" "}
                {el.desc}{" "}
              </h2>
              <div className="icons">
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={() => this.statutTask(el.id)}
                />

                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => this.deleteTask(el.id)}
                />
              </div>
              {/* <hr id="hr"/> */}
            </div>
          ))}

          <br></br>
          <br></br>

          <div id="bar" >
            <Form.Label htmlFor="inputPassword5"></Form.Label>

            <Form.Control 
            id="input"
              value={this.state.textLive}
              onChange={(e) => this.setState({ textLive: e.target.value })}
              type="text"
              
              aria-describedby="passwordHelpBlock"
            />
          </div>

          <br></br>
          <div  className="butt">
          <Button variant="success" onClick={this.addTask}>Add Task</Button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
