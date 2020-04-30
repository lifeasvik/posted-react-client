import React from "react";
import Viewpostcard from "./Viewpostcard";
// import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Viewpostcard />);
});
