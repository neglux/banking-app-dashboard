const dayjs = require("dayjs");
const localizedFormat = require("dayjs/plugin/localizedFormat");

dayjs.extend(localizedFormat);
export const getCurrentTime = (format = "llll") => {
  return dayjs(undefined).format(format);
};
