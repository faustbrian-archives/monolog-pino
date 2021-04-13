import { ILogger } from "@konceiver/monolog";
import { LogLevel } from "@konceiver/monolog-levels";
import pino from "pino";

export class PinoLogger implements ILogger {
	private readonly logger: pino.Logger;

	public constructor(opts?: pino.LoggerOptions) {
		this.logger = pino({
			...opts,
			...{
				customLevels: {
					emergency: LogLevel.Emergency,
					alert: LogLevel.Alert,
					critical: LogLevel.Critical,
					error: LogLevel.Error,
					warning: LogLevel.Warning,
					notice: LogLevel.Notice,
					info: LogLevel.Informational,
					debug: LogLevel.Debug,
				},
				useOnlyCustomLevels: true,
				level: "emergency",
			},
		});
	}

	public emergency<T = any>(message: string, context?: T): void {
		this.log("emergency", message, context);
	}

	public alert<T = any>(message: string, context?: T): void {
		this.log("alert", message, context);
	}

	public critical<T = any>(message: string, context?: T): void {
		this.log("critical", message, context);
	}

	public error<T = any>(message: string, context?: T): void {
		this.log("error", message, context);
	}

	public warning<T = any>(message: string, context?: T): void {
		this.log("warning", message, context);
	}

	public notice<T = any>(message: string, context?: T): void {
		this.log("notice", message, context);
	}

	public info<T = any>(message: string, context?: T): void {
		this.log("info", message, context);
	}

	public debug<T = any>(message: string, context?: T): void {
		this.log("debug", message, context);
	}

	public log<T = any>(level: string, message: string, context?: T): void {
		this.logger[level]!(message, context);
	}
}
