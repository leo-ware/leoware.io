---
title: PQP
desc: identification for causal graphical models
---

PQP is a project I made for identification on causal graphical models.

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

    foo bar
```

The core is Shpitser's ID algorithm. There were a couple of open source implementations available when I started the project, but they suffered from a mixture of performance and maintinence issues. So, I implemented the core algorithm in Rust and then put it in a Python wrapper.

Causal graphical models are 