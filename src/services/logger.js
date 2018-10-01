import  Raven  from "raven-js";

const init=()=>{
    Raven.config("https://77240b117dd84752b828c7086541556e@sentry.io/1279886", {
        release: "1.0.0",
        environment: "development-test"
      }).install();
}

const capture=(error,extra)=>{
    Raven.captureException(error,extra);
}

export default{
    init,capture
}
