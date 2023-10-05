import requests

symb ='TSLA'
API_KEY='XWT4BU7NOC73D1HZ'
url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symb+'&apikey=XWT4BU7NOC73D1HZ'

r = requests.get(url)
data = r.json()

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    python_output = data
    return render_template('nalyse.ejs', python_output=python_output)

if __name__ == '__main__':
    app.run(debug=True)
