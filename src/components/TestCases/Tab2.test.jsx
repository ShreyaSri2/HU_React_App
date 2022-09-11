import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab2 from '../Tabs/Tab2.js';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}

describe("Testing Tab2 Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><Tab2 /></BrowserRouter>);

        expect(screen.getByTestId("xyz1")).toHaveTextContent("General Purpose");
        expect(screen.getByTestId("xyz2")).toHaveTextContent("CPU Optimised");
        expect(screen.getByTestId("xyz3")).toHaveTextContent("Storage Optimised");
        expect(screen.getByTestId("xyz4")).toHaveTextContent("Network Optimised");
    });
});