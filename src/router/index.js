import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import Locations from '../views/Locations.vue';
import Calendar from '../views/Calendar.vue';
import TurnTemplates from '../views/TurnTemplates.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/users',
		name: 'Users',
		component: Users,
	},
	{
		path: '/locations',
		name: 'Locations',
		component: Locations,
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: Calendar,
	},
	{
		path: '/shifts',
		name: 'Shifts',
		component: TurnTemplates,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
