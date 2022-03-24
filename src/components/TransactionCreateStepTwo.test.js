import { render, screen } from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"
import userEvent from "@testing-library/user-event";



// INTEGRATION TEST INVOLVES TESTING A MULTIPLE UNIT OF CODE TOGETHER
test('if an amount and note is entered, the pay button becomes enabled', async ()=> {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

    // First assertion
    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
    // First assertion
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")
    
    // Second assertion
    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled();
});



