function same(s1, s2) {
  if (s1.length !== s2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of s1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of s2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
  return true;
}
// alternative solution
function challenge(first, second) {
  if (first.length !== second.length) return false;
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true
}
let s1 = "atc",
  s2 = "cat";
console.log(challenge(s1, s2));
