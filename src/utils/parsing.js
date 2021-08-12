const dynamicField = (field, source) => {
	//Validate dynamic positions/locations

	if (!field.length) {
		return [
			{
				id: Date.now(),
			},
		];
	}

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

const orderCalendarDate = calendarParsed => {
	calendarParsed.sort((curr, next) => curr.orderDate - next.orderDate);
};

//Parse users list and concat their locations, positions and contract
export const parseUsers = (users, locations, positions, contracts) => {
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

export const parseTurnTemplates = (turnTemplates, locationList, positionList) => {
	const parsedTurns = turnTemplates.map(turn => {
		const newTurn = { ...turn };
		//Find Total work hours
		const startHour = turn.checkIn.split(':')[0];
		const endHour = turn.checkOut.split(':')[0];
		newTurn.totalHours = parseInt(endHour) - parseInt(startHour);

		newTurn.locations = dynamicField(newTurn.locationId, locationList);
		newTurn.position = positionList.find(position => position.id === newTurn.positionId);

		return newTurn;
	});

	return parsedTurns;
};

export const parseCalendar = (calendar, userList, turnTemplates) => {
	const calendarParsed = calendar.map(turn => {
		const newTurn = { ...turn };

		if (newTurn.userId.length) {
			newTurn.user = dynamicField(newTurn.userId, userList);
		} else {
			newTurn.user = [];
		}

		newTurn.turnTemplate = turnTemplates.find(
			turnT => turnT.id === newTurn.turnTemplateId
		);

		newTurn.orderDate = new Date(newTurn.date);

		return newTurn;
	});

	orderCalendarDate(calendarParsed);

	return calendarParsed;
};
