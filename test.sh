#!/bin/bash
echo "**** github page building process ****"

echo "**** At Source Project Directory ****"
git status
git branch
git add --all
git commit -m $1
git push

# copy build files

find "D:/dialog/projectname/dist/projectname" -maxdepth 1 -type f | xargs cp -t "D:/TestGit/piyumi11.github.io"

echo "**** At Source Project Directory ****"
cd "D:/TestGit/piyumi11.github.io"
git status


read -p "Press enter to continue"

