import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since this deploys to https://thakur-027.github.io (a user/org page, not a
  // project page), the site is served from the domain root, so base stays '/'.
  // If you ever move this to a project page (thakur-027.github.io/repo-name),
  // change base to '/repo-name/'.
  base: '/',
})
