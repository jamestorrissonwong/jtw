---
layout: post
title: SubT Summer Reflection
date: 2019-09-11 21:30:00
categories: 
tags: [Biorobotics, SubT] 
last_modified_at: 
---

One of the projects I worked on during Summer 2019 was for the DARPA Subterranean Challenge. The goal was to design and build a robot or several robots capable of autonomously exploring caves and underground urban areas, while collecting maps and performing artifact detection

<figure>
  <center><img src="{{ site.baseurl }}/assets/subt_back.jpg"  style="width:100%"></center>
  <figcaption>i finally got paid all my overtime</figcaption>
</figure>

My specialty on the project was working on the hardware for our communications system. Each of our robots were supposed to drop small nodes, each containing a Wi-fi board that could mesh into a growing Wi-fi network as the robot explored out of line-of-sight. 

<figure>
  <center><img src="{{ site.baseurl }}/assets/nodedropper.jpg"  style="width:100%"></center>
  <figcaption></figcaption>
</figure>

The first part I worked on was the physical node-dropping subsystem. I became the point-person for the rest of the undergrads working in the shop when the 2 designers both left for a week. I machined several of the components, and directed changes to be made when the drawings were found to be incorrect. 

<figure>
  <center><img src="{{ site.baseurl }}/assets/osc.jpg"  style="width:100%"></center>
  <figcaption></figcaption>
</figure>

I also worked extensively on debugging the electronics. We designed the nodes so that each Wi-fi board had an extension board that kept it turned off, until it was next to be dropped. This way, we reduced problems with constantly re-meshing the network with upwards of a dozen nodes. We initially set this up by gating power with magnetic reed switches, but when they were dropped from the robot, there was a mechanical bounce. Since we were gating power, there was no way to debounce the signal in code, so I was tasked with coming up with a mechanical way to keep the nodes on. I did this by putting a large capacitor inline with the power. 