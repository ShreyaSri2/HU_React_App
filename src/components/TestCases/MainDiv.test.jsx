import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MainDiv from '../MainDiv';
import { BrowserRouter } from "react-router-dom";
//import {BrowserRouter}


describe("Testing Storage Component", () => {
    test("Initial Render", async() => {
        render(<BrowserRouter><MainDiv /></BrowserRouter>);

        expect(screen.getByTestId("maindiv-ID1")).toHaveTextContent("1.Choose Image");
        expect(screen.getByTestId("maindiv-ID2")).toHaveTextContent("2.Choose Instance Type");
        expect(screen.getByTestId("maindiv-ID3")).toHaveTextContent("3.Choose Storage and Network");
        expect(screen.getByTestId("maindiv-ID4")).toHaveTextContent("4.Configure Security");
        
    });
});