const chartData = [
  {
    name: 'Project 1',
    type: undefined,
    data: [
      {
        name: 'Initialisierung',
        start: Date.UTC(2021, 12, 1),
        end: Date.UTC(2021, 12, 16),
        y: 0,
        completed: 4.2,
      },
      {
        name: 'Meilenstein 1',
        start: Date.UTC(2021, 12, 21),
        y: 0,
        milestone: true,
      },
      {
        name: 'Konzept',
        start: Date.UTC(2021, 12, 27),
        end: Date.UTC(2022, 1, 19),
        y: 0,
        completed: 1,
      },
      {
        name: 'Meilenstein 2',
        start: Date.UTC(2022, 1, 25),
        y: 0,
        milestone: true,
      },
      {
        name: 'Realisierung',
        start: Date.UTC(2022, 1, 31),
        end: Date.UTC(2022, 3, 31),
        y: 0,
        completed: 0.89,
      },
      {
        name: 'Meilenstein 3',
        start: Date.UTC(2022, 4, 7),
        y: 0,
        milestone: true,
      },
      {
        name: 'Abschluss',
        start: Date.UTC(2022, 4, 13),
        end: Date.UTC(2022, 4, 20),
        y: 0,
        completed: 0,
      },
    ],
  },
  {
    name: 'Web-Projekt',
    type: undefined,
    data: [
      {
        name: 'Initialisierung',
        start: Date.UTC(2022, 1, 1),
        end: Date.UTC(2022, 2, 15),
        y: 1,
        completed: 1,
      },
      {
        name: 'Meilenstein 1',
        start: Date.UTC(2022, 2, 17),
        y: 1,
        milestone: true,
      },
      {
        name: 'Konzept',
        start: Date.UTC(2022, 2, 19),
        end: Date.UTC(2022, 4, 30),
        y: 1,
        completed: 1.1,
      },
      {
        name: 'Meilenstein 2',
        start: Date.UTC(2022, 5, 2),
        y: 1,
        milestone: true,
      },
      {
        name: 'Realisierung',
        start: Date.UTC(2022, 5, 4),
        end: Date.UTC(2022, 5, 31),
        y: 1,
        completed: 0.69,
      },
      {
        name: 'Meilenstein 3',
        start: Date.UTC(2022, 6, 4),
        y: 1,
        milestone: true,
      },
      {
        name: 'Abschluss',
        start: Date.UTC(2022, 6, 6),
        end: Date.UTC(2022, 6, 15),
        y: 1,
        completed: 0,
      },
    ],
  },
];

export default chartData;
