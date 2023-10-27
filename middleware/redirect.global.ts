
export default defineNuxtRouteMiddleware((to, from) => {
	// console.log('from', from);
	// console.log('to', to);
	if (to.fullPath.startsWith('/sls/scrn002step')) {
		return navigateTo('/sls/scrn002');
	}
});
