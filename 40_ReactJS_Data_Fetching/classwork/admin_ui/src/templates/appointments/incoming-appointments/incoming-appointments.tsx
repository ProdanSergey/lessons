import React, { FunctionComponent, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppointmentCard } from "../../../components/appointment-card";
import { UserContext } from "../../../context/user";
import { pickAppointment } from "../../../shared/api/appointment";
import { Appointment } from "../../../shared/domain/appointment";
import { StyledAlert } from "../../../shared/elements/alert.styled";
import { StyledButton } from "../../../shared/elements/button.styled";
import { useAsyncHandler } from "../../../shared/hooks/use-async-handler";
import {
  StyledItem,
  StyledList,
  StyledCardContainer,
} from "./incoming-appointments.styled";

export type IncomingAppointmentsProps = {
  appointments: Appointment[];
};

type IncomingAppointmentProps = {
  appointment: Appointment;
};

const IncomingAppointment: FunctionComponent<IncomingAppointmentProps> = ({
  appointment,
}) => {
  const { user } = useContext(UserContext);

  const { data, error, isLoading, asyncHandler } = useAsyncHandler<
    undefined,
    Error
  >(async () => {
    if (!user) {
      throw new Error("Not Authorized");
    }

    return pickAppointment(
      {
        id: appointment.id,
      },
      user
    );
  });

  if (data !== null) {
    return <Navigate to={appointment.id} />;
  }

  return (
    <StyledItem>
      <StyledCardContainer>
        <AppointmentCard appointment={appointment} />
        <StyledButton disabled={isLoading} onClick={asyncHandler}>
          Pick
        </StyledButton>
      </StyledCardContainer>
      {error && <StyledAlert size="s">{error.message}</StyledAlert>}
    </StyledItem>
  );
};

export const IncomingAppointments: FunctionComponent<
  IncomingAppointmentsProps
> = ({ appointments }) => {
  return (
    <>
      <header>
        <h2>Available appointments:</h2>
        <p>
          <em>Press &quot;Pick&quot; to process one</em>
        </p>
      </header>
      <StyledList>
        {appointments.map((appointment) => (
          <IncomingAppointment key={appointment.id} appointment={appointment} />
        ))}
      </StyledList>
    </>
  );
};
