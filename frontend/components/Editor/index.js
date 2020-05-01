import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
let Editor = () => null;

class EditorConvertToHTML extends Component {
  state = {
    ready: false,
    editorState: EditorState.createEmpty(),
  }

  componentDidMount() {
    import('react-draft-wysiwyg').then(({ Editor: WSYSIGEditor }) => {
      Editor = WSYSIGEditor;
      this.setState({ ready: true });
    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
        <Editor
          editorState={editorState}
          wrapperClassName="editor-component"
          editorClassName="editor-component__editor"
          toolbarClassName="editor-component__toolbar"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </>
    );
  }
}

export default EditorConvertToHTML;