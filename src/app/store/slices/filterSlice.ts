import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: [number, number];
  selectedColors: string[];
  selectedSizes: string[];
}

const initialState: FilterState = {
  priceRange: [100, 5000],
  selectedColors: [],
  selectedSizes: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSelectedColors: (state, action: PayloadAction<string[]>) => {
      state.selectedColors = action.payload;
    },
    setSelectedSizes: (state, action: PayloadAction<string[]>) => {
      state.selectedSizes = action.payload;
    },
  },
});

export const { setPriceRange, setSelectedColors, setSelectedSizes } =
  filterSlice.actions;
export default filterSlice.reducer;
