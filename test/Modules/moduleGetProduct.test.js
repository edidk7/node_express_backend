const { moduleGetProduct } = require("../../src/Modules/moduleGetProduct");
const { serviceFileProducts } = require("../../src/Services/serviceFileProducts");

jest.mock("../../src/Services/serviceFileProducts");

describe("Modules", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("getProducts", async () => {
    serviceFileProducts.mockImplementation(() => [{ id: 1 }]);

    const result = await moduleGetProduct(1);
    expect(result).toEqual({ id: 1 });
  });

  it("getProducts Error", async () => {
    serviceFileProducts.mockImplementation(() => {
       throw new Error("service error");
    });
    try {
      await moduleGetProduct();
    } catch (error) {
      expect(error.message).toBe("service error");
    }
  });
});
