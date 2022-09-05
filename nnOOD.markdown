---
layout: page
title: nnOOD
permalink: /nnOOD/
---

nnOOD is a framework for benchmarking self-supervised anomaly localisation methods, allowing users to compare how well different synthetic anomaly task generalise to real-world datasets.
To do this it adapts the nnU-Net framework, disentangling the task being trained on from the training pipeline, to allow for a more fair comparison.

Useful links:
 - [nnOOD paper](https://arxiv.org/abs/2209.01124)
 - [nnOOD github](https://github.com/matt-baugh/nnOOD)
 - Tasks experimented with:
   - [Foreign Patch Interpolation](https://www.melba-journal.org/papers/2022:013.html)
   - [CutPaste](https://openaccess.thecvf.com/content/CVPR2021/html/Li_CutPaste_Self-Supervised_Learning_for_Anomaly_Detection_and_Localization_CVPR_2021_paper.html)
   - [Poisson Image Interpolation](https://link.springer.com/content/pdf/10.1007%2F978-3-030-87240-3_56.pdf)
   - [Natural Synthetic Anomalies](https://arxiv.org/abs/2109.15222) (both source and mixed gradient variants).

