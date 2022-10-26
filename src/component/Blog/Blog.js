import React from 'react';

const Blog = () => {
    return (
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. what is cors?
          </div>
          <div className="collapse-content">
            <p>
              Cross-origin resource sharing is a mechanism that allows
              restricted resources on a web page to be requested from another
              domain outside the domain from which the first resource was
              served. A web page may freely embed cross-origin images,
              stylesheets, scripts, iframes, and videos.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            4. What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;