let lastId = 2;

const newId = (prefix = "id") => {
  lastId++;
  return `${prefix}${lastId}`;
};

export default newId;
