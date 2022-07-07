import React, { FunctionComponent, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Appointment } from "../shared/domain/appointment";
import { getAppointment } from "../shared/api/appointment";
import {
  StyledSection,
  StyledContainer,
} from "../shared/elements/layout.styled";
import { StyledAlert } from "../shared/elements/alert.styled";
import { useDataPuller } from "../shared/hooks/use-data-puller";
import { QueuedAppointment } from "../templates/view-appointment/queued-appointment/queued-appointment";
import { PickedAppointment } from "../templates/view-appointment/picked-appointment/picked-appointment";
import { CompletedAppointment } from "../templates/view-appointment/completed-appointment/completed-appointment";

type PageParams = {
  appointmentId: string;
};

const mapAppointmentViewComponent = (data: Appointment): JSX.Element => {
  if (data.completed) {
    return <CompletedAppointment appointment={data} />;
  }

  if (data.operator) {
    return <PickedAppointment appointment={data} />;
  }

  return <QueuedAppointment appointment={data} />;
};

export const ViewAppointmentPage: FunctionComponent = () => {
  const { appointmentId } = useParams<PageParams>();

  const pullAppointment = useCallback(async () => {
    if (!appointmentId) {
      throw new Error("Id is not provided");
    }

    const appointment = await getAppointment({ id: appointmentId });

    return {
      data: appointment,
      completed: appointment.completed,
      timeout: 15 * 1000,
    };
  }, [appointmentId]);

  const { data, error } = useDataPuller<Appointment, Error>(pullAppointment);

  return (
    <StyledContainer>
      {error && (
        <StyledSection>
          <StyledAlert size="m">{error.message}</StyledAlert>;
        </StyledSection>
      )}

      {data && (
        <StyledSection>{mapAppointmentViewComponent(data)}</StyledSection>
      )}
    </StyledContainer>
  );
};
