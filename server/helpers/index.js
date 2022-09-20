const fs = require("fs");
const path = require("path");

const getFullPath = (fileName) =>
  path.join(__dirname, "..", "db", `${fileName}.json`);

exports.readDBFile = (fileName) => {
  const fullPath = getFullPath(fileName);
  return JSON.parse(fs.readFileSync(fullPath, { encoding: "utf-8" }));
};

exports.writeInDBFile = (fullPath, payload) => {
  fs.writeFileSync(fullPath, JSON.stringify(payload, null, 2));
};

exports.addInDBFile = (fileName) => {
  const fullPath = getFullPath(fileName);
  const previousPayload = this.readDBFile(fileName);

  return (payload) => {
    const lastId = previousPayload[previousPayload.length - 1]?.id || 0;
    payload.id = lastId + 1;
    payload.created_at = new Date().getTime();
    const payloadListUpdated = [...previousPayload, payload];
    this.writeInDBFile(fullPath, payloadListUpdated);
    return payloadListUpdated;
  };
};

exports.deleteInDBFile = (fileName) => {
  const fullPath = getFullPath(fileName);
  const previousPayload = this.readDBFile(fileName);

  return (id) => {
    const payloadListUpdated = previousPayload.filter((p) => p.id !== id);
    this.writeInDBFile(fullPath, payloadListUpdated);
    return payloadListUpdated;
  };
};

exports.updateInDBFile = (fileName) => {
  const fullPath = getFullPath(fileName);
  const previousPayload = this.readDBFile(fileName);

  return (id, payload) => {
    const index = previousPayload.findIndex((p) => p.id === id);
    const outdatedPayload = previousPayload[index];
    const updatedPayload = { ...outdatedPayload, ...payload };
    previousPayload.splice(index, 1, updatedPayload);

    const payloadListUpdated = previousPayload;
    this.writeInDBFile(fullPath, payloadListUpdated);
    return payloadListUpdated;
  };
};
