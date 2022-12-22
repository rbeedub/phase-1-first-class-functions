
function receivesAFunction(cb) {
    console.log(cb());
  }
  
  main(function () { return "receives a function and calls it"});
  

  function returnsANamedFunction() {
    return (function() { return `Hello` + `world!`;});
  }

  