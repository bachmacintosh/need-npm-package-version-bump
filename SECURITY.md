# Security Policy

Security is of utmost importance to us. This Policy outlines the means for which anyone can report security vulnerabilities pertaining to this Project, and how said vulnerabilities are handled.

## Reporting Vulnerabilities

**Please do NOT open a public GitHub issue for security vulnerability reports.** Instead, [email collin@bachman.io with the subject "[GitHub] SECURITY VULNERABILITY REPORT"](mailto:collin@bachman.io?subject=[GitHub]%20SECURITY%20VULNERABILITY%20REPORT). After the email is reviewed, a Draft Security Policy will be created in GitHub, and you will be added as a contributor to the Security Advisory so that the vulnerability can be discussed privately.

We will inform you if your report is rejected as soon as possible. Rejections can be either for items not pertaining to security (i.e. should be a regular GitHub issue), or pertaining exclusively to third-party dependencies; if the vulnerability has already been submitted, we may add you as a contributor to the Draft Security Advisory that already exists.

## Vulnerability Resolution

During the resolution process, we may inquire through the Draft Security Advisory on additional information needed. Examples of information we may request include:

- Type of issue (e.g. buffer overflow, arbitrary code execution, credential stuffing, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

We will also finalize a description of the vulnerability to communicate to other users, and plan a fix version of the Project to be released that addresses the vulnerability; most fixes should be released via patch versions.

Once a fix version of the Project is released, the Security Advisory will be published, and will be mentioned in the version's release notes. All contributors to the Security Advisory will be credited per their requested method. This Project does not offer a "bug bounty" or any monetary compensation for reporting or fixing security vulnerabilities.

## Third-Party Dependency Vulnerabilities

This repository makes use of Dependabot for finding vulnerable third-party dependencies. Vulnerability reports pertaining exclusively to third-party dependencies and not the first-party code within the Project will not be accepted, but will be noted so that we can update the vulnerable dependencies as soon as possible. An unintended side effect from a dependency update not pertaining to the code's security should be submitted as a regular GitHub Issue.
