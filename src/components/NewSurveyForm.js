import React from "react";
// import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewSurveyForm(props){

  const firestore = useFirestore();

  function addSurveyToFirestore(event) {
    event.preventDefault();

    //props.onNewSurveyCreation();

    return firestore.collection('surveys').add(
      {
        surveytitle: event.target.surveytitle.value,
        surveydesc: event.target.surveydesc.value,
        q1: event.target.q1.value,
        q1a1: event.target.q1a1.value,
        q1a2: event.target.q1a2.value,
        q1a3: event.target.q1a3.value,
        q2: event.target.q2.value,
        q2a1: event.target.q2a1.value,
        q2a2: event.target.q2a2.value,
        q2a3: event.target.q2a3.value,
        q3: event.target.q3.value,
        q3a1: event.target.q3a1.value,
        q3a2: event.target.q3a2.value,
        q3a3: event.target.q3a3.value
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={addSurveyToFirestore}
      buttonText="Add" />
    </React.Fragment>
  );
}

// NewSurveyForm.propTypes = {
//   onNewSurveyCreation: PropTypes.func
// };

export default NewSurveyForm;