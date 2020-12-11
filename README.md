# SEA INFO-6150 Final Project

Link to final project assignment: https://northeastern.instructure.com/courses/23067/assignments/23113

Link to project: https://helldream.github.io/seainfo6150-final-project-webapp/

**Note:**

To access 404 Error page, The website should be run locally. To trigger the error page, a random URL should work, such as:

http://localhost:3000/abab/

http://localhost:3000/abab/cdef

<hr>

# Github instructions

## Project repo
https://github.com/SEAINFO6150/seainfo6150-final-project-webapp

## Forking and cloning repo and adding upstream
1. Go to the git repo link above
2. Click “Fork” to create your copy of the repo
3. Click “Clone or download” to get a link to copy your fork on your computer
4. Click “Use HTTPS”
5. Copy link
6. Open command line/terminal window and use these commands in a directory where you have admin permissions
```
git clone [copied link]
cd seainfo6150-final-project-webapp
```

## Saving, committing and pushing your changes to your fork
1. Make changes in your fork
2. Open command line and use these commands inside your final project directory
```
git add .
git commit -m “[commit name]”
git push origin master
```

<hr>

# Validator bookmarklet

Install this bookmarklet

Make a new bookmark in your browser (right-click on the [bookmarks bar](https://support.google.com/chrome/answer/95745?hl=en) and click `Add Page...`)

- For the "Name" you might put "Validate HTML".
- Copy the code block below, paste this into the "Location" of a new bookmark.

```
javascript:void%20function(){javascript:(async%20function(){const%20a=document.querySelector(%22html%22).cloneNode(!0),b=document.createElement(%22div%22);b.appendChild(a);const%20c=`%3C!DOCTYPE%20html%3E${b.innerHTML}`.replace(/style%20type=\%22text\/css\%22/g,%22style%22),d=await%20fetch(`http://localhost:3000/nu/%23text-area`,{method:%22POST%22,cache:%22no-cache%22,mode:%22cors%22,headers:{%22Content-Type%22:%22text/html;%20charset=UTF-8%22,%22User-Agent%22:navigator.userAgent},referrerPolicy:%22no-referrer%22,body:c}),e=await%20d.text(),f=window.open(%22about:blank%22,%22%22,%22width=700,height=500%22);let%20g=e.replace(%22style.css%22,%22https://validator.w3.org/nu/style.css%22);g=g.replace(/\%3Cform(.*)form\%3E/g,%22%22),f.document.write(g)})()}();
```

When you click the bookmark while viewing a page in the web app, a window will be opened that will validate your HTML with W3C Validator (http://validator.w3.org).

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the modules needed to run the app in node_modules.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.