import React from "react";
import { MAX_COUNT } from "./shared";

const EditIdeaForm = props => {
  const handleChange = ({ currentTarget }) => {
    if (
      currentTarget.name === "description" &&
      currentTarget.value.length > MAX_COUNT
    ) {
      return;
    }
    const updatedIdea = {
      ...props.idea,
      [currentTarget.name]: currentTarget.value,
      lastUpdated: Date.now(),
      active: true
    };
    props.handleUpdateIdea(props.index, updatedIdea);
  };

  const updateActiveStatus = event => {
    const updatedIdea = {
      ...props.idea,
      active: event.type === "focus"
    };
    props.handleUpdateIdea(props.index, updatedIdea);
  };

  const formatDate = date => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    const ideaDate = new Date(date);

    return ideaDate.toLocaleDateString([], options);
  };

  const { title, description, active, lastUpdated } = props.idea;
  const className = `idea edit-mode ${active ? "focus" : ""}`;
  let remainingChar = MAX_COUNT - description.length;

  return (
    <div
      className={className}
      onBlur={updateActiveStatus}
      onFocus={updateActiveStatus}
    >
      <div className="field title">
        <input type="text" name="title" onChange={handleChange} value={title} />
      </div>

      <div className="field description">
        <textarea
          name="description"
          onChange={handleChange}
          value={description}
        />
        {remainingChar < 20 &&
          active && (
            <span className="counter">
              {`${remainingChar} characters remaining`}
            </span>
          )}
      </div>

      <div className="action-button">
        <button onClick={() => props.handleDeleteIdea(props.index)}>
          Remove
        </button>

        <div className="idea_date">
          <span>{formatDate(lastUpdated)}</span>
        </div>
      </div>
    </div>
  );
};

export default EditIdeaForm;
