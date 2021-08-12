import Vue from 'vue';
import Vuex from 'vuex';
import fetchData from '../utils/fetchData';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userList: { isParse: false, values: [] },
		locationList: { isParse: false, values: [] },
		positionList: [],
		contractList: [],
		turnTemplateList: { isParse: false, values: [] },
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

		setTurnTemplates(state, newTurnTemplates) {
			state.turnTemplateList = newTurnTemplates;
		},
	},
	actions: {
		async INITIAL_DATA({ commit }) {
			const users = await fetchData('http://localhost:3004/users');
			const locations = await fetchData('http://localhost:3004/locations');
			const positions = await fetchData('http://localhost:3004/positions');
			const contracts = await fetchData('http://localhost:3004/contracts');
			const turnTemplates = await fetchData('http://localhost:3004/turnTemplates');

			commit('setPositions', positions);
			commit('setLocations', { isParse: false, values: locations });
			commit('setUsers', { isParse: false, values: users });
			commit('setContracts', contracts);
			commit('setTurnTemplates', { isParse: false, values: turnTemplates });

			return users;
		},

		async API_REQUEST(store, payload) {
			const url =
				payload.method === 'POST'
					? 'http://localhost:3004/users'
					: `http://localhost:3004/users/${payload.id}`;

			const headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};
			const options = {
				method: payload.method,
				body: JSON.stringify(payload.data),
				headers,
			};

			try {
				const response = await fetch(url, options);
				const data = await response.json();

				console.log(data);
				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async API_DELETE(store, payload) {
			const url = `http://localhost:3004/users/${payload.id}`;

			try {
				const response = await fetch(url, { method: 'DELETE' });
				const data = await response.json();

				console.log(data);
				return data;
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
