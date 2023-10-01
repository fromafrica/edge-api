export async function readRequestBody(request: Request) {
	const contentType = request.headers.get("content-type");

	console.log(contentType);

	switch (contentType) {
		case 'application/json': {
			return JSON.stringify(await request.json());
		}
		case 'application/text': {
			return request.text();
		}
		case 'text/html': {
			return request.text();
		}
		case 'application/x-www-form-urlencoded': {
			const formData = await request.formData();
			const body = {} as any;
			for (const entry of formData.entries()) {
				body[entry[0]] = entry[1];
			}
			return JSON.stringify(body);
		}
		case 'form': {
			const formData = await request.formData();
			const body = {} as any;
			for (const entry of formData.entries()) {
				body[entry[0]] = entry[1];
			}
			return JSON.stringify(body);
		}
		default: {
			// Perhaps some other type of data was submitted in the form
			// like an image, or some other binary data.
			return "a file";
		}
	}
}