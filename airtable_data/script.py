# This file contains a python script to 
#   1. create a sqlite database (database.db)
#   2. read from a CSV file (data downloaded from Airtable) 
#   3. process user's input to the survey
#   4. save user data to sqlite database with one-hot encoding (i.e. with the correct table columns)
#   5. export the database as csv file (output.csv) - which can be used as a dataframe etc.

# make sure you have pip installed the following dependencies: Flask, pandas, Flask-SQLAlchemy

# To run the script: `$ python3 script.py` on the command line 

# Note: this script is meant to be run *once* on the final csv downloaded from Airtable
#       if you wish to rerun it again, make sure to first delete the old database.db and output.csv that was created


from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
import csv
import pandas as pd


app = Flask(__name__)
print("Running the app!")

@app.route('/')
def hello():
    return 'Hello, World!'

basedir = os.path.abspath(os.path.dirname(__file__))
db_name = "database.db"
db_path = basedir + "/" + db_name
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from sqlalchemy.orm import validates
import re

class User(db.Model):
    __tablename__ = 'users'

    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    email = db.Column(db.String(150), primary_key=True)

    # cats or dogs
    cats = db.Column(db.Integer)
    dogs = db.Column(db.Integer)

    # favorite music genre
    pop = db.Column(db.Integer)
    rock = db.Column(db.Integer)
    hiphop = db.Column(db.Integer)
    jazz = db.Column(db.Integer)
    country = db.Column(db.Integer)
    edm = db.Column(db.Integer)
    classical = db.Column(db.Integer)

    # favorite cuisine
    indian = db.Column(db.Integer)
    italian = db.Column(db.Integer)
    chinese = db.Column(db.Integer)
    japanese = db.Column(db.Integer)
    korean = db.Column(db.Integer)
    mexican = db.Column(db.Integer)
    thai = db.Column(db.Integer)
    mediterranean = db.Column(db.Integer)
    american = db.Column(db.Integer)

    # travel
    big_cities = db.Column(db.Integer)
    nature = db.Column(db.Integer)
    architecture = db.Column(db.Integer)
    leisure_and_chill = db.Column(db.Integer)

    # movie genre
    action = db.Column(db.Integer)
    romance = db.Column(db.Integer)
    sitcom = db.Column(db.Integer)
    horror = db.Column(db.Integer)
    drama = db.Column(db.Integer)
    comedy = db.Column(db.Integer)
    scifi = db.Column(db.Integer)
    anime = db.Column(db.Integer)

    # morning or night
    morning = db.Column(db.Integer)
    night = db.Column(db.Integer)

    # hobbies
    hiking_outdoor_activities = db.Column(db.Integer)
    cooking = db.Column(db.Integer)
    shopping = db.Column(db.Integer)
    video_games = db.Column(db.Integer)
    reading = db.Column(db.Integer)
    music = db.Column(db.Integer)
    photography = db.Column(db.Integer)
    gardening = db.Column(db.Integer)
    sports = db.Column(db.Integer)
    board_games = db.Column(db.Integer)
    gym_workout = db.Column(db.Integer)
    pilates_yoga = db.Column(db.Integer)

    # fun MCIT questions
    # two sum

    two_sum = db.Column(db.String(150))
    favorite_language = db.Column(db.String(150))
    favorite_CIT_class = db.Column(db.String(150))
    spaces = db.Column(db.Integer)
    tabs = db.Column(db.Integer)

    def __init__(self, first_name, last_name, email, cats, dogs, pop, rock,
                 hiphop, jazz, country, edm, classical, indian, italian,
                 chinese, japanese, mexican, korean, american, thai,
                 mediterranean, big_cities, nature, architecture,
                 leisure_and_chill, action, romance, sitcom, horror, drama,
                 comedy, scifi, anime, morning, night,
                 hiking_outdoor_activities, cooking, shopping, video_games,
                 reading, music, photography, gardening, sports, board_games,
                 gym_workout, pilates_yoga, two_sum, favorite_language,
                 favorite_CIT_class, spaces, tabs):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.cats = cats
        self.dogs = dogs
        self.pop = pop
        self.rock = rock
        self.hiphop = hiphop
        self.jazz = jazz
        self.country = country
        self.edm = edm
        self.classical = classical
        self.indian = indian
        self.italian = italian
        self.chinese = chinese
        self.japanese = japanese
        self.mexican = mexican
        self.thai = thai
        self.korean = korean
        self.american = american
        self.mediterranean = mediterranean
        self.big_cities = big_cities
        self.nature = nature
        self.architecture = architecture
        self.leisure_and_chill = leisure_and_chill
        self.action = action
        self.romance = romance
        self.sitcom = sitcom
        self.horror = horror
        self.drama = drama
        self.comedy = comedy
        self.scifi = scifi
        self.anime = anime
        self.morning = morning
        self.night = night
        self.hiking_outdoor_activities = hiking_outdoor_activities
        self.cooking = cooking
        self.shopping = shopping
        self.video_games = video_games
        self.reading = reading
        self.music = music
        self.photography = photography
        self.gardening = gardening
        self.sports = sports
        self.board_games = board_games
        self.gym_workout = gym_workout
        self.pilates_yoga = pilates_yoga
        self.two_sum = two_sum
        self.favorite_language = favorite_language
        self.favorite_CIT_class = favorite_CIT_class
        self.spaces = spaces
        self.tabs = tabs

    def __repr__(self):
        return f'<User created: {self.first_name}, {self.last_name}, {self.email}>'
    
global_email_set = set()
    
def sign_up(user_data):
    firstName = user_data.get('firstName')
    lastName = user_data.get('lastName')
    email = user_data.get('email')
    
    if email in global_email_set:
        return
    
    global_email_set.add(email)

    selectedCatDogList = user_data.get('selectedCatDogList')

    cats_dogs = {"Cats": 0, "Dogs": 0}

    for key in cats_dogs:
        if key in selectedCatDogList:
            cats_dogs[key] = 1

    cats = cats_dogs["Cats"]
    dogs = cats_dogs["Dogs"]

    selectedMusicList = user_data.get('selectedMusicList')
    music = {
        "Pop": 0,
        "Classical": 0,
        "Hip Hop": 0,
        "EDM": 0,
        "Jazz": 0,
        "Rock": 0,
        "Country": 0
    }

    for key in music:
        if key in selectedMusicList:
            music[key] = 1

    pop = music["Pop"]
    rock = music["Rock"]
    hiphop = music["Hip Hop"]
    jazz = music["Rock"]
    country = music["Country"]
    edm = music["EDM"]
    classical = music["Classical"]

    selectedCuisineList = user_data.get('selectedCuisineList')
    cuisine = {
        "Indian": 0,
        "Chinese": 0,
        "Italian": 0,
        "Mexican": 0,
        "Mediterranean": 0,
        "American": 0,
        "Korean": 0,
        "Japanese": 0,
        "Thai": 0,
    }

    for key in cuisine:
        if key in selectedCuisineList:
            cuisine[key] = 1

    indian = cuisine["Indian"]
    italian = cuisine["Italian"]
    chinese = cuisine["Chinese"]
    japanese = cuisine["Japanese"]
    mexican = cuisine["Mexican"]
    thai = cuisine["Thai"]
    mediterranean = cuisine["Mediterranean"]
    american = cuisine["American"]
    korean = cuisine["Korean"]

    selectedPlaceList = user_data.get('selectedPlaceList')
    places = {
        "Big Cities": 0,
        "Nature": 0,
        "Architecture": 0,
        "Leisure & Chill": 0
    }

    for place in places:
        if place in selectedPlaceList:
            places[place] = 1

    big_cities = places["Big Cities"]
    nature = places["Nature"]
    architecture = places["Architecture"]
    leisure_and_chill = places["Leisure & Chill"]

    selectedMovieList = user_data.get('selectedMovieList')
    movies = {
        "Action": 0,
        "Horror": 0,
        "Sci-fi": 0,
        "Romance": 0,
        "Drama": 0,
        "Anime": 0,
        "Comedy": 0,
        "Sit-com": 0
    }

    for movie in movies:
        if movie in selectedMovieList:
            movies[movie] = 1

    action = movies["Action"]
    romance = movies["Romance"]
    sitcom = movies["Sit-com"]
    horror = movies["Horror"]
    drama = movies["Drama"]
    comedy = movies["Comedy"]
    scifi = movies["Sci-fi"]
    anime = movies["Anime"]

    selectedDayList = user_data.get('selectedDayList')
    days = {"Morning": 0, "Night": 0}

    for day in days:
        if day in selectedDayList:
            days[day] = 1

    morning = days["Morning"]
    night = days["Night"]

    selectedHobbyList = user_data.get('selectedHobbyList')
    hobbies = {
        "Hiking/Outdoors": 0,
        "Video Games": 0,
        "Shopping": 0,
        "Photography": 0,
        "Sports": 0,
        "Gardening": 0,
        "Music": 0,
        "Cooking": 0,
        "Board Games": 0,
        "Reading": 0,
        "Yoga/Pilates": 0,
        "Gym/Workout": 0
    }

    for hobby in hobbies:
        if hobby in selectedHobbyList:
            hobbies[hobby] = 1

    hiking_outdoor_activities = hobbies["Hiking/Outdoors"]
    cooking = hobbies["Cooking"]
    shopping = hobbies["Shopping"]
    video_games = hobbies["Video Games"]
    reading = hobbies["Reading"]
    music = hobbies["Music"]
    photography = hobbies["Photography"]
    gardening = hobbies["Gardening"]
    sports = hobbies["Sports"]
    board_games = hobbies["Board Games"]
    gym_workout = hobbies["Gym/Workout"]
    pilates_yoga = hobbies["Yoga/Pilates"]

    two_sum = user_data.get('twoSums')
    favorite_language = user_data.get("languages")
    favorite_CIT_class = user_data.get("classes")

    selectedSpacesTabs = user_data.get('selectedSpacesTabs')
    spaceTabs = {"spaces": 0, "tabs": 0}

    for key in spaceTabs:
        if key in selectedSpacesTabs:
            spaceTabs[key] = 1

    spaces = spaceTabs["spaces"]
    tabs = spaceTabs["tabs"]

    new_user = User(
        first_name=firstName,
        last_name=lastName,
        email=email,
        cats=cats,
        dogs=dogs,
        pop=pop,
        rock=rock,
        hiphop=hiphop,
        jazz=jazz,
        country=country,
        edm=edm,
        classical=classical,
        indian=indian,
        italian=italian,
        chinese=chinese,
        japanese=japanese,
        mexican=mexican,
        korean=korean,
        american=american,
        thai=thai,
        mediterranean=mediterranean,
        big_cities=big_cities,
        nature=nature,
        architecture=architecture,
        leisure_and_chill=leisure_and_chill,
        action=action,
        romance=romance,
        sitcom=sitcom,
        horror=horror,
        drama=drama,
        comedy=comedy,
        scifi=scifi,
        anime=anime,
        morning=morning,
        night=night,
        hiking_outdoor_activities=hiking_outdoor_activities,
        cooking=cooking,
        shopping=shopping,
        video_games=video_games,
        reading=reading,
        music=music,
        photography=photography,
        gardening=gardening,
        sports=sports,
        board_games=board_games,
        gym_workout=gym_workout,
        pilates_yoga=pilates_yoga,
        two_sum=two_sum,
        favorite_language=favorite_language,
        favorite_CIT_class=favorite_CIT_class,
        spaces=spaces,
        tabs=tabs,
    )

    print(new_user)

    try:
        db.session.add(new_user)
        db.session.commit()
    except AssertionError as exception_message:
        db.session.rollback()
        print("Could not add user to db!")

with app.app_context():
    db.create_all()


def format_data(row):
    column_headers = [
                "email", # 0  
                "lastName", # 1
                "firstName", # 2
                "selectedCatDogList", # 3
                "selectedCuisineList", # 4
                "selectedDayList", # 5
                "selectedHobbyList", # 6
                "selectedMovieList", # 7
                "selectedMusicList", # 8
                "selectedPlaceList", # 9
                "selectedSpacesTabs", # 10
                "languages", # 11
                "classes", # 12
                "twoSums" # 13
    ]

    user_data = {}
    
    for i in range(14):
        key = column_headers[i]
        user_data[key] = row[i]

    return user_data



# import module
import pandas as pd
  
# read CSV file
results = pd.read_csv('users.csv')
num = len(results)
  
# count no. of lines
# print("Number of lines present:", num)


# write data to database
with open("users.csv", 'r') as file:
  csvreader = csv.reader(file, delimiter=',')
  row_num = 0

  for row in csvreader:
    if row_num > 0:
        user_data = format_data(row)
                
        with app.app_context():
            sign_up(user_data)

    row_num += 1

# save sqlite db to csv

import sqlite3
import pandas as pd
from glob import glob; from os.path import expanduser

conn = sqlite3.connect(db_name)
cursor = conn.cursor()
clients = pd.read_sql('SELECT * FROM users' ,conn)
clients.to_csv('output.csv', index=False)
