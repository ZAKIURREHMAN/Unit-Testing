import { render,screen } from "@testing-library/react";
import App from "./App";

test('Test of App file which',()=>{
  render(<App/>)
  const test =  screen.getByText("This is my first test case in react js of ui")
  const imgTitle = screen.getByTitle('personImg')

  expect(test).toBeInTheDocument()
  expect(imgTitle).toBeInTheDocument()
})

test.only('Test of a Input box',()=>{
  render(<App/>)
  const checkInput = screen.getByRole('textbox')
  let checkPlaceholder = screen.getByPlaceholderText('Enter Your Name')
  expect(checkInput).toBeInTheDocument()
  expect(checkInput).toHaveAttribute('name','name')
  expect(checkInput).toHaveAttribute('type','text')
  expect(checkPlaceholder).toBeInTheDocument()

})