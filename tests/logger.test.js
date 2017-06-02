import Logger from "./../src/index";

describe("Unit test function Logger", () => {
  test("Test empty call", () => {
    Logger.info();
  });


  test("Test single parameter; boolean", () => {
    Logger.info(true);
  });
  test("Test single parameter; null", () => {
    Logger.info(null);
  });
  test("Test single parameter; undefined", () => {
    Logger.info(undefined);
  });
  test("Test single parameter; number", () => {
    Logger.info(10);
  });
  test("Test single parameter; string", () => {
    Logger.info("string");
  });
  test("Test single parameter; object", () => {
    Logger.info({ "key": "value" });
  });


  test("Test 2 parameters; logTags, boolean", () => {
    Logger.info(["Tag1", "Tag2"], true);
  });
  test("Test 2 parameters; logTags, null", () => {
    Logger.info(["Tag1", "Tag2"], null);
  });
  test("Test 2 parameters; logTags, undefined", () => {
    Logger.info(["Tag1", "Tag2"], undefined);
  });
  test("Test 2 parameters; logTags, number", () => {
    Logger.info(["Tag1", "Tag2"], 10);
  });
  test("Test 2 parameters; logTags, string", () => {
    Logger.info(["Tag1", "Tag2"], "string");
  });
  test("Test 2 parameters; logTags, object", () => {
    Logger.info(["Tag1", "Tag2"], { "key": "value" });
  });


  test("Test N parameters; logTags, boolean, boolean", () => {
    Logger.info(["Tag1", "Tag2"], true, true);
  });
  test("Test N parameters; logTags, boolean, boolean", () => {
    Logger.info(["Tag1", "Tag2"], true, null);
  });

  test("Test N parameters; logTags, null, bolean", () => {
    Logger.info(["Tag1", "Tag2"], null, true);
  });
  test("Test N parameters; logTags, null, null", () => {
    Logger.info(["Tag1", "Tag2"], null, null);
  });

  test("Test N parameters; logTags, undefined, bolean", () => {
    Logger.info(["Tag1", "Tag2"], undefined, true);
  });
  test("Test N parameters; logTags, undefined, null", () => {
    Logger.info(["Tag1", "Tag2"], undefined, undefined);
  });

  test("Test N parameters; logTags, number, boolean", () => {
    Logger.info(["Tag1", "Tag2"], 10, true);
  });
  test("Test N parameters; logTags, number, null", () => {
    Logger.info(["Tag1", "Tag2"], 10, null);
  });

  test("Test N parameters; logTags, string, boolean", () => {
    Logger.info(["Tag1", "Tag2"], "string", true);
  });
  test("Test N parameters; logTags, string, null", () => {
    Logger.info(["Tag1", "Tag2"], "string", null);
  });

  test("Test N parameters; logTags, object, boolean", () => {
    Logger.info(["Tag1", "Tag2"], { "key": "value" }, true);
  });
  test("Test N parameters; logTags, object, null", () => {
    Logger.info(["Tag1", "Tag2"], { "key": "value" }, null);
  });
});