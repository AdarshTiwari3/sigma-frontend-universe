import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/topics/store/redux-toolkit/hook";
import {
  addCourse,
  removeCourse,
} from "@/topics/store/redux-toolkit/features/course-slice";
import { X } from "lucide-react";

const Course = () => {
  const dispatch = useAppDispatch();

  // Typed selector -> RootState inferred automatically
  const courses = useAppSelector((state) => state.courseStore.courses);
  //   const allState = useAppSelector((state) => state.courseStore);
  //   console.log("state=", allState);

  const [title, setTitle] = useState<string>("");

  return (
    <div className="p-4">
      <h2 className="pb-2">Courses</h2>

      <input
        type="text"
        className="bg-white rounded-md text-black text-sm px-2 py-1"
        value={title}
        placeholder="Enter course title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="ml-2 pl-2 pr-2 bg-green-700 rounded-sm cursor-pointer"
        onClick={() => {
          if (!title.trim()) return;
          dispatch(addCourse(title));
          setTitle("");
        }}
      >
        Add Course
      </button>

      <ul className="mt-4 space-y-2">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex items-center justify-between rounded-md bg-gray-800 px-4 py-2"
          >
            <div className="text-sm text-gray-200">
              <span className="font-semibold">ID:</span>{" "}
              <span className="text-gray-400">{course.id}</span>
              <span className="mx-2">|</span>
              <span className="font-semibold">Course:</span>{" "}
              <span>{course.title}</span>
            </div>

            <button
              onClick={() => dispatch(removeCourse(course.id))}
              className="flex items-center gap-1 rounded-md bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 transition"
            >
              <span>Remove</span>
              <X size={14} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
