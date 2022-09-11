import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Storage from '../Tabs/Storage';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing Storage Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Storage /></BrowserRouter>);

        expect(screen.getByTestId("strg-id1")).toHaveTextContent("Proceed");
        
    });
});