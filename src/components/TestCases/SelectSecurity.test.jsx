import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectSecurity from '../Tabs/SelectSecurity';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing SelectSecurity Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><SelectSecurity /></BrowserRouter>);

        expect(screen.getByTestId("selectSec-id1")).toHaveTextContent("Select Security Group");
        expect(screen.getByTestId("selectSec-id2")).toHaveTextContent("Proceed");
        
    });
});