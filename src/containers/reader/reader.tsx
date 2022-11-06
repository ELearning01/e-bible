import React from "react";
import "./reader.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {};

const InitialState = {
  value: "",
  hideContent: { __html: "" },
};

type State = typeof InitialState;

export default class Reader extends React.Component<Props, State> {
  reactQuillRef: any;
  quillRef: any;

  constructor(props: any) {
    super(props);
    this.state = InitialState;
    this.reactQuillRef = null;
    this.quillRef = null;
    this.onTextChange = this.onTextChange.bind(this);
    this.onApply = this.onApply.bind(this);
  }

  onTextChange(event: any) {
    // this.setState({value: event.target.value});
  }

  componentDidMount() {
    this.attachQuillRefs();
    // this.setState({value: "Retrieves the string contents of the editor. Non-string content are omitted, so the returned string’s length may be shorter than the editor’s as returned by getLength. Note even when Quill is empty, there is still a blank line in the editor, so in these cases getText will return"});
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs = () => {
    if (
      !this.reactQuillRef ||
      typeof this.reactQuillRef.getEditor !== "function"
    )
      return;
    this.quillRef = this.reactQuillRef.getEditor();
  };

  onApply() {
    let content = this.state.value;
    const arrayContent = content.split(" ");
    const len = arrayContent.length;
    let numRandom = arrayContent.length / 10;

    const hideContent = `<input class="hideInput"`;

    while (numRandom > 0) {
      const position = Math.floor(len * Math.random());

      if (arrayContent[position].length < 20) {
        arrayContent[position] =
          hideContent + ` name="${arrayContent[position]}">`;
        numRandom = numRandom - 1;
      }
    }

    this.setState({ hideContent: { __html: arrayContent.join(" ") } });
  }

  onAnswerChange(event: any) {
    const target = event.target;
    const result = compareStrings(target.name, target.value);
    showResult(target, result);
  }

  render(): React.ReactNode {
    return (
      <div>
        <ReactQuill
          ref={(el) => {
            this.reactQuillRef = el;
          }}
          theme="snow"
          value={this.state.value}
          onChange={this.onTextChange}
        />

        <button onClick={this.onApply}> check </button>
        <div
          onKeyUp={this.onAnswerChange}
          dangerouslySetInnerHTML={this.state.hideContent}
        ></div>
      </div>
    );
  }
}

const showResult = (target: any, result: number) => {
  if (result > 1) {
    target.style.background = "orangered";
  } else {
    if (result == 1) {
      target.style.background = "yellow";
    } else {
      target.style.background = "lightgreen";
    }
  }
};

const compareStrings = (a: String, b: String) => {
  a = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  b = b.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  if (Math.abs(a.length - b.length) > 1) {
    return 2;
  }
  let wrongCount = 0;
  let len = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    if (!b[i] || !a[i]) {
      wrongCount++;
      continue;
    }
    if (a[i] !== b[i]) {
      wrongCount++;
    }
  }
  return wrongCount;
};
