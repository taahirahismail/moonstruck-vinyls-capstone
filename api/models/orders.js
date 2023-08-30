const db = require('../config');

class Orders {
    fetchOrders(req, res) {
        const query = `SELECT orderID, userID, productID, quantity, orderDate FROM Orders;`;

        db.query(query, (err, results) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                results
            });
        });
    }
}