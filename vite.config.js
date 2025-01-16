import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vinetQrDevPlugin from 'vinetqr-dev-plugin'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vinetQrDevPlugin()],
})
