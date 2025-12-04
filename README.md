# Git Pre-Push Hook Demo

This demo shows how to automatically add data to a file using a Git pre-push hook.

## Files

- `add_data.py` - Python script that appends timestamped data to a file
- `pre-push` - Git hook that runs before pushing to GitHub
- `setup_hook.sh` - Script to install the hook

## Setup

1. Run the setup script to install the hook:
```bash
./setup_hook.sh
```

## Usage

### Manual data entry:
```bash
./add_data.py "Your data here"
```

### Automatic on git push:
```bash
git push origin main
```

The pre-push hook will automatically run and add an entry to `data.txt` before pushing.

## How it works

When you run `git push`, the pre-push hook executes `add_data.py`, which appends a timestamped entry to `data.txt`. If the script succeeds, the push continues; if it fails, the push is aborted.
