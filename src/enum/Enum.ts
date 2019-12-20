// xapi
export enum REQUEST_STATUS_FIELD {
	ERROR = 0,
	PENDING = 1,
	ACCEPTED = 3,
	REJECTED = 4
}

export enum DAY_FIELD {
	MONDAY = 1,
	TUESDAY = 2,
	WEDNESDAY = 3,
	THURSDAY = 4,
	FRIDAY = 5,
	SATURDAY = 6,
	SUNDAY = 7
}

export enum CMD_FIELD {
	BUY = 0,
	SELL = 1,
	BUY_LIMIT = 2,
	SELL_LIMIT = 3,
	BUY_STOP = 4,
	SELL_STOP = 5,
	BALANCE = 6,
	CREDIT = 7
}

export enum TYPE_FIELD {
	OPEN = 0,
	PENDING = 1,
	CLOSE = 2,
	MODIFY = 3,
	DELETE = 4
}

export enum PERIOD_FIELD {
	PERIOD_M1 = 1,
	PERIOD_M5 = 5,
	PERIOD_M15 = 15,
	PERIOD_M30 = 30,
	PERIOD_H1 = 60,
	PERIOD_H4 = 240,
	PERIOD_D1 = 1440,
	PERIOD_W1 = 10080,
	PERIOD_MN1 = 43200
}

export enum REQUEST_STATUS  {
	ERROR = 0,
	PENDING = 1,
	ACCEPTED = 3,
	REJECTED = 4
}

// xapi-node
export enum TransactionStatus {
	waiting = 0,
	sent = 1,
	successful = 2,
	timeout = 3,
	interrupted = 4
}

export enum TransactionType {
	SOCKET = 'Socket',
	STREAM = 'Stream'
}

export enum ConnectionStatus {
	DISCONNECTED,
	CONNECTING,
	CONNECTED
}

export enum PositionType {
	open = 0,
	closed = 1,
	limit = 2,
	source = 3
}