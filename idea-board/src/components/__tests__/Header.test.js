import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Header from "../Header";

test("Header renders a snapshot properly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Header renders properly", () => {
  const wrapper = shallow(<Header />);
  const element = wrapper.find("h2");
  expect(element.length).toBe(1);
  expect(element.text()).toBe("Get inspired");
});
