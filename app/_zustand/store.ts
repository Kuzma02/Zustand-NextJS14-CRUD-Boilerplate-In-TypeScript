import { create } from "zustand";

export type Person = {
  id: number;
  name: string;
};

export type EditMode = {
  value: boolean;
  name: string;
  personId: number;
};

export type State = {
  people: Person[];
  editMode: EditMode;
};

export type Actions = {
  addPerson: (newPerson: Person) => void;
  deletePerson: (id: number) => void;
  editPerson: (id: number, newName: string) => void;
  setEditMode: (id: number, name: string) => void;
  disableEditMode: () => void;
};

export const usePeopleStore = create<State & Actions>((set) => ({
  people: [
    {
      id: 1,
      name: "Alex",
    },
    {
      id: 2,
      name: "George",
    },
  ],
  editMode: {
    value: false,
    name: "",
    personId: -1,
  },
  addPerson: (newPerson) => {
    set((state) => {
      console.log(state);

      return { people: [...state.people, newPerson] };
    });
  },
  deletePerson: (id) => {
    set((state) => {
      console.log(state);

      state.people = state.people.filter((person: Person) => person.id !== id);
      return { people: state.people };
    });
  },
  editPerson: (id, newName) => {
    set((state) => {
      for (let i = 0; i < state.people.length; i++) {
        if (state.people[i].id === id) {
          state.people[i].name = newName;
        }
      }
      return { people: state.people };
    });
  },
  setEditMode: (id, name) => {
    set((state) => {
      state.editMode.value = true;
      state.editMode.personId = id;
      state.editMode.name = name;
      return { editMode: state.editMode };
    });
  },
  disableEditMode: () => {
    set((state) => {
      state.editMode.value = false;
      state.editMode.personId = -1;
      state.editMode.name = "";
      return { editMode: state.editMode };
    });
  },
}));
