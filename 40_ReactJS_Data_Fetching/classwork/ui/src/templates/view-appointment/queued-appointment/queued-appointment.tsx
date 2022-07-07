import React, { useState, FunctionComponent, useEffect } from "react";
import { Appointment } from "../../../shared/domain/appointment";
import {
  StyledCountdown,
  StyledLabel,
  StyledOutput,
} from "./queued-appointment.styled";

const formatMoment = (start: string, moment: Date): string => {
  return "time since start";
};

type QueueTimerProps = {
  start: string;
};

const QueueTimer: FunctionComponent<QueueTimerProps> = ({ start }) => {
  // update moment each 15 sec

  return (
    <div>
      <span>Queued:</span>{" "}
      <StyledCountdown dateTime={start}>
        {formatMoment(start, moment)}
      </StyledCountdown>
    </div>
  );
};

export type QueuedAppointmentProps = {
  appointment: Appointment;
};

export const QueuedAppointment: FunctionComponent<QueuedAppointmentProps> = ({
  appointment,
}) => {
  const { ticket, created_at } = appointment;

  return (
    <div>
      <StyledLabel>Your ticket:</StyledLabel>
      <StyledOutput>{ticket}</StyledOutput>
      <QueueTimer start={created_at} />
    </div>
  );
};
