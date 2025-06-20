import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Slice for Terraform Data
const terraformSlice = createSlice({
  name: 'terraform',
  initialState: {
    plan: null as any,
  },
  reducers: {
    setPlan: (state, action: PayloadAction<any>) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlan } = terraformSlice.actions;

// Main Redux Store
export const store = configureStore({
  reducer: {
    terraform: terraformSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
