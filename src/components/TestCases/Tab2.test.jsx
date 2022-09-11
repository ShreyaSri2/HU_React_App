import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab2 from '../Tabs/Tab2.js';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}

describe("Testing Tab2 Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Tab2 /></BrowserRouter>);

        expect(screen.getByTestId("xyz")).toHaveTextContent("General Purpose");
    });
});