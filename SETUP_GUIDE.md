# GitHub Hooks Setup Guide for Beginners

This guide will walk you through setting up Git hooks locally and GitHub Actions for your repository.

## What You'll Learn
- Set up a local Git hook (pre-commit)
- Create a GitHub Actions workflow
- Test both hooks
- Merge your changes

---

## Part 1: Local Git Hook Setup

### Step 1: Create a Git Repository
```bash
cd /local/Docker/github-hooks-demo
git init
```

### Step 2: Install the Pre-Commit Hook
```bash
# Make the hook executable
chmod +x pre-commit

# Copy it to the Git hooks directory
cp pre-commit .git/hooks/pre-commit
```

### Step 3: Test the Local Hook

**Test 1: Try to commit code WITH console.log (should fail)**
```bash
# Create a file with console.log
echo 'console.log("test");' > test.js

# Try to commit
git add test.js
git commit -m "Test commit"
# ❌ This should FAIL and show an error
```

**Test 2: Commit clean code (should succeed)**
```bash
# Remove the console.log
rm test.js

# Commit the clean app.js file
git add app.js
git commit -m "Add clean application code"
# ✅ This should SUCCEED
```

---

## Part 2: GitHub Actions Setup (Server-side Hook)

### Step 1: Create a GitHub Repository
1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Name it: `hooks-demo`
4. Click "Create repository"

### Step 2: Connect Your Local Repo to GitHub
```bash
# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/hooks-demo.git

# Create main branch
git branch -M main
```

### Step 3: Push Your Code (Including GitHub Actions)
```bash
# Add all files including the workflow
git add .
git commit -m "Initial commit with GitHub Actions"

# Push to GitHub
git push -u origin main
```

### Step 4: Verify GitHub Actions is Running
1. Go to your GitHub repository
2. Click the "Actions" tab
3. You should see your workflow running
4. Click on it to see the results

---

## Part 3: Create a Pull Request and Merge

### Step 1: Create a New Branch
```bash
git checkout -b feature/add-multiply-function
```

### Step 2: Add a New Feature
```bash
# Add a new function to app.js
cat >> app.js << 'EOF'

function multiply(a, b) {
    return a * b;
}

module.exports = { greet, calculateSum, multiply };
EOF
```

### Step 3: Commit and Push
```bash
git add app.js
git commit -m "Add multiply function"
git push origin feature/add-multiply-function
```

### Step 4: Create Pull Request on GitHub
1. Go to your repository on GitHub
2. Click "Compare & pull request" button
3. Add title: "Add multiply function"
4. Add description: "This PR adds a multiply function to the app"
5. Click "Create pull request"

### Step 5: Wait for Checks to Pass
- GitHub Actions will automatically run
- You'll see a green checkmark when it passes
- If it fails, you'll see a red X

### Step 6: Merge the Pull Request
1. Click "Merge pull request" button
2. Click "Confirm merge"
3. Optionally delete the branch

### Step 7: Pull Changes Locally
```bash
git checkout main
git pull origin main
```

---

## Part 4: Test the Hook Protection

### Try to Break the Rules
```bash
# Create a new branch
git checkout -b test/bad-code

# Add code with console.log
echo 'function debug() { console.log("debug"); }' >> app.js

# Try to commit
git add app.js
git commit -m "Add debug function"
# ❌ Local hook should BLOCK this
```

### Fix and Commit
```bash
# Restore the file
git checkout app.js

# Add proper code
echo 'function divide(a, b) { return a / b; }' >> app.js

# Commit successfully
git add app.js
git commit -m "Add divide function"
# ✅ Should succeed

# Push and create PR
git push origin test/bad-code
```

---

## Summary

You've now set up:

✅ **Local Git Hook** (pre-commit)
   - Runs on your machine before each commit
   - Blocks commits with console.log

✅ **GitHub Actions** (server-side)
   - Runs on GitHub when you push or create PR
   - Provides CI/CD automation

✅ **Pull Request Workflow**
   - Create branch → Make changes → Push → PR → Merge

---

## Common Commands Reference

```bash
# Check hook status
ls -la .git/hooks/

# Bypass hook (emergency only!)
git commit --no-verify -m "Emergency fix"

# View GitHub Actions locally
cat .github/workflows/ci.yml

# Check current branch
git branch

# View commit history
git log --oneline
```

---

## Troubleshooting

**Hook not running?**
- Check if file is executable: `ls -l .git/hooks/pre-commit`
- Make it executable: `chmod +x .git/hooks/pre-commit`

**GitHub Actions not running?**
- Check the Actions tab in your repository
- Ensure `.github/workflows/` directory exists
- Verify YAML syntax is correct

**Can't push to GitHub?**
- Check remote: `git remote -v`
- Verify authentication: `git config user.name` and `git config user.email`

---

## Next Steps

1. Add more checks to your pre-commit hook (linting, formatting)
2. Add tests to your GitHub Actions workflow
3. Set up branch protection rules on GitHub
4. Explore other GitHub Actions (deploy, release, etc.)

Happy coding! 🚀
