import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import General from '../Tabs/General';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing General Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><General /></BrowserRouter>);

        expect(screen.getByTestId("general-tstID1")).toHaveTextContent("Proceed");
        
    });
});