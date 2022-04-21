import React from "react";
import App from "../App";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
// import renderer from "react-test-renderer";

describe("App Component", () => {
  let component;
  beforeEach(() => {
    component = render(<App />);
  });
  afterEach(cleanup);

  it("renders correctly", () => {
    const { toJSON } = component;
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders input field correctly", async () => {
    const { findByTestId, findByText, queryByTestId } = component;

    const mockInputText = "Hulk";
    const input = findByTestId("input");
    console.log("input = ", input);
    fireEvent.changeText(input, mockInputText);

    const search = findByText("Search");
    console.log("search = ", search);
    fireEvent.press(search);

    await waitFor(() => {
      expect(queryByTestId("flat-list")).toBeTruthy();
    });
  });
});
