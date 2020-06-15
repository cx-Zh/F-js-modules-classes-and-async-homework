import { ADDRESS, PORT, PATH } from "./constant";

function getURL() {
  return ADDRESS + ":" + PORT + PATH;
}
export { getURL as default };
