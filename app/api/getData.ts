import fsPromises from 'fs/promises';

export async function getData() {
  const jsonData = await fsPromises.readFile('./lib/catalogData.json', 'utf-8');
  const objectData = JSON.parse(jsonData);
  return objectData;
}
