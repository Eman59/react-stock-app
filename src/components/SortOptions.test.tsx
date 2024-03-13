import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SortOptions from "./SortOptions";

describe("SortOptions component", () => {
  it("should render correctly", () => {
    render(
      <SortOptions
        sortByDate={false}
        sortByTitleAsc={false}
        sortByTitleDesc={false}
        handleSortByDateChange={() => {}}
        handleSortByTitleAscChange={() => {}}
        handleSortByTitleDescChange={() => {}}
      />
    );

    expect(screen.getByText("Sort By")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Title (Asc)")).toBeInTheDocument();
    expect(screen.getByLabelText("Title (Dsc)")).toBeInTheDocument();
  });

  it("should call handleSortByDateChange when Date checkbox is clicked", () => {
    const handleSortByDateChange = jest.fn();
    render(
      <SortOptions
        sortByDate={false}
        sortByTitleAsc={false}
        sortByTitleDesc={false}
        handleSortByDateChange={handleSortByDateChange}
        handleSortByTitleAscChange={() => {}}
        handleSortByTitleDescChange={() => {}}
      />
    );

    fireEvent.click(screen.getByLabelText("Date"));

    expect(handleSortByDateChange).toHaveBeenCalledTimes(1);
  });

  it("should call handleSortByTitleAscChange when Title (Asc) checkbox is clicked", () => {
    const handleSortByTitleAscChange = jest.fn();
    render(
      <SortOptions
        sortByDate={false}
        sortByTitleAsc={false}
        sortByTitleDesc={false}
        handleSortByDateChange={() => {}}
        handleSortByTitleAscChange={handleSortByTitleAscChange}
        handleSortByTitleDescChange={() => {}}
      />
    );

    fireEvent.click(screen.getByLabelText("Title (Asc)"));

    expect(handleSortByTitleAscChange).toHaveBeenCalledTimes(1);
  });

  it("should call handleSortByTitleDescChange when Title (Dsc) checkbox is clicked", () => {
    const handleSortByTitleDescChange = jest.fn();
    render(
      <SortOptions
        sortByDate={false}
        sortByTitleAsc={false}
        sortByTitleDesc={false}
        handleSortByDateChange={() => {}}
        handleSortByTitleAscChange={() => {}}
        handleSortByTitleDescChange={handleSortByTitleDescChange}
      />
    );

    fireEvent.click(screen.getByLabelText("Title (Dsc)"));

    expect(handleSortByTitleDescChange).toHaveBeenCalledTimes(1);
  });
});
