---
title: pqp - Causal Identification Algorithm
desc: High-performance implementation of Shpitser's ID algorithm for causal identification
date: 2023-12-01
github: https://github.com/leo-ware/pqp
tags: [Rust, Python, Causal Inference, Algorithms]
category: Research
---

High-performance implementation of Shpitser's ID algorithm for causal identification, written in Rust. While working on this project, I found a bug in Microsoft Research's DoWhy library that was invalidating ~50% of significance tests. My implementation is more general and 60% faster than Microsoft's version.

## Overview

The core is Shpitser's ID algorithm, a fundamental algorithm in causal inference for determining whether a causal effect can be identified from observational data given a causal graph. There were a couple of open source implementations available when I started the project, but they suffered from a mixture of performance and maintenance issues. So, I implemented the core algorithm in Rust and then put it in a Python wrapper.

## Key Achievements

- **Bug Discovery**: Found a critical bug in Microsoft Research's DoWhy library that was invalidating approximately 50% of significance tests
- **Performance**: Achieved 60% faster execution compared to Microsoft's implementation
- **Generality**: Built a more general implementation that handles a wider range of causal structures
- **Language**: Implemented in Rust for performance, with Python bindings for ease of use

## Technical Details

Causal graphical models are a mathematical framework for reasoning about cause and effect relationships in data. The ID algorithm determines whether it's possible to compute causal effects from observational data, given assumptions encoded in a directed acyclic graph (DAG).

This project combines the performance benefits of Rust with the accessibility of Python, making it suitable for both research and production use cases in causal inference.
