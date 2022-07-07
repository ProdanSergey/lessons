import React, { useState, FunctionComponent, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

import { Appointment } from "../../../shared/domain/appointment";
import {
  StyledCountdown,
  StyledLabel,
  StyledOutput,
} from "./queued-appointment.styled";

const formatMoment = (start: string, now: Dayjs): string => {
  return dayjs(start).from(now);
};

type QueueTimerProps = {
  start: string;
};

const QueueTimer: FunctionComponent<QueueTimerProps> = ({ start }) => {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const update = () => {
      setNow(dayjs());
    };

    const timerId = setInterval(update, 15 * 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <span>Queued:</span>{" "}
      <StyledCountdown dateTime={start}>
        {formatMoment(start, now)}
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
