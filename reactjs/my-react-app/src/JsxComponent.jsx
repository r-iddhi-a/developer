import React from 'react'

const JsxComponent = () => {
     const topic = "JSX (JavaScript XML)";
     const description = "JSX allows you to write HTML-like syntax inside JavaScript.";
  return (
    <div>
        <h1>Jsx Example</h1>
        <p>THis Paragraph Explains {topic}.{description}</p>
    </div>
  )
}
export default JsxComponent;
