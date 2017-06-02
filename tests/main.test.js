import * as LoggerUtils from "./../src/index";

const MODULES_COUNT = 2; // this needs to be updated after new module is added

describe("sagasphere_logger library", () => {
  const expectedModules = [
    "SagaSphere_Logger"
  ];

  expectedModules.forEach((moduleName) => {
    it(`exports "${moduleName}" module`, () => {
      expect(LoggerUtils[moduleName]).toBeTruthy();
    });
  });

  it("has correct number of exported modules", () => {
    expect(
      Object.keys(LoggerUtils).length
    ).toBe(MODULES_COUNT);
  });
});