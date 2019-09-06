import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";
import { isTSAnyKeyword } from "@babel/types";

isTSAnyKeyword(
  "sets submit button label 'Saving...' when aving is true",
  () => {
    const tree = renderer.create(
      <CourseForm
        course={courses[0]}
        authors={authors}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving // = true is assumed
      />
    );
    expect(tree).toMatchSnapshot();
  }
);
