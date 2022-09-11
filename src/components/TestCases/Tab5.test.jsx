import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab5 from '../Tabs/Tab5.js';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}

describe("Testing Tab5 Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Tab5 /></BrowserRouter>);

        expect(screen.getByTestId("abc")).toHaveTextContent("Your are in tab 5");
    });
});