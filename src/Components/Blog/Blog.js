import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
           1.How to improve the performance of react application?
1. When it's necessary, keep component state local.
2. To avoid unwanted re-renders, memorize React components.
3. React code splitting with dynamic import.
4. In React, windowing or list virtualization is used.
5. Images are loaded slowly in React. Lock after on it.
<hr></hr>
2.What are the different ways to manage a state in a react application?
1. Local state.
2. Global state.
3. Server state.
4. URL state.
<hr></hr>
3.How does prototypical inheritance work?
Prototypal inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We traditionally use Object.getPrototypeOf and Object. setPrototypeOf to get and set the [[Prototype]] of an object.
<hr></hr>
4.You have an array of products. Each object has a name, price, description etc. How will you implement a search to find products by name?
Firstly, i have to run a loop on the products array. Then I will get single product. Then i can show them to the UI by product.name in a p tag.
<hr></hr>
5.What is a unit test? Why should write unit tests?
This is a sort of software testing in which the smallest testable module of an application, such as functions, procedures, or interfaces, is tested to see if it is fit for use.
Before code is deployed, unit testing verifies that it meets quality criteria. This promotes a stable engineering environment that prioritizes quality. Unit testing saves time and money across the product development life cycle, and it helps developers produce better code faster.
        </div>
    );
};

export default Blog;