var Class2 = (function() {
  // Constructor
  function Class2() {
    this._local_class = new Class1();
    alert(this._local_class.getBar());
  };
})();
