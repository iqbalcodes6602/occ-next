export const CODE_SNIPPETS = {
    python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("world")\n`,
    cpp: "#include <iostream>\n\nint main() {\n\tstd::cout << \"Hello World in C++\" << std::endl;\n\treturn 0;\n}\n",
    c: "#include <stdio.h>\n\nint main() {\n\tprintf(\"Hello World in C\\n\");\n\treturn 0;\n}\n",
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("world");\n`,
};


export const LANGUAGE_VERSIONS = {
    python: "3.10.0",
    cpp: "11",
    c: "11",
    java: "15.0.2",
    javascript: "18.15.0",
};