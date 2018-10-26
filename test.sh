#!/bin/bash
echo "**** github page building process ****"

echo "**** At Source Project Directory ****"
git add --all
git commit -m $1
git push
echo "Source project changes committed to https://github.com/piyumi11/angularTest.git"
# copy build files

find "D:/dialog/projectname/dist/projectname" -maxdepth 1 -type f | xargs cp -t "D:/TestGit/piyumi11.github.io"
cp -r "D:\dialog\projectname\dist\projectname\assets" "D:/TestGit/piyumi11.github.io"

echo "**** At Deployment Project Directory ****"
cd "D:/TestGit/piyumi11.github.io"
git add --all
git commit -m $2
git push
echo "Built files changes committed to https://github.com/piyumi11/piyumi11.github.io.git"

read -p "Press enter to continue"

