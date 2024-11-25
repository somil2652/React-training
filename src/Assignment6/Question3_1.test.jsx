import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Counter6 from "../Assignment6/Question3_1";
describe("Counter Component", () => {
  it("On Clcik button should increse count", () => {
    render(<Counter6 />);
    const incBtn = screen.getByTestId("inc");
    fireEvent.click(incBtn);
    expect(screen.queryByText("1")).toBeInTheDocument();
  });
  it("On Clcik button should decrese count", () => {
    render(<Counter6 />);
    const decBtn = screen.getByTestId("dec");
    fireEvent.click(decBtn);
    expect(screen.queryByText("-1")).toBeInTheDocument();
  });
});
