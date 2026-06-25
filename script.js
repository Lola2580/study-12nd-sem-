(function(){

    "use strict";

    // =========================
    // DATA
    // =========================

    const qnaData = {

        major3:{
            paperName:"Major 3 · DSA",
            questions:[
                {
                    q:"State and explain the pigeonhole principle.",
                    a:`
                        <h2>Defination</h2>
                        The Pigeonhole Principle is a fundamental principle in Discrete Mathematics. It states that:
                        <div class="info-box">
                          If more than n objects are placed into n boxes, then at least one box must contain more than one object.
                        </div>
                        in simple words:      
        <div class="info-box">If the number of objects is greater than the number of boxes, then at least one box will contain two or more objects.</div>    
        <h2>Explanation</h2>
            The Pigeonhole Principle is based on a very simple counting idea.

Suppose we have 5 pigeons and 4 pigeonholes. If each pigeon is placed into a pigeonhole, it is impossible for every pigeonhole to contain only one pigeon because there are more pigeons than pigeonholes.

Therefore, at least one pigeonhole must contain 2 or more pigeons.<br>
This principle is widely used in:
<ul>
<li>Combinatorics</li>
<li>Computer Science</li>
<li>Graph Theory</li>
<li>Number Theory</li>
<li>Data Structures and Algorithms (DSA)</li>
</ul>
It helps in proving that certain situations must occur without identifying exactly where they occur.
<h2>Mathematical Form</h2>
  <div class="info-box">If N objects are distributed among k boxes, then at least one box contains at least<br>⌈N/k⌉<br>
objects, where ⌈ ⌉ denotes the ceiling function (smallest integer greater than or equal to the value).</div>
<h2>Example 1</h2>
Suppose there are 13 students in a class and only 12 months in a year.<br>

Since the number of students (13) is greater than the number of months (12), at least two students must have birthdays in the same month.<br>

This follows directly from the Pigeonhole Principle.
<h2>Example 2</h2>
There are 10 balls placed into 9 boxes.<br>

Since 10 > 9, at least one box will contain 2 or more balls.
  <div class="info-box"><h2>Applications</h2>
The Pigeonhole Principle is used in:
<ul>
<li>Proving mathematical theorems</li>
<li>Algorithm design</li>
<li>Hashing techniques</li>
<li>Data storage and memory allocation</li>
<li>Scheduling problems</li>
<li>Network and communication systems</li>
</ul>
<h2>Advantages</h2>
<ul>
<li>Simple and easy to understand.</li>
<li>Useful for proving the existence of a result.</li>
<li>Widely applied in mathematics and computer science.</li>
<li>Helps solve many counting and optimization problems.</li>
</ul></div>
            `
                }
            ]
        },

        major4:{
            paperName:"Major 4 · JAVA",
            questions:[
                {
                    q:"What is Java?",
                    a:`
                        <h2>Java</h2>
                        <div class="info-box">
                            Java is a high-level object-oriented programming language.
                        </div>
                    `
                },
                {
                    q: "JAVA Architecture?",
                    a: `
                        <h2>Java Architecture</h2>

                        <div class="info-box">
                            Java Architecture consists of JDK, JRE and JVM.
                        </div>

                        <ul>
                            <li>JDK = Java Development Kit</li>
                            <li>JRE = Java Runtime Environment</li>
                            <li>JVM = Java Virtual Machine</li>
                        </ul>
                    `
                },

                {
                    q: "Features of Java?",
                    a: `
                        <h2>Features of Java</h2>

                        <ul>
                            <li>Object Oriented</li>
                            <li>Platform Independent</li>
                            <li>Robust</li>
                            <li>Secure</li>
                            <li>Multithreaded</li>
                        </ul>
                    `
                },

                {
                    q: "What is JVM?",
                    a: `
                        <h2>JVM</h2>

                        <div class="success-box">
                            JVM executes Java Bytecode.
                        </div>
                    `
                },
              {
    q: "What is JVM?",
    a: `
        <h2>Java Virtual Machine (JVM)</h2>

        <div class="info-box">
            JVM (Java Virtual Machine) is a software environment that executes Java bytecode and makes Java platform independent.
        </div>

        <h3>Main Functions of JVM</h3>

        <ul>
            <li>Loads Java Class Files</li>
            <li>Executes Bytecode</li>
            <li>Manages Memory</li>
            <li>Performs Garbage Collection</li>
            <li>Provides Security</li>
        </ul>

        <div class="success-box">
            JVM is the core component responsible for the "Write Once, Run Anywhere" feature of Java.
        </div>

        <table>
            <tr>
                <th>Component</th>
                <th>Role</th>
            </tr>

            <tr>
                <td>Class Loader</td>
                <td>Loads Classes</td>
            </tr>

            <tr>
                <td>Memory Area</td>
                <td>Stores Data</td>
            </tr>

            <tr>
                <td>Execution Engine</td>
                <td>Runs Bytecode</td>
            </tr>

            <tr>
                <td>Garbage Collector</td>
                <td>Removes Unused Objects</td>
            </tr>
        </table>

        <div class="warning-box">
            JVM is platform dependent, but Java Bytecode is platform independent.
        </div>
    `
},{
    q: "What is JDK?",
    a: `
        <h2>Java Development Kit (JDK)</h2>

        <div class="info-box">
            JDK (Java Development Kit) is a software package used to develop, compile and run Java programs.
        </div>

        <h3>Components of JDK</h3>

        <ul>
            <li>JRE (Java Runtime Environment)</li>
            <li>JVM (Java Virtual Machine)</li>
            <li>Java Compiler (javac)</li>
            <li>Debugger</li>
            <li>Development Tools</li>
        </ul>

        <div class="success-box">
            JDK = JRE + Development Tools
        </div>

        <table>
            <tr>
                <th>Tool</th>
                <th>Purpose</th>
            </tr>

            <tr>
                <td>javac</td>
                <td>Compiles Java Code</td>
            </tr>

            <tr>
                <td>java</td>
                <td>Runs Java Program</td>
            </tr>

            <tr>
                <td>javadoc</td>
                <td>Creates Documentation</td>
            </tr>
        </table>
    `
},
{
    q: "What is JRE?",
    a: `
        <h2>Java Runtime Environment (JRE)</h2>

        <div class="info-box">
            JRE (Java Runtime Environment) provides the environment required to run Java applications.
        </div>

        <h3>Main Components</h3>

        <ul>
            <li>JVM (Java Virtual Machine)</li>
            <li>Core Libraries</li>
            <li>Supporting Files</li>
        </ul>

        <div class="success-box">
            JRE = JVM + Libraries
        </div>

        <div class="warning-box">
            JRE can run Java programs but cannot compile Java source code.
        </div>

        <table>
            <tr>
                <th>Feature</th>
                <th>Available in JRE</th>
            </tr>

            <tr>
                <td>Run Java Program</td>
                <td>Yes</td>
            </tr>

            <tr>
                <td>Compile Java Program</td>
                <td>No</td>
            </tr>

            <tr>
                <td>Contains JVM</td>
                <td>Yes</td>
            </tr>
        </table>
    `
},{
    q: "Differentiate between JVM, JDK and JRE.",
    a: `
        <h2>Difference Between JVM, JRE and JDK</h2>

        <div class="info-box">
            JVM, JRE and JDK are the three main components of Java Technology.
        </div>

        <table>
            <tr>
                <th>Feature</th>
                <th>JVM</th>
                <th>JRE</th>
                <th>JDK</th>
            </tr>

            <tr>
                <td>Full Form</td>
                <td>Java Virtual Machine</td>
                <td>Java Runtime Environment</td>
                <td>Java Development Kit</td>
            </tr>

            <tr>
                <td>Main Purpose</td>
                <td>Executes Bytecode</td>
                <td>Runs Java Programs</td>
                <td>Develops & Runs Java Programs</td>
            </tr>

            <tr>
                <td>Contains</td>
                <td>Execution Engine</td>
                <td>JVM + Libraries</td>
                <td>JRE + Development Tools</td>
            </tr>

            <tr>
                <td>Compilation</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
            </tr>

            <tr>
                <td>Execution</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
        </table>

        <div class="success-box">
            JDK → JRE → JVM
        </div>

        <h3>Relationship</h3>

        <ul>
            <li>JDK contains JRE</li>
            <li>JRE contains JVM</li>
            <li>JVM executes Java Bytecode</li>
        </ul>

        <div class="warning-box">
            JVM is platform dependent, but Java Bytecode is platform independent.
        </div>
    `
},{
    q: "What are Variables in Java?",
    a: `
        <h2>Variables in Java</h2>

        <div class="info-box">
            A variable is a named memory location used to store data values during program execution.
        </div>

        <h3>Types of Variables</h3>

        <ul>
            <li>Local Variable</li>
            <li>Instance Variable</li>
            <li>Static Variable</li>
        </ul>

        <div class="success-box">
            Example: int age = 20;
        </div>
    `
},{
    q: "What are Constants in Java?",
    a: `
        <h2>Constants in Java</h2>

        <div class="info-box">
            A constant is a fixed value that cannot be changed during program execution.
        </div>

        <div class="success-box">
            Constants are declared using the final keyword.
        </div>

        <pre>
final double PI = 3.14159;
        </pre>
    `
},{
    q: "What are Keywords in Java?",
    a: `
        <h2>Keywords in Java</h2>

        <div class="info-box">
            Keywords are reserved words that have predefined meanings and cannot be used as identifiers.
        </div>

        <h3>Examples</h3>

        <ul>
            <li>class</li>
            <li>public</li>
            <li>static</li>
            <li>void</li>
            <li>if</li>
            <li>for</li>
            <li>return</li>
        </ul>
    `
},{
    q: "What are Data Types in Java?",
    a: `
        <h2>Data Types in Java</h2>

        <div class="info-box">
            Data types specify the type of data that a variable can store.
        </div>

        <table>
            <tr>
                <th>Data Type</th>
                <th>Example</th>
            </tr>

            <tr>
                <td>int</td>
                <td>10</td>
            </tr>

            <tr>
                <td>float</td>
                <td>10.5f</td>
            </tr>

            <tr>
                <td>char</td>
                <td>'A'</td>
            </tr>

            <tr>
                <td>boolean</td>
                <td>true</td>
            </tr>
        </table>
    `
},{
    q: "Explain Operators in Java.",
    a: `
        <h2>Operators in Java</h2>

        <div class="info-box">
            Operators are special symbols used to perform operations on variables and values.
        </div>

        <table>
            <tr>
                <th>Operator Type</th>
                <th>Examples</th>
            </tr>

            <tr>
                <td>Arithmetic</td>
                <td>+, -, *, /, %</td>
            </tr>

            <tr>
                <td>Logical</td>
                <td>&&, ||, !</td>
            </tr>

            <tr>
                <td>Bitwise</td>
                <td>&, |, ^, ~</td>
            </tr>
        </table>
    `
},{
    q: "What are Expressions in Java?",
    a: `
        <h2>Expressions</h2>

        <div class="info-box">
            An expression is a combination of variables, constants and operators that produces a value.
        </div>

        <div class="success-box">
            Example: a + b * c
        </div>
    `
},{
    q: "What are Comments in Java?",
    a: `
        <h2>Comments in Java</h2>

        <div class="info-box">
            Comments are used to explain code and are ignored by the compiler.
        </div>

        <h3>Types of Comments</h3>

        <ul>
            <li>Single Line Comment (//)</li>
            <li>Multi Line Comment (/* */)</li>
            <li>Documentation Comment (/** */)</li>
        </ul>
    `
},{
    q: "What are Conditional Statements in Java?",
    a: `
        <h2>Conditional Statements</h2>

        <div class="info-box">
            Conditional statements are used to make decisions based on conditions.
        </div>

        <h3>Types</h3>

        <ul>
            <li>if Statement</li>
            <li>if-else Statement</li>
            <li>Nested if</li>
            <li>if-else-if Ladder</li>
            <li>switch Statement</li>
        </ul>

        <div class="success-box">
            They control the flow of program execution.
        </div>
    `
},{
    q: "What are Loops in Java?",
    a: `
        <h2>Loops in Java</h2>

        <div class="info-box">
            Loops are used to execute a block of code repeatedly until a condition becomes false.
        </div>

        <h3>Types of Loops</h3>

        <ul>
            <li>for Loop</li>
            <li>while Loop</li>
            <li>do-while Loop</li>
        </ul>

        <div class="success-box">
            Loops reduce code repetition and improve efficiency.
        </div>
    `
},{
    q: "What is Nesting in Java?",
    a: `
        <h2>Nesting</h2>

        <div class="info-box">
            Nesting means placing one control structure inside another control structure.
        </div>

        <h3>Examples</h3>

        <ul>
            <li>Nested if Statement</li>
            <li>Nested Loop</li>
        </ul>

        <div class="success-box">
            It is useful for solving complex decision-making problems.
        </div>
    `
},{
    q: "What is a Method in Java?",
    a: `
        <h2>Method</h2>

        <div class="info-box">
            A method is a block of code that performs a specific task and can be called whenever required.
        </div>

        <h3>Advantages</h3>

        <ul>
            <li>Code Reusability</li>
            <li>Easy Maintenance</li>
            <li>Modular Programming</li>
        </ul>
    `
},{
    q: "Explain Method Definition in Java.",
    a: `
        <h2>Method Definition</h2>

        <div class="info-box">
            A method is defined using return type, method name and parameters.
        </div>

        <div class="success-box">
            Syntax:
            returnType methodName(parameters){
                // code
            }
        </div>
    `
},{
    q: "What is Scope of Variables?",
    a: `
        <h2>Scope of Variables</h2>

        <div class="info-box">
            Scope determines where a variable can be accessed within a program.
        </div>

        <ul>
            <li>Local Scope</li>
            <li>Instance Scope</li>
            <li>Class (Static) Scope</li>
        </ul>
    `
},{
    q: "What is Passing Arguments to Methods?",
    a: `
        <h2>Passing Arguments</h2>

        <div class="info-box">
            Arguments are values passed to a method when it is called.
        </div>

        <div class="success-box">
            Java uses Pass By Value mechanism.
        </div>
    `
},{
    q: "What is Returning Arguments from Methods?",
    a: `
        <h2>Returning Values</h2>

        <div class="info-box">
            A method can return a value using the return statement.
        </div>

        <div class="success-box">
            Example:
            int sum(){
                return 10;
            }
        </div>
    `
},{
    q: "What is Type Conversion in Java?",
    a: `
        <h2>Type Conversion</h2>

        <div class="info-box">
            Type conversion means converting one data type into another.
        </div>

        <ul>
            <li>Implicit Conversion (Widening)</li>
            <li>Explicit Conversion (Casting)</li>
        </ul>

        <div class="success-box">
            Example: int → double
        </div>
    `
},{
    q: "What are Built-in Java Class Methods?",
    a: `
        <h2>Built-in Java Methods</h2>

        <div class="info-box">
            Java provides many predefined methods through standard classes.
        </div>

        <table>
            <tr>
                <th>Class</th>
                <th>Method</th>
            </tr>

            <tr>
                <td>Math</td>
                <td>sqrt(), pow()</td>
            </tr>

            <tr>
                <td>String</td>
                <td>length(), charAt()</td>
            </tr>

            <tr>
                <td>System</td>
                <td>currentTimeMillis()</td>
            </tr>
        </table>
    `
},{
    q: "Explain Arrays in Java.",
    a: `
        <h2>Arrays in Java</h2>

        <div class="info-box">
            An array is a collection of similar data elements stored in contiguous memory locations. Arrays allow multiple values of the same data type to be stored using a single variable name.
        </div>

        <h3>Features of Arrays</h3>

        <ul>
            <li>Stores multiple values of same type.</li>
            <li>Provides fast access using index.</li>
            <li>Index starts from 0.</li>
            <li>Size is fixed once created.</li>
        </ul>

        <h3>Advantages</h3>

        <ul>
            <li>Reduces code complexity.</li>
            <li>Easy data management.</li>
            <li>Efficient memory usage.</li>
        </ul>

        <div class="success-box">
            Example: int marks[] = {70,80,90};
        </div>
    `
},{
    q: "Explain One-Dimensional and Multi-Dimensional Arrays.",
    a: `
        <h2>Types of Arrays</h2>

        <div class="info-box">
            Java supports both one-dimensional and multi-dimensional arrays.
        </div>

        <h3>One-Dimensional Array</h3>

        <p>
            Stores data in a single row and accessed using one index.
        </p>

        <div class="success-box">
            int arr[] = {10,20,30};
        </div>

        <h3>Multi-Dimensional Array</h3>

        <p>
            Stores data in rows and columns and accessed using multiple indices.
        </p>

        <div class="success-box">
            int matrix[][] = {{1,2},{3,4}};
        </div>

        <table>
            <tr>
                <th>Type</th>
                <th>Index Used</th>
            </tr>

            <tr>
                <td>1D Array</td>
                <td>One Index</td>
            </tr>

            <tr>
                <td>2D Array</td>
                <td>Two Indices</td>
            </tr>
        </table>
    `
},{
    q: "Explain Java String Class.",
    a: `
        <h2>Java String Class</h2>

        <div class="info-box">
            String is a predefined class in Java used to represent a sequence of characters.
        </div>

        <h3>Characteristics</h3>

        <ul>
            <li>Strings are objects.</li>
            <li>Strings are immutable.</li>
            <li>Stored in String Pool memory.</li>
        </ul>

        <h3>Common Methods</h3>

        <ul>
            <li>length()</li>
            <li>charAt()</li>
            <li>substring()</li>
            <li>toUpperCase()</li>
            <li>toLowerCase()</li>
        </ul>

        <div class="success-box">
            Example: String name = "Java";
        </div>
    `
},{
    q: "Explain String Immutability in Java.",
    a: `
        <h2>String Immutability</h2>

        <div class="info-box">
            In Java, String objects are immutable, which means their values cannot be changed after creation.
        </div>

        <h3>Working</h3>

        <p>
            When a String is modified, a new String object is created instead of changing the existing one.
        </p>

        <div class="success-box">
            String s = "Java";
            s = s + " Programming";
        </div>

        <p>
            Here a new String object is created.
        </p>

        <h3>Advantages</h3>

        <ul>
            <li>Security</li>
            <li>Thread Safety</li>
            <li>Efficient Memory Management</li>
        </ul>
    `
},{
    q: "Explain StringBuffer Class.",
    a: `
        <h2>StringBuffer Class</h2>

        <div class="info-box">
            StringBuffer is a mutable class used to modify strings without creating new objects.
        </div>

        <h3>Features</h3>

        <ul>
            <li>Mutable</li>
            <li>Thread Safe</li>
            <li>Efficient for frequent modifications</li>
        </ul>

        <h3>Methods</h3>

        <ul>
            <li>append()</li>
            <li>insert()</li>
            <li>delete()</li>
            <li>reverse()</li>
        </ul>

        <div class="success-box">
            StringBuffer sb = new StringBuffer("Java");
            sb.append(" Programming");
        </div>
    `
},{
    q: "Explain Dynamic Referencing of Arrays in Java.",
    a: `
        <h2>Dynamic Referencing of Arrays in Java</h2>

        <div class="info-box">
            Dynamic referencing means creating arrays at runtime using the new keyword. The size of the array is decided during program execution rather than at compile time.
        </div>

        <h3>Features</h3>

        <ul>
            <li>Memory is allocated dynamically.</li>
            <li>Array size can be specified at runtime.</li>
            <li>Useful when the number of elements is unknown beforehand.</li>
        </ul>

        <h3>Example</h3>

        <div class="success-box">
            int arr[] = new int[5];
        </div>

        <p>
            In the above example, memory for 5 integer elements is allocated dynamically during execution.
        </p>

        <div class="warning-box">
            Once created, the size of the array cannot be changed.
        </div>
    `
},{
    q: "Explain Creation and Use of String Objects in Java.",
    a: `
        <h2>Creation and Use of String Objects</h2>

        <div class="info-box">
            A String object represents a sequence of characters. Strings can be created using string literals or the new keyword.
        </div>

        <h3>Methods of Creation</h3>

        <ul>
            <li>String s1 = "Java";</li>
            <li>String s2 = new String("Java");</li>
        </ul>

        <h3>Uses of String Objects</h3>

        <ul>
            <li>Store textual data.</li>
            <li>Perform string manipulation.</li>
            <li>Compare strings.</li>
            <li>Search and extract data.</li>
        </ul>

        <p>
            String objects are widely used in input/output operations and application development.
        </p>
    `
},{
    q: "Explain Passing Strings To and From Methods.",
    a: `
        <h2>Passing Strings To and From Methods</h2>

        <div class="info-box">
            Strings can be passed as arguments to methods and can also be returned from methods.
        </div>

        <h3>Passing Strings</h3>

        <p>
            A String variable can be supplied as a parameter during method invocation.
        </p>

        <h3>Returning Strings</h3>

        <p>
            Methods may return String values using the return statement.
        </p>

        <h3>Advantages</h3>

        <ul>
            <li>Improves code reusability.</li>
            <li>Supports modular programming.</li>
            <li>Makes programs easier to maintain.</li>
        </ul>

        <div class="success-box">
            Java passes String references by value.
        </div>
    `
},{
    q: "Explain Scanner Class in Java.",
    a: `
        <h2>Scanner Class in Java</h2>

        <div class="info-box">
            Scanner is a predefined class available in java.util package used for taking user input from the keyboard.
        </div>

        <h3>Features</h3>

        <ul>
            <li>Easy input handling.</li>
            <li>Supports multiple data types.</li>
            <li>Can read integers, floats and strings.</li>
        </ul>

        <h3>Common Methods</h3>

        <ul>
            <li>nextInt()</li>
            <li>nextDouble()</li>
            <li>next()</li>
            <li>nextLine()</li>
        </ul>

        <div class="success-box">
            Scanner improves user interaction in Java applications.
        </div>
    `
},{
    q: "Explain Byte Streams and Character Streams in Java.",
    a: `
        <h2>Byte Streams and Character Streams</h2>

        <div class="info-box">
            Streams are used for input and output operations in Java. Java provides Byte Streams and Character Streams.
        </div>

        <table>
            <tr>
                <th>Byte Stream</th>
                <th>Character Stream</th>
            </tr>

            <tr>
                <td>Handles binary data.</td>
                <td>Handles text data.</td>
            </tr>

            <tr>
                <td>Uses InputStream and OutputStream.</td>
                <td>Uses Reader and Writer.</td>
            </tr>

            <tr>
                <td>Suitable for images and files.</td>
                <td>Suitable for text processing.</td>
            </tr>
        </table>

        <h3>Advantages</h3>

        <ul>
            <li>Efficient file handling.</li>
            <li>Supports data transfer.</li>
            <li>Used in networking applications.</li>
        </ul>
    `
},
            ]
        }

    };

    // =========================
    // DOM
    // =========================

    const splashScreen =
        document.getElementById("splash-screen");

    const mainPanel =
        document.getElementById("main-panel");

    const startBtn =
        document.getElementById("startBtn");

    const qnaScroll =
        document.getElementById("qnaScroll");

    const paperName =
        document.getElementById("paperName");

    const searchInput =
        document.getElementById("searchInput");

    const currentQnNum =
        document.getElementById("currentQnNum");

    const totalQnNum =
        document.getElementById("totalQnNum");

    const subjectBtns =
        document.querySelectorAll(".subject-btn");

    // =========================
    // STATE
    // =========================

    let currentSubject = "major3";

    let answerVisible = {};

    // =========================
    // START BUTTON
    // =========================

    startBtn.addEventListener("click",()=>{

        splashScreen.style.display="none";
        mainPanel.style.display="block";

        renderQuestions();

    });

    // =========================
    // SUBJECT SWITCH
    // =========================

    subjectBtns.forEach(btn=>{

        btn.addEventListener("click",()=>{

            currentSubject =
                btn.dataset.subject;

            answerVisible = {};

            subjectBtns.forEach(b=>{
                b.classList.remove("active");
            });

            btn.classList.add("active");

            renderQuestions(
                searchInput.value
            );

        });

    });

    // =========================
    // SEARCH
    // =========================

    searchInput.addEventListener("input",()=>{

        renderQuestions(
            searchInput.value
        );

    });

    // =========================
    // RENDER QUESTIONS
    // =========================

    function renderQuestions(
        searchText=""
    ){

        const data =
            qnaData[currentSubject];

        paperName.textContent =
            data.paperName;

        const filtered =
            data.questions.filter(item=>
                item.q
                .toLowerCase()
                .includes(
                    searchText.toLowerCase()
                )
            );

        totalQnNum.textContent =
            filtered.length;

        currentQnNum.textContent =
            filtered.length ? 1 : 0;

        let html = "";

        filtered.forEach(
        (item,index)=>{

            const isOpen =
                answerVisible[index] || false;

            html += `

            <div class="qn-item"
                 data-index="${index}">

                <div class="qn-row">

                    <div class="qn-text">

                        <span class="qn-label">
                            Q${index+1}
                        </span>

                        ${item.q}

                    </div>

                    <div class="arrow-btn
                        ${isOpen ?
                        "active-arrow" : ""}"

                        data-index="${index}">

                        <i class="fas fa-chevron-down"></i>

                    </div>

                </div>

                <div class="answer-box
                    ${isOpen ?
                    "show-answer" : ""}">

                    <div class="answer-content">
    ${item.a}

    <button
      class="fullscreen-btn"
      data-full="${index}">
      ⛶
    </button>
</div>

                </div>

            </div>

            `;

        });

        qnaScroll.innerHTML = html;

        bindAccordion();
        bindFullscreen();
    }

    // =========================
    // ACCORDION MODE
    // =========================

    function bindAccordion(){

        document
        .querySelectorAll(".arrow-btn")
        .forEach(btn=>{

            btn.addEventListener(
            "click",()=>{

                const index =
                    btn.dataset.index;

                if(
                    answerVisible[index]
                ){

                    answerVisible = {};

                }else{

                    answerVisible = {};

                    answerVisible[index] =
                        true;

                }

                renderQuestions(
                    searchInput.value
                );

                setTimeout(()=>{

                    document
                    .querySelector(
                        '.qn-item[data-index="'+
                        index+'"]'
                    )
                    ?.scrollIntoView({

                        behavior:"smooth",
                        block:"start"

                    });

                },100);

            });

        });

    }

})();
// =========================
// FULL SCREEN SYSTEM
// =========================

const fullscreenModal =
    document.getElementById(
        "fullscreenModal"
    );

const fullscreenBody =
    document.getElementById(
        "fullscreenBody"
    );

const closeFullscreen =
    document.getElementById(
        "closeFullscreen"
    );

// renderQuestions() ke andar
// answer-content ke niche ye add karo:

/*

<button class="fullscreen-btn"
data-full="${index}">
    ⛶ Full Screen
</button>

*/

// renderQuestions() ke baad

function bindFullscreen(){

    document
    .querySelectorAll(
        ".fullscreen-btn"
    )
    .forEach(btn=>{

        btn.addEventListener(
        "click",()=>{

            const index =
                btn.dataset.full;

            const data =
                qnaData[currentSubject]
                .questions[index];

            fullscreenBody.innerHTML = `
                <h1>${data.q}</h1>
                ${data.a}
            `;

            fullscreenModal.style.display =
                "block";

        });

    });

}

closeFullscreen?.addEventListener(
"click",()=>{

    fullscreenModal.style.display =
        "none";

});

// =========================
// IDEA PASSWORD SYSTEM
// =========================

const ideaBtn =
    document.getElementById(
        "ideaBtn"
    );

const passwordModal =
    document.getElementById(
        "passwordModal"
    );

const passwordInput =
    document.getElementById(
        "passwordInput"
    );

const passwordSubmit =
    document.getElementById(
        "passwordSubmit"
    );

const notesPanel =
    document.getElementById(
        "notesPanel"
    );

const closeNotes =
    document.getElementById(
        "closeNotes"
    );

ideaBtn?.addEventListener(
"click",()=>{

    passwordModal.style.display =
        "flex";

});

passwordSubmit?.addEventListener(
"click",()=>{

    const pass =
        passwordInput.value.trim();

    if(pass === "lool"){

        passwordModal.style.display =
            "none";

        notesPanel.style.display =
            "block";

    }else{

        alert(
            "Wrong Password"
        );

    }

});

closeNotes?.addEventListener(
"click",()=>{

    notesPanel.style.display =
        "none";

});

// =========================
// NOTES GENERATOR
// =========================

const notesMajor3 =
    document.getElementById(
        "notesMajor3"
    );

const notesMajor4 =
    document.getElementById(
        "notesMajor4"
    );

const notesContainer =
    document.getElementById(
        "notesContainer"
    );

function buildNotes(subject){

    const data =
        qnaData[subject];

    let html = "";

    let pageCount = 1;

    html += `
        <div class="a4-page">
            <h2>
                ${data.paperName}
            </h2>
    `;

    data.questions.forEach(
    (item,index)=>{

        if(
            index > 0 &&
            index % 5 === 0
        ){

            html += `
                </div>

                <div class="a4-page">
                    <h2>
                        Page ${++pageCount}
                    </h2>
            `;

        }

        html += `
            <div class="note-q">
                Q${index+1}.
                ${item.q}
            </div>

            <div class="note-a">
                ${item.a}
            </div>
        `;

    });

    html += `</div>`;

    notesContainer.innerHTML =
        html;

}

notesMajor3?.addEventListener(
"click",()=>{

    buildNotes("major3");

});

notesMajor4?.addEventListener(
"click",()=>{

    buildNotes("major4");

});

// =========================
// PDF DOWNLOAD
// =========================

const downloadPdfBtn =
    document.getElementById(
        "downloadPdfBtn"
    );

downloadPdfBtn?.addEventListener(
"click",async()=>{

    const target =
        notesContainer;

    const canvas =
        await html2canvas(
            target,
            {
                scale:2
            }
        );

    const imgData =
        canvas.toDataURL(
            "image/png"
        );

    const {
        jsPDF
    } = window.jspdf;

    const pdf =
        new jsPDF(
            "p",
            "mm",
            "a4"
        );

    const width =
        pdf.internal
        .pageSize
        .getWidth();

    const height =
        (canvas.height * width)
        / canvas.width;

    pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        width,
        height
    );

    pdf.save(
        "Semester_Notes.pdf"
    );

});
