// if-else

function isTrue1() {
    if (true) {
      return console.log('true');
    }
  
    if (false) {
      return console.log('false');
    }
  
    return console.log('not true');
  }
  
  function isTrue2() {
    if (true) {
      return console.log('true');
    } else {
      return console.log('false');
    }
  
    return console.log('not true');
  }
  
  function isTrue3() {
    if (true) {
      console.log('true');
    } else if (false) {
      console.log('false');
    } else {
      console.log('not true');
    }
  }
  
  isTrue1();
  isTrue2();
  isTrue3();
  
  // ------------------------------------------------------------
  
  // switch-case
  function isTrue4() {
    switch (true) {
      case true:
        console.log('true');
        break;
  
      case false:
        console.log('false');
        break;
  
      default:
        console.log('not true');
    }
  }
  
  isTrue4();
  
  // ------------------------------------------------------------
  
  // switch-case without break
  function isTrue4a() {
    switch (true) {
      case true:
        console.log('true');
  
      case false:
        console.log('false');
  
      default:
        console.log('not true');
    }
  }
  isTrue4a();
  
  // ------------------------------------------------------------
  
  ternary operator
  function isTrue5() {
    return true ? console.log('true') : console.log('false');
  }
  
  isTrue5();
  
  // ------------------------------------------------------------
  
  // nested ternary operator
  function isTrue6() {
    return false ?
      console.log('true') :
      true ?
        console.log('nested-true') :
        console.log('not true');
  }
  
  isTrue6();
  
  // ------------------------------------------------------------

  // super nested ternary operator
  function isTrue7() {
    return false ?
      console.log('true') :
      false ?
        console.log('false') :
        false ?
          console.log('true') :
          false ?
            console.log('false') :
            console.log('not true');
  }
  
  isTrue7();

  