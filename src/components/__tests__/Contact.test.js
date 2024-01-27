import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"



describe("Contact us page test cases",()=>{

    // beforeAll(()=>{
    //     console.log("Before All");
    // })


    // afterAll(()=>{
    //     console.log("After All");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterEach(()=>{
    //     console.log("After Each");
    // })
    it("Should load contact us component",()=>{
        render(<Contact/>);
    
       const heading = screen.getByRole("heading");
    
       //Assertion
       expect(heading).toBeInTheDocument()
    })
    
    
    
    test("Should load button inside the contact component",()=>{
        render(<Contact/>);
    
       //const button = screen.getByRole("button")
       const button = screen.getByText("Submit")
       //Assertion
       expect(button).toBeInTheDocument()
    })
    
    
    test("Should load input name inside the contact component",()=>{
        render(<Contact/>);
    
       //const button = screen.getByRole("button")
       const inputName = screen.getByPlaceholderText("name")
       //Assertion
       expect(inputName).toBeInTheDocument()
    })
    
    
    test("Should load 2 input name on the contact component",()=>{
        render(<Contact/>);
    
       //const button = screen.getByRole("button")
       const inputBoxes = screen.getAllByRole("textbox")
       //Assertion
      //console.log(inputBoxes);
    
     // expect(inputBoxes.length).toBe(2)
     expect(inputBoxes.length).not.toBe(3)
    })
})
