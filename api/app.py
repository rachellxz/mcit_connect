import os
from flask import Flask, g, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
# from flask_wtf.csrf import CSRFProtect

web_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'web')
basedir = os.path.abspath(os.path.dirname(__file__))

# instantiate Flask application
app = Flask('Match_MCIT', root_path=web_dir)
app.secret_key = os.getenv('SECRET_KEY')

# instantiate db
# SQLITE3 -
# db_name = os.getenv('DB_NAME')
db_name = "database_test_2023.db"
db_path = basedir + "/" + db_name
# db_path = os.path.join(basedir, db_name)
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'

# MYSQL -
# mysql_db_path = os.getenv("MYSQL_DB_BATH")
# mysql://{username}:{password}@{host}:{port}/{database_name}
# app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{mysql_db_path}'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models.user import *

with app.app_context():
    db.create_all()

# csrf = CSRFProtect(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

if os.getenv('FLASK_ENV') == 'production':
    app.config.from_object("config.ProductionConfig")
else:
    app.config.from_object("config.DevelopmentConfig")


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route("/api/v1/signup", methods=["POST"])
def sign_up():

    data = request.get_json()
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')

    selectedCatDogList = data.get('selectedCatDogList')

    cats_dogs = {"Cats": 0, "Dogs": 0}

    for key in cats_dogs:
        if key in selectedCatDogList:
            cats_dogs[key] = 1

    cats = cats_dogs["Cats"]
    dogs = cats_dogs["Dogs"]

    selectedMusicList = data.get('selectedMusicList')
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

    selectedCuisineList = data.get('selectedCuisineList')
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

    selectedPlaceList = data.get('selectedPlaceList')
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

    selectedMovieList = data.get('selectedMovieList')
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

    selectedDayList = data.get('selectedDayList')
    days = {"Morning": 0, "Night": 0}

    for day in days:
        if day in selectedDayList:
            days[day] = 1

    morning = days["Morning"]
    night = days["Night"]

    selectedHobbyList = data.get('selectedHobbyList')
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

    two_sum = data.get('twoSums')
    favorite_language = data.get("languages")
    favorite_CIT_class = data.get("classes")

    selectedSpacesTabs = data.get('selectedSpacesTabs')
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
        return jsonify(msg='User successfully created', email=email), 200
    except AssertionError as exception_message:
        db.session.rollback()
        print("EMAIL ALREADY USED!!!!!")
        dupe_email = email
        return jsonify(msg='Error: {}. '.format(exception_message)), 400


@app.route("/")
def index():
    print("running flask...")
    return "Flask is running!"
