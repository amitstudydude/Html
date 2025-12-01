export default { fetch: async (r) => Response.redirect((await (await fetch('https://demo-api.tutturu.workers.dev')).json()).url, 302) }
