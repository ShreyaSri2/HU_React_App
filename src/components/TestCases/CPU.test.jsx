import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import CPU from '../Tabs/CPU';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing CPU Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><CPU /></BrowserRouter>);

        expect(screen.getByTestId("cpu-tstId1")).toHaveTextContent("Proceed");
        
    });
});