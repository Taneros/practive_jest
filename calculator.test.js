const calculator = require ("./calculator");



test('calculator can add',()=>{
    expect(calculator.add(2,4)).toBe(6)
});


test('calculator can substruct',()=>{
    expect(calculator.substruct(10,1)).toBe(9)
});

test('calculator can divide',()=>{
    expect(calculator.divide(10,1)).toBe(10)
});

test('calculator can multiply',()=>{
    expect(calculator.multiply(10,10)).toBe(100)
});