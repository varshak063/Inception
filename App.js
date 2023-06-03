// const heading = React.createElement(
//   "h1",
//   { id: "headings" },
//   "Hello World From React!!"
// );
// console.log("heading", heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//render:: converts object in to heading tag and put into DOM


// Nested structure using react
const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is h1 nested"),React.createElement("h2", {}, "This is h2 nested")]
  ), React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "This is h1 child2 nested"),React.createElement("h2", {}, "This is h2 child 2 nested")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
