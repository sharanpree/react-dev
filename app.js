const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "h1" }, "I'm H1 tag"), React.createElement("h1", { id: "h1" }, "I'm H1 tag")]));

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from react ");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);