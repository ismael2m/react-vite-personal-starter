import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import { expect, test } from "vitest";
import App from "./App";

test("should show button", () => {
  // Arrange
  render(<App />);
  const button = screen.getByText("Click me");
  // Assert
  expect(button).toBeTruthy();
});
