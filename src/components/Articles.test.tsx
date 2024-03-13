import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Articles from "./Articles";
import { Article } from "../types";

describe("Articles component", () => {
  it("should render articles correctly", () => {
    const currentArticles = [
      {
        source: "Benzinga",
        image: "example.jpg",
        date: "2024-03-12",
        url: "/article/1",
        title: "Sample Article",
        body: "This is a sample article.",
        author: "John Doe",
      },
    ];

    render(
      <Router>
        <Articles currentArticles={currentArticles} />
      </Router>
    );

    expect(screen.getByText("Benzinga")).toBeInTheDocument();
    expect(screen.getByAltText("Article")).toBeInTheDocument();
    expect(screen.getByText("March 12, 2024")).toBeInTheDocument();
    expect(screen.getByText("Sample Article")).toBeInTheDocument();
    expect(screen.getByText("This is a sample article.")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    const articleLink = screen.getByRole("link", { name: "Sample Article" });
    expect(articleLink).toBeInTheDocument();
    expect(articleLink).toHaveAttribute("href", "/article/1");
  });

  it("should render a message when no articles are provided", () => {
    const currentArticles: Article[] = [];

    render(
      <Router>
        <Articles currentArticles={currentArticles} />
      </Router>
    );

    expect(
      screen.getByText("No result found for selection.")
    ).toBeInTheDocument();
  });
});
