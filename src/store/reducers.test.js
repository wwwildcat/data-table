import { reducer } from './reducers';

jest.mock('../constants.js', () => ({
	MAX_ROWS_ON_PAGE: 2
}));

describe('Reducers for load data', () => {
	it('for START_LOAD', () => {
		const initialState = {
			data: [],
			loadingStatus: 'pending',
		};
		const action = {
			type: 'START_LOAD',
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			data: [],
			loadingStatus: 'loading',
		});
	});

	it('for GET_DATA_ERROR', () => {
		const initialState = {
			data: [],
			loadingStatus: 'pending',
		};
		const action = {
			type: 'GET_DATA_ERROR',
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			data: [],
			loadingStatus: 'error',
		});
	});

	it('for GET_DATA', () => {
		const initialState = {
			data: [],
			currentData: [],
			currentPage: 2,
			pageData: [],
			currentRecord: null,
			loadingStatus: 'loading',
			sortProp: 1,
		};
		const action = {
			type: 'GET_DATA',
			payload: [
				{
					"id": 339,
					"firstName": "Jan",
					"lastName": "Denton",
					"email": "JGalligan@libero.com",
					"phone": "(391)430-6468",
					"address": {
						"streetAddress": "105 Elementum Ln",
						"city": "Panama City Beach",
						"state": "IL",
						"zip": "18092"
					},
					"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
				},
				{
					"id": 823,
					"firstName": "Shelly",
					"lastName": "Kane",
					"email": "SCann@vitae.io",
					"phone": "(943)988-8462",
					"address": {
						"streetAddress": "5138 Eros St",
						"city": "Wasington Dc",
						"state": "RI",
						"zip": "94741"
					},
					"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
				},
				{
					"id": 754,
					"firstName": "Minhajuddin",
					"lastName": "Speth",
					"email": "SRitchie@vitae.ly",
					"phone": "(780)751-9848",
					"address": {
						"streetAddress": "7858 Tortor Ln",
						"city": "E. Lansing",
						"state": "SC",
						"zip": "32640"
					},
					"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
				},
				{
					"id": 596,
					"firstName": "Desmond",
					"lastName": "Syner",
					"email": "CCraig@pharetra.gov",
					"phone": "(260)399-5503",
					"address": {
						"streetAddress": "4164 Lorem Ave",
						"city": "Oakland",
						"state": "AZ",
						"zip": "15999"
					},
					"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
				},
				{
					"id": 769,
					"firstName": "Brenda",
					"lastName": "Pereyra",
					"email": "SRichardson@aliquam.org",
					"phone": "(466)319-8420",
					"address": {
						"streetAddress": "2802 Scelerisque Ave",
						"city": "Detroit",
						"state": "DC",
						"zip": "43891"
					},
					"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
				},
				{
					"id": 131,
					"firstName": "Helena",
					"lastName": "Colon",
					"email": "GNewell@et.gov",
					"phone": "(566)685-1295",
					"address": {
						"streetAddress": "425 Elementum St",
						"city": "Mcdonough",
						"state": "IN",
						"zip": "69304"
					},
					"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
				}
			],
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			data: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 2,
			lastPage: 3,
			pageData: [{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			}],
			loadingStatus: 'complete',
			currentRecord: null,
			sortProp: 'none'
		});
	});
});

describe('Reducers for pagination', () => {
	it('for GET_CURRENT_PAGE_DATA', () => {
		const initialState = {
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 3,
			pageData: [{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
		};
		const action = {
			type: 'GET_CURRENT_PAGE_DATA',
			payload: 2
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 2,
			pageData:[{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			}]
		});
	});
});

describe('Reducers for sorting', () => {
	it('for SET_SORT_PROP', () => {
		const initialState = {
			sortProp: 'email',
			sortOrder: false,
		};
		const action = {
			type: 'SET_SORT_PROP',
			payload: 'phone'
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			sortProp: 'phone',
			sortOrder: true,
		});
	});

	it('for TOGGLE_SORT_ORDER', () => {
		const initialState = {
			sortProp: 'id',
			sortOrder: true,
		};
		const action = {
			type: 'TOGGLE_SORT_ORDER',
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			sortProp: 'id',
			sortOrder: false,
		});
	});

	it('for SORT_DATA, ascending', () => {
		const initialState = {
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 2,
			pageData: [{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			}],
			sortProp: 'id',
			sortOrder: true,
		};
		const action = {
			type: 'SORT_DATA',
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			currentData: [{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			},
			{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			}],
			currentPage: 2,
			pageData: [{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			}],
			sortProp: 'id',
			sortOrder: true,
		});
	});

	it('for SORT_DATA, descending', () => {
		const initialState = {
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 1,
			pageData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			}],
			sortProp: 'firstName',
			sortOrder: false,
		};
		const action = {
			type: 'SORT_DATA',
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			currentData: [{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			}],
			currentPage: 1,
			pageData: [{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			}],
			sortProp: 'firstName',
			sortOrder: false,
		});
	});
});

describe('Reducers for filtering', () => {
	it('for FILTER_DATA', () => {
		const initialState = {
			data: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 2,
			lastPage: 3,
			pageData: [{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			}],
			currentRecord: {
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			sortProp: 'phone',
		};
		const action = {
			type: 'FILTER_DATA',
			payload: '64'
		};

		const newState = reducer(initialState, action);
		expect(newState).toEqual({
			data: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			}],
			currentPage: 1,
			lastPage: 2,
			pageData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			}],
			currentRecord: null,
			sortProp: 'none',
		});
	});
});

describe('Reducers for add records', () => {
	it('for TOGGLE_FORM', () => {
		const initialState = {
			showForm: true,
		};
		const action = {
			type: 'TOGGLE_FORM',
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			showForm: false,
		});
	});

	it('for ADD_RECORD', () => {
		const initialState = {
			data: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentData: [{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
			{
				"id": 823,
				"firstName": "Shelly",
				"lastName": "Kane",
				"email": "SCann@vitae.io",
				"phone": "(943)988-8462",
				"address": {
					"streetAddress": "5138 Eros St",
					"city": "Wasington Dc",
					"state": "RI",
					"zip": "94741"
				},
				"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
			},
			{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			},
			{
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
			{
				"id": 131,
				"firstName": "Helena",
				"lastName": "Colon",
				"email": "GNewell@et.gov",
				"phone": "(566)685-1295",
				"address": {
					"streetAddress": "425 Elementum St",
					"city": "Mcdonough",
					"state": "IN",
					"zip": "69304"
				},
				"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
			}],
			currentPage: 2,
			lastPage: 3,
			pageData: [{
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			{
				"id": 596,
				"firstName": "Desmond",
				"lastName": "Syner",
				"email": "CCraig@pharetra.gov",
				"phone": "(260)399-5503",
				"address": {
					"streetAddress": "4164 Lorem Ave",
					"city": "Oakland",
					"state": "AZ",
					"zip": "15999"
				},
				"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
			}],
			currentRecord: {
				"id": 754,
				"firstName": "Minhajuddin",
				"lastName": "Speth",
				"email": "SRitchie@vitae.ly",
				"phone": "(780)751-9848",
				"address": {
					"streetAddress": "7858 Tortor Ln",
					"city": "E. Lansing",
					"state": "SC",
					"zip": "32640"
				},
				"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
			},
			sortProp: 'lastName',
			showForm: true,
		};
		const action = {
			type: 'ADD_RECORD',
			payload: {
				"id": 112,
				"firstName": "Jawdat",
				"lastName": "Henderson",
				"email": "SJeffery@tortor.net",
				"phone": "(106)416-6058",
				"address": {
					"streetAddress": "2825 Et Dr",
					"city": "Goodyear",
					"state": "NC",
					"zip": "60329"
				},
				"description": "magna at aliquam tincidunt odio dolor sollicitudin massa massa lacus vitae id dui eros hendrerit pharetra donec amet molestie amet vestibulum quis tempor aenean malesuada non amet vitae amet amet massa lacus"
			},
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			data: [{
					"id": 112,
					"firstName": "Jawdat",
					"lastName": "Henderson",
					"email": "SJeffery@tortor.net",
					"phone": "(106)416-6058",
					"address": {
						"streetAddress": "2825 Et Dr",
						"city": "Goodyear",
						"state": "NC",
						"zip": "60329"
					},
					"description": "magna at aliquam tincidunt odio dolor sollicitudin massa massa lacus vitae id dui eros hendrerit pharetra donec amet molestie amet vestibulum quis tempor aenean malesuada non amet vitae amet amet massa lacus"
				},
				{
					"id": 339,
					"firstName": "Jan",
					"lastName": "Denton",
					"email": "JGalligan@libero.com",
					"phone": "(391)430-6468",
					"address": {
						"streetAddress": "105 Elementum Ln",
						"city": "Panama City Beach",
						"state": "IL",
						"zip": "18092"
					},
					"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
				},
				{
					"id": 823,
					"firstName": "Shelly",
					"lastName": "Kane",
					"email": "SCann@vitae.io",
					"phone": "(943)988-8462",
					"address": {
						"streetAddress": "5138 Eros St",
						"city": "Wasington Dc",
						"state": "RI",
						"zip": "94741"
					},
					"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
				},
				{
					"id": 754,
					"firstName": "Minhajuddin",
					"lastName": "Speth",
					"email": "SRitchie@vitae.ly",
					"phone": "(780)751-9848",
					"address": {
						"streetAddress": "7858 Tortor Ln",
						"city": "E. Lansing",
						"state": "SC",
						"zip": "32640"
					},
					"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
				},
				{
					"id": 596,
					"firstName": "Desmond",
					"lastName": "Syner",
					"email": "CCraig@pharetra.gov",
					"phone": "(260)399-5503",
					"address": {
						"streetAddress": "4164 Lorem Ave",
						"city": "Oakland",
						"state": "AZ",
						"zip": "15999"
					},
					"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
				},
				{
					"id": 769,
					"firstName": "Brenda",
					"lastName": "Pereyra",
					"email": "SRichardson@aliquam.org",
					"phone": "(466)319-8420",
					"address": {
						"streetAddress": "2802 Scelerisque Ave",
						"city": "Detroit",
						"state": "DC",
						"zip": "43891"
					},
					"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
				},
				{
					"id": 131,
					"firstName": "Helena",
					"lastName": "Colon",
					"email": "GNewell@et.gov",
					"phone": "(566)685-1295",
					"address": {
						"streetAddress": "425 Elementum St",
						"city": "Mcdonough",
						"state": "IN",
						"zip": "69304"
					},
					"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
				}],
				currentData: [{
					"id": 112,
					"firstName": "Jawdat",
					"lastName": "Henderson",
					"email": "SJeffery@tortor.net",
					"phone": "(106)416-6058",
					"address": {
						"streetAddress": "2825 Et Dr",
						"city": "Goodyear",
						"state": "NC",
						"zip": "60329"
					},
					"description": "magna at aliquam tincidunt odio dolor sollicitudin massa massa lacus vitae id dui eros hendrerit pharetra donec amet molestie amet vestibulum quis tempor aenean malesuada non amet vitae amet amet massa lacus"
				},
				{
					"id": 339,
					"firstName": "Jan",
					"lastName": "Denton",
					"email": "JGalligan@libero.com",
					"phone": "(391)430-6468",
					"address": {
						"streetAddress": "105 Elementum Ln",
						"city": "Panama City Beach",
						"state": "IL",
						"zip": "18092"
					},
					"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
				},
				{
					"id": 823,
					"firstName": "Shelly",
					"lastName": "Kane",
					"email": "SCann@vitae.io",
					"phone": "(943)988-8462",
					"address": {
						"streetAddress": "5138 Eros St",
						"city": "Wasington Dc",
						"state": "RI",
						"zip": "94741"
					},
					"description": "tortor sapien ante quis amet quis sed risus ipsum ac id elit convallis porttitor risus sit curabitur ipsum tortor lorem adipiscing placerat pulvinar dolor porta consequat sit donec convallis augue tincidunt tellus"
				},
				{
					"id": 754,
					"firstName": "Minhajuddin",
					"lastName": "Speth",
					"email": "SRitchie@vitae.ly",
					"phone": "(780)751-9848",
					"address": {
						"streetAddress": "7858 Tortor Ln",
						"city": "E. Lansing",
						"state": "SC",
						"zip": "32640"
					},
					"description": "rutrum placerat et vitae morbi malesuada amet nec aenean vitae massa porttitor consequat dui morbi eros lorem pulvinar amet augue aliquam lorem consequat rutrum vitae pharetra pretium morbi at placerat vitae adipiscing"
				},
				{
					"id": 596,
					"firstName": "Desmond",
					"lastName": "Syner",
					"email": "CCraig@pharetra.gov",
					"phone": "(260)399-5503",
					"address": {
						"streetAddress": "4164 Lorem Ave",
						"city": "Oakland",
						"state": "AZ",
						"zip": "15999"
					},
					"description": "neque eros risus nunc non dolor in sit massa lacus quis vel sit rutrum odio pulvinar odio fringilla lacus ante placerat vitae sed consectetur id massa pulvinar donec at nullam tellus magna"
				},
				{
					"id": 769,
					"firstName": "Brenda",
					"lastName": "Pereyra",
					"email": "SRichardson@aliquam.org",
					"phone": "(466)319-8420",
					"address": {
						"streetAddress": "2802 Scelerisque Ave",
						"city": "Detroit",
						"state": "DC",
						"zip": "43891"
					},
					"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
				},
				{
					"id": 131,
					"firstName": "Helena",
					"lastName": "Colon",
					"email": "GNewell@et.gov",
					"phone": "(566)685-1295",
					"address": {
						"streetAddress": "425 Elementum St",
						"city": "Mcdonough",
						"state": "IN",
						"zip": "69304"
					},
					"description": "mi at amet dolor ac id tortor id massa adipiscing porta amet aliquam et lacus dolor egestas id donec nec ipsum magna tellus consequat mattis vestibulum consequat malesuada libero ac vitae risus"
				}],
			currentPage: 1,
			lastPage: 4,
			pageData: [{
				"id": 112,
				"firstName": "Jawdat",
				"lastName": "Henderson",
				"email": "SJeffery@tortor.net",
				"phone": "(106)416-6058",
				"address": {
					"streetAddress": "2825 Et Dr",
					"city": "Goodyear",
					"state": "NC",
					"zip": "60329"
				},
				"description": "magna at aliquam tincidunt odio dolor sollicitudin massa massa lacus vitae id dui eros hendrerit pharetra donec amet molestie amet vestibulum quis tempor aenean malesuada non amet vitae amet amet massa lacus"
			},
			{
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			}],
			currentRecord: null,
			sortProp: 'none',
			showForm: false,
		});
	});
});

describe('Reducers for set current record', () => {
	it('for SET_CURRENT_RECORD', () => {
		const initialState = {
			currentRecord: {
				"id": 339,
				"firstName": "Jan",
				"lastName": "Denton",
				"email": "JGalligan@libero.com",
				"phone": "(391)430-6468",
				"address": {
					"streetAddress": "105 Elementum Ln",
					"city": "Panama City Beach",
					"state": "IL",
					"zip": "18092"
				},
				"description": "magna in neque curabitur mattis lacus sed massa non id amet sapien magna in etiam pretium tortor scelerisque nec mi donec massa tellus sed et amet scelerisque ac sed nunc pulvinar donec"
			},
		};
		const action = {
			type: 'SET_CURRENT_RECORD',
			payload: {
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
		};

		const newState = reducer(initialState, action);

		expect(newState).toEqual({
			currentRecord: {
				"id": 769,
				"firstName": "Brenda",
				"lastName": "Pereyra",
				"email": "SRichardson@aliquam.org",
				"phone": "(466)319-8420",
				"address": {
					"streetAddress": "2802 Scelerisque Ave",
					"city": "Detroit",
					"state": "DC",
					"zip": "43891"
				},
				"description": "consequat consequat amet vitae sagittis sed malesuada egestas nec rutrum dolor eget velit et velit mattis rutrum rutrum suspendisse sed velit sollicitudin tellus lacus fringilla facilisis aliquam convallis odio risus sed sed"
			},
		});
	});
});