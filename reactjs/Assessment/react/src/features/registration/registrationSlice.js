import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// FETCH
export const fetchRegistrations = createAsyncThunk(
  "registrations/fetch",
  async () => (await api.get("/")).data
);

// CREATE
export const addRegistration = createAsyncThunk(
  "registrations/add",
  async (data) => (await api.post("/", data)).data
);

// UPDATE
export const updateRegistration = createAsyncThunk(
  "registrations/update",
  async ({ id, data }) => (await api.put(`/${id}`, data)).data
);

// DELETE
export const deleteRegistration = createAsyncThunk(
  "registrations/delete",
  async (id) => {
    await api.delete(`/${id}`);
    return id;
  }
);

const registrationSlice = createSlice({
  name: "registrations",
  initialState: {
    list: [],
    status: "idle"
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistrations.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addRegistration.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateRegistration.fulfilled, (state, action) => {
        const index = state.list.findIndex(r => r.id === action.payload.id);
        state.list[index] = action.payload;
      })
      .addCase(deleteRegistration.fulfilled, (state, action) => {
        state.list = state.list.filter(r => r.id !== action.payload);
      });
  }
});

export default registrationSlice.reducer;
