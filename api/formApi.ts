import getConfig from 'next/config';
import { IFormValues } from '../components/FormB/config';

const {
  publicRuntimeConfig: { BASE_URL },
} = getConfig();

const submitFormConfig: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

async function submitForm(values: IFormValues) {
  const response = await fetch(`${BASE_URL}/api/submission`, {
    ...submitFormConfig,
    body: JSON.stringify(values),
  });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}

const formApi = { submitForm };

export default formApi;
