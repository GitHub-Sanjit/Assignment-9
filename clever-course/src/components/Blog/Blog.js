import React from "react";

const Blog = () => {
  return (
    <div>
      <h4 className="question">
        Question: What is the purpose of ReactRouter?
      </h4>
      <div className="answer">
        Answer : React Router is a standard library for routing in React. It
        enables the navigation among views of various components in a React
        Application, allows changing the browser URL, and keeps the UI in sync
        with the URL. To build single-page apps, we have to have some way to map
        URLs to the React component to display.
        <br />
        React Router is React's most popular routing library. It allows you to
        define paths in the same declarative style as most other libraries. A
        router allows your application to navigate by changing its browser's URL
        or browsing history while staying in synch with other elements. We can
        use React Router to map URLs to components. This lets us create a
        single-page app since we render components according to URLs on the
        client-side. Therefore, we’ll have a self-contained app that works on
        its own without the server rendering things when we type in URLs. We
        have the Link to render links, Route to map URLs to components. Router
        wraps around anything that needs routing. Switch renders the first child
        Route or Redirect that matches the location.
      </div>
      <h4 className="question">Question: How Dose Context-Api Works?</h4>
      <div className="answer">
        Answer : Context provides a way to pass data through the component tree
        without having to pass props down manually at every level. So If we have
        a parent component with child components inside it and each child
        component has further child components, then to pass data from the
        parent component to the innermost child component we have to pass it
        through all the parent components of the innermost child component. This
        is known asprop drilling. This means even if any component is not using
        that prop, it has to receive that prop to pass it down to the child
        component. So to avoid this long chain of passing props through each
        level, we can use context API provided by React. So using Context API,
        the innermost child can directly access the prop data sent from the
        parent component just like the connect method of react-redux library.
        React provides an easy way to avoid prop drilling using Context API.
        There are two ways to access the passed props. First is using render
        props pattern and second is using useContext hook. Note that, we have
        just passed users, sortOrder and isLoading in the value prop. If you
        want you can even pass the handleSort and handleSearch handlers in the
        value prop. There is no problem in doing that. Also, If you have nested
        children like parent component contains child component and that child
        component contains another child component and the innermost child is
        using the state or props of parent component, then only you should use
        context otherwise you can just directly pass props. Context just
        provides a better way to access props directly in the innermost child
        without the need of passing the props through each child to reach the
        innermost child.
      </div>
      <h4 className="question">
        Question: Write Briefly About "UseRef"(Hook)?
      </h4>
      <div className="answer">
        Answer : The useRef Hook allows you to persist values between renders.
        It can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly. If we
        tried to count how many times our application renders using the useState
        Hook, we would be caught in an infinite loop since this Hook itself
        causes a re-render. To avoid this, we can use the useRef Hook.
        useRef(initialValue) is a built-in React hook that accepts one argument
        as the initial value and returns a reference (aka ref). A reference is
        an object having a special property current. There are 2 rules to
        remember about references: The value of the reference is persisted
        (stays the same) between component re-renderings; Updating a reference
        doesn't trigger a component re-rendering.
      </div>
    </div>
  );
};

export default Blog;
