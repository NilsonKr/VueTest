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

const parseUsers = (users, locations, positions) => {
	const parsedUsers = users.map(user => {
		const newUser = { ...user };

		// newUser.contract = contracts.find(c => c.id === newUser.contract);
		newUser.location = dynamicField(user.locationId, locations);
		newUser.position = dynamicField(user.positionId, positions);

		return newUser;
	});

	return { isParse: true, values: parsedUsers };
};

export default parseUsers;
