function capitalize(string) {
  return string[0].toUpperCase().concat(string.slice(1));
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

export { capitalize, reverseString };
