import React from "react";

const Blogs = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="card w-full bg-base-100 shadow-xl md:px-10 px-5 py-5 md:py-10">
        <div>
          <h2 className="text-2xl mb-3">1) what is `cors`?</h2>
          <p className="mb-8">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-3">
            2) Why are you using `firebase`? What other options do you have to
            implement authentication?
          </h2>
          <p className="mb-8">
            2.1:Firebase Analytics gives you undeniable insight into user
            behavior. You can use this knowledge to make informed decisions
            about how to market your app better and to reach out to the
            audiences that you want to target. The unique features it offers
            also allows you to analyze the performance of your campaigns across
            organic and paid channels to understand which methods are most
            effective in regards to the specific users that you want to reach.
            <br></br>
            <br></br>
            2.2: Cookie-Based authentication<br></br>
            Token-Based authentication<br></br>
            Third party access(OAuth, API-token)<br></br>
            OpenId<br></br>
            SAML<br></br>
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-3">3) How does the private route work?</h2>
          <p className="mb-8">
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. The current logged in user (authUser) is
            retrieved from Redux state with a call to the useSelector() hook.
            Redux is used in this example however it is not required to
            implement a Private Route component in React Router 6. You could use
            a different state management library or any approach you prefer to
            get the logged in status of the user.
          </p>
        </div>

        <div>
          <h2 className="text-2xl mb-3">
            4) What is Node? How does Node work?
          </h2>
          <p className="mb-8">
            4.1: Node.js is an open-source backend javascript runtime
            environment. It is a used as backend service where javascript works
            on the server-side of the application. This way javascript is used
            on both frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.<br></br>
            <br></br>
            4.2: Node.js accepts the request from the clients and sends the
            response, while working with the request node.js handles them with a
            single thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
