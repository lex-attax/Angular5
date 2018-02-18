To create an Angular 2 project on C9 do the following:

Create a blank workspace.
Get the latest node.js (to keep ng2 CLI happy).
nvm install node
nvm use 7.4.0
nvm alias default v7.4.0
Update npm.
npm install -g npm
Get the Angular 2 CLI (Command Line Interface).
npm install -g @angular/cli
Old way (don’t do this anymore: npm install -g angular-cli@latest)
Create an Angular 2 app using the CLI.
ng new myapp
Spin up Angular 2.
ng serve --host 0.0.0.0 --port 8080 --disableHostCheck true
View your Angular 2 app running.
Press the Preview button on the top of the C9 window.

Add Github:

https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/