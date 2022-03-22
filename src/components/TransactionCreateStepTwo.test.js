import { render, screen } from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

test('on initial render, the pay button is disabled', async ()=> {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>)

    // First assertion
    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled();
});