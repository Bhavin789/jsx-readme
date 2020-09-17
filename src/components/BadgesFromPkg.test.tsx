/* @jsx MD */
import MD, { render } from "jsx-md";
import { BadgesFromPkg } from "./BadgesFromPkg";

describe("BadgesFromPkg", () => {
  it("renders a npm version badge by default", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
      "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)"
    );
  });

  it("does not render an npm version badge if the package is private", () => {
    const pkg = {
      name: "package-name",
      private: true,
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).not.toContain(
      "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)"
    );
  });

  describe("with npm-version disabled", () => {
    const overrideBadges = {
      "npm-version": false,
    };

    it("does not render an npm version badge", () => {
      const pkg = {
        name: "package-name",
      };
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(
        "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)"
      );
    });
  });

  describe("with a github repository", () => {
    const pkg = {
      name: "package-name",
      repository: "git@github.com:dbartholomae/jsx-readme.git",
    };

    it("shows a github-issues badge", () => {
      expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
        "[![open issues](https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg)](https://github.com/dbartholomae/jsx-readme/issues)\n"
      );
    });
  });

  it("renders a jsx-readme badge", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
      "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
    );
  });

  describe("with jsx-readme disabled", () => {
    const overrideBadges = {
      "jsx-readme": false,
    };

    it("does not render a jsx-readme badge", () => {
      const pkg = {
        name: "package-name",
      };
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(
        "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
      );
    });
  });
});