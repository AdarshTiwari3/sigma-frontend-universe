import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "@/topics/store/redux-toolkit/features/course-slice";
export const store = configureStore({
  reducer: {
    courseStore: CourseReducer,
  },
});

/*
Exact inferred type of RootState 

type RootState = {
  courseStore: {
    courses: {
      id: string;
      title: string;
    }[];
  };
}
*/

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
/*
Exact inferred type of AppDispatch 

type AppDispatch = (
  action:
    | {
        type: "course/addCourse";
        payload: string;
      }
    | {
        type: "course/removeCourse";
        payload: string;
      }
    | ThunkAction<any, RootState, unknown, AnyAction>
) => any;

Important:
- AppDispatch is the TYPE OF THE dispatch FUNCTION
- It defines what dispatch CAN ACCEPT (actions + thunks)
- It does NOT represent an action type itself
*/

// RootState is used for selectors and AppDispatch is used for dispatch - purely for TypeScript type safety.
