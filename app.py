import pymysql
from flask import Flask, render_template, request
app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

class Database:
    def __init__(self):
        host = "localhost"
        user = "root"
        db = "lottery"
        passwd = "1234"

        self.con = pymysql.connect(
            host = host,
            user = user,
            db = db,
            password = passwd,
            cursorclass=pymysql.cursors.DictCursor 
        )
        self.cur = self.con.cursor()
    
    def list_lottery(self):
        self.cur.execute("SELECT * FROM lotterysalesbyzip")
        result = self.cur.fetchall()
        return result

    def zip_lot(self,userss):
        self.cur.execute(f'SELECT * FROM lotterysalesbyzip WHERE Zip = {userss}')
        zip_result = self.cur.fetchall()
        return zip_result


     

    def city_lot(self, test):
        self.cur.execute(f'SELECT * FROM lotterysalesbyzip WHERE City = {test}')
        city_result = self.cur.fetchall()
        return city_result
    
    def business_lot(self, test2):
        self.cur.execute(f'SELECT * FROM lotterysalesbyzip WHERE Business_Name = {test2}')
        bus_result = self.cur.fetchall()
        return bus_result
 
@app.route('/')
def lottery():
    
 
    def db_query():
        db = Database()
        lott = db.list_lottery()
 
        return lott
 
    res = db_query()
 
    return render_template('lottery.html', result=res, content_type='application/json')

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      zip = request.form['nm']

      
      def db_query():
        db = Database()
        lott = db.zip_lot(zip)
 
        return lott
        
      res = db_query()
      return render_template('lottery.html', result=res, content_type='application/json')

    #   return redirect(url_for('success',name = user)
   else:
      user = request.args.get('nm')
      
      return "list_lottery()"


@app.route('/city', methods = ['POST', 'GET'])
def city():
    if request.method == 'POST':
      name = request.form['nm']

    def db_city_query():
        db = Database()
        q = db.city_lot(name)

        return q

    res = db_city_query()
    return render_template('lottery.html', result=res, content_type='application/json')


@app.route('/biz', methods = ['POST', 'GET'])
def biz():
    if request.method == 'POST':
      biz = request.form['nm']

    def db_biz_query():
        db = Database()
        x = db.business_lot(biz)

        return x

    biz_res = db_biz_query()

    return render_template('lottery.html', result=biz_res, content_type='application/json')


if __name__ == '__main__':
    app.run(debug=True)