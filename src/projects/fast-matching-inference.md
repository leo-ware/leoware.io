---
title: fast-matching-inference
desc: KD-trees for linear time matching in causal inference
date: 2023-11-01
github: https://github.com/leo-ware/fast-matching-inference
tags: [Python, Causal Inference, Algorithms]
category: Research
---

KD-trees for best-case linear time implementation of Abadie & Diamond's statistical matching procedure for causal inference.

## Overview

This project implements an optimized version of the matching procedure described in Abadie & Diamond's work on statistical matching for causal inference. By leveraging KD-tree data structures, the implementation achieves best-case linear time complexity, making it suitable for large-scale causal inference applications.

## Key Features

- **Efficient Data Structure**: Uses KD-trees to organize observations in high-dimensional covariate space
- **Linear Time Complexity**: Achieves best-case O(n) time complexity for matching operations
- **Scalability**: Handles large datasets efficiently, making it practical for real-world applications
- **Causal Inference**: Implements matching methods that help estimate causal effects from observational data

## Technical Background

Statistical matching is a fundamental technique in causal inference used to estimate treatment effects when randomized controlled trials are not feasible. The method matches treated and control units based on their observed covariates to reduce selection bias.

Traditional matching algorithms can be computationally expensive for large datasets. This implementation uses spatial data structures (KD-trees) to dramatically improve performance, enabling matching on larger datasets and with more covariates than previously practical.
