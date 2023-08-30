const db = require('../config');

class Products {
    fetchProducts(req, res) {
        const query = `SELECT prodID, albumName, albumArtist, genre, price, quantity, prodImg, albumDesc FROM Products;`;

        db.query(query, (err, results) => {
            if (err) throw err;

            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchProduct(req, res) {
        const query = `SELECT prodID, albumName, albumArtist, genre, price, quantity, prodImg, albumDesc FROM Products WHERE prodID = '${req.params.id}';`;

        db.query(query, (err, result) => {
            if (err) throw err;

            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    addProduct(req, res) {
        const query = `INSERT INTO Products SET ?;`;

        db.query(query, req.body, (err) => {
            if (err) throw err;

            res.json({
                status: res.statusCode,
                message: "A new album has been added!"
            });
        });
    }

    updateProduct(req, res) {
        const query = `UPDATE Products SET ? WHERE prodID = ?;`;

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;

            res.json({
                status: res.statusCode,
                message: "Album details updated!"
            });
        });
    }

    deleteProduct(req, res) {
        const query = `DELETE FROM Products WHERE prodID = '${req.params.id}';`;

        db.query(query, (err) => {
            if (err) throw err;

            res.json({
                status: res.statusCode,
                message: "Album removed!"
            });
        });
    }
}

module.exports = Products;