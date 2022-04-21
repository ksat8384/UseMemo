import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import ListItem from "../../../src/components/ListItem";

test("renders correctly", () => {
  const mockItem = { id: "a", name: "Batman" };
  const { getByText } = render(<ListItem item={mockItem} />);

  expect(getByText("Batman")).toBeTruthy();
});
