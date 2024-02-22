export const joinClass = (...strings:string[]) => strings.join(" ");

export const cleanUpString = (str:string) => {
  let link = str.split(" ").join("_").toLowerCase()
  return link;
} // not realy needed but eh we shall see shell