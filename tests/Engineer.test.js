const Engineer = require("../lib/engineer");

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof (e)).toBe("object");
});

test("Can get github via getGithub()", () => {
  const testValue = "rheangocle";
  const e = new Engineer("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});