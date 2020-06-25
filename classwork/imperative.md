---
layout: page
permalink: /imperative/
title: Principles of Imperative Computation
---


## <small>15-122</small>


<span class="improved">Course Highlights</span> 
- Assessing correctness of code, through use of Requires, Ensures, Asserts, and Loop Invariants
- Discuss topics such as abstraction, correctness, complexity, and modularity
- Introduce various data structures and their implementations, including stacks, queues, linked lists, dictionaries, trees, and heaps
- Understand the use of pointers and basic memory allocation
- Programming skills in C

<span class="fixed">Some Homeworks</span> 

| Program       | Key Topics    | Description |
| :-----------: |:-------------:| :----: |
| Clac          | Stacks & Queues | Making a postfix-style calculator |
| Editor | Linked Lists    |  Implementing a basic text editor 
| Huffman      | Dictionaries and Hashing  |  Make a program that takes in a file, builds a Huffman tree, encodes and decodes strings, and compresses/uncompresses files
| C0VM | Stacks, Queues, Pointers & Memory Allocation | Make a virtual machine executes bytecode



Some example code from C0VM:

{% highlight C %}
case AADDS: {
      pc++;
      int i = pop_i(S);
      c0_value a = c0v_pop(S);
      c0_array *arr = (c0_array*)(val2ptr(a));
      if(arr == NULL){
        c0_memory_error("NULL Pointer");
      }
      int es = arr->elt_size;

      uint8_t *e = arr->elems;

      void *b =&e[i*es];

      push_p(S, b);

      break;
    }
{% endhighlight %}

 
