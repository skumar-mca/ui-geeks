import { QuestionIDType } from '../yals-question/yals-question.types';

export interface IQuestionnarieQuestionProps {
  questions: Array<any>;
  currentQuestionIndex: number;
  handleAnswer: (
    questionId: QuestionIDType,
    selectedOption: QuestionIDType | Array<QuestionIDType>
  ) => void;
  preSelected: QuestionIDType;
}
export interface IQuestionnaireProps {
  questions: Array<any>;
}
