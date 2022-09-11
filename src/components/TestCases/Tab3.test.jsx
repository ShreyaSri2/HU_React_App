import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab3 from '../Tabs/Tab3.js';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing Tab3 Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Tab3 /></BrowserRouter>);

        expect(screen.getByTestId("tab3-Ids1")).toHaveTextContent("Add Volume");
        expect(screen.getByTestId("tab3-Ids2")).toHaveTextContent("Procced");
        

        //add style test cases
    });
});