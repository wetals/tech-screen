import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MAX_COUNT } from "../shared";

import AddIdeaForm from "../AddIdeaForm";

const testData = {
  formData: {
    title: "test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium venenatis luctus. Phasellus eu arcu euismod neque"
  },
  handleUserFormSubmit: jest.fn(),
  handleFormChange: jest.fn()
};

describe("AddIdeaForm component", () => {
  it("renders properly", () => {
    const wrapper = shallow(<AddIdeaForm {...testData} />);
    const element = wrapper.find("form");

    expect(element.length).toBe(1);
    expect(element.find("input").get(0).props.name).toBe("title");
    expect(element.find("textarea").get(0).props.name).toBe("description");
    expect(element.find("button").length).toBe(1);
  });

  it("submits the form properly", () => {
    const wrapper = shallow(<AddIdeaForm {...testData} />);
    expect(testData.handleFormChange).toHaveBeenCalledTimes(0);
    expect(testData.handleUserFormSubmit).toHaveBeenCalledTimes(0);

    wrapper.find("input").simulate("change");
    expect(testData.handleFormChange).toHaveBeenCalledTimes(1);

    wrapper.find("form").simulate("submit", testData.formData);
    expect(testData.handleUserFormSubmit).toHaveBeenCalledWith(
      testData.formData
    );
    expect(testData.handleUserFormSubmit).toHaveBeenCalledTimes(1);
  });

  it("displays character limits for textarea", () => {
    const wrapper = shallow(<AddIdeaForm {...testData} />);
    const count = testData.formData.description.length;
    const element = wrapper.find(".counter");
    expect(element.length).toBe(1);
    expect(element.text()).toBe(`${MAX_COUNT - count} characters remaining`);
  });

  it("renders snapshot properly", () => {
    const tree = renderer.create(<AddIdeaForm {...testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
