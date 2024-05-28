import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeago = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const period = formatDistanceToNow(date);
    timeago = `${period} ago`;
  }
  return <span>{timeago}</span>;
};

export default TimeAgo;
