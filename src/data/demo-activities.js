// Demo tasks list for ToDo app
import { calChangeDay } from "../utils/calChangeDay";
import { getformattedDay } from "../utils/getformattedDay";

const toDay = getformattedDay(new Date());

export const todoList = [
  {
    day: calChangeDay(toDay, -2),
    tasks: [
      { id: 1, title: "Read a book", completed: true },
      { id: 2, title: "Walk 30 minutes", completed: false },
      { id: 3, title: "Prepare dinner", completed: true },

      { id: 4, title: "Take out the trash and recycling", completed: true },
      { id: 5, title: "Book a dentist appointment", completed: false },
      { id: 6, title: "Respond to all unread emails", completed: true },
      { id: 7, title: "Organize the garage", completed: false },
      { id: 8, title: "Finish the project", completed: true },
      {
        id: 9,
        title: "Practice speaking English for 30 minutes.",
        completed: true,
      },
    ],
    editable: {
      addNew: false,
      doneBtn: false,
      deleteBtn: false,
      incompletBtn: false,
    },
  },
  {
    day: calChangeDay(toDay, -1),
    tasks: [
      { id: 1, title: "Attend meeting", completed: true },
      { id: 2, title: "Workout", completed: true },
      { id: 3, title: "Call a friend", completed: true },

      { id: 4, title: "Book a dentist appointment", completed: true },
      { id: 5, title: "Vacuum the living room", completed: true },
      { id: 6, title: "Walk 30 minutes", completed: true },
      { id: 7, title: "Water the plants", completed: true },
      { id: 8, title: "Pay a bill online", completed: true },
      { id: 9, title: "Respond to all unread emails", completed: true },
    ],
    editable: {
      addNew: false,
      doneBtn: false,
      deleteBtn: false,
      incompletBtn: false,
    },
  },
  {
    day: toDay, // Today
    tasks: [
      { id: 1, title: "Finish project title", completed: true },
      { id: 2, title: "Check emails", completed: false },
      { id: 3, title: "Plan tomorrow", completed: false },
      { id: 4, title: "watch a podcast", completed: true },
      { id: 5, title: "Lear new words", completed: false },

      {
        id: 6,
        title: "Practice speaking English for 30 minutes",
        completed: true,
      },
      { id: 7, title: "Organize the garage", completed: true },
      { id: 8, title: "Listen to a new podcast episode", completed: true },
      { id: 9, title: "Mow the lawn", completed: true },
    ],
    editable: {
      addNew: true,
      doneBtn: true,
      deleteBtn: true,
      incompletBtn: true,
    },
  },
  {
    day: calChangeDay(toDay, 1),
    tasks: [
      { id: 1, title: "Grocery shopping", completed: false },
      { id: 2, title: "Read React tutorial", completed: false },
      { id: 3, title: "Cook lunch", completed: false },
      { id: 4, title: "Take out the trash and recycling", completed: false },
      { id: 5, title: "Respond to all unread emails", completed: true },
    ],
    editable: {
      addNew: true,
      doneBtn: false,
      deleteBtn: true,
      incompletBtn: false,
    },
  },
  {
    day: calChangeDay(toDay, 2),
    tasks: [
      { id: 1, title: "Team meeting", completed: false },
      { id: 2, title: "Go for a run", completed: false },
      { id: 3, title: "Watch a documentary", completed: false },
      { id: 4, title: "Prepare dinner", completed: false },
      { id: 5, title: "Take out the trash", completed: false },
    ],
    editable: {
      addNew: true,
      doneBtn: false,
      deleteBtn: true,
      incompletBtn: false,
    },
  },
  {
    day: calChangeDay(toDay, 3),
    tasks: [
      { id: 1, title: "Clean room", completed: false },
      { id: 2, title: "Write blog post", completed: false },
      { id: 3, title: "Try a new recipe", completed: false },
    ],
    editable: {
      addNew: true,
      doneBtn: false,
      deleteBtn: true,
      incompletBtn: false,
    },
  },
];
