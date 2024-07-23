import Editor from '@monaco-editor/react';
import { myTheme } from '../styles/myTheme';

const CodeEditor = ({ language, code, setCode }) => {
    return (
        <Editor
            height={"100%"}
            width={"100%"}
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
            beforeMount={(monaco) => {
                monaco.editor.defineTheme('customTheme', myTheme);
                monaco.editor.setTheme('customTheme');
            }}
            theme="customTheme"
            options={{
                scrollBeyondLastLine: false,
                fontSize: 16,
            }}
        />
    );
};

export default CodeEditor;
