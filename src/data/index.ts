import { Meal } from "src/types/meal";

export type ItemMealList = {
  title: string;
  data: Meal[];
}

export const MEALS_DATA: ItemMealList[] = [
  {
    title: '12.08.22',
    data: [{
      id: '1',
      name: 'Pizza',
      date: Date.now(),
      description: 'Pizza de calabresa',
      isDiet: true,
    }, {
      id: '2',
      name: 'Hamburguer',
      date: Date.now(),
      description: 'Hamburguer de frango',
      isDiet: false,
    }, {
      id: '3',
      name: 'Risotto',
      date: Date.now(),
      description: 'Risotto de frango',
      isDiet: false,
    }],
  },
  {
    title: '11.08.22',
    data: [{
      id: '1',
      name: 'Pizza',
      date: Date.now(),
      description: 'Pizza de calabresa',
      isDiet: true,
    }, {
      id: '2',
      name: 'Hamburguer',
      date: Date.now(),
      description: 'Hamburguer de frango',
      isDiet: false,
    }, {
      id: '3',
      name: 'Risotto',
      date: Date.now(),
      description: 'Risotto de frango',
      isDiet: true,
    }],
  },
  {
    title: '10.08.22',
    data: [{
      id: '1',
      name: 'Pizza',
      date: Date.now(),
      description: 'Pizza de calabresa',
      isDiet: true,
    }, {
      id: '2',
      name: 'Hamburguer',
      date: Date.now(),
      description: 'Hamburguer de frango',
      isDiet: true,
    }, {
      id: '3',
      name: 'Risotto',
      date: Date.now(),
      description: 'Risotto de frango',
      isDiet: true,
    }],
  },
  {
    title: '09.08.22',
    data: [{
      id: '1',
      name: 'Pizza',
      date: Date.now(),
      description: 'Pizza de calabresa',
      isDiet: false,
    }, {
      id: '2',
      name: 'Hamburguer',
      date: Date.now(),
      description: 'Hamburguer de frango',
      isDiet: false,
    }, {
      id: '3',
      name: 'Risotto',
      date: Date.now(),
      description: 'Risotto de frango',
      isDiet: true,
    }],
  },
  {
    title: '08.08.22',
    data: [{
      id: '1',
      name: 'Pizza',
      date: Date.now(),
      description: 'Pizza de calabresa',
      isDiet: false,
    }, {
      id: '2',
      name: 'Hamburguer',
      date: Date.now(),
      description: 'Hamburguer de frango',
      isDiet: true,
    }, {
      id: '3',
      name: 'Risotto',
      date: Date.now(),
      description: 'Risotto de frango',
      isDiet: false,
    }],
  },
  {
    title: '07.08.22',
    data: [{
      id: '1',
      name: 'Pizza',
      date: Date.now(),
      description: 'Pizza de calabresa',
      isDiet: true,
    }, {
      id: '2',
      name: 'Hamburguer',
      date: Date.now(),
      description: 'Hamburguer de frango',
      isDiet: true,
    }, {
      id: '3',
      name: 'Risotto',
      date: Date.now(),
      description: 'Risotto de frango',
      isDiet: false,
    }],
  },
];