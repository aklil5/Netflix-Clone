1. Create react-app and Setting up the Environment
2. Building Netflix Header and Footer
3. Get API key and Movies endpoint from TMDB
4. Building Netflix Banner
5. Building Netflix rows
6. Netflix Project Deployment

---
# 1. Create react-app and Setting up the Environment
- setup vite


# 2. Building Netflix Header and Footer
- go to 
    "mui.com"
    - and search for Material icon

- install it using
    npm install @......

- then import the icon to your Header and use it as a Component



# 3. Get API key and Movies endpoint from TMDB
- search the movie database
- go to your account => create API
- you can also check out the documentation

- under the "src" folder create
    - "utils" folder and inside it
        - [axois.jsx]
        - [requests.jsx]

`npm install axios`


## TO HIDE OUR API KEY
- create a '.env' file in same folder as package.json

- add the line 
    `VITE_API_KEY=90430e34`

    always remember to have **VITE** _YOUR KEY

- go to the requests folder where you previously had ur API_KEY and change it to
    `const API_KEY = import.meta.env.VITE_API_KEY`

- then add ".env" to your .gitignore


### DONT FORGET TO RESTART YOUR REACT APP
    npm run dev

# 4. Building Netflix Banner
- we use axios and requests.


# 5. Building Netflix rows

- you can combine the **base url** and either the backdrop_Path or Poster_path to check the image yourself.

- using props you have have multiple Rows

```
npm i movie-trailer
npm i react-youtube
```



# 6. Netflix Project Deployment
- to deploy you must install "github-pages"
```
npm install --save-dev github-pages
```


PACKAGE.JSON
add this line at the very top
"homepage": "https://aklil5.github.io/Netflix-Clone"

go to scripts section
    between dev and build add
        ```
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        ```
