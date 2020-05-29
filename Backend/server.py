from flask import Flask, request
from flask_mysqldb import MySQL
import json
import os
import base64
import hashlib
import jwt

app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@ps123'
app.config['MYSQL_DB'] = 'financepeer_task'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

# Import json data to MySQL

@app.route('/upload/file', methods = ["POST"])
def fileUpload():

    # read json file
    file = os.path.abspath("./data/userdata.json")

    # print(file)
    json_data = open(file).read()
    json_obj = json.loads(json_data)

    # validation before insertion
    def validate(val):
        if val is not None:
            if type(val) is int:
                return str(val).encode('utf-8')
            return val

    # Parse json data and insert into MySQL
    for item in enumerate(json_obj):
        id = validate(item[1]["id"])
        userId = validate(item[1]["userId"])
        title = validate(item[1]["title"])
        body = validate(item[1]["body"])


    
        cursor = mysql.connection.cursor()
        cursor.execute (
            """INSERT INTO json_data (id, user_id, title, body)
                VALUES (%s, %s, %s, %s)""", (id, userId, title, body)
        )
        mysql.connection.commit()
        cursor.close()
    return {"msg": "File uploaded successfully"}

# Get all the records

@app.route('/records', methods = ["GET"])
def getAllRecords():
    # user_id = token_decoder()
    
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM json_data"""
    )
    result = cursor.fetchall()
    cursor.close()

    records = list()
    for item in result:
        records.append(item)

    return {"records": records}

# Authentication

@app.route('/auth/signup', methods = ['POST'])
def signup():
    ask = request.json
    name = ask['name']
    username = ask['username']
    email = ask['email']
    password = ask['password']

    salt = generate_salt()
    salted_password = salt + password
    hashed_password = hash_cycle(salted_password)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name, username, email, salt, hashed_password)
        VALUES (%s, %s, %s, %s, %s)""",
        ((name), (username), (email), (salt), (hashed_password))
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Signup Successful"}

@app.route('/auth/login', methods = ['POST'])
def login():
    ask = request.json
    email = ask['email']
    password = ask['password']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users WHERE
         email = %s""", (str(email),)
    )
    result = cursor.fetchall()
    cursor.close()
    user_data = list()
    for item in result:
        user_data.append(item)
    if len(user_data) is not 0:
        for user in user_data:
            if user["hashed_password"] == hash_cycle(user["salt"] + password):
                encode_data = jwt.encode({"id": user["id"]}, 'masai', algorithm='HS256')
                return json.dumps({"message": "Signin Successful!", "username": user["username"], "token": str(encode_data)})
            else:
                return {"message": "Wrong Password"}
    return {"message": "Please make sure you are a registered user."}

def generate_salt():
    salt = os.urandom(16)
    # print(salt.encode('base-64'))
    return str(base64.b64encode(salt))

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()

def hash_cycle(string):
    for i in range(10):
        string = md5_hash(string)
    return string

def token_decoder():
    auth_header = request.headers.get("Authorization")
    token_encoded = auth_header.split(" ")[1]
    decode_data = jwt.decode(token_encoded, "masai", algorithm = ["HS256"])
    return decode_data