import React from "react";
import { act, render, cleanup } from "@testing-library/react"
import Header from "../component/Header/Header";
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders <Header/> without crashing", () => {
    const { container } = render(<Header />)
    expect(container.textContent).toBe("My PersonalBlog")
})