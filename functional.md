---
layout: page
permalink: /functional/
title: Principles of Functional Programming
---


## <small>15-150</small>


<span class="improved">Course Highlights</span> 




{% highlight SML %}
fun selectCPS p T k = case T of Empty => k []
                         | Node(L, x, R) => case p x of true =>
                             selectCPS p L (fn a => k (a@[x]@(selectCPS p R k)))
                  | false => selectCPS p L (fn a => k (a@(selectCPS p R k)))
{% endhighlight %}

 
