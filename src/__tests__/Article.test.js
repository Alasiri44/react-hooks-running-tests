import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  //debugging a single test
  const element = screen.queryByText('please pass this test');
  //added line
  screen.debug(element);

  expect(element).toBeInTheDocument();
});
