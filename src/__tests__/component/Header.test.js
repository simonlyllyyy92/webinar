// import ReactShallowRenderer from "react-test-renderer/shallow"
import React from "react"
import Header from "../../components/header/headerIndex"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

//react-test-renderer
test("should render Header correctly", () => {
  const wrapper = shallow(<Header />)
  expect(toJson(wrapper)).toMatchSnapshot()
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
