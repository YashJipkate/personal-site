---
title: 'GSoC 2021 with UCCROSS'
author: 'Yash Jipkate'
image: 'skyhookdm.png'
category: 'GSoC'
shortDesc: 'My GSoC21 experience with UCCROSS, also GSoC submission report for the same.'
date: 'August 13, 2021'
---

Google Summer of Code is a program, sponsored by Google, that aims to connect students with open source projects. Many people go as far as to call GSoC as the 'Olympics of Software Developers'. I applied in the past two years, but couldn't commit to it fully due to various reasons. This year, marking my third attempt, I was selected to work on the documentation of the [SkyhookDM project](https://github.com/uccross/skyhookdm-arrow) that is being developed by the [UCCROSS](https://uccross.github.io/) community.

## Port wiki to ReadTheDocs or another documentation platform - what does that mean?

The above is the title of my project. But more importantly, what does that say or what is the purpose of this project? As you might have guessed, this project aims to modify the existing documentation. The main idea is to make the documentation more user friendly and easily accessible. The current documentation for SkyhookDM was scattered across different repositories, and it was difficult to navigate through them. The documentation was also not  user friendly, and the code was not documented. For example, the instructions to setup a local instance was in the project's README, the cloud setup instructions were spread across multiple repos depending on how to deploy it, and the concepts and architecture were in a totally different site, among many others. This made it difficult to find the information needed, as well as maintaining them.

Now the task - **Consolidate** the various documentation pieces into a single place, or atleast connect them centrally, **Improve and Expand** the existing documentation/docstrings, adding any missing information or improving the existing ones, and **Deploying** the documentation to a dedicated website using a static site generator, and also integrating the relevant parts of API docstrings into the upstream [Arrow](https://github.com/apache/arrow) project.

This is a very important task, as it will help the community to understand the project better, and also help the developers to understand the project better.

## How did I do it then?

I started by taking a look at the existing documentation, and tried to understand what could be added. I also looked at the existing docstrings, and tried to understand what could be improved and what could be done to make the documentation more comprehensive and also to ensure it conforms to Apache standards.

### Docstrings

I added the docstrings to the C++ and the Python files, complete with descriptions and params. The docstrings were conforming to the Apache standards for documentation.

These were the PRs regarding this:

- [Added docstrings to file_rados_parquet.cc/h](https://github.com/uccross/skyhookdm-arrow/pull/163)
- [Add docstrings to cls_arrow.cc and file_rados_parquet.h](https://github.com/uccross/skyhookdm-arrow/pull/169)
- [Fix docstring param in file_rados_parquet.h](https://github.com/uccross/skyhookdm-arrow/pull/172)
- [Add docstrings for _rados.pyx_ and _rados.py_ modules.](https://github.com/uccross/skyhookdm-arrow/pull/176)

### Documentation

The main project README had links to various external repositories regarding instructions to set up development instances. These external repositories also had the scripts for setting up  SkyhookDM. I pulled the scripts into the main repository, and added the instructions to CONTRIBUTING.md. There were other documentation like benchmarking and build instructions that were also pulled into the main repository. I also added some documentation regarding design and architecture from the SkyhookDM research paper.

These were the PRs regarding this:

- [Add docker instructions](https://github.com/uccross/skyhookdm-arrow/pull/192)
- [Added hands-on instructions](https://github.com/uccross/skyhookdm-arrow/pull/201)
- [SKYHOOK-203: Fix benchmarking.md](https://github.com/uccross/skyhookdm-arrow/pull/205)
- [SKYHOOK-204: Add Design Paradigm section to architecture.md.](https://github.com/uccross/skyhookdm-arrow/pull/206)
- [Added build instructions.](https://github.com/uccross/skyhookdm-arrow/pull/212)

### Integration of the docstrings with the upstream Arrow project

The docstrings of the API need to be documented in the Arrow documentation that would appear in [Arrow's documentation site](arrow.apache.org/docs/) so contributors and consumers of Apache Arrow can know about the RADOS Parquet APIs without having a prior knowledge of the SkyhookDM project. I referenced the API docstrings in the appropriate sections of the Arrow documentation.

This was the PR regarding this:

- [Reference RADOS Parquet in docs](https://github.com/uccross/skyhookdm-arrow/pull/215)

### Deploying the documentation on ReadTheDocs

During the review of the SkyhookDM PR against the upstream Arrow project, its maintainers suggested moving the documentation regarding the in-depth details and deployment instructions in a separate repository. My mentor [Jayjeet](https://github.com/JayjeetAtGithub) created a [new repository](https://github.com/uccross/skyhookdm) that acted as a parent to the main skyhookdm-arrow repository, and added most of the documentation and deployment scripts to it, retaining only the necessary information in the main repository. I then deployed this repository to ReadTheDocs, adding the necessary configuration. Since I was granted maintainer privileges to this repository, I didn't make PRs and instead just committed to the repository. You can find a list of my commits [here](https://github.com/uccross/skyhookdm/commits?author=YashJipkate).

The documentation is now live at [skyhookdm-arrow.readthedocs.io/](https://skyhookdm-arrow.readthedocs.io/en/latest/)!

## What did I learn?

I had used some SSGs previously, but they were code-centred, unlike ReadTheDocs which directly deploys the documentation. With the correct configuration, it works like a charm. I also learnt a lot about SkyhookDM and the RADOS Parquet API, and how it works. I didn't know much outside the Web Development world, so I had a lot to learn here. While writing the documentation one has to keep in mind the knowledge of a beginner, and structuring the documentation in a way that makes sense to the reader. This was a great learning experience for me.

## Future work

The documentation needs to be maintained and kept up-to-date. If need arises, more information would need to be added to the documentation. The deployed site also needs to be looked after for any accidental downtimes and bug fixes if necessary.

## Acknowledgements

I would like to thank my mentor [Jayjeet](https://github.com/JayjeetAtGithub) for his support and guidance. I would like to also offer my gratitudes to Google and CROSS, UC Santa Cruz to be given this amazing opportunity to work on this project.

_I would also like to thank Github Copilot which wrote almost 30% of this blogpost :P_
