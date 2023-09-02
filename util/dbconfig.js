const mysql = require("mysql");
// console.log(mysql);
// const config = {
// 	// 数据库配置
// 	host: "localhost",
// 	port: "3306",
// 	user: "root",
// 	password: "cxz888666",
// 	database: "mysql1",
// };

module.exports = {
	config: {
		// 数据库配置
		host: "127.0.0.1",
		port: "3306",
		user: "root",
		password: "cxz888666",
		database: "test",
	},
	// config,
	sqlConnect: function (sql, sqlArr, callBack) {
		var pool = mysql.createPool(this.config);
		pool.getConnection((err, conn) => {
			// console.log(conn);
			console.log("测试连接mysql");
			if (err) {
				console.log("连接失败", err);
				return;
			}
			conn.query(sql, sqlArr, callBack);
			conn.release();
		});
	},
};
