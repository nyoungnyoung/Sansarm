import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface courseInfo {
  courseNo?: number;
  courseMtNm?: string;
  courseMtCd?: number;
  courseMtNo?: number;
  courseXCoords?: Array<number>;
  courseYCoords?: Array<number>;
  courseAbsDiff?: string;
  courseUptime?: number;
  courseDowntime?: number;
  courseLength?: number;
  courseLocation?: string;
}

export interface ItemInfo {
  courseName?: string;
  userAge?: number;
  userGender?: string;
  courseList: courseInfo[];
}

interface MainState {
  genderAge: ItemInfo[];
  easyCourse: ItemInfo[];
  normalCourse: ItemInfo[];
  hardCourse: ItemInfo[];
}

const initialState: MainState = {
  genderAge: [
    {
      userAge: 0,
      userGender: "",
      courseList: [],
    },
  ],
  easyCourse: [
    {
      courseList: [],
    },
  ],
  normalCourse: [
    {
      courseList: [],
    },
  ],
  hardCourse: [
    {
      courseList: [],
    },
  ],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeGenderAge: (state, action: PayloadAction<ItemInfo[]>) => {
      state.genderAge = action.payload;
    },
    changeEasyCourse: (state, action: PayloadAction<ItemInfo[]>) => {
      state.easyCourse = action.payload;
    },
    changeNormalCourse: (state, action: PayloadAction<ItemInfo[]>) => {
      state.normalCourse = action.payload;
    },
    changeHardCourse: (state, action: PayloadAction<ItemInfo[]>) => {
      state.hardCourse = action.payload;
    },
  },
});

export const {
  changeGenderAge,
  changeEasyCourse,
  changeNormalCourse,
  changeHardCourse,
} = mainSlice.actions;
export default mainSlice.reducer;