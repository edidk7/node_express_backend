const { expectCt } = require("helmet");
const { moduleGetProducts } = require("../../src/Modules/moduleGetProducts");
const { serviceFileProducts } = require("../../src/Services/serviceFileProducts");

jest.mock("../../src/Services/serviceFileProducts");

describe("Modules", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("getProducts", async () => {
    serviceFileProducts.mockImplementation(() => false);

    const result = await moduleGetProducts();
    expect(result).toBe(false);
  });

  it("getProducts Error", async () => {
    serviceFileProducts.mockImplementation(() => {
      throw new Error("service error");
    });
    try {
      await moduleGetProducts();
    } catch (error) {
      expect(error.message).toBe("service error");
    }
  });
});
