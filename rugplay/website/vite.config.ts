import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { isoImport } from 'vite-plugin-iso-import';

export default defineConfig({
	server: {
		allowedHosts: [
			'h5mfnx-4173.csb.app',
			'http://localhost3002',
			'h5mfnx-5173.csb.app',
			'http://localhost:4173',
			'h5mfnx-8080.csb.app',
			'http://localhost:8080',
			'http://localhost:5173',
			'http://localhost:4173/api/auth/sign-in/social'
		]
	},

	plugins: [sveltekit(), isoImport()]
});
