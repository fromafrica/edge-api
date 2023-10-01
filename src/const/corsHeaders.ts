import { corsOptions } from './corsOptions'

export const corsHeaders = {
	'Access-Control-Allow-Origin': corsOptions.origin.join(', '),
	'Access-Control-Allow-Credentials': corsOptions.credentials.toString(),
	'Access-Control-Allow-Headers': corsOptions.allowedHeaders.join(', '),
	'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'Access-Control-Max-Age': '1000',
}