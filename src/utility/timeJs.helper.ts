import dayjs from 'dayjs' 
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'

// plugins

export const dayjsSetup = () => {
  dayjs.extend(relativeTime);
  dayjs.extend(utc)
  // extend from other plugins here
}