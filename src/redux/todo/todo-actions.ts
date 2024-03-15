import { createAction } from '@reduxjs/toolkit';

import { Option } from '../../components/select';

export const setTodoStatus = createAction<Option>('todo/setTodoStatus');
