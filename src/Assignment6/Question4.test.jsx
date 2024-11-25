import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginQ4 from "./Question4";

describe("LoginQ4 Component", () => {
  it("On Change uname should update", () => {
    render(<LoginQ4 />);
    const nameChange = screen.getByTestId("name");

    const passChange = screen.getByTestId("pass");
    fireEvent.change(nameChange, {
      target: { value: "somil" },
    });

    fireEvent.change(passChange, {
      target: { value: "12345" },
    });

    const submitBtn = screen.getByTestId("subBtn");
    fireEvent.click(submitBtn);
    expect(screen.queryByText("Welcome somil")).toBeInTheDocument();
  });
});
