import {
  CreateTodoPayload,
  GetAllTodosPayload,
  PaginatedResponse,
  ReponseMessage,
  ResponseMessageWithData,
  Todo,
  TodoCount,
  UpdateTodoPayload,
} from '../types/http-service.type';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class TodoService {
  constructor(private httpService: HttpService) {}

  public async getAllTodos({
    status,
    take,
    skip,
  }: GetAllTodosPayload): Promise<PaginatedResponse<Array<Todo>>> {
    const response = await this.httpService.get<PaginatedResponse<Array<Todo>>>(
      `todo/${status}/?take=${take}&skip=${skip}`
    );

    return response;
  }

  public async getTodoById(id: string): Promise<Todo> {
    const response = await this.httpService.get<Todo>(`todo/${id}`);

    return response;
  }

  public async addTodo(payload: CreateTodoPayload): Promise<Todo> {
    const response = await this.httpService.post<Todo, CreateTodoPayload>(
      `todo/create`,
      payload
    );

    return response;
  }

  public async updateTodo(
    payload: UpdateTodoPayload
  ): Promise<ResponseMessageWithData<Todo>> {
    const response = await this.httpService.post<
      ResponseMessageWithData<Todo>,
      UpdateTodoPayload
    >(`todo/update`, payload);

    return response;
  }

  public async getTodoCount(): Promise<TodoCount> {
    const response = await this.httpService.get<TodoCount>(`todo/count`);

    return response;
  }

  public async deleteTodo(id: string): Promise<ReponseMessage> {
    const response = await this.httpService.delete<ReponseMessage>(
      `todo/${id}`
    );

    return response;
  }
}

const factory = new HttpFactoryService();

export const todoService = new TodoService(factory.createHttpService());
