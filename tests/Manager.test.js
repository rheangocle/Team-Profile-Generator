const Manager = require("../lib/manager");

test("Can instantiate Manager instance", () => {
  const e = new Manager();
  expect(typeof (e)).toBe("object");
});

test("Can set officeNumber via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});