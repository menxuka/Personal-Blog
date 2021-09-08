import React from "react";
import { act, render, cleanup, fireEvent } from "@testing-library/react"
import Login from "../component/Pages/Login/Login";
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders <Login/> without crashing", () => {
    render(<Login />)
})

it("updates on Name Change", () => {
    const { getByPlaceholderText } = render(<Login />);
    const input = getByPlaceholderText('Enter Your username')
    fireEvent.change(input, { target: { value: 'Menuka' } });
    expect(input.value).toBe('Menuka');
})

// it("logins on Login", () => {
//     const { getAllByText } = render(<Login />);
//     const button = getAllByText('Login')
//     button.dispatchEvent(new MouseEvent('click'))
// })