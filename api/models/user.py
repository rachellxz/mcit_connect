from app import db
from sqlalchemy.orm import validates
import re


class User(db.Model):
    __tablename__ = 'users'

    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    email = db.Column(db.String(150), primary_key=True)

    # @validates('email')
    # def validate_email(self, key, email):
    #     if not email:
    #         raise AssertionError("No email provided")
    #     # if not re.match(("[^@]+@[^@]+\.[^@]+", email)):
    #     #     raise AssertionError("Not a valid email")
    #     if User.query.filter(User.email == email).first():
    #         raise AssertionError("Email already used in db")

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