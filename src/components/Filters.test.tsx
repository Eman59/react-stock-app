import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters component", () => {
  it("should render correctly", () => {
    render(
      <Filters
        selectedCategory={null}
        selectedAuthor={null}
        handleCategoryChange={() => {}}
        handleAuthorChange={() => {}}
      />
    );

    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
    expect(screen.getByLabelText("Benzinga")).toBeInTheDocument();
    expect(screen.getByLabelText("Lambda")).toBeInTheDocument();
    expect(screen.getByLabelText("Delta")).toBeInTheDocument();
    expect(screen.getByLabelText("Gamma")).toBeInTheDocument();
    expect(screen.getByLabelText("Benzinga Neuro")).toBeInTheDocument();
    expect(screen.getByLabelText("Werder Helmner")).toBeInTheDocument();
    expect(screen.getByLabelText("Patrick Wilson")).toBeInTheDocument();
  });

  it("should call handleCategoryChange when category checkbox is clicked", () => {
    const handleCategoryChange = jest.fn();
    render(
      <Filters
        selectedCategory={null}
        selectedAuthor={null}
        handleCategoryChange={handleCategoryChange}
        handleAuthorChange={() => {}}
      />
    );

    fireEvent.click(screen.getByLabelText("Benzinga"));

    expect(handleCategoryChange).toHaveBeenCalledTimes(1);
    expect(handleCategoryChange).toHaveBeenCalledWith("Benzinga");
  });

  it("should call handleAuthorChange when author checkbox is clicked", () => {
    const handleAuthorChange = jest.fn();
    render(
      <Filters
        selectedCategory={null}
        selectedAuthor={null}
        handleCategoryChange={() => {}}
        handleAuthorChange={handleAuthorChange}
      />
    );

    fireEvent.click(screen.getByLabelText("Benzinga Neuro"));

    expect(handleAuthorChange).toHaveBeenCalledTimes(1);
    expect(handleAuthorChange).toHaveBeenCalledWith("Benzinga Neuro");
  });
});
