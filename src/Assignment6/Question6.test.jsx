import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModalQ6 from "./Question6";

describe(" Modal Component", () => {
  it("On Click button should open modal", () => {
    render(<ModalQ6 />);
    const open = screen.getByTestId("openBtn");

    fireEvent.click(open);

    expect(screen.queryByText("Modal")).toBeInTheDocument();
  });
  it("On Click button should close modal", () => {
    render(<ModalQ6 />);
    const close = screen.getByTestId("closeBtn");

    fireEvent.click(close);

    expect(screen.queryByText("Modal")).not.toBeInTheDocument();
  });
});
