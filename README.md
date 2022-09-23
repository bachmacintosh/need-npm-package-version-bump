# need-npm-package-version-bump

This GitHub Action checks a Pull Request's `package.json` version against the base branch. The action will pass if the version in the PR is newer, fail if it's less/equal/undefined, and will skip if the base branch's version cannot be properly compared against.
