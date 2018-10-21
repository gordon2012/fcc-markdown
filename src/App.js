import React, { Component } from 'react';
import marked from 'marked';
window.marked = marked;

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `
  <a href="${href}" target="_blank" rel="noreferrer noopener">${text}</a>
  `;
};

marked.setOptions({
  sanitize: true,
  gfm: true,
  breaks: true,
  renderer: renderer
});

class App extends Component {
  state = {
    input: `# This is an <h1> tag

## This is an <h2> tag

**This text will be bold**

You can even [link to Google!](http://google.com)

* Item 1
* Item 2

![My Portfolio](https://gordondoskas.com/fcc-portfolio.png)

As Kanye West said:

> We're living the future so
> the present is our past.

I think you should use an \`<addr>\` element here instead

\`\`\`javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\``
  };

  getMarkdown(input) {
    return {
      __html: marked(input)
    };
  }

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <div className="wrap">
          <textarea
            name=""
            id="editor"
            cols="30"
            rows="30"
            onChange={this.setInput}
            value={this.state.input}
          />

          <div id="preview" dangerouslySetInnerHTML={this.getMarkdown(input)} />
        </div>
      </div>
    );
  }
}

export default App;
