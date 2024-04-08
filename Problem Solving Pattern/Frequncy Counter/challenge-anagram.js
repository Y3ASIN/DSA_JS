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

let s1 = "atc",
  s2 = "cat";
console.log(same(s1,s2))