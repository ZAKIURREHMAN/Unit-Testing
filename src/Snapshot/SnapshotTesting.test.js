import { render,screen } from "@testing-library/react";
import App from "../App";

test('Testing for Snapshot ',()=>{
    let view = render(<App/>)
    expect(view).toMatchSnapshot()
})