import React, { FunctionComponent } from "react";
import { Appointment } from "../../../shared/domain/appointment";

const formatMoment = (finish: string) => {
  return "DD/MM/YYYY at HH:mm:ss";
};

const formatOperator = (operator: Appointment["operator"]) => {
  if (!operator) return "";
  return `${operator.fullName}`;
};

export type CompletedAppointmentProps = {
  appointment: Appointment;
};

export const CompletedAppointment: FunctionComponent<
  CompletedAppointmentProps
> = ({ appointment }) => {
  const { updated_at, operator } = appointment;

  return (
    <div>
      <span>This appointment was completed</span>{" "}
      <time dateTime={updated_at}>{formatMoment(updated_at)}</time>{" "}
      <span>
        by <strong>{formatOperator(operator)}</strong>
      </span>
    </div>
  );
};
