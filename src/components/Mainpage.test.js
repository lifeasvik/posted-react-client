import React from "react";
import Mainpage from "./Mainpage";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Mainpage />);
});
