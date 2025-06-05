#!/bin/bash
find docs/ tasks/ -name "*.md" -exec grep -H "\- \[ \]" {} \; | \
sed 's/- \[ \]/[TASK]/g' | \
awk -F: '{print $1 ": " $2}' > tasks/extracted-tasks.txt
echo "✅ Tâches extraites dans tasks/extracted-tasks.txt"
