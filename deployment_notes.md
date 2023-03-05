This repo contains the frontend and backend code for MCIT_connect. Frontend code by Radin + Jake - https://github.com/ranojoomi/MCITConnect-Frontend. I cloned their repo because I needed a personal access token to clone in the remote server.

### Updates:
- on my local machine, frontend and backend are connected (via `proxy` in `web/package.json`) and writing to the database works! 
- i've deployed the code to an ec2 instance and served the React and Flask app - http://52.91.132.146/ (currently http, will need to get an SSL certificate which requires additional setup and also link to the custom domain I got - mcitconnect.com lol)

**current issue:**
*frontend and backend are disconnected in prod. API requests aren't actually made to Flask.*
    - e.g. if you submit the form and inspect Network, the response is incorrect. 
- through some sleuthing, it is because using `proxy` to connect front+backend doesn't work in production (which is why everything is all good only in a dev environment) [see here: https://stackoverflow.com/questions/45911067/create-react-app-proxy-in-production-build?fbclid=IwAR31llNcsEIsQ39scMmc5ZU8M8ZACWDhIN3WPfBciqjMp7gMNbOQelyfsxI; https://github.com/facebook/create-react-app/issues/1087#issuecomment-262611096]
- https://create-react-app.dev/docs/proxying-api-requests-in-development/
- I tried updating to `proxy : {public IP address:5000}`, but this results in **CORS** errors that I wasn't able to resolve

**to investigate:**
- using a proxy middleware [see: https://github.com/chimurai/http-proxy-middleware/issues/464]
- resolving CORS issues


**Side note** - I'm currently using sqlite3 for now to test deployment to ec2 (but will need to set up a postgres or MySQL instance once frontend and backend are actually connected in prod environment) :(  [will only need to make a minor change in `api/app.py` >> DATABASE_URI]


### DEPLOYMENT
1. create amazon aws account
2. install the aws command line interface - follow instructions here (https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
3. run `$ which aws` to check that it's working, and `$ aws --version`

### EC2 SETUP
Follow AWS documentation to set up EC2 (before: create keypair name, security groups).
>>>> https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html
- You don't *have* to create an administrative user 
- I chose the Amazon Linux OS
- key-pair-name.pem = mcitconnect23.pem
- username = rxzlim96/{your user name}or ec2-user

For security groups, 
Inbound rules: 
port range | protocol | source
5000 | TCP | 0.0.0.0/0
80   | TCP | 0.0.0.0/0
443  | TCP | 0.0.0.0/0
22   | TCP | (your IP address)

Outbound rules:
All | All | 0.0.0.0/0

Once the instance is launched and running, we can remote access it.

**SSH into EC2 instance**
You should already have some default ssh client on your machine.
To check - `$ ssh`

If you are using an SSH client on a macOS/Linus computer, set the permissions of the private key file:
`chmod 400 {key-pair-name}.pem`

We will SSH into the launched ec2 instance using the command format:
- `ssh -i {/path/key-pair-name}.pem {instance-user-name}@{instance-public-dns-name}`

In the directory where the pem file is, run:
`ssh -i mcitconnect23.pem ec2-user@ec2-34-239-124-231.compute-1.amazonaws.com`
`ssh -i mcitconnect23.pem ec2-user@ec2-3-239-227-119.compute-1.amazonaws.com`
`ssh -i mcitconnect23.pem ec2-user@ec2-52-201-180-73.compute-1.amazonaws.com`
`ssh -i mcitconnect23.pem ec2-user@ec2-3-86-18-118.compute-1.amazonaws.com`

Once you've SSH-ed into the remote ec2 instance... there is nothing on it. You'll need to install dependencies.
- Install git and python-pip
    - `sudo yum install git`
    - `sudo yum install python-pip`

- Install nodejs
`curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -`
`sudo yum install yarn`
`sudo yum install -y nodejs`
check that it's working: `which node` and `node --version`

*Cloning existing git repo*
- `git clone https://github.com/rachellxz/test_cit_connect.git`
- `git clone https://github.com/rachellxz/mcit_connect.git`

Follow the set up steps in the git repo (e.g. pip install dependencies, setting env variables, virtual env)
- when prompted for username and password: rachellxz
- use access token for password: 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

## RUN THE APP
cd into `api`
`$. venv/bin/activate` and `$ flask run` as normal, or `flask run --host=0.0.0.0`

cd into `web`
`$ npm install`
`$ npm start`
`$ npm run build`
`$ sudo npm install -g serve`
`$ sudo PORT=80 serve -s build`

go to `http://{public IPv4 address}` to check if the app has loaded
or `curl localhost:80`, and `curl localhost:5000` to check if Flask is running 


## to run the app forever 
We want to run the apps on the ec2 instance forever, so that when we exit the terminal, the apps continue running!
`sudo npm install pm2 -g`

in api:
`nohup bash -c "flask run" &`
^ the & runs the command in the background!

in web:
`nohup bash -c "sudo PORT=80 serve -s build" &`



### NOTES
To get root access on the Linux OS (your EC2 instance)
- run `$ sudo su -`
The terminal prompt will become # and will indicate that you are the root user and will now have root privileges on all operations in the cli.
- To logout of the root account, type exit or ctrl + D

use vim
- when you're in the remote server, you'll have to use vim to edit + create (and write) files
- e.g. `vim .env` will open a .env file and you can edit it 
- press the key `i` to change the command to INSERT
- edit the file as normal (using arrows to navigate)
- when you're done editing, press the `esc` key 
- either do shift + z + z keys, or press `:` to open the prompt bar (and then type `x` or `:wq` which writes the file)


___ 
## other miscellaneous setup

- run gunicorn command 
- `$ sudo amazon-linux-extras install nginx1` (amazon linux does not have `$ sudo yum install nginx`)
## nginx
`sudo nano /etc/systemd/system/citconnect.service`
    ```
    [Unit]
    Description=Gunicorn instance to serve citconnect project
    After=network.target

    [Service]
    User=ec2-user
    Group=www-data
    WorkingDirectory=/home/ec2-user/test_cit_connect/api
    ExecStart=/home/ec2-user/test_cit_connect/api/venv/bin/gunicorn -b localhost:5000 start:app
    Restart=always

    [Install]
    WantedBy=multi-user.target
    ```

UPDATE: api/start.py
```
from app import app

if __name__ == '__main__':
    app.run(host='0.0.0.0')
```



## IGNORE FOR NOW ....
### gunicorn configs
1.
    ```
    pip install gunicorn
    pip freeze > requirements.txt
    ```
2. cd into `api` (where the flask app lies)
3. on cli - `$ gunicorn start:app -w 2 -b 0.0.0.0:8080 -t 30`
Normally, we would create a file called `wsgi.py` (this serves as the WSGI entry point, which tells the gunicorn server how to interact with the application).
    ```
    from app import app
    if __name__ == "__main__":
        app.run()
    ```
and run `$ gunicorn wsgi:app -w 2 -b 0.0.0.0:8080 -t 30` (check if gunicorn is serving the flask app correctly)
but we already have one called `start.py` so we can just run `$ gunicorn start:app --preload -w 2 -b 0.0.0.0:5000`

- running gunicorn with `--preload` gives us more detailed error logs!
- you can also specify/change the port to bind the flask app to e.g. `0.0.0.0:5000`
- if you visit `http://{your_server_ip}:5000` you should see your flask app running!
cli output should look like:
    ```
    [2023-03-03 14:23:31 -0500] [15921] [INFO] Starting gunicorn 20.1.0
    [2023-03-03 14:23:31 -0500] [15921] [INFO] Listening at: http://0.0.0.0:8080 (15921)
    [2023-03-03 14:23:31 -0500] [15921] [INFO] Using worker: sync
    [2023-03-03 14:23:31 -0500] [15922] [INFO] Booting worker with pid: 15922
    [2023-03-03 14:23:31 -0500] [15923] [INFO] Booting worker with pid: 15923
    ```

### docker configs [OPTIONAL]
0. install docker - `$ brew install docker`
1. move requirements.txt into `api`
2. create the Dockerfile in `api` dir 
```
FROM python:3.9.5
WORKDIR /api
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["gunicorn", "start:app", "-w 2", "-b 0.0.0.0:5000", "-t 30"]
```
___
