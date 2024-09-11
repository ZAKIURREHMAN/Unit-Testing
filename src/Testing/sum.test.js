import { sum } from "./sum";

test("Testing for first sum function",()=>{
    expect(sum(10,20)).toBe(30)
})


test('Second testing of sum function',()=>{
    expect(sum(50,60)).toBe(110)
})

test('Third  testing of sum function',()=>{
    expect(sum(60,60)).toBe(120)
})