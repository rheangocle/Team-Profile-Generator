const Intern = require("../lib/intern");

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof (e)).toBe("object");
});

test("Can get school via getSchool()", () => {
  const testValue = "UCF";
  const e = new Intern(testValue);
  expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});