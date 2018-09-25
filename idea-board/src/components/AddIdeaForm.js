import React from "react";
import { MAX_COUNT } from "./shared";

const AddIdeaForm = props => {
  let remainingChar = MAX_COUNT - props.formData.description.length;

  return (
    <form
      className="idea"
      onSubmit={event => props.handleUserFormSubmit(event)}
    >
      <div className="field title">
        <input
          name="title"
          onChange={props.handleFormChange}
          type="text"
          autoFocus
          placeholder="Title"
          value={props.formData.title}
        />
      </div>

      <div className="field description">
        <textarea
          name="description"
          onChange={props.handleFormChange}
          placeholder="Description"
          value={props.formData.description}
        />
        {remainingChar < 20 && (
          <span className="counter">
            {`${remainingChar} characters remaining`}
          </span>
        )}
      </div>
      <div className="action-button">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddIdeaForm;
