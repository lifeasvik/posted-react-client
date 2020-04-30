import React from "react";
import Navbar from "./Navbar";
// import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Navbar />);
});
