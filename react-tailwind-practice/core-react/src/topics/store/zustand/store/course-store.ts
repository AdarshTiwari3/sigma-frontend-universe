import { create } from "zustand";
import type { StateCreator } from "zustand";

export interface Course {
  id: string;
  title: string;
}

export interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string) => void;
}

const courseStore: StateCreator<CourseStore> = (set) => ({
  courses: [{ id: "1", title: "react-core" }],

  addCourse: (course: Course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },

  removeCourse: (courseId: string) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
});

export const useCourseStore = create<CourseStore>(courseStore);
