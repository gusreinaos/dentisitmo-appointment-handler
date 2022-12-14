/* eslint-disable prettier/prettier */
import {Appointment} from '../../Domain/Entities/Appointment';
import { IAppointmentRepository } from '../../Domain/Intefaces/IAppointmentRepository';
import { convertDate } from '../../Domain/Utils/convertDate';

export class editAppointmentCommand {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  public async editAppointment(userId: string, dentistId: string, requestId: string,issuance: string, date: string, newDate:string) {
    const convertedDate = convertDate(date)
    const checkDate = convertDate(newDate)
    //Generating UTC0 since it is the international date stored in the database
    const newAppointment = new Appointment(Number(userId), Number(dentistId), Number(requestId), Number(issuance), convertedDate);
    return await this.appointmentRepository.updateAppointment(newAppointment, checkDate);
  }
}
