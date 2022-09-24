# need-npm-package-version-bump

This GitHub Action checks a Pull Request's version in its `package.json` file against the base branch.

## Usage

This Action can be used in a Pull Request Trigger (either `pull_request` or `pull_request_target`). Here's a basic example:

```yaml
name: Tests (PR)
on:
  pull_request:
    jobs:
      run-tests:
        name: Test Pull Request
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v3
          - name: Check for Version Bump
            uses: bachmacintosh/need-npm-package-version-bump@v1
```

For private repos, make sure to provide a GitHub token that can read the base branch's contents.

```yaml
name: Tests (PR)
on:
  pull_request:
    jobs:
      run-tests:
        name: Test Pull Request
        runs-on: ubuntu-latest
        permissions:
          contents: read
        steps:
          - name: Checkout
            uses: actions/checkout@v3
          - name: Check for Version Bump
            uses: bachmacintosh/need-npm-package-version-bump@v1
            with:
              repo-token: ${{ secrets.GITHUB_TOKEN }}
```

### Inputs

| Name         | Required | Default | Description                                                    |
| ------------ | -------- | ------- | -------------------------------------------------------------- |
| `repo-token` | `false`  | `""`    | A GitHub issued token that can read the base branch's contents |

## Results

### Pass

- Both the base branch and pull request have a `package.json` file with a set version that complies with [SemVer](https://semver.org/)
- The pull request version is greater than the base branch version

### Fail

- Either the base branch or pull request are lacking a `package.json` file
- The base branch has a `package.json` file with a set version, but the PR does not
- The PR `package.json` file's version does not comply with SemVer, or is less than/equal to the base branch version
- An uncaught exception orccurs (feel free to open an Issue or PR!)

### Skip

- The Action was run outside a Pull Request
- The base branch `package.json` version is not set, or does not comply with SemVer
