
import ReactGA from "react-ga4";

const initializeGA = () => {
  // Replace with your Measurement ID
  // It ideally comes from an environment variable
  ReactGA.initialize("G-BVZKXGQEEF");
  // Don't forget to remove the console.log() statements
  // when you are done

};

const trackGAEvent = (category, action, label) => {

  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };