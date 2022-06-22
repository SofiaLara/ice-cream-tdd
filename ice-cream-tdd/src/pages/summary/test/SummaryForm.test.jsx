import { fireEvent, render, screen } from "@testing-library/react";
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
        const buttonElement = screen.getByRole('button', {name: /confirm order/i});
        fireEvent.click(checkboxElement);
        expect(checkboxElement).toBeChecked();
        expect(buttonElement).toBeEnabled();

        fireEvent.click(checkboxElement);
        expect(checkboxElement).not.toBeChecked();
        expect(buttonElement).toBeDisabled();
    });
})
