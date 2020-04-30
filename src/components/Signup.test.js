import React from "react";
import Signup from "./Signup";
// import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Signup />);
});
