import w20 from './w20/';

const currentTerm = 'w20';

const courseData = {
  w20: w20,
};

const currentTermData = courseData[currentTerm];

export { currentTerm, courseData, currentTermData };
