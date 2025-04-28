import { Request, Response } from 'express';
import { addCandidate, findCandidateById } from '../../application/services/candidateService';
import { getCandidatesByPositionService, updateCandidateStageService } from '../../application/services/candidateService';

export const addCandidateController = async (req: Request, res: Response) => {
    try {
        const candidateData = req.body;
        const candidate = await addCandidate(candidateData);
        res.status(201).json({ message: 'Candidate added successfully', data: candidate });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: 'Error adding candidate', error: error.message });
        } else {
            res.status(400).json({ message: 'Error adding candidate', error: 'Unknown error' });
        }
    }
};

export const getCandidateById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const candidate = await findCandidateById(id);
        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' });
        }
        res.json(candidate);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getCandidatesByPosition = async (req: Request, res: Response) => {
  const positionId = parseInt(req.params.id, 10);

  if (isNaN(positionId)) {
    return res.status(400).json({ error: 'Invalid position ID format' });
  }

  try {
    const candidates = await getCandidatesByPositionService(positionId);
    if (candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for this position' });
    }
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCandidateStage = async (req: Request, res: Response) => {
  const candidateId = parseInt(req.params.id, 10);
  const { current_interview_step } = req.body;

  if (isNaN(candidateId)) {
    return res.status(400).json({ error: 'Invalid candidate ID format' });
  }

  if (typeof current_interview_step !== 'number') {
    return res.status(400).json({ error: 'Invalid current interview step format' });
  }

  try {
    await updateCandidateStageService(candidateId, current_interview_step);
    res.status(200).json({ message: 'Candidate stage updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { addCandidate };