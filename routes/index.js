var express = require("express");
const dbconfig = require("../util/dbconfig");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	// res.render("index", { title: "Expresscxz" });
	console.log(req.query);
	const {userName,password}=req.query;
	let sql = "select * from userdata where userName=? and password=?";
	let sqlArr = [userName,password];
	function callBack(err, data) {
		if (err) {
			console.log("err111");
			return;
		} else {
			// res.send({
			// 	list: data,
			// });
			// res.send("123");
			res.send(data.length?"success":"fail")
		}
	}
	dbconfig.sqlConnect(sql, sqlArr, callBack);
});

module.exports = router;
