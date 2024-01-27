import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";

import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should search Res List for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch=screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(20)
  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByTestId("searchInput")

 fireEvent.change(searchInput,{target:{value:"pizza"}})

fireEvent.click(searchBtn)

//assert screen should load 4 res cards
  const cardsAfterSearch=screen.getAllByTestId("resCard")

  expect(cardsAfterSearch.length).toBe(3)
});





it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter=screen.getAllByTestId("resCard")

  expect(cardsBeforeFilter.length).toBe(20)

   const topRatedButton=screen.getByRole("button", { name:"Top Rated Restaruents" })
   fireEvent.click(topRatedButton)
 
   const cardsAfterFilter=screen.getAllByTestId("resCard")
   expect(cardsAfterFilter.length).toBe(9)
});