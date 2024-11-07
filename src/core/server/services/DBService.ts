import { $Enums, Prisma, PrismaClient } from "../../../../prisma/client/index.js";
import Logger, {ConsoleColor} from '../utils/Logger.js'

class DBService {
	private logger = new Logger(DBService.name, ConsoleColor.BLUE);
	public enums = $Enums;

	public db: PrismaClient<{
		errorFormat: "pretty",
		log: [
			{ emit: "event", level: "query" },
			{ emit: "event", level: "info" },
			{ emit: "event", level: "warn" },
			{ emit: "event", level: "error" }
		],
	}>;

	private options: any = {
		errorFormat: "pretty",
		log: [
			{ emit: "event", level: "query" },
			{ emit: "event", level: "info" },
			{ emit: "event", level: "warn" },
			{ emit: "event", level: "error" }
		],
	}

	public async create() {
		this.db = new PrismaClient(this.options);
		this.db.$extends(this.retryTransactions({ jitter: 'full', numOfAttempts: 5 }));
		this.registerGameEvents();
		this.db.$connect();
	}

	private registerGameEvents() {
		this.db.$on("query", ( e ) => {
			this.logger.debug(`(${e.duration} ms) ${e.query} ${e.params}`)
		})

		this.db.$on("info", ( e ) => {
			this.logger.info(`${e.message}`)
		})

		this.db.$on("warn", ( e ) => {
			this.logger.warn(`${e.message}`)
		})

		this.db.$on("error", ( e ) => {
			this.logger.error(`${e.message}`)
		})
	}

	private retryTransactions( options ?: Partial<IBackOffOptions> ) {
		return Prisma.defineExtension(( prisma ) =>
			prisma.$extends({
				client: {
					$transaction( ...args: any ) {
						return backOff(() => prisma.$transaction.apply(prisma, args), {
							retry: ( e ) => {
								return e.code === 'P2034';
							},
							...options,
						});
					},
				} as { $transaction: typeof prisma['$transaction'] },
			}),
		);
	}
}

export default new DBService();
