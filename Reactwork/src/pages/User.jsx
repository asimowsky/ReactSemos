import { useOutletContext, useParams } from "react-router-dom";
import React from "react";

export const User = () => {
  const students = useOutletContext();
  const { id } = useParams();

  const student = students.find((student) => student.id.toString() === id);
  return (
    <div>
      User Page {id}
      <h2>ID: {id}</h2>
      <h2>Name: {student.name}</h2>
    </div>
  );
};
