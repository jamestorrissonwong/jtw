---
layout: page
permalink: /112/
title: Fundamentals of Programming and CS
---


## <small>15-112</small>


<span class="improved">Course Highlights</span> 
- Basics of programming, recursion, and dictionaries
- A final term project
- Programming skills in Python

<span class="fixed">Final Project</span> <br>
The basis for my project was being able to identify various International Code Flags, used in the maritime community for messages and signalling. Typically, decoding these messages requires the use of a large book containing all possible messages, however I automated this processes using OpenCV and a dictionary of definitions. Additionally, I added some smaller features, such as a way to send messages to another person using sockets. 


Some example code from my Term Project:

{% highlight Python %}

#converts codes text file to dictionary
def codes():
    d = {}
    p = path.absPath()
    with open(p + "/allDefs.txt", "rt") as f:
        all = f.read()
        
    lines = all.split("\n")

    for i in range(len(lines)-1):
        definition = lines[i].split(" ")
        if definition[1] in string.digits:
            d[definition[0] + definition[1]] = listString(definition[2:])
        else:
            d[definition[0]] = listString(definition[1:])
        
    return d
{% endhighlight %}

Full code <a href="https://github.com/jamestorrissonwong/112project">here</a> 
