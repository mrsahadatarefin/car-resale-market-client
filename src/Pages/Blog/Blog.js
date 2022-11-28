import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-10">
      <div className="m-10">
        <h2 className="text-2xl font-bold">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-xl">
          It is recommended to avoid storing such information in the app’s state
          to avoid the URL in our app getting out of sync. The URL should be
          used as the system of record, Read from it as needed for information
          related to sorting, pagination, etc. Update the URL as required when
          the settings change
        </p>
      </div>
      <div  className="m-10">
        <h2 className="text-2xl font-bold  ">How does prototypical inheritance work?</h2>
        <p className="text-xl">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object
        </p>
      </div>
      <div  className="m-10">
        <h2 className="text-2xl font-bold ">What is a unit test? Why should we write unit tests?</h2>
        <p className="text-xl">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div className="m-10" >
        <h2 className="text-xl font-bold ">React vs. Angular vs. Vue?</h2>
        <p className="text-xl">
          Vue provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option
        </p>
      </div>
    </div>
  );
};

export default Blog;
