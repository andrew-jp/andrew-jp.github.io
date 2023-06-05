import React, {useEffect, useRef} from 'react';
import { marked } from "marked";

import hljs from "highlight.js";
import "highlight.js/styles/base16/atelier-dune.css";
import ast from "./img/ast.svg"

const Samples = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    const handleScrollSamples = () => {
      const element = targetRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the distance from the element's top and bottom to the viewport
        const dist = windowHeight - rect.bottom;

        // Calculate the opacity based on the distance from the viewport
        let opacity = 1;

        if (dist < 0) {
          opacity = 1.2 - Math.abs(dist) / windowHeight;
        }

        element.style.opacity = opacity > 0 ? opacity : 0;
      }
    };

    window.addEventListener('scroll', handleScrollSamples);

    return () => {
      window.removeEventListener('scroll', handleScrollSamples);
    };
  }, []);

  const markdown = `
  \`\`\`C

  class a {
    public char xyz;
    public char x = 'q';
    public b g() {}
    private char p = 'p';
    private char[] arrTempTest;
    private duplicates duplicates
      = new duplicates();
    public char y;

    public bool paramScopeTest(char xyz,
                              char p,
                              char y) {
        this.xyz = xyz;
        this.p = p;
        this.y = y;
    }

    public bool testbool(int testInt,
                        char testChar) {}

    private void q(int j, bool q) {
        int r = 4 + 3;
        bool iswut = true || false;
        char k = 'k';
        if (k < 'r') {
            //q(r * 3, p < k);
            while (testbool(r, xyz)) {
                
            }
        }
        return;
    }

    private void emptyFunc() {}
}

class empty {}

class duplicates {
    duplicates() {}
}

class b {
    public char y = 'a';
    public int[] numarr = new int[4];
    public int[] newarr = new int[5];
    private char v = 'q';
    public char j;
    public int twenty = 20;

    public int f(int number, char character) {     
        this.v = 'v';
        return numarr[6];
    } 
    
    public int testMore(int number,
                        char character,
                        a paramMemberTest,
                        b paramTest2,
                        b[] paramArrTest) {     
        this.v = 'v'; 
        paramMemberTest.xyz = 'x';
        paramTest2.y = 'x';
        paramArrTest[3].j = 'j';
    }

    public a h(){}
}

class cat {
    cat(int kittens) {}
    public int lmnop = 3;
}

class Owl { 
    private int i;
    public int f() {}
    public char alpha = 'a';
    private void g(int i, Owl y) {
        int a;
        int[] ii; 
        Owl[] Owl;
        Owl[] hoot;
        Owl thing;
        Owl x = y;
        Owl = hoot;
        i = this.i;
        return;
        ii = ii;
    }
}

class Mouse {
    private int weight;
    private int age = -1;
    public int eyeCount = 2;
    public char[] pedigree = new char[4];
    public char firstInitial = 'x';

    private Cat testCat1 = new Cat(26);
    public Cat testCat2 = new Cat(26);

    private void Initialize(char[] initials)
    {
        eyeCount = 4;
        this.pedigree = initials;
        firstInitial = initials[0];
    }

    Mouse(int age, char[] initials, int weight)
    {
        this.age = age;
        this.weight = weight;
        Initialize(initials);
    }



    public char[] PublicFunc()
    {
        int i = 3 + 4 * 2 + 83 /3;
        int j = (i + 2)/(i * -2) + (-23)-+2+-12;
        char[] result = new char[4];
        firstInitial = 'r';
        while (i >= 0)
        {
            result[3 - i] = this.pedigree[i];
            i = i +-1;
        }
    }
    
    public NoCtor ClassyFunc(Mouse m,
                            NoCtor[] things) {
        NoCtor one = things[0];
    }

    public Mouse[] BigMethod(bool[] array,
                            int length,
                            char[] name,
                            int nameLength,
                            char foo,
                            char[] bar,
                            Mouse m,
                            NoCtor n,
                            Mouse[] mice,
                            NoCtor[] nox,
                            bool asdf) {
        array[0] = true;
        name[length] = 'c';
        if (nameLength < length) {
            array[1] = true;
        }
        else {
            array[1] = false;
        }
        bar[0] = foo;
        if (asdf) {
            nox[0] = n;
        }
        else {
            nox[1] = n;
        }
        m.eyeCount = nameLength / 2 + length;
        cout << mice[10].eyeCount;
    }

    public Mouse FeedMouse(int count,
                          bool healthy) { }

    public int IntTime(bool b, char c) { }

    public int GetWeight(bool b, char c) {
        return weight;
    }
}

class NoCtor { 
    NoCtor(){}
}

class Cat {
    public int MiceEaten = 0;
    private int Weight = 0;
    public Owl testOwl;

    Cat(int weight) {
        this.Weight = weight;
    }

    public void FeedMouse(Mouse m) {
        Weight = Weight + m.GetWeight(true, 'A');
    }
}

void kxi2023 main() {
    int x = 12;
    int y = 20;
    int g = -4;
    int f = 0003;
    int k = +00000533;
    char l = 'l';
    int r = 23;
    int s = 2;
    bool bubs = true;
    char[] c = new char[2+4];
    bool relationalBoolTest;
    a atest = null;
    a a = atest;

    cat cat = new cat(r);
    cat[] kitty = new cat[r];
    b testingArrStuff;

    cat kitten = null;
    int[] numNull = null;

    int i = 3 + 4 * 2 + 83 /3;
    int j = (i + 2)/(i * -2)
            + (-23)-+2+-12--1++2;
    int[] ints = new int[10];
    bool b;
    bool[] bools = new bool[2];
    char alpha = 'A';
    char[] chs = new char[j];
    char[] foo;
    Mouse[] mice = new Mouse[ints[4]];
    Mouse mouse1;
    Mouse mouse2 = new Mouse(
                      -24 * (i + 2) /
                      (i * -2) + (-23)
                      -+2+-12,
                      null,
                      (i + 2)/(i * -2)
                      + (-23)-+2+-12);
    Cat cat1 = new Cat(24);
    NoCtor noct = new NoCtor();
    NoCtor[] noctArr;
    
    chs[0] = 'H';
    chs[1] = '\n';
    mouse1 = new Mouse(100, chs, 1);
    mice[i + j]
        .FeedMouse(i, false)
            .BigMethod(bools,
                      ints[2],
                      chs,
                      j + 1,
                      foo[j - i],
                      foo,
                      mouse2,
                      null,
                      mice,
                      null,
                      i < j);
    mice[i + j]
        .FeedMouse(i, false)
            .BigMethod(bools,
                      ints[2],
                      chs,
                      j + 1,
                      foo[j - i],
                      foo,
                      mouse2,
                      noct,
                      mice,
                      noctArr,
                      i < j);

    cin >> mouse1.pedigree[i + j];
    cin >> mouse1.pedigree[i-+2+-12];

    alpha = mouse1.testCat2.testOwl.alpha;
    
    cout << mouse1.pedigree[1];
    cin >> mouse1.eyeCount;
    cin >> mouse1
              .pedigree[
                (i + 2)/(i * -2)
                + (-23)-+2+-12--1++2
              ];
    mouse1.PublicFunc();
    b = j + 12 * (i - j) < j;
    ints[0] = ints[1] + ints[2];
    b = ints[2] < ints[i];
    mouse1.eyeCount = mouse2.eyeCount;
    mouse1.pedigree[1] = mouse2.pedigree[1];
    i = mouse1
            .IntTime(b, alpha)
            + j * ints[99 * 2];
    mouse1
        .FeedMouse(1, true)
            .FeedMouse(2, true)
                .FeedMouse(3, false)
                    .eyeCount = ints[10];
    ints = null;
    mouse2 = null;
    cat1.FeedMouse(mouse1);
    cat1.FeedMouse(mice[i - j]);

    c[s + 3] = c[s - 2];

    testingArrStuff.newarr[4]
        = x - 20 + testingArrStuff
            .newarr[2 + 3];
    testingArrStuff.twenty
        = testingArrStuff.twenty + -1 + 1;
    kitty[2].lmnop = kitty[2].lmnop + 4;

    x = y;

    x = y * g + f / k;

    cout << c[1+3-2*1];
    relationalBoolTest = x + 12 * (y - g) < r;

    x;
}

  \`\`\`
  `;

  return (
    <div className="sampleSection">
      <div className='leftSample'>
        <pre className="codeSection">
          <code dangerouslySetInnerHTML={{__html: marked(markdown)}}></code>
        </pre>
      </div>
      <div className='rightSample'>
        <p ref={targetRef} className="projDesc">
            &emsp;&emsp;For my senior capstone, I designed and built
            a compiler that handles a Java-like language. To the right is an AST
            representing the source code as a data structure - read by a visitor
            (one of many) and output in <i>DOT</i> (GraphViz) syntax. The colors
            are a byproduct of my semantic analysis and type checking - when a 
            node has been validated for type correctness it's marked green. 
            Generally I don't mark the higher level statements (cout, while)
            because they're validated elsewhere.
        </p>
        <img
          className="graph"
          src={ast}
          alt="KXI AST"
        />
      </div>
    </div>
  );
}

export default Samples;