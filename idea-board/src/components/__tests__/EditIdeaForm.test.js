import React from "react";
import { shallow } from "enzyme";

import EditIdeaForm from "../EditIdeaForm";
import renderer from "react-test-renderer";

const testData = {
  index: 0,
  idea: {
    title: "test",
    description: "test",
    lastUpdated: 1537764753873,
    active: false
  },
  handleUpdateIdea: jest.fn(),
  handleDeleteIdea: jest.fn()
};

describe("EditIdeaForm component", () => {
  it("renders properly", () => {
    const wrapper = shallow(<EditIdeaForm {...testData} />);

    const element = wrapper.find(".idea");

    expect(element.length).toBe(1);
    expect(element.find("input").get(0).props.value).toBe(testData.idea.title);
    expect(element.find("textarea").get(0).props.value).toBe(
      testData.idea.description
    );
  });

  test("renders snapshot properly", () => {
    const tree = renderer.create(<EditIdeaForm {...testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
