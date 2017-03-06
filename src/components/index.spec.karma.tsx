import * as React from "react";
import { Component, ReactElement } from "react";
import { render } from "react-dom";
import { Foo } from "./index";

const renderDOM = (vDOMInstance: ReactElement<void>) => {
  const rDOM = document.createElement("div");
  document.body.appendChild(rDOM);
  render(vDOMInstance, rDOM);
  return rDOM;
};

describe("Components: Foo", () => {
  let rDOM: HTMLDivElement;

  it("", () => {
    rDOM = renderDOM(<Foo/>);
    expect(true).toBe(true);
  });
});
