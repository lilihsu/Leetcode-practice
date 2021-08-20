const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let topElement = null;

    switch (s[i]) {
      case ')':
        topElement = stack.pop();
        // console.log(topElement);
        if (topElement !== '(')
          return false;
        break;
      case '}':
        topElement = stack.pop();
        if (topElement !== '{')
          return false;
        break;
      case ']':
        topElement = stack.pop();
        if (topElement !== '[')
          return false;
        break;
      default:
        stack.push(s[i]);
    }
  };
  // console.log(stack.length);
  // console.log(stack);
  return stack.length === 0 ? true: false;
};

// console.log(isValid("()"));