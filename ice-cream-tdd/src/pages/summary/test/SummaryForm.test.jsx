import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("testing summary form page", () => { 
    test("checkbox is unchecked and button is disabled by default", () => {
        render(<SummaryForm />);
        const checkboxElement = screen.getByRole('checkbox');
        const buttonElement = screen.getByRole('button', {name: /confirm order/i});
        expect(checkboxElement).not.toBeChecked();
        expect(buttonElement).toBeDisabled();
    });

    test("click on checkbox enables button", () => {
        render(<SummaryForm />);
        const checkboxElement = screen.getByRole('checkbox');
        const buttonElement = screen.getByRole('button', { name: /confirm order/i });

        userEvent.click(checkboxElement);
        expect(checkboxElement).toBeChecked();
        expect(buttonElement).toBeEnabled();

        userEvent.click(checkboxElement);
        expect(checkboxElement).not.toBeChecked();
        expect(buttonElement).toBeDisabled();
    });
})
