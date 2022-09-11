import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab1 from '../Tabs/Tab1.js';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing Tab1 Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Tab1 /></BrowserRouter>);

        //expect(screen.getByTestId("tab1-IDs")).toHaveTextContent("Select");
        expect(screen.getByTestId("tab1-IDs1")).toHaveTextContent("Proceed");

        //add style test cases
    });
});