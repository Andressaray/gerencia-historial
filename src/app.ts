import express, {
	Router,
	json,
	urlencoded,
	Request,
	Response,
	NextFunction,
} from "express";
import cors from "cors";
import morgan from "morgan";
import {routesUser} from "./routes";

const app = express();

const router = Router();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

app.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Hellow Api",
	});
});
app.use('/api/user', routesUser)

export default app;
