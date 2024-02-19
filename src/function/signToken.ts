import { userJwt } from "../interface/userJwt"
import * as jose from 'jose'

export async function signToken(user: userJwt, hmac: string, issuer: string, audience: string): Promise<string> {
	const payload = {
		role: user.role,
		user: user.username,
		userId: user.userId
	};

	const secret = new TextEncoder().encode(hmac)
	const alg = 'HS256'

	const token = await new jose.SignJWT(payload)
										.setProtectedHeader({ alg })
										.setIssuedAt()
										.setIssuer(issuer)
										.setAudience(audience)
										.setExpirationTime('24h')
										.sign(secret)

	return token;
}