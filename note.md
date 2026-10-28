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

`npm i axios`


## TO HIDE OUR API KEY
- create a '.env' file in same folder as package.json

- add the line 
    `REACT_APP_API_KEY=90430e34`

    always remember to have **REACT_APP** _YOUR KEY

- go to the requests folder where you previously had ur API_KEY and change it to
    `const API_KEY = process.env.REACT_APP_API_KEY`

- then add ".env" to your .gitignore

# 4. Building Netflix Banner



# 5. Building Netflix rows




# 6. Netflix Project Deployment