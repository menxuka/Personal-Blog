import React from "react";
import { act, render, cleanup, fireEvent } from "@testing-library/react"
import Blog from "../component/Blog/Blog"
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders <Blog/> without crashing", () => {
    const blog = { username: "randonm", photo: "asd", title: "hello", desc: "nothing", categories: ["music", "program"], _id: "123", createdAt: "123" }
    render(<Blog blog={blog} />);
})