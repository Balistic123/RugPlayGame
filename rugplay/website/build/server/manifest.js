const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["404.gif","ads.txt","android-chrome-192x192.png","apple-touch-icon.png","facedev/avif/bliptext.avif","facedev/avif/bussin.avif","facedev/avif/griddycode.avif","facedev/avif/lyntr.avif","facedev/avif/subterfuge.avif","facedev/avif/twoblade.avif","facedev/avif/wattesigma.avif","facedev/avif/webx.avif","facedev/bliptext.png","facedev/bussin.png","facedev/griddycode.png","facedev/lyntr.png","facedev/subterfuge.png","facedev/twoblade.png","facedev/wattesigma.png","facedev/webx.png","favicon-48x48.png","favicon.svg","rugplay.svg","sound/background.mp3","sound/cannon.mp3","sound/click.mp3","sound/dice.mp3","sound/firework1.mp3","sound/firework2.mp3","sound/firework3.mp3","sound/firework4.mp3","sound/firework5.mp3","sound/firework6.mp3","sound/firework7.mp3","sound/flip.mp3","sound/lose.mp3","sound/win.mp3","tips/amm.avif","tips/buying.avif","tips/coin.avif","tips/cover.avif","tips/daily.avif","tips/ender.avif","tips/gambling.avif","tips/hopium.avif","tips/leaderboard.avif","tips/liquidity-pools.avif","tips/live.avif","tips/market.avif","tips/portfolio.avif","tips/rugpull.avif","tips/selling.avif","tips/treemap.avif"]),
	mimeTypes: {".gif":"image/gif",".txt":"text/plain",".png":"image/png",".avif":"image/avif",".svg":"image/svg+xml",".mp3":"audio/mpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.nuB8r8qn.js",app:"_app/immutable/entry/app.BqNB4QkK.js",imports:["_app/immutable/entry/start.nuB8r8qn.js","_app/immutable/chunks/BnkorlfL.js","_app/immutable/chunks/Dc9Cd6uL.js","_app/immutable/chunks/DBnYf9wq.js","_app/immutable/entry/app.BqNB4QkK.js","_app/immutable/chunks/Dc9Cd6uL.js","_app/immutable/chunks/BiLdCT7w.js","_app/immutable/chunks/DBnYf9wq.js","_app/immutable/chunks/4JrI1xkN.js","_app/immutable/chunks/DKQvO5e2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./chunks/0-ClT-eAbJ.js')),
			__memo(() => import('./chunks/1-BtHGw3ox.js')),
			__memo(() => import('./chunks/2-DTCDM_7r.js')),
			__memo(() => import('./chunks/3-DrThEtdC.js')),
			__memo(() => import('./chunks/4-WxE-eSfa.js')),
			__memo(() => import('./chunks/5-BEnv5wCF.js')),
			__memo(() => import('./chunks/6-J89iMaGA.js')),
			__memo(() => import('./chunks/7-DaV-Mj4f.js')),
			__memo(() => import('./chunks/8-BrQXn0tG.js')),
			__memo(() => import('./chunks/9-DRqs2zrI.js')),
			__memo(() => import('./chunks/10-Ch5GKcHX.js')),
			__memo(() => import('./chunks/11-BNBB1Su0.js')),
			__memo(() => import('./chunks/12-Cr2TC4px.js')),
			__memo(() => import('./chunks/13-DcXAioND.js')),
			__memo(() => import('./chunks/14-DbRiIPz0.js')),
			__memo(() => import('./chunks/15-UkBAJ0Oc.js')),
			__memo(() => import('./chunks/16-DuBGzqFl.js')),
			__memo(() => import('./chunks/17-BXoZw3th.js')),
			__memo(() => import('./chunks/18-DxUyov6w.js')),
			__memo(() => import('./chunks/19-Dfa7Trxm.js')),
			__memo(() => import('./chunks/20-CLmB_oTc.js')),
			__memo(() => import('./chunks/21-CIUv8U_w.js')),
			__memo(() => import('./chunks/22-Dmrz7ZS_.js')),
			__memo(() => import('./chunks/23-EXymwkov.js')),
			__memo(() => import('./chunks/24-CgQx9X8X.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/promo",
				pattern: /^\/admin\/promo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/users",
				pattern: /^\/admin\/users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/api/admin/promo",
				pattern: /^\/api\/admin\/promo\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DoHCBSEy.js'))
			},
			{
				id: "/api/admin/users",
				pattern: /^\/api\/admin\/users\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CBtPHjsp.js'))
			},
			{
				id: "/api/admin/users/banned-list",
				pattern: /^\/api\/admin\/users\/banned-list\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-kwoy96Qf.js'))
			},
			{
				id: "/api/admin/users/ban",
				pattern: /^\/api\/admin\/users\/ban\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-h67oZiZs.js'))
			},
			{
				id: "/api/admin/users/unban",
				pattern: /^\/api\/admin\/users\/unban\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DQRGE9RB.js'))
			},
			{
				id: "/api/coins/top",
				pattern: /^\/api\/coins\/top\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Xd89Pjh8.js'))
			},
			{
				id: "/api/coin/create",
				pattern: /^\/api\/coin\/create\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DOA4TZSp.js'))
			},
			{
				id: "/api/coin/[coinSymbol]",
				pattern: /^\/api\/coin\/([^/]+?)\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-wQ38TEhK.js'))
			},
			{
				id: "/api/coin/[coinSymbol]/comments",
				pattern: /^\/api\/coin\/([^/]+?)\/comments\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DfL5ziHh.js'))
			},
			{
				id: "/api/coin/[coinSymbol]/comments/[id]/like",
				pattern: /^\/api\/coin\/([^/]+?)\/comments\/([^/]+?)\/like\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CHPQXTu-.js'))
			},
			{
				id: "/api/coin/[coinSymbol]/holders",
				pattern: /^\/api\/coin\/([^/]+?)\/holders\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Dt6jWKbC.js'))
			},
			{
				id: "/api/coin/[coinSymbol]/trade",
				pattern: /^\/api\/coin\/([^/]+?)\/trade\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BxcM-7bp.js'))
			},
			{
				id: "/api/gambling/coinflip",
				pattern: /^\/api\/gambling\/coinflip\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B23wJt0t.js'))
			},
			{
				id: "/api/gambling/dice",
				pattern: /^\/api\/gambling\/dice\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-NifO76hv.js'))
			},
			{
				id: "/api/gambling/mines/cashout",
				pattern: /^\/api\/gambling\/mines\/cashout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C2Tyg8pw.js'))
			},
			{
				id: "/api/gambling/mines/reveal",
				pattern: /^\/api\/gambling\/mines\/reveal\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DP3oNB8k.js'))
			},
			{
				id: "/api/gambling/mines/start",
				pattern: /^\/api\/gambling\/mines\/start\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-ZtR8gx-u.js'))
			},
			{
				id: "/api/gambling/slots",
				pattern: /^\/api\/gambling\/slots\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DZycbO_V.js'))
			},
			{
				id: "/api/hopium/questions",
				pattern: /^\/api\/hopium\/questions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-avZd00ED.js'))
			},
			{
				id: "/api/hopium/questions/create",
				pattern: /^\/api\/hopium\/questions\/create\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D6LlPA9h.js'))
			},
			{
				id: "/api/hopium/questions/[id]",
				pattern: /^\/api\/hopium\/questions\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DkuPT1Qm.js'))
			},
			{
				id: "/api/hopium/questions/[id]/bet",
				pattern: /^\/api\/hopium\/questions\/([^/]+?)\/bet\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CMfl--an.js'))
			},
			{
				id: "/api/keys",
				pattern: /^\/api\/keys\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Dq8S0VNr.js'))
			},
			{
				id: "/api/keys/[id]",
				pattern: /^\/api\/keys\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D1jdYfLm.js'))
			},
			{
				id: "/api/keys/[id]/regenerate",
				pattern: /^\/api\/keys\/([^/]+?)\/regenerate\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CysTNA3m.js'))
			},
			{
				id: "/api/leaderboard",
				pattern: /^\/api\/leaderboard\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Dkw0L_ww.js'))
			},
			{
				id: "/api/market",
				pattern: /^\/api\/market\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D-Ovw5dI.js'))
			},
			{
				id: "/api/notifications",
				pattern: /^\/api\/notifications\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-6wRicDyY.js'))
			},
			{
				id: "/api/portfolio/summary",
				pattern: /^\/api\/portfolio\/summary\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DZdWVTeT.js'))
			},
			{
				id: "/api/portfolio/total",
				pattern: /^\/api\/portfolio\/total\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BNgjj15E.js'))
			},
			{
				id: "/api/prestige",
				pattern: /^\/api\/prestige\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DeEZTDIW.js'))
			},
			{
				id: "/api/promo/verify",
				pattern: /^\/api\/promo\/verify\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CnBYm_uw.js'))
			},
			{
				id: "/api/proxy/s3/[...path]",
				pattern: /^\/api\/proxy\/s3(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CXQzCB6t.js'))
			},
			{
				id: "/api/rewards/claim",
				pattern: /^\/api\/rewards\/claim\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Dd0mcY7g.js'))
			},
			{
				id: "/api/settings",
				pattern: /^\/api\/settings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Ce2-YF4y.js'))
			},
			{
				id: "/api/settings/check-username",
				pattern: /^\/api\/settings\/check-username\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D9oQwZcm.js'))
			},
			{
				id: "/api/settings/data-download",
				pattern: /^\/api\/settings\/data-download\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-wdixzFeS.js'))
			},
			{
				id: "/api/settings/delete-account",
				pattern: /^\/api\/settings\/delete-account\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CLKs5eTl.js'))
			},
			{
				id: "/api/settings/volume",
				pattern: /^\/api\/settings\/volume\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CHM_HUch.js'))
			},
			{
				id: "/api/trades/recent",
				pattern: /^\/api\/trades\/recent\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BzWMLds_.js'))
			},
			{
				id: "/api/transactions",
				pattern: /^\/api\/transactions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-gXhketl7.js'))
			},
			{
				id: "/api/transfer",
				pattern: /^\/api\/transfer\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-GmNiBaVP.js'))
			},
			{
				id: "/api/user/[userId]",
				pattern: /^\/api\/user\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CAfcPEa5.js'))
			},
			{
				id: "/api/user/[userId]/image",
				pattern: /^\/api\/user\/([^/]+?)\/image\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D-EYwx21.js'))
			},
			{
				id: "/api/v1/coin/[coinSymbol]",
				pattern: /^\/api\/v1\/coin\/([^/]+?)\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-57xznbsr.js'))
			},
			{
				id: "/api/v1/holders/[coinSymbol]",
				pattern: /^\/api\/v1\/holders\/([^/]+?)\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DBZ1gXNo.js'))
			},
			{
				id: "/api/v1/hopium",
				pattern: /^\/api\/v1\/hopium\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-clVnCz60.js'))
			},
			{
				id: "/api/v1/hopium/[id]",
				pattern: /^\/api\/v1\/hopium\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Dh63xq4r.js'))
			},
			{
				id: "/api/v1/market",
				pattern: /^\/api\/v1\/market\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C_wTCgfW.js'))
			},
			{
				id: "/api/v1/top",
				pattern: /^\/api\/v1\/top\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C4gcE7pp.js'))
			},
			{
				id: "/banned",
				pattern: /^\/banned\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/coin/create",
				pattern: /^\/coin\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/coin/[coinSymbol]",
				pattern: /^\/coin\/([^/]+?)\/?$/,
				params: [{"name":"coinSymbol","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/gambling",
				pattern: /^\/gambling\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/hopium",
				pattern: /^\/hopium\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/hopium/[id]",
				pattern: /^\/hopium\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/leaderboard",
				pattern: /^\/leaderboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/legal/privacy",
				pattern: /^\/legal\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/legal/terms",
				pattern: /^\/legal\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/live",
				pattern: /^\/live\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/market",
				pattern: /^\/market\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/prestige",
				pattern: /^\/prestige\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/transactions",
				pattern: /^\/transactions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/treemap",
				pattern: /^\/treemap\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/user/[username]",
				pattern: /^\/user\/([^/]+?)\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
