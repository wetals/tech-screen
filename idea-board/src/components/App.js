import React, { Component } from "react";
import AddIdeaForm from "./AddIdeaForm";
import EditIdeaForm from "./EditIdeaForm";
import Header from "./Header";
import { STORE_REF, MAX_COUNT } from "./shared";

class App extends Component {
  state = {
    ideas: [
      {
        title: "ClearScore FED Idea",
        description:
          "Build an idea board that allows a user to create new ideas, edit existing ideas or delete them.",
        lastUpdated: 1537764753873,
        active: false
      }
    ],
    formData: {
      title: "",
      description: ""
    }
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(STORE_REF);
    if (localStorageRef) {
      this.setState({
        ideas: JSON.parse(localStorageRef)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(STORE_REF, JSON.stringify(this.state.ideas));
  }

  handleUpdateIdea = (key, updatedIdea) => {
    const ideas = [...this.state.ideas];
    ideas[key] = updatedIdea;
    this.setState({
      ideas
    });
  };

  handleDeleteIdea = key => {
    const ideas = this.state.ideas.filter((idea, index) => index !== key);
    this.setState({ ideas });
  };

  handleUserFormSubmit = event => {
    event.preventDefault();
    const idea = {
      ...this.state.formData,
      lastUpdated: Date.now(),
      active: false
    };
    this.setState({
      ideas: [...this.state.ideas, idea],
      formData: {
        title: "",
        description: ""
      }
    });
  };

  handleFormChange = event => {
    const obj = this.state.formData;
    if (
      event.target.name === "description" &&
      event.target.value.length > MAX_COUNT
    ) {
      return;
    }
    obj[event.target.name] = event.target.value;
    this.setState({
      formData: obj
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <section className="ideas">
            <AddIdeaForm
              formData={this.state.formData}
              handleFormChange={this.handleFormChange}
              handleUserFormSubmit={this.handleUserFormSubmit}
            />
            {this.state.ideas.map((idea, index) => (
              <EditIdeaForm
                key={index}
                index={index}
                idea={idea}
                handleUpdateIdea={this.handleUpdateIdea}
                handleDeleteIdea={this.handleDeleteIdea}
              />
            ))}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
