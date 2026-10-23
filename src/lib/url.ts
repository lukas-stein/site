// Prefixes internal paths with the configured `base`.
export const url = (path = '') =>
	`${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
