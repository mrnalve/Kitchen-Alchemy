import React, { useRef } from "react";
import "./Blog.css";
import { useReactToPrint } from "react-to-print";

const Blog = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "blog-data"
  });
  return (
    <div>
      <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Question's Part
          </h2>
        <button onClick={handlePrint} className="btn my-2">
          Print this blog
        </button>
      </div>
      <div className="questions" ref={componentRef} style={{height: window.innerHeight}}>
        <h5 className="font-bold text-xl">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h5>
        <p>
          In the context of React "uncontrolled" and "controlled" components
          refer to how data is managed and updated in the components.The data in
          an uncontrolled component is managed by the component itself.On the
          other hand, a controlled component is a component that relies on
          external data sources to manage its state.
        </p>

        <h5 className="font-bold text-xl">
          2. How to validate React props using PropTypes?
        </h5>
        <p>
          In React, PropTypes is a library used to validate the data types of
          props passed into a component. It helps developers catch and debug
          errors related to incorrect or missing props.
        </p>

        <h5 className="font-bold text-xl">
          3. Tell us the difference between nodejs and express js.
        </h5>
        <p>
          Node.js and Express.js are two popular technologies used for building
          web applications using JavaScript. Node.js is a runtime environment
          for executing JavaScript code outside the web browser, while
          Express.js is a web framework built on top of Node.js.
        </p>

        <h5 className="font-bold text-xl">
          4. What is a custom hook, and why will you create a custom hook?
        </h5>
        <p>
          Custom Hook is a JavaScript function which we create by ourselves,
          when we want to share logic between other JavaScript functions. It
          allows you to reuse some piece of code in several parts of your app.
        </p>
      </div>
    </div>
  );
};

export default Blog;
