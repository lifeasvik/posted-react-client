import React from "react";
import Postcard from "./Postcard";
// import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Postcard />);
});
