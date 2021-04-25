const exercise = require("./index");

// 1
test("Add some string", () => {
  expect(exercise.texto("Hello")).toBe("Hello");
});

// 2
test("adds 4 + 2 to equal 6", () => {
  expect(exercise.suma(2, 6)).toBe(8);
});

// 3
test("subtract 10 - 5 to equal 5", () => {
  expect(exercise.resta(10, 5)).toBe(5);
});

// 4
test("Multiply 3 * 3 to equal 9", () => {
  expect(exercise.multiplicacion(3, 3)).toBe(9);
});

// 5
test("divide 5 / 0 is equal to an error", () => {
  expect(exercise.division(5, 0)).toMatch("No se puede dividir por 0");
});

test("Divide 100 / 50 to equal 2", () => {
  expect(exercise.division(100, 50)).toBe(2);
});

// 6
test("multiplicador is undefined equal to 10", () => {
  expect(exercise.tablaMultiplicar(3)).toEqual([
    0,
    3,
    6,
    9,
    12,
    15,
    18,
    21,
    24,
    27,
    30,
  ]);
});

test("Multiply 5 * 2", () => {
  expect(exercise.tablaMultiplicar(5, 2)).toStrictEqual([0, 5, 10]);
});

// 7
test("The equation 2^3 is equal to 8", () => {
  expect(exercise.potencia(2, 3)).toBe(8);
});

// 8
test("2*2 + 3*3 to equal 13", () => {
  expect(exercise.anidada(2, 3)).toBe(13);
});

// 9
test("The function must return as many ceros to complete the length", () => {
  expect(exercise.cerosIzq(20, 10)).toBe("0000000020");
});
