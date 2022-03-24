import { render, screen } from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"
import userEvent from "@testing-library/user-event";


test('on initial render, the pay button is disabled', async ()=> {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

    // First assertion
    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
});

test('if an amount and note is entered, the pay button becomes enabled', async ()=> {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

    // First assertion
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")
    
    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled();
});