import dateFnsFormat from "date-fns/format";
import * as locale from "date-fns/locale";

export default function formatWithDefaultFrench(date, format, options) {
  return dateFnsFormat(date, format, {
    locale: locale["fr"],
    ...options,
  });
}
