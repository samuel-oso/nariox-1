import React from "react";
import "../styles/components/Tasks.css";
import { Button, Checkbox } from "@mantine/core";
import { tasksList } from "../data/data";

const Tasks = () => {
  return (
    <div className="taskCard">
      <div className="taskHeading">
        <h5
          style={{ color: "var(--bs-gray-dark)" }}
          className="font-semibold mb-0 "
        >
          TASKS
        </h5>
        <Button>View All</Button>
      </div>

      {tasksList.map((props) => {
        return (
          <Checkbox
            className="taskCheckbox"
            label={
              <div>
                <h5>{props.h5}</h5>
                <p>{props.p}</p>
              </div>
            }
          />
        );
      })}
    </div>
  );
};

export default Tasks;
