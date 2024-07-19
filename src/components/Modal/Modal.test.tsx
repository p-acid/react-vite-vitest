import { fireEvent, render } from "@testing-library/react";

import { describe, expect, test, vitest } from "vitest";
import Modal from "./Modal";

describe("Modal", () => {
  test("renders nothing when isOpen is false", () => {
    const { queryByTestId } = render(
      <Modal isOpen={false} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(queryByTestId("modal")).toBeNull();
  });

  test("renders modal when isOpen is true", () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(getByTestId("modal"));
  });

  test('calls onClose when "Close" button is clicked', () => {
    const onClose = vitest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        Test Content
      </Modal>
    );
    fireEvent.click(getByText("Close"));
    expect(onClose).toHaveBeenCalled();
  });

  // Snapshot Test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
