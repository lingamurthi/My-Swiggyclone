import { render, screen } from "@testing-library/react";
import RestaruentCard from "../RestaruentCard";

import MOCK_DATA from '../mocks/resCardMock.json'
import "@testing-library/jest-dom"


it("Should render Restaurant component with props data", () => {
  render(<RestaruentCard resData={MOCK_DATA}/>);

 const name= screen.getByText("Rocking Arabian Treat")

 expect(name).toBeInTheDocument()
});
