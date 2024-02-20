# Welcome to Our Project!

If you are an approved contributor, please see the instructions in the [Team Instructions](#team-pr-instructions) section below.

We are thrilled to have you contribute to our project! This README will guide you through creating Pull Requests (PRs) and provide you with our commit message etiquette. Whether you're new to GitHub or a seasoned user, we want to ensure everyone can contribute effectively and efficiently.

## Getting Started with Pull Requests (PRs)

A Pull Request (PR) is a way to propose changes to the codebase. It allows the maintainers to review your contribution and suggest possible modifications before merging it into the main branch.

### Step 1: Fork the Repository

- Before you can make any changes, you'll need to create a fork of the repository.
- Click on the 'Fork' button on the upper right side of the repository's page.
- This will create a copy of the repository in your own GitHub account.

### Step 2: Clone Your Fork

- On your fork's GitHub page, click the 'Clone' button and copy the URL.
- Open your terminal and run `git clone <URL>` where `<URL>` is the URL you just copied.
- Now you have a local copy of your fork on your computer.

### Step 3: Create a Branch

- Navigate to the directory of your local repository (`cd <repository-name>`).
- It's best practice to create a new branch for your changes: `git checkout -b <branch-name>`.
- Keep `<branch-name>` descriptive, e.g., `add-login-feature` or `fix-header-bug`.

### Step 4: Make Your Changes

- Open the project in your favorite editor and make your changes.
- Remember to keep changes as small and focused as possible.

### Step 5: Commit Your Changes

- Once you've made your changes, it's time to commit them.
- Run `git add .` to stage your changes and `git commit -m "<type>: <message>"` to commit them.
- Replace `<type>` with either `fix`, `chore`, or `feat`.
- Replace `<message>` with a brief message explaining your changes.

### Step 6: Push Your Branch

- After committing your changes, push your branch to your fork: `git push origin <branch-name>`.

### Step 7: Open a PR

- Go to the original repository you forked from.
- You'll see a button to 'Compare & pull request'. Click it.
- Add a descriptive title and description to your PR.
- Click 'Create pull request'.

## Commit Message Etiquette

When contributing, we like to keep our commit messages clear and meaningful. Here's the format we use:

- `fix:` Use when you've made a bug fix.
- `chore:` Use for small changes that aren't user-facing.
- `feat:` Use when you've introduced a new feature.

### Examples:

- `fix: correct typo in login screen`
- `chore: update package.json dependencies`
- `feat: add user profile settings page`

## Additional Tips

- Keep your PRs limited to a single issue. This makes them easier to review and merge.
- Be as descriptive as possible in your commit messages and PR descriptions.
- If your PR fixes an open issue, include `closes #<issue-number>` in the PR description.

## Team PR Instructions

If you are a member of the team, please follow these instructions when creating PRs:

1. **Create an Issue**: Before making any changes, create an issue describing the problem or feature you're working on. Then click **'Submit new issue'**.
   ![create issue](https://i.ibb.co/8DvtmRN/Screenshot-2024-02-19-at-6-16-27-PM.png)
2. **Click the 'Create a branch' link**: GitHub will automatically create a new branch for you based on the issue number.
   ![create branch](https://i.ibb.co/kg8t1YZ/Screenshot-2024-02-19-at-6-16-43-PM.png)
   then:
   ![copy code snippet](https://i.ibb.co/G5FssDX/Screenshot-2024-02-19-at-6-18-53-PM.png)
3. **Copy the code snippet provided**: When you create a new issue, GitHub will provide a code snippet to copy. This snippet includes the issue number and a brief description of the issue.
   ![copy code snippet](https://i.ibb.co/w7CMpMn/Screenshot-2024-02-19-at-6-19-06-PM.png)

Thank you for contributing, and don't hesitate to ask for help if you need it!
