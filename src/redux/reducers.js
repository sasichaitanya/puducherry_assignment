import { BOOK_EVENT } from './actionTypes';

const initialState = {
  events: [
    {
      "name": "Event_1",
      "seats": 4,
      "imageUrl": "",
      "id": "40efcef0-e3a6-41d1-96b6-019141e2d48b"
    },
    {
      "name": "Event_2",
      "seats": 20,
      "imageUrl": "",
      "id": "ba366ab4-11b6-4f43-8226-765a39096cfc"
    },
    {
      "name": "Event_3",
      "seats": 30,
      "imageUrl": "",
      "id": "6c835458-1847-45f6-b6d3-f8670358ad34"
    },
    {
      "name": "Event_4",
      "seats": 40,
      "imageUrl": "",
      "id": "c63f9e98-4550-45a1-be4d-c13b0a9a15b2"
    },
    {
      "name": "Event_5",
      "seats": 35,
      "imageUrl": "",
      "id": "7ad1380d-a131-42a0-a603-9df5e1b21356"
    },
    {
      "name": "Event_6",
      "seats": 26,
      "imageUrl": "",
      "id": "30ac4ab7-510c-420e-b3c4-00d56f2b3ef3"
    },
    {
      "name": "Event_7",
      "seats": 37,
      "imageUrl": "",
      "id": "e53ccbbe-68bf-44c5-a357-2fd7e915c097"
    },
    {
      "name": "Event_8",
      "seats": 18,
      "imageUrl": "",
      "id": "9a2d0eaf-fbde-4eab-a192-f6e6b62275d5"
    },
    {
      "name": "Event_9",
      "seats": 9,
      "imageUrl": "",
      "id": "99044e65-2c52-462c-bde7-379bb988172f"
    },
    {
      "name": "Event_10",
      "seats": 10,
      "imageUrl": "",
      "id": "6d2baba4-57c2-44a4-b5ab-013ea1f20888"
    },
    {
      "name": "Event_11",
      "seats": 11,
      "imageUrl": "",
      "id": "da5ea4f2-2ce2-4aaf-affc-3dad50a98819"
    },
    {
      "name": "Event_12",
      "seats": 23,
      "imageUrl": "",
      "id": "5ee89bcb-80a8-4f15-bf85-94ff2cfd9c23"
    },
    {
      "name": "Event_13",
      "seats": 13,
      "imageUrl": "",
      "id": "f168ba9d-e3eb-420b-823d-97e9e7011cb5"
    },
    {
      "name": "Event_14",
      "seats": 14,
      "imageUrl": "",
      "id": "9dc3dac9-86d7-41f8-b4c0-9c55c3736578"
    },
    {
      "name": "Event_15",
      "seats": 15,
      "imageUrl": "",
      "id": "241b10d1-3f4a-433d-8655-e572d04693fe"
    },
    {
      "name": "Event_16",
      "seats": 16,
      "imageUrl": "",
      "id": "9ec56523-16a6-42ed-ae65-1489ac7b9856"
    },
    {
      "name": "Event_17",
      "seats": 17,
      "imageUrl": "",
      "id": "0a6bbcfa-6896-4c29-ad2d-77aee5ed45c8"
    },
    {
      "name": "Event_18",
      "seats": 18,
      "imageUrl": "",
      "id": "8b946f5b-28e5-48b6-90c9-9a297e5bc592"
    },
    {
      "name": "Event_19",
      "seats": 19,
      "imageUrl": "",
      "id": "9f4df9e9-be99-4373-8a41-6f367d63aa5c"
    },
    {
      "name": "Event_20",
      "seats": 20,
      "imageUrl": "",
      "id": "7c90b6df-2b2a-4d50-9293-30cce200e7ab"
    }
  ]
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_EVENT:
      let newEvents = state.events.map(item => (
        item.id === action.payload.id ? { ...item, seats: item.seats - action.payload.noOfSeats } : item
      ))
      return {
        ...state,
        events: newEvents
      }
    default:
      return state;
  }
}

export default eventReducer;