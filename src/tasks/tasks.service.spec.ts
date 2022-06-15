import { Test } from '@nestjs/testing';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
});

const mockUser = {
  username: 'Ariel',
  id: 'someID',
  password: 'somePass',
  tasks: [],
};

describe('Tasks Service', () => {
  let tasksService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TaskRepository);
  });

  describe('getTasks', () => {
    it('calls TaskRepository.getTasks and return the result', async () => {
      const result = await tasksService.getTasks(null, mockUser);
      tasksRepository.getTasks.mockResolvedValue('someValue');
      expect(result).toEqual('someValue');
    });
  });
});
