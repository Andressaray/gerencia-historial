import { Response } from "express";

const success = (args: Args) => {
	args.res.status(args.status || 201).send({
		status: args.status || 201,
		success: true,
		text: args.text || "Successful request",
		body: args.body || {},
	});
};

const fail = (args: Args) => {
	args.res.status(args.status || 500).send({
		status: args.status || 500,
		success: false,
		text: args.text || "Server error",
	});
};

interface Args {
	res: Response;
	status?: number;
	text: string;
	body?: any;
}

export {
  success,
  fail
}
