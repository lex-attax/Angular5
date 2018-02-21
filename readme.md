Course: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview

Using C9 IDE: https://c9.io/

To create an Angular 2 project on C9 do the following:

Create a blank workspace.
Get the latest node.js (to keep ng2 CLI happy).
nvm install node#
nvm use v9.5.0 nvm alias default v9.5.0
Update npm.
npm install -g npm
Get the Angular 2 CLI (Command Line Interface).
npm install -g @angular/cli Old way (don’t do this anymore: npm install -g angular-cli@latest)
Create an Angular 2 app using the CLI.
ng new myapp
Spin up Angular 2.
ng serve --host 0.0.0.0 --port 8080 --disableHostCheck true
View your Angular 2 app running.
Press the Preview button on the top of the C9 window.

Add Github:

git init git add .
Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
git commit -m"first commit"
Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
git remote add origin "remote repository URL"
Sets the new remote
git remote -v
Verifies the new remote URL git push origin master Pushes the changes in your local repository up to the remote repository you specified as the origin


Git troubleshooting:

folder icon is grey in guthub:
git rm --cached <folder_name>
git add .
git commit -m "<your_message>"
git push --all

Install Bootstrap:
npm install --save bootstrap@3

Update node to newest version:
nvm install node