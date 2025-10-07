//prettier-ignore
const lowercase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

//prettier-ignore
const uppercase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

function wrapIndex(key) {
  return key % 26;
}

function checkIfAlphabet(element) {
  if (lowercase.includes(element) || uppercase.includes(element)) {
    return true;
  }

  return false;
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function encrypt(element, key, array) {
  const index = array.indexOf(element);
  const encryptedAlphabet = array.map((elem, i, arr) => {
    let shift = i + key;
    if (shift > 25) {
      shift = wrapIndex(shift);
    }
    return arr[shift];
  });

  return encryptedAlphabet[index];
}

export function caesarCipher(string, key) {
  const array = string.split("");

  array.forEach((element, i, arr) => {
    if (checkIfAlphabet(element)) {
      if (isUpperCase(element)) {
        arr[i] = encrypt(element, key, uppercase);
      } else {
        arr[i] = encrypt(element, key, lowercase);
      }
    }
  });

  return array.join("");
}
