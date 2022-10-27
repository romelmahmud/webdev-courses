import React from "react";
import Container from "../../Layout/Container/Container";

const Blog = () => {
  return (
    <Container>
      <div className="min-h-screen">
        <div className="py-8 px-8 mt-24 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            What is cors?
          </h1>

          <p className="text-lg mt-6 mb-4">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json.
          </p>
        </div>
        <div className="py-8 px-8 mt-24 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            Why are we using firebase? What other options do you have to
            implement authentication?
          </h1>

          <p className="text-lg mt-6 mb-4">
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.
          </p>
          <p className="text-lg mt-6 mb-4">
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>
        <div className="py-8 px-8 mt-24 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            How does the private route work?
          </h1>

          <p className="text-lg mt-6 mb-4">
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </p>
          <p className="text-lg mt-6 mb-4">
            The current logged in user (authUser) is retrieved from Redux state
            with a call to the useSelector() hook. Redux is used in this example
            however it is not required to implement a Private Route component in
            React Router 6. You could use a different state management library
            or any approach you prefer to get the logged in status of the user.
          </p>
        </div>
        <div className="py-8 px-8 mt-24 mb-20 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            What is Node? How does Node work?
          </h1>

          <p className="text-lg mt-6 mb-4">
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
          <p className="text-lg mt-6 mb-4">
            Working of Node.js: Node.js accepts the request from the clients and
            sends the response, while working with the request node.js handles
            them with a single thread. To operate I/O operations or requests
            node.js use the concept of threads. Thread is a sequence of
            instructions that the server needs to perform. It runs parallel on
            the server to provide the information to multiple clients. Node.js
            is an event loop single-threaded language. It can handle concurrent
            requests with a single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
