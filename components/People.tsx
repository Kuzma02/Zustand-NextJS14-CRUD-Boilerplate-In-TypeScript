"use client";

import { Person, usePeopleStore } from "@/app/_zustand/store";
import React from "react";

const People = () => {
  const { people, deletePerson, setEditMode } = usePeopleStore();

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      {people && people.map((person: Person) => {
        return (
          <div
            key={person.id}
            className="flex flex-col w-[200px] text-center gap-y-1 p-2"
          >
            <p className="text-2xl">{person.name}</p>
            <button className="btn btn-primary" onClick={() => setEditMode(person.id, person.name)}>Edit</button>
            <button className="btn btn-warning" onClick={() => deletePerson(person.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default People;