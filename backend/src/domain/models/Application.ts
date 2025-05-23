import { PrismaClient } from '@prisma/client';
import { Interview } from './Interview';

const prisma = new PrismaClient();

export class Application {
    id?: number;
    positionId: number;
    candidateId: number;
    applicationDate: Date;
    currentInterviewStep: number;
    notes?: string;
    interviews: Interview[]; // Added this line

    constructor(data: any) {
        this.id = data.id;
        this.positionId = data.positionId;
        this.candidateId = data.candidateId;
        this.applicationDate = new Date(data.applicationDate);
        this.currentInterviewStep = data.currentInterviewStep;
        this.notes = data.notes;
        this.interviews = data.interviews || []; // Added this line
    }

    async save() {
        const applicationData: any = {
            positionId: this.positionId,
            candidateId: this.candidateId,
            applicationDate: this.applicationDate,
            currentInterviewStep: this.currentInterviewStep,
            notes: this.notes,
        };

        if (this.id) {
            return await prisma.application.update({
                where: { id: this.id },
                data: applicationData,
            });
        } else {
            return await prisma.application.create({
                data: applicationData,
            });
        }
    }

    static async findOne(id: number): Promise<Application | null> {
        const data = await prisma.application.findUnique({
            where: { id: id },
        });
        if (!data) return null;
        return new Application(data);
    }

    static async findByCandidateId(candidateId: number): Promise<Application[]> {
        const data = await prisma.application.findMany({
            where: { candidateId: candidateId },
        });
        return data.map((applicationData: any) => new Application(applicationData));
    }

      static async updateStageByCandidateId(candidateId: number, currentInterviewStep: number) {
        try {
          return await prisma.application.updateMany({
            where: { candidateId },
            data: { currentInterviewStep },
          });
        } catch (error) {
          console.error('Error al actualizar la etapa de la aplicación:', error);
          throw new Error('Error al actualizar la etapa de la aplicación');
        }
      }
}
