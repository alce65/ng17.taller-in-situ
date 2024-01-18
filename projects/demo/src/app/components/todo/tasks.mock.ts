import { Task } from '../../entities/task';

const TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Aprender Angular 17',
    isComplete: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Profundizar en RxJs',
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Aprender SQL',
    isComplete: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Profundizar en TypeScript',
    isComplete: false,
  },
];

export const getTasks = async () => TASKS;
