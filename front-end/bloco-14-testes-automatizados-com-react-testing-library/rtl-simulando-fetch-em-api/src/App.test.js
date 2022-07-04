import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Verifica que, quando recebo uma piada, eu a mostro na tela", async () => {
  // Simulando o formato da função fetch():
  /* global.fetch = (url) => {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          id: "7h3oGtrOfxc",
          joke: "Whiteboards ... are remarkable",
          status: 200,
        }),
    });
  }; */
  
  // Outra forma de simular o fetch():
   global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({      
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable",
        status: 200,
      
    })
  });

  render(<App />);
  const renderedJoke = await screen.findByText("Whiteboards ... are remarkable");
  expect(renderedJoke).toBeInTheDocument();
});
