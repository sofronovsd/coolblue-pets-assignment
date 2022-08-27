export function createAction<T>(type: T) {
	return <P>() => (payload: P) => ({
		type,
		payload,
	});
}
