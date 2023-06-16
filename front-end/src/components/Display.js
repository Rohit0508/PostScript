 
 const Display=()=> {
      return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: "\n* {\n  box-sizing: border-box;\n}\n\n/* Add a gray background color with some padding */\nbody {\n  font-family: Arial;\n  padding: 20px;\n  background: #f1f1f1;\n}\n\n/* Header/Blog Title */\n.header {\n  padding: 30px;\n  font-size: 40px;\n  text-align: center;\n  background: white;\n}\n\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {   \n  float: left;\n  width: 75%;\n}\n\n/* Right column */\n.rightcolumn {\n  float: left;\n  width: 25%;\n  padding-left: 20px;\n}\n\n/* Fake image */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Add a card effect for articles */\n.card {\n   background-color: white;\n   padding: 20px;\n   margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n  margin-top: 20px;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {   \n    width: 100%;\n    padding: 0;\n  }\n}\n" }} />
          <div className="header">
            <h2>Blog Name</h2>
          </div>
          <div className="row">
            <div className="leftcolumn">
              <div className="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div className="fakeimg" style={{height: '200px'}}>Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
              <div className="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <div className="fakeimg" style={{height: '200px'}}>Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
            <div className="rightcolumn">
              <div className="card">
                <h2>About Me</h2>
                <div className="fakeimg" style={{height: '100px'}}>Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              </div>
              <div className="card">
                <h3>Popular Post</h3>
                <div className="fakeimg">Image</div><br />
                <div className="fakeimg">Image</div><br />
                <div className="fakeimg">Image</div>
              </div>
              <div className="card">
                <h3>Follow Me</h3>
                <p>Some text..</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <h2>Footer</h2>
          </div>
        </div>
      );
    }
  ;
  export default Display;