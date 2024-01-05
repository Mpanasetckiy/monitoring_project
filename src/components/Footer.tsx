import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer teal lighten-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can add your content here.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            {/* <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul> */}
          </div>
        </div>
      </div>
      <div className="teal lighten-1">
        <div className="container">
          © {new Date().getFullYear()} Maksim Lukianenko
        </div>
      </div>
    </footer>
  );
};

export default Footer;
