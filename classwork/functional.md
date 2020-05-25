---
layout: page
permalink: /functional/
title: Principles of Functional Programming
---


## <small>15-150</small>

<span class="improved">Course Highlights</span> 
- Proving the correctness of code, as well as extensional equivalence
- Discuss topics such as abstraction, complexity, and modularity
- Introduce recursive proofs, data structures, higher order functions, and continuation passing style
- Programming skills in SML


{% highlight SML %}
fun selectCPS p T k = case T of Empty => k []
                         | Node(L, x, R) => case p x of true =>
                             selectCPS p L (fn a => k (a@[x]@(selectCPS p R k)))
                  | false => selectCPS p L (fn a => k (a@(selectCPS p R k)))
{% endhighlight %}

 
