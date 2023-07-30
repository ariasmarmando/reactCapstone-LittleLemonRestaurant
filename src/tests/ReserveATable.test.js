/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import ReserveATable from "../Components/ReserveATable";
import "@testing-library/jest-dom";
//import user from "@testing-library/user-event";

beforeEach(() => {
  const onSubmit = jest.fn();
  render(<ReserveATable onSubmit={onSubmit} />);
  expect(onSubmit).not.toHaveBeenCalled();
});

test("Verifies Full Name form validation", () => {
  const fullName = screen.getByRole("textbox", {
    name: /full name/i,
  });
  fireEvent.change(fullName, { target: { value: "1" } });
  expect(fullName).toBeInvalid();
  fireEvent.change(fullName, { target: { value: "Jane" } });
  expect(fullName).toBeValid();
});

test("Verifies Email form validation", () => {
  const emailTest = screen.getByRole("textbox", {
    name: /email/i,
  });
  fireEvent.change(emailTest, { target: { value: "notAnEmail" } });
  expect(emailTest).toBeInvalid();
  fireEvent.change(emailTest, { target: { value: "validemail@something" } });
  expect(emailTest).toBeValid();
});

test("Verifies Phone Number form validation", () => {
  const phoneTest = screen.getByRole("textbox", {
    name: /phone number/i,
  });
  fireEvent.change(phoneTest, { target: { value: "111" } });
  expect(phoneTest).toBeInvalid();
  fireEvent.change(phoneTest, { target: { value: "1111231234" } });
  expect(phoneTest).toBeValid();
});
