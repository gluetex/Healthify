import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

interface Question {
  type: 'multiple-choice' | 'input';
  question: string;
  answer: string | number | null;
  choices?: string[];
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  questions: Question[] = [
    {
      type: 'multiple-choice',
      question: 'How would you rate your overall mood today? (1-Bad, 5-Good)',
      answer: null,
      choices: ['1', '2', '3', '4', '5'],
    },
    {
      type: 'multiple-choice',
      question: 'How well did you sleep last night? (1-Bad, 5-Good)',
      answer: null,
      choices: ['1', '2', '3', '4', '5'],
    },
    {
      type: 'multiple-choice',
      question: 'How would you rate your ability to concentrate and focus today? (1-Not Focused, 5-Focused)',
      answer: null,
      choices: ['1', '2', '3', '4', '5'],
    },
    {
      type: 'multiple-choice',
      question: 'How would you rate your overall energy level today (1-Not Energetic, 5-Energetic)',
      answer: null,
      choices: ['1', '2', '3', '4', '5'],
    },
    {
      type: 'multiple-choice',
      question: 'How frequently have you been experiencing negative thoughts or self-critical thinking today? (1-Not Not Frequent, 5-Frequently)',
      answer: null,
      choices: ['1', '2', '3', '4', '5'],
    },
    {
      type: 'input',
      question: 'Are you feeling motivated and able to engage in activities today?',
      answer: null,
    },
    {
      type: 'input',
      question: 'Have you engaged in any self-care activities today (e.g., exercise, relaxation techniques, hobbies)?',
      answer: null,
    },
    {
      type: 'input',
      question: 'Have you experienced any significant stressors or triggers today? If yes, please provide details.',
      answer: null,
    },
    {
      type: 'input',
      question: 'Are you currently experiencing any physical symptoms related to stress or anxiety? If yes, please describe.',
      answer: null,
    },
    {
      type: 'input',
      question: 'Have you experienced any intense emotions (such as sadness, anxiety, anger) today? If yes, please specify.',
      answer: null,
    },
    {
      type: 'input',
      question: 'Have you noticed any changes in your appetite or eating habits today?',
      answer: null,
    },
    {
      type: 'input',
      question: 'Do you have any specific concerns or topics you would like to discuss with your healthcare provider during your next appointment?',
      answer: null,
    },
  ];

  updateAnswer(question: Question, answer: string | number | null) {
    question.answer = answer;
  }

  generateJSONDocument() {
    const data = {
      questions: this.questions,
    };

    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });

    saveAs(blob, 'survey_results.json');
  }
}