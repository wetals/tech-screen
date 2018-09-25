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
  });

  test("renders snapshot properly", () => {
    const tree = renderer.create(<EditIdeaForm {...testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
