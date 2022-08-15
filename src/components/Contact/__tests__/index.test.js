import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Contact h1 is visible", () => {
  it("inserts text", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("contact")).toHaveTextContent("Contact me");
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
