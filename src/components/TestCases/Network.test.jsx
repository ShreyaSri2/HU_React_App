import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Network from '../Tabs/Network';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing Network Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Network /></BrowserRouter>);

        expect(screen.getByTestId("ntwrk-id1")).toHaveTextContent("Proceed");
        
    });
});