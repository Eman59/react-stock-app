import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./ArticlePagination";

describe("Pagination component", () => {
  it("should render pagination buttons correctly", () => {
    const mockPaginate = jest.fn();

    render(
      <Pagination currentPage={3} totalPages={5} paginate={mockPaginate} />
    );

    expect(screen.getByAltText("left-chevron")).toBeInTheDocument();
    expect(screen.getByAltText("right-chevron")).toBeInTheDocument();

    fireEvent.click(screen.getByAltText("left-chevron"));
    fireEvent.click(screen.getByAltText("right-chevron"));

    expect(mockPaginate).toHaveBeenCalledWith(2);
    expect(mockPaginate).toHaveBeenCalledWith(4);
  });

  it("should render correct number of page buttons", () => {
    const mockPaginate = jest.fn();

    render(
      <Pagination currentPage={1} totalPages={5} paginate={mockPaginate} />
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(5);
  });

  it("should highlight the current page correctly", () => {
    const mockPaginate = jest.fn();

    render(
      <Pagination currentPage={3} totalPages={5} paginate={mockPaginate} />
    );

    expect(screen.getByText("3")).toHaveClass("current-page");
  });
});
