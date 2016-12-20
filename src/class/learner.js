
/*********************
  ____ ___ ____ _   _    _    _
 / ___|_ _/ ___| \ | |  / \  | |
 \___ \| | |  _|  \| | / _ \ | |
  ___) | | |_| | |\  |/ ___ \| |___
 |____/___\____|_| \_/_/   \_\_____|

 *********************/
class Signal{

    /***************************
     *
     ***************************/
    constructor( { weight = .1, value = 1}){
      this.weight = weight;
      this.value  = value;
    }

}


/*********************
  _     _____    _    ____  _   _ _____ ____
 | |   | ____|  / \  |  _ \| \ | | ____|  _ \
 | |   |  _|   / _ \ | |_) |  \| |  _| | |_) |
 | |___| |___ / ___ \|  _ <| |\  | |___|  _ <
 |_____|_____/_/   \_\_| \_\_| \_|_____|_| \_\

 *********************/
class Learner{

    /**
     *
     */
    constructor( { signals = [], threshold = 1, action = function(){ return true}}){

      this.signals   = signals;
      this.threshold = threshold;
      this.action    = action;
      this.sum       = 0;

    }

    /**
     *
     */
    addSignal( oSignals){
      this.signals.push( oSignals);
      return this;
    }

    /**
     *
     */
    launch(){

      if( this._isReady()){
        this.action.call(null, this.signals, this.sum);
      }
    }

    /**
     *
     */
    _isReady(){

      this.sum = 0;

      this.sum = this.signals.reduce( function( iResult, oSignal) {

                var weight = oSignal.weight,
                    value  = oSignal.value;

                return iResult + (weight * value);

            }, 0);

      return this.sum >= this.threshold;

    }
}

/**
 *
 */
export {
  Learner,
  Signal
}
