const dynamicField = (field, source) => {
	//Validate dynamic positions/locations
	if (field.length > 1) {
		const newField = field.map(id => source.find(p => p.id === id));

		return newField;
	} else {
		const newField = source.find(p => p.id === field[0]);

		return [newField];
	}
};

const orderUsers = usersList => {
	const ordered = usersList.sort((curr, next) => {
		if (parseInt(curr.orderId) < parseInt(next.orderId)) {
			return -1;
		} else if (parseInt(curr.orderId) > parseInt(next.orderId)) {
			return 1;
		} else {
			return 0;
		}
	});

	return ordered;
};

//Parse users list and concat their locations, positions and contract
export const parseUsers = (users, locations, positions, contracts) => {
	console.log(users);
	const parsedUsers = users.map(user => {
		const newUser = { ...user };
		console.log(user.contract);
		newUser.contract = contracts.find(c => c.id === newUser.contract);
		newUser.locations = dynamicField(user.locationId, locations);
		newUser.positions = dynamicField(user.positionId, positions);
		newUser.orderId = user.employeeId.split(/[.-]/g).slice(0, 3).join('');

		return newUser;
	});

	orderUsers(parsedUsers);

	return parsedUsers;
};

//Parse locations list and add their quantity of users and order them downward by their name
export const parseLocations = (locationList, userList) => {
	const quantityUsers = userList.reduce((dicc, user) => {
		const currentId = user.locationId[0];

		if (dicc[currentId]) {
			return { ...dicc, [currentId]: dicc[currentId] + 1 };
		} else {
			return { ...dicc, [currentId]: 1 };
		}
	}, {});

	const parsedLocs = locationList.map(loc => ({
		...loc,
		quantity: quantityUsers[loc.id],
	}));

	const orderLocs = parsedLocs.sort((curr, next) => next.name.localeCompare(curr.name));

	return orderLocs;
};
