import Vue from 'vue';
import Vuex from 'vuex';
import fetchData from '../utils/fetchData';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userList: { isParse: false, values: [] },
		locationList: [],
		positionList: [],
		contractList: [],
	},
	mutations: {
		setUsers(state, newUserList) {
			state.userList = newUserList;
		},

		setLocations(state, newlocationsList) {
			state.locationList = newlocationsList;
		},
		setPositions(state, newPositionsList) {
			state.positionList = newPositionsList;
		},

		setContracts(state, newContractsList) {
			state.contractList = newContractsList;
		},
	},
	actions: {
		async INITIAL_DATA({ commit }) {
			const users = await fetchData('http://localhost:3004/users');
			const locations = await fetchData('http://localhost:3004/locations');
			const positions = await fetchData('http://localhost:3004/positions');
			const contracts = await fetchData('http://localhost:3004/contracts');

			commit('setPositions', positions);
			commit('setLocations', locations);
			commit('setUsers', { isParse: false, values: users });
			commit('setContracts', contracts);

			return users;
		},
	},
	modules: {},
});
