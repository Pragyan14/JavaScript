// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// Avoid polluting the global namespace

(function connect() {
  console.log("DB CONNECTED");
})();

(function server(port) {
  console.log(`Server is connected at port ${port}`);
})(3000);
