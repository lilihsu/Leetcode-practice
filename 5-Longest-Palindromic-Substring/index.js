const longestPalindrome = (s) => {
  let table = Array(s.length).fill().map(()=>Array(s.length).fill(null));
  let resultR = 0;
  let resultC = 0;

  for (let i=0; i<s.length; i++) {
    table[i][i] = true;
  }

  for (let i=1; i<s.length; i++) {
    for (let j=0; j<s.length; j++) {
      if (j+i>=s.length) break;
      if(i === 1) table[j][j+i] = (s[j] === s[j+i]) ? true: false;
      else table[j][j+i] = ((table[j+1][j+i-1]) && (s[j] === s[j+i])) ? true: false;
      if (table[j][j+i] && resultC-resultR < i) {
        resultR = j;
        resultC = j+i;
      } 
    }

  }
  // console.log(table);

  return s.substr(resultR,resultC-resultR+1);
}

// console.log(longestPalindrome("cbbd"));