import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import List from "../../../src/components/List";

test("renders correctly", () => {
  const mockData = [
    { id: "a", name: "Batman" },
    { id: "b", name: "Superman" },
    { id: "c", name: "Ironman" },
    { id: "d", name: "Hulk" },
    { id: "e", name: "BlackWidow" },
    { id: "f", name: "Thor" },
    { id: "g", name: "Captain America" },
    { id: "h", name: "Hawkeye" },
    { id: "i", name: "Spiderman" },
    { id: "j", name: "Antman" },
  ];
  const renderItem = jest.fn();
  const { findByTestId } = render(
    <List data={mockData} renderItem={renderItem} />
  );

  expect(findByTestId("flat-list")).toBeTruthy();
  mockData.map((item) => {
    expect(findByTestId(`flat-list-item${item.id}`)).toBeTruthy();
  });
});
