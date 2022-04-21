import React from "react";
import App from "../App";
import { render, cleanup } from "@testing-library/react-native";
import renderer from "react-test-renderer";

describe("App Component", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    const component = renderer.create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
