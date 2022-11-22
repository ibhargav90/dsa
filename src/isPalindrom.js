const isPalindrom = (str) => {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  console.log(str);
  if (str.length < 2) return false;
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrom("A__a"));
