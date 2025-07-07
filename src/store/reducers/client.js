import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clients: [],
  selectedClient: null,
  loading: false,
  error: null,
  filters: {},
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedClient: (state, action) => {
      state.selectedClient = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearClientState: (state) => {
      state.clients = [];
      state.selectedClient = null;
      state.loading = false;
      state.error = null;
    },
    setFilters: (state, action) => {
        return {
          ...state,
          filters: action.payload,
        };
      },
  },
});

export const {
  setClients,
  setSelectedClient,
  setLoading,
  setError,
  clearClientState,
  setFilters,
} = clientSlice.actions;

export default clientSlice.reducer; 