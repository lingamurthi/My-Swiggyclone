import { sum } from "../sum"

test("sum function should calculate the sum of two numbers",()=>{


    const results=sum(3,4)

    //Assertion
    expect(results).toBe(7)
})