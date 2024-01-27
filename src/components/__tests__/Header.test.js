import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import "@testing-library/jest-dom"
it("Should load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
  );

 const loginButton=screen.getByRole("button",{name:"Login"})   //getByRole is a good way (if u cant able find in getByRole do it in getByText)
 //const loginButton=screen.getByText("Login")
  expect(loginButton).toBeInTheDocument()
});


it("Should render Header component with Cart item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          </Provider>
      </BrowserRouter>
    );
  
   const cartItem=screen.getByText("Cart - 0")   //getByRole is a good way (if u cant able find in getByRole do it in getByText)
 
    expect(cartItem).toBeInTheDocument()
  });


it("Should render Header component with Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          </Provider>
      </BrowserRouter>
    );
  
   const cartItem=screen.getByText(/Cart/)   //getByRole is a good way (if u cant able find in getByRole do it in getByText)
 
    expect(cartItem).toBeInTheDocument()
  });

  
it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          </Provider>
      </BrowserRouter>
    );
  
   const loginButton=screen.getByRole("button", {name:"Login"})  //getByRole is a good way (if u cant able find in getByRole do it in getByText)
 
   fireEvent.click(loginButton)

   const logoutButton=screen.getByRole("button", {name:"Logout"})
    expect(logoutButton).toBeInTheDocument()
  });