import { Learner, Signal} from './class/learner.js';


var oLearner = new Learner({
    signals: [
                new Signal({ value: -0.2 }),
                new Signal({ weight: 0, value: 1 }),
                new Signal({ weight: 0.5, value: 0.8 })
              ],
    threshold: 0.3,
    action : ()=>{console.log('premier learner')}
});


var oLearner2 = new Learner({
    signals: [
                new Signal({ value: -0.2 }),
                new Signal({ weight: 0, value: 1 }),
                new Signal({ weight: 0.5, value: 0.8 })
              ],
    threshold: 0.5,
    action : ()=>{console.log('second learner')}
});

oLearner.launch();//OK
oLearner2.launch();//non
