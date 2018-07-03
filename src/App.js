import React, { Component } from 'react';
import marked from 'marked';
window.marked = marked;

class App extends Component {
  state = {
    input: [
      `# A header
## A subheader
[Google](https://google.com)`,

      'The `const` keyword is great.',

      '\n```js' +
        'for(int i = 0; i++ i < 10) {' +
        'console.log(i);' +
        '}' +
        '```',

      `- one
- two
- three

> block
> this.state = {loading = true};
> quote

![Dank](http://gordonscampinggear.com/img/portfolio.png)

**BOLD!!**`
    ].join('')
  };

  getMarkdown(input) {
    return { __html: marked(input, { sanitize: true }) };
  }

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <textarea
          name=""
          id="editor"
          cols="30"
          rows="10"
          onChange={this.setInput}
          value={this.state.input}
        />

        <div id="preview" dangerouslySetInnerHTML={this.getMarkdown(input)} />
      </div>
    );
  }
}

export default App;
