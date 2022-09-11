import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateSecurity from '../Tabs/CreateSecurity';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing CreateSecurity Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><CreateSecurity /></BrowserRouter>);

        expect(screen.getByTestId("createSec-id1")).toHaveTextContent("New Security Group");
        expect(screen.getByTestId("createSec-id2")).toHaveTextContent("Add Rule");
        expect(screen.getByTestId("createSec-id3")).toHaveTextContent("Type");
        expect(screen.getByTestId("createSec-id4")).toHaveTextContent("Protocol");
        expect(screen.getByTestId("createSec-id5")).toHaveTextContent("Port Range");
        expect(screen.getByTestId("createSec-id6")).toHaveTextContent("Source");
        expect(screen.getByTestId("createSec-id7")).toHaveTextContent("Description");
        expect(screen.getByTestId("createSec-id8")).toHaveTextContent("Add Rule");
        expect(screen.getByTestId("createSec-id9")).toHaveTextContent("Proceed");
        
    });
});