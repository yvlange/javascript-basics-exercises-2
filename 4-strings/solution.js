function isEmptyString(str) {
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isEmptyString(""));
console.log(isEmptyString("Yvonne"));

function isIncluded(a, b) {
  const included = a.include(b);
  return included;
}

function firstCharacter(str) {
  return str[0];
}
console.log(firstCharacter("Yvonne"));

function lastCharacter(str) {
  return str[str.length - 1];
}
console.log(lastCharacter("Yvonne"));

function capitalize(str) {
  const firstChar = firstCharacter(str);
  const rest = str.slice(1);
  const firstUp = firstChar.toUpperCase(str);
  return firstUp + rest;
}
console.log(capitalize("yvonne"));
