import { MockedProvider } from "@apollo/client/testing";
import { render, act } from "@testing-library/react";
import Ships from "@pages/ships";
import { GET_SHIPS } from "@graphql/getShips";
import { debug } from "console";

const mocks = [
  {
    __typename: "Ship",
    image: "https://i.imgur.com/MtEgYbY.jpg",
    active: true,
    name: "GO Ms Tree",
  },
  {
    __typename: "Ship",
    image: "https://i.imgur.com/5w1ZWre.jpg",
    active: false,
    name: "GO Pursuit",
  },
  {
    __typename: "Ship",
    image: "https://i.imgur.com/woCxpkj.jpg",
    active: false,
    name: "American Champion",
  },
];

describe("ships", () => {
  it("should render ships successfully", async () => {
    // const { getByTestId, debug, container } = render(
    //   <MockedProvider
    //     mocks={[
    //       {
    //         request: {
    //           query: GET_SHIPS,
    //         },
    //         result: {
    //           data: {
    //             ships: mocks,
    //           },
    //         },
    //       },
    //     ]}
    //   >
    //     <Ships />
    //   </MockedProvider>
    // );
    // void (await act(async () => {
    //   await new Promise((resolve) => setTimeout(resolve, 0));
    //   expect(getByTestId("ships-container")).toBeTruthy();
    //   expect(container.getElementsByClassName("ships-card").length).toBe(3);
    // }));
  });

  fit("should render ships with error", async () => {
    const { getByText, container, getByRole } = render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_SHIPS,
            },
            error: new Error("An error occurred"),
          },
        ]}
      >
        <Ships />
      </MockedProvider>
    );
    void (await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(getByText(/error upon requesting ships./i)).toBeTruthy();
      expect(getByRole("alert")).toBeTruthy();
      //   expect(container.getElementsByClassName("ships-card").length).toBe(3);
    }));
  });

  // it('should render a loading indicator' , ( ) => {

  // })
});
