import QueryProcessor from "../../utils/QueryProcessor";
import "@testing-library/jest-dom";

describe("QueryProcessor", () => {
  test("should return a string", () => {
    const query = "test";
    const response: string = QueryProcessor(query);
    expect(typeof response).toBe("string");
  });

  test("should return shakespeare description", () => {
    const query = "shakespeare";
    const response: string = QueryProcessor(query);
    expect(response).toBe(
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
        "English poet, playwright, and actor, widely regarded as the greatest " +
        "writer in the English language and the world's pre-eminent dramatist.",
    );
  });

  test("should return my USB ID", () => {
    const query = "what's your USB ID?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("19-10072");
  });

  test("should return my name", () => {
    const query = "What's your name?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("Jesus Bovea");
  });

  test("should return the largest number", () => {
    const query = "largest in 10, 9, 8";
    const response: string = QueryProcessor(query);
    expect(response).toBe("10");
  })

  test("should return the sum of two numbers", () => {
    const query = "9 plus 8";
    const response: string = QueryProcessor(query);
    expect(response).toBe("17");
  });

  test("should return the multiplication of two numbers", () => {
    const query = "9 multiplied by 8";
    const response: string = QueryProcessor(query);
    expect(response).toBe("72"); 
  })

  test("should determine what number is both squared and cube", () => {
    const query = "what number is both square and a cube: 1, 3, 5, 890";
    const response: string = QueryProcessor(query);
    expect(response).toBe("1");
  });
});
