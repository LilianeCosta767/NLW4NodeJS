import { EntityRepository, Repository } from 'typeorm';
import { SurveyUser } from '../models/SurveyUser';

// responsavel por se comunicar com o banco atraves do typeorm   
@EntityRepository(SurveyUser) 
class SurveysUserRepository extends Repository<SurveyUser> {}

export { SurveysUserRepository };