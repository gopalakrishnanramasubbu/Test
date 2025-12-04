#!/bin/bash

if [ ! -d ".git" ]; then
    echo "Error: Not a git repository"
    exit 1
fi

cp pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-push
echo "Pre-push hook installed successfully"
