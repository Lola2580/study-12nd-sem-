(function() {

    "use strict";

    // =========================
    // DATA - COMPLETE SYLLABUS
    // =========================

    const qnaData = {

        major3: {
            paperName: "Major 3 · DSA",
            questions: [{
                q: "State and explain the pigeonhole principle.",
                a: `
                    <h2>Definition</h2>
                    <div class="info-box">
                        The Pigeonhole Principle states that if <strong>n</strong> items are placed into <strong>m</strong> containers, with <strong>n > m</strong>, then at least one container must contain more than one item.
                    </div>
                    <h3>Simple Explanation</h3>
                    <p>If you have 5 pigeons and 4 pigeonholes, at least one hole must have 2 or more pigeons.</p>
                    <h3>Mathematical Form</h3>
                    <div class="info-box">
                        If <strong>N</strong> objects are distributed among <strong>k</strong> boxes, then at least one box contains at least <strong>⌈N/k⌉</strong> objects.
                    </div>
                    <h3>Applications</h3>
                    <ul>
                        <li>Combinatorics</li>
                        <li>Algorithm Design</li>
                        <li>Graph Theory</li>
                        <li>Hashing Techniques</li>
                    </ul>
                    <div class="success-box">
                        <strong>Example:</strong> Among 13 students, at least 2 share the same birth month.
                    </div>
                `
            },  {
                    q: "What is a Set? Explain types of sets with examples.",
                    a: `
                        <h2>Sets in Mathematics</h2>
                        <div class="info-box">
                            A <strong>set</strong> is a well-defined collection of distinct objects, considered as an object in its own right.
                        </div>
                        <h3>Types of Sets</h3>
                        <table>
                            <tr><th>Type</th><th>Description</th><th>Example</th></tr>
                            <tr><td>Finite Set</td><td>Set with limited number of elements</td><td>A = {1, 2, 3, 4, 5}</td></tr>
                            <tr><td>Infinite Set</td><td>Set with unlimited number of elements</td><td>N = {1, 2, 3, 4, ...}</td></tr>
                            <tr><td>Empty Set</td><td>Set with no elements</td><td>∅ = { }</td></tr>
                            <tr><td>Singleton</td><td>Set with exactly one element</td><td>{5}</td></tr>
                            <tr><td>Equal Sets</td><td>Sets with same elements</td><td>A = {1,2}, B = {2,1}</td></tr>
                            <tr><td>Subset</td><td>All elements of A are in B</td><td>A ⊆ B</td></tr>
                            <tr><td>Power Set</td><td>Set of all subsets</td><td>P(A) = {∅, {1}, {2}, {1,2}}</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Uncountably Infinite Sets:</strong> Sets that cannot be put in one-to-one correspondence with natural numbers. <br>
                            Example: Real numbers (R), Set of all real numbers between 0 and 1.
                        </div>
                        <div class="warning-box">
                            <strong>Note:</strong> Countable sets include Natural numbers, Integers, Rational numbers.
                        </div>
                    `
                },
                {
                    q: "Explain Functions and Relations in Discrete Mathematics.",
                    a: `
                        <h2>Functions and Relations</h2>
                        <div class="info-box">
                            <strong>Relation:</strong> A relation R from set A to set B is a subset of A × B.
                            <br>
                            <strong>Function:</strong> A special relation where each element of A is related to exactly one element of B.
                        </div>
                        <h3>Types of Relations</h3>
                        <ul>
                            <li><strong>Reflexive:</strong> (a,a) ∈ R for all a ∈ A</li>
                            <li><strong>Symmetric:</strong> If (a,b) ∈ R then (b,a) ∈ R</li>
                            <li><strong>Transitive:</strong> If (a,b) ∈ R and (b,c) ∈ R then (a,c) ∈ R</li>
                            <li><strong>Anti-symmetric:</strong> If (a,b) ∈ R and (b,a) ∈ R then a = b</li>
                            <li><strong>Equivalence Relation:</strong> Reflexive + Symmetric + Transitive</li>
                            <li><strong>Partial Order Relation:</strong> Reflexive + Anti-symmetric + Transitive</li>
                        </ul>
                        <div class="success-box">
                            <strong>Function Example:</strong>
                            <pre>f: R → R, f(x) = x²
    Domain: All real numbers
    Range: All non-negative real numbers</pre>
                        </div>
                        <h3>Properties of Binary Relations</h3>
                        <ul>
                            <li><strong>Closure:</strong> A set is closed under an operation if the result is always in the set</li>
                            <li><strong>Transitive Closure:</strong> Smallest transitive relation containing R</li>
                            <li><strong>Reflexive Closure:</strong> Smallest reflexive relation containing R</li>
                        </ul>
                    `
                },
                {
                    q: "State and explain the Pigeonhole Principle with examples.",
                    a: `
                        <h2>Pigeonhole Principle</h2>
                        <div class="info-box">
                            If <strong>n</strong> items are placed into <strong>m</strong> containers, with <strong>n > m</strong>, then at least one container must contain more than one item.
                        </div>
                        <h3>Mathematical Form</h3>
                        <div class="info-box">
                            If <strong>N</strong> objects are distributed among <strong>k</strong> boxes, then at least one box contains at least <strong>⌈N/k⌉</strong> objects.
                        </div>
                        <h3>Examples</h3>
                        <ul>
                            <li><strong>Example 1:</strong> Among 13 students, at least 2 share the same birth month.</li>
                            <li><strong>Example 2:</strong> In any group of 6 people, either 3 know each other or 3 don't know each other.</li>
                            <li><strong>Example 3:</strong> If you pick 5 cards from a deck, at least 2 will be of the same suit.</li>
                        </ul>
                        <div class="success-box">
                            <strong>Applications:</strong>
                            <ul>
                                <li>Combinatorics</li>
                                <li>Algorithm Design</li>
                                <li>Graph Theory</li>
                                <li>Hashing Techniques</li>
                                <li>Data Compression</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Explain Permutations and Combinations with examples.",
                    a: `
                        <h2>Permutations and Combinations</h2>
                        <div class="info-box">
                            <strong>Permutation:</strong> Arrangement of objects in a specific order. Order matters.
                            <br>
                            <strong>Combination:</strong> Selection of objects without considering order. Order doesn't matter.
                        </div>
                        <h3>Formulas</h3>
                        <table>
                            <tr><th>Type</th><th>Formula</th><th>Description</th></tr>
                            <tr><td>Permutation</td><td>P(n,r) = n! / (n-r)!</td><td>Arranging r objects from n</td></tr>
                            <tr><td>Permutation with repetition</td><td>n^r</td><td>Arranging r objects from n with repetition</td></tr>
                            <tr><td>Combination</td><td>C(n,r) = n! / (r!(n-r)!)</td><td>Selecting r objects from n</td></tr>
                            <tr><td>Combination with repetition</td><td>C(n+r-1, r)</td><td>Selecting r objects from n with repetition</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Examples:</strong>
                            <pre>// Permutation: Arranging 3 people from 5
    P(5,3) = 5!/(5-3)! = 5×4×3 = 60
    
    // Combination: Selecting 3 people from 5
    C(5,3) = 5!/(3!×2!) = 10
    
    // Permutation with repetition: 3-digit numbers from 1-9
    9^3 = 729</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Mathematical Induction with examples.",
                    a: `
                        <h2>Mathematical Induction</h2>
                        <div class="info-box">
                            Mathematical Induction is a proof technique used to prove statements about natural numbers.
                        </div>
                        <h3>Steps of Induction</h3>
                        <ul>
                            <li><strong>Base Case:</strong> Prove P(1) is true</li>
                            <li><strong>Induction Hypothesis:</strong> Assume P(k) is true for some k</li>
                            <li><strong>Induction Step:</strong> Prove P(k+1) is true using P(k)</li>
                            <li><strong>Conclusion:</strong> P(n) is true for all n ≥ 1</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example: Prove 1 + 2 + 3 + ... + n = n(n+1)/2</strong>
                            <pre>Base Case: n = 1
    1 = 1(1+1)/2 = 1 ✓
    
    Induction Hypothesis: Assume true for k
    1 + 2 + ... + k = k(k+1)/2
    
    Induction Step: Prove for k+1
    1 + 2 + ... + k + (k+1)
    = k(k+1)/2 + (k+1)
    = (k+1)(k+2)/2 ✓
    
    Therefore, true for all n.</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Principle of Inclusion and Exclusion.",
                    a: `
                        <h2>Principle of Inclusion and Exclusion (PIE)</h2>
                        <div class="info-box">
                            The Principle of Inclusion and Exclusion is a counting technique that counts the number of elements in the union of sets.
                        </div>
                        <h3>Formula</h3>
                        <div class="info-box">
                            |A ∪ B| = |A| + |B| - |A ∩ B|
                            <br>
                            |A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |B∩C| - |A∩C| + |A∩B∩C|
                        </div>
                        <h3>General Formula</h3>
                        <div class="info-box">
                            |A₁ ∪ A₂ ∪ ... ∪ Aₙ| = Σ|Aᵢ| - Σ|Aᵢ∩Aⱼ| + Σ|Aᵢ∩Aⱼ∩Aₖ| - ... + (-1)ⁿ⁻¹|A₁∩...∩Aₙ|
                        </div>
                        <div class="success-box">
                            <strong>Example:</strong>
                            In a class of 100 students:
                            <ul>
                                <li>60 students like Mathematics</li>
                                <li>50 students like Physics</li>
                                <li>30 students like both</li>
                            </ul>
                            Students who like either = 60 + 50 - 30 = 80
                        </div>
                    `
                },

                // ============================================================
                // UNIT 2: Growth of Functions
                // ============================================================
                {
                    q: "Explain Asymptotic Notations with examples.",
                    a: `
                        <h2>Asymptotic Notations</h2>
                        <div class="info-box">
                            Asymptotic notations are used to describe the running time of algorithms as input size grows.
                        </div>
                        <h3>Types of Notations</h3>
                        <table>
                            <tr><th>Notation</th><th>Name</th><th>Definition</th><th>Example</th></tr>
                            <tr><td>O(g(n))</td><td>Big-O</td><td>f(n) ≤ c·g(n) for n ≥ n₀</td><td>n² ∈ O(n³)</td></tr>
                            <tr><td>Ω(g(n))</td><td>Big-Omega</td><td>f(n) ≥ c·g(n) for n ≥ n₀</td><td>n³ ∈ Ω(n²)</td></tr>
                            <tr><td>Θ(g(n))</td><td>Theta</td><td>c₁·g(n) ≤ f(n) ≤ c₂·g(n)</td><td>2n² ∈ Θ(n²)</td></tr>
                            <tr><td>o(g(n))</td><td>Little-o</td><td>f(n)/g(n) → 0</td><td>n ∈ o(n²)</td></tr>
                            <tr><td>ω(g(n))</td><td>Little-omega</td><td>f(n)/g(n) → ∞</td><td>n² ∈ ω(n)</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Common Time Complexities:</strong>
                            <pre>O(1)   - Constant time
    O(log n) - Logarithmic time
    O(n)     - Linear time
    O(n log n) - Linearithmic time
    O(n²)    - Quadratic time
    O(2ⁿ)    - Exponential time
    O(n!)    - Factorial time</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Summation Formulas and Properties.",
                    a: `
                        <h2>Summation Formulas</h2>
                        <div class="info-box">
                            Summations are used to analyze loops and recursive algorithms.
                        </div>
                        <h3>Common Summation Formulas</h3>
                        <div class="success-box">
                            <pre>1. Σ₁ⁿ 1 = n
    2. Σ₁ⁿ i = n(n+1)/2
    3. Σ₁ⁿ i² = n(n+1)(2n+1)/6
    4. Σ₁ⁿ i³ = [n(n+1)/2]²
    5. Σᵢ₌₀ⁿ rⁱ = (rⁿ⁺¹ - 1)/(r - 1)  [r ≠ 1]
    6. Σᵢ₌₁ⁿ 1/i = ln n + γ + εₙ  (Harmonic series)</pre>
                        </div>
                        <h3>Properties</h3>
                        <ul>
                            <li><strong>Linearity:</strong> Σ(c·f(i)) = c·Σf(i)</li>
                            <li><strong>Sum of sums:</strong> Σ(f(i) + g(i)) = Σf(i) + Σg(i)</li>
                            <li><strong>Constant factor:</strong> Σc = n·c</li>
                        </ul>
                        <div class="info-box">
                            <strong>Bounding Summations:</strong>
                            <ul>
                                <li>Use integrals for approximation</li>
                                <li>Σᵢ₌₁ⁿ f(i) ≈ ∫₁ⁿ f(x) dx</li>
                                <li>Used in algorithm analysis</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Explain Approximation by Integrals.",
                    a: `
                        <h2>Approximation by Integrals</h2>
                        <div class="info-box">
                            Integrals are used to approximate summations when exact values are difficult to compute.
                        </div>
                        <h3>Integral Approximation Formulas</h3>
                        <div class="success-box">
                            <pre>// For increasing functions
    ∫₀ⁿ f(x) dx ≤ Σᵢ₌₁ⁿ f(i) ≤ ∫₁ⁿ⁺¹ f(x) dx
    
    // Example: Sum of square roots
    Σᵢ₌₁ⁿ √i ≈ ∫₁ⁿ √x dx = (2/3)n^(3/2)
    
    // Harmonic Series
    Σᵢ₌₁ⁿ 1/i ≈ ln n + γ  [γ = Euler-Mascheroni constant]</pre>
                        </div>
                        <h3>Application in Algorithm Analysis</h3>
                        <ul>
                            <li>Used in divide-and-conquer algorithms</li>
                            <li>Helps in analyzing nested loops</li>
                            <li>Used in recurrence relations</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example:</strong>
                            Sum of first n numbers using integral:
                            <br>
                            Σᵢ₌₁ⁿ i ≈ ∫₁ⁿ x dx = (n² - 1)/2 ≈ n²/2
                        </div>
                    `
                },

                // ============================================================
                // UNIT 3: Recurrence Relations
                // ============================================================
                {
                    q: "Explain Recurrence Relations with examples.",
                    a: `
                        <h2>Recurrence Relations</h2>
                        <div class="info-box">
                            A recurrence relation defines a sequence where each term is defined in terms of previous terms.
                        </div>
                        <h3>Types of Recurrence Relations</h3>
                        <ul>
                            <li><strong>Linear Recurrence:</strong> Each term is a linear combination of previous terms</li>
                            <li><strong>Non-linear Recurrence:</strong> Terms involve non-linear operations</li>
                            <li><strong>Homogeneous:</strong> No constant term</li>
                            <li><strong>Non-homogeneous:</strong> Has constant term</li>
                        </ul>
                        <div class="success-box">
                            <strong>Examples:</strong>
                            <pre>// Fibonacci Sequence
    F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1
    
    // Factorial
    n! = n·(n-1)!, 0! = 1
    
    // Tower of Hanoi
    T(n) = 2T(n-1) + 1, T(1) = 1</pre>
                        </div>
                        <h3>Generating Functions</h3>
                        <div class="info-box">
                            A generating function is a formal power series whose coefficients encode information about a sequence.
                        </div>
                        <div class="success-box">
                            <pre>// For Fibonacci sequence
    F(x) = x/(1 - x - x²)
    
    // For sequence aₙ
    G(x) = Σₙ₌₀^∞ aₙ xⁿ</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Linear Recurrence Relations with Constant Coefficients.",
                    a: `
                        <h2>Linear Recurrence Relations</h2>
                        <div class="info-box">
                            A linear recurrence relation with constant coefficients has the form:
                            <br>
                            aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ
                        </div>
                        <h3>Solution Method</h3>
                        <ul>
                            <li><strong>Characteristic Equation:</strong> rᵏ - c₁rᵏ⁻¹ - c₂rᵏ⁻² - ... - cₖ = 0</li>
                            <li><strong>Find roots:</strong> r₁, r₂, ..., rₖ</li>
                            <li><strong>General Solution:</strong> aₙ = A₁r₁ⁿ + A₂r₂ⁿ + ... + Aₖrₖⁿ</li>
                            <li><strong>Find constants:</strong> Using initial conditions</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example: Fibonacci</strong>
                            <pre>F(n) = F(n-1) + F(n-2)
    Characteristic equation: r² - r - 1 = 0
    Roots: r₁ = (1+√5)/2, r₂ = (1-√5)/2
    General solution: F(n) = A₁r₁ⁿ + A₂r₂ⁿ
    Using F(0)=0, F(1)=1:
    F(n) = (r₁ⁿ - r₂ⁿ)/√5</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Substitution Method for Recurrences.",
                    a: `
                        <h2>Substitution Method</h2>
                        <div class="info-box">
                            The substitution method involves guessing the solution and proving it by induction.
                        </div>
                        <h3>Steps</h3>
                        <ul>
                            <li><strong>Guess:</strong> Assume the solution form</li>
                            <li><strong>Verify:</strong> Substitute into recurrence</li>
                            <li><strong>Prove:</strong> Using induction</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example: T(n) = 2T(n/2) + n</strong>
                            <pre>Guess: T(n) = O(n log n)
    Assume T(k) ≤ c·k log k for k < n
    T(n) = 2T(n/2) + n
    ≤ 2·c·(n/2)·log(n/2) + n
    = c·n·(log n - 1) + n
    = c·n·log n - c·n + n
    ≤ c·n·log n  [if c ≥ 1]
    Therefore, T(n) = O(n log n)</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Recursion Tree Method.",
                    a: `
                        <h2>Recursion Tree Method</h2>
                        <div class="info-box">
                            The recursion tree method visualizes the recurrence as a tree, where each node represents the cost of a subproblem.
                        </div>
                        <h3>Steps</h3>
                        <ul>
                            <li><strong>Draw tree:</strong> Expand each level</li>
                            <li><strong>Sum costs:</strong> Add costs at each level</li>
                            <li><strong>Total:</strong> Sum of all levels</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example: T(n) = 2T(n/2) + n</strong>
                            <pre>Level 0: n
    Level 1: n/2 + n/2 = n
    Level 2: n/4 × 4 = n
    ...
    Level log n: 1 × n = n
    Total: n·(log n + 1) = O(n log n)</pre>
                        </div>
                        <div class="success-box">
                            <strong>Example: T(n) = T(n/3) + T(2n/3) + n</strong>
                            <pre>Level 0: n
    Level 1: n/3 + 2n/3 = n
    Level 2: (n/9 + 2n/9) + (2n/9 + 4n/9) = n
    Total: O(n log n)</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Master Theorem with examples.",
                    a: `
                        <h2>Master Theorem</h2>
                        <div class="info-box">
                            The Master Theorem provides a method to solve recurrence relations of the form:
                            <br>
                            <strong>T(n) = aT(n/b) + f(n)</strong>
                            <br>
                            where a ≥ 1, b > 1, and f(n) is asymptotically positive.
                        </div>
                        <h3>Three Cases</h3>
                        <table>
                            <tr><th>Case</th><th>Condition</th><th>Solution</th></tr>
                            <tr><td>Case 1</td><td>f(n) = O(n^(log_b a - ε))</td><td>T(n) = Θ(n^(log_b a))</td></tr>
                            <tr><td>Case 2</td><td>f(n) = Θ(n^(log_b a) · log^k n)</td><td>T(n) = Θ(n^(log_b a) · log^(k+1) n)</td></tr>
                            <tr><td>Case 3</td><td>f(n) = Ω(n^(log_b a + ε)) and af(n/b) ≤ cf(n)</td><td>T(n) = Θ(f(n))</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Examples:</strong>
                            <pre>1. T(n) = 2T(n/2) + n
    a=2, b=2, log_b a = 1, f(n)=n
    Case 2: T(n) = Θ(n log n)

    2. T(n) = 4T(n/2) + n
    a=4, b=2, log_b a = 2, f(n)=n
    Case 1: T(n) = Θ(n²)

    3. T(n) = T(n/2) + 1
    a=1, b=2, log_b a = 0, f(n)=1
    Case 2: T(n) = Θ(log n)</pre>
                        </div>
                    `
                },

                // ============================================================
                // UNIT 4: Graph Theory
                // ============================================================
                {
                    q: "Explain Basic Terminology of Graph Theory.",
                    a: `
                        <h2>Graph Theory Terminology</h2>
                        <div class="info-box">
                            A <strong>graph</strong> G = (V, E) consists of a set of vertices V and a set of edges E.
                        </div>
                        <h3>Basic Terms</h3>
                        <table>
                            <tr><th>Term</th><th>Definition</th></tr>
                            <tr><td>Vertex</td><td>A node in the graph</td></tr>
                            <tr><td>Edge</td><td>A connection between two vertices</td></tr>
                            <tr><td>Degree</td><td>Number of edges incident to a vertex</td></tr>
                            <tr><td>Path</td><td>Sequence of vertices connected by edges</td></tr>
                            <tr><td>Cycle</td><td>Path that starts and ends at same vertex</td></tr>
                            <tr><td>Connected Graph</td><td>Path exists between any two vertices</td></tr>
                            <tr><td>Complete Graph</td><td>Every pair of vertices is connected</td></tr>
                            <tr><td>Bipartite Graph</td><td>Vertices can be divided into two sets with no edges within sets</td></tr>
                        </table>
                        <h3>Types of Graphs</h3>
                        <ul>
                            <li><strong>Undirected Graph:</strong> Edges have no direction</li>
                            <li><strong>Directed Graph:</strong> Edges have direction</li>
                            <li><strong>Weighted Graph:</strong> Edges have weights</li>
                            <li><strong>Multigraph:</strong> Multiple edges between same vertices</li>
                            <li><strong>Simple Graph:</strong> No loops or multiple edges</li>
                        </ul>
                    `
                },
                {
                    q: "Explain Graph Representation in Data Structures.",
                    a: `
                        <h2>Graph Representation</h2>
                        <div class="info-box">
                            Graphs can be represented in various ways depending on the application.
                        </div>
                        <h3>Representation Methods</h3>
                        <table>
                            <tr><th>Method</th><th>Description</th><th>Space Complexity</th></tr>
                            <tr><td>Adjacency Matrix</td><td>2D array of size V×V</td><td>O(V²)</td></tr>
                            <tr><td>Adjacency List</td><td>Array of linked lists</td><td>O(V + E)</td></tr>
                            <tr><td>Edge List</td><td>List of edges</td><td>O(E)</td></tr>
                            <tr><td>Incidence Matrix</td><td>V×E matrix</td><td>O(V×E)</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Adjacency Matrix Example:</strong>
                            <pre>// For graph with 4 vertices
    int[][] adj = {
        {0, 1, 1, 0},
        {1, 0, 0, 1},
        {1, 0, 0, 1},
        {0, 1, 1, 0}
    };</pre>
                        </div>
                        <div class="success-box">
                            <strong>Adjacency List Example:</strong>
                            <pre>// Using ArrayList
    ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
    adj.get(0).add(1);
    adj.get(0).add(2);
    adj.get(1).add(0);
    adj.get(1).add(3);</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Graph Isomorphism.",
                    a: `
                        <h2>Graph Isomorphism</h2>
                        <div class="info-box">
                            Two graphs G and H are isomorphic if there exists a bijection between their vertex sets that preserves adjacency.
                        </div>
                        <h3>Properties of Isomorphic Graphs</h3>
                        <ul>
                            <li>Same number of vertices</li>
                            <li>Same number of edges</li>
                            <li>Same degree sequence</li>
                            <li>Same number of cycles</li>
                            <li>Same connectivity properties</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example:</strong>
                            <pre>Graph G: vertices {1,2,3,4}, edges {(1,2),(2,3),(3,4)}
    Graph H: vertices {a,b,c,d}, edges {(a,b),(b,c),(c,d)}
    
    These graphs are isomorphic because:
    1↔a, 2↔b, 3↔c, 4↔d</pre>
                        </div>
                        <div class="warning-box">
                            <strong>Note:</strong> Determining if two graphs are isomorphic is a computationally hard problem (NP-intermediate).
                        </div>
                    `
                },
                {
                    q: "Explain Connectivity in Graphs.",
                    a: `
                        <h2>Connectivity in Graphs</h2>
                        <div class="info-box">
                            Connectivity refers to the ability to reach one vertex from another through paths.
                        </div>
                        <h3>Types of Connectivity</h3>
                        <ul>
                            <li><strong>Connected Graph:</strong> Path exists between any two vertices</li>
                            <li><strong>Disconnected Graph:</strong> At least one pair of vertices with no path</li>
                            <li><strong>Strongly Connected:</strong> Directed graph where every vertex is reachable from every other vertex</li>
                            <li><strong>Weakly Connected:</strong> Underlying undirected graph is connected</li>
                        </ul>
                        <h3>Connectivity Concepts</h3>
                        <ul>
                            <li><strong>Articulation Point:</strong> Removing it disconnects the graph</li>
                            <li><strong>Bridge:</strong> Removing it disconnects the graph</li>
                            <li><strong>Connected Components:</strong> Maximal connected subgraphs</li>
                        </ul>
                        <div class="success-box">
                            <strong>Finding Connectivity (DFS):</strong>
                            <pre>void DFS(int v) {
        visited[v] = true;
        for (int u : adj[v]) {
            if (!visited[u]) DFS(u);
        }
    }
    // Check if all vertices visited</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Euler and Hamiltonian Paths and Circuits.",
                    a: `
                        <h2>Euler and Hamiltonian Paths</h2>
                        <div class="info-box">
                            <strong>Euler Path:</strong> Traverses every edge exactly once.
                            <br>
                            <strong>Euler Circuit:</strong> Traverses every edge exactly once and returns to start.
                            <br>
                            <strong>Hamiltonian Path:</strong> Visits every vertex exactly once.
                            <br>
                            <strong>Hamiltonian Circuit:</strong> Visits every vertex exactly once and returns to start.
                        </div>
                        <h3>Euler Conditions</h3>
                        <table>
                            <tr><th>Condition</th><th>Euler Path</th><th>Euler Circuit</th></tr>
                            <tr><td>All vertices even degree</td><td>No</td><td>Yes</td></tr>
                            <tr><td>Exactly 2 vertices odd degree</td><td>Yes</td><td>No</td></tr>
                            <tr><td>All vertices connected</td><td>Yes</td><td>Yes</td></tr>
                        </table>
                        <h3>Hamiltonian Conditions</h3>
                        <ul>
                            <li>No simple necessary and sufficient condition</li>
                            <li>Dirac's Theorem: If degree of every vertex ≥ n/2, Hamiltonian cycle exists</li>
                            <li>Ore's Theorem: If sum of degrees of non-adjacent vertices ≥ n, Hamiltonian cycle exists</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example - Euler Circuit:</strong>
                            <pre>// Graph with vertices all even degree
    A connected graph where every vertex has even degree
    Example: Complete graph K5 has Euler Circuit</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Planar Graphs and Graph Coloring.",
                    a: `
                        <h2>Planar Graphs and Graph Coloring</h2>
                        <div class="info-box">
                            <strong>Planar Graph:</strong> A graph that can be drawn on a plane without crossing edges.
                            <br>
                            <strong>Graph Coloring:</strong> Assigning colors to vertices such that adjacent vertices have different colors.
                        </div>
                        <h3>Planar Graph Properties</h3>
                        <ul>
                            <li><strong>Euler's Formula:</strong> V - E + F = 2 (for connected planar graphs)</li>
                            <li><strong>Kuratowski's Theorem:</strong> A graph is non-planar iff it contains K₅ or K₃,₃ as a minor</li>
                            <li><strong>Four Color Theorem:</strong> Every planar graph can be colored with 4 colors</li>
                        </ul>
                        <h3>Graph Coloring Concepts</h3>
                        <ul>
                            <li><strong>Chromatic Number:</strong> Minimum number of colors needed</li>
                            <li><strong>Chromatic Polynomial:</strong> Number of ways to color with k colors</li>
                            <li><strong>Edge Coloring:</strong> Coloring edges so adjacent edges have different colors</li>
                            <li><strong>Face Coloring:</strong> Coloring faces of a planar graph</li>
                        </ul>
                        <div class="success-box">
                            <strong>Applications:</strong>
                            <ul>
                                <li>Map coloring (Four Color Theorem)</li>
                                <li>Schedule planning</li>
                                <li>Register allocation in compilers</li>
                                <li>Frequency assignment in networks</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Explain Trees and Their Properties.",
                    a: `
                        <h2>Trees in Graph Theory</h2>
                        <div class="info-box">
                            A <strong>tree</strong> is a connected acyclic undirected graph.
                        </div>
                        <h3>Properties of Trees</h3>
                        <ul>
                            <li>A tree with n vertices has exactly (n-1) edges</li>
                            <li>There is exactly one path between any two vertices</li>
                            <li>Every edge is a bridge</li>
                            <li>A tree is bipartite</li>
                            <li>Removing any edge disconnects the tree</li>
                        </ul>
                        <h3>Types of Trees</h3>
                        <ul>
                            <li><strong>Binary Tree:</strong> Each node has at most 2 children</li>
                            <li><strong>Spanning Tree:</strong> Subgraph that is a tree and includes all vertices</li>
                            <li><strong>Minimum Spanning Tree (MST):</strong> Spanning tree with minimum total weight</li>
                            <li><strong>Rooted Tree:</strong> Tree with a designated root</li>
                        </ul>
                        <div class="success-box">
                            <strong>Properties Formulas:</strong>
                            <pre>1. A tree with n vertices has (n-1) edges
    2. Σ(degree) = 2(n-1)
    3. Number of leaves in a binary tree = (n+1)/2
    4. Height of perfect binary tree with n nodes = log₂(n+1) - 1</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Spanning Trees and MST.",
                    a: `
                        <h2>Spanning Trees and MST</h2>
                        <div class="info-box">
                            A <strong>spanning tree</strong> of a graph G is a subgraph that is a tree and includes all vertices of G.
                            <br>
                            A <strong>Minimum Spanning Tree (MST)</strong> is a spanning tree with minimum total weight.
                        </div>
                        <h3>MST Algorithms</h3>
                        <table>
                            <tr><th>Algorithm</th><th>Approach</th><th>Time Complexity</th></tr>
                            <tr><td>Prim's Algorithm</td><td>Greedy, grows from a vertex</td><td>O(E log V)</td></tr>
                            <tr><td>Kruskal's Algorithm</td><td>Greedy, sorts edges by weight</td><td>O(E log E)</td></tr>
                            <tr><td>Boruvka's Algorithm</td><td>Parallel, adds minimum edges</td><td>O(E log V)</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Kruskal's Algorithm:</strong>
                            <pre>1. Sort all edges by weight
    2. Initialize empty MST
    3. For each edge in sorted order:
        If adding edge doesn't create cycle:
            Add to MST
    4. Return MST</pre>
                        </div>
                        <div class="success-box">
                            <strong>Prim's Algorithm:</strong>
                            <pre>1. Start with any vertex
    2. While not all vertices in MST:
        Add minimum weight edge connecting MST to outside
    3. Return MST</pre>
                        </div>
                    `
                },
                {
                    q: "Explain BFS (Breadth-First Search) Graph Traversal.",
                    a: `
                        <h2>Breadth-First Search (BFS)</h2>
                        <div class="info-box">
                            BFS is a graph traversal algorithm that explores all vertices at the present depth before moving to the next depth level.
                        </div>
                        <h3>BFS Algorithm</h3>
                        <div class="success-box">
                            <pre>BFS(Graph G, start vertex s):
        1. Mark s as visited and enqueue s
        2. While queue is not empty:
            a. Dequeue a vertex v
            b. For each neighbor u of v:
                If u is not visited:
                    Mark u as visited
                    Enqueue u</pre>
                        </div>
                        <h3>Characteristics</h3>
                        <ul>
                            <li><strong>Time Complexity:</strong> O(V + E)</li>
                            <li><strong>Space Complexity:</strong> O(V)</li>
                            <li>Finds shortest path in unweighted graphs</li>
                            <li>Uses a queue (FIFO)</li>
                            <li>Explores level by level</li>
                        </ul>
                        <div class="success-box">
                            <strong>Applications:</strong>
                            <ul>
                                <li>Shortest path in unweighted graphs</li>
                                <li>Web crawling</li>
                                <li>Social network analysis</li>
                                <li>GPS navigation</li>
                                <li>Finding connected components</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Explain DFS (Depth-First Search) Graph Traversal.",
                    a: `
                        <h2>Depth-First Search (DFS)</h2>
                        <div class="info-box">
                            DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking.
                        </div>
                        <h3>DFS Algorithm</h3>
                        <div class="success-box">
                            <pre>DFS(Graph G, start vertex s):
        1. Mark s as visited
        2. For each neighbor u of s:
            If u is not visited:
                DFS(G, u)
    
    // Iterative version using stack
    DFS_Iterative(Graph G, start vertex s):
        1. Push s to stack
        2. While stack is not empty:
            a. Pop vertex v
            b. If v not visited:
                Mark v as visited
                Push all unvisited neighbors</pre>
                        </div>
                        <h3>Characteristics</h3>
                        <ul>
                            <li><strong>Time Complexity:</strong> O(V + E)</li>
                            <li><strong>Space Complexity:</strong> O(V)</li>
                            <li>Uses recursion or stack (LIFO)</li>
                            <li>Explores deep before wide</li>
                            <li>Useful for finding cycles</li>
                        </ul>
                        <div class="success-box">
                            <strong>Applications:</strong>
                            <ul>
                                <li>Cycle detection</li>
                                <li>Topological sorting</li>
                                <li>Maze solving</li>
                                <li>Finding connected components</li>
                                <li>Strongly connected components (Kosaraju's algorithm)</li>
                                <li>Path finding</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Compare BFS and DFS Graph Traversals.",
                    a: `
                        <h2>BFS vs DFS Comparison</h2>
                        <div class="info-box">
                            Both BFS and DFS are graph traversal algorithms with different characteristics and use cases.
                        </div>
                        <h3>Comparison Table</h3>
                        <table>
                            <tr><th>Feature</th><th>BFS</th><th>DFS</th></tr>
                            <tr><td>Data Structure</td><td>Queue (FIFO)</td><td>Stack (LIFO) / Recursion</td></tr>
                            <tr><td>Traversal Pattern</td><td>Level by level</td><td>Depth-first</td></tr>
                            <tr><td>Shortest Path</td><td>Finds in unweighted graphs</td><td>Does not guarantee</td></tr>
                            <tr><td>Space Complexity</td><td>O(V)</td><td>O(V)</td></tr>
                            <tr><td>Time Complexity</td><td>O(V + E)</td><td>O(V + E)</td></tr>
                            <tr><td>Memory Usage</td><td>May use more memory</td><td>Less memory</td></tr>
                            <tr><td>Use Cases</td><td>Shortest path, Web crawling</td><td>Cycle detection, Topological sort</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>When to use:</strong>
                            <ul>
                                <li><strong>BFS:</strong> When distance/shortest path matters</li>
                                <li><strong>DFS:</strong> When exploring all possibilities, memory is limited</li>
                            </ul>
                        </div>
                    `
                },

                // ============================================================
                // UNIT 5: Propositional Logic
                // ============================================================
                {
                    q: "Explain Logical Connectives in Propositional Logic.",
                    a: `
                        <h2>Logical Connectives</h2>
                        <div class="info-box">
                            Logical connectives are symbols used to combine propositions to form compound propositions.
                        </div>
                        <h3>Types of Connectives</h3>
                        <table>
                            <tr><th>Connective</th><th>Symbol</th><th>Meaning</th><th>Truth Table</th></tr>
                            <tr><td>Negation</td><td>¬</td><td>Not</td><td>¬T = F, ¬F = T</td></tr>
                            <tr><td>Conjunction</td><td>∧</td><td>And</td><td>T∧T=T, T∧F=F, F∧T=F, F∧F=F</td></tr>
                            <tr><td>Disjunction</td><td>∨</td><td>Or</td><td>T∨T=T, T∨F=T, F∨T=T, F∨F=F</td></tr>
                            <tr><td>Implication</td><td>→</td><td>If...then</td><td>T→T=T, T→F=F, F→T=T, F→F=T</td></tr>
                            <tr><td>Biconditional</td><td>↔</td><td>If and only if</td><td>T↔T=T, T↔F=F, F↔T=F, F↔F=T</td></tr>
                            <tr><td>Exclusive Or</td><td>⊕</td><td>XOR</td><td>T⊕T=F, T⊕F=T, F⊕T=T, F⊕F=F</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Example:</strong>
                            <pre>Let P = "It is raining"
    Let Q = "I have an umbrella"
    
    ¬P = "It is not raining"
    P ∧ Q = "It is raining and I have an umbrella"
    P → Q = "If it is raining, then I have an umbrella"</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Well-Formed Formulas and Tautologies.",
                    a: `
                        <h2>Well-Formed Formulas and Tautologies</h2>
                        <div class="info-box">
                            A <strong>well-formed formula (WFF)</strong> is a valid expression in propositional logic. A <strong>tautology</strong> is a formula that is always true.
                        </div>
                        <h3>Rules for WFF</h3>
                        <ul>
                            <li>Any propositional variable is a WFF</li>
                            <li>If A is a WFF, then ¬A is a WFF</li>
                            <li>If A and B are WFFs, then (A∧B), (A∨B), (A→B), (A↔B) are WFFs</li>
                            <li>Nothing else is a WFF</li>
                        </ul>
                        <div class="success-box">
                            <strong>Examples:</strong>
                            <pre>WFFs: P, ¬P, (P∧Q), (P→Q), ((P∧Q)→R)
    Not WFFs: P∧, →Q, P∧Q→</pre>
                        </div>
                        <h3>Tautologies</h3>
                        <div class="info-box">
                            A tautology is a formula that is true for all possible truth assignments.
                        </div>
                        <div class="success-box">
                            <strong>Common Tautologies:</strong>
                            <pre>1. P ∨ ¬P  (Law of Excluded Middle)
    2. P → (Q → P)
    3. (P → Q) ↔ (¬Q → ¬P)  (Contraposition)
    4. ((P → Q) ∧ P) → Q  (Modus Ponens)
    5. P ↔ P</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Logical Equivalences and Inference Theory.",
                    a: `
                        <h2>Logical Equivalences and Inference Theory</h2>
                        <div class="info-box">
                            <strong>Logical Equivalence:</strong> Two formulas are equivalent if they have the same truth value for all assignments.
                            <br>
                            <strong>Inference:</strong> Deriving conclusions from premises using valid rules.
                        </div>
                        <h3>Important Equivalences</h3>
                        <table>
                            <tr><th>Law</th><th>Formula</th></tr>
                            <tr><td>Double Negation</td><td>¬¬P ≡ P</td></tr>
                            <tr><td>Commutative</td><td>P∧Q ≡ Q∧P, P∨Q ≡ Q∨P</td></tr>
                            <tr><td>Associative</td><td>(P∧Q)∧R ≡ P∧(Q∧R), (P∨Q)∨R ≡ P∨(Q∨R)</td></tr>
                            <tr><td>Distributive</td><td>P∧(Q∨R) ≡ (P∧Q)∨(P∧R), P∨(Q∧R) ≡ (P∨Q)∧(P∨R)</td></tr>
                            <tr><td>De Morgan's</td><td>¬(P∧Q) ≡ ¬P∨¬Q, ¬(P∨Q) ≡ ¬P∧¬Q</td></tr>
                            <tr><td>Implication</td><td>P→Q ≡ ¬P∨Q</td></tr>
                            <tr><td>Contrapositive</td><td>P→Q ≡ ¬Q→¬P</td></tr>
                        </table>
                        <h3>Rules of Inference</h3>
                        <table>
                            <tr><th>Rule</th><th>Premises</th><th>Conclusion</th></tr>
                            <tr><td>Modus Ponens</td><td>P, P→Q</td><td>Q</td></tr>
                            <tr><td>Modus Tollens</td><td>¬Q, P→Q</td><td>¬P</td></tr>
                            <tr><td>Hypothetical Syllogism</td><td>P→Q, Q→R</td><td>P→R</td></tr>
                            <tr><td>Disjunctive Syllogism</td><td>P∨Q, ¬P</td><td>Q</td></tr>
                            <tr><td>Addition</td><td>P</td><td>P∨Q</td></tr>
                            <tr><td>Simplification</td><td>P∧Q</td><td>P</td></tr>
                            <tr><td>Conjunction</td><td>P, Q</td><td>P∧Q</td></tr>
                        </table>
                    `
                },
                {
                    q: "Explain Quantifiers in Logic.",
                    a: `
                        <h2>Quantifiers in Logic</h2>
                        <div class="info-box">
                            Quantifiers are symbols used to specify the quantity of elements in a domain that satisfy a property.
                        </div>
                        <h3>Types of Quantifiers</h3>
                        <table>
                            <tr><th>Quantifier</th><th>Symbol</th><th>Meaning</th><th>Example</th></tr>
                            <tr><td>Universal</td><td>∀</td><td>"For all"</td><td>∀x P(x): P is true for all x</td></tr>
                            <tr><td>Existential</td><td>∃</td><td>"There exists"</td><td>∃x P(x): P is true for some x</td></tr>
                            <tr><td>Unique Existential</td><td>∃!</td><td>"There exists exactly one"</td><td>∃!x P(x): Exactly one x satisfies P</td></tr>
                        </table>
                        <h3>Quantifier Rules</h3>
                        <div class="success-box">
                            <pre>1. ¬∀x P(x) ≡ ∃x ¬P(x)
    2. ¬∃x P(x) ≡ ∀x ¬P(x)
    3. ∀x∀y P(x,y) ≡ ∀y∀x P(x,y)
    4. ∃x∃y P(x,y) ≡ ∃y∃x P(x,y)
    5. ∀x(P(x) ∧ Q(x)) ≡ ∀x P(x) ∧ ∀x Q(x)
    6. ∃x(P(x) ∨ Q(x)) ≡ ∃x P(x) ∨ ∃x Q(x)</pre>
                        </div>
                        <div class="success-box">
                            <strong>Examples:</strong>
                            <pre>// Universal quantifier
    ∀x (x > 0 → x² > 0)  // For all x, if x > 0 then x² > 0
    
    // Existential quantifier
    ∃x (x² = 4)  // There exists x such that x² = 4
    
    // Combined quantifiers
    ∀x ∃y (y > x)  // For every x, there exists y greater than x
    ∃y ∀x (y > x)  // There exists y greater than all x</pre>
                        </div>
                    `
                }]
        },

        major4: {
            paperName: "Major 4 · JAVA",
            questions: [
                // ============================================================
                // UNIT 1: Introduction to Java
                // ============================================================
                {
                    q: "What is Java? Explain its features.",
                    a: `
                        <h2>Java Programming Language</h2>
                        <div class="info-box">
                            Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). It follows <strong>"Write Once, Run Anywhere"</strong> (WORA).
                        </div>
                        <h3>Key Features of Java</h3>
                        <ul>
                            <li><strong>Platform Independent</strong> - Runs on any JVM</li>
                            <li><strong>Object-Oriented</strong> - Supports OOP principles</li>
                            <li><strong>Robust</strong> - Strong memory management, exception handling</li>
                            <li><strong>Secure</strong> - No explicit pointers, bytecode verification</li>
                            <li><strong>Multithreaded</strong> - Supports concurrent execution</li>
                            <li><strong>Portable</strong> - Same bytecode runs everywhere</li>
                            <li><strong>High Performance</strong> - Just-in-time compilation</li>
                        </ul>
                        <div class="success-box">
                            <strong>First Java Program:</strong>
                            <pre>public class Hello {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Java Architecture (JDK, JRE, JVM).",
                    a: `
                        <h2>Java Architecture</h2>
                        <div class="info-box">
                            Java Architecture consists of three main components: <strong>JDK</strong>, <strong>JRE</strong>, and <strong>JVM</strong>.
                        </div>
                        <h3>Component Breakdown</h3>
                        <table>
                            <tr><th>Component</th><th>Description</th></tr>
                            <tr><td><strong>JVM</strong></td><td>Executes bytecode, provides platform independence</td></tr>
                            <tr><td><strong>JRE</strong></td><td>JVM + Libraries, runs Java applications</td></tr>
                            <tr><td><strong>JDK</strong></td><td>JRE + Development Tools, compiles Java code</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Relationship:</strong> JDK ⊃ JRE ⊃ JVM
                        </div>
                        <h3>JVM Architecture</h3>
                        <ul>
                            <li><strong>Class Loader</strong> - Loads .class files</li>
                            <li><strong>Runtime Data Area</strong> - Stores data (Method Area, Heap, Stack, PC Registers)</li>
                            <li><strong>Execution Engine</strong> - Executes bytecode</li>
                            <li><strong>Garbage Collector</strong> - Manages memory automatically</li>
                        </ul>
                        <div class="warning-box">
                            <strong>Note:</strong> JVM is platform-dependent, but Java bytecode is platform-independent.
                        </div>
                    `
                },
                {
                    q: "What are Variables and Constants in Java?",
                    a: `
                        <h2>Variables & Constants</h2>
                        <div class="info-box">
                            <strong>Variables</strong> are containers for storing data values during program execution.
                        </div>
                        <h3>Types of Variables</h3>
                        <ul>
                            <li><strong>Local</strong> - Declared inside methods, accessible only within that method</li>
                            <li><strong>Instance</strong> - Declared inside class, outside methods, belongs to object</li>
                            <li><strong>Static</strong> - Belongs to class, shared by all objects</li>
                        </ul>
                        <div class="success-box">
                            <strong>Example:</strong>
                            <pre>int age = 25;          // Local variable
    String name = "John";   // Instance variable
    static int count = 10;   // Static variable</pre>
                        </div>
                        <h3>Constants</h3>
                        <div class="info-box">
                            Constants are values that cannot be changed once assigned. Declared using the <strong>final</strong> keyword.
                        </div>
                        <div class="success-box">
                            <pre>final double PI = 3.14159;
    final int MAX = 100;</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Keywords and Data Types in Java.",
                    a: `
                        <h2>Keywords & Data Types</h2>
                        <div class="info-box">
                            <strong>Keywords</strong> are reserved words that have predefined meanings and cannot be used as identifiers.
                        </div>
                        <h3>Common Keywords</h3>
                        <ul>
                            <li>class, public, static, void, if, else, for, while, do, switch, case, break, continue, return</li>
                            <li>int, double, boolean, char, byte, short, long, float</li>
                            <li>new, this, super, final, abstract, interface, implements, extends</li>
                        </ul>
                        <h3>Data Types</h3>
                        <table>
                            <tr><th>Type</th><th>Size</th><th>Range</th></tr>
                            <tr><td>byte</td><td>1 byte</td><td>-128 to 127</td></tr>
                            <tr><td>short</td><td>2 bytes</td><td>-32,768 to 32,767</td></tr>
                            <tr><td>int</td><td>4 bytes</td><td>-2³¹ to 2³¹-1</td></tr>
                            <tr><td>long</td><td>8 bytes</td><td>-2⁶³ to 2⁶³-1</td></tr>
                            <tr><td>float</td><td>4 bytes</td><td>±3.4e-38 to ±3.4e+38</td></tr>
                            <tr><td>double</td><td>8 bytes</td><td>±4.9e-324 to ±1.8e+308</td></tr>
                            <tr><td>boolean</td><td>1 bit</td><td>true or false</td></tr>
                            <tr><td>char</td><td>2 bytes</td><td>0 to 65,535 (Unicode)</td></tr>
                        </table>
                    `
                },
                {
                    q: "Explain Operators in Java with examples.",
                    a: `
                        <h2>Operators in Java</h2>
                        <div class="info-box">
                            Operators are special symbols used to perform operations on variables and values.
                        </div>
                        <h3>Types of Operators</h3>
                        <table>
                            <tr><th>Category</th><th>Operators</th><th>Example</th></tr>
                            <tr><td>Arithmetic</td><td>+, -, *, /, %</td><td>a + b, a % b</td></tr>
                            <tr><td>Relational</td><td>==, !=, >, <, >=, <=</td><td>a > b, a == b</td></tr>
                            <tr><td>Logical</td><td>&&, ||, !</td><td>a && b, !flag</td></tr>
                            <tr><td>Bitwise</td><td>&, |, ^, ~, <<, >></td><td>a & b, a << 2</td></tr>
                            <tr><td>Assignment</td><td>=, +=, -=, *=, /=</td><td>a += 5, b *= 2</td></tr>
                            <tr><td>Unary</td><td>++, --</td><td>a++, --b</td></tr>
                            <tr><td>Ternary</td><td>? :</td><td>(a > b) ? a : b</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Example:</strong>
                            <pre>int a = 10, b = 20;
    int sum = a + b;           // 30
    boolean isGreater = a > b; // false
    int bitwise = a & b;       // 0
    int max = (a > b) ? a : b; // 20</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Conditional Statements in Java.",
                    a: `
                        <h2>Conditional Statements</h2>
                        <div class="info-box">
                            Conditional statements are used to make decisions based on conditions. They control the flow of program execution.
                        </div>
                        <h3>Types of Conditional Statements</h3>
                        <ul>
                            <li><strong>if</strong> - Executes block if condition is true</li>
                            <li><strong>if-else</strong> - Executes one of two blocks</li>
                            <li><strong>if-else-if ladder</strong> - Multiple conditions</li>
                            <li><strong>switch</strong> - Multi-branch selection</li>
                            <li><strong>Nested if</strong> - if inside another if</li>
                        </ul>
                        <div class="success-box">
                            <pre>// if-else example
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "F";
    }
    // switch example
    switch(day) {
        case 1: System.out.println("Monday"); break;
        case 2: System.out.println("Tuesday"); break;
        default: System.out.println("Invalid day");
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Loops in Java.",
                    a: `
                        <h2>Loops in Java</h2>
                        <div class="info-box">
                            Loops are used to execute a block of code repeatedly until a condition becomes false.
                        </div>
                        <h3>Types of Loops</h3>
                        <table>
                            <tr><th>Loop</th><th>When to Use</th><th>Syntax</th></tr>
                            <tr><td>for</td><td>Fixed number of iterations</td><td>for(init; condition; update){ }</td></tr>
                            <tr><td>while</td><td>Condition-based iteration</td><td>while(condition){ }</td></tr>
                            <tr><td>do-while</td><td>Executes at least once</td><td>do{ }while(condition);</td></tr>
                        </table>
                        <div class="success-box">
                            <pre>// For loop - prints 0 to 4
    for (int i = 0; i < 5; i++) {
        System.out.println(i);
    }
    // While loop
    int i = 0;
    while (i < 5) {
        System.out.println(i);
        i++;
    }
    // Do-while loop
    int j = 0;
    do {
        System.out.println(j);
        j++;
    } while (j < 5);</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Nesting in Java.",
                    a: `
                        <h2>Nesting in Java</h2>
                        <div class="info-box">
                            Nesting means placing one control structure inside another control structure.
                        </div>
                        <h3>Types of Nesting</h3>
                        <ul>
                            <li><strong>Nested if</strong> - if statement inside another if</li>
                            <li><strong>Nested Loop</strong> - Loop inside another loop</li>
                            <li><strong>Nested Switch</strong> - Switch inside another switch</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Nested if
    if (age >= 18) {
        if (hasLicense) {
            System.out.println("Can drive");
        } else {
            System.out.println("Need license");
        }
    }
    // Nested Loop - Multiplication Table
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            System.out.print(i * j + " ");
        }
        System.out.println();
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Methods in Java.",
                    a: `
                        <h2>Methods in Java</h2>
                        <div class="info-box">
                            A method is a block of code that performs a specific task. Methods enable code reusability and modular programming.
                        </div>
                        <h3>Method Components</h3>
                        <ul>
                            <li><strong>Modifier</strong> - public, private, static, etc.</li>
                            <li><strong>Return Type</strong> - void or data type</li>
                            <li><strong>Method Name</strong> - CamelCase convention</li>
                            <li><strong>Parameters</strong> - Input values</li>
                            <li><strong>Body</strong> - Code block</li>
                        </ul>
                        <div class="success-box">
                            <strong>Syntax:</strong>
                            <pre>public static int add(int a, int b) {
        return a + b;
    }</pre>
                        </div>
                        <h3>Method Types</h3>
                        <ul>
                            <li><strong>Predefined</strong> - Built-in methods (Math.sqrt(), System.out.println())</li>
                            <li><strong>User-defined</strong> - Created by the programmer</li>
                        </ul>
                        <h3>Advantages</h3>
                        <ul>
                            <li>Code Reusability</li>
                            <li>Easy Maintenance</li>
                            <li>Modular Programming</li>
                            <li>Testing and Debugging</li>
                        </ul>
                    `
                },
                {
                    q: "Explain Passing and Returning Arguments in Java.",
                    a: `
                        <h2>Passing and Returning Arguments</h2>
                        <div class="info-box">
                            Arguments are values passed to a method when it is called. Java uses <strong>Pass By Value</strong> mechanism.
                        </div>
                        <h3>Passing Arguments</h3>
                        <ul>
                            <li>Primitive types - Pass by value (copy of value)</li>
                            <li>Reference types - Pass by value (copy of reference)</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Passing arguments
    public void display(String name, int age) {
        System.out.println(name + " is " + age + " years old");
    }
    // Calling
    display("John", 25);</pre>
                        </div>
                        <h3>Returning Values</h3>
                        <ul>
                            <li>Use <strong>return</strong> statement</li>
                            <li>Return type must match method declaration</li>
                            <li>void methods don't return anything</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Returning value
    public int multiply(int a, int b) {
        return a * b;
    }
    int result = multiply(5, 3); // result = 15</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Type Conversion and Type Checking in Java.",
                    a: `
                        <h2>Type Conversion and Type Checking</h2>
                        <div class="info-box">
                            Type conversion means converting one data type into another.
                        </div>
                        <h3>Types of Conversion</h3>
                        <ul>
                            <li><strong>Implicit (Widening)</strong> - Automatic conversion from smaller to larger type</li>
                            <li><strong>Explicit (Narrowing)</strong> - Manual conversion using casting</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Widening (Implicit)
    int num = 10;
    double d = num;  // int to double automatically
    
    // Narrowing (Explicit Casting)
    double d2 = 10.5;
    int num2 = (int) d2; // double to int, num2 = 10</pre>
                        </div>
                        <h3>Type Checking</h3>
                        <ul>
                            <li><strong>instanceof</strong> - Checks object type</li>
                            <li>Compile-time type checking</li>
                        </ul>
                        <div class="success-box">
                            <pre>String s = "Hello";
    if (s instanceof String) {
        System.out.println("s is a String");
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Built-in Java Class Methods.",
                    a: `
                        <h2>Built-in Java Class Methods</h2>
                        <div class="info-box">
                            Java provides many predefined methods through standard classes.
                        </div>
                        <h3>Common Built-in Methods</h3>
                        <table>
                            <tr><th>Class</th><th>Methods</th><th>Description</th></tr>
                            <tr><td>Math</td><td>sqrt(), pow(), abs(), max(), min()</td><td>Mathematical operations</td></tr>
                            <tr><td>String</td><td>length(), charAt(), substring(), toUpperCase()</td><td>String manipulation</td></tr>
                            <tr><td>System</td><td>out.println(), currentTimeMillis()</td><td>System operations</td></tr>
                            <tr><td>Integer</td><td>parseInt(), toString()</td><td>Integer operations</td></tr>
                            <tr><td>Double</td><td>parseDouble(), toString()</td><td>Double operations</td></tr>
                        </table>
                        <div class="success-box">
                            <pre>// Math methods
    double sqrt = Math.sqrt(25);    // 5.0
    double power = Math.pow(2, 3);  // 8.0
    // String methods
    String s = "Hello";
    int len = s.length();           // 5
    String upper = s.toUpperCase(); // "HELLO"
    // System methods
    System.out.println("Hello");    // Print
    long time = System.currentTimeMillis();</pre>
                        </div>
                    `
                },

                // ============================================================
                // UNIT 2: Arrays, Strings and I/O
                // ============================================================
                {
                    q: "Explain Arrays in Java with examples.",
                    a: `
                        <h2>Arrays in Java</h2>
                        <div class="info-box">
                            An array is a collection of similar data elements stored in contiguous memory locations. Arrays allow multiple values to be stored using a single variable name.
                        </div>
                        <h3>Array Declaration and Initialization</h3>
                        <div class="success-box">
                            <pre>// Declaration and initialization
    int[] numbers = {10, 20, 30, 40, 50};
    // Dynamic allocation
    int[] scores = new int[5];
    scores[0] = 85;
    scores[1] = 90;
    scores[2] = 78;
    // Default values: 0 for int, null for objects</pre>
                        </div>
                        <h3>Array Operations</h3>
                        <ul>
                            <li><strong>Access:</strong> arr[index]</li>
                            <li><strong>Length:</strong> arr.length</li>
                            <li><strong>Traversal:</strong> for loop or enhanced for loop</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Traversing array
    for (int i = 0; i < numbers.length; i++) {
        System.out.println(numbers[i]);
    }
    // Enhanced for loop
    for (int num : numbers) {
        System.out.println(num);
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Multi-dimensional Arrays in Java.",
                    a: `
                        <h2>Multi-dimensional Arrays</h2>
                        <div class="info-box">
                            Multi-dimensional arrays are arrays of arrays. The most common is the 2D array (matrix).
                        </div>
                        <h3>2D Array Declaration</h3>
                        <div class="success-box">
                            <pre>// Declaration and initialization
    int[][] matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    // Dynamic allocation
    int[][] table = new int[3][4];
    table[0][0] = 10;
    table[1][2] = 20;</pre>
                        </div>
                        <h3>Traversing 2D Array</h3>
                        <div class="success-box">
                            <pre>// Nested loops
    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[i].length; j++) {
            System.out.print(matrix[i][j] + " ");
        }
        System.out.println();
    }</pre>
                        </div>
                        <h3>Jagged Arrays</h3>
                        <div class="info-box">
                            Jagged arrays have rows of different lengths.
                        </div>
                        <div class="success-box">
                            <pre>int[][] jagged = new int[3][];
    jagged[0] = new int[2];
    jagged[1] = new int[4];
    jagged[2] = new int[3];</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Dynamic Referencing of Arrays in Java.",
                    a: `
                        <h2>Dynamic Referencing of Arrays</h2>
                        <div class="info-box">
                            Dynamic referencing means creating arrays at runtime using the <strong>new</strong> keyword. The size of the array is decided during program execution.
                        </div>
                        <h3>Features</h3>
                        <ul>
                            <li>Memory is allocated dynamically</li>
                            <li>Array size can be specified at runtime</li>
                            <li>Useful when number of elements is unknown beforehand</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Dynamic array creation
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter array size: ");
    int size = sc.nextInt();
    int[] arr = new int[size];
    // Now we can use arr with the specified size</pre>
                        </div>
                        <div class="warning-box">
                            Once created, the size of the array cannot be changed.
                        </div>
                    `
                },
                {
                    q: "Explain String Class in Java.",
                    a: `
                        <h2>String Class in Java</h2>
                        <div class="info-box">
                            <strong>String</strong> is a predefined class in Java used to represent and manipulate sequences of characters.
                        </div>
                        <h3>String Creation</h3>
                        <div class="success-box">
                            <pre>// Using String literal (String Pool)
    String s1 = "Hello";
    // Using new keyword (Heap memory)
    String s2 = new String("Hello");</pre>
                        </div>
                        <h3>String Methods</h3>
                        <table>
                            <tr><th>Method</th><th>Description</th><th>Example</th></tr>
                            <tr><td>length()</td><td>Returns string length</td><td>"Hello".length() → 5</td></tr>
                            <tr><td>charAt(i)</td><td>Returns character at index i</td><td>"Hello".charAt(1) → 'e'</td></tr>
                            <tr><td>substring(s,e)</td><td>Extracts substring</td><td>"Hello".substring(1,3) → "el"</td></tr>
                            <tr><td>toUpperCase()</td><td>Converts to uppercase</td><td>"Hello".toUpperCase() → "HELLO"</td></tr>
                            <tr><td>toLowerCase()</td><td>Converts to lowercase</td><td>"Hello".toLowerCase() → "hello"</td></tr>
                            <tr><td>trim()</td><td>Removes spaces</td><td>" Hello ".trim() → "Hello"</td></tr>
                            <tr><td>replace()</td><td>Replaces characters</td><td>"Hello".replace('l','p') → "Heppo"</td></tr>
                            <tr><td>split()</td><td>Splits string</td><td>"a,b,c".split(",") → ["a","b","c"]</td></tr>
                        </table>
                    `
                },
                {
                    q: "Explain String Immutability and Equality in Java.",
                    a: `
                        <h2>String Immutability and Equality</h2>
                        <div class="info-box">
                            Strings in Java are <strong>immutable</strong>, meaning once created, their values cannot be changed. Any modification creates a new String object.
                        </div>
                        <h3>String Immutability</h3>
                        <div class="success-box">
                            <pre>String s = "Hello";
    s = s + " World";  // Creates new String object
    // The original "Hello" is still in memory but now unreachable</pre>
                        </div>
                        <h3>String Equality</h3>
                        <ul>
                            <li><strong>==</strong> - Compares references (memory addresses)</li>
                            <li><strong>equals()</strong> - Compares content (values)</li>
                            <li><strong>equalsIgnoreCase()</strong> - Compares content ignoring case</li>
                        </ul>
                        <div class="success-box">
                            <pre>String s1 = "Hello";
    String s2 = "Hello";
    String s3 = new String("Hello");
    
    System.out.println(s1 == s2);    // true (same String Pool)
    System.out.println(s1 == s3);    // false (different memory)
    System.out.println(s1.equals(s3)); // true (same content)</pre>
                        </div>
                        <div class="info-box">
                            <strong>String Pool:</strong> Java maintains a pool of String literals for memory optimization.
                        </div>
                    `
                },
                {
                    q: "Explain StringBuffer and StringBuilder Classes.",
                    a: `
                        <h2>StringBuffer and StringBuilder</h2>
                        <div class="info-box">
                            Both StringBuffer and StringBuilder are mutable classes used to modify strings without creating new objects.
                        </div>
                        <h3>Comparison</h3>
                        <table>
                            <tr><th>Feature</th><th>StringBuffer</th><th>StringBuilder</th></tr>
                            <tr><td>Mutability</td><td>Mutable</td><td>Mutable</td></tr>
                            <tr><td>Thread Safety</td><td>Synchronized (Thread-safe)</td><td>Not synchronized</td></tr>
                            <tr><td>Performance</td><td>Slower</td><td>Faster</td></tr>
                            <tr><td>Use Case</td><td>Multi-threaded environment</td><td>Single-threaded environment</td></tr>
                        </table>
                        <h3>Common Methods</h3>
                        <ul>
                            <li><strong>append()</strong> - Adds text to the end</li>
                            <li><strong>insert()</strong> - Inserts text at specific position</li>
                            <li><strong>delete()</strong> - Removes characters</li>
                            <li><strong>reverse()</strong> - Reverses the string</li>
                            <li><strong>replace()</strong> - Replaces characters</li>
                        </ul>
                        <div class="success-box">
                            <pre>StringBuffer sb = new StringBuffer("Java");
    sb.append(" Programming");  // "Java Programming"
    sb.insert(4, " is");        // "Java is Programming"
    sb.delete(4, 7);            // "Java Programming"
    sb.reverse();               // "gnimmargorP avaJ"</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Scanner Class in Java.",
                    a: `
                        <h2>Scanner Class</h2>
                        <div class="info-box">
                            <strong>Scanner</strong> is a predefined class in the java.util package used for taking user input from various sources (keyboard, files, etc.).
                        </div>
                        <h3>Basic Usage</h3>
                        <div class="success-box">
                            <pre>import java.util.Scanner;
    Scanner sc = new Scanner(System.in);
    int age = sc.nextInt();
    String name = sc.nextLine();</pre>
                        </div>
                        <h3>Common Methods</h3>
                        <table>
                            <tr><th>Method</th><th>Input Type</th></tr>
                            <tr><td>nextInt()</td><td>Integer</td></tr>
                            <tr><td>nextDouble()</td><td>Double</td></tr>
                            <tr><td>nextFloat()</td><td>Float</td></tr>
                            <tr><td>nextBoolean()</td><td>Boolean</td></tr>
                            <tr><td>next()</td><td>String (single word)</td></tr>
                            <tr><td>nextLine()</td><td>String (entire line)</td></tr>
                            <tr><td>hasNext()</td><td>Checks if more input exists</td></tr>
                        </table>
                        <div class="success-box">
                            <pre>Scanner sc = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = sc.nextLine();
    System.out.print("Enter your age: ");
    int age = sc.nextInt();
    System.out.println("Hello " + name + ", you are " + age + " years old.");</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Byte Streams and Character Streams in Java.",
                    a: `
                        <h2>Streams in Java</h2>
                        <div class="info-box">
                            Streams are used for input/output (I/O) operations in Java. Java provides two types of streams.
                        </div>
                        <h3>Byte Streams</h3>
                        <ul>
                            <li>Handle binary data (images, audio, video)</li>
                            <li>Use <strong>InputStream</strong> and <strong>OutputStream</strong> classes</li>
                            <li>Process data byte by byte</li>
                        </ul>
                        <h3>Character Streams</h3>
                        <ul>
                            <li>Handle text data (strings, characters)</li>
                            <li>Use <strong>Reader</strong> and <strong>Writer</strong> classes</li>
                            <li>Process data character by character (Unicode)</li>
                        </ul>
                        <div class="info-box">
                            <strong>Key Difference:</strong> Character streams handle 16-bit Unicode characters, while byte streams handle 8-bit bytes.
                        </div>
                        <h3>Common Classes</h3>
                        <table>
                            <tr><th>Byte Stream Classes</th><th>Character Stream Classes</th></tr>
                            <tr><td>FileInputStream</td><td>FileReader</td></tr>
                            <tr><td>FileOutputStream</td><td>FileWriter</td></tr>
                            <tr><td>BufferedInputStream</td><td>BufferedReader</td></tr>
                            <tr><td>DataInputStream</td><td>PrintWriter</td></tr>
                            <tr><td>ObjectInputStream</td><td>StringReader</td></tr>
                            <tr><td>ObjectOutputStream</td><td>StringWriter</td></tr>
                        </table>
                        <div class="success-box">
                            <strong>Example - Reading a text file:</strong>
                            <pre>try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain File Handling in Java.",
                    a: `
                        <h2>File Handling in Java</h2>
                        <div class="info-box">
                            File handling allows programs to read from and write to files on the system.
                        </div>
                        <h3>Key Classes</h3>
                        <ul>
                            <li><strong>File</strong> - Represents file/directory path</li>
                            <li><strong>FileReader/FileWriter</strong> - Character-based file I/O</li>
                            <li><strong>FileInputStream/FileOutputStream</strong> - Byte-based file I/O</li>
                            <li><strong>BufferedReader/BufferedWriter</strong> - Buffered I/O for performance</li>
                        </ul>
                        <div class="success-box">
                            <strong>Reading from a file:</strong>
                            <pre>try (FileReader fr = new FileReader("input.txt");
         BufferedReader br = new BufferedReader(fr)) {
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }</pre>
                        </div>
                        <div class="success-box">
                            <strong>Writing to a file:</strong>
                            <pre>try (FileWriter fw = new FileWriter("output.txt");
         BufferedWriter bw = new BufferedWriter(fw)) {
        bw.write("Hello World");
        bw.newLine();
        bw.write("Second line");
    } catch (IOException e) {
        e.printStackTrace();
    }</pre>
                        </div>
                    `
                },

                // ============================================================
                // UNIT 3: Object-Oriented Programming Overview
                // ============================================================
                {
                    q: "Explain the Principles of Object-Oriented Programming.",
                    a: `
                        <h2>Principles of OOP</h2>
                        <div class="info-box">
                            OOP is a programming paradigm that uses objects and classes to organize code.
                        </div>
                        <h3>Four Main Principles</h3>
                        <ul>
                            <li><strong>Encapsulation</strong> - Bundling data and methods, hiding internal details</li>
                            <li><strong>Inheritance</strong> - Creating new classes from existing ones</li>
                            <li><strong>Polymorphism</strong> - Ability to take many forms (method overloading/overriding)</li>
                            <li><strong>Abstraction</strong> - Hiding implementation details, showing only essential features</li>
                        </ul>
                        <div class="info-box">
                            <strong>Benefits of OOP:</strong>
                            <ul>
                                <li>Modularity - Easy to manage and maintain</li>
                                <li>Reusability - Inheritance and composition</li>
                                <li>Security - Encapsulation protects data</li>
                                <li>Flexibility - Polymorphism enables extensibility</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Explain Defining and Using Classes in Java.",
                    a: `
                        <h2>Classes in Java</h2>
                        <div class="info-box">
                            A class is a blueprint for creating objects. It defines the properties (fields) and behaviors (methods) of objects.
                        </div>
                        <h3>Class Declaration</h3>
                        <div class="success-box">
                            <pre>public class Student {
        // Fields (instance variables)
        String name;
        int age;
        String id;
        
        // Methods
        public void displayInfo() {
            System.out.println("Name: " + name);
            System.out.println("Age: " + age);
            System.out.println("ID: " + id);
        }
    }</pre>
                        </div>
                        <h3>Creating Objects</h3>
                        <div class="success-box">
                            <pre>// Creating object using new keyword
    Student s1 = new Student();
    s1.name = "John";
    s1.age = 20;
    s1.id = "S001";
    s1.displayInfo();</pre>
                        </div>
                        <h3>Class vs Object</h3>
                        <ul>
                            <li><strong>Class:</strong> Blueprint/template (conceptual)</li>
                            <li><strong>Object:</strong> Instance of class (actual in memory)</li>
                        </ul>
                    `
                },
                {
                    q: "Explain Constructors in Java.",
                    a: `
                        <h2>Constructors in Java</h2>
                        <div class="info-box">
                            A constructor is a special method used to initialize objects when they are created. It has the same name as the class and no return type.
                        </div>
                        <h3>Types of Constructors</h3>
                        <ul>
                            <li><strong>Default Constructor</strong> - No parameters, provided by Java if not defined</li>
                            <li><strong>Parameterized Constructor</strong> - Accepts parameters for initialization</li>
                            <li><strong>Copy Constructor</strong> - Creates object from another object</li>
                        </ul>
                        <div class="success-box">
                            <pre>public class Student {
        String name;
        int age;
        
        // Default constructor
        public Student() {
            name = "Unknown";
            age = 0;
        }
        
        // Parameterized constructor
        public Student(String name, int age) {
            this.name = name;
            this.age = age;
        }
        
        // Copy constructor
        public Student(Student other) {
            this.name = other.name;
            this.age = other.age;
        }
    }</pre>
                        </div>
                        <h3>Constructor Overloading</h3>
                        <div class="info-box">
                            Multiple constructors with different parameters in the same class.
                        </div>
                    `
                },
                {
                    q: "Explain Method Overloading in Java.",
                    a: `
                        <h2>Method Overloading</h2>
                        <div class="info-box">
                            Method overloading allows multiple methods with the same name but different parameters in the same class.
                        </div>
                        <h3>Rules for Overloading</h3>
                        <ul>
                            <li>Methods must have same name</li>
                            <li>Different parameter list (type, number, or order)</li>
                            <li>Return type can be different but not enough for overloading</li>
                            <li>Can have different access modifiers</li>
                        </ul>
                        <div class="success-box">
                            <pre>public class Calculator {
        // Method with two int parameters
        public int add(int a, int b) {
            return a + b;
        }
        // Method with three int parameters
        public int add(int a, int b, int c) {
            return a + b + c;
        }
        // Method with double parameters
        public double add(double a, double b) {
            return a + b;
        }
        // Method with different order
        public double add(int a, double b) {
            return a + b;
        }
    }</pre>
                        </div>
                        <div class="success-box">
                            <strong>Calling overloaded methods:</strong>
                            <pre>Calculator calc = new Calculator();
    calc.add(5, 10);        // Calls int,int version
    calc.add(5, 10, 15);    // Calls int,int,int version
    calc.add(5.5, 10.5);    // Calls double,double version</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Class Variables and Methods (Static).",
                    a: `
                        <h2>Static Variables and Methods</h2>
                        <div class="info-box">
                            Static members belong to the class rather than objects. They are shared among all instances.
                        </div>
                        <h3>Static Variables</h3>
                        <ul>
                            <li>Declared with <strong>static</strong> keyword</li>
                            <li>Shared by all objects of the class</li>
                            <li>Memory allocated once</li>
                            <li>Accessed using class name</li>
                        </ul>
                        <h3>Static Methods</h3>
                        <ul>
                            <li>Can be called without creating objects</li>
                            <li>Can only access static members</li>
                            <li>Cannot use 'this' keyword</li>
                            <li>Common in utility classes (Math, Collections)</li>
                        </ul>
                        <div class="success-box">
                            <pre>public class Counter {
        // Static variable
        static int count = 0;
        
        // Instance variable
        int instanceCount = 0;
        
        // Constructor
        public Counter() {
            count++;
            instanceCount++;
        }
        
        // Static method
        public static int getCount() {
            return count;
        }
        
        // Instance method
        public int getInstanceCount() {
            return instanceCount;
        }
    }</pre>
                        </div>
                        <div class="success-box">
                            <pre>// Using static members
    System.out.println(Counter.getCount()); // 0
    Counter c1 = new Counter();
    Counter c2 = new Counter();
    System.out.println(Counter.getCount()); // 2</pre>
                        </div>
                    `
                },
                {
                    q: "Explain 'final' Classes and Methods in Java.",
                    a: `
                        <h2>Final Classes and Methods</h2>
                        <div class="info-box">
                            The <strong>final</strong> keyword is used to restrict modification.
                        </div>
                        <h3>Final Classes</h3>
                        <ul>
                            <li>Cannot be extended (inherited)</li>
                            <li>Examples: String, Integer, Double</li>
                            <li>Used for security and immutability</li>
                        </ul>
                        <div class="success-box">
                            <pre>final class Parent {
        // This class cannot be extended
    }
    // This will cause error
    class Child extends Parent { } // ERROR!</pre>
                        </div>
                        <h3>Final Methods</h3>
                        <ul>
                            <li>Cannot be overridden by subclasses</li>
                            <li>Provides method security</li>
                        </ul>
                        <div class="success-box">
                            <pre>class Parent {
        final void display() {
            System.out.println("This method cannot be overridden");
        }
    }
    class Child extends Parent {
        // This will cause error
        void display() { } // ERROR!</pre>
                        </div>
                        <h3>Final Variables</h3>
                        <ul>
                            <li>Cannot be reassigned</li>
                            <li>Must be initialized when declared or in constructor</li>
                        </ul>
                        <div class="success-box">
                            <pre>final int MAX = 100;
    // MAX = 200; // ERROR! Cannot reassign</pre>
                        </div>
                    `
                },
                {
                    q: "Explain the Object Class and its Methods.",
                    a: `
                        <h2>Object Class in Java</h2>
                        <div class="info-box">
                            The <strong>Object</strong> class is the parent class of all classes in Java. Every class extends Object either directly or indirectly.
                        </div>
                        <h3>Important Methods of Object Class</h3>
                        <table>
                            <tr><th>Method</th><th>Description</th></tr>
                            <tr><td>toString()</td><td>Returns string representation of object</td></tr>
                            <tr><td>equals(Object obj)</td><td>Compares objects for equality</td></tr>
                            <tr><td>hashCode()</td><td>Returns hash code of object</td></tr>
                            <tr><td>getClass()</td><td>Returns class of object</td></tr>
                            <tr><td>clone()</td><td>Creates and returns copy of object</td></tr>
                            <tr><td>finalize()</td><td>Called before garbage collection</td></tr>
                            <tr><td>wait()</td><td>Causes thread to wait</td></tr>
                            <tr><td>notify()</td><td>Wakes up waiting thread</td></tr>
                        </table>
                        <div class="success-box">
                            <pre>// Overriding toString()
    public class Student {
        String name;
        int age;
        
        @Override
        public String toString() {
            return "Student[name=" + name + ", age=" + age + "]";
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Garbage Collection in Java.",
                    a: `
                        <h2>Garbage Collection in Java</h2>
                        <div class="info-box">
                            Garbage Collection is the process of automatically freeing memory by removing objects that are no longer referenced.
                        </div>
                        <h3>Key Points</h3>
                        <ul>
                            <li>Automatic memory management</li>
                            <li>Runs in background</li>
                            <li>Prevents memory leaks</li>
                            <li>Uses different algorithms (Mark-and-Sweep, Generational)</li>
                        </ul>
                        <h3>How it Works</h3>
                        <ul>
                            <li>Objects become eligible for GC when no references point to them</li>
                            <li>GC thread runs periodically</li>
                            <li>Can be requested using <strong>System.gc()</strong> (not guaranteed)</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Objects eligible for GC
    Student s1 = new Student("John", 20);
    s1 = null;  // Now s1 is eligible for GC
    
    // Request GC (not guaranteed to run immediately)
    System.gc();</pre>
                        </div>
                        <div class="warning-box">
                            <strong>Note:</strong> Garbage Collection is automatic and generally should not be forced.
                        </div>
                    `
                },

                // ============================================================
                // UNIT 4: Inheritance, Interfaces, Packages
                // ============================================================
                {
                    q: "Explain Inheritance in Java.",
                    a: `
                        <h2>Inheritance in Java</h2>
                        <div class="info-box">
                            Inheritance is a mechanism where one class acquires the properties and behaviors of another class.
                        </div>
                        <h3>Types of Inheritance</h3>
                        <ul>
                            <li><strong>Single Inheritance</strong> - One subclass inherits from one superclass</li>
                            <li><strong>Multilevel Inheritance</strong> - Chain of inheritance</li>
                            <li><strong>Hierarchical Inheritance</strong> - Multiple subclasses inherit from one superclass</li>
                            <li><strong>Multiple Inheritance</strong> - Not supported in Java (use interfaces)</li>
                            <li><strong>Hybrid Inheritance</strong> - Combination of types (not supported)</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Single Inheritance
    class Animal {
        void eat() { System.out.println("Eating"); }
    }
    class Dog extends Animal {
        void bark() { System.out.println("Barking"); }
    }
    // Multilevel Inheritance
    class Puppy extends Dog {
        void play() { System.out.println("Playing"); }
    }</pre>
                        </div>
                        <div class="info-box">
                            <strong>Benefits:</strong>
                            <ul>
                                <li>Code Reusability</li>
                                <li>Method Overriding</li>
                                <li>Polymorphism</li>
                            </ul>
                        </div>
                    `
                },
                {
                    q: "Explain Method Overriding in Java.",
                    a: `
                        <h2>Method Overriding</h2>
                        <div class="info-box">
                            Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.
                        </div>
                        <h3>Rules for Overriding</h3>
                        <ul>
                            <li>Method must have same name and parameters</li>
                            <li>Return type must be same or covariant</li>
                            <li>Access modifier cannot be more restrictive</li>
                            <li>Cannot override final or static methods</li>
                            <li>Use <strong>@Override</strong> annotation</li>
                        </ul>
                        <div class="success-box">
                            <pre>class Animal {
        void sound() {
            System.out.println("Animal makes sound");
        }
    }
    class Dog extends Animal {
        @Override
        void sound() {
            System.out.println("Dog barks");
        }
    }
    class Cat extends Animal {
        @Override
        void sound() {
            System.out.println("Cat meows");
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Dynamic Method Dispatch in Java.",
                    a: `
                        <h2>Dynamic Method Dispatch</h2>
                        <div class="info-box">
                            Dynamic Method Dispatch is a mechanism by which a call to an overridden method is resolved at runtime rather than compile-time.
                        </div>
                        <h3>How it Works</h3>
                        <ul>
                            <li>Uses runtime polymorphism</li>
                            <li>Depends on the object type at runtime</li>
                            <li>Enables flexibility in method calls</li>
                        </ul>
                        <div class="success-box">
                            <pre>class Animal {
        void sound() { System.out.println("Animal sound"); }
    }
    class Dog extends Animal {
        void sound() { System.out.println("Dog barks"); }
    }
    class Cat extends Animal {
        void sound() { System.out.println("Cat meows"); }
    }
    // Runtime method dispatch
    Animal a;
    a = new Dog();
    a.sound(); // Output: Dog barks
    a = new Cat();
    a.sound(); // Output: Cat meows</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Abstract Classes in Java.",
                    a: `
                        <h2>Abstract Classes</h2>
                        <div class="info-box">
                            Abstract classes are classes that cannot be instantiated. They may contain abstract methods (without implementation) and concrete methods.
                        </div>
                        <h3>Features</h3>
                        <ul>
                            <li>Declared with <strong>abstract</strong> keyword</li>
                            <li>Can have abstract and concrete methods</li>
                            <li>Can have constructors</li>
                            <li>Used as base classes for subclasses</li>
                            <li>Subclasses must implement abstract methods</li>
                        </ul>
                        <div class="success-box">
                            <pre>abstract class Shape {
        abstract void draw();
        void display() {
            System.out.println("Displaying shape");
        }
    }
    class Circle extends Shape {
        @Override
        void draw() {
            System.out.println("Drawing Circle");
        }
    }
    class Rectangle extends Shape {
        @Override
        void draw() {
            System.out.println("Drawing Rectangle");
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Interfaces in Java.",
                    a: `
                        <h2>Interfaces in Java</h2>
                        <div class="info-box">
                            An interface is a completely abstract class that contains only abstract methods (until Java 8) and constants.
                        </div>
                        <h3>Features</h3>
                        <ul>
                            <li>Declared with <strong>interface</strong> keyword</li>
                            <li>All methods are abstract by default</li>
                            <li>All fields are public, static, final</li>
                            <li>Supports multiple inheritance (a class can implement multiple interfaces)</li>
                            <li>Since Java 8: default and static methods</li>
                            <li>Since Java 9: private methods</li>
                        </ul>
                        <div class="success-box">
                            <pre>interface Drawable {
        void draw();  // abstract method
        // Default method (Java 8+)
        default void display() {
            System.out.println("Displaying");
        }
        // Static method (Java 8+)
        static void info() {
            System.out.println("Drawable interface");
        }
    }
    class Circle implements Drawable {
        @Override
        public void draw() {
            System.out.println("Drawing Circle");
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Packages in Java.",
                    a: `
                        <h2>Packages in Java</h2>
                        <div class="info-box">
                            A package is a namespace that organizes classes and interfaces. Packages help in avoiding naming conflicts and controlling access.
                        </div>
                        <h3>Types of Packages</h3>
                        <ul>
                            <li><strong>Built-in Packages</strong> - java.lang, java.util, java.io, java.net, etc.</li>
                            <li><strong>User-defined Packages</strong> - Created by developers</li>
                        </ul>
                        <h3>Creating a Package</h3>
                        <div class="success-box">
                            <pre>// File: com/example/Student.java
    package com.example;
    public class Student {
        // class code
    }</pre>
                        </div>
                        <h3>Using Packages</h3>
                        <div class="success-box">
                            <pre>// Using import statement
    import com.example.Student;
    import java.util.*;
    // Using fully qualified name
    com.example.Student s = new com.example.Student();</pre>
                        </div>
                        <h3>Standard Java Packages</h3>
                        <table>
                            <tr><th>Package</th><th>Purpose</th></tr>
                            <tr><td>java.lang</td><td>Fundamental classes (String, Math, System)</td></tr>
                            <tr><td>java.util</td><td>Utility classes (Scanner, ArrayList, HashMap)</td></tr>
                            <tr><td>java.io</td><td>Input/Output operations</td></tr>
                            <tr><td>java.net</td><td>Networking classes</td></tr>
                            <tr><td>java.sql</td><td>Database connectivity</td></tr>
                            <tr><td>java.awt</td><td>GUI components</td></tr>
                        </table>
                    `
                },
                {
                    q: "Explain Wrapper Classes and Autoboxing in Java.",
                    a: `
                        <h2>Wrapper Classes and Autoboxing</h2>
                        <div class="info-box">
                            Wrapper classes provide a way to use primitive data types as objects. They are used in collections and when objects are needed.
                        </div>
                        <h3>Wrapper Classes</h3>
                        <table>
                            <tr><th>Primitive</th><th>Wrapper Class</th></tr>
                            <tr><td>byte</td><td>Byte</td></tr>
                            <tr><td>short</td><td>Short</td></tr>
                            <tr><td>int</td><td>Integer</td></tr>
                            <tr><td>long</td><td>Long</td></tr>
                            <tr><td>float</td><td>Float</td></tr>
                            <tr><td>double</td><td>Double</td></tr>
                            <tr><td>boolean</td><td>Boolean</td></tr>
                            <tr><td>char</td><td>Character</td></tr>
                        </table>
                        <h3>Autoboxing and Unboxing</h3>
                        <ul>
                            <li><strong>Autoboxing</strong> - Automatic conversion from primitive to wrapper</li>
                            <li><strong>Unboxing</strong> - Automatic conversion from wrapper to primitive</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Autoboxing
    Integer num = 10;  // int to Integer automatically
    // Unboxing
    int value = num;   // Integer to int automatically
    // In collections
    ArrayList<Integer> list = new ArrayList<>();
    list.add(5);        // autoboxing
    int sum = list.get(0) + 10; // unboxing</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Enumerations in Java.",
                    a: `
                        <h2>Enumerations (Enums)</h2>
                        <div class="info-box">
                            Enums are special data types that represent a fixed set of constants. They were introduced in Java 5.
                        </div>
                        <h3>Features</h3>
                        <ul>
                            <li>Defined using <strong>enum</strong> keyword</li>
                            <li>Constants are public, static, final</li>
                            <li>Can have constructors, methods, and fields</li>
                            <li>Implicitly extends java.lang.Enum</li>
                            <li>Can implement interfaces</li>
                        </ul>
                        <div class="success-box">
                            <pre>enum Day {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
    }
    // Enum with fields and methods
    enum Status {
        SUCCESS(200), ERROR(500), NOT_FOUND(404);
        private int code;
        Status(int code) {
            this.code = code;
        }
        public int getCode() {
            return code;
        }
    }
    // Usage
    Day today = Day.MONDAY;
    System.out.println(Status.SUCCESS.getCode()); // 200</pre>
                        </div>
                    `
                },

                // ============================================================
                // UNIT 5: Exception Handling, Threading
                // ============================================================
                {
                    q: "Explain Exception Handling in Java.",
                    a: `
                        <h2>Exception Handling</h2>
                        <div class="info-box">
                            Exception handling is a mechanism to handle runtime errors and maintain normal flow of the program.
                        </div>
                        <h3>Types of Exceptions</h3>
                        <ul>
                            <li><strong>Checked Exceptions</strong> - Checked at compile-time (IOException, SQLException)</li>
                            <li><strong>Unchecked Exceptions</strong> - Runtime exceptions (NullPointerException, ArithmeticException)</li>
                            <li><strong>Errors</strong> - Serious issues (OutOfMemoryError, StackOverflowError)</li>
                        </ul>
                        <h3>Exception Handling Keywords</h3>
                        <table>
                            <tr><th>Keyword</th><th>Description</th></tr>
                            <tr><td>try</td><td>Block that may throw exception</td></tr>
                            <tr><td>catch</td><td>Block to handle exception</td></tr>
                            <tr><td>finally</td><td>Block that always executes</td></tr>
                            <tr><td>throw</td><td>Throws exception manually</td></tr>
                            <tr><td>throws</td><td>Declares exception in method signature</td></tr>
                        </table>
                        <div class="success-box">
                            <pre>try {
        int result = 10 / 0; // Throws ArithmeticException
    } catch (ArithmeticException e) {
        System.out.println("Cannot divide by zero");
    } finally {
        System.out.println("This always executes");
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Creating Custom Exceptions in Java.",
                    a: `
                        <h2>Custom Exceptions</h2>
                        <div class="info-box">
                            Custom exceptions allow developers to define their own exception classes for specific error conditions.
                        </div>
                        <h3>Creating Custom Exception</h3>
                        <ul>
                            <li>Extend Exception class (for checked) or RuntimeException (for unchecked)</li>
                            <li>Provide constructors</li>
                            <li>Can add custom fields and methods</li>
                        </ul>
                        <div class="success-box">
                            <pre>class InsufficientFundsException extends Exception {
        private double amount;
        public InsufficientFundsException(String message) {
            super(message);
        }
        public InsufficientFundsException(String message, double amount) {
            super(message);
            this.amount = amount;
        }
        public double getAmount() {
            return amount;
        }
    }
    // Using custom exception
    class BankAccount {
        double balance = 1000;
        void withdraw(double amount) throws InsufficientFundsException {
            if (amount > balance) {
                throw new InsufficientFundsException("Insufficient balance", amount - balance);
            }
            balance -= amount;
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Multi-threading in Java.",
                    a: `
                        <h2>Multi-threading in Java</h2>
                        <div class="info-box">
                            Multi-threading allows concurrent execution of two or more threads. A thread is the smallest unit of execution.
                        </div>
                        <h3>Creating Threads</h3>
                        <ul>
                            <li><strong>Extending Thread class</strong> - Override run() method</li>
                            <li><strong>Implementing Runnable interface</strong> - Implement run() method</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Method 1: Extending Thread
    class MyThread extends Thread {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread: " + i);
                try { Thread.sleep(100); } catch (Exception e) {}
            }
        }
    }
    // Method 2: Implementing Runnable
    class MyRunnable implements Runnable {
        public void run() {
            System.out.println("Runnable thread running");
        }
    }
    // Starting threads
    MyThread t1 = new MyThread();
    t1.start();
    Thread t2 = new Thread(new MyRunnable());
    t2.start();</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Thread States and Lifecycle.",
                    a: `
                        <h2>Thread Lifecycle</h2>
                        <div class="info-box">
                            A thread goes through various states during its lifetime.
                        </div>
                        <h3>Thread States</h3>
                        <ul>
                            <li><strong>New</strong> - Thread is created but not started</li>
                            <li><strong>Runnable</strong> - Ready to run, waiting for CPU</li>
                            <li><strong>Blocked</strong> - Waiting for a lock</li>
                            <li><strong>Waiting</strong> - Waiting indefinitely for another thread</li>
                            <li><strong>Timed Waiting</strong> - Waiting for a specified time</li>
                            <li><strong>Terminated</strong> - Thread has completed execution</li>
                        </ul>
                        <div class="success-box">
                            <pre>// Thread lifecycle example
    Thread t = new Thread(); // New state
    t.start();               // Runnable state
    // Inside run() method:
    Thread.sleep(1000);      // Timed Waiting state
    t.wait();                // Waiting state (needs synchronization)
    t.join();                // Waiting for another thread
    // After run() completes: Terminated state</pre>
                        </div>
                    `
                },

                // ============================================================
                // UNIT 6: Applets
                // ============================================================
                {
                    q: "Explain Java Applets.",
                    a: `
                        <h2>Java Applets</h2>
                        <div class="info-box">
                            Applets are small Java programs that run in web browsers. They are embedded in HTML pages.
                        </div>
                        <h3>Applet Lifecycle Methods</h3>
                        <ul>
                            <li><strong>init()</strong> - Called once when applet is loaded</li>
                            <li><strong>start()</strong> - Called after init() and whenever applet is activated</li>
                            <li><strong>stop()</strong> - Called when applet is deactivated</li>
                            <li><strong>destroy()</strong> - Called before applet is unloaded</li>
                            <li><strong>paint()</strong> - Called to draw applet content</li>
                        </ul>
                        <div class="success-box">
                            <pre>import java.applet.Applet;
    import java.awt.Graphics;
    public class MyApplet extends Applet {
        public void init() {
            System.out.println("Applet initialized");
        }
        public void start() {
            System.out.println("Applet started");
        }
        public void paint(Graphics g) {
            g.drawString("Hello, World!", 50, 50);
        }
        public void stop() {
            System.out.println("Applet stopped");
        }
        public void destroy() {
            System.out.println("Applet destroyed");
        }
    }</pre>
                        </div>
                    `
                },
                {
                    q: "Explain Working with Graphics in Applets.",
                    a: `
                        <h2>Graphics in Applets</h2>
                        <div class="info-box">
                            The Graphics class provides methods for drawing shapes, text, and images in applets.
                        </div>
                        <h3>Common Graphics Methods</h3>
                        <table>
                            <tr><th>Method</th><th>Description</th></tr>
                            <tr><td>drawString()</td><td>Draws text</td></tr>
                            <tr><td>drawLine()</td><td>Draws a line</td></tr>
                            <tr><td>drawRect()</td><td>Draws a rectangle</td></tr>
                            <tr><td>fillRect()</td><td>Fills a rectangle</td></tr>
                            <tr><td>drawOval()</td><td>Draws an oval/circle</td></tr>
                            <tr><td>fillOval()</td><td>Fills an oval/circle</td></tr>
                            <tr><td>drawArc()</td><td>Draws an arc</td></tr>
                            <tr><td>setColor()</td><td>Sets drawing color</td></tr>
                            <tr><td>setFont()</td><td>Sets font</td></tr>
                        </table>
                        <div class="success-box">
                            <pre>public void paint(Graphics g) {
        // Set color
        g.setColor(Color.RED);
        // Draw shapes
        g.drawLine(10, 10, 100, 100);
        g.drawRect(50, 50, 80, 40);
        g.fillOval(120, 60, 60, 60);
        // Draw text
        g.setColor(Color.BLUE);
        g.setFont(new Font("Arial", Font.BOLD, 20));
        g.drawString("Hello Applet", 50, 150);
    }</pre>
                        </div>
                    `
                }
            ]
        }
    };

    // =========================
    // DOM REFS
    // =========================

    const splashScreen = document.getElementById("splash-screen");
    const mainPanel = document.getElementById("main-panel");
    const startBtn = document.getElementById("startBtn");
    const qnaScroll = document.getElementById("qnaScroll");
    const paperName = document.getElementById("paperName");
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const currentQnNum = document.getElementById("currentQnNum");
    const totalQnNum = document.getElementById("totalQnNum");
    const questionCount = document.getElementById("questionCount");
    const progressFill = document.getElementById("progressFill");
    const subjectBtns = document.querySelectorAll(".subject-btn");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const themeToggle = document.getElementById("themeToggle");
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    const body = document.body;

    // =========================
    // STATE
    // =========================

    let currentSubject = "major4"; // Default to JAVA
    let currentFilter = "all";
    let answerVisible = {};
    let answeredQuestions = new Set();
    let isDarkMode = true;

    // =========================
    // TOAST SYSTEM
    // =========================

    function showToast(message, isError = false) {
        toast.className = "toast";
        if (isError) toast.classList.add("error");
        toastMessage.textContent = message;
        toast.classList.add("show");
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    // =========================
    // THEME TOGGLE
    // =========================

    themeToggle.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        body.classList.toggle("light-mode", !isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        showToast(isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️");
    });

    // =========================
    // START BUTTON
    // =========================

    startBtn.addEventListener("click", () => {
        splashScreen.style.display = "none";
        mainPanel.style.display = "block";
        // Set active subject to JAVA
        document.querySelector('.subject-btn[data-subject="major4"]').classList.add("active");
        document.querySelector('.subject-btn[data-subject="major3"]').classList.remove("active");
        renderQuestions();
        showToast("Welcome to Study Hub! 🚀");
    });

    // =========================
    // SUBJECT SWITCH
    // =========================

    subjectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currentSubject = btn.dataset.subject;
            answerVisible = {};
            answeredQuestions.clear();
            subjectBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderQuestions(searchInput.value);
            showToast(`Switched to ${btn.textContent.trim()}`);
        });
    });

    // =========================
    // SEARCH
    // =========================

    searchInput.addEventListener("input", () => {
        clearSearch.classList.toggle("show", searchInput.value.length > 0);
        renderQuestions(searchInput.value);
    });

    clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        clearSearch.classList.remove("show");
        renderQuestions();
        searchInput.focus();
    });

    // =========================
    // FILTER
    // =========================

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currentFilter = btn.dataset.filter;
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderQuestions(searchInput.value);
        });
    });

    // =========================
    // RENDER QUESTIONS
    // =========================

    function renderQuestions(searchText = "") {
        const data = qnaData[currentSubject];
        if (!data) return;

        paperName.textContent = data.paperName;

        let filtered = data.questions.filter(item =>
            item.q.toLowerCase().includes(searchText.toLowerCase())
        );

        if (currentFilter === "answered") {
            filtered = filtered.filter((_, i) =>
                answeredQuestions.has(i)
            );
        } else if (currentFilter === "unanswered") {
            filtered = filtered.filter((_, i) =>
                !answeredQuestions.has(i)
            );
        }

        totalQnNum.textContent = filtered.length;
        questionCount.textContent = `${filtered.length} Questions`;

        const answeredCount = filtered.filter((_, i) =>
            answeredQuestions.has(i)
        ).length;

        const progress = filtered.length > 0 ? (answeredCount / filtered.length) * 100 : 0;
        progressFill.style.width = `${progress}%`;

        if (filtered.length === 0) {
            currentQnNum.textContent = 0;
            qnaScroll.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>No questions found</p>
                    <small>Try adjusting your search or filter</small>
                </div>
            `;
            return;
        }

        currentQnNum.textContent = 1;

        let html = "";

        filtered.forEach((item, index) => {
            const isOpen = answerVisible[index] || false;
            const isAnswered = answeredQuestions.has(index);

            html += `
                <div class="qn-item ${isAnswered ? 'answered' : 'unanswered'}" data-index="${index}">
                    <div class="qn-row">
                        <div class="qn-text">
                            <span class="qn-label">Q${index + 1}</span>
                            ${item.q}
                        </div>
                        <div class="arrow-btn ${isOpen ? "active-arrow" : ""}" data-index="${index}">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div class="answer-box ${isOpen ? "show-answer" : ""}">
                        <div class="answer-content">
                            ${item.a}
                            <div class="answer-actions">
                                <button class="fullscreen-btn" data-full="${index}">
                                    <i class="fas fa-expand"></i> Full Screen
                                </button>
                                <button class="mark-btn ${isAnswered ? 'marked' : ''}" data-index="${index}">
                                    <i class="fas ${isAnswered ? 'fa-check-circle' : 'fa-circle'}"></i>
                                    ${isAnswered ? 'Done' : 'Mark Done'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        qnaScroll.innerHTML = html;

        bindAccordion();
        bindFullscreen();
        bindMarkButtons();
    }

    // =========================
    // ACCORDION
    // =========================

    function bindAccordion() {
        document.querySelectorAll(".arrow-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const index = Number(btn.dataset.index);

                if (answerVisible[index]) {
                    answerVisible = {};
                } else {
                    answerVisible = {};
                    answerVisible[index] = true;
                }

                renderQuestions(searchInput.value);

                setTimeout(() => {
                    document.querySelector(`.qn-item[data-index="${index}"]`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            });
        });
    }

    // =========================
    // MARK BUTTONS
    // =========================

    function bindMarkButtons() {
        document.querySelectorAll(".mark-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const index = Number(btn.dataset.index);

                if (answeredQuestions.has(index)) {
                    answeredQuestions.delete(index);
                    showToast("Unmarked");
                } else {
                    answeredQuestions.add(index);
                    showToast("Marked as Done! ✅");
                }

                renderQuestions(searchInput.value);
            });
        });
    }

    // =========================
    // FULLSCREEN
    // =========================

    const fullscreenModal = document.getElementById("fullscreenModal");
    const fullscreenBody = document.getElementById("fullscreenBody");
    const closeFullscreen = document.getElementById("closeFullscreen");

    function bindFullscreen() {
        document.querySelectorAll(".fullscreen-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const index = Number(btn.dataset.full);
                const data = qnaData[currentSubject].questions[index];

                fullscreenBody.innerHTML = `
                    <h2 style="color:#fff;margin-bottom:12px;">${data.q}</h2>
                    ${data.a}
                `;

                fullscreenModal.style.display = "block";

                if (!isDarkMode) {
                    fullscreenModal.style.background = "#f0f4ff";
                    fullscreenModal.querySelectorAll('*').forEach(el => {
                        if (el.style) el.style.color = '#1a1a2e';
                    });
                } else {
                    fullscreenModal.style.background = "#08111f";
                }

                if (fullscreenModal.requestFullscreen) {
                    fullscreenModal.requestFullscreen();
                } else if (fullscreenModal.webkitRequestFullscreen) {
                    fullscreenModal.webkitRequestFullscreen();
                }
            });
        });
    }

    closeFullscreen.addEventListener("click", () => {
        fullscreenModal.style.display = "none";
        if (document.fullscreenElement) document.exitFullscreen();
        if (document.webkitFullscreenElement) document.webkitExitFullscreen();
    });

    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            fullscreenModal.style.display = "none";
        }
    });

    // =========================
    // PASSWORD MODAL WITH BACK BUTTON
    // =========================

    const ideaBtn = document.getElementById("ideaBtn");
    const passwordModal = document.getElementById("passwordModal");
    const passwordInput = document.getElementById("passwordInput");
    const passwordSubmit = document.getElementById("passwordSubmit");
    const passwordError = document.getElementById("passwordError");
    const passwordBack = document.getElementById("passwordBack");
    const notesPanel = document.getElementById("notesPanel");
    const closeNotes = document.getElementById("closeNotes");
    const notesContainer = document.getElementById("notesContainer");
    const notesMajor3 = document.getElementById("notesMajor3");
    const notesMajor4 = document.getElementById("notesMajor4");
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");
    const printNotesBtn = document.getElementById("printNotesBtn");

    let attempts = 0;

    ideaBtn.addEventListener("click", () => {
        passwordModal.style.display = "flex";
        passwordInput.value = "";
        passwordError.classList.remove("show");
        passwordInput.focus();
    });

    passwordBack.addEventListener("click", () => {
        passwordModal.style.display = "none";
        attempts = 0;
        passwordError.classList.remove("show");
    });

    passwordSubmit.addEventListener("click", () => {
        const pass = passwordInput.value.trim();

        if (pass === "lool") {
            passwordModal.style.display = "none";
            notesPanel.style.display = "block";
            showToast("Welcome to Study Notes! 📝");
            attempts = 0;
        } else {
            attempts++;
            passwordError.classList.add("show");
            passwordError.textContent = `Wrong password! ${attempts >= 3 ? 'Hint: contact with admin' : ''}`;
            passwordInput.value = "";
            passwordInput.focus();
            if (attempts >= 5) {
                passwordModal.style.display = "none";
                showToast("Too many attempts! 🔒", true);
            }
        }
    });

    passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") passwordSubmit.click();
    });

    passwordModal.addEventListener("click", (e) => {
        if (e.target === passwordModal) {
            passwordModal.style.display = "none";
            attempts = 0;
            passwordError.classList.remove("show");
        }
    });

    closeNotes.addEventListener("click", () => {
        notesPanel.style.display = "none";
    });

    // =========================
    // NOTES GENERATOR
    // =========================

    function buildNotes(subject) {
        const data = qnaData[subject];
        if (!data) return;

        let html = "";
        let pageCount = 1;

        html += `
            <div class="a4-page">
                <h2>${data.paperName}</h2>
                <p style="text-align:center;color:#666;margin-bottom:14px;font-size:.8rem;">Generated on ${new Date().toLocaleDateString()}</p>
                <div class="note-grid">
        `;

        data.questions.forEach((item, index) => {
            if (index > 0 && index % 4 === 0) {
                html += `
                </div>
            </div>
            <div class="a4-page">
                <h2>${data.paperName} - Page ${++pageCount}</h2>
                <div class="note-grid">
                `;
            }

            html += `
                <div class="note-item">
                    <div class="note-q">Q${index + 1}. ${item.q}</div>
                    <div class="note-a">${item.a}</div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        notesContainer.innerHTML = html;
        showToast(`Notes loaded: ${data.paperName}`);
    }

    notesMajor3.addEventListener("click", () => buildNotes("major3"));
    notesMajor4.addEventListener("click", () => buildNotes("major4"));

    // =========================
    // PDF DOWNLOAD
    // =========================

    downloadPdfBtn.addEventListener("click", async () => {
        const target = notesContainer;
        if (!target.innerHTML.trim()) {
            showToast("Please load notes first! 📄", true);
            return;
        }

        showToast("Generating PDF... ⏳");

        try {
            const canvas = await html2canvas(target, {
                scale: 2,
                backgroundColor: "#ffffff",
                logging: false,
                useCORS: true,
            });

            const imgData = canvas.toDataURL("image/png");
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF("p", "mm", "a4");

            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height * width) / canvas.width;

            let heightLeft = height;
            let position = 0;

            while (heightLeft > 0) {
                pdf.addImage(imgData, "PNG", 0, position, width, height);
                heightLeft -= pdf.internal.pageSize.getHeight();
                if (heightLeft > 0) {
                    pdf.addPage();
                    position -= pdf.internal.pageSize.getHeight();
                }
            }

            pdf.save("Study_Notes.pdf");
            showToast("PDF downloaded successfully! 📥");
        } catch (error) {
            showToast("Error generating PDF", true);
            console.error(error);
        }
    });

    // =========================
    // PRINT NOTES
    // =========================

    printNotesBtn.addEventListener("click", () => {
        const target = notesContainer;
        if (!target.innerHTML.trim()) {
            showToast("Please load notes first! 📄", true);
            return;
        }

        const win = window.open("", "_blank");
        win.document.write(`
            <html>
                <head>
                    <title>Study Notes</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 16px; max-width: 800px; margin: 0 auto; }
                        .a4-page { page-break-after: always; margin-bottom: 20px; }
                        .note-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                        .note-item { background: #f8f9fa; border-radius: 6px; padding: 10px; border-left: 2px solid #00c6ff; }
                        .note-q { font-weight: bold; margin: 6px 0 4px; font-size: .85rem; }
                        .note-a { margin-bottom: 8px; padding-left: 8px; font-size: .78rem; line-height: 1.4; }
                        .info-box, .success-box, .warning-box { padding: 6px 10px; margin: 4px 0; border-radius: 4px; font-size: .75rem; }
                        .info-box { background: #e8f4fd; border-left: 3px solid #00c6ff; }
                        .success-box { background: #e8fde8; border-left: 3px solid #00ff80; }
                        .warning-box { background: #fde8e8; border-left: 3px solid #ff5f6d; }
                        table { border-collapse: collapse; width: 100%; margin: 4px 0; font-size: .7rem; }
                        th, td { border: 1px solid #ddd; padding: 4px 6px; text-align: left; }
                        th { background: #f0f0f0; }
                        pre { background: #f4f4f4; padding: 6px; border-radius: 4px; overflow-x: auto; font-size: .7rem; }
                        ul { margin-left: 16px; font-size: .78rem; }
                        h2 { font-size: 1rem; margin: 8px 0; }
                        h3 { font-size: .9rem; margin: 6px 0; }
                        @media print { .a4-page { page-break-after: always; } }
                        @media (max-width: 600px) { .note-grid { grid-template-columns: 1fr; } }
                    </style>
                </head>
                <body>
                    ${target.innerHTML}
                    <script>
                        window.onload = function() { window.print(); }
                    <\/script>
                </body>
            </html>
        `);
        win.document.close();
        showToast("Print dialog opened 🖨️");
    });

    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            searchInput.focus();
        }

        if (e.key === "Escape") {
            if (notesPanel.style.display === "block") {
                notesPanel.style.display = "none";
            }
            if (passwordModal.style.display === "flex") {
                passwordModal.style.display = "none";
                attempts = 0;
                passwordError.classList.remove("show");
            }
            if (fullscreenModal.style.display === "block") {
                fullscreenModal.style.display = "none";
                if (document.fullscreenElement) document.exitFullscreen();
            }
        }
    });

    // =========================
    // INIT
    // =========================

    console.log("🚀 Study Hub V4 Mobile - Complete Syllabus Loaded!");
    console.log("📚 Total Questions:", qnaData.major4.questions.length + qnaData.major3.questions.length);
    console.log("💡 Press Ctrl+K to search");

})();
