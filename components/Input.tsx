"use client";

import { usePeopleStore } from "@/app/_zustand/store";
import React, { FormEvent, useState } from "react";

const Input = () => {
  const { addPerson, disableEditMode, editMode, editPerson } = usePeopleStore();
  const [personInput, setPersonInput] = useState<string>("");

  const handleAddPerson = (e: FormEvent) => {
    e.preventDefault();
    addPerson({ id: Math.round(Math.random() * 1000), name: personInput  });
    setPersonInput("");
  };

  const handleEditPerson = (e: FormEvent) => {
    e.preventDefault();
    editPerson(editMode.personId, personInput);
    setPersonInput("");
    disableEditMode();

  }

  return (
    <form className="flex justify-center mt-5" onSubmit={editMode.value ? handleEditPerson : handleAddPerson}>
      <input
        type="text"
        value={personInput}
        onChange={(e) => setPersonInput(e.target.value)}
        placeholder="Enter persons name"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary text-white">{ editMode.value ? "Edit" : "Add"}</button>
    </form>
  );
};

export default Input;