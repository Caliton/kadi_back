// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Collaborator } from './collaborator.entity';
// import { CollaboratorService } from './collaborator.service';

// export type MockType<T> = {
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   [P in keyof T]?: jest.Mock<{}>;
// };

// export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
//   () => ({
//     findOne: jest.fn((entity) => entity),
//     // ...
//   }),
// );

// describe('CollaboratorService', () => {
//   let service: CollaboratorService;
//   let repositoryMock: MockType<Repository<Collaborator>>;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         CollaboratorService,
//         // Provide your mock instead of the actual repository
//         {
//           provide: getRepositoryToken(Collaborator),
//           useFactory: repositoryMockFactory,
//         },
//       ],
//     }).compile();
//     service = module.get<CollaboratorService>(CollaboratorService);
//     repositoryMock = module.get(getRepositoryToken(Collaborator));
//   });

//   it('asf', async () => {
//     const user = repositoryMock.findOne();
//     console.log(user);
//     expect(service.cachorro()).toBe(true);
//   });
// });
