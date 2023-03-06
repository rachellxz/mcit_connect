## CIT Connect 
This repo contains the frontend and backend code for MCIT_connect. Frontend code by [@ranojoomi](https://github.com/ranojoomi) and [@jakethe555](https://github.com/jakethe555), design by [@joycewang3](https://github.com/joycewang3).


### Setting up repo
1. clone repo 
2. cd into `api` folder
3. create a virtual environment - `$ python3 -m venv venv` for macOS/Linux or `$ py -3 -m venv venv` for Windows
4. activate virtual env - `$ . venv/bin/activate` for macOS/Linux or  `$ venv\Scripts\activate` for Windows
5. install dependencies `$ pip install -r requirements.txt`
6. cd back into parent directory (`mcit_connect`)
7. `$ touch .env`
6. set up env variables in .env file
    ```
    FLASK_DEBUG=true
    FLASK_APP=start
    DB_NAME="database.db"
    SECRET_KEY=os.urandom(32)
    ```
7. cd into `web` and run `$ npm install`


### Running the app 
To run the app, you will need two terminal windows - one for frontend/web (React) and one for backend (Flask)

**Start backend (Flask)**
1. cd into `api` 
2. run `$ flask run`
Make sure you have activated the virtual environment
Flask server will be hosted on http://localhost:5000

**Start frontend (React)**
1. cd into `web`
2. run `$ npm start`
React will be loaded on http://localhost:3000

___
Notes:
- In `package.json` - adding `"proxy": "http://localhost:5000"` lets us invoke an endpoint on the Flask server
- If things aren't running, try activating the venv again...

### Setting up PostgreSQL
- Install PostgreSQL `$ brew install postgresql`
- (should already be in requirements.txt) `$ pip install psycopg2` - a postgresql database adapter for python; and `$pip install psycopg2`
- `$ brew services start postgresql@14`
- `$ brew services stop postgresql@14`
- `$psql postgres`
- `createdb {db_name}`


### Setting up MySQL
- `$ pip install mysql-connector`
or - `$ pip install mysql-connector-python`
