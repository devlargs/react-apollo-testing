import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import Ships from "@pages/ships";

describe("ships", () => {
  it("should render ships successfully", () => {
    const { debug } = render(
      <MockedProvider>
        <Ships />
      </MockedProvider>
    );

    debug();
  });

  // it('should render ships with error', ( ) => {

  // })

  // it('should render a loading indicator' , ( ) => {

  // })
});
