import React from "react"
import { View, Text } from "react-native"
import { febrileText } from "Modules/FebrileInfant/config/strings"
import {
  DISCHARGE_CHECKLIST,
  DISPOSITION_RECCOMENDATION,
  DISPOSITION_RECCOMENDATION_1A,
  HIGH_RISK_RECOMMENDATION,
  HOSPITAL_ADMISSION,
  HOSPITAL_ADMISSION_1B,
  HOSPITAL_ADMISSION_1D,
  HOSPITAL_ADMISSION_RECOMMENDATION,
} from "../routes";
import styles from '../../../styles';

export const DISPOSITION_RECOMMENDATIONS_QUESTIONS = [
  {
    id: 1,
    question: 'Was obtained urinalysis positive?\nLeukoesterase +, or WBC >5/HPF',
    customUICondition: 1,
    customUI: (
      <View style={styles.infoContainer}>
        <Text>{febrileText.sevenTwentyEight.dispositionRecommendationsFirstQuestionText}</Text>
      </View>
    )
  },
  {
    id: 2,
    question: 'Home observation may be considered for well appearing infants including those with a positive urinalysis. Will patient observation be at home?'
  },
]

export const DISPOSITIONS_RECOMMENDATIONS_ANSWER_SETS = [

  {
    answers: [0, 1 ],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.second,
      routeName: DISCHARGE_CHECKLIST
    }
  },
  {
    answers: [1, 1 ],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.second,
      routeName: DISCHARGE_CHECKLIST
    }
  },
  {
    answers: [0, 0 ],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: HOSPITAL_ADMISSION_1D
    }
  },
  {
    answers: [1, 0 ],
    result: {
      routeTitle: febrileText.twentyNineSixty.buttonsRoutes.first,
      routeName: HOSPITAL_ADMISSION_RECOMMENDATION
    }
  },
]
