# need-npm-package-version-bump

This GitHub Action checks a Pull Request's version in its `package.json` file against the base branch.

## Usage

This Action can be used in a Pull Request Trigger (either `pull_request` or `pull_request_target`). Here's a couple basic examples:

### For `pull_request` Events

Add this Action as a step sometime after your `checkout` step.

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

### For `pull_request_target` Events

Make sure that the Pull Request's head ref is being checked out to properly compare old and new `package.json` versions.

```yaml
name: Tests (PR)
on:
  pull_request_target:
    jobs:
      run-tests:
        name: Test Pull Request
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v3
            with:
              ref: ${{github.event.pull_request.head.ref}}
              repository: ${{github.event.pull_request.head.repo.full_name}}
          - name: Check for Version Bump
            uses: bachmacintosh/need-npm-package-version-bump@v1
```

### For Private Repos

Make sure to provide a GitHub token that can read the base branch's contents.

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
