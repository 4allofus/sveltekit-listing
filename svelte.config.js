/** @type {import('@sveltejs/kit').Config} */

//->>>>>>to vercel
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		
		// hydrate the <div id="svelte"> element in src/app.html
		//->>>>>>to vervel
		target: '#svelte',
		adapter: vercel()

		//->>>>>>to regular dev
		//target: '#svelte'
	}
};

export default config;
