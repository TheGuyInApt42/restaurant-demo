import { EnvironmentName } from '$models/enums/environment-name.enum';
import { EnvironmentType } from '$models/enums/environment-type.enum';
import {
	SVELTEKIT_DATA_ENPOINTS_PROD,
	SVELTEKIT_SEARCH_ENPOINTS_PROD,
} from '$models/enums/sveltekit-endpoint.prod.enum';
import type { SVELTEKIT_STARTER_ENPOINT_CONFIG } from '$models/types/sveltekit-endpoits.type';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

export const environment: ISveltekitStarterEnvironmentConfig<SVELTEKIT_STARTER_ENPOINT_CONFIG> = {
	name: EnvironmentName.PRODUCTION,
	environmentType: EnvironmentType.PROD,
	production: true,
	isDebugMode: false,
	launchURL: import.meta.env.SVELTEKIT_STARTER_BASE_URL,
	apiUrls: {
		CHUCK_NORRIS: import.meta.env.SVELTEKIT_STARTER_CHUCK_NORRIS_API_URL,
		IN_MEMORY: '',
		GITHUB: import.meta.env.SVELTEKIT_STARTER_GITHUB_API_URL,
	},
	chuckNorriesAPIConfig: {
		defaultAPILang: import.meta.env.SVELTEKIT_STARTER_CHUCK_NORRIS_API_LANG
			? import.meta.env.SVELTEKIT_STARTER_CHUCK_NORRIS_API_LANG
			: 'en-US',
		endPoints: {
			SEARCH: SVELTEKIT_SEARCH_ENPOINTS_PROD.SEARCH,
			SERVICE: SVELTEKIT_DATA_ENPOINTS_PROD.SERVICE,
		},
	},
	twitterConfig: {
		TWITTER_API_KEY: import.meta.env.SVELTEKIT_STARTER_TWITTER_API_KEY,
		TWITTER_TWEETS_ENDPOINT: import.meta.env.SVELTEKIT_STARTER_TWITTER_TWEETS_ENDPOINT,
		TWITTER_SEARCH_URL: import.meta.env.SVELTEKIT_STARTER_TWITTER_SEARCH_URL,
	},
	gitHubConfig: {
		GITHUB_API_URL: import.meta.env.SVELTEKIT_STARTER_GITHUB_API_URL,
	},
};