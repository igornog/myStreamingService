import InitialState, { UpdateSelectorAction } from "./types/selector";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
  showId: '',
  showName: '',
  episodeId: '',
  episodeName: '',
};

export const selectorSlice = createSlice({
  name: UpdateSelectorAction,
  initialState: initialState,
  reducers: {
    setShowID: (state, action: PayloadAction<string>) => {
      state.showId = action.payload;
    },
    setShowName: (state, action: PayloadAction<string>) => {
      state.showName = action.payload;
    },
    setEpisodeID: (state, action: PayloadAction<string>) => {
      state.episodeId = action.payload;
    },
    setEpisodeName: (state, action: PayloadAction<string>) => {
      state.episodeName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowID, setShowName, setEpisodeID, setEpisodeName } =
  selectorSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default selectorSlice.reducer;