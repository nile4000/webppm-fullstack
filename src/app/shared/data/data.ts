import { Project } from '../model/Project';

const chartData: Project[] = [
  {
    number: '0',
    name: 'Project 1',
    type: undefined,
    description: 'Project 1 description',
    data: [
      {
        name: 'Initialisierung',
        start: Date.UTC(2021, 12, 1),
        end: Date.UTC(2021, 12, 16),
        y: 0,
        completed: 1,
        milestone: false,
      },
      {
        name: 'Meilenstein Initialisierung',
        start: Date.UTC(2021, 12, 21),
        end: Date.UTC(2021, 12, 21),
        y: 0,
        completed: 0,
        milestone: true,
      },
      {
        name: 'Konzept',
        start: Date.UTC(2021, 12, 27),
        end: Date.UTC(2022, 1, 19),
        y: 0,
        completed: 1,
        milestone: false,
      },
      {
        name: 'Meilenstein Konzept',
        start: Date.UTC(2022, 1, 25),
        end: Date.UTC(2022, 1, 25),
        y: 0,
        completed: 0,
        milestone: true,
      },
      {
        name: 'Realisierung',
        start: Date.UTC(2022, 1, 31),
        end: Date.UTC(2022, 3, 31),
        y: 0,
        completed: 0,
        milestone: false,
      },
      {
        name: 'Meilenstein Realisierung',
        start: Date.UTC(2022, 4, 7),
        end: Date.UTC(2022, 4, 7),
        y: 0,
        completed: 0,
        milestone: true,
      },
      {
        name: 'Abschluss',
        start: Date.UTC(2022, 4, 13),
        end: Date.UTC(2022, 4, 20),
        y: 0,
        completed: 0,
        milestone: false,
      },
    ],
  },
  {
    number: '1',
    name: 'ABC Project',
    type: undefined,
    description: 'ABC Project Description',
    data: [
      {
        name: 'Initialisierung',
        start: Date.UTC(2022, 1, 1),
        end: Date.UTC(2022, 2, 15),
        y: 1,
        completed: 1,
        milestone: false,
      },
      {
        name: 'Meilenstein Initialisierung',
        start: Date.UTC(2022, 2, 17),
        end: Date.UTC(2022, 2, 17),
        y: 1,
        completed: 0,
        milestone: true,
      },
      {
        name: 'Konzept',
        start: Date.UTC(2022, 2, 19),
        end: Date.UTC(2022, 4, 30),
        y: 1,
        completed: 1,
        milestone: false,
      },
      {
        name: 'Meilenstein Konzept',
        start: Date.UTC(2022, 5, 2),
        end: Date.UTC(2022, 5, 2),
        y: 1,
        completed: 0,
        milestone: true,
      },
      {
        name: 'Realisierung',
        start: Date.UTC(2022, 5, 4),
        end: Date.UTC(2022, 5, 31),
        y: 1,
        completed: 0.69,
        milestone: false,
      },
      {
        name: 'Meilenstein Realisierung',
        start: Date.UTC(2022, 6, 4),
        end: Date.UTC(2022, 6, 4),
        y: 1,
        completed: 0,
        milestone: true,
      },
      {
        name: 'Abschluss',
        start: Date.UTC(2022, 6, 6),
        end: Date.UTC(2022, 6, 15),
        y: 1,
        completed: 1,
        milestone: false,
      },
    ],
  },
];

export default chartData;
