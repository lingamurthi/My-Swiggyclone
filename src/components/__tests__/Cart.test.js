import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaruentMenu from "../RestaruentMenu";
import Cart from '../Cart'
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaruentMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Biryani (9)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(screen.getByText("Cart - 0")).toBeInTheDocument()
  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - 1")).toBeInTheDocument()

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart - 2")).toBeInTheDocument()

  expect(screen.getAllByTestId("foodItems").length).toBe(11)

  fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))

  expect(screen.getAllByTestId("foodItems").length).toBe(9)

  expect(screen.getByText("Cart is empty add item to the cart")).toBeInTheDocument()
});
