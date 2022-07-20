const Intern = require("../lib/intern");

test("Can set school via constructor argument", () => {
  const testValue = "UCF";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCF";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});