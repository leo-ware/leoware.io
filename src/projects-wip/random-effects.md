---
title: Intro to random effects
desc: How random effect models work and why we need them
---

# Linear Regression

Suppose we want to measure the effect of some treatmen

# Random Effects

Now, imagine a slightly more complex case. To study the effect of treatment, multiple hospitals will conduct their own RCTs to measure the effect of the treatment. Our job is to take the data from all the hospitals, merge it together, and try to determine the effect of the treatment.

There are a couple of ways this is more complicated than the first problem. First, patients at the different hospitals might have different baseline levels of health. So, outcome won't just be determined by whether treatment is applied but also by which hospital the patient is at. Second, the hospitals might be more or less good at implementing the treatment.

One way to approach these problems would be to fit different models for each hospital, which would isolate the baseline and treatment effect at each hospital. However, this isn't really solving the problem. What we really want to know is how the treatment would work if it was applied at a new hospital. We don't just want to generalize across patients, we want to generalize across hospitals.

To solve this problem, we can use random effect models. With random effect models, we assume that units belong to *groups* (in our example, hospitals) and that these groups are drawn from some larger hypothetical population of groups.