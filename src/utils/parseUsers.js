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

const parseUsers = (users, locations, positions, contracts) => {
	const parsedUsers = users.map(user => {
		const newUser = { ...user };

		newUser.contract = contracts.find(c => c.id === newUser.contract);
		newUser.locations = dynamicField(user.locationId, locations);
		newUser.positions = dynamicField(user.positionId, positions);
		newUser.orderId = user.employeeId.split(/[.-]/g).slice(0, 3).join('');

		return newUser;
	});

	orderUsers(parsedUsers);

	return parsedUsers;
};

export default parseUsers;
