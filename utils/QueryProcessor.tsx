export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return "19-10072";
  }

  if (query.toLowerCase().includes("name")) {
    return "Jesus Bovea";
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return Math.max(...numbers.map(Number)).toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers
        .map(Number)
        .reduce((acc, curr) => acc + curr)
        .toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return (Number(numbers[0]) - Number(numbers[1])).toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers
        .map(Number)
        .reduce((acc, curr) => acc * curr)
        .toString();
    }
  }

  if (query.toLowerCase().includes("both square and cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        if (Math.sqrt(Number(numbers[i])) === Math.cbrt(Number(numbers[i]))) {
          return numbers[i];
        }
      }
    }
  }

  return "";
}
