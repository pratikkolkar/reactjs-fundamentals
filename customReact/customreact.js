/* This js file tells the basic idea about the way react creates elemnts
 */

function createElement(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const key in element.props) {
    if (key === "children") continue;
    domElement.setAttribute(key, element.props[key]);
  }
  container.appendChild(domElement);
}

const containerElement = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click here to view google",
};

createElement(reactElement, containerElement);
