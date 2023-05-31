import React, {useEffect} from "react";
import { marked } from "marked";

import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import ast from "./img/ast.svg"


const Samples = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const markdown = `
  \`\`\`java
    
  /**
   * This is a test program for my Compiler.
   * The SVG below is the resulting Abstract Syntax Tree
   * created by my project.
  */
  void kxi2023 main() {

    // test un-initialized variables
    int u1;
    char u2;
    bool u3;
    // string u4; // I disallowed this, just use cout << "str" now

    cout << u1;
    cout << '\\n';
    cout << u2;
    cout << '\\n';
    if (!u3) cout << '0';
    cout << '\\n';

    int var = 01;  // this works as 1
    while (var <= 20) {
      cout << var;
      cout << " -> ";
      if (var / 2 * 2 == var) {
          cout << "even";
      } else {
          cout << "odd";
      }
      if (var / 3 * 3 == var) {
          cout << "/div3";
      }
      cout << '\\n';
      var += 1;
    }

    switch(1 + 2 + 3 * 4) {
      case 0:
          break;
      case 15:
          cout << "long expression switch condition\n";
          break;
      default:
          cout << "switch\\n";
    }


    if (1==1) cout << "1==1\\n";
    if (-1==-1) cout << "-1==-1\\n";
    if (1==2) cout << "1==2 fail\\n";
    if (2==1) cout << "2==1 fail\\n";

    if (1!=2) cout << "1!=2\\n";
    if (2!=1) cout << "2!=1\\n";
    if (1!=1) cout << "1!=1 fail\\n";

    if (1 < 2) cout << "1<2\\n";
    if (1 < 1) cout << "1<1 fail\\n";
    if (2 < 1) cout << "2<1 fail\\n";

    if (2 > 1) cout << "2>1\\n";
    if (1 > 1) cout << "1>1 fail\\n";
    if (1 > 2) cout << "1>2 fail\\n";

    if (1 <= 2) cout << "1<=2\\n";
    if (1 <= 1) cout << "1<=1\\n";
    if (2 <= 1) cout << "2<=1 fail\\n";

    if (2 >= 1) cout << "2>=1\\n";
    if (1 >= 1) cout << "1>=1\\n";
    if (1 >= 2) cout << "1>=2 fail\\n";

    if (-1 == -(1))
        cout << "-1==-(1)\\n";

    if (1 * 2 / 2 + 4 - 5 * 8 / 8 == 0)
        cout << "good math\\n";

    if (     'a' == 'a'
        &&   'b' == 'b'
        && !('c' == 'd')
        &&   'c' != 'd'
        &&   'd' <  'e'
        &&   'a' >  'A' )
        cout << "char comparison pass\\n";

    int un_test = 2;
    un_test = +++++++un_test;
    cout << un_test;
    cout << '\\n';


    int x = 1;
    while (x <= 16) {
        cout << "whl: ";
        cout << x;
        cout << '\\n';

        int i = x;
        int j = 0;
        while(j < 3) {
            cout << "nest whl: ";
            cout << i * 3;
            cout << '\\n';
            i *= 3;
            j += 1;
        }
        x *= 2;
    }

    x = j = i;
    cout << "should match above value: ";
    cout << x; cout << '\\n';

    // ASSIGNMENT
    cout << "assneq: ";

    int test = 0-1;
    
    test += 1;
    if (test == 0) {
        cout << '+';
    } else {
        cout << '-';
        cout << test;
    }
    cout << '|';

    test -= 1;
    if (test == -1) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';

    test *= 2;
    if (test == -2) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';

    test /= 2;
    if (test == -1) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    cout << '\\n';

    // BOOL EXPRESSIONS
    cout << "bool: ";

    bool t = true;
    bool f = false;
    int a = 0;
    int b = 1;

    if (t) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    if (t != f) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    if (a < b) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    if (b > a) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    if (a <= 0) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    if (b >= 1) {
        cout << '+';
    } else {
        cout << '-';
    }
    cout << '|';
    cout << '\\n';
    

    // SWITCH CASE
    cout << "switch: ";

    a = 0;
    switch (a) {
        case 1:
            cout << '-';
            break;
        case 0:
            cout << '.';
        case 3:
            cout << ',';
        default:
            cout << '+';
    }
    cout << '|';
    cout << '\\n';

    int v1 = 1;
    int v2 = 2;
    int v3 = 3;

    v1 = v2 = v3;

    if (v1 == 3 && v2 == 3 && v3 == 3) cout << "v1 = v2 = v3 pass\\n";
    else cout << "v1 = v2 = v3 fail\\n";

    v1 += v1 = 2;
    if (v1 == 4) cout << "v1 += v1 = 2 pass\\n";
    else cout << "v1 += v1 = 2 fail\\n";

    v1 = v2 = v3 = 1 + 2 + 3;
    if (v1 == 6 && v2 == 6 && v3 == 6) cout << "v1 = v2 = v3 = 1 + 2 + 3 pass\\n";
    else cout << "v1 = v2 = v3 = 1 + 2 + 3 fail\\n";

    int temp = v1 + v3;
    v1 = v2 = v3 = v1 = v1 + v3;
    if (v1 == temp) cout << "long \"=\" chain pass\\n";

}

  \`\`\`
  `;

  return (
    <div>
      <pre className="codeSection">
        <code dangerouslySetInnerHTML={{__html: marked(markdown)}}></code>
      </pre>
      <img
        className="svg"
        src={ast}
        alt="KXI AST"/>
    </div>
  );
}

export default Samples;