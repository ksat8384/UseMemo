import React from "react";
import App from "../App";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react-native";

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

  it("renders input field, button and list correctly", () => {
    const { findByTestId, findByText } = component;

    const input = findByTestId("input");
    const search = findByText("Search");
    const list = findByTestId("flat-list");

    expect(input).toBeTruthy();
    expect(search).toBeTruthy();
    expect(list).toBeTruthy();
  });

  it("renders list based on search correctly", async () => {
    const { getByTestId } = component;

    const mockInputText = "Hulk";

    const input = getByTestId("input");
    const search = getByTestId("search");

    fireEvent.changeText(input, mockInputText);
    fireEvent.press(search);

    await waitFor(() => {
      const list = within(getByTestId("flat-list"));
      expect(list.getByText("Hulk")).toBeTruthy();
    });
  });
});
