import React from "react"

import { shallow } from "enzyme"

import WebinarSection from "../../components/webinar-section/webinar-section"
import toJson from "enzyme-to-json"

test("should render webinar section with cards", () => {
  const demoData = {
    loadingStatus: false,
    favorited: true,
    handleScroll: jest.fn(),
    webinarList: [
      {
        id: "123",
        favourited: true,
        created_at: "2020",
        title: "this is the title",
        content: "this is the content",
      },
      {
        id: "125",
        favourited: true,
        created_at: "2020",
        title: "this is the title",
        content: "this is the content",
      },
      {
        id: "124",
        favourited: false,
        created_at: "2020",
        title: "this is the title",
        content: "this is the content",
      },
    ],
  }
  const wrapper = shallow(<WebinarSection {...demoData} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
