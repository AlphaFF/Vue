from flask import Flask, render_template, jsonify
import random
from flask_cors import CORS

app = Flask(__name__, static_folder="./dist/static", template_folder="./dist")
cors = CORS(app, resources={'/api/*': {"origins": "*"}})


@app.route('/api/random')
def random_number():
    res = {
        'random_number': random.randint(1, 100)
    }
    return jsonify(res)


@app.route('/')
@app.route('/<path>')
def catch_all(path):
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
