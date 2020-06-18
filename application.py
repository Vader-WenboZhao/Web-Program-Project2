import os
import requests
import time

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

votes = {"yes": "", "no": "", "maybe": ""}
chatlist = []


@app.route("/")
def index():
    return render_template("index.html", votes=votes)


@socketio.on("submit message")
def message(data):
    chatlist = data["one_piece"]
    username = data["username"]
    chatlist = username + "[" + str(time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))) + "]:  " + chatlist
    emit("new message", chatlist, broadcast=True)
