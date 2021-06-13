const express = require("express");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
	secret: "bigbluedog",
	cookie: {
		expires: 10 * 60 * 1000,
	},
	resave: true,
	rolling: true,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening ON ${PORT}`));
});
// app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`);
// });
