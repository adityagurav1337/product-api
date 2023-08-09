var Database = require("./Database");

class Product{
    constructor() {
        this.query = "";
        this.id = 0;
        this.title = "";
        this.mrp = "";
        this.price = "";
        this.description = "";
        this.db = new Database();
        
    }



    save = ()=>{
        this.query = "INSERT INTO products(title,mrp,price,description) ";
        this.query += "VALUES('" + this.title + "','" + this.mrp + "','" + this.price + "', ' " + this.description +"') ";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }



    update = () => {
        this.query = "UPDATE products SET title = ' " + this.title +  " ', ";
        this.query +="mrp = ' " + this.mrp + " ', ";
        this.query += "price = '" + this.price + "', ";
        this.query += "description = '" + this.description + "' ";
        this.query += "WHERE id=" + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if (err)
                  reject(err);

                resolve(result);
            });
        });
    }

    list = () => {
        this.query = "SELECT * FROM products ORDER BY title";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if (err)
                  reject(err);

                resolve(result);
            });
        });
    }

    get = () => {
        this.query = "SELECT * FROM products WHERE id=" + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if (err)
                  reject(err);

                resolve(result);
            });
        });
    }

    delete = () => {
        this.query = "DELETE FROM products WHERE id=" + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                if (err)
                  reject(err);

                resolve(result);
            });
        });
    }
}

module.exports = Product;