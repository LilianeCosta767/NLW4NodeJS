import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveysRepository";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { Request, Response } from "express";
import { SurveyUser } from "../models/SurveyUser";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UserRepository);
        const surveysRepository = getCustomRepository(SurveyRepository);
        const surveysUserRepository = getCustomRepository(SurveysUserRepository);

        // ver se o usuario existe
        const userAlreadyExists = await usersRepository.findOne({email});

        if(!userAlreadyExists) {
            return response.status(400).json({
                error: "User doesn't exists",
            });
        }

        const surveyAlreadyExists = await surveysRepository.findOne({id: survey_id})
        if(!surveyAlreadyExists) {
            return response.status(400).json({
                error: "Survey doesn't exists",
            })
        }

        // salvar as informações na tabela surveyUser
        const surveyUser = surveysUserRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        })
        await surveysUserRepository.save(surveyUser);
        
        // enviar email para o usuário
        return response.json(SurveyUser)
    }
}

export { SendMailController }