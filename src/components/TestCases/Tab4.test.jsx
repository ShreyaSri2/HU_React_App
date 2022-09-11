import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab4 from '../Tabs/Tab4.js';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing Tab4 Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Tab4 /></BrowserRouter>);

        expect(screen.getByTestId("tab4-ids1")).toHaveTextContent("Create a new security group");
        expect(screen.getByTestId("tab4-ids2")).toHaveTextContent("Select an existing security group");
        
    });
});