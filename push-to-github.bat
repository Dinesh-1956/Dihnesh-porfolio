@echo off
echo Initializing Git repository and pushing to GitHub...
echo.

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Dinesh-1956/Dihnesh-porfolio.git
git push -u origin main

echo.
echo Done! Your code has been pushed to GitHub.
pause
