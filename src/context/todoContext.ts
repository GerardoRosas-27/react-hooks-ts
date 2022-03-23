import { createContext } from 'react';
import { TodoContexProps } from '../interfaces/context';

export const TodoContext = createContext<TodoContexProps>({} as TodoContexProps);