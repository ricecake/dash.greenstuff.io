import deepmerge from 'deepmerge';

const common = {
	identity: {
		response_type: 'code',
		scope: 'openid profile',
		oidc_path: '/oauth',
		automaticSilentRenew:true,
		validateSubOnSilentRenew: true,
		loadUserInfo: false,
	},
};
const dev = {
	hosts: {
		idp_path: 'https://login.devhost.dev',
		app_path: 'https://dash.devhost.dev'
	},
	identity: {
		client_id: '-6ouqjRZT3WF191MmKCVtQ',
	},
};
const production = {
	hosts: {
		idp_path: 'https://login.greenstuff.io',
		app_path: 'https://dash.greenstuff.io'
	},
	identity: {
		client_id: 'OJMoQkYIQK-UUA8CBTC1iA',
	},
};

const MergedConfig = deepmerge.all([
	common,
	(process.env.production? production : dev),
]);

export default MergedConfig;
