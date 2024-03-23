import {defineConfig } from 'vite'

import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
	define: {
		OPENAI_API_KEY: `"${process.env.OPENAI_API_KEY}"`,
		SUPABASE_API_KEY: `"${process.env.SUPABASE_API_KEY}"`,
		SUPABASE_URL_LC_CHATBOT: `"${process.env.SUPABASE_URL_LC_CHATBOT}"`,
	  },
	plugins: []	
})