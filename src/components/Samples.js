import React, {useEffect} from 'react';
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/base16/isotope.css";
import ast from "./img/ast.svg"
import '../styles/Samples.css'

const Samples = () => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="sample-section">

      <div className="proj-desc">
        <p>
        &emsp;&emsp;For my senior capstone, I designed and built a compiler that handles a Java-like language.
        Below is some source code, and the AST representing the source code as a data structure.
        The source is read by a series of visitors, and output in <i>DOT</i> (GraphViz) syntax.
        The colors are a byproduct of my semantic analysis and type checking - when a node has been validated for type correctness it's marked green. 
        Generally I don't mark the higher level statements (cout, while) because they're validated elsewhere.
        </p>
        <p>
        &emsp;&emsp;This project was extremely demanding. The semester prior, I built an assembler and a virtual machine.
        The assembler reads an ARM-like assembly and (if valid) outputs hexadecimal bytecode. This bytcode is then read 
        and executed by the VM. For the final project, we needed to process source code and eventually
        output working assembly code that we could run through our assembler/vm.
        </p>
      </div>

      <div className='left-sample'>
        <pre className="code-section">
          <code 
            class="language-java"
            dangerouslySetInnerHTML={{__html: marked(kxi)}}>
          </code>
        </pre>
      </div>

      <div className='right-sample'>
        <img
          className="dot-graph"
          src={ast}
          alt="KXI AST"
        />
      </div>

    </div>
  );
}

/* This is the code displayed iin thee codeSection */
const kxi = `
\`\`\`

class A {
    public int a;
    public int b;
    private int[] array = new int[1000];

    A (int a, int b) {
        this.a = a;
        this.b = b;
    }

    public string stringFunc() {
        return "hello world";
    }

    public void f() {
        return;
    }
}

class B {
  public A classFunc(A a, B b) {
    A anotherOne = new A(3, 4);
    return anotherOne;
  }

  public int fibonacci(int num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        return (
          this.fibonacci(num-1)
          + this.fibonacci(num-2)
        );
    }
  }
}

void kxi2023 main() {
    A clsA = new A(1, 2);
    int x = clsA.array[1 + 1 / 2];
    string res = clsA.stringFunc();

    int i = 0;
    while (i < 10) {
        cout << i;
        i += 1;

        if (i == 7) break;
        else cout << 'n';
    }

    switch(i) {
        case 0:
            break;
        case 1:
            int y = 1 + 2 * 3 / 4
                    + clsA.a - clsA.b;
            clsA.a += y - clsA.b;
        default:
            break;
    }

    A a = new A(1, 2);
    a = null;

    int[] nullarr = new int[10];
    int[] nullarr2 = null;
    nullarr = nullarr2 = null;

    B b = new B();
    int fib = b.fibonacci(5);
    cout << fib;
}
\`\`\`
`;


export default Samples;