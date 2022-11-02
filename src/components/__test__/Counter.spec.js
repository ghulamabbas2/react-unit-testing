import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Counter from "../Counter";

describe("Counter", () => {
  it("should increment counter", () => {
    // render component in the virtual dom
    render(<Counter />);

    // select elements to interact
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    // interact with elements
    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("2");
  });

  it("should decrement counter", () => {
    // render component in the virtual dom
    render(<Counter />);

    // select elements to interact
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");

    // interact with elements
    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("0");
  });
});

describe("Counter Snapshot", () => {
  it("should matches DOM Snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
