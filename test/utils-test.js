import { describe, it, expect } from "vitest";
import { formatMessage, isEmptyMessage } from "../src/utils.js";

describe("formatMessage", () => {
  it("debe retornar un objeto con role y parts", () => {
    const result = formatMessage("user", "hola");
    expect(result).toEqual({ role: "user", parts: [{ text: "hola" }] });
  });

  it("debe funcionar con role model", () => {
    const result = formatMessage("model", "Yo soy Goku");
    expect(result.role).toBe("model");
  });
});

describe("isEmptyMessage", () => {
  it("debe retornar true si el mensaje está vacío", () => {
    expect(isEmptyMessage("")).toBe(true);
  });

  it("debe retornar false si el mensaje tiene texto", () => {
    expect(isEmptyMessage("hola")).toBe(false);
  });
});