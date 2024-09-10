function makeString(s) {
  let str = s.split(' ');
  let newStr = str.map((e) => e.slice(0, 1)).join('');
  return newStr;
}
console.log(makeString('Mefs Mefw WUufE EUfna'));
